<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div id="tui-image-editor" ref='editor' style="width: 100%;height: 100vh;"></div>
</template>

<script>
import { ref, reactive} from "vue";
import { onMounted, onUnmounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
var ImageEditor = require('tui-image-editor');
const Pace = require('pace-js/pace.min.js');
global.Pace=Pace;
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    Pace.start();
    const useDefaultUI = ref(true);
    const options = reactive({ 
      cssMaxWidth: 700,
      cssMaxHeight: 500,
    })
    const editor = ref(null)
    onMounted(() => {
     new ImageEditor(editor.value, {
          includeUI: {
               initMenu: 'filter',
               menuBarPosition: 'top'
           },
          cssMaxWidth: 700,
          cssMaxHeight: 500,
          selectionStyle: {
              cornerSize: 20,
              rotatingPointOffset: 70
          }
      });
     console.log(editor.value)
    })
    onUnmounted(() => {
      console.log(editor)
    })
    return { useDefaultUI, options, editor, Pace };
  }
}
</script>

<style scoped>
#tui-image-editor{
  height: 100vh !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
