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
    </ul>
  </div>
  <router-view></router-view>
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
  
    onMounted(() => {
      console.log('aaa')
    })
    onUnmounted(() => {
    })
    return { 
      Pace, 
    }
  }
}
</script>

<style scoped lang="scss">
@import "~purecss/build/pure-min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#the-canvas {
  border:1px solid black;
}
</style>
