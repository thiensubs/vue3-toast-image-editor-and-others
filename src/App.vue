<template>
  <div class="pure-menu pure-menu-horizontal">
    <router-link class='pure-menu-heading pure-menu-link' to="/">DEMO SOME MINI APPLICATION</router-link>
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link class='pure-menu-link' to="/hello">Form with focus</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link class='pure-menu-link' to="/pdf-document">Pdf Document</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link class='pure-menu-link' to="/image-editor">Image Editor</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link class='pure-menu-link' to="/search-engine">Search Engine</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link class='pure-menu-link' to="/trix">Trix Editor</router-link>
        </li>
    </ul>
  </div>
  <main>
    <router-view></router-view>
  </main>
  
  <footer>FOOTER GOES HERE</footer>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
const Pace = require('pace-js/pace.min.js');
global.Pace=Pace;
export default {
  name: 'App',
  components: {
  },
  setup() {
    Pace.start()
    window.addEventListener("resize", setVh);
    window.addEventListener('load', setVh);
    onMounted(() => {
    })
    onUnmounted(() => {
      window.addEventListener("resize")
      window.addEventListener("load")
    })
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    return { 
      Pace,
      setVh 
    }
  }
}
</script>

<style lang="scss">
@import "~purecss/build/pure-min.css";
html {
  height: -webkit-fill-available;
}
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  position: relative;
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // min-height: 100% !important;
  // height: auto !important;
  max-height: 100% !important;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: calc(var(--vh, 1vh) * 100);
  position: absolute;
  width: 100%;
}
#the-canvas {
  border:1px solid black;
}

@media print {
  #app{
    margin-top: 0px;
  }
  .pure-menu{
    display: none !important;
  }
}
footer {
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
}
</style>
