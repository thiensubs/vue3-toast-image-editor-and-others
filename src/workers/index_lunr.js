(function ()
{
  self.importScripts
  (
    "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"
  );
  self.addEventListener
  (
    'message'
    , function (e)
    {
      if (e.data.type === 'init'){
        const documents = e.data.movies;
        const results = [];
        const idx = lunr(function () {
          this.ref('index')
          this.field('title')
          this.field('overview')
          documents.forEach(function (doc, idx) {
            doc.index = idx
            this.add(doc)
            self.postMessage({type: 'indexing', idx});
          }, this)
        })
        self.postMessage({type: 'completed', idx: JSON.stringify(idx.toJSON())});
      }
    }
    , false
  );
}());