var googleapis = require('googleapis');
var customsearch = googleapis.customsearch('v1');

var googleCx = '002131242026597912575:sy3wzsvmp-i'
var googleApiKey = 'AIzaSyDFkTOUcuRO7RFBM16G3H45unnmXIy5rZw'


function formatResuls(imageData){
  //console.log(JSON.stringify(imageData))
  var formated = {"url":imageData.link,"snippet":imageData.snippet}
  //console.log(JSON.stringify(imageData.pagemap.cse_thumbnail));
  if (imageData.pagemap.cse_thumbnail)
   {
     var thumbInfo = imageData.pagemap.cse_thumbnail;
     formated["thumbnail"] = thumbInfo[0].src
   }
  
  return formated
}

exports.searchImages = function (term, offset, resPerPage, cb){

        if (offset === undefined) {
          offset = 0
        }
        
        if (parseInt(offset)+parseInt(resPerPage) > 99 ){
          cb(new Error("Free Google Custom Search API doesn't allow results past 100!"))
          return
        }
        // free google custom search api doesn't return result pass 100
        var search = { cx: googleCx, q: term, auth: googleApiKey, num: resPerPage, start : parseInt(offset)+1, lowRange : 0,  highRange : 100 }
  
        
        //console.log(search);
        
        customsearch.cse.list(search, function (err, resp) {

          if (err) {
              console.log('An error occured', err)
              cb(err,null)
              return
          }
        // Got the response from custom search
        var json = [];
        //console.log('Result: ' + resp.searchInformation.formattedTotalResults);
        if (resp.items && resp.items.length > 0) {
          resp.items.map( function (item){
            var itemRes = formatResuls(item)
            //console.log('Item: ' + JSON.stringify(itemRes))
            json.push(itemRes)
          })
          }
        cb(null,json)
        })
}