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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/circular-json/build/circular-json.node.js":
/*!****************************************************************!*\
  !*** ./node_modules/circular-json/build/circular-json.node.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\nCopyright (C) 2013-2017 by Andrea Giammarchi - @WebReflection\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\nvar\n  // should be a not so common char\n  // possibly one JSON does not encode\n  // possibly one encodeURIComponent does not encode\n  // right now this char is '~' but this might change in the future\n  specialChar = '~',\n  safeSpecialChar = '\\\\x' + (\n    '0' + specialChar.charCodeAt(0).toString(16)\n  ).slice(-2),\n  escapedSafeSpecialChar = '\\\\' + safeSpecialChar,\n  specialCharRG = new RegExp(safeSpecialChar, 'g'),\n  safeSpecialCharRG = new RegExp(escapedSafeSpecialChar, 'g'),\n\n  safeStartWithSpecialCharRG = new RegExp('(?:^|([^\\\\\\\\]))' + escapedSafeSpecialChar),\n\n  indexOf = [].indexOf || function(v){\n    for(var i=this.length;i--&&this[i]!==v;);\n    return i;\n  },\n  $String = String  // there's no way to drop warnings in JSHint\n                    // about new String ... well, I need that here!\n                    // faked, and happy linter!\n;\n\nfunction generateReplacer(value, replacer, resolve) {\n  var\n    doNotIgnore = false,\n    inspect = !!replacer,\n    path = [],\n    all  = [value],\n    seen = [value],\n    mapp = [resolve ? specialChar : '[Circular]'],\n    last = value,\n    lvl  = 1,\n    i, fn\n  ;\n  if (inspect) {\n    fn = typeof replacer === 'object' ?\n      function (key, value) {\n        return key !== '' && replacer.indexOf(key) < 0 ? void 0 : value;\n      } :\n      replacer;\n  }\n  return function(key, value) {\n    // the replacer has rights to decide\n    // if a new object should be returned\n    // or if there's some key to drop\n    // let's call it here rather than \"too late\"\n    if (inspect) value = fn.call(this, key, value);\n\n    // first pass should be ignored, since it's just the initial object\n    if (doNotIgnore) {\n      if (last !== this) {\n        i = lvl - indexOf.call(all, this) - 1;\n        lvl -= i;\n        all.splice(lvl, all.length);\n        path.splice(lvl - 1, path.length);\n        last = this;\n      }\n      // console.log(lvl, key, path);\n      if (typeof value === 'object' && value) {\n    \t// if object isn't referring to parent object, add to the\n        // object path stack. Otherwise it is already there.\n        if (indexOf.call(all, value) < 0) {\n          all.push(last = value);\n        }\n        lvl = all.length;\n        i = indexOf.call(seen, value);\n        if (i < 0) {\n          i = seen.push(value) - 1;\n          if (resolve) {\n            // key cannot contain specialChar but could be not a string\n            path.push(('' + key).replace(specialCharRG, safeSpecialChar));\n            mapp[i] = specialChar + path.join(specialChar);\n          } else {\n            mapp[i] = mapp[0];\n          }\n        } else {\n          value = mapp[i];\n        }\n      } else {\n        if (typeof value === 'string' && resolve) {\n          // ensure no special char involved on deserialization\n          // in this case only first char is important\n          // no need to replace all value (better performance)\n          value = value .replace(safeSpecialChar, escapedSafeSpecialChar)\n                        .replace(specialChar, safeSpecialChar);\n        }\n      }\n    } else {\n      doNotIgnore = true;\n    }\n    return value;\n  };\n}\n\nfunction retrieveFromPath(current, keys) {\n  for(var i = 0, length = keys.length; i < length; current = current[\n    // keys should be normalized back here\n    keys[i++].replace(safeSpecialCharRG, specialChar)\n  ]);\n  return current;\n}\n\nfunction generateReviver(reviver) {\n  return function(key, value) {\n    var isString = typeof value === 'string';\n    if (isString && value.charAt(0) === specialChar) {\n      return new $String(value.slice(1));\n    }\n    if (key === '') value = regenerate(value, value, {});\n    // again, only one needed, do not use the RegExp for this replacement\n    // only keys need the RegExp\n    if (isString) value = value .replace(safeStartWithSpecialCharRG, '$1' + specialChar)\n                                .replace(escapedSafeSpecialChar, safeSpecialChar);\n    return reviver ? reviver.call(this, key, value) : value;\n  };\n}\n\nfunction regenerateArray(root, current, retrieve) {\n  for (var i = 0, length = current.length; i < length; i++) {\n    current[i] = regenerate(root, current[i], retrieve);\n  }\n  return current;\n}\n\nfunction regenerateObject(root, current, retrieve) {\n  for (var key in current) {\n    if (current.hasOwnProperty(key)) {\n      current[key] = regenerate(root, current[key], retrieve);\n    }\n  }\n  return current;\n}\n\nfunction regenerate(root, current, retrieve) {\n  return current instanceof Array ?\n    // fast Array reconstruction\n    regenerateArray(root, current, retrieve) :\n    (\n      current instanceof $String ?\n        (\n          // root is an empty string\n          current.length ?\n            (\n              retrieve.hasOwnProperty(current) ?\n                retrieve[current] :\n                retrieve[current] = retrieveFromPath(\n                  root, current.split(specialChar)\n                )\n            ) :\n            root\n        ) :\n        (\n          current instanceof Object ?\n            // dedicated Object parser\n            regenerateObject(root, current, retrieve) :\n            // value as it is\n            current\n        )\n    )\n  ;\n}\n\nvar CircularJSON = {\n  stringify: function stringify(value, replacer, space, doNotResolve) {\n    return CircularJSON.parser.stringify(\n      value,\n      generateReplacer(value, replacer, !doNotResolve),\n      space\n    );\n  },\n  parse: function parse(text, reviver) {\n    return CircularJSON.parser.parse(\n      text,\n      generateReviver(reviver)\n    );\n  },\n  // A parser should be an API 1:1 compatible with JSON\n  // it should expose stringify and parse methods.\n  // The default parser is the native JSON.\n  parser: JSON\n};\n\nmodule.exports = CircularJSON;\n\n\n//# sourceURL=webpack:///./node_modules/circular-json/build/circular-json.node.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/CityWorker/CityWorker.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/CityWorker/CityWorker.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/CityWorker/CityWorker.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Countdown/Countdown.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Countdown/Countdown.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Countdown/Countdown.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Login/Login.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Login/Login.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#login {\\r\\n  position: absolute;\\r\\n  top: 4%;\\r\\n  right: 10%;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n#login input[type='submit'] { \\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n#login input[type='text'] {\\r\\n  border-left: 0;\\r\\n  border-right: 0;\\r\\n  border-top: 0;\\r\\n  border-bottom: 1px solid #dcdcdc;\\r\\n}\\r\\n\\r\\n#lButton:hover, #lButton:focus {\\r\\n  color: #87CEEB;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n#login form {\\r\\n  display: -webkit-inline-box;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Login/Login.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Logout/Logout.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Logout/Logout.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#logout {\\r\\n    position: absolute;\\r\\n    top: 4%;\\r\\n    right: 10%;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n#logout input[type='submit'] { \\r\\n    height: 40px;\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n#logout input[type='submit']:hover, #logout input[type='submit']:focus {\\r\\n    color: #87CEEB;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Logout/Logout.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Message/Message.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Message/Message.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Message/Message.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Register/Register.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Register/Register.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#register {\\r\\n    position:relative; \\r\\n  left: 25%;\\r\\n}\\r\\n\\r\\n#register input[type='text'] {\\r\\n    border-left: 0;\\r\\n    border-right: 0;\\r\\n    border-top: 0;\\r\\n    border-bottom: 1px solid #dcdcdc;\\r\\n}\\r\\n\\r\\n#register input[type='submit'] {\\r\\n    height: 40px;\\r\\n    width: 50%;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Register/Register.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Stations/Stations.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Stations/Stations.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".station {\\r\\n  width: 100%;\\r\\n  margin-bottom: 2em;\\r\\n}\\r\\n\\r\\n.station p {\\r\\n  margin-bottom: 1em;\\r\\n}\\r\\n\\r\\n.slot {\\r\\n  display: inline-block;\\r\\n  width: 10%;\\r\\n  padding: 2em 1em;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.bike {\\r\\n  background-image: url(\" + escape(__webpack_require__(/*! ./../../../public/icons/bicycle.png */ \"./public/icons/bicycle.png\")) + \");\\r\\n}\\r\\n\\r\\n.docks {\\r\\n  background-image: url(\" + escape(__webpack_require__(/*! ./../../../public/icons/docks.png */ \"./public/icons/docks.png\")) + \");\\r\\n  color: black;\\r\\n} \\r\\n\\r\\n\\r\\n@media only screen and (max-width: 640px) {\\r\\n  .slot {\\r\\n    width: 20%;\\r\\n  }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/SysAdmin/SysAdmin.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/SysAdmin/SysAdmin.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".flex-grid {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.col {\\r\\n  flex: 1;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-family: 'Roboto', sans-serif;\\r\\n\\tbackground: #f0f0f0;\\r\\n}\\r\\n\\r\\nheader, footer {\\r\\n\\tbackground: #f0f0f0;\\r\\n\\tpadding: 1em;\\r\\n\\tbox-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\r\\n\\tbackground-color: #87CEEB;\\r\\n\\tcolor: #fff;\\r\\n\\tfont-size: 1rem;\\r\\n}\\r\\n\\r\\n.page-wrap {\\r\\n\\twidth: 100%;\\r\\n\\tmax-width: 1000px;\\r\\n\\tmargin: 1em auto;\\r\\n\\tbackground: #fff;\\r\\n\\tpadding: 4em;\\r\\n\\tbox-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\r\\n}\\r\\n\\r\\ninput, button {\\r\\n\\tdisplay: block;\\r\\n\\tmargin-bottom: 2em;\\r\\n\\tmin-width: 50%;\\r\\n\\tfont-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\ninput {\\r\\n\\tpadding: 5px;\\r\\n\\theight: 25px;\\t\\r\\n}\\r\\n  \\r\\ninput::placeholder {\\r\\n\\tfont-style: italic;\\r\\n}\\r\\n\\r\\ninput[type='submit'], button {\\r\\n\\tbackground-color: #87CEEB;\\r\\n\\theight: 40px;\\r\\n\\tborder: none;\\r\\n\\tcolor: #fff;\\r\\n\\tborder-radius: 2px;\\r\\n\\tcursor: pointer;\\r\\n\\t-webkit-transition: background-color .3s;\\r\\n\\t-moz-transition: background-color .3s;\\r\\n\\t-o-transition: background-color .3s;\\r\\n\\ttransition: background-color .3s;\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 640px) {\\r\\n\\tinput, input[type='submit'], button {\\r\\n\\t  min-width: 100%;\\r\\n\\t}\\r\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./public/icons/bicycle.png":
/*!**********************************!*\
  !*** ./public/icons/bicycle.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"17458a2c162fbc1bb4353be2f5ec9430.png\";\n\n//# sourceURL=webpack:///./public/icons/bicycle.png?");

/***/ }),

/***/ "./public/icons/docks.png":
/*!********************************!*\
  !*** ./public/icons/docks.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ed24bfbd5fb9d413a008903c4b41aad2.png\";\n\n//# sourceURL=webpack:///./public/icons/docks.png?");

/***/ }),

/***/ "./public/members.js":
/*!***************************!*\
  !*** ./public/members.js ***!
  \***************************/
/*! exports provided: initSavedMembers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSavedMembers\", function() { return initSavedMembers; });\nconst initSavedMembers = [{\n\t'mail': 'samya@mail.com',\n\t'firstName': 'Samya',\n\t'lastName': 'Khemri',\n\t'phone': '5147124991',\n\t'hasBike': false\n}, {\n\t'mail': 'kdog@mail.com',\n\t'firstName': 'Kevin',\n\t'lastName': 'Massicotte',\n\t'phone': '5141234567',\n\t'hasBike': false\n}, {\n\t'mail': 'ban@mail.com',\n\t'firstName': 'Dark',\n\t'lastName': 'Vador',\n\t'phone': '5147894561',\n\t'hasBike': false,\n\t'isBanned': true\n}];\n\n//# sourceURL=webpack:///./public/members.js?");

/***/ }),

/***/ "./public/stations.js":
/*!****************************!*\
  !*** ./public/stations.js ***!
  \****************************/
/*! exports provided: initStations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStations\", function() { return initStations; });\nconst initStations = [[{\n    'id': '1',\n    'color': '#9400D3'\n}, {\n    'id': '2',\n    'color': '#4B0082'\n}, {\n    'id': '3',\n    'color': '#0000FF'\n}, {\n    'id': '4',\n    'color': '#00FF00'\n}, {\n    'id': '5',\n    'color': '#FFFF00'\n}, {\n    'id': '6',\n    'color': '#FF7F00'\n}, {\n    'id': '7',\n    'color': '#FF0000'\n}, {}, {}, {}], [{\n    'id': '8',\n    'color': '#9400D3'\n}, {\n    'id': '9',\n    'color': '#4B0082'\n}, {\n    'id': '10',\n    'color': '#0000FF'\n}, {\n    'id': '11',\n    'color': '#00FF00'\n}, {\n    'id': '12',\n    'color': '#FFFF00'\n}, {\n    'id': '13',\n    'color': '#FF7F00'\n}, {\n    'id': '14',\n    'color': '#FF0000'\n}, {}, {}, {}], [{\n    'id': '15',\n    'color': '#9400D3'\n}, {\n    'id': '16',\n    'color': '#4B0082'\n}, {\n    'id': '17',\n    'color': '#0000FF'\n}, {\n    'id': '18',\n    'color': '#00FF00'\n}, {\n    'id': '19',\n    'color': '#FFFF00'\n}, {\n    'id': '20',\n    'color': '#FF7F00'\n}, {\n    'id': '21',\n    'color': '#FF0000'\n}, {}, {}, {}]];\n\n//# sourceURL=webpack:///./public/stations.js?");

/***/ }),

/***/ "./src/components/CityWorker/CityWorker.css":
/*!**************************************************!*\
  !*** ./src/components/CityWorker/CityWorker.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./CityWorker.css */ \"./node_modules/css-loader/index.js!./src/components/CityWorker/CityWorker.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/CityWorker/CityWorker.css?");

/***/ }),

/***/ "./src/components/CityWorker/CityWorker.html":
/*!***************************************************!*\
  !*** ./src/components/CityWorker/CityWorker.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/CityWorker/CityWorker.html?");

/***/ }),

/***/ "./src/components/CityWorker/CityWorker.js":
/*!*************************************************!*\
  !*** ./src/components/CityWorker/CityWorker.js ***!
  \*************************************************/
/*! exports provided: CityWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CityWorker\", function() { return CityWorker; });\n/* harmony import */ var _CityWorker_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CityWorker.html */ \"./src/components/CityWorker/CityWorker.html\");\n/* harmony import */ var _CityWorker_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CityWorker_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CityWorker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CityWorker.css */ \"./src/components/CityWorker/CityWorker.css\");\n/* harmony import */ var _CityWorker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CityWorker_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _public_stations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../public/stations.js */ \"./public/stations.js\");\n/* harmony import */ var _public_members_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../public/members.js */ \"./public/members.js\");\n// import { setItem, reload } from './../../helpers/helpers.js'\n// import { initStations } from './../../../public/stations.js'\n// import { initSavedMembers } from './../../../public/members.js'\n\n// /*\n// \tComponent logic\n// */\n\n// const cleanBikes = () => {\n// \t// Simple hard reset so far\n// \tsetItem('stations', JSON.stringify(initStations))\n\n// \t// Also clean users to avoid conflicts\n// \tsetItem('members', JSON.stringify(initSavedMembers))\n\n// \treload()\n// }\n\n// /*\n// \tComponent UI\n// */\n// export const CityWorker = () => {\n// \tconst wrapper = document.createElement('div')\n\n// \t// Area title\n// \tconst separator = document.createElement('hr')\n// \twrapper.appendChild(separator)\n\n// \tconst title = document.createElement('h2')\n// \ttitle.innerHTML = 'City Worker'\n// \twrapper.appendChild(title)\n\n// \t// Sort button\n// \tconst button = document.createElement('button')\n// \tbutton.innerHTML = 'Clean bikes'\n// \tbutton.addEventListener('click', cleanBikes, false)\n// \twrapper.appendChild(button)\n// \treturn wrapper\n// }\n\n\n\n\n\n\n\n\n\nclass CityWorker extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _CityWorker_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\t// Area title\n\t\tconst separator = document.createElement('hr');\n\t\tthis.appendChild(separator);\n\n\t\tconst title = document.createElement('h2');\n\t\ttitle.innerHTML = 'City Worker';\n\t\tthis.appendChild(title);\n\n\t\t// Sort button\n\t\tconst button = document.createElement('button');\n\t\tbutton.innerHTML = 'Clean bikes';\n\t\tbutton.addEventListener('click', this.cleanBikes, false);\n\t\tthis.appendChild(button);\n\t}\n\n\tcleanBikes() {\n\t\t// Simple hard reset so far\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__[\"setItem\"])('stations', JSON.stringify(_public_stations_js__WEBPACK_IMPORTED_MODULE_3__[\"initStations\"]));\n\n\t\t// Also clean users to avoid conflicts\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__[\"setItem\"])('members', JSON.stringify(_public_members_js__WEBPACK_IMPORTED_MODULE_4__[\"initSavedMembers\"]));\n\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__[\"reload\"])();\n\t}\n}\n\nwindow.customElements.define('city-worker', CityWorker);\n\n//# sourceURL=webpack:///./src/components/CityWorker/CityWorker.js?");

/***/ }),

/***/ "./src/components/Countdown/Countdown.css":
/*!************************************************!*\
  !*** ./src/components/Countdown/Countdown.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Countdown.css */ \"./node_modules/css-loader/index.js!./src/components/Countdown/Countdown.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Countdown/Countdown.css?");

/***/ }),

/***/ "./src/components/Countdown/Countdown.html":
/*!*************************************************!*\
  !*** ./src/components/Countdown/Countdown.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/Countdown/Countdown.html?");

/***/ }),

/***/ "./src/components/Countdown/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/Countdown/Countdown.js ***!
  \***********************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _Countdown_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Countdown.html */ \"./src/components/Countdown/Countdown.html\");\n/* harmony import */ var _Countdown_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Countdown_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Countdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Countdown.css */ \"./src/components/Countdown/Countdown.css\");\n/* harmony import */ var _Countdown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Countdown_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Countdown extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _Countdown_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\tconst countdownMessage = document.createElement('p');\n\t\tcountdownMessage.id = 'countdownMessage';\n\t\tcountdownMessage.innerHTML = '';\n\t\tthis.appendChild(countdownMessage);\n\t}\n\n}\n\nwindow.customElements.define('timer-countdown', Countdown);\n\n//# sourceURL=webpack:///./src/components/Countdown/Countdown.js?");

/***/ }),

/***/ "./src/components/Login/Login.css":
/*!****************************************!*\
  !*** ./src/components/Login/Login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Login.css */ \"./node_modules/css-loader/index.js!./src/components/Login/Login.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Login/Login.css?");

/***/ }),

/***/ "./src/components/Login/Login.html":
/*!*****************************************!*\
  !*** ./src/components/Login/Login.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/Login/Login.html?");

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _Login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.html */ \"./src/components/Login/Login.html\");\n/* harmony import */ var _Login_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Login_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ \"./src/components/Login/Login.css\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Login extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _Login_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"updateMessage\"])('Bienvenue! Here you can log in to start biking.');\n\n\t\t// If the user wants to log in \n\t\tconst lForm = document.createElement('form');\n\n\t\t//create mail input and the submit button\n\t\tlForm.name = 'loginForm';\n\t\tlForm.appendChild(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('text', '', 'lmail', 'john.doe@mail.com'));\n\t\tconst lButton = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('submit', 'Login', 'submit', '');\n\t\tlButton.id = 'lButton';\n\t\tlButton.addEventListener('click', this.login, false);\n\t\tlForm.appendChild(lButton);\n\t\tthis.appendChild(lForm);\n\t}\n\n\tlogin(e) {\n\t\t// Prevent form submission's default behavior\n\t\te.preventDefault();\n\n\t\tlet errors = '';\n\t\tconst members = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getItem\"])('members'));\n\t\tconst form = document.forms['loginForm'];\n\t\tconst currUser = {\n\t\t\t'mail': Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeField\"])(form['lmail'].value)\n\n\t\t\t// Build error message or return empty string\n\t\t};errors += !Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isValidMail\"])(currUser.mail) ? 'Enter a valid email address.' : !Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isMember\"])(currUser.mail, members) ? 'You are not registered yet.' : Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isBanned\"])(currUser.mail, members) ? 'You are banned.' : '';\n\n\t\t// Push errors or login\n\t\tif (errors) {\n\t\t\talert(errors);\n\t\t} else {\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"startSession\"])(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isMember\"])(currUser.mail, members));\n\t\t}\n\t}\n}\n\nwindow.customElements.define('login-form', Login);\n\n//# sourceURL=webpack:///./src/components/Login/Login.js?");

/***/ }),

/***/ "./src/components/Logout/Logout.css":
/*!******************************************!*\
  !*** ./src/components/Logout/Logout.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Logout.css */ \"./node_modules/css-loader/index.js!./src/components/Logout/Logout.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Logout/Logout.css?");

/***/ }),

/***/ "./src/components/Logout/Logout.html":
/*!*******************************************!*\
  !*** ./src/components/Logout/Logout.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\\r\\n\";\n\n//# sourceURL=webpack:///./src/components/Logout/Logout.html?");

/***/ }),

/***/ "./src/components/Logout/Logout.js":
/*!*****************************************!*\
  !*** ./src/components/Logout/Logout.js ***!
  \*****************************************/
/*! exports provided: Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logout\", function() { return Logout; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _Logout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logout.html */ \"./src/components/Logout/Logout.html\");\n/* harmony import */ var _Logout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Logout_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logout.css */ \"./src/components/Logout/Logout.css\");\n/* harmony import */ var _Logout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Logout_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Logout extends HTMLElement {\n    constructor() {\n        super();\n\n        const shadow = this.attachShadow({ mode: 'open' });\n\n        shadow.innerHTML = _Logout_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n    }\n\n    connectedCallback() {\n        // If the user wants to log out - just create logout button\n        const logoutButton = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('submit', 'Logout', 'submit', '');\n        logoutButton.addEventListener('click', this.logout, false);\n        this.appendChild(logoutButton);\n    }\n\n    logout() {\n        Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"delSession\"])('session');\n        Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"reload\"])();\n    }\n}\n\nwindow.customElements.define('logout-button', Logout);\n\n//# sourceURL=webpack:///./src/components/Logout/Logout.js?");

/***/ }),

/***/ "./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\nwindow.initMap = () => {\n\t//Ubisoft DeGaspé position\n\tconst ubisoft = { lat: 45.527641, lng: -73.596386 };\n\tconst map = new google.maps.Map(document.getElementById('map'), {\n\t\tzoom: 16,\n\t\tcenter: ubisoft\n\t});\n\n\tconst markersPosition = [{\n\t\tname: 'de Gaspé / Saint-Viateur',\n\t\tid: 1,\n\t\tposition: {\n\t\t\tlat: 45.5277132,\n\t\t\tlng: -73.5975606\n\t\t}\n\t}, {\n\t\tname: 'Maguire / Henri-Julien',\n\t\tid: 2,\n\t\tposition: {\n\t\t\tlat: 45.5271944,\n\t\t\tlng: -73.5934383\n\t\t}\n\t}, {\n\t\tname: 'Saint-Dominique / Saint-Viateur',\n\t\tid: 3,\n\t\tposition: {\n\t\t\tlat: 45.5266255,\n\t\t\tlng: -73.598367\n\t\t}\n\t}];\n\n\tconst markers = [];\n\n\tmarkersPosition.forEach(marker => {\n\t\tconst m = new google.maps.Marker({\n\t\t\tposition: marker.position,\n\t\t\tmap,\n\t\t\ttitle: marker.name,\n\t\t\tlabel: ''\n\t\t}).addListener('click', () => {\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"showStation\"])(marker.id, marker.name);\n\t\t});\n\t});\n};\n\nconst CJSON = __webpack_require__(/*! circular-json */ \"./node_modules/circular-json/build/circular-json.node.js\");\n\n\nconst Map = () => {\n\tconst p = document.createElement('p');\n\tp.innerHTML = 'Loading Google Map';\n\treturn p;\n};\n\n//# sourceURL=webpack:///./src/components/Map/Map.js?");

/***/ }),

/***/ "./src/components/Message/Message.css":
/*!********************************************!*\
  !*** ./src/components/Message/Message.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Message.css */ \"./node_modules/css-loader/index.js!./src/components/Message/Message.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Message/Message.css?");

/***/ }),

/***/ "./src/components/Message/Message.html":
/*!*********************************************!*\
  !*** ./src/components/Message/Message.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/Message/Message.html?");

/***/ }),

/***/ "./src/components/Message/Message.js":
/*!*******************************************!*\
  !*** ./src/components/Message/Message.js ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var _Message_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.html */ \"./src/components/Message/Message.html\");\n/* harmony import */ var _Message_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Message_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.css */ \"./src/components/Message/Message.css\");\n/* harmony import */ var _Message_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Message_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nclass Message extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _Message_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\tconst generalMessage = document.createElement('p');\n\t\tgeneralMessage.id = 'generalMessage';\n\t\tgeneralMessage.innerHTML = '';\n\t\tthis.appendChild(generalMessage);\n\t}\n}\n\nwindow.customElements.define('display-message', Message);\n\n//# sourceURL=webpack:///./src/components/Message/Message.js?");

/***/ }),

/***/ "./src/components/Register/Register.css":
/*!**********************************************!*\
  !*** ./src/components/Register/Register.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Register.css */ \"./node_modules/css-loader/index.js!./src/components/Register/Register.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Register/Register.css?");

/***/ }),

/***/ "./src/components/Register/Register.html":
/*!***********************************************!*\
  !*** ./src/components/Register/Register.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/Register/Register.html?");

/***/ }),

/***/ "./src/components/Register/Register.js":
/*!*********************************************!*\
  !*** ./src/components/Register/Register.js ***!
  \*********************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _Register_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.html */ \"./src/components/Register/Register.html\");\n/* harmony import */ var _Register_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Register_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Register_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.css */ \"./src/components/Register/Register.css\");\n/* harmony import */ var _Register_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Register_css__WEBPACK_IMPORTED_MODULE_2__);\n// import { \n// \tinputCreator,\n// \tgetItem,\n// \tsanitizeField,\n// \tisValidMail,\n// \tisValidPhone,\n// \tisMember,\n// \tisBanned,\n// \tstartSession,\n// \tsetItem\n//  } from './../../helpers/helpers.js'\n\n//  import './Login.css'\n\n// const register = e => {\n// \t// Prevent form submission's default behavior\n// \te.preventDefault()\n\n// \t// Load members from localStorage\n// \tconst members = JSON.parse(getItem('members'))\n\n// \t// Sanitize fields\n// \tconst form = document.forms['registerForm']\n// \tconst member = {\n// \t  'firstName': sanitizeField(form['rFirstName'].value),\n// \t  'lastName': sanitizeField(form['rLastName'].value),\n// \t  'phone': sanitizeField(form['rPhone'].value),\n// \t  'mail': sanitizeField(form['rMail'].value)\n// \t}\n\n// \t// Build error message or return empty string\n// \tlet errors = ''\n// \terrors += !isValidPhone(member.phone) ? 'Enter a valid phone number.' : ''\n// \terrors += !isValidMail(member.mail) ? 'Enter a valid email address.'\n// \t  : isMember(member.mail, members) ? 'You are already registered, please login.'\n// \t\t: ''\n\n// \t// Push errors or register\n// \terrors ? alert(errors) : addNewMember(member, members)\n// }\n\n// const login = e => {\n// \t// Prevent form submission's default behavior\n// \te.preventDefault()\n\n// \tlet errors = ''\n// \tconst members = JSON.parse(getItem('members'))\n// \tconst form = document.forms['loginForm']\n// \tconst currUser = {\n// \t  'mail': sanitizeField(form['lmail'].value)\n// \t}\n\n// \t// Build error message or return empty string\n// \terrors += !isValidMail(currUser.mail) ? 'Enter a valid email address.'\n// \t  : !isMember(currUser.mail, members) ? 'You are not registered yet.'\n// \t\t: isBanned(currUser.mail, members) ? 'You are banned.'\n// \t\t  : ''\n\n// \t// Push errors or login\n// \terrors ? alert(errors) : startSession(isMember(currUser.mail, members))\n// }\n\n// const addNewMember = (member, members) => {\n// \tmembers.push(member)\n// \tsetItem('members', JSON.stringify(members))\n// \tstartSession(member)\n// }\n\n\n// export const Login = () => {\n// \tconst wrapper = document.createElement('div')\n\n// \t//Small welcoming alike message\n// \tconst welcomeMessage = document.createElement('p')\n// \twelcomeMessage.id = 'welcomeMessage'\n// \twelcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.'\n// \twrapper.appendChild(welcomeMessage)\n\n// \t// If the user wants to register\n// \tconst rForm = document.createElement('form')\n\n// \t//create basic inputs (first and last name, email, phone and the submit button)\n// \trForm.name = 'registerForm'\n// \trForm.appendChild(inputCreator('text', '', 'rFirstName', 'John'))\n// \trForm.appendChild(inputCreator('text', '', 'rLastName', 'Doe'))\n// \trForm.appendChild(inputCreator('text', '', 'rMail', 'john.doe@mail.com'))\n// \trForm.appendChild(inputCreator('text', '', 'rPhone', '5147124991'))\n\n// \tconst rButton = inputCreator('submit', 'Register', 'submit', '')\n// \trButton.addEventListener('click', register, false)\n// \trForm.appendChild(rButton)\n// \twrapper.appendChild(rForm)\n\n// \tconst separator = document.createElement('hr')\n// \twrapper.appendChild(separator)\n\n// \t// If the user wants to log in \n// \tconst lForm = document.createElement('form')\n\n// \t//create mail input and the submit button\n// \tlForm.name = 'loginForm'\n// \tlForm.appendChild(inputCreator('text', '', 'lmail', 'john.doe@mail.com'))\n// \tconst lButton = inputCreator('submit', 'Login', 'submit', '')\n// \tlButton.addEventListener('click', login, false)\n// \tlForm.appendChild(lButton)\n// \twrapper.appendChild(lForm)\n\n// \treturn wrapper\n// }\n\n\n\n\n\n\nclass Register extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _Register_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"updateMessage\"])('Bienvenue! Here you can register to start biking.');\n\n\t\t// If the user wants to register\n\t\tconst rForm = document.createElement('form');\n\n\t\t//create basic inputs (first and last name, email, phone and the submit button)\n\t\trForm.name = 'registerForm';\n\t\trForm.appendChild(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('text', '', 'rFirstName', 'John'));\n\t\trForm.appendChild(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('text', '', 'rLastName', 'Doe'));\n\t\trForm.appendChild(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('text', '', 'rMail', 'john.doe@mail.com'));\n\t\trForm.appendChild(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('text', '', 'rPhone', '5147124991'));\n\n\t\tconst rButton = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"inputCreator\"])('submit', 'Register', 'submit', '');\n\t\trButton.addEventListener('click', this.register, false);\n\t\trForm.appendChild(rButton);\n\t\tthis.appendChild(rForm);\n\t}\n\n\tregister(e) {\n\t\t// Prevent form submission's default behavior\n\t\te.preventDefault();\n\n\t\t// Load members from localStorage\n\t\tconst members = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getItem\"])('members'));\n\n\t\t// Sanitize fields\n\t\tconst form = document.forms['registerForm'];\n\t\tconst member = {\n\t\t\t'firstName': Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeField\"])(form['rFirstName'].value),\n\t\t\t'lastName': Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeField\"])(form['rLastName'].value),\n\t\t\t'phone': Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeField\"])(form['rPhone'].value),\n\t\t\t'mail': Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeField\"])(form['rMail'].value)\n\n\t\t\t// Build error message or return empty string\n\t\t};let errors = '';\n\t\terrors += !Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isValidPhone\"])(member.phone) ? 'Enter a valid phone number.' : '';\n\t\terrors += !Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isValidMail\"])(member.mail) ? 'Enter a valid email address.' : Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isMember\"])(member.mail, members) ? 'You are already registered, please login.' : '';\n\n\t\t// Push errors or register\n\t\tif (errors) {\n\t\t\talert(errors);\n\t\t} else {\n\t\t\tmembers.push(member);\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"])('members', JSON.stringify(members));\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"startSession\"])(member);\n\t\t}\n\t}\n}\n\nwindow.customElements.define('register-form', Register);\n\n//# sourceURL=webpack:///./src/components/Register/Register.js?");

/***/ }),

/***/ "./src/components/Stations/Stations.css":
/*!**********************************************!*\
  !*** ./src/components/Stations/Stations.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Stations.css */ \"./node_modules/css-loader/index.js!./src/components/Stations/Stations.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.css?");

/***/ }),

/***/ "./src/components/Stations/Stations.html":
/*!***********************************************!*\
  !*** ./src/components/Stations/Stations.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.html?");

/***/ }),

/***/ "./src/components/Stations/Stations.js":
/*!*********************************************!*\
  !*** ./src/components/Stations/Stations.js ***!
  \*********************************************/
/*! exports provided: Stations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stations\", function() { return Stations; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _Stations_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stations.html */ \"./src/components/Stations/Stations.html\");\n/* harmony import */ var _Stations_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Stations_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Stations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stations.css */ \"./src/components/Stations/Stations.css\");\n/* harmony import */ var _Stations_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stations_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Stations extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tthis.members = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getItem\"])('members'));\n\t\tthis.bikeStations = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getItem\"])('stations'));\n\t\tthis.session = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getSession\"])('session'));\n\n\t\tshadow.innerHTML = _Stations_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\tconst bikeStation = document.createElement('div');\n\t\tbikeStation.setAttribute('class', 'stations');\n\n\t\tconst divStationView = document.createElement('div');\n\t\tconst divStationTitle = document.createElement('h2');\n\t\tdivStationTitle.innerHTML = 'Bike Stations';\n\t\tdivStationView.appendChild(divStationTitle);\n\n\t\tconst mess = `<i>Salut ${this.session.firstName} ${this.session.lastName}! </br>\n\t\t You can rent a bike by clicking on it. </br>\n\t\t You can also switch station by clicking on a marker.</i>`;\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"updateMessage\"])(mess);\n\n\t\tthis.bikeStations.map((e, i) => {\n\t\t\t// Single station element\n\t\t\tconst station = document.createElement('div');\n\t\t\tstation.setAttribute('class', 'station');\n\t\t\tstation.id = `station-${i + 1}`;\n\n\t\t\tconst label = document.createElement('h3');\n\t\t\tlabel.innerHTML = `de Gaspé / Saint-Viateur`;\n\t\t\tlabel.id = `label-${i + 1}`;\n\t\t\tstation.appendChild(label);\n\n\t\t\te.map((f, j) => {\n\t\t\t\t// Single bike element\n\t\t\t\tconst bike = document.createElement('a');\n\t\t\t\tbike.href = '#';\n\t\t\t\tbike.className = f.id ? 'bike slot' : 'docks slot';\n\t\t\t\tbike.dataset.bike = f.id || '';\n\t\t\t\tbike.dataset.station = i;\n\t\t\t\tbike.dataset.slot = j;\n\t\t\t\tbike.dataset.color = f.color || '';\n\t\t\t\tbike.style.backgroundColor = f.color || '#f0f0f0';\n\t\t\t\tf.id ? bike.addEventListener('click', e => this.rentBike(e), false) : bike.addEventListener('click', e => this.manualBikeReturn(e), false);\n\t\t\t\tstation.appendChild(bike);\n\t\t\t});\n\n\t\t\tif (i === 0) divStationView.appendChild(station);else {\n\t\t\t\tstation.style.display = 'none';\n\t\t\t\tdivStationView.appendChild(station);\n\t\t\t}\n\t\t});\n\n\t\tbikeStation.appendChild(divStationView);\n\n\t\tthis.appendChild(bikeStation);\n\t}\n\n\t/**\r\n  * Ban member if countdown expires, otherwise, juste update the clock in the UI\r\n  */\n\tinitCountdown() {\n\t\tlet remainingTime = 1600;\n\n\t\tconst i = setInterval(() => {\n\t\t\tif (remainingTime === 0) {\n\t\t\t\tthis.banMember(i, this.session);\n\t\t\t} else {\n\t\t\t\tdocument.getElementById('countdown').innerHTML = `You have ${remainingTime / 200} hours left.`;\n\t\t\t\tremainingTime--;\n\t\t\t}\n\t\t}, 10);\n\t}\n\n\t/**\r\n  * \r\n  * @param {*} e \r\n  */\n\tmanualBikeReturn(e) {\n\t\te.preventDefault();\n\t\tif (Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"hasBike\"])(this.session)) {\n\t\t\t// Get data attributes from the target (position in array) and update the sations object\n\t\t\tconst i = e.target.dataset.station;\n\t\t\tconst j = e.target.dataset.slot;\n\t\t\tthis.bikeStations[i][j] = this.session.bike;\n\t\t\tdelete this.bikeStations[i][j].rentTime;\n\n\t\t\t// Detach bike from member\n\t\t\tdelete this.session.bike;\n\t\t\tthis.updateMemberSession(this.session);\n\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"])('stations', JSON.stringify(this.bikeStations));\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"reload\"])();\n\t\t} else {\n\t\t\talert('You are not riding a bike.');\n\t\t}\n\t}\n\n\t/**\r\n  * \r\n  * @param {*} e \r\n  */\n\trentBike(e) {\n\t\te.preventDefault();\n\t\tif (!Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"hasBike\"])(this.session)) {\n\n\t\t\t// Get data attributes from target\n\t\t\tconst bikeId = e.target.dataset.bike;\n\t\t\tconst bikeColor = e.target.dataset.color;\n\t\t\tconst stationNo = e.target.dataset.station;\n\t\t\tconst slotNo = e.target.dataset.slot;\n\t\t\tconst stationName = e.target.dataset.name;\n\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"updateNumberOfBike\"])(stationNo, stationName, 'rent');\n\n\t\t\t// Udpate UI of the slot (becomes parking slot)\n\t\t\te.target.className = 'slot docks';\n\t\t\te.target.style.backgroundColor = '#f0f0f0';\n\t\t\te.target.dataset.bike = '';\n\t\t\te.target.dataset.station = stationNo;\n\t\t\te.target.dataset.slot = slotNo;\n\t\t\te.target.dataset.color = '';\n\t\t\te.target.removeEventListener('click', e => this.rentBike(e));\n\t\t\te.target.addEventListener('click', e => this.manualBikeReturn(e), false);\n\n\t\t\t// Update data\n\t\t\t// Add bike object to session\n\t\t\tthis.session.bike = {\n\t\t\t\t'id': bikeId,\n\t\t\t\t'color': bikeColor,\n\t\t\t\t'rentTime': new Date().getTime()\n\t\t\t};\n\n\t\t\tthis.updateMemberSession(this.session);\n\n\t\t\t// Remove bike from the local storage\n\t\t\tthis.removeBikeFromStation(bikeId);\n\n\t\t\t// Start countdown\n\t\t\tthis.initCountdown();\n\t\t} else {\n\t\t\talert('You are already riding a bike!');\n\t\t}\n\t}\n\n\t/**\r\n  * \r\n  * @param {*} id \r\n  */\n\tremoveBikeFromStation(id) {\n\t\tthis.bikeStations.some((station, i) => station.some((bike, j) => bike.id === id ? station[j] = {} : false));\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"])('stations', JSON.stringify(this.bikeStations));\n\t}\n\n\t/**\r\n  * Updates stations object in localStorage and reload page\r\n  * @param {*} bike \r\n  */\n\tautomaticBikeReturn(bike) {\n\t\tdelete bike.rentTime;\n\t\tthis.bikeStations.some((station, i) => station.some((b, j) => Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isEmptyObject\"])(b) ? station[j] = bike : false));\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"])('stations', JSON.stringify(this.bikeStations));\n\t}\n\n\t/**\r\n  * Create a `banned` key and set it to true before update the member session\r\n  * @param {*} session \r\n  */\n\tmarkAsBanned(session) {\n\t\tsession.isBanned = true;\n\t\tthis.updateMemberSession(session);\n\t}\n\n\t/**\r\n  * \r\n  * @param {*} i \r\n  * @param {*} session \r\n  */\n\tbanMember(i, session) {\n\t\t// Stop countdown, update UI\n\t\tclearInterval(i);\n\t\talert('Your remaining time is over.');\n\n\t\t// Return the bike\n\t\tthis.automaticBikeReturn(session.bike);\n\n\t\t// Detach bike from member\n\t\tdelete session.bike;\n\t\tthis.updateMemberSession(session);\n\n\t\t// Update member session with `banned` key and \"redirect\" to login screen\n\t\tif (!Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"isPrivilegedAccount\"])(session.mail)) {\n\t\t\tthis.markAsBanned(session);\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"delSession\"])('session');\n\t\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"reload\"])();\n\t\t}\n\t}\n\n\t/**\r\n  * TODO: Update to object.assign\r\n  * @param {object} session \r\n  */\n\tupdateMemberSession(session) {\n\t\tlet fakeArray = [];\n\t\tfakeArray.push(session);\n\t\tconst updatedUsers = this.members.map(user => fakeArray.find(o => o.mail === user.mail) || user);\n\n\t\tObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"setItem\"])('members', JSON.stringify(updatedUsers));\n\t}\n\n}\n\nwindow.customElements.define('bike-stations', Stations);\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.js?");

/***/ }),

/***/ "./src/components/SysAdmin/SysAdmin.css":
/*!**********************************************!*\
  !*** ./src/components/SysAdmin/SysAdmin.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./SysAdmin.css */ \"./node_modules/css-loader/index.js!./src/components/SysAdmin/SysAdmin.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.css?");

/***/ }),

/***/ "./src/components/SysAdmin/SysAdmin.html":
/*!***********************************************!*\
  !*** ./src/components/SysAdmin/SysAdmin.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"wrapper\\\">\\r\\n    <slot></slot>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.html?");

/***/ }),

/***/ "./src/components/SysAdmin/SysAdmin.js":
/*!*********************************************!*\
  !*** ./src/components/SysAdmin/SysAdmin.js ***!
  \*********************************************/
/*! exports provided: SysAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SysAdmin\", function() { return SysAdmin; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _SysAdmin_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SysAdmin.html */ \"./src/components/SysAdmin/SysAdmin.html\");\n/* harmony import */ var _SysAdmin_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SysAdmin_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SysAdmin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SysAdmin.css */ \"./src/components/SysAdmin/SysAdmin.css\");\n/* harmony import */ var _SysAdmin_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SysAdmin_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass SysAdmin extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\n\t\tconst shadow = this.attachShadow({ mode: 'open' });\n\n\t\tshadow.innerHTML = _SysAdmin_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n\t}\n\n\tconnectedCallback() {\n\t\t// Load members from localStorage\n\t\tconst members = JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getItem\"])('members'));\n\n\t\tconst title = document.createElement('h2');\n\t\ttitle.innerHTML = 'System Admin- Members List';\n\t\tthis.appendChild(title);\n\n\t\tconst membersCard = document.createElement('div');\n\t\tmembersCard.className = 'flex-grid';\n\n\t\tmembers.map(m => {\n\t\t\tconst member = document.createElement('div');\n\t\t\tconst fullName = document.createElement('p');\n\t\t\tconst phone = document.createElement('p');\n\t\t\tconst mail = document.createElement('p');\n\t\t\tconst status = document.createElement('p');\n\n\t\t\tmember.className = 'col';\n\t\t\tm.name = `${m.firstName} ${m.lastName}`;\n\n\t\t\tfullName.innerHTML = m.name;\n\t\t\tphone.innerHTML = m.phone;\n\t\t\tmail.innerHTML = m.mail;\n\n\t\t\tmember.appendChild(fullName);\n\t\t\tmember.appendChild(phone);\n\t\t\tmember.appendChild(mail);\n\n\t\t\tif (m.isBanned) {\n\t\t\t\tstatus.innerHTML = 'Banned';\n\t\t\t} else {\n\t\t\t\tstatus.innerHTML = 'Not banned';\n\t\t\t}\n\n\t\t\tmember.appendChild(status);\n\n\t\t\tif (m.bike) {\n\t\t\t\tconst bikeIdColor = document.createElement('p');\n\t\t\t\tbikeIdColor.innerHTML = `Bike rented - ${m.bike.id}`;\n\t\t\t\tbikeIdColor.style.color = m.bike.color;\n\t\t\t\tmember.appendChild(bikeIdColor);\n\t\t\t}\n\t\t\tmembersCard.appendChild(member);\n\t\t});\n\n\t\tthis.appendChild(membersCard);\n\t}\n}\n\nwindow.customElements.define('sys-admin', SysAdmin);\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.js?");

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/*! exports provided: inputCreator, sanitizeField, isValidMail, isValidPhone, isMember, isBanned, getItem, setItem, delItem, getSession, setSession, delSession, startSession, reload, hasBike, isEmptyObject, isPrivilegedAccount, updateMessage, showStation, updateNumberOfBike, updateLabel, updateMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputCreator\", function() { return inputCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitizeField\", function() { return sanitizeField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidMail\", function() { return isValidMail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidPhone\", function() { return isValidPhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMember\", function() { return isMember; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBanned\", function() { return isBanned; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItem\", function() { return getItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItem\", function() { return setItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delItem\", function() { return delItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSession\", function() { return getSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSession\", function() { return setSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delSession\", function() { return delSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startSession\", function() { return startSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reload\", function() { return reload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasBike\", function() { return hasBike; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmptyObject\", function() { return isEmptyObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrivilegedAccount\", function() { return isPrivilegedAccount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMessage\", function() { return updateMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showStation\", function() { return showStation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateNumberOfBike\", function() { return updateNumberOfBike; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLabel\", function() { return updateLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMarker\", function() { return updateMarker; });\n/**\r\n * Helpers method used around the project\r\n */\n\n/**\r\n * @param  {string} type - type of the input\r\n * @param  {string} value - value of the input\r\n * @param  {string} name - name givent to the input\r\n * @param  {string} placeholder - placeholder\r\n */\nconst inputCreator = (type, value, name, placeholder) => {\n\tconst input = document.createElement('input');\n\tinput.type = type;\n\tinput.value = value;\n\tinput.name = name;\n\tinput.placeholder = placeholder;\n\treturn input;\n};\n\n/**\r\n * \r\n * @param {string} s - string to sanitize \r\n */\nconst sanitizeField = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\"/g, '&quot;');\n\n/**\r\n * \r\n * @param {string} e - string that need to be verified \r\n */\nconst isValidMail = e => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(e);\n\n/**\r\n * \r\n * @param {string} p - string that need to be verified \r\n */\nconst isValidPhone = p => /^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/.test(p);\n\n/**\r\n * Check if email is in the members \"db\"\r\n * @param {string} email \r\n * @param {object} members \r\n */\nconst isMember = (email, members) => members.find(m => m.mail === email);\n\n/**\r\n * Check if email is in the members \"db\" and  banned\r\n * @param {string} email \r\n * @param {object} members \r\n */\nconst isBanned = (email, members) => {\n\tconst member = members.find(m => m.mail === email);\n\treturn member.isBanned === true;\n};\n\n/**\r\n*  Mostly data manipulation\r\n*  local or session storage\r\n*/\n\nconst getItem = i => window.localStorage.getItem(i) || false;\n\nconst setItem = (i, v) => window.localStorage.setItem(i, v);\n\nconst delItem = i => window.localStorage.removeItem(i);\n\nconst getSession = s => window.sessionStorage.getItem(s);\n\nconst setSession = (s, v) => window.sessionStorage.setItem(s, v);\n\nconst delSession = s => window.sessionStorage.removeItem(s);\n\n/**\r\n* Create temporary session and reload page\r\n* @param {string} member \r\n*/\nconst startSession = member => {\n\tsetSession('session', JSON.stringify(member));\n\twindow.location.reload();\n};\n\nconst reload = () => window.location.reload();\n\nconst hasBike = session => session.hasOwnProperty('bike') === true;\n\nconst isEmptyObject = o => (Object.keys(o).length === 0 && o.constructor === Object) === true;\n\nconst isPrivilegedAccount = session => (session === 'samya@mail.com' || session === 'kdog@mail.com') === true;\n\nconst updateMessage = newMessage => document.querySelector('#generalMessage').innerHTML = newMessage;\n\nconst showStation = (id, name) => {\n\tfor (let i = 1; i < 4; i++) {\n\t\tif (i === id) {\n\t\t\tdocument.querySelector(`#station-${i}`).style.display = 'block';\n\t\t\tdocument.querySelector(`#label-${i}`).innerHTML = `Bike Station - ${name}`;\n\t\t} else {\n\t\t\tdocument.querySelector(`#station-${i}`).style.display = 'none';\n\t\t}\n\t}\n};\n\nconst CJSON = __webpack_require__(/*! circular-json */ \"./node_modules/circular-json/build/circular-json.node.js\");\nconst updateNumberOfBike = (stationId, stationName, type) => {\n\tlet markers = CJSON.parse(getItem('markers'));\n\n\tmarkers.forEach(marker => {\n\n\t\tif (marker.title === stationName) {\n\t\t\tif (type === 'rent') {\n\t\t\t\tmarker.f.label = \"JE LOUE\";\n\t\t\t} else if (type === 'return') {\n\t\t\t\tmarker.f.label += 1;\n\t\t\t}\n\t\t}\n\n\t\tconsole.log(marker.f.label);\n\t});\n\n\tsetItem('markers', CJSON.stringify(markers));\n};\n\nconst updateLabel = marker => {\n\tlet stations = JSON.parse(getItem('stations'));\n\tlet numberOfBike = 0;\n\n\tstations.map(station => {\n\t\tstation.map(s => {\n\t\t\tif (!isEmptyObject(s)) numberOfBike++;\n\t\t});\n\t\tupdateMarker(numberOfBike, marker);\n\t});\n};\n\nconst updateMarker = (numberOfBike, m) => {\n\t//let markers = CJSON.parse(getItem('markers'))\n\n\t// markers.forEach(marker => {\n\t// \tmarker.f.label = numberOfBike\n\t// \tconsole.log(marker.f.label)\n\t// })\n\n\t// google.maps.getMap().then(map => {\n\t// \tconsole.log(map)\n\t// })\n\n\t//setItem('markers', CJSON.stringify(markers))\n};\n\n//# sourceURL=webpack:///./src/helpers/helpers.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ \"./node_modules/css-loader/index.js!./src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Message_Message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Message/Message.js */ \"./src/components/Message/Message.js\");\n/* harmony import */ var _components_Login_Login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Login/Login.js */ \"./src/components/Login/Login.js\");\n/* harmony import */ var _components_Logout_Logout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Logout/Logout.js */ \"./src/components/Logout/Logout.js\");\n/* harmony import */ var _components_Register_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Register/Register.js */ \"./src/components/Register/Register.js\");\n/* harmony import */ var _components_Map_Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Map/Map.js */ \"./src/components/Map/Map.js\");\n/* harmony import */ var _components_Countdown_Countdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Countdown/Countdown.js */ \"./src/components/Countdown/Countdown.js\");\n/* harmony import */ var _components_Stations_Stations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Stations/Stations.js */ \"./src/components/Stations/Stations.js\");\n/* harmony import */ var _components_CityWorker_CityWorker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CityWorker/CityWorker.js */ \"./src/components/CityWorker/CityWorker.js\");\n/* harmony import */ var _components_SysAdmin_SysAdmin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SysAdmin/SysAdmin.js */ \"./src/components/SysAdmin/SysAdmin.js\");\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/helpers.js */ \"./src/helpers/helpers.js\");\n/* harmony import */ var _public_members_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../public/members.js */ \"./public/members.js\");\n/* harmony import */ var _public_stations_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../public/stations.js */ \"./public/stations.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\r\n  Initiliaze an new array of Members\r\n  or fetch existing data from localstorage\r\n*/\nObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getItem\"])('members') ? Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getItem\"])('members') : Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"setItem\"])('members', JSON.stringify(_public_members_js__WEBPACK_IMPORTED_MODULE_10__[\"initSavedMembers\"]));\n\n/*\r\n  Initiliaze an new array of Stations\r\n  or fetch existing data from localstorage\r\n*/\nObject(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getItem\"])('stations') ? Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getItem\"])('stations') : Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"setItem\"])('stations', JSON.stringify(_public_stations_js__WEBPACK_IMPORTED_MODULE_11__[\"initStations\"]));\n\n/*\r\n  Shows Login component if no session exists\r\n  Shows Station component otherwise\r\n  Shows additionnal components to super users\r\n*/\n\nconst logoutButton = new _components_Logout_Logout_js__WEBPACK_IMPORTED_MODULE_2__[\"Logout\"]();\nconst loginForm = new _components_Login_Login_js__WEBPACK_IMPORTED_MODULE_1__[\"Login\"]();\nconst registerForm = new _components_Register_Register_js__WEBPACK_IMPORTED_MODULE_3__[\"Register\"]();\nconst sysAdmin = new _components_SysAdmin_SysAdmin_js__WEBPACK_IMPORTED_MODULE_8__[\"SysAdmin\"]();\nconst cityWorker = new _components_CityWorker_CityWorker_js__WEBPACK_IMPORTED_MODULE_7__[\"CityWorker\"]();\nconst bikeStations = new _components_Stations_Stations_js__WEBPACK_IMPORTED_MODULE_6__[\"Stations\"]();\nconst countdown = new _components_Countdown_Countdown_js__WEBPACK_IMPORTED_MODULE_5__[\"Countdown\"]();\nconst message = new _components_Message_Message_js__WEBPACK_IMPORTED_MODULE_0__[\"Message\"]();\n\ndocument.querySelector('#message').appendChild(message);\ndocument.getElementById('map').appendChild(Object(_components_Map_Map_js__WEBPACK_IMPORTED_MODULE_4__[\"Map\"])());\nif (Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getSession\"])('session')) {\n  document.querySelector('#logout').appendChild(logoutButton);\n  document.querySelector('#stations').appendChild(bikeStations);\n  document.getElementById('map').appendChild(Object(_components_Map_Map_js__WEBPACK_IMPORTED_MODULE_4__[\"Map\"])());\n  document.querySelector('#countdown').appendChild(countdown);\n  if (JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getSession\"])('session')).mail === 'kdog@mail.com') {\n    document.querySelector('#sysAdmin').appendChild(sysAdmin);\n  } else if (JSON.parse(Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"getSession\"])('session')).mail === 'samya@mail.com') {\n    document.querySelector('#cityWorker').appendChild(cityWorker);\n  }\n} else {\n  document.querySelector('#login').appendChild(loginForm);\n  document.querySelector('#register').appendChild(registerForm);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });