var fs   = require('fs');
var path = require('path');



/**
 * findgitignorefile does exactly what the name suggests;
 * find .gitignore file to parse. Takes a single parameter (callback).
 * @param {function} callback (Optiona)- called once we find a .gitignore file
 * (or if an error occurs). Your callback should have two arguments:
 *   @param {string} error - an error message or null if no errors.
 *   @param {array} list - a list of entries in the .gitignore
 */
function findgitignorefile(callback) {

}

/**
 * parsegitignore parses the contents of the .gitignore file we supply
 * Requires two parameters:
 * @param {string} gitignorestr - file descriptor e.g: ./.gitignore
 * @param {function} callback - called once we have a list of entries
 * (or if an error occurs). Your callback should have two arguments:
 *   @param {string} error - an error message or null if no errors.
 *   @param {array} list - a list of entries in the .gitignore
 */
function parsegitignore(gitignoredfile, callback) {

}


/**
 * sync is our synchronous fallback. it returns a List of entries given a
 * .gitignore file to parse. Requires one parameter:
 * @param {string} gitignorefile - file descriptor e.g: ./.gitignore
 * Note: there is no Public interface for this method! it gets called
 * when no callback method is supplied.
 */
function sync(gitignorefile) {
  var list = [];
  var str = fs.readFileSync(gitignorefile, 'utf8');
  var lines = str.split('\n');
  lines.forEach(function(line) {
    line = line.trim();
    if(line.charAt(0) === '#' || line.length === 0) {
      // ignore comment and empty lines
    }
    else {
      list.push(line);
    }
  });
  return list;
}

/**
 * ignored returns a List of entries given a .gitignore file to parse.
 * accepts two (optional) parameters:
 * @param {string} gitignorefile (Optional)- file descriptor e.g: ./.gitignore
 * @param {function} callback (Optional)- called once we have a list of entries
 * (or if an error occurs). Your callback should have two arguments:
 *   @param {string} error - an error message or null if no errors.
 *   @param {array} list - a list of entries in the .gitignore
 * Note: if gitignorefile is not supplied we attempt to find it by going
 * up the directory tree. If we still cannot find it, we return an error!
 */
module.exports = function ignored(gitignorefile, callback) {
  // check if the method was called sync or asyn by checking for callback
  if(!callback || typeof callback !== 'function') {
    if(!gitignorefile) { // attempt to find .gitignore file in parent dir:
      gitignorefile = path.resolve("./.gitignore");
      console.log("SYNC filename:"+gitignorefile);
      console.log(' '); // blank line
    } else {
      // we have the file so no need to resolve it
    }
    return sync(gitignorefile);
  }
  else {
    // next check if the gitignorefile parameter was supplied
    if(!gitignorefile) {
      findgitignorefile(function found(err, str){
        if(err) {
          callback(err, []);
        }
        else {
          return parsegitignore(str, callback);
        }
      });
    }
  }
  // // next check if the gitignorefile parameter was supplied
  // if(!gitignorefile) { // || typeof gitignorefile !== 'function') {
  //   // determine if the method was called without a callback
  //   if(!callback) { // called synchrnously
  //
  //   }
  //   else {
  //
  //   }
  //
  // }
}
