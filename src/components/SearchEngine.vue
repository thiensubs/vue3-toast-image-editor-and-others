<template>
   <form @reset="onReset" ref="form_input" class="pure-form pure-form-stacked">
    <div class='part-one'>
      <div class="form-group">
        <label for="exampleInputEmail1">Search:</label>
        <input type="text" class="form-control" v-model="term" aria-describedby="emailHelp" placeholder="Enter text to search">
      </div>
    </div>
    <ul>
      <li v-for="item in results" :key="item.ref">{{documents[item.ref].title}}</li>
    </ul>
  </form>
</template>

<script>
import { ref, watch} from "vue";
import { onMounted, onUnmounted } from 'vue';
import movies from '../assets/movies.json'
var lunr = require('lunr/lunr.js');
export default {
  name: 'SearchEngine',
  components: {
  },
  setup() {
    const form_input = ref(null);
    const term = ref('')
    const documents = movies;
    const results = ref([])
    const idx = lunr(function () {
      this.ref('index')
      // this.ref('name')
      this.field('title')
      this.field('overview')


      documents.forEach(function (doc, idx) {
        doc.index = idx
        this.add(doc)
      }, this)
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
      console.log(results_temp)
      results.value = results_temp
    })
    
    onMounted(() => {
      console.log('form_input');
    })
    onUnmounted(() => {
    })
    return {
      form_input,
      term,
      idx,
      documents,
      results,
      debounce: createDebounce(),
    }
  }
}
</script>

<style scoped lang="scss">

</style>