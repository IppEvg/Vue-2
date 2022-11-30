<template>
  <div id="app">
    <nav>
      <router-link tag="button" to="/">Home</router-link>
      <router-link tag="button" to="/transport">+ Transport</router-link>
      <router-link tag="button" to="/entertainment">+ Entertainment</router-link>
      <router-link tag="button" to="/health">+ Health</router-link>
      <router-link tag="button" to="/food">+ Food</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
$bg-color_blue: #24476B;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;

}

nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;


    &.router-link-exact-active {
      color: #24476B;
    }
  }

  button {
    background-color: #6696cc2a;
    border-radius: 4px;
    border: 1px solid #6696cc2a;
    cursor: pointer;
    color: black;
    margin: 0 5px;

    &.router-link-exact-active {
      background-color: #3d75b43f;
      box-shadow: 0px 0px 3px 3px rgba(34, 60, 80, 0.2) inset;
    }
  }

  button:hover {
    box-shadow: 0px 0px 3px 3px rgba(34, 60, 80, 0.2) inset;
  }
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
  width: 80%;

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
