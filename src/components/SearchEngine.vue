<template>
   <form @reset="onReset" ref="form_input" class="pure-form pure-form-stacked">
    <div class='part-one'>
      <div class="form-group search">
        <label for="exampleInputEmail1">Search:</label>
        <input type="text" class="form-control" v-model="term" aria-describedby="emailHelp" :placeholder="textInside" :disabled="!indexed">
      </div>
    </div>
    <div class='wrap-search'>
      <Pagination :items="results" :documents="documents"></Pagination>
    </div>
  </form>
</template>

<script>
import { 
  ref,
  watch,
  computed
} from "vue";
import { onMounted, onUnmounted } from 'vue';
import IndexWorker from '!!file-loader!../workers/index_lunr.js';
const worker = new Worker(IndexWorker);

import movies from '../assets/movies.json'
var lunr = require('lunr/lunr.js');
var idx;
import {confetiNow} from '../logic/confiti.js'
import Pagination from './Pagination.vue'

export default {
  name: 'SearchEngine',
  components: {
    Pagination
  },
  setup() {
    confetiNow()
    const form_input = ref(null);
    const term = ref('');
    const results = ref([]);
    const movies_length = ref(0);
    const current_idx = ref(0);
    const documents = movies;
    const indexed = ref(false)
    worker.onmessage = function (e) 
    //update our full text when the worker sends us its output when finished
    {
      if (e.data.type==='indexing'){
        current_idx.value = e.data.idx;
      }
      if (e.data.type ==='completed'){
        idx =  lunr.Index.load(JSON.parse(e.data.idx));
        worker.terminate(); 
        indexed.value = true;
       //kill the thread cos it no longer benefits us and must die
      }
    }
    movies_length.value = movies.length
    worker.postMessage({type: 'init', movies: movies});
    const textInside = computed(() => {
      if (current_idx.value === (movies_length.value-1) && indexed) {
        return "Enter text to search"
      }
      else{
        return `Indexing ${current_idx.value+1} of ${movies_length.value}`
      }

    })
    function createDebounce() {
      let timeout = null;
      return function (fnc, delayMs) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, delayMs || 500);
      };
    }
    watch(term, (val) => {
      let results_temp = idx.search(val);
      results.value = results_temp
    })
    
    onMounted(() => {
      console.log('form_input');
    })
    onUnmounted(() => {
      documents.value = []
    })
    return {
      form_input,
      term,
      idx,
      results,
      debounce: createDebounce(),
      current_idx, 
      movies_length,
      documents,
      indexed,
      textInside
    }
  }
}
</script>

<style scoped lang="sass">
.search
  display: flex
  align-items: center
  justify-content: center
.wrap-search
  flex-grow: 1
  flex: 1
</style>