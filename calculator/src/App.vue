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
      <div class="checkboxes">
        <input type="checkbox" id="checkbox" v-model="add">
        <label for="checkbox">Auto add result to first operand</label>
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
      <div class="checkboxes">
        <input type="checkbox" id="checkboxKeys" v-model="checked">
        <label for="checkboxKeys">Show keyboard</label>
      </div>
      <div class="keyboardWindow" v-show="checked">
        <div class="keys">
          <button v-for="item,index of keys" v-bind:key="index" @click="redactOperand">{{item}}</button>
        </div>
        <div><span class="spans">Change an operand: </span></div>
        <div class="radio-place">
          <input type="radio" id="one" value="Один" v-model="picked">
          <label for="one">First</label>
          <input type="radio" id="two" value="Два" v-model="picked">
          <label for="two">Second</label>
        </div>
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
      result: "",
      checked: false,
      keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "DEL"],
      picked: "",
      add: false
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
      if (this.add) {
        this.operand1 = this.result;
      }

    },
    redactOperand(event) {
      if (this.picked == "Один") {
        if (event.target.innerText != 'DEL') {
          this.operand1 += event.target.innerText;
        } else {
          this.operand1 = this.operand1.slice(0, -1);
        }
      } else if (this.picked == "Два") {
        if (event.target.innerText != 'DEL') {
          this.operand2 += event.target.innerText;
        } else {
          this.operand2 = this.operand2.slice(0, -1);
        }

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
  width: 350px;
  height: max-content;
  margin: 0 auto;
  background-color: rgb(202, 206, 154);
  padding: 20px;
  border-radius: 10px;
}

.window {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 5px;
  border: 1px solid rgb(88, 55, 110);
  padding: 3px;
}

input {
  max-width: 80px;
  font-size: 15px;
  height: 20px;
  text-align: start;
}

.result {
  min-width: 90px;
  border: 2px solid rgb(88, 55, 110);
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: rgb(220, 221, 204);
  overflow: hidden;
}

button {
  min-width: 35px;
  min-height: 35px;
  margin: 3px;
  border-radius: 5px;
  border: 1px solid rgb(88, 55, 110);
  transition: 100ms;

}

.btn-result {
  min-width: 40%;
  min-height: 35px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid rgb(88, 55, 110);
}

button:hover {
  box-shadow: 0px 0px 10px -2px rgb(88, 55, 110, 0.8);
}

.sign {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px
}

.checkboxes {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.spans {
  font-size: 10px;
  display: flex;
}

.keyboardWindow {
  margin: 0 auto;
  width: 70%;
  border: 1px solid rgb(88, 55, 110);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.radio-place {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-left: 5px;

  input {
    margin: 2px;
  }
}
</style>
