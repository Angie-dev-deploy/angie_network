<template>
  <div ref="mapContainer"></div>
</template>

<script lang="ts" setup>
import * as d3 from "d3";
import { ref, onMounted } from "vue";

const mapContainer = ref(null);

// Create a basic world map using D3.js
const createMap = () => {
  const svgWidth = window.innerWidth > 800 ? 800 : window.innerWidth;
  const svgHeight = window.innerWidth > 800 ? 400 : window.innerWidth / 2;

  const svg = d3
    .select(mapContainer.value)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Set border-radius for mapContainer
  mapContainer.value.style.borderRadius = "10px";

  const projection = d3
    .geoNaturalEarth1()
    .scale(svgWidth / 1.5)
    .translate([svgWidth / 4, svgHeight * 1.6]);

  // Load external data and draw the map
  d3.json(
    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
  )
    .then((data: any) => {
      // Draw the map
      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("fill", (feature: any) => {
          // Change the color for specific countries
          switch (feature.properties.name) {
            case "Romania":
              return "#E3342F";
            case "Austria":
              return "#9561E2";
            case "Spain":
              return "#6574CD";
            case "Portugal":
              return "#FFED4A";
            case "Slovenia":
              return "#38C172";
            case "Italy":
              return "#3490DC";
            case "Germany":
              return "#F6993F";
            case "Slovakia":
              return "#4DC0B5";
            default:
              return "#5c6468";
          }
        })
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "#fff");
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });

  // React to window resize
  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth > 800 ? 800 : window.innerWidth;
    const newHeight = window.innerWidth > 800 ? 400 : window.innerWidth / 2;

    svg.attr("width", newWidth).attr("height", newHeight);

    // Adjust the projection parameters accordingly
    projection.scale(newWidth / 1.5).translate([newWidth / 4, newHeight * 1.6]);

    // Redraw the map
    svg.selectAll("path").attr("d", d3.geoPath().projection(projection));
  });
};

onMounted(() => {
  createMap();
});
</script>

<style lang="scss" scoped>
/* Add any styling for your map container if needed */
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin: 20px;
}

/* Responsive styling for smaller screens */
@media (max-width: 600px) {
  #app {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
}
</style>
