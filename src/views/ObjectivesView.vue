<template>
  <div class="obj bg">
    <div class="title">
      <div class="title-section gradient__text">
        <v-icon small class="mr-4"><MdiTargetIcon /></v-icon>
        <h1 class="title">Objectives</h1>
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
          <h1 class="section-title">Scope</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p class="bold">
              Creation and activation of an international structure (ANGIE
              network) to create:
            </p>
            <br />
            <ol>
              <li>
                messages for awareness on climate change and green transition
              </li>
              <br />
              <li>
                a GSP to give green competences to specialists and educators and
                stakeholders and changing their understanding on environment and
                changing their behaviour related to the green transition
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </section>

      <section>
        <div class="text-box">
          <h1 class="section-title">General Objectives</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <ol>
              <li>
                Creating awareness on the impact of the society on environment
                and support engagement in fight against climate change
              </li>
              <br />
              <li>Stimulating innovative learning and teaching practices</li>
              <br />
              <li>
                Supporting digital and green capabilities of the higher
                education sector
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </section>

      <section>
        <div class="text-box">
          <h1 class="section-title">Specific Objectives</h1>
        </div>
        <v-card>
          <v-card-text class="text-card">
            <p class="bold">
              Obj.1. Creating and boosting an academic network:
            </p>
            <ul>
              <li>to raise awareness on climate change</li>
              <li>change consciousness</li>
              <li>
                offer solutions for the transition to low-carbon footprint
                WATERIC processes.
              </li>
            </ul>
            <br />
            <p class="bold">
              Obj.2. Proposes the creation of a network that aims to:
            </p>
            <ul>
              <li>
                raise awareness on the climate change and necessity to boost the
                green transition of different pollutant sectors (WATERIC)
              </li>
              <li>
                improve the green competences of the educators from WATERIC
                sector, and of the specialists involved in the design and
                operation of systems acting in WATERIC sectors
              </li>
              <li>
                provide technical knowledge and skills on the green transition
                steps.
              </li>
            </ul>
            <br />
            <p class="bold">
              Obj.3. Proposes the creation and activation of a graduate study
              program dedicated to:
            </p>
            <ul>
              <li>
                providing competences in green transition for a sustainable
                environment
              </li>
              <li>
                providing improvement of the teaching skills of educators
                involved in the teaching (to specialists and stakeholders from
                WATERIC) the green technologies, to be able to boost the
                transition to sustainable society.
              </li>
            </ul>
            <br />
            <p class="bold">
              Obj.4. Cooperation of universities in common study program
            </p>
            <p>
              ANGIE network is a frame in which 8 universities are cooperating,
              acting as clusters that attracts specialists and institutes
              relevant for green transition.
            </p>
            <br />
            <p class="bold">
              Obj.5. Improve the existent competences in engineers and trainers,
              enhance career prospects and engage participants in actions
              related to replace actual to low-carbon footprint WATERIC
              processes.
            </p>
            <p>
              All will help the access of women to the WATERIC sectors and
              teaching by specific activities dedicated to them.
            </p>
          </v-card-text>
        </v-card>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import MdiTargetIcon from "@/assets/icons/MdiTargetIcon.vue";
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
  box-shadow: 16px 16px 0px 0px #006837;
  margin-bottom: 2rem;
}

.content {
  margin: 0 10rem;
}

section {
  margin-bottom: 5rem;
  .section-title {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: -1px -1px 0 #006837, 1px -1px 0 #006837, -1px 1px 0 #006837,
      1px 1px 0 #006837;
    margin: 0 0 0 1rem;
    padding-right: 20px;
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
  .section-title {
    font-size: 40px !important;
  }
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 30px;
    padding-right: 0;
  }
  .text-box {
    width: 18rem;
  }
  .section-title {
    font-size: 30px !important;
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

@media screen and (max-width: 350px) {
  .text-box {
    width: 15rem;
  }
  .text-card {
    padding: 0;
  }
}
</style>
