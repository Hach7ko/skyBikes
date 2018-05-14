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

/***/ "./node_modules/css-loader/index.js!./src/components/Login/Login.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Login/Login.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#login {\\r\\n}\\r\\n\\r\\ninput, button {\\r\\n  display: block;\\r\\n  height: 30px;\\r\\n  margin-bottom: 2em;\\r\\n  min-width: 50%;\\r\\n  font-size: 100%;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  border-left: 0;\\r\\n  border-right: 0;\\r\\n  border-top: 0;\\r\\n  border-bottom: 1px solid #dcdcdc;\\r\\n}\\r\\n\\r\\ninput[type='submit'], button {\\r\\n  min-width: 25%;\\r\\n  background-color: #4336f4;\\r\\n  height: 40px;\\r\\n  line-height: 40px;\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n  -webkit-transition: background-color .3s;\\r\\n  -moz-transition: background-color .3s;\\r\\n  -o-transition: background-color .3s;\\r\\n  transition: background-color .3s;\\r\\n}\\r\\n\\r\\ninput[type='submit']:hover, input[type='submit']:focus {\\r\\n  background-color: #4336f4;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 640px) {\\r\\n  input, input[type='submit'], button {\\r\\n    min-width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border: 0;\\r\\n  height: 0;\\r\\n  border-top: none;\\r\\n  border-bottom: 1px dotted #dcdcdc;\\r\\n  margin: 4em 0;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Login/Login.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/Stations/Stations.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Stations/Stations.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".station {\\r\\n    width: 100%;\\r\\n    margin-bottom: 2em;\\r\\n  }\\r\\n  \\r\\n  #instructions {\\r\\n    font-style: italic;\\r\\n    margin-bottom: 2em;\\r\\n  }\\r\\n  \\r\\n  .station p {\\r\\n    margin-bottom: 1em;\\r\\n  }\\r\\n  \\r\\n  .slot {\\r\\n    display: inline-block;\\r\\n    width: 10%;\\r\\n    padding: 2em 1em;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n  }\\r\\n  \\r\\n  .bike {\\r\\n    background-image: url(\" + escape(__webpack_require__(/*! ./../../../public/icons/bicycle.png */ \"./public/icons/bicycle.png\")) + \");\\r\\n  }\\r\\n  \\r\\n  .docks {\\r\\n    background-image: url(\" + escape(__webpack_require__(/*! ./../../../public/icons/docks.png */ \"./public/icons/docks.png\")) + \");\\r\\n    color: black;\\r\\n  } \\r\\n  \\r\\n  \\r\\n  @media only screen and (max-width: 640px) {\\r\\n    .slot {\\r\\n      width: 20%;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/SysAdmin/SysAdmin.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/SysAdmin/SysAdmin.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"button {\\r\\nmargin: 2em 0 0 0;\\r\\n}\\r\\n\\r\\n.member {\\r\\n  overflow: auto;\\r\\n  clear: both;\\r\\n}\\r\\n\\r\\n.member div, .column-title {\\r\\n  float: left;\\r\\n  width: 14.28%;\\r\\n  padding: 1em .5em;\\r\\n  white-space: nowrap;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 640px) {\\r\\n  .member div {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.member div {\\r\\n  border-right: 1px solid #f0f0f0;\\r\\n}\\r\\n\\r\\n.bike-color {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.member {\\r\\n  border-left: 1px solid #f0f0f0;\\r\\n  border-top: 1px solid #f0f0f0;\\r\\n}\\r\\n\\r\\n.member:last-of-type {\\r\\n  border-bottom: 1px solid #f0f0f0;\\r\\n}\\r\\n\\r\\n.member:nth-child(odd) {\\r\\n  background: #f0f0f0;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 640px) {\\r\\n  .member div {\\r\\n    border-bottom: 1px solid #f0f0f0;\\r\\n  }\\r\\n\\r\\n  .member:nth-child(odd) div {\\r\\n    border-bottom: 1px solid #fff;\\r\\n  }\\r\\n\\r\\n  .member:last-of-type {\\r\\n    border-bottom: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 640px) {\\r\\n  .member:hover {\\r\\n    color: #fff;\\r\\n    background: #4336f4;\\r\\n  }\\r\\n}\\r\\n\\r\\n.titles {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 640px) {\\r\\n  .titles, .member .no-data {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n.column-title {\\r\\n  text-align: center;\\r\\n  font-weight: 700;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n\\tfont-family: 'Roboto', sans-serif;\\r\\n\\tline-height: 1.6;\\r\\n}\\r\\n\\r\\n/* Custom styles */\\r\\n\\r\\nhtml {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n*, *:before, *:after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\tbackground: #f0f0f0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n\\tbackground: #fff;\\r\\n\\tpadding: 1em;\\r\\n\\tbox-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\r\\n\\tbackground-color: #4336f4;\\r\\n\\tcolor: #fff;\\r\\n\\tfont-size: 1.5rem;\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n\\tpadding: 1em;\\r\\n\\tbackground-color: #4336f4;\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n\\r\\nh2 {\\r\\n\\tfont-size: 1.25rem;\\r\\n\\tmargin-bottom: 1em;\\r\\n}\\r\\n\\r\\n.page-wrap {\\r\\n\\twidth: 100%;\\r\\n\\tmax-width: 1000px;\\r\\n\\tbackground: #fff;\\r\\n\\tpadding: 2em;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar initSavedMembers = exports.initSavedMembers = [{\n\t'mail': 'samya@mail.com',\n\t'firstName': 'Samya',\n\t'lastName': 'Khemri',\n\t'phone': '5147124991',\n\t'hasBike': false\n}, {\n\t'mail': 'kdog@mail.com',\n\t'firstName': 'Kevin',\n\t'lastName': 'Massicotte',\n\t'phone': '5141234567',\n\t'hasBike': false\n}, {\n\t'mail': 'ban@mail.com',\n\t'firstName': 'Dark',\n\t'lastName': 'Vador',\n\t'phone': '5147894561',\n\t'hasBike': false,\n\t'isBanned': true\n}];\n\n//# sourceURL=webpack:///./public/members.js?");

/***/ }),

/***/ "./public/stations.js":
/*!****************************!*\
  !*** ./public/stations.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar initStations = exports.initStations = [[{\n    'id': '1',\n    'color': '#9400D3'\n}, {\n    'id': '2',\n    'color': '#4B0082'\n}, {\n    'id': '3',\n    'color': '#0000FF'\n}, {\n    'id': '4',\n    'color': '#00FF00'\n}, {\n    'id': '5',\n    'color': '#FFFF00'\n}, {\n    'id': '6',\n    'color': '#FF7F00'\n}, {\n    'id': '7',\n    'color': '#FF0000'\n}, {}, {}, {}], [{\n    'id': '8',\n    'color': '#9400D3'\n}, {\n    'id': '9',\n    'color': '#4B0082'\n}, {\n    'id': '10',\n    'color': '#0000FF'\n}, {\n    'id': '11',\n    'color': '#00FF00'\n}, {\n    'id': '12',\n    'color': '#FFFF00'\n}, {\n    'id': '13',\n    'color': '#FF7F00'\n}, {\n    'id': '14',\n    'color': '#FF0000'\n}, {}, {}, {}], [{\n    'id': '15',\n    'color': '#9400D3'\n}, {\n    'id': '16',\n    'color': '#4B0082'\n}, {\n    'id': '17',\n    'color': '#0000FF'\n}, {\n    'id': '18',\n    'color': '#00FF00'\n}, {\n    'id': '19',\n    'color': '#FFFF00'\n}, {\n    'id': '20',\n    'color': '#FF7F00'\n}, {\n    'id': '21',\n    'color': '#FF0000'\n}, {}, {}, {}]];\n\n//# sourceURL=webpack:///./public/stations.js?");

/***/ }),

/***/ "./src/components/Bikes/Bikes.js":
/*!***************************************!*\
  !*** ./src/components/Bikes/Bikes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Bikes = exports.rentBike = undefined;\n\nvar _Countdown = __webpack_require__(/*! ./../Countdown/Countdown.js */ \"./src/components/Countdown/Countdown.js\");\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\nvar rentBike = exports.rentBike = function rentBike() {\n\tvar member = JSON.parse((0, _helpers.getSession)('session'));\n\n\tif (member.hasBike) alert('You already have a bike!');else {\n\t\tmember.hasBike = true;\n\t\t(0, _Countdown.startCountdown)();\n\n\t\tconsole.log(member.firstName + ' ' + member.lastName + ' has rent a bike!', member);\n\n\t\tsetTimeout(function () {\n\t\t\tmember.hasBike = false;\n\t\t\tconsole.log(member.firstName + ' ' + member.lastName + ' has released a bike!', member);\n\t\t}, 8000);\n\t}\n};\n\nvar Bikes = exports.Bikes = function Bikes() {};\n\n//# sourceURL=webpack:///./src/components/Bikes/Bikes.js?");

/***/ }),

/***/ "./src/components/CityWorker/CityWorker.js":
/*!*************************************************!*\
  !*** ./src/components/CityWorker/CityWorker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.CityWorker = undefined;\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\nvar _stations = __webpack_require__(/*! ./../../../public/stations.js */ \"./public/stations.js\");\n\nvar _members = __webpack_require__(/*! ./../../../public/members.js */ \"./public/members.js\");\n\n/*\r\n\tComponent logic\r\n*/\n\nvar cleanBikes = function cleanBikes() {\n\t// Simple hard reset so far\n\t(0, _helpers.setItem)('stations', JSON.stringify(_stations.initStations));\n\n\t// Also clean users to avoid conflicts\n\t(0, _helpers.setItem)('members', JSON.stringify(_members.initSavedMembers));\n\n\t(0, _helpers.reload)();\n};\n\n/*\r\n\tComponent UI\r\n*/\nvar CityWorker = exports.CityWorker = function CityWorker() {\n\tvar wrapper = document.createElement('div');\n\n\t// Area title\n\tvar separator = document.createElement('hr');\n\twrapper.appendChild(separator);\n\n\tvar title = document.createElement('h2');\n\ttitle.innerHTML = 'City Worker';\n\twrapper.appendChild(title);\n\n\t// Sort button\n\tvar button = document.createElement('button');\n\tbutton.innerHTML = 'Clean bikes';\n\tbutton.addEventListener('click', cleanBikes, false);\n\twrapper.appendChild(button);\n\treturn wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/CityWorker/CityWorker.js?");

/***/ }),

/***/ "./src/components/Countdown/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/Countdown/Countdown.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar startCountdown = exports.startCountdown = function startCountdown() {\n\tvar timeLeft = '08:00';\n\tdocument.getElementById('timer').innerHTML = timeLeft;\n\n\tvar timeArray = timeLeft.split(/[:]+/);\n\tvar m = timeArray[0];\n\tvar s = checkSecond(timeArray[1] - 1);\n\tif (s === 59) m = m - 1;\n\tif (m < 0) alert('You are banned!');\n\n\tdocument.getElementById('timer').innerHTML = m + ':' + s;\n\tsetTimeout(startCountdown, 1000);\n};\n\nvar checkSecond = function checkSecond(sec) {\n\tif (sec < 10 && sec >= 0) sec = '0' + sec; // add zero in front of numbers < 10\n\tif (sec < 0) sec = '59';\n\treturn sec;\n};\n\nvar Countdown = exports.Countdown = function Countdown() {\n\tvar wrapper = document.createElement('div');\n\n\tvar timeLeft = document.createElement('p');\n\ttimeLeft.innerHTML = 'Time Left : ';\n\twrapper.appendChild(timeLeft);\n\n\tvar timer = document.createElement('span');\n\ttimer.id = 'timer';\n\twrapper.appendChild(timer);\n\n\treturn wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/Countdown/Countdown.js?");

/***/ }),

/***/ "./src/components/Login/Login.css":
/*!****************************************!*\
  !*** ./src/components/Login/Login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Login.css */ \"./node_modules/css-loader/index.js!./src/components/Login/Login.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Login/Login.css?");

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Login = undefined;\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\n__webpack_require__(/*! ./Login.css */ \"./src/components/Login/Login.css\");\n\nvar register = function register(e) {\n\t// Prevent form submission's default behavior\n\te.preventDefault();\n\n\t// Load members from localStorage\n\tvar members = JSON.parse((0, _helpers.getItem)('members'));\n\n\t// Sanitize fields\n\tvar form = document.forms['registerForm'];\n\tvar member = {\n\t\t'firstName': (0, _helpers.sanitizeField)(form['rFirstName'].value),\n\t\t'lastName': (0, _helpers.sanitizeField)(form['rLastName'].value),\n\t\t'phone': (0, _helpers.sanitizeField)(form['rPhone'].value),\n\t\t'mail': (0, _helpers.sanitizeField)(form['rMail'].value)\n\n\t\t// Build error message or return empty string\n\t};var errors = '';\n\terrors += !(0, _helpers.isValidPhone)(member.phone) ? 'Enter a valid phone number.' : '';\n\terrors += !(0, _helpers.isValidMail)(member.mail) ? 'Enter a valid email address.' : (0, _helpers.isMember)(member.mail, members) ? 'You are already registered, please login.' : '';\n\n\t// Push errors or register\n\terrors ? alert(errors) : addNewMember(member, members);\n};\n\nvar login = function login(e) {\n\t// Prevent form submission's default behavior\n\te.preventDefault();\n\n\tvar errors = '';\n\tvar members = JSON.parse((0, _helpers.getItem)('members'));\n\tvar form = document.forms['loginForm'];\n\tvar currUser = {\n\t\t'mail': (0, _helpers.sanitizeField)(form['lmail'].value)\n\n\t\t// Build error message or return empty string\n\t};errors += !(0, _helpers.isValidMail)(currUser.mail) ? 'Enter a valid email address.' : !(0, _helpers.isMember)(currUser.mail, members) ? 'You are not registered yet.' : (0, _helpers.isBanned)(currUser.mail, members) ? 'You are banned.' : '';\n\n\t// Push errors or login\n\terrors ? alert(errors) : (0, _helpers.startSession)((0, _helpers.isMember)(currUser.mail, members));\n};\n\nvar addNewMember = function addNewMember(member, members) {\n\tmembers.push(member);\n\t(0, _helpers.setItem)('members', JSON.stringify(members));\n\t(0, _helpers.startSession)(member);\n};\n\nvar Login = exports.Login = function Login() {\n\tvar wrapper = document.createElement('div');\n\n\t//Small welcoming alike message\n\tvar welcomeMessage = document.createElement('p');\n\twelcomeMessage.id = 'welcomeMessage';\n\twelcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.';\n\twrapper.appendChild(welcomeMessage);\n\n\t// If the user wants to register\n\tvar rForm = document.createElement('form');\n\n\t//create basic inputs (first and last name, email, phone and the submit button)\n\trForm.name = 'registerForm';\n\trForm.appendChild((0, _helpers.inputCreator)('text', '', 'rFirstName', 'John'));\n\trForm.appendChild((0, _helpers.inputCreator)('text', '', 'rLastName', 'Doe'));\n\trForm.appendChild((0, _helpers.inputCreator)('text', '', 'rMail', 'john.doe@mail.com'));\n\trForm.appendChild((0, _helpers.inputCreator)('text', '', 'rPhone', '5147124991'));\n\n\tvar rButton = (0, _helpers.inputCreator)('submit', 'Register', 'submit', '');\n\trButton.addEventListener('click', register, false);\n\trForm.appendChild(rButton);\n\twrapper.appendChild(rForm);\n\n\tvar separator = document.createElement('hr');\n\twrapper.appendChild(separator);\n\n\t// If the user wants to log in \n\tvar lForm = document.createElement('form');\n\n\t//create mail input and the submit button\n\tlForm.name = 'loginForm';\n\tlForm.appendChild((0, _helpers.inputCreator)('text', '', 'lmail', 'john.doe@mail.com'));\n\tvar lButton = (0, _helpers.inputCreator)('submit', 'Login', 'submit', '');\n\tlButton.addEventListener('click', login, false);\n\tlForm.appendChild(lButton);\n\twrapper.appendChild(lForm);\n\n\treturn wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/Login/Login.js?");

/***/ }),

/***/ "./src/components/Logout/Logout.js":
/*!*****************************************!*\
  !*** ./src/components/Logout/Logout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Logout = undefined;\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\nvar logout = function logout() {\n    (0, _helpers.delSession)('session');\n    (0, _helpers.reload)();\n};\n\nvar Logout = exports.Logout = function Logout() {\n    var wrapper = document.createElement('div');\n\n    // If the user wants to log out - just create logout button\n    var logoutButton = (0, _helpers.inputCreator)('submit', 'Logout', 'submit', '');\n    logoutButton.addEventListener('click', logout, false);\n    wrapper.appendChild(logoutButton);\n\n    return wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/Logout/Logout.js?");

/***/ }),

/***/ "./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Map = undefined;\n\nvar _Bikes = __webpack_require__(/*! ./../Bikes/Bikes.js */ \"./src/components/Bikes/Bikes.js\");\n\nwindow.initMap = function () {\n\t//Ubisoft DeGaspé position\n\tvar ubisoft = { lat: 45.527641, lng: -73.596386 };\n\tvar map = new google.maps.Map(document.getElementById('map'), {\n\t\tzoom: 16,\n\t\tcenter: ubisoft\n\t});\n\n\tvar markersPosition = [{\n\t\tname: 'de Gaspé / Saint-Viateur',\n\t\tposition: {\n\t\t\tlat: 45.5277132,\n\t\t\tlng: -73.5975606\n\t\t}\n\t}, {\n\t\tname: 'Maguire / Henri-Julien',\n\t\tposition: {\n\t\t\tlat: 45.5271944,\n\t\t\tlng: -73.5934383\n\t\t}\n\t}, {\n\t\tname: 'Saint-Dominique / Saint-Viateur',\n\t\tposition: {\n\t\t\tlat: 45.5266255,\n\t\t\tlng: -73.598367\n\t\t}\n\t}];\n\n\tmarkersPosition.forEach(function (marker) {\n\t\tnew google.maps.Marker({\n\t\t\tposition: marker.position,\n\t\t\tmap: map,\n\t\t\ttitle: marker.name,\n\t\t\tlabel: '7'\n\t\t}).addListener('click', function () {\n\t\t\t(0, _Bikes.rentBike)();\n\t\t});\n\t});\n};\n\nvar Map = exports.Map = function Map() {\n\tvar p = document.createElement('p');\n\tp.innerHTML = 'Loading Google Map';\n\treturn p;\n};\n\n//# sourceURL=webpack:///./src/components/Map/Map.js?");

/***/ }),

/***/ "./src/components/Stations/Stations.css":
/*!**********************************************!*\
  !*** ./src/components/Stations/Stations.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Stations.css */ \"./node_modules/css-loader/index.js!./src/components/Stations/Stations.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.css?");

/***/ }),

/***/ "./src/components/Stations/Stations.js":
/*!*********************************************!*\
  !*** ./src/components/Stations/Stations.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Stations = undefined;\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\n__webpack_require__(/*! ./Stations.css */ \"./src/components/Stations/Stations.css\");\n\nvar Stations = exports.Stations = function Stations() {\n\tvar divBikeStationView = document.createElement('div');\n\tdivBikeStationView.setAttribute('class', 'stations');\n\n\tvar members = JSON.parse((0, _helpers.getItem)('members'));\n\tvar bikeStations = JSON.parse((0, _helpers.getItem)('stations'));\n\tvar session = JSON.parse((0, _helpers.getSession)('session'));\n\n\t/**\r\n  * TODO: Update to object.assign\r\n  * @param {object} session \r\n  */\n\tvar updateMemberSession = function updateMemberSession(session) {\n\t\tvar fakeArray = [];\n\t\tfakeArray.push(session);\n\t\tvar updatedUsers = members.map(function (user) {\n\t\t\treturn fakeArray.find(function (o) {\n\t\t\t\treturn o.mail === user.mail;\n\t\t\t}) || user;\n\t\t});\n\n\t\t(0, _helpers.setItem)('members', JSON.stringify(updatedUsers));\n\t};\n\n\t/**\r\n  * \r\n  * @param {*} id \r\n  */\n\tvar removeBikeFromStation = function removeBikeFromStation(id) {\n\t\tbikeStations.some(function (station, i) {\n\t\t\treturn station.some(function (bike, j) {\n\t\t\t\treturn bike.id === id ? station[j] = {} : false;\n\t\t\t});\n\t\t});\n\t\t(0, _helpers.setItem)('stations', JSON.stringify(bikeStations));\n\t};\n\n\t/**\r\n  * Updates stations object in localStorage and reload page\r\n  * @param {*} bike \r\n  */\n\tvar automaticBikeReturn = function automaticBikeReturn(bike) {\n\t\tdelete bike.rentTime;\n\t\tbikeStations.some(function (station, i) {\n\t\t\treturn station.some(function (b, j) {\n\t\t\t\treturn (0, _helpers.isEmptyObject)(b) ? station[j] = bike : false;\n\t\t\t});\n\t\t});\n\t\t(0, _helpers.setItem)('stations', JSON.stringify(bikeStations));\n\t\t(0, _helpers.reload)();\n\t};\n\n\t/**\r\n  * Create a `banned` key and set it to true before update the member session\r\n  * @param {*} session \r\n  */\n\tvar markAsBanned = function markAsBanned(session) {\n\t\tsession.isBanned = true;\n\t\tupdateMemberSession(session);\n\t};\n\n\t/**\r\n  * \r\n  * @param {*} i \r\n  * @param {*} session \r\n  */\n\tvar banMember = function banMember(i, session) {\n\t\t// Stop countdown, update UI\n\t\tclearInterval(i);\n\t\talert('Your remaining time is over.');\n\n\t\t// Return the bike\n\t\tautomaticBikeReturn(session.bike);\n\n\t\t// Detach bike from member\n\t\tdelete session.bike;\n\t\tupdateMemberSession(session);\n\n\t\t// Update member session with `banned` key and \"redirect\" to login screen\n\t\tif (!(0, _helpers.isPrivilegedAccount)(session.mail)) {\n\t\t\tmarkAsBanned(session);\n\t\t\t(0, _helpers.logout)();\n\t\t}\n\t};\n\n\t/**\r\n  * Ban member if countdown expires, otherwise, juste update the clock in the UI\r\n  */\n\tvar initCountdown = function initCountdown() {\n\t\tvar remainingTime = 1600;\n\n\t\tvar i = setInterval(function () {\n\t\t\tif (remainingTime === 0) {\n\t\t\t\tbanMember(i, session);\n\t\t\t} else {\n\t\t\t\tconsole.log(document.getElementById('countdown'));\n\t\t\t\tdocument.getElementById('countdown').innerHTML = 'You have ' + remainingTime / 2 + ' hours left.';\n\t\t\t\tremainingTime--;\n\t\t\t}\n\t\t}, 10);\n\t};\n\n\t/**\r\n  * \r\n  * @param {*} e \r\n  */\n\tvar manualBikeReturn = function manualBikeReturn(e) {\n\t\tconsole.log((0, _helpers.hasBike)(session));\n\t\tif ((0, _helpers.hasBike)(session)) {\n\t\t\t// Get data attributes from the target (position in array) and update the sations object\n\t\t\tvar i = e.target.dataset.station;\n\t\t\tvar j = e.target.dataset.slot;\n\t\t\tbikeStations[i][j] = session.bike;\n\t\t\tdelete bikeStations[i][j].rentTime;\n\n\t\t\t// Detach bike from member\n\t\t\tdelete session.bike;\n\t\t\tupdateMemberSession(session);\n\n\t\t\t(0, _helpers.setItem)('stations', JSON.stringify(bikeStations));\n\t\t\t(0, _helpers.reload)();\n\t\t} else {\n\t\t\talert('You are not riding a bike.');\n\t\t}\n\t};\n\n\t/**\r\n  * \r\n  * @param {*} e \r\n  */\n\tvar rentBike = function rentBike(e) {\n\t\tif (!(0, _helpers.hasBike)(session)) {\n\t\t\t// Get data attributes from target\n\t\t\tvar bikeId = e.target.dataset.bike;\n\t\t\tvar bikeColor = e.target.dataset.color;\n\t\t\tvar stationNo = e.target.dataset.station;\n\t\t\tvar slotNo = e.target.dataset.slot;\n\n\t\t\t// Udpate UI of the slot (becomes parking slot)\n\t\t\te.preventDefault();\n\t\t\te.target.className = 'slot docks';\n\t\t\te.target.style.backgroundColor = '#f0f0f0';\n\t\t\te.target.dataset.bike = '';\n\t\t\te.target.dataset.station = stationNo;\n\t\t\te.target.dataset.slot = slotNo;\n\t\t\te.target.dataset.color = '';\n\t\t\te.target.removeEventListener('click', rentBike);\n\t\t\te.target.addEventListener('click', manualBikeReturn, false);\n\n\t\t\t// Update data\n\t\t\t// Add bike object to session\n\t\t\tsession.bike = {\n\t\t\t\t'id': bikeId,\n\t\t\t\t'color': bikeColor,\n\t\t\t\t'rentTime': new Date().getTime()\n\t\t\t};\n\n\t\t\tupdateMemberSession(session);\n\n\t\t\t// Remove bike from the local storage\n\t\t\tremoveBikeFromStation(bikeId);\n\n\t\t\t// Start countdown\n\t\t\tinitCountdown();\n\t\t} else {\n\t\t\talert('You are already riding a bike!');\n\t\t}\n\t};\n\n\t/**\r\n  * \r\n  */\n\tvar renderBikeStations = function renderBikeStations() {\n\t\tvar divStationView = document.createElement('div');\n\t\tvar divStationTitle = document.createElement('h2');\n\t\tdivStationTitle.innerHTML = 'Bike Stations';\n\t\tdivStationView.appendChild(divStationTitle);\n\n\t\tvar instruction = document.createElement('p');\n\t\tinstruction.setAttribute('id', 'instructions');\n\t\tinstruction.innerHTML = 'You can rent a bike by clicking on it.';\n\t\tdivStationView.appendChild(instruction);\n\n\t\tbikeStations.map(function (e, i) {\n\t\t\t// Single station element\n\t\t\tvar station = document.createElement('div');\n\t\t\tstation.setAttribute('class', 'station');\n\n\t\t\tvar label = document.createElement('h3');\n\t\t\tlabel.innerHTML = 'Bike Station ' + (i + 1);\n\t\t\tstation.appendChild(label);\n\n\t\t\te.map(function (f, j) {\n\t\t\t\t// Single bike element\n\t\t\t\tvar bike = document.createElement('a');\n\t\t\t\tbike.href = '#';\n\t\t\t\tbike.className = f.id ? 'bike slot' : 'parking slot';\n\t\t\t\tbike.dataset.bike = f.id || '';\n\t\t\t\tbike.dataset.station = i;\n\t\t\t\tbike.dataset.slot = j;\n\t\t\t\tbike.dataset.color = f.color || '';\n\t\t\t\tbike.style.backgroundColor = f.color || '#f0f0f0';\n\t\t\t\tf.id ? bike.addEventListener('click', rentBike, false) : bike.addEventListener('click', manualBikeReturn, false);\n\t\t\t\tstation.appendChild(bike);\n\t\t\t});\n\n\t\t\tdivStationView.appendChild(station);\n\t\t});\n\n\t\treturn divStationView;\n\t};\n\n\tdivBikeStationView.appendChild(renderBikeStations());\n\n\treturn divBikeStationView;\n};\n\n//# sourceURL=webpack:///./src/components/Stations/Stations.js?");

/***/ }),

/***/ "./src/components/SysAdmin/SysAdmin.css":
/*!**********************************************!*\
  !*** ./src/components/SysAdmin/SysAdmin.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./SysAdmin.css */ \"./node_modules/css-loader/index.js!./src/components/SysAdmin/SysAdmin.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.css?");

/***/ }),

/***/ "./src/components/SysAdmin/SysAdmin.js":
/*!*********************************************!*\
  !*** ./src/components/SysAdmin/SysAdmin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SysAdmin = undefined;\n\n__webpack_require__(/*! ./SysAdmin.css */ \"./src/components/SysAdmin/SysAdmin.css\");\n\nvar _helpers = __webpack_require__(/*! ./../../helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\n/*\r\n  Component logic\r\n*/\n\nvar createFakeTableCell = function createFakeTableCell(className, text, textColor) {\n  var cell = document.createElement('div');\n  cell.className = className;\n  cell.style.color = textColor || '';\n  cell.innerHTML = text;\n  return cell;\n};\n\n/*\r\n  Component UI\r\n*/\n\nvar SysAdmin = exports.SysAdmin = function SysAdmin() {\n  // Load members from localStorage\n  var members = JSON.parse((0, _helpers.getItem)('members'));\n\n  var wrapper = document.createElement('div');\n\n  // Area title\n  var separator = document.createElement('hr');\n  wrapper.appendChild(separator);\n\n  var title = document.createElement('h2');\n  title.innerHTML = 'Admin area';\n  wrapper.appendChild(title);\n\n  // Columns titles\n  var fakeTableTitles = document.createElement('div');\n  fakeTableTitles.className = 'titles';\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Name'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Phone'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Email'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Status'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Bike ID'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Bike color'));\n  fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Rent time'));\n  wrapper.appendChild(fakeTableTitles);\n\n  members.map(function (m, i) {\n    // Single cell\n    // User info\n    var member = document.createElement('div');\n    member.className = 'member';\n    m.name = m.firstName + ' ' + m.lastName;\n    member.appendChild(createFakeTableCell('member-name', m.name));\n    member.appendChild(createFakeTableCell('member-phone', m.phone));\n    member.appendChild(createFakeTableCell('member-email', m.mail));\n    m.banned ? member.appendChild(createFakeTableCell('member-status', 'banned')) : member.appendChild(createFakeTableCell('member-status no-data', '&#8203;'));\n\n    // Display bike info or empty cells\n    if (m.bike) {\n      member.appendChild(createFakeTableCell('bike-id', m.bike.id));\n      member.appendChild(createFakeTableCell('bike-color', m.bike.color, m.bike.color));\n      member.appendChild(createFakeTableCell('bike-timer', m.bike.rentTime));\n    } else {\n      member.appendChild(createFakeTableCell('bike-id no-data', '&#8203;'));\n      member.appendChild(createFakeTableCell('bike-color no-data', '&#8203;'));\n      member.appendChild(createFakeTableCell('bike-timer no-data', '&#8203;'));\n    }\n    wrapper.appendChild(member);\n  });\n\n  return wrapper;\n};\n\n//# sourceURL=webpack:///./src/components/SysAdmin/SysAdmin.js?");

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n * Helpers method used around the project\r\n */\n\n/**\r\n * @param  {string} type - type of the input\r\n * @param  {string} value - value of the input\r\n * @param  {string} name - name givent to the input\r\n * @param  {string} placeholder - placeholder\r\n */\nvar inputCreator = exports.inputCreator = function inputCreator(type, value, name, placeholder) {\n  var input = document.createElement('input');\n  input.type = type;\n  input.value = value;\n  input.name = name;\n  input.placeholder = placeholder;\n  return input;\n};\n\n/**\r\n * \r\n * @param {string} s - string to sanitize \r\n */\nvar sanitizeField = exports.sanitizeField = function sanitizeField(s) {\n  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\"/g, '&quot;');\n};\n\n/**\r\n * \r\n * @param {string} e - string that need to be verified \r\n */\nvar isValidMail = exports.isValidMail = function isValidMail(e) {\n  return (/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(e)\n  );\n};\n\n/**\r\n * \r\n * @param {string} p - string that need to be verified \r\n */\nvar isValidPhone = exports.isValidPhone = function isValidPhone(p) {\n  return (/^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/.test(p)\n  );\n};\n\n/**\r\n * Check if email is in the members \"db\"\r\n * @param {string} email \r\n * @param {object} members \r\n */\nvar isMember = exports.isMember = function isMember(email, members) {\n  return members.find(function (m) {\n    return m.mail === email;\n  });\n};\n\n/**\r\n * Check if email is in the members \"db\" and  banned\r\n * @param {string} email \r\n * @param {object} members \r\n */\nvar isBanned = exports.isBanned = function isBanned(email, members) {\n  var member = members.find(function (m) {\n    return m.mail === email;\n  });\n  return member.isBanned === true;\n};\n\n/**\r\n*  Mostly data manipulation\r\n*  local or session storage\r\n*/\n\nvar getItem = exports.getItem = function getItem(i) {\n  return window.localStorage.getItem(i) || false;\n};\n\nvar setItem = exports.setItem = function setItem(i, v) {\n  return window.localStorage.setItem(i, v);\n};\n\nvar delItem = exports.delItem = function delItem(i) {\n  return window.localStorage.removeItem(i);\n};\n\nvar getSession = exports.getSession = function getSession(s) {\n  return window.sessionStorage.getItem(s);\n};\n\nvar setSession = exports.setSession = function setSession(s, v) {\n  return window.sessionStorage.setItem(s, v);\n};\n\nvar delSession = exports.delSession = function delSession(s) {\n  return window.sessionStorage.removeItem(s);\n};\n\n/**\r\n* Create temporary session and reload page\r\n* @param {string} member \r\n*/\nvar startSession = exports.startSession = function startSession(member) {\n  setSession('session', JSON.stringify(member));\n  window.location.reload();\n};\n\nvar reload = exports.reload = function reload() {\n  return window.location.reload();\n};\n\nvar hasBike = exports.hasBike = function hasBike(session) {\n  return session.hasOwnProperty('bike') === true;\n};\n\nvar isEmptyObject = exports.isEmptyObject = function isEmptyObject(o) {\n  return (Object.keys(o).length === 0 && o.constructor === Object) === true;\n};\n\nvar isPrivilegedAccount = exports.isPrivilegedAccount = function isPrivilegedAccount(session) {\n  return (session === 'samya@mail.com' || session === 'kdog@mail.com') === true;\n};\n\n//# sourceURL=webpack:///./src/helpers/helpers.js?");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Login = __webpack_require__(/*! ./components/Login/Login.js */ \"./src/components/Login/Login.js\");\n\nvar _Logout = __webpack_require__(/*! ./components/Logout/Logout.js */ \"./src/components/Logout/Logout.js\");\n\nvar _Map = __webpack_require__(/*! ./components/Map/Map.js */ \"./src/components/Map/Map.js\");\n\nvar _Bikes = __webpack_require__(/*! ./components/Bikes/Bikes.js */ \"./src/components/Bikes/Bikes.js\");\n\nvar _Countdown = __webpack_require__(/*! ./components/Countdown/Countdown.js */ \"./src/components/Countdown/Countdown.js\");\n\nvar _Stations = __webpack_require__(/*! ./components/Stations/Stations.js */ \"./src/components/Stations/Stations.js\");\n\nvar _CityWorker = __webpack_require__(/*! ./components/CityWorker/CityWorker.js */ \"./src/components/CityWorker/CityWorker.js\");\n\nvar _SysAdmin = __webpack_require__(/*! ./components/SysAdmin/SysAdmin.js */ \"./src/components/SysAdmin/SysAdmin.js\");\n\nvar _helpers = __webpack_require__(/*! ./helpers/helpers.js */ \"./src/helpers/helpers.js\");\n\nvar _members = __webpack_require__(/*! ./../public/members.js */ \"./public/members.js\");\n\nvar _stations = __webpack_require__(/*! ./../public/stations.js */ \"./public/stations.js\");\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n/*\r\n  Initiliaze an new array of Members\r\n  or fetch existing data from localstorage\r\n*/\n(0, _helpers.getItem)('members') ? (0, _helpers.getItem)('members') : (0, _helpers.setItem)('members', JSON.stringify(_members.initSavedMembers));\n\n/*\r\n  Initiliaze an new array of Stations\r\n  or fetch existing data from localstorage\r\n*/\n(0, _helpers.getItem)('stations') ? (0, _helpers.getItem)('stations') : (0, _helpers.setItem)('stations', JSON.stringify(_stations.initStations));\n\n/*\r\n  Shows Login component if no session exists\r\n  Shows Station component otherwise\r\n  Shows additionnal components to super users\r\n*/\nif ((0, _helpers.getSession)('session')) {\n  document.getElementById('logout').appendChild((0, _Logout.Logout)());\n  document.getElementById('stations').appendChild((0, _Stations.Stations)());\n  document.getElementById('map').appendChild((0, _Map.Map)());\n  document.getElementById('countdown').appendChild((0, _Countdown.Countdown)());\n  if (JSON.parse((0, _helpers.getSession)('session')).mail === 'kdog@mail.com') {\n    document.getElementById('sysAdmin').appendChild((0, _SysAdmin.SysAdmin)());\n  } else if (JSON.parse((0, _helpers.getSession)('session')).mail === 'samya@mail.com') {\n    document.getElementById('cityWorker').appendChild((0, _CityWorker.CityWorker)());\n  }\n} else {\n  document.getElementById('login').appendChild((0, _Login.Login)());\n}\n\n// document.getElementById('login').appendChild(Login())\n// document.getElementById('logout').appendChild(Logout())\n// document.getElementById('stations').appendChild(Stations())\n// document.getElementById('map').appendChild(Map())\n// document.getElementById('countdown').appendChild(Countdown())\n// document.getElementById('cityWorker').appendChild(CityWorker())\n// document.getElementById('sysAdmin').appendChild(SysAdmin())\n\n// Bikes()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });