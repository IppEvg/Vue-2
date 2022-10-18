<template>
  <div id="app">
    <div class="wrapper">
      <h3>Simple calculator</h3>
      <div class="window">
        <input type="number" v-model="operand1" />
        <div class="sign">{{sign}}</div>
        <input type="number" v-model="operand2" />
        <div class="sign">=</div>
        <div class="result">{{result}}</div>
      </div>
      <div>
        <button @click="sign='+'">+</button>
        <button @click="sign='-'">-</button>
        <button @click="sign='*'">*</button>
        <button @click="sign='/'">/</button>
        <button @click="sign='x^2'"> x^2</button>
        <button @click="sign='x^y'"> x^y</button>
        <button @click="sign='DIV'">DIV</button>
      </div>
      <div>
        <button class="btn-result" @click="doOperation">=</button>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'App',
  data() {
    return {
      operand1: "",
      operand2: "",
      sign: "+",
      result: ""
    }
  },
  methods: {
    doOperation() {
      if (this.sign == '+') {
        this.result = (+this.operand1) + (+this.operand2);
      } else if (this.sign == '-') {
        this.result = (+this.operand1) - (+this.operand2)
      } else if (this.sign == '*') {
        this.result = (+this.operand1) * (+this.operand2);
      } else if (this.sign == '/') {
        this.result = (+this.operand1) / (+this.operand2);
      } else if (this.sign == 'x^2') {
        if (this.operand1) {
          this.result = (+this.operand1) * (+this.operand1);
          this.operand2 = "";
        } else if (this.operand2) {
          this.result = (+this.operand2) * (+this.operand2);
          this.operand1 = "";
        } else {
          this.result = 'введи операнд';
        }
      } else if (this.sign == 'DIV') {
        this.result = Math.floor((+this.operand1) / (+this.operand2));
      } else if (this.sign == 'x^y') {
        this.result = (+this.operand1) ** (+this.operand2);
      }

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

.wrapper {
  width: 335px;
  height: 300px;
  margin: 0 auto;
  background-color: rgb(202, 206, 154);
  padding: 20px;
  border-radius: 10px;
}

.window {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 20px;
  border: 1px solid rgb(88, 55, 110);
  padding: 3px;
}

input {
  max-width: 80px;
  font-size: 15px;
  height: 20px;
}

.result {
  min-width: 90px;
  border: 2px solid rgb(88, 55, 110);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 221, 204);
}

button {
  min-width: 35px;
  min-height: 35px;
  margin: 3px;
  border-radius: 5px;
  border: 1px solid rgb(88, 55, 110);
}

.btn-result {
  min-width: 40%;
  min-height: 35px;
  margin: 3px;
  border-radius: 5px;
  border: 1px solid rgb(88, 55, 110);
}

button:hover {
  box-shadow: 0px 0px 10px -2px rgb(88, 55, 110, 0.8);
}

.sign {
  margin: 5px;
}
</style>
