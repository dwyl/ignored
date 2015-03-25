var test  = require('tape');
var chalk = require('chalk');
var red = chalk.red, green = chalk.green, cyan = chalk.cyan;
var path     = require('path');

// test(cyan('SYNC: Return error we cannot find any .gitignore file'), function (t) {
//   var ignored = require('./')(); // no .gitignore file supplied, we attempt to find it!
//   listdirs(invalid, function(err, list) {
//     console.log(err);
//     var errmsg = "Error: basedir param must be a valid directory."
//     t.equal(err, errmsg, green("✓ ")+ red(errmsg) +green(" (as expected!)") )
//     t.equal(list.length, 0, green("✓ "+invalid + " is NOT a directory. no further action possible."));
//     t.end();
//   });
// });



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
