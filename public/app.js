/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // Variables and constants needed by Handlebars to create Template
  var source = $("#card-template").html();
  var template = Handlebars.compile(source); // ------------- PRINTING MUSIC DISCS ON SCREEN USING TEMPLATE --------------
  // This code should be run only for "vers-ajax" (to print on screen the music discs in the "index.html" file)
  // Checking if the tag "cards container" has children tags in its html

  if ($('#cards-container').children().length === 0) {
    // AJAX call to get all the discs (no filters)
    $.ajax({
      url: '../discs.php',
      method: 'GET',
      success: function success(results) {
        // Scrolling the array 'results' generated by the Ajax call
        for (var i = 0; i < results.length; i++) {
          // Accessing the properties of the objects in 'results'
          var context = {
            'poster': results[i].poster,
            'title': results[i].title,
            'author': results[i].author,
            'year': results[i].year
          }; // Storing the data in a variable and printing them on screen

          var html = template(context);
          $('#cards-container').append(html);
        }
      },
      error: function error() {
        console.log('ERROR. Sorry, something went wrong!');
      }
    });
  } // ---------------------------- FILTER BY GENRE ----------------------------
  // Intercepting the user's select choice


  $('#select-genre').change(function () {
    // Emptying the music discs cards container
    $('#cards-container').empty(); // Storing the value of the selected genre in a variable

    var selected_genre = $(this).val(); // AJAX call to get only the discs with the selected genre (genre filter)

    $.ajax({
      url: '../discs.php',
      method: 'GET',
      data: {
        genre: selected_genre // This data is needed to be passed to the PHP

      },
      success: function success(results) {
        // Scrolling the array 'results' generated by the Ajax call
        for (var i = 0; i < results.length; i++) {
          // Accessing the properties of the objects in 'results'
          var context = {
            'poster': results[i].poster,
            'title': results[i].title,
            'author': results[i].author,
            'year': results[i].year
          }; // Storing the data in a variable and printing them on screen

          var html = template(context);
          $('#cards-container').append(html);
        }
      },
      error: function error() {
        console.log('ERROR. Sorry, something went wrong!');
      }
    }); // End of AJAX call
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\boolean\php-ajax-dischi\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\boolean\php-ajax-dischi\src\app.scss */"./src/app.scss");


/***/ })

/******/ });