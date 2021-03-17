<template>
  <div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">DEMO SOME MINI APPLICATION</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
            <a href="hello" class="pure-menu-link">Form with focus</a>
        </li>
        <li class="pure-menu-item">
            <a href="pdf-document" class="pure-menu-link">Pdf Document</a>
        </li>
        <li class="pure-menu-item">
            <a href="image-editor" class="pure-menu-link">Image Editor</a>
        </li>
        <li class="pure-menu-item">
            <a href="search-engine" class="pure-menu-link">Search Engine</a>
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
}
main {
  flex: 1;
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
