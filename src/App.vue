<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <PDFDocument :url="url" :scale="scale"/>
  
  <div id="tui-image-editor" ref='editor' style="width: 100%;height: 100vh;"></div>
</template>

<script>
import { ref, reactive} from "vue";
import { onMounted, onUnmounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

import PDFDocument from './components/PDFDocument.vue'

var ImageEditor = require('tui-image-editor');

const Pace = require('pace-js/pace.min.js');
global.Pace=Pace;
export default {
  name: 'App',
  components: {
    HelloWorld,
    PDFDocument,
  },
  setup() {
    Pace.start();
    const url = ref('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf')
    const scale = ref(1)
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
     // initPDF()

    })
    onUnmounted(() => {
      console.log(editor)
    })
    return { useDefaultUI, options, editor, Pace, url, scale };
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
#the-canvas {
  border:1px solid black;
}
</style>
