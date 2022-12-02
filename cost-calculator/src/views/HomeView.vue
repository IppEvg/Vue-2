<template>
  <div id="main" class="mt-12">
    <div class="wrapp">
      <h2>My personal costs</h2>
      <div class="box">
        <div class="box_left">
          <button class="button mt-5" @click="changeShowAdder">Add new cost +</button>
          <costList></costList>
          <adderCost class="windowTemple" v-if="checkShowAdder"></adderCost>
        </div>
        <div class="box_right mt-5">
          <div class="grafic"></div>
          <div class="totalPrise">
            <h4 class="mt-2"> Total: {{ this.$store.getters.getTotalPrise }}</h4>
          </div>
          <div id="chart">
            <apexChartView></apexChartView>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import costList from "../components/cost-list.vue";
import adderCost from "../components/adder-cost.vue";
import apexChartView from "../components/apexchart.vue";
export default {
  name: 'HomeView',
  components: {
    costList, adderCost, apexChartView
  },
  methods: {
    changeShowAdder() {
      return this.$store.commit('showShowAdder', true);
    },
  },
  computed: {
    checkShowAdder() {
      return this.$store.getters.getShowAdder;
    }
  }
}
</script>

<style lang="scss"scoped>

</style>

