<template>
  <div id="app">
    <div class="wrapp">
      <h2>My personal costs</h2>
      <div class="box">
        <div class="box_left">
          <button class="button" v-on:click="changeShowAdder">Add new cost +</button>
          <costList :costs="list"></costList>
          <adderCost class="windowTemple" :items="list" v-on:addItem="addNewCost" v-if="showAdder"></adderCost>
          <div class="pagination">

          </div>
        </div>
        <div class="box_right"></div>

      </div>
    </div>
  </div>
</template>

<script>
import costList from "./components/cost-list.vue";
import adderCost from "./components/adder-cost.vue";

export default {
  name: 'App',
  data() {
    return {
      list: [],
      showAdder: false,
    }
  },
  components: {
    costList, adderCost
  },
  methods: {
    addNewCost(data) {
      this.list = [...this.list, data];
      this.showAdder = false;
    },
    changeShowAdder() {
      return this.showAdder = true;

    }
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        { id: 1, data: '22.10.2022', title: 'food', prise: 500 },
        { id: 2, data: '24.10.2022', title: 'transport', prise: 300 }
      ]
    }, 500);
  }

}
</script>

<style lang="scss">
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
  height: 500px;
  border: 2px solid #6696ccde;
  border-radius: 20px;
  background-color: #6696cc2a;
  padding: 10px;
  box-sizing: border-box;
  // background-image: url("./assets/wallet_PNG77065.png");
  background-position: center;
  background-size: cover;

}

.pagination {
  height: 40px;
}

.button {
  display: inline-block;
  background-color: #24476B;
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
  color: #24476B;
  border: 1px solid #24476B;
  transform: scale(1.01, 1.01);
}

.box_left {
  position: relative;
}

.windowTemple {
  background-color: #1b1609e8;
  width: 40%;
  height: 80%;
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

// #24476B синий #6696CC светло-синий #1B1609 шоколад #05040B сине-черный
</style>
