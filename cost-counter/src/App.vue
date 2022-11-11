<template>
  <div id="app">
    <div class="wrapp">
      <h2>My personal costs</h2>
      <div class="box">
        <div class="box_left">
          <button class="button" @click="changeShowAdder">Add new cost +</button>
          <costList></costList>
          <adderCost class="windowTemple" v-if="checkShowAdder"></adderCost>
        </div>
        <div class="box_right">
          <div class="grafic"></div>
          <div class="totalPrise">
            <h4> Total: {{ this.$store.getters.getTotalPrise }}</h4>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import costList from "./components/cost-list.vue";
import adderCost from "./components/adder-cost.vue";

export default {
  name: 'App',
  components: {
    costList, adderCost
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

<style lang="scss">
$bg-color_blue: #24476B;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1B1609;
  margin-top: 60px;
}

.wrapp {
  margin: 0 auto;
  max-width: 600px;
  height: 400px;
  border: 2px solid #6696ccde;
  border-radius: 20px;
  background-color: #6696cc2a;
  padding: 10px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;

}



.button {
  display: inline-block;
  background-color: $bg-color_blue;
  color: white;
  border: 1px solid white;
  box-shadow: 0px 0px 10px -2px #05040B;
  width: 30%;
  height: 25px;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s, border 0.5s;
}

.button:hover {
  background-color: white;
  color: $bg-color_blue;
  border: 1px solid $bg-color_blue;
  transform: scale(1.01, 1.01);
}

.box {
  display: flex;
  width: inherit;
  height: inherit;
}

.box_left {
  position: relative;
  height: 70%;
  width: 170%;
}

.box_right {
  border: 1px solid black;
  height: 70%;
  width: 100%;

  h4 {
    color: $bg-color_blue;
  }
}

.windowTemple {
  background-color: #1b1609e8;
  width: 40%;
  height: 105px;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0vh;
  right: 0;
  bottom: 0;
  margin: auto;

  input {
    width: 80%;
    margin: 1px 0;
    border-radius: 7px;
  }

  button {
    width: 60%;
    margin-top: 5px;
  }
}
</style>
