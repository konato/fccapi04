var test = require('tape');

var images = require('../../app/models/images.js');

function count(obj) { return Object.keys(obj).length; }

var image1 = {}
var image2 = {}

test('Test Google Images Search with offset = 0', function (t) {

    images.searchImages( "Funny Dog", 0, 5,  function(err, images){
      if (err) {
         t.fail("Google image search failed error :" + err)
      }

      t.equal(images.length, 5, "Should return 5 entries.")
      var item = images[0]
      image1 = images[4]
      console.log(JSON.stringify(item))
      t.ok('url' in item, "has url.")
      t.ok('snippet' in item, "has snippet.")
      t.end()
    })
    
});

test('Test Google Images Search with offset = 4', function (t) {

    images.searchImages( "Funny Dog", 4, 5,  function(err, images){
      if (err) {
         t.fail("Google image search failed error :" + JSON.stringify(err))
      }

      t.equal(images.length, 5, "Should return 5 entries.")
      var item = images[0]
      image2 = item
      console.log(JSON.stringify(item))
      t.ok('url' in item, "has url.")
      t.ok('snippet' in item, "has snippet.")
      t.end()
    })
    
});

test('Test Same Search with different offset overlaping to see if 5 and 5 are the same', function (t) {

    t.equal(image1.url, image2.url, "urls should be the same.")
    t.end()
})

