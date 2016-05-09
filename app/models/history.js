var db = require('../db/database.js')

var searchesDb = db.searches



// Format result
function formatHistory (item){
  var res  = {searchTerm : item.searchTerm,
            offset : item.offset,
            date : item.date 
  }
  return res
}

// log a SearchQuery
exports.logSearchQuery = function(terms, offset) {

        var date = new Date();        
        // save search query
        searchesDb.insert({searchTerm: terms, offset:offset, date : date  }, function(err, doc){
            if (err){
              console.log("Unable to save search query to searches db!")
              return err
              
            } 
            return undefined
        })
        
}


// Get all searches history
exports.all = function(cb) {
  db.fetch({}, cb)
}

// Get all search history by descending order, limited to n results
exports.historyByLatest = function(nresults, cb) {
  searchesDb.find({}).sort({ date: -1 }).limit(nresults).exec( function(err, searches){
      if (err) {
          console.log(err)
          cb(err,null)
      }
      if (searches) {
        var res = searches.map(formatHistory)
        cb(null,res)
      }
  })
}
