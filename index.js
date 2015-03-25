var fs = require('fs');
/**
 * ignored returns a List of entries given a .gitignore file to parse.
 * accepts two (optional) parameters:
 * @param {string} gitignorefile (Optional)- file descriptor e.g: ./.gitignore
 * @param {function} callback (Optiona)- called once we have a list of entries
 * (or if an error occurs). Your callback should have two arguments:
 *   @param {string} error - an error message or null if no errors.
 *   @param {array} list - a list of entries in the .gitignore
 * Note: if gitignorefile is not supplied we attempt to find it by going
 * up the directory tree. If we still cannot find it, we return an error!
 */
module.exports = function ignored(gitignorefile, callback) {

}

/**
 * sync is our synchronous fallback. it returns a List of entries given a
 * .gitignore file to parse. Requires one parameter:
 * @param {string} gitignorefile - file descriptor e.g: ./.gitignore
 * Note: there is no Public interface for this method! it gets called
 * when no callback method is supplied.
 */
function sync(gitignoredfile) {

}

/**
 * findgitignore does exactly what the name suggests;
 * find .gitignore file to parse. Takes a single parameter (callback).
 * @param {function} callback (Optiona)- called once we find a .gitignore file
 * (or if an error occurs). Your callback should have two arguments:
 *   @param {string} error - an error message or null if no errors.
 *   @param {array} list - a list of entries in the .gitignore
 */
function gitignoredfile(callback) {

}
