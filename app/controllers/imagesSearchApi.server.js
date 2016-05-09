'use strict';

var history = require("../models/history.js")
var images = require("../models/images.js")



function ImagesSearchApi() {
   
   this.searchImages = function (req, res,next) {
        //console.log("getCode called")
        var searchQuery = req.params.term
    
        var offset = 0 
        if (req.query.offset){
          offset = req.query.offset
        }
        
        //console.log("Term: " + searchQuery)
        //console.log("Offset: " + offset)
        var resPerPage = 10;

        history.logSearchQuery(searchQuery, offset);
        
        images.searchImages(searchQuery, offset, resPerPage, function (err, imagesFound) {
          if (err) {
              console.log('An error occured', err)
              return next(err)
          }
          // Got the response from custom search
          res.writeHead(200, {'Content-Type': 'application/json'})
          if (imagesFound && imagesFound.length > 0) {
            res.end(JSON.stringify(imagesFound))
          }
        }) 

 
   }
   

  this.stats = function (req, res) {
    //console.log("Stats called for: ")
    history.historyByLatest( 10,  function(err, searches){
      if (err) {
          console.log(err)
          return res.status(400).json({"error":"This is not a valid URL"})
      }
      if (searches) {
        //console.log("Stats : " + JSON.stringify(searches))
        res.status(200).json(searches)
      } else {
      //console.log("Stats empty : ")
        res.status(400).json({})
      }
    })  
  }

}

module.exports = ImagesSearchApi;
