<template>
  <div class="pdf-document">
    <pdf-page
      v-for="page_single in pages"
      v-bind="{scale}"
      :key="page_single.pageNumber"
      :page="page_single"
    >
    </pdf-page>
  </div>
</template>

<script>
var pdfjsLib = require('pdfjs-dist/build/pdf')
global.pdfjsLib = pdfjsLib
window.pdfjsLib = pdfjsLib
import PDFJSWorker from '!!file-loader!pdfjs-dist/build/pdf.worker.min.js';
pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;

import PDFPage from './PDFPage.vue';
import {ref, watch} from 'vue'
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      default: 1.0,
    },
  },
  name: 'PDFDocument',
  component: {
    PDFPage,
  },
  setup(props) {
    let pdfDoc= ref(null)
    let pages = ref([])
    function initPDF(){
      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(props.url);
      loadingTask.promise.then(pdfDoc_ => {
        pdfDoc.value =pdfDoc_;
      })
    }
    initPDF()
    function assign_list(source_list){
      pages.value = source_list
    }
    watch(pdfDoc, (new_value) => {
      // pages = [];
      var array_pages = [];
      for (var i = 0; i < new_value.numPages; i++) {
        array_pages.push(i+1)
      }
      const promises = array_pages.map(number => new_value.getPage(number));
      Promise.all(promises).
        then(function (doc) {assign_list(doc)}).
        catch(function (err) {
          console.log(err);
        });
    })
   
    return {
     pdfDoc,
     pages,
     initPDF,
     assign_list
    };
  },
};
</script>

