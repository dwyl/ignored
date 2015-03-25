# ignored
Get a **list** of **entries** from your ***.gitignore*** **file**.

## Why?

In the [***faster***](https://github.com/ideaq/faster)
 project we are watching directories for changes,  
 but we want to ***ignore*** the files/directories
 listed in the ***.gitignore*** file.

## What?

This ultra-simple module simply ***parses*** your **.gitignore** file
and gives you an **list** (array) of the items it finds.

## Usage

### Install from [NPM](https://www.npmjs.com/package/ignored)

```sh
npm install ignored --save
```

### In Your Code

```js
var ignored = require('ignored')('../.gitignore'); // use .gitignore in parent dir
// use the array of .gitignore entries as desired
```
*We recommend* using this module ***Sync**hronously* once at the top of your file.  
(it only gets run once at the start-up of your project and only  
takes a couple of milliseconds, similar to a `require` call).

<br />
- - -

There are actually ***4 ways*** to use this module in your project:

#### 1. Sync (*Without* passing a .gitignore file as parameter)

The **simplest way** to use this module is to let it figure out where your
project's .gitignore file is and return the list ***syncronously*** at the
top of your script.

```js
// synchronous immediate invocation assigns the list to the ignored var directly
var ignored = require('ignored')(); // without param (we search for .gitignore)
// use the array of .gitignore entries as desired
```
***Note***: we only go *one* directory level up form the
*Current Working Directory* as *most*  
node projects have a *shallow*
directory structure e.g. put code in a **lib/** or **src/**.

#### 2. Sync (Specifying a .gitignore file as the only parameter)

This is the *recommended* way of using the module as you know *exactly*  
which .gitignore file you are using
(some projects have *multiple* .gitignore files!)

```js
// synchronous immediate invocation with a specific file supplied the only param
var ignored = require('ignored')('../.gitignore'); // use .gitignore in parent dir
// use the array of .gitignore entries as desired
```

#### 3. *Async* (*Without* passing a .gitignore file as parameter)

```js
// async without supplying a .gitignore file
var ignored = require('ignored')
ignored(function callback(err, list) { // callback is the only param!
  if(err){
    console.log(err); // handle errors in your preferred way.
  }
  else {
    console.log(list); // use the array of directories as required.
  }
});
// use the array of .gitignore entries as desired
```


#### 4. *Async* (Specifying a .gitignore file as first parameter)

```js
// async passing in a specific .gitignore file:
var ignored = require('ignored')
// use .gitignore in parent directory
ignored('../.gitignore', function callback(err, list) {
  if(err){
    console.log(err); // handle errors in your preferred way.
  }
  else {
    console.log(list); // use the array of directories as required.
  }
});
// use the array of .gitignore entries as desired
```


## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nelsonic/nelsonic/fork)

***All*** *contributions* are *welcome*.  
We have done our best to make this module functional, simple and easy to understand.  
If you spot an inefficiency or omission in the parser, please help us fix it!  
(*please create an [**issue**](https://github.com/nelsonic/ignored/issues) to inform us!*)

If anything is unclear please create an [**issue**](https://github.com/nelsonic/ignored/issues)
so we can help clarify.
