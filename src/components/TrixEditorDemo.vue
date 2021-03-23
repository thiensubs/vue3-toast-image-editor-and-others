<template>
    <div class='trix-wrap'>
        <input :id="id" type="hidden" name="content" v-model="trixText">
        <!-- updated here -->
        <trix-editor :input="id"></trix-editor>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Trix from "trix";
import "trix/dist/trix.css";
import {confetiNow} from '../logic/confiti.js'
export default {
  name: 'TrixEditorDemo',
  setup() {
    confetiNow()
    const id = ref('trix_id');
    const trixText = ref('');
    onMounted(() => {
      console.log(Trix);
    })
    onUnmounted(() => {
        console.log('destroyed')
    })
    return {
        id,
        trixText
    }
  }
}
</script>
<style scoped lang="sass">
.trix-wrap
  flex-direction: column
  display: flex
  flex: 1
  height: 100%
  trix-editor
    flex: 1
    height: 100%
    overflow-y: auto
</style>