<template>
  <div class="obj bg">
    <div class="title">
      <div class="title-section gradient__text">
        <v-icon small class="mr-4"><MdiActivityIcon /></v-icon>
        <h1 class="title">Activities</h1>
      </div>
    </div>
    <v-divider
      :thickness="4"
      color="#3AB54A"
      class="mx-12 border-opacity-100 my-12"
    ></v-divider>
    <div class="content">
      <section>
        <div class="text-box">
          <h1 class="text">WP1: Management</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p>WP1/1.1: Coordination of own team</p>
            <br />
            <p>WP1/1.2: Quality assurance</p>
            <br />
            <p>WP1/1.3: Communication</p>
            <br />
            <p>WP1/1.4: Reporting</p>
          </v-card-text>
        </v-card>
      </section>

      <section>
        <div class="text-box">
          <h1 class="text">WP2: GSP Set-Up</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p class="bold">“Transition to Green for Sustainable Society”</p>
            <br />
            <p>
              WP2/2.1: Inventory of topics, analysis of topics, concluding on
              topics - according to revealed problems
            </p>
            <br />
            <p>
              WP2/2.2: Defining the competences to be acquired by the students
            </p>
            <br />
            <p>
              WP2/2.3: Defining the main structure of the new GSP: Curriculum -
              Number of contact hours - Credits
            </p>
            <br />
            <p>
              WP2/2.4+2.5: Designing the rules and methods regarding the
              pedagogy and communication and assessment
            </p>
          </v-card-text>
        </v-card>
      </section>

      <section>
        <div class="text-box">
          <h1 class="text">WP3: Piloting & Dissemination</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p>WP3/3.1: Pilot course C#1: "Fabrication vs. Environment"</p>
            <br />
            <p>
              WP3/3.2: Pilot course C#2: "Logistics and Transportation vs.
              Environment"
            </p>
            <br />
            <p>
              WP3/3.3: Pilot course C#3: "Wastes Management vs. Environment"
            </p>
            <br />
          </v-card-text>
        </v-card>
      </section>

      <section>
        <div class="text-box">
          <h1 class="text">WP4: Impact & Sustainability</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p>WP4/4.1: Elaboration of Guide for sustainability (GforS)</p>
            <br />
            <p>WP4/4.2: Elaboration of National Action Plans (NAPs)</p>
            <br />
            <p>WP4/4.3: Elaboration of Transnational Action Plan (TNAP)</p>
            <br />
          </v-card-text>
        </v-card>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import MdiActivityIcon from "@/assets/icons/MdiActivityIcon.vue";
</script>

<style scoped>
.text-card {
  font-size: 18px;
  margin: 2rem 4rem;
  line-height: 1.5rem;
}

.text-box {
  display: inline-block;
  background-color: #3ab54a;
  width: 45rem;
  box-shadow: 16px 16px 0px 0px #006837;
  margin-bottom: 2rem;
}

.content {
  margin: 0 10rem;
}

section {
  margin-bottom: 5rem;
  .text {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #006837;
    margin: 0 0 0 1rem;
  }
  .bold {
    font-weight: 600;
  }
}

.obj {
  padding-top: 4rem;
}

.bg {
  background: #e2dcde;
}

.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
}

.title-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;

  .v-img {
    margin: 0 20px;
    min-width: 100px;
  }
}

@media screen and (max-width: 990px) {
  .text-card {
    font-size: 16px;
    margin: 2rem;
  }
  .content {
    margin: 0 5rem;
  }
}

@media screen and (max-width: 770px) {
  .title {
    font-size: 50px;
  }
  .text-box {
    width: 20rem;
  }
  .text {
    font-size: 40px;
  }
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 30px;
    padding-right: 0;
  }
  .text-box {
    width: 15rem;
  }
  .text {
    font-size: 30px;
  }

  .title-section {
    .v-img {
      min-width: 80px !important;
    }
  }
  .content {
    margin: 0 2rem;
  }
  .text-card {
    font-size: 14px;
  }
}
</style>
