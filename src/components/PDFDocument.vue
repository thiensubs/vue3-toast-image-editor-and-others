<template>
  <div class="pure-button-group" role="group" aria-label="...">
    <button class="pure-button" :class="[form.type === 'url' ? 'pure-button-active' : '']" @click="form.type = `url` ">Show PDF URL</button>
    <button class="pure-button" :class="[form.type === 'file' ? 'pure-button-active' : '']" @click="form.type = 'file' ">Upload File</button>
  </div>
  <div class="form-input-url">
    <form @reset="onReset" ref="form_input" class="pure-form pure-form-stacked" @submit.prevent="onSubmit">
      <div class="form-group" v-show="form.type === 'url'">
        <label for="url">Url pdf address, example: https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf</label>
        <input type="text" class="form-control pure-u-1" id="url" v-model="form.url" ref="url" aria-describedby="emailHelp" placeholder="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf">
      </div>
      <fieldset class="pure-group" v-show="form.type === 'url'">
        <button type="submit" class="pure-button pure-button-primary pure-u-1-5">Submit</button>
      </fieldset>
      <fieldset class="pure-group" v-show="form.type === 'file'">
        <label for="file-pdf">Upload PDF File:</label>
        <input type="file" name='file-pdf'  accept="application/pdf" @change="onFilePicked" class="pure-button pure-button-primary pure-u-5-5">
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
      type: 'url'
    })
    const scale = ref(1.3)
    let pdfDoc= ref(null)
    let pages = ref([])
    function initPDF(){
      // Asynchronous download of PDF
      if (form.url.length){
        getBinaryData(form.url)
      }
      
    }
    function onFilePicked(event) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onload = evt => {
        let typedarray = new Uint8Array(evt.target.result);
        let loadingTask = pdfjsLib.getDocument(typedarray)
        loadingTask.promise.then(pdfDoc_ => {
          pdfDoc.value = pdfDoc_;
        })
      };
      reader.readAsArrayBuffer(file);
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
        xhr.withCredentials = true;
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
     form,
     onFilePicked
    };
  },
};
</script>
<style scoped lang="scss">
@import "~pdfjs-dist/web/pdf_viewer.css";
</style>
