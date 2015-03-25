var test  = require('tape');
var chalk = require('chalk');
var red   = chalk.red, green = chalk.green, cyan = chalk.cyan;
var path  = require('path');

test(cyan('SYNC: no .gitignore file passed as param'), function (t) {
  var ignored = require('../')(); // no .gitignore file supplied, we attempt to find it!

  // console.log(ignored.length);
  // var errmsg = "Error: basedir param must be a valid directory."
  // t.equal(err, errmsg, green("✓ ")+ red(errmsg) +green(" (as expected!)") )
  t.equal(ignored.length, 12, green("✓ SYNC call returns "+ ignored.length +" items."));
  t.end();

});


// test(cyan('ASYNC: using .gitignore file in parent dir'), function (t) {
//   var ignored = require('./'); // use the module's method asynchronously
//   ignored('../.gitignore', function(err, list) {
//     console.log(err);
//     // var errmsg = "Error: basedir param must be a valid directory."
//     // t.equal(err, errmsg, green("✓ ")+ red(errmsg) +green(" (as expected!)") )
//     t.equal(list.length, 8, green("✓ "+invalid + " is NOT a directory. no further action possible."));
//     t.end();
//   });
// });


// var invalid = path.join(__dirname +"/invalid");
// test(cyan('SYNC: Return error we cannot find any .gitignore file'), function (t) {
//   var ignored = require('./'); // no .gitignore file supplied, we attempt to find it!
//   ignored(invalid, function(err, list) {
//     console.log(err);
//     var errmsg = "Error: basedir param must be a valid directory."
//     t.equal(err, errmsg, green("✓ ")+ red(errmsg) +green(" (as expected!)") )
//     t.equal(list.length, 0, green("✓ "+invalid + " is NOT a directory. no further action possible."));
//     t.end();
//   });
// });
