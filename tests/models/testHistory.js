var test = require('tape');

var history = require('../../app/models/history.js');

function count(obj) { return Object.keys(obj).length; }

test('Test history.historyByLatest structure', function (t) {

    history.logSearchQuery("Search 1", 1);
    history.logSearchQuery("Search 2", 2);
    history.logSearchQuery("Search 3", 3);
    
    history.historyByLatest(3, function(err, searches){
      if (err) {
         t.fail("historyByLatest failed error :" + err)
      }
      console.log(searches)
      t.equal(searches.length, 3, "Should return 3 entries.")
      var item = searches[0]
      t.equal(count(item), 3, "Each entry should have 3 keys/vals.")
      t.ok('searchTerm' in item, "has searchTerm.")
      t.ok('offset' in item, "has offset.")
      t.ok('date' in item, "has date.")
      t.end()
    })
})

test('Test history.logSearchQuery feature', function (t) {
  var term = "lol kitty"
  var offset = 10
  var res = history.logSearchQuery(term, offset);
  t.equal(res, undefined, "no error detected")
  history.historyByLatest(1, function(err, searches){
      if (err) {
         t.fail("historyByLatest failed error :" + err)
      }

      t.equal(searches.length, 1, "Should return 1 entries.")
      var item = searches[0]
      t.equal(item.searchTerm, term, "First entry searchTerm should be: " + term)
      t.equal(item.offset, 10, "First entry offset should be: " + offset)
      t.end()
    })
    
});