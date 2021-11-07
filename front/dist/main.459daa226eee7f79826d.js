/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  color: rgb(0, 0, 0);\n  background-color: rgb(219, 118, 24);\n  text-align: center;\n  line-height: 1.4em;\n}\n\nmain {\n  padding: 0;\n  margin-top: 40px;\n}\n\nh3 {\n  margin-top: 30px;\n}\n\nli {\n  list-style-type:none;\n}\nul{\n  text-align: left;\n  font-weight: 500;\n}\n\nheader{\n  font-weight: bold;\n}\n.user-stories li {\n  margin-bottom: 1em;\n}\n\na {\n  color: #2574a9;\n}\n\nform {\n  margin: 10px auto;\n  padding: 20px;\n  max-width: 600px;\n}\n\nlabel {\n  margin-right: 10px;\n}\n\ninput {\n  padding: 5px;\n}\n\ninput[type='text'] {\n  width: 220px;\n  text-align: center;\n}\n\n\n\n/*<------- Response class -------->*/\n\n.copy-btn {\n  position: relative;\n  display: inline-block;\n}\n\n.copy-btn .response-text {\n  visibility: hidden;\n  width: 300px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.response-text{\n width: 197px;\n}\n.copy-btn .response-text::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.copy-btn:hover .response-text {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* <-------Pop Up Form CSS-------> */\n/* Button used to open the contact form - fixed at the bottom of the page */\n#account{\n  background-color: rgb(30, 219, 71);\n  color: black;\n  padding: 0.8vw;\n  margin-left: 1vw;\n  margin-bottom: 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n}\n\n#logout-button{\n  display: none;\n  background-color: rgb(236, 55, 55);\n  color: black;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n.open-button {\n  background-color: #555;\n  color: black;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n  display: none;\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  margin-top: 0%;\n  margin-bottom: 0%;\n  background-color: white;\n}\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n#username-input{\n  width: 23vw;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;EACnB,mCAAmC;EACnC,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;;;AAIA,oCAAoC;;AAEpC;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,wBAAwB;AAC1B;;AAEA;CACC,YAAY;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA,oCAAoC;AACpC,2EAA2E;AAC3E;EACE,kCAAkC;EAClC,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,UAAU;;AAEZ;;AAEA,qCAAqC;AACrC;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;;AAEA,4CAA4C;AAC5C;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA,oDAAoD;AACpD;EACE,qBAAqB;AACvB;;AAEA,sCAAsC;AACtC;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb","sourcesContent":["body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  color: rgb(0, 0, 0);\n  background-color: rgb(219, 118, 24);\n  text-align: center;\n  line-height: 1.4em;\n}\n\nmain {\n  padding: 0;\n  margin-top: 40px;\n}\n\nh3 {\n  margin-top: 30px;\n}\n\nli {\n  list-style-type:none;\n}\nul{\n  text-align: left;\n  font-weight: 500;\n}\n\nheader{\n  font-weight: bold;\n}\n.user-stories li {\n  margin-bottom: 1em;\n}\n\na {\n  color: #2574a9;\n}\n\nform {\n  margin: 10px auto;\n  padding: 20px;\n  max-width: 600px;\n}\n\nlabel {\n  margin-right: 10px;\n}\n\ninput {\n  padding: 5px;\n}\n\ninput[type='text'] {\n  width: 220px;\n  text-align: center;\n}\n\n\n\n/*<------- Response class -------->*/\n\n.copy-btn {\n  position: relative;\n  display: inline-block;\n}\n\n.copy-btn .response-text {\n  visibility: hidden;\n  width: 300px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.response-text{\n width: 197px;\n}\n.copy-btn .response-text::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.copy-btn:hover .response-text {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* <-------Pop Up Form CSS-------> */\n/* Button used to open the contact form - fixed at the bottom of the page */\n#account{\n  background-color: rgb(30, 219, 71);\n  color: black;\n  padding: 0.8vw;\n  margin-left: 1vw;\n  margin-bottom: 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n}\n\n#logout-button{\n  display: none;\n  background-color: rgb(236, 55, 55);\n  color: black;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n.open-button {\n  background-color: #555;\n  color: black;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n  display: none;\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  margin-top: 0%;\n  margin-bottom: 0%;\n  background-color: white;\n}\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n#username-input{\n  width: 23vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/test.js":
/*!*****************************!*\
  !*** ./src/modules/test.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logOut": () => (/* binding */ logOut)
/* harmony export */ });
function logOut(){
    localStorage.clear();
    setUpLogin(); //Sets the login option
    location.reload(); //Refresh the DOM
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/test.js */ "./src/modules/test.js");


//Initial setting to header (username)
const mainHead = document.getElementById("main-head");
const openButton = document.getElementById("openButton");
openButton.addEventListener("click", openForm);
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closeForm);
const logoutBtn = document.getElementById("logout-button");
logoutBtn.addEventListener("click", _modules_test_js__WEBPACK_IMPORTED_MODULE_1__.logOut)
const userStatistics = document.getElementById("user-statistics")

let userName = localStorage.getItem("username");
setUpLogin(userName);


//<---------------- Main functionallity ------------------->
const baseUrl = "http://localhost:3000"; //API "GET" URL
const submitBtn = document.getElementById("submit-btn");
const inputElement = document.getElementById("url_input");
const responseDiv = document.getElementById("response");

submitBtn.addEventListener("click", postUrl);

async function postUrl(e){
    e.preventDefault();
    const originalUrl = inputElement.value;
    try {
        let userName = localStorage.getItem("username");
        let response;
        if(userName){
            console.log("logged in");
            response = await axios.post(`${baseUrl}/shortmyurl/${userName}`, {url: originalUrl});
        }else{
            console.log("not logged");
            response = await axios.post(`${baseUrl}/shortmyurl/`, {url: originalUrl});
        }
        createResponseElement(response.data); 
    } catch (error) {
        alert(error);
    }
}

function createResponseElement(shortUrl){
    const message = document.createElement("p");
    message.textContent = "Here's your new shorter URL";
    const responseInput = document.createElement("input");
    responseInput.className = "response-text";
    responseInput.value = shortUrl;
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy URL";
    copyBtn.addEventListener("click", (e) => {
        responseInput.select(); //Select the text field
        responseInput.setSelectionRange(0, 99999) // For mobile devices
        navigator.clipboard.writeText(responseInput.value); //Copy the text inside the text field
        //alert("Copied the text: " + responseInput.value); //Alert the copied text
    })
    responseDiv.appendChild(message);
    responseDiv.appendChild(responseInput);
    responseDiv.appendChild(copyBtn);
}

async function getUserStatistics(){ 
    try {
        const dataDiv = document.createElement("div");
        const headerEl = document.createElement("header");
        headerEl.textContent = "Your URLs Stats :"
        dataDiv.appendChild(headerEl);
        const response = await axios.get(`${baseUrl}/info/${userName}`);
        console.log(response.data);
        const data = response.data;
        data.forEach(urlObject => {
            let urlStatlist = document.createElement("ul");
            let newUrlEl = document.createElement("li");
            newUrlEl.textContent = `New URL - ${urlObject.newUrl}`;
            let oldUrlEl = document.createElement("li");
            oldUrlEl.textContent = `Old URL - ${urlObject.oldUrl}`;
            let countEl = document.createElement("li");
            countEl.textContent = `View Count - ${urlObject.count}`;
            let creationDateEl = document.createElement("li");
            creationDateEl.textContent = `Creation Date - ${urlObject.creationDate}`;
            urlStatlist.appendChild(newUrlEl);
            urlStatlist.appendChild(oldUrlEl);
            urlStatlist.appendChild(countEl);
            urlStatlist.appendChild(creationDateEl);
            dataDiv.appendChild(urlStatlist);
        });
        userStatistics.appendChild(dataDiv);
    } catch (error) {
        console.error(error);
        userStatistics.textContent = "No Stats Yet...";
    }
        
};


//<---------------- Pop Up Login Form ------------------->
const submitLogin = document.getElementById("login-button");
const loginInput = document.getElementById("username-input");
submitLogin.addEventListener("click", handleLogin);

//Login function
function setUpLogin(userName){
    if(userName){
        createUserLink(userName); //Changes the main head to include username indication link
        if(userName){
            openButton.style.display = "none"; //Once the username is set - login button disappears
            logoutBtn.style.display = "block" //Logout button appears
        }
    }else{
        openButton.style.display = "block"; //In first initialization username is null - so display login option
        logoutBtn.style.display = "none" //Logout button disappears
    }
}

function handleLogin(e){
    e.preventDefault();
    if(loginInput.value === ""){ //Validates the username input
        alert("Invalid Username")
    }else{
        const userName = loginInput.value; //Assigns the userName with the new input
        userLogin(userName);
        closeForm();
    }
}
function userLogin(userName){
    localStorage.setItem("username", userName); //Saves user value to local storage
    openButton.style.display = "none"; //Login button disappears
    logoutBtn.style.display = "block" //Logout button appears
    createUserLink(userName); //Changes the main head
    location.reload(); //Refresh the DOM
}

function createUserLink(userName){
    const userLinkElement = document.createElement("button");
    userLinkElement.id = "account";
    userLinkElement.textContent = userName;
    userLinkElement.addEventListener("click", getUserStatistics);
    mainHead.innerText += " - ";
    userLinkElement.textContent = userName;
    mainHead.append(userLinkElement);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//    function logOut(){
//        localStorage.clear();
//        setUpLogin(); //Sets the login option
//        location.reload(); //Refresh the DOM
//    }


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRDQUE0QyxRQUFRLFFBQVEsU0FBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGlCQUFpQjtBQUNqRTtBQUNBLGdEQUFnRCxpQkFBaUI7QUFDakU7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFO0FBQ0EsNERBQTRELHVCQUF1QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsS0FBSztBQUNMLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQSw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL21vZHVsZXMvdGVzdC5qcyIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTE4LCAyNCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xcbn1cXG51bHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnVzZXItc3RvcmllcyBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMyNTc0YTk7XFxufVxcblxcbmZvcm0ge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICB3aWR0aDogMjIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi8qPC0tLS0tLS0gUmVzcG9uc2UgY2xhc3MgLS0tLS0tLS0+Ki9cXG5cXG4uY29weS1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY29weS1idG4gLnJlc3BvbnNlLXRleHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxufVxcblxcbi5yZXNwb25zZS10ZXh0e1xcbiB3aWR0aDogMTk3cHg7XFxufVxcbi5jb3B5LWJ0biAucmVzcG9uc2UtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvcHktYnRuOmhvdmVyIC5yZXNwb25zZS10ZXh0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiA8LS0tLS0tLVBvcCBVcCBGb3JtIENTUy0tLS0tLS0+ICovXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbiNhY2NvdW50e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyMTksIDcxKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDAuOHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNsb2dvdXQtYnV0dG9ue1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDU1LCA1NSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAyODBweDtcXG59XFxuLm9wZW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgei1pbmRleDogOTtcXG5cXG59XFxuXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3VzZXJuYW1lLWlucHV0e1xcbiAgd2lkdGg6IDIzdnc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7Ozs7QUFJQSxvQ0FBb0M7O0FBRXBDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBLG9DQUFvQztBQUNwQywyRUFBMkU7QUFDM0U7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTs7QUFFWjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTE4LCAyNCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xcbn1cXG51bHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnVzZXItc3RvcmllcyBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMyNTc0YTk7XFxufVxcblxcbmZvcm0ge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICB3aWR0aDogMjIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi8qPC0tLS0tLS0gUmVzcG9uc2UgY2xhc3MgLS0tLS0tLS0+Ki9cXG5cXG4uY29weS1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY29weS1idG4gLnJlc3BvbnNlLXRleHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxufVxcblxcbi5yZXNwb25zZS10ZXh0e1xcbiB3aWR0aDogMTk3cHg7XFxufVxcbi5jb3B5LWJ0biAucmVzcG9uc2UtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvcHktYnRuOmhvdmVyIC5yZXNwb25zZS10ZXh0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiA8LS0tLS0tLVBvcCBVcCBGb3JtIENTUy0tLS0tLS0+ICovXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbiNhY2NvdW50e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyMTksIDcxKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDAuOHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNsb2dvdXQtYnV0dG9ue1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDU1LCA1NSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAyODBweDtcXG59XFxuLm9wZW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgei1pbmRleDogOTtcXG5cXG59XFxuXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3VzZXJuYW1lLWlucHV0e1xcbiAgd2lkdGg6IDIzdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGxvZ091dCgpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNldFVwTG9naW4oKTsgLy9TZXRzIHRoZSBsb2dpbiBvcHRpb25cbiAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy9SZWZyZXNoIHRoZSBET01cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vbW9kdWxlcy90ZXN0LmpzJztcbi8vSW5pdGlhbCBzZXR0aW5nIHRvIGhlYWRlciAodXNlcm5hbWUpXG5jb25zdCBtYWluSGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1oZWFkXCIpO1xuY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlbkJ1dHRvblwiKTtcbm9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idXR0b25cIik7XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcbmNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LWJ1dHRvblwiKTtcbmxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9nT3V0KVxuY29uc3QgdXNlclN0YXRpc3RpY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItc3RhdGlzdGljc1wiKVxuXG5sZXQgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuc2V0VXBMb2dpbih1c2VyTmFtZSk7XG5cblxuLy88LS0tLS0tLS0tLS0tLS0tLSBNYWluIGZ1bmN0aW9uYWxsaXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0+XG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjsgLy9BUEkgXCJHRVRcIiBVUkxcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LWJ0blwiKTtcbmNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJsX2lucHV0XCIpO1xuY29uc3QgcmVzcG9uc2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3BvbnNlXCIpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc3RVcmwpO1xuXG5hc3luYyBmdW5jdGlvbiBwb3N0VXJsKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBvcmlnaW5hbFVybCA9IGlucHV0RWxlbWVudC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGlmKHVzZXJOYW1lKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluXCIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L3Nob3J0bXl1cmwvJHt1c2VyTmFtZX1gLCB7dXJsOiBvcmlnaW5hbFVybH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGxvZ2dlZFwiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9zaG9ydG15dXJsL2AsIHt1cmw6IG9yaWdpbmFsVXJsfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlUmVzcG9uc2VFbGVtZW50KHJlc3BvbnNlLmRhdGEpOyBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydChlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXNwb25zZUVsZW1lbnQoc2hvcnRVcmwpe1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJIZXJlJ3MgeW91ciBuZXcgc2hvcnRlciBVUkxcIjtcbiAgICBjb25zdCByZXNwb25zZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHJlc3BvbnNlSW5wdXQuY2xhc3NOYW1lID0gXCJyZXNwb25zZS10ZXh0XCI7XG4gICAgcmVzcG9uc2VJbnB1dC52YWx1ZSA9IHNob3J0VXJsO1xuICAgIGNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvcHlCdG4uY2xhc3NOYW1lID0gXCJjb3B5LWJ0blwiO1xuICAgIGNvcHlCdG4udGV4dENvbnRlbnQgPSBcIkNvcHkgVVJMXCI7XG4gICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcmVzcG9uc2VJbnB1dC5zZWxlY3QoKTsgLy9TZWxlY3QgdGhlIHRleHQgZmllbGRcbiAgICAgICAgcmVzcG9uc2VJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSkgLy8gRm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHJlc3BvbnNlSW5wdXQudmFsdWUpOyAvL0NvcHkgdGhlIHRleHQgaW5zaWRlIHRoZSB0ZXh0IGZpZWxkXG4gICAgICAgIC8vYWxlcnQoXCJDb3BpZWQgdGhlIHRleHQ6IFwiICsgcmVzcG9uc2VJbnB1dC52YWx1ZSk7IC8vQWxlcnQgdGhlIGNvcGllZCB0ZXh0XG4gICAgfSlcbiAgICByZXNwb25zZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICByZXNwb25zZURpdi5hcHBlbmRDaGlsZChyZXNwb25zZUlucHV0KTtcbiAgICByZXNwb25zZURpdi5hcHBlbmRDaGlsZChjb3B5QnRuKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclN0YXRpc3RpY3MoKXsgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyRWwudGV4dENvbnRlbnQgPSBcIllvdXIgVVJMcyBTdGF0cyA6XCJcbiAgICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2luZm8vJHt1c2VyTmFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBkYXRhLmZvckVhY2godXJsT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCB1cmxTdGF0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGxldCBuZXdVcmxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG5ld1VybEVsLnRleHRDb250ZW50ID0gYE5ldyBVUkwgLSAke3VybE9iamVjdC5uZXdVcmx9YDtcbiAgICAgICAgICAgIGxldCBvbGRVcmxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG9sZFVybEVsLnRleHRDb250ZW50ID0gYE9sZCBVUkwgLSAke3VybE9iamVjdC5vbGRVcmx9YDtcbiAgICAgICAgICAgIGxldCBjb3VudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgY291bnRFbC50ZXh0Q29udGVudCA9IGBWaWV3IENvdW50IC0gJHt1cmxPYmplY3QuY291bnR9YDtcbiAgICAgICAgICAgIGxldCBjcmVhdGlvbkRhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZUVsLnRleHRDb250ZW50ID0gYENyZWF0aW9uIERhdGUgLSAke3VybE9iamVjdC5jcmVhdGlvbkRhdGV9YDtcbiAgICAgICAgICAgIHVybFN0YXRsaXN0LmFwcGVuZENoaWxkKG5ld1VybEVsKTtcbiAgICAgICAgICAgIHVybFN0YXRsaXN0LmFwcGVuZENoaWxkKG9sZFVybEVsKTtcbiAgICAgICAgICAgIHVybFN0YXRsaXN0LmFwcGVuZENoaWxkKGNvdW50RWwpO1xuICAgICAgICAgICAgdXJsU3RhdGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlRWwpO1xuICAgICAgICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZCh1cmxTdGF0bGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1c2VyU3RhdGlzdGljcy5hcHBlbmRDaGlsZChkYXRhRGl2KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdXNlclN0YXRpc3RpY3MudGV4dENvbnRlbnQgPSBcIk5vIFN0YXRzIFlldC4uLlwiO1xuICAgIH1cbiAgICAgICAgXG59O1xuXG5cbi8vPC0tLS0tLS0tLS0tLS0tLS0gUG9wIFVwIExvZ2luIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLT5cbmNvbnN0IHN1Ym1pdExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1idXR0b25cIik7XG5jb25zdCBsb2dpbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZS1pbnB1dFwiKTtcbnN1Ym1pdExvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMb2dpbik7XG5cbi8vTG9naW4gZnVuY3Rpb25cbmZ1bmN0aW9uIHNldFVwTG9naW4odXNlck5hbWUpe1xuICAgIGlmKHVzZXJOYW1lKXtcbiAgICAgICAgY3JlYXRlVXNlckxpbmsodXNlck5hbWUpOyAvL0NoYW5nZXMgdGhlIG1haW4gaGVhZCB0byBpbmNsdWRlIHVzZXJuYW1lIGluZGljYXRpb24gbGlua1xuICAgICAgICBpZih1c2VyTmFtZSl7XG4gICAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy9PbmNlIHRoZSB1c2VybmFtZSBpcyBzZXQgLSBsb2dpbiBidXR0b24gZGlzYXBwZWFyc1xuICAgICAgICAgICAgbG9nb3V0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIgLy9Mb2dvdXQgYnV0dG9uIGFwcGVhcnNcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vSW4gZmlyc3QgaW5pdGlhbGl6YXRpb24gdXNlcm5hbWUgaXMgbnVsbCAtIHNvIGRpc3BsYXkgbG9naW4gb3B0aW9uXG4gICAgICAgIGxvZ291dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgLy9Mb2dvdXQgYnV0dG9uIGRpc2FwcGVhcnNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxvZ2luKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihsb2dpbklucHV0LnZhbHVlID09PSBcIlwiKXsgLy9WYWxpZGF0ZXMgdGhlIHVzZXJuYW1lIGlucHV0XG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBVc2VybmFtZVwiKVxuICAgIH1lbHNle1xuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGxvZ2luSW5wdXQudmFsdWU7IC8vQXNzaWducyB0aGUgdXNlck5hbWUgd2l0aCB0aGUgbmV3IGlucHV0XG4gICAgICAgIHVzZXJMb2dpbih1c2VyTmFtZSk7XG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVzZXJMb2dpbih1c2VyTmFtZSl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB1c2VyTmFtZSk7IC8vU2F2ZXMgdXNlciB2YWx1ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgb3BlbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vTG9naW4gYnV0dG9uIGRpc2FwcGVhcnNcbiAgICBsb2dvdXRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiAvL0xvZ291dCBidXR0b24gYXBwZWFyc1xuICAgIGNyZWF0ZVVzZXJMaW5rKHVzZXJOYW1lKTsgLy9DaGFuZ2VzIHRoZSBtYWluIGhlYWRcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy9SZWZyZXNoIHRoZSBET01cbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlckxpbmsodXNlck5hbWUpe1xuICAgIGNvbnN0IHVzZXJMaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdXNlckxpbmtFbGVtZW50LmlkID0gXCJhY2NvdW50XCI7XG4gICAgdXNlckxpbmtFbGVtZW50LnRleHRDb250ZW50ID0gdXNlck5hbWU7XG4gICAgdXNlckxpbmtFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRVc2VyU3RhdGlzdGljcyk7XG4gICAgbWFpbkhlYWQuaW5uZXJUZXh0ICs9IFwiIC0gXCI7XG4gICAgdXNlckxpbmtFbGVtZW50LnRleHRDb250ZW50ID0gdXNlck5hbWU7XG4gICAgbWFpbkhlYWQuYXBwZW5kKHVzZXJMaW5rRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuLy8gICAgZnVuY3Rpb24gbG9nT3V0KCl7XG4vLyAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4vLyAgICAgICAgc2V0VXBMb2dpbigpOyAvL1NldHMgdGhlIGxvZ2luIG9wdGlvblxuLy8gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvL1JlZnJlc2ggdGhlIERPTVxuLy8gICAgfVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=