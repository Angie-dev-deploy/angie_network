<template>
  <div class="fill-100 graph-wrapper" :id="'sld_div' + this.id">
    <div class="graph-container">
      <svg :width="svg_width" :height="svg_height">
        <rect :width="svg_width" :height="svg_height" class="border"></rect>
        <g :transform="transform" class="graph">
          <path
            v-for="line in lines"
            :key="line.id"
            :d="line.path"
            class="line"
          />
          <circle
            v-for="(point, index) in scatteredPoints"
            :key="index"
            :cx="point.x"
            :cy="point.y"
            r="10"
            :fill="point.color"
            @click="openDialog(point.color)"
          ></circle>
        </g>
      </svg>
    </div>

    <v-dialog max-width="400px" v-model="dialogVisible">
      <v-card>
        <v-card-title>Hello Message</v-card-title>
        <v-card-text>
          <p>{{ dialogMessage }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as d3 from "d3";
import constants from "@/shared/constants";

const uniNames = constants.universities.map((uni) => uni.name);

interface Line {
  id: string;
  path: string;
}

interface Point {
  id: number;
  x: number;
  y: number;
  color: string;
}

const isMobile = ref(window.innerWidth < 1200);

export default {
  name: "SldSvgD3",
  props: ["id"],
  setup(props: any) {
    const svgRef = ref(null);
    const svg_width = ref(isMobile.value ? 250 : 400);
    const svg_height = ref(isMobile.value ? 250 : 400);
    const transform = ref("translate(0,0)");

    // Define the specified colors for the 9 points in a clockwise order
    const pointColors = [
      "#E3342F",
      "#F6993F",
      "#FFED4A",
      "#38C172",
      "#4DC0B5",
      "#3490DC",
      "#6574CD",
      "#9561E2",
      "#F66D9B",
    ];

    const scatteredPoints = ref<Array<Point>>([]);
    const lines = ref<Array<Line>>([]);

    const dialogVisible = ref(false);
    const dialogMessage = ref("");

    const updateDimensions = () => {
      svg_width.value = window.innerWidth * 0.8;
      svg_height.value = window.innerHeight * 0.6;
      scatterPoints();
      updateLines();
    };

    const scatterPoints = () => {
      const width = svg_width.value;
      const height = svg_height.value;
      const numPoints = 9;

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4; // Adjust the radius as needed

      const points = [];
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({ id: i, x, y, color: pointColors[i] }); // Use the specified colors
      }
      scatteredPoints.value = points as any;
    };

    const updateLines = () => {
      const points = scatteredPoints.value;
      const linesData = [];

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const linePath = `M ${(points[i] as any).x} ${
            (points[i] as any).y
          } L ${(points[j] as any).x} ${(points[j] as any).y}`;
          linesData.push({ id: `line_${i}_${j}`, path: linePath });
        }
      }

      lines.value = linesData as any;
    };

    const openDialog = (color: any) => {
      dialogMessage.value = `Hi from ${uniNames[pointColors.indexOf(color)]}`;
      dialogVisible.value = true;
    };

    const closeDialog = () => {
      dialogVisible.value = false;
    };

    onMounted(() => {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateDimensions);
    });

    return {
      svgRef,
      svg_width,
      svg_height,
      transform,
      scatteredPoints,
      lines,
      dialogVisible,
      dialogMessage,
      openDialog,
      closeDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.fill-100 {
  width: 100%;
  height: 100%;
}

.graph-container {
  position: relative;
}

.border {
  fill: none;
  stroke: #000;
  stroke-width: 2px;
  rx: 24px; // Set the radius for rounded corners
  ry: 24px; // Set the radius for rounded corners
}

circle {
  cursor: pointer;
}

.line {
  fill: none;
  stroke: #000;
  stroke-width: 1px; // Adjust the line width as needed
}

.graph-wrapper {
  display: flex;
  justify-content: center;
}
</style>
