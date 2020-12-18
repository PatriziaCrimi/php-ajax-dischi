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
  // ------------------- VARIABLES & CONSTANTS -------------------
  // Ajax variables
  var ajax_url = '../discs.php';
  var ajax_method = 'GET'; // ***** Variables and constants needed by Handlebars to create Template *****
  // To print music discs on screen

  var source_cards = $("#cards-template").html();
  var template_cards = Handlebars.compile(source_cards);
  /*
  // To print genres in the selection-options
  const source_options = $("#options-template").html();
  const template_options = Handlebars.compile(source_options);
  */
  // ------------------- FUNCTIONS -------------------
  // Error message when AJAX call fails

  function errorMessage() {
    console.log('ERROR. Sorry, something went wrong!');
    alert('ERROR. Sorry, something went wrong!');
  } // ------------- PRINTING MUSIC DISCS ON SCREEN USING TEMPLATE --------------
  // This code should be run only for "vers-ajax" (to print on screen the music discs in the "index.html" file)

  /*
  // OPTION 1 - Checking if the tag "cards container" has children tags in its html
  if($('#cards-container').children().length === 0) {
  }
  */

  /*
  // OPTION 2 - Checking if the ID given to the tag "body" only in the vers-ajax exists (if it exists, it has a "length")
  */


  if ($('#vers-ajax').length) {
    // AJAX call to get all the discs (no filters)
    $.ajax({
      url: ajax_url,
      method: ajax_method,
      success: function success(results) {
        // Creating an empty array for the music genres
        var genres_list = []; // Scrolling the array 'results' generated by the Ajax call

        for (var i = 0; i < results.length; i++) {
          // Storing the values to be printed in a variable
          var context_cards = {
            'poster': results[i].poster,
            'title': results[i].title,
            'author': results[i].author,
            'year': results[i].year
          }; // Storing the data in a variable and printing them on screen

          var html_cards = template_cards(context_cards);
          $('#cards-container').append(html_cards); // Storing the genre of the current disc in a variable

          var current_genre = results[i].genre; // Checking that the genre is not already in the genres array

          if (!genres_list.includes(current_genre)) {
            genres_list.push(current_genre);
          }
        } // End of the "for" loop
        // ---------------- Printing genres on screen ----------------
        // Scrolling the array of genres


        for (var _i = 0; _i < genres_list.length; _i++) {
          /*
          // ********** OPTION 1 - Using Handlebars **********
          // Storing the genres to be printed in a variable
          let context_options = {
            'genre': genres_list[i],
          };
          // Storing the data in a variable and printing them on screen
          let html_options = template_options(context_options);
          $('#select-genre').append(html_options);
          */
          // **********  OPTION 2 - Printing using jQuery & Template Literal **********
          $('#select-genre').append("\n            <option value=\"".concat(genres_list[_i], "\">").concat(genres_list[_i], "</option>\n            "));
        }
      },
      error: function error() {
        errorMessage();
      }
    });
  } // ---------------------------- FILTER BY GENRE ----------------------------
  // Intercepting the user's choice in the select of genres


  $('#select-genre').change(function () {
    // Emptying the music discs cards container
    $('#cards-container').empty(); // Storing the value of the selected genre in a variable

    var selected_genre = $(this).val(); // AJAX call to get only the discs with the selected genre (genre filter)

    $.ajax({
      url: ajax_url,
      method: ajax_method,
      data: {
        genre: selected_genre // This data is needed to be passed to the PHP

      },
      success: function success(results) {
        // Scrolling the array 'results' generated by the Ajax call
        for (var i = 0; i < results.length; i++) {
          // Storing the values to be printed in a variable
          var context_cards = {
            'poster': results[i].poster,
            'title': results[i].title,
            'author': results[i].author,
            'year': results[i].year
          }; // Storing the data in a variable and printing them on screen

          var html_cards = template_cards(context_cards);
          $('#cards-container').append(html_cards);
        }
      },
      error: function error() {
        errorMessage();
      }
    }); // End of AJAX call
  }); // ---------------------------- SORT PER YEAR ----------------------------
  // Intercepting the user's choice in the select of sorting playlist by year

  $('#sort-year').change(function () {
    // Storing the value of the selected sorting order in a variable
    var selected_order = $(this).val();
    console.log(selected_order);
    alert('You have selected: ' + selected_order);
    /*
    // If "ascending" is selected, it is sort by ascending order
    if (selected_order === 'ascending') {
      ARRAY_OF_DISCS????????.sort((disc1, disc2) => {
        return parseInt(disc1.year) - parseInt(disc2.year);
      });
    // If "descending" is selected, it is sort by descending order
    } else if (selected_order === 'descending') {
      ARRAY_OF_DISCS?????.sort((disc1, disc2) => {
        return parseInt(disc2.year) - parseInt(disc1.year);
      });
    }
    */
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