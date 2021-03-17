<template>
  <div id="tui-image-editor" ref='editor' style="width: 100%;height: 100vh;"></div>
</template>

<script>
import { ref, reactive} from "vue";
import { onMounted, onUnmounted } from 'vue';
import {confetiNow} from '../logic/confiti.js'

var ImageEditor = require('tui-image-editor');
export default {
  name: 'TuiImageEditor',
  components: {
  },
  setup() {
    confetiNow()
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
    })
    onUnmounted(() => {
    })
    return { useDefaultUI, options, editor }
  }
}
</script>

<style scoped lang="scss">
#tui-image-editor{
  height: calc(var(--vh, 1vh) * 100) !important;
  // height: 100vh !important;
}
</style>