<template>
  <div class="form-input-url">
    <form @reset="onReset" ref="form_input" class="pure-form pure-form-stacked" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="url">Url pdf address, example: https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf</label>
        <input type="text" class="form-control pure-u-1" id="url" v-model="form.url" ref="url" aria-describedby="emailHelp" placeholder="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf">
      </div>
      <fieldset class="pure-group">
        <button type="submit" class="pure-button pure-button-primary pure-u-1-5">Submit</button>
      </fieldset>
    </form>
  </div>
  <div class="pdf-document pdfViewer" v-if="pages.length > 0">
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
import {ref, watch, reactive} from 'vue'
import {confetiNow} from '../logic/confiti.js'

export default {
  name: 'PDFDocument',
  component: {
    PDFPage,
  },
  setup() {
    confetiNow()
    const form = reactive({
      url: "",
    })
    const scale = ref(1.3)
    let pdfDoc= ref(null)
    let pages = ref([])
    function initPDF(){
      // Asynchronous download of PDF
      if (form.url.length){
        getBinaryData(form.url)
        // var loadingTask = pdfjsLib.getDocument(form.url);
        // loadingTask.promise.then(pdfDoc_ => {
        //   pdfDoc.value = pdfDoc_;
        // })
      }
      
    }
    function onSubmit() {
      pdfDoc.value = null;
      initPDF()
    }
    initPDF()
    function assign_list(source_list){
      pages.value = source_list
    }
    function getBinaryData (url) {
        // body...
        var xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("Origin", window.location.hostname);
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function(e) {
            //binary form of ajax response,
            var loadingTask = pdfjsLib.getDocument(e.currentTarget.response);
            loadingTask.promise.then(pdfDoc_ => {
              pdfDoc.value = pdfDoc_;
            })
        };

        xhr.onerror = function  () {
            // body...
            alert("xhr error");
        }

        xhr.send();
    }
    watch(pdfDoc, (new_value) => {
      
      if (new_value===null)
        return 
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
     assign_list,
     onSubmit,
     scale,
     form
    };
  },
};
</script>
<style scoped lang="scss">
@import "~pdfjs-dist/web/pdf_viewer.css";
</style>
