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

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./src/components/Login/Login.css":
/*!****************************************!*\
  !*** ./src/components/Login/Login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"input, button {\\r\\n  display: block;\\r\\n  height: 30px;\\r\\n  margin-bottom: 2em;\\r\\n  min-width: 50%;\\r\\n  font-size: 100%;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  background-color: pink;\\r\\n}\\r\\n\\r\\ndiv {\\r\\n  background-color: blue\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Login/Login.css?");

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Login = undefined;\n\n__webpack_require__(/*! ./Login.css */ \"./src/components/Login/Login.css\");\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\nvar Login = exports.Login = function Login() {\n\tvar wrapper = document.createElement('div');\n\n\t//Small welcoming alike message\n\tvar welcomeMessage = document.createElement('p');\n\twelcomeMessage.id = 'welcomeMessage';\n\twelcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.';\n\twrapper.appendChild(welcomeMessage);\n\n\t//If the user wants to register\n\tvar registerForm = document.createElement('form');\n\tregisterForm.name = 'register-form';\n\tregisterForm.appendChild((0, _helpers.createInput)('text', '', 'register-name', 'Enter your name'));\n\tregisterForm.appendChild((0, _helpers.createInput)('text', '', 'register-mail', 'Enter your email address'));\n\tregisterForm.appendChild((0, _helpers.createInput)('text', '', 'register-phone', 'Enter your phone number (no space)'));\n\tvar submitRegister = (0, _helpers.createInput)('submit', 'Register', 'register-submit', '');\n\t//submitRegister.addEventListener('click', registerAttempt, false)\n\tregisterForm.appendChild(submitRegister);\n\twrapper.appendChild(registerForm);\n\n\tvar separator = document.createElement('hr');\n\twrapper.appendChild(separator);\n\n\t// Login form\n\tvar loginForm = document.createElement('form');\n\tloginForm.name = 'login-form';\n\tloginForm.appendChild((0, _helpers.createInput)('text', '', 'login-mail', 'Enter your email address'));\n\tvar submitLogin = (0, _helpers.createInput)('submit', 'Login', 'login-submit', '');\n\t//submitLogin.addEventListener('click', loginAttempt, false)\n\tloginForm.appendChild(submitLogin);\n\twrapper.appendChild(loginForm);\n\n\treturn wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/Login/Login.js?");

/***/ }),

/***/ "./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nwindow.initMap = function () {\n\t//Ubisoft DeGaspé position\n\tvar ubisoft = { lat: 45.527641, lng: -73.596386 };\n\tvar map = new google.maps.Map(document.getElementById('map'), {\n\t\tzoom: 16,\n\t\tcenter: ubisoft\n\t});\n\n\tvar markersPosition = [{\n\t\tname: 'de Gaspé / Saint-Viateur',\n\t\tposition: {\n\t\t\tlat: 45.5277132,\n\t\t\tlng: -73.5975606\n\t\t}\n\t}, {\n\t\tname: 'Maguire / Henri-Julien',\n\t\tposition: {\n\t\t\tlat: 45.5271944,\n\t\t\tlng: -73.5934383\n\t\t}\n\t}, {\n\t\tname: 'Saint-Dominique / Saint-Viateur',\n\t\tposition: {\n\t\t\tlat: 45.5266255,\n\t\t\tlng: -73.598367\n\t\t}\n\t}];\n\n\tmarkersPosition.forEach(function (marker) {\n\t\tnew google.maps.Marker({\n\t\t\tposition: marker.position,\n\t\t\tmap: map\n\t\t}).addListener('click', function () {\n\t\t\tconsole.log('rent the bike?');\n\t\t});\n\t});\n};\n\nvar Map = exports.Map = function Map() {\n\tvar p = document.createElement('p');\n\tp.innerHTML = 'Loading Google Map';\n\treturn p;\n};\n\n//# sourceURL=webpack:///./src/components/Map/Map.js?");

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n/*\r\n  Helper methods\r\n*/\n\nvar isEmptyObject = exports.isEmptyObject = function isEmptyObject(o) {\n\t\treturn (Object.keys(o).length === 0 && o.constructor === Object) === true;\n};\n\nvar sanitize = exports.sanitize = function sanitize(s) {\n\t\treturn s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\"/g, '&quot;');\n};\n\nvar isValidName = exports.isValidName = function isValidName(n) {\n\t\treturn (n.length >= 4 && n.length < 20) === true;\n};\n\nvar isValidEmail = exports.isValidEmail = function isValidEmail(e) {\n\t\treturn (/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(e)\n\t\t);\n};\n\nvar isValidPhone = exports.isValidPhone = function isValidPhone(p) {\n\t\treturn (/^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/.test(p)\n\t\t);\n};\n\nvar isMember = exports.isMember = function isMember(email, members) {\n\t\treturn members.find(function (m) {\n\t\t\t\treturn m.mail === email;\n\t\t});\n};\n\nvar isPrivilegedAccount = exports.isPrivilegedAccount = function isPrivilegedAccount(session) {\n\t\treturn (session === 'admin@sb.com' || session === 'staff@sb.com') === true;\n};\n\nvar hasBike = exports.hasBike = function hasBike(session) {\n\t\treturn session.hasOwnProperty('bike') === true;\n};\n\nvar isBanned = exports.isBanned = function isBanned(email, members) {\n\t\tvar member = members.find(function (m) {\n\t\t\t\treturn m.mail === email;\n\t\t});\n\t\treturn member.banned === true;\n};\n\n/*\r\n  Data manipulation methods\r\n*/\n\nvar getItem = exports.getItem = function getItem(i) {\n\t\treturn window.localStorage.getItem(i) || false;\n};\n\nvar setItem = exports.setItem = function setItem(i, v) {\n\t\treturn window.localStorage.setItem(i, v);\n};\n\nvar delItem = exports.delItem = function delItem(i) {\n\t\treturn window.localStorage.removeItem(i);\n};\n\nvar getSession = exports.getSession = function getSession(s) {\n\t\treturn window.sessionStorage.getItem(s);\n};\n\nvar setSession = exports.setSession = function setSession(s, v) {\n\t\treturn window.sessionStorage.setItem(s, v);\n};\n\nvar delSession = exports.delSession = function delSession(s) {\n\t\treturn window.sessionStorage.removeItem(s);\n};\n\n/*\r\n  UI manipulation methods\r\n*/\n\nvar updateInstruction = exports.updateInstruction = function updateInstruction(i) {\n\t\tdocument.getElementById('instructions').innerHTML = i;\n};\n\nvar createInput = exports.createInput = function createInput(type, value, name, placeholder) {\n\t\tvar input = document.createElement('input');\n\t\tinput.type = type;\n\t\tinput.value = value;\n\t\tinput.name = name;\n\t\tinput.placeholder = placeholder;\n\t\treturn input;\n};\n\nvar pageReload = exports.pageReload = function pageReload() {\n\t\treturn window.location.reload();\n};\n\n//# sourceURL=webpack:///./src/helpers/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Login = __webpack_require__(/*! ./components/Login/Login.js */ \"./src/components/Login/Login.js\");\n\nvar _Map = __webpack_require__(/*! ./components/Map/Map.js */ \"./src/components/Map/Map.js\");\n\ndocument.getElementById('login').appendChild((0, _Login.Login)());\ndocument.getElementById('map').appendChild((0, _Map.Map)());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });