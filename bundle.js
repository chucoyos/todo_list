/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS reset */\\n/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n}\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n/*\\n  3. Allow percentage-based heights in the application\\n*/\\nhtml, body {\\n  height: 100%;\\n}\\n/*\\n  Typographic tweaks!\\n  4. Add accessible line-height\\n  5. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n/*\\n  6. Improve media defaults\\n*/\\nimg, picture, video, canvas, svg {\\n  display: block;\\n  max-width: 100%;\\n}\\n/*\\n  7. Remove built-in form typography styles\\n*/\\ninput, button, textarea, select {\\n  font: inherit;\\n}\\n/*\\n  8. Avoid text overflows\\n*/\\np, h1, h2, h3, h4, h5, h6 {\\n  overflow-wrap: break-word;\\n}\\n/*\\n  9. Create a root stacking context\\n*/\\n#root, #__next {\\n  isolation: isolate;\\n  max-width: 80%;\\n  margin: 0 auto;\\n}\\n/* End css reset */\\n\\n.pushable {\\n  position: relative;\\n  border: none;\\n  background: transparent;\\n  padding: 0;\\n  cursor: pointer;\\n  outline-offset: 4px;\\n  transition: filter 250ms;\\n}\\n.shadow {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 12px;\\n  background: hsl(0deg 0% 0% / 0.25);\\n  will-change: transform;\\n  transform: translateY(2px);\\n  transition:\\n    transform\\n    600ms\\n    cubic-bezier(.3, .7, .4, 1);\\n}\\n.edge {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 12px;\\n  background: linear-gradient(\\n    to left,\\n    hsl(340deg 100% 16%) 0%,\\n    hsl(340deg 100% 32%) 8%,\\n    hsl(340deg 100% 32%) 92%,\\n    hsl(340deg 100% 16%) 100%\\n  );\\n}\\n.front {\\n  display: block;\\n  position: relative;\\n  padding: 12px 42px;\\n  border-radius: 12px;\\n  font-size: 1.25rem;\\n  color: white;\\n  background: hsl(345deg 100% 47%);\\n  will-change: transform;\\n  transform: translateY(-4px);\\n  transition:\\n    transform\\n    600ms\\n    cubic-bezier(.3, .7, .4, 1);\\n}\\n.pushable:hover {\\n  filter: brightness(110%);\\n}\\n.pushable:hover .front {\\n  transform: translateY(-6px);\\n  transition:\\n    transform\\n    250ms\\n    cubic-bezier(.3, .7, .4, 1.5);\\n}\\n.pushable:active .front {\\n  transform: translateY(-2px);\\n  transition: transform 34ms;\\n}\\n.pushable:hover .shadow {\\n  transform: translateY(4px);\\n  transition:\\n    transform\\n    250ms\\n    cubic-bezier(.3, .7, .4, 1.5);\\n}\\n.pushable:active .shadow {\\n  transform: translateY(1px);\\n  transition: transform 34ms;\\n}\\n.pushable:focus:not(:focus-visible) {\\n  outline: none;\\n}\\n#projects-container, #project-container {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  max-width: 90%;\\n  margin: 40px auto;\\n}\\n#projects-header, .item-header {\\n  display: flex;\\n  flex: 1;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#projects-title, .item-due-date {\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n  border-radius: 0.5rem;\\n  font-size: xx-large;\\n}\\n#projects-body > ul {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-items: center;\\n}\\n#projects-body .project-item {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: left;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0.5rem;\\n  padding: 0.7rem;\\n  border-radius: 0.5rem;\\n  box-shadow: 2px 2px 2px 2px rgba(194, 192, 192, 0.75);\\n}\\n.project-item > .project-title {\\n  flex: 1;\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n  border-radius: 0.5rem;\\n  color: hsl(345deg 100% 47%);\\n  cursor: pointer;\\n  font-size: large;\\n}\\n.project-item button {\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n  border: none;\\n  border-radius: 0.5rem;\\n  box-shadow: .5px .5px .2px .2px rgba(107, 103, 103, 0.1);\\n}\\n.project-item button:hover {\\n  filter: brightness(95%);\\n  cursor: pointer;\\n}\\n#new-project-container {\\n  display: flex;\\n \\n}\\n \\n.project-item input {\\n  flex: 1;\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n  border: 1px solid #000;\\n  border-radius: 0.5rem;\\n}\\n.project-item input:focus {\\n  outline: none;\\n  border: 2px solid rgb(157, 191, 243);\\n}\\n#back-to-projects {\\n  color: hsl(345deg 100% 47%);\\n  cursor: pointer;\\n}\\n.title-container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.task-body {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: left;\\n  width: 100%;\\n  height: 100%;\\n  padding: 16px;\\n  border: none;\\n  border-radius: 0.5rem;\\n  box-shadow: 1px 1px 1px 2px rgba(233, 231, 231, 0.75);\\n}\\n.task-description {\\n  display: flex;\\n  justify-content: start;\\n  align-items: stretch;\\n}\\n\\n \\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _projects_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects */ \"./src/projects/projects.js\");\n\n\n\n(0,_projects_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects/Project.js":
/*!*********************************!*\
  !*** ./src/projects/Project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n  setName(name) {\n    this.name = name;\n  }\n  getName() {\n    return this.name;\n  }\n  addTask(task) {\n    this.tasks.push(task);\n  }\n  removeTask(task) {\n    this.tasks = this.tasks.filter((t) => t !== task);\n  }\n  getTasks() {\n    return this.tasks;\n  }\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/projects/Project.js?");

/***/ }),

/***/ "./src/projects/addProject.js":
/*!************************************!*\
  !*** ./src/projects/addProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/projects/Project.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects/projects.js\");\n\n\nconst addProject = (name) => {\n  const input = document.querySelector('#project-input');\n  name = input.value;\n  if (name === '') {\n    console.log('Please enter a project name');\n    return;\n  }\n  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n  input.value = '';\n  const projects = localStorage.getItem('projects');\n  if (projects) {\n    const projectsArray = JSON.parse(projects);\n    projectsArray.push(project);\n    localStorage.setItem('projects', JSON.stringify(projectsArray));\n  } else {\n    const projectsArray = [];\n    projectsArray.push(project);\n    localStorage.setItem('projects', JSON.stringify(projectsArray));\n  }\n  const projectsContainer = document.querySelector('#projects-container');\n  projectsContainer.remove();\n  (0,_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const addProjectButton = document.getElementById('add-project-button');\n  addProjectButton.disabled = false;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n//# sourceURL=webpack://todo-list/./src/projects/addProject.js?");

/***/ }),

/***/ "./src/projects/eventListeners.js":
/*!****************************************!*\
  !*** ./src/projects/eventListeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelAddTask\": () => (/* binding */ cancelAddTask),\n/* harmony export */   \"showNewProjectForm\": () => (/* binding */ showNewProjectForm)\n/* harmony export */ });\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ \"./src/projects/newProject.js\");\n\n\nconst showNewProjectForm = function showNewProjectForm() {\n  const addProjectButton = document.getElementById('add-project-button');\n  const projectsList = document.getElementById('projects-list');\n  const newProjectContainer = (0,_newProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  projectsList.insertBefore(newProjectContainer, projectsList.firstChild);\n  addProjectButton.disabled = true;\n}\n\nconst cancelAddTask = function cancelAddTask() {\n  const addProjectButton = document.getElementById('add-project-button');\n  const tasksList = document.getElementById('tasks-list');\n  const taskItem = document.getElementById('task-item');\n  tasksList.removeChild(taskItem);\n  addProjectButton.disabled = false;\n}\n\n\n\n// project.tasks.push({ title: 'New Task', description: 'New Description', \n// dueDate: '2020-12-12', priority: 'High'});\n\n//# sourceURL=webpack://todo-list/./src/projects/eventListeners.js?");

/***/ }),

/***/ "./src/projects/newProject.js":
/*!************************************!*\
  !*** ./src/projects/newProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/projects/addProject.js\");\n\n\nconst newProject = () => {\n  const newProjectContainer = document.createElement('div');\n  newProjectContainer.setAttribute('id', 'new-project-container');\n  const newProjectBtn = document.createElement('button');\n  newProjectBtn.setAttribute('id', 'new-project-btn');\n  newProjectBtn.textContent =  '✔️';\n  newProjectBtn.addEventListener('click', _addProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const cancelProjectBtn = document.createElement('button');\n  cancelProjectBtn.setAttribute('id', 'cancel-project-btn');\n  cancelProjectBtn.textContent = '❌';\n  cancelProjectBtn.addEventListener('click', () => {\n    newProjectContainer.remove();\n    const addProjectButton = document.getElementById('add-project-button');\n    addProjectButton.disabled = false;\n  });\n  const projectInput = document.createElement('input');\n  projectInput.setAttribute('id', 'project-input');\n  projectInput.setAttribute('type', 'text');\n  projectInput.setAttribute('placeholder', 'Project name');\n  newProjectContainer.appendChild(projectInput);\n  newProjectContainer.appendChild(cancelProjectBtn);\n  newProjectContainer.appendChild(newProjectBtn);\n  newProjectContainer.classList.add('project-item');\n  const listItem = document.createElement('li');\n  listItem.appendChild(newProjectContainer);\n  return newProjectContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProject);\n\n//# sourceURL=webpack://todo-list/./src/projects/newProject.js?");

/***/ }),

/***/ "./src/projects/newTask.js":
/*!*********************************!*\
  !*** ./src/projects/newTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/projects/eventListeners.js\");\n/* harmony import */ var _tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksController */ \"./src/projects/tasksController.js\");\n\n\nfunction newTask() {\n  const projectContainer = document.getElementById('project-container');\n  const tasksBody  = document.createElement('div');\n  tasksBody.setAttribute('id', 'tasks-body');\n  const taskItem = document.createElement('div');\n  taskItem.classList.add('project-item');\n  taskItem.setAttribute('id', 'task-item');\n  const taskInput = document.createElement('input');\n  taskInput.setAttribute('type', 'text');\n  taskInput.setAttribute('placeholder', 'New Task');\n  taskInput.classList.add('project-item');\n  taskInput.setAttribute('id', 'task-input')\n  const addTaskButton = document.createElement('button');\n  addTaskButton.textContent = '✔️';\n  addTaskButton.setAttribute('id', 'add-task-button');\n\n  addTaskButton.addEventListener('click', _tasksController__WEBPACK_IMPORTED_MODULE_1__.addTask, false);\n  \n  const tasksList = document.getElementById('tasks-list');\n  tasksList.appendChild(taskItem);\n\n  const cancelTaskButton = document.createElement('button');\n  cancelTaskButton.textContent = '❌';\n  cancelTaskButton.setAttribute('id', 'cancel-task-button');\n  cancelTaskButton.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_0__.cancelAddTask, false);\n  taskItem.appendChild(taskInput);\n  taskItem.appendChild(cancelTaskButton);\n  taskItem.appendChild(addTaskButton);\n  tasksList.appendChild(taskItem);\n\n  return tasksBody;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://todo-list/./src/projects/newTask.js?");

/***/ }),

/***/ "./src/projects/projects.js":
/*!**********************************!*\
  !*** ./src/projects/projects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/projects/Project.js\");\n/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsController */ \"./src/projects/projectsController.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects/projects.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners */ \"./src/projects/eventListeners.js\");\n\n\n\n\nconst projects =  () => {\n  // Projects header\n  const projectsHeader = document.createElement('div');\n  projectsHeader.setAttribute('id', 'projects-header');\n  const projectTitle = document.createElement('h1');\n  projectTitle.setAttribute('id', 'projects-title');\n  projectTitle.textContent = 'Projects';\n\n\n  const addProjectButton = document.createElement('button');\n  addProjectButton.setAttribute('id', 'add-project-button');\n  addProjectButton.classList.add('pushable');\n  const btnShadow = document.createElement('span');\n  btnShadow.classList.add('shadow');\n  const btnEdge = document.createElement('span');\n  btnEdge.classList.add('edge');\n  const btnFront = document.createElement('span');\n  btnFront.classList.add('front');\n  btnFront.textContent = 'Add Project';\n  addProjectButton.appendChild(btnShadow);\n  addProjectButton.appendChild(btnEdge);\n  addProjectButton.appendChild(btnFront);\n\n  projectsHeader.appendChild(projectTitle);\n  projectsHeader.appendChild(addProjectButton);\n\n  addProjectButton.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_3__.showNewProjectForm, false)\n\n  // End of projects header\n\n  if (!localStorage.getItem('projects')) {\n    localStorage.setItem('projects', JSON.stringify([]));\n  }\n\n  const projects = JSON.parse(localStorage.getItem('projects'));\n\n  // If there are no projects, create a default project and call displayProjects\n  if (projects.length === 0) {\n    const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default Project');\n    const projectsArray = [];\n    projectsArray.push(defaultProject);\n    localStorage.setItem('projects', JSON.stringify(projectsArray));\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return;\n  }\n\n\n  const projectsContainer = document.createElement('div');\n  projectsContainer.setAttribute('id', 'projects-container');\n\n  const projectsBody = document.createElement('div');\n  projectsBody.setAttribute('id', 'projects-body');\n  const projectsList = document.createElement('div');\n  projectsList.setAttribute('id', 'projects-list');\n\n  for (let project of projects) {\n    let editButtonId = project.name + '-edit-button';\n    let deleteButtonId = project.name + '-delete-button';\n    const projectItem = document.createElement('div');\n    projectItem.classList.add('project-item');\n    projectItem.setAttribute('id', project.name);\n    const projectTitle = document.createElement('p');\n    projectTitle.textContent = project.name;\n    projectTitle.classList.add('project-title');\n    projectItem.appendChild(projectTitle);\n    projectTitle.addEventListener('click', () => { (0,_projectsController__WEBPACK_IMPORTED_MODULE_1__.showProject)(project); });\n    const deleteProjectButton = document.createElement('button');\n    deleteProjectButton.textContent = '🗑️';\n    deleteProjectButton.setAttribute('id', deleteButtonId);\n    deleteProjectButton.addEventListener('click', () => {\n      (0,_projectsController__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project);\n      projectsList.removeChild(projectItem);\n      return;\n    });\n    const editProjectButton = document.createElement('button');\n    editProjectButton.textContent = '✏️';\n    editProjectButton.setAttribute('id', editButtonId);\n    editProjectButton.addEventListener('click', () => {\n      (0,_projectsController__WEBPACK_IMPORTED_MODULE_1__.editProject)(project);\n      return;\n    });\n    projectItem.appendChild(deleteProjectButton);\n    projectItem.appendChild(editProjectButton);\n    projectsList.appendChild(projectItem);\n  }\n  const root = document.querySelector('#root');\n  projectsContainer.appendChild(projectsHeader);\n  projectsContainer.appendChild(projectsBody);\n  projectsBody.appendChild(projectsList);\n  root.appendChild(projectsContainer);\n  return projectsContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects/projects.js?");

/***/ }),

/***/ "./src/projects/projectsController.js":
/*!********************************************!*\
  !*** ./src/projects/projectsController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"editProject\": () => (/* binding */ editProject),\n/* harmony export */   \"showProject\": () => (/* binding */ showProject)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/projects/eventListeners.js\");\n/* harmony import */ var _tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksController */ \"./src/projects/tasksController.js\");\n\n\nfunction showProject(project) {\n  const projectContainer = document.createElement('div');\n  projectContainer.setAttribute('id', 'project-container');\n  const projectsContainer = document.getElementById('projects-container');\n  const projectHeader = document.getElementById('projects-header');\n  const projectsBody = document.getElementById('projects-body');\n  const projectTitle = document.getElementById('projects-title');\n  const addProjectButton = document.getElementById('add-project-button');\n  addProjectButton.removeEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_0__.showNewProjectForm);\n  addProjectButton.addEventListener('click', _tasksController__WEBPACK_IMPORTED_MODULE_1__.showTaskForm, false);\n\n  const tasksBody = document.createElement('div');\n  tasksBody.setAttribute('id', 'tasks-body');\n  const tasksList = document.createElement('div');\n  tasksList.setAttribute('id', 'tasks-list');\n  tasksBody.appendChild(tasksList);\n  \n \n  projectTitle.textContent = project.name;\n  const buttonText = document.querySelector('.front');\n  buttonText.textContent = 'Add Task';\n  projectsContainer.removeChild(projectsBody);\n  projectsContainer.replaceWith(projectContainer);\n\n  const backToProjects = document.createElement('p');\n  backToProjects.textContent = '👈️ Back to projects';\n  backToProjects.setAttribute('id', 'back-to-projects');\n  projectContainer.appendChild(backToProjects);\n  projectContainer.appendChild(projectHeader);\n\n  projectContainer.appendChild(tasksList);\n\n\n  (0,_tasksController__WEBPACK_IMPORTED_MODULE_1__.listTasks)(project);\n  \n  \n  backToProjects.addEventListener('click', () => {\n    addProjectButton.addEventListener('click', _eventListeners__WEBPACK_IMPORTED_MODULE_0__.showNewProjectForm, false);\n    projectsContainer.appendChild(projectHeader);\n    projectsContainer.appendChild(projectsBody);\n    projectContainer.replaceWith(projectsContainer);\n    buttonText.textContent = 'Add Project';\n    projectTitle.textContent = 'Projects';\n    addProjectButton.removeEventListener('click', _tasksController__WEBPACK_IMPORTED_MODULE_1__.showTaskForm);\n    return;\n  });\n \n}\n\nfunction editProject(project) {\n  // replace project title with input\n  const editProjectInput = document.createElement('input');\n  editProjectInput.classList.add('project-input');\n  editProjectInput.setAttribute('type', 'text');\n  const projectItem = document.getElementById(project.name);\n  //  get the current project title and replace it with the input\n  const currentTitle = projectItem.querySelector('.project-title');\n  currentTitle.replaceWith(editProjectInput);\n  editProjectInput.value = project.name;\n  editProjectInput.focus();\n  \n  // replace edit button with save button\n  let editButtonId = project.name + '-edit-button';\n  let deleteButtonId = project.name + '-delete-button';\n  let saveButtonId = project.name + '-save-button';\n  let cancelButtonId = project.name + '-cancel-button';\n  const editProjectButton = document.getElementById(editButtonId);\n  const deleteProjectButton = document.getElementById(deleteButtonId);\n  const saveProjectButton = document.createElement('button');\n  saveProjectButton.textContent = '✔️';\n  saveProjectButton.setAttribute('id', saveButtonId);\n  projectItem.replaceChild(saveProjectButton, editProjectButton);\n  // replace delete button with cancel button\n  const cancelProjectButton = document.createElement('button');\n  cancelProjectButton.textContent = '❌';\n  cancelProjectButton.setAttribute('id', cancelButtonId);\n  projectItem.replaceChild(cancelProjectButton, deleteProjectButton);\n  // add event listeners to save and cancel buttons\n  cancelProjectButton.addEventListener('click', () => {\n    projectItem.replaceChild(editProjectButton, saveProjectButton);\n    projectItem.replaceChild(deleteProjectButton, cancelProjectButton);\n    editProjectInput.replaceWith(currentTitle);\n    return;\n  });\n  saveProjectButton.addEventListener('click', () => {\n    const projects = JSON.parse(localStorage.getItem('projects')); // get projects from local storage\n    const updatedProjects = projects.filter((proj) => proj.name !== project.name); // remove the old project\n    project.name = editProjectInput.value; // update the project name\n    updatedProjects.push(project); // add the updated project\n    localStorage.setItem('projects', JSON.stringify(updatedProjects));// update local storage\n    currentTitle.textContent = project.name;\n    projectItem.setAttribute('id', project.name);\n    editButtonId = project.name + '-edit-button';\n    deleteButtonId = project.name + '-delete-button';\n    editProjectInput.replaceWith(currentTitle);\n    editProjectButton.setAttribute('id', editButtonId); // update the edit button id\n    deleteProjectButton.setAttribute('id', deleteButtonId); // update the delete button id\n    saveProjectButton.setAttribute('id', saveButtonId);\n    cancelProjectButton.setAttribute('id', cancelButtonId);\n    projectItem.replaceChild(editProjectButton, saveProjectButton);\n    projectItem.replaceChild(deleteProjectButton, cancelProjectButton);\n    return;\n  });\n}\n\nfunction deleteProject(project) {\n  const projects = JSON.parse(localStorage.getItem('projects'));\n  const updatedProjects = projects.filter((proj) => proj.name !== project.name);\n  localStorage.setItem('projects', JSON.stringify(updatedProjects));\n  const addProjectButton = document.getElementById('add-project-button');\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects/projectsController.js?");

/***/ }),

/***/ "./src/projects/tasksController.js":
/*!*****************************************!*\
  !*** ./src/projects/tasksController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"listTasks\": () => (/* binding */ listTasks),\n/* harmony export */   \"showTaskForm\": () => (/* binding */ showTaskForm)\n/* harmony export */ });\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/projects/newTask.js\");\n\n\nfunction showTaskForm() {\n  (0,_newTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const addTaskButton = document.getElementById('add-project-button');\n  addTaskButton.disabled = true;\n}\nfunction addTask() {\n  const addTaskButton = document.getElementById('add-task-button');\n  const taskItem = document.getElementById('task-item');\n  const taskInput = document.getElementById('task-input');\n  const task = taskInput.value;\n  const tasksBody = document.getElementById('tasks-body');\n  const tasksList = document.getElementById('tasks-list');\n  tasksList.removeChild(taskItem);\n  const projects = JSON.parse(localStorage.getItem('projects'));\n  const projectTitle = document.getElementById('projects-title');\n  const name = projectTitle.textContent;\n  const project = projects.find((project) => project.name === name);\n  project.tasks.push({ title: task, description: 'New Description', dueDate: '2020-12-12', priority: 'High'});\n  localStorage.setItem('projects', JSON.stringify(projects));\n  addTaskButton.disabled = false;\n  return task;\n}\n\nfunction listTasks() {\n  const projects = JSON.parse(localStorage.getItem('projects')); \n  const projectTitle = document.getElementById('projects-title');\n  const name = projectTitle.textContent;\n  const project = projects.find((project) => project.name === name);\n  const tasks = project.tasks;\n  const tasksList = document.getElementById('tasks-list');\n  tasks.forEach((task) => {\n    const taskItem = document.createElement('div');\n    taskItem.classList.add('project-item');\n    taskItem.setAttribute('id', 'task-item');\n\n    // build item header\n    const itemHeader = document.createElement('div');\n    itemHeader.classList.add('item-header');\n    const taskDueDate = document.createElement('p');\n    taskDueDate.textContent = task.dueDate;\n    taskDueDate.classList.add('item-due-date');\n    const taskDeleteBtn = document.createElement('button');\n    taskDeleteBtn.textContent = '❌';\n    taskDeleteBtn.classList.add('delete-task');\n    const taskEditBtn = document.createElement('button');\n    taskEditBtn.textContent = '✏️';\n    taskEditBtn.classList.add('edit-task');\n    const cluster = document.createElement('div');\n    cluster.appendChild(taskDeleteBtn);\n    cluster.appendChild(taskEditBtn);\n    itemHeader.appendChild(taskDueDate);\n    itemHeader.appendChild(cluster);\n    // end item header\n    \n    const taskTitle = document.createElement('h3');\n    taskTitle.textContent = task.title;\n    const taskDescription = document.createElement('div');\n    taskDescription.classList.add('task-description');\n    taskDescription.textContent = task.description;\n    \n    const taskPriority = document.createElement('p');\n    taskPriority.textContent = `Priority: ${task.priority}`;\n\n    const titleContainer = document.createElement('div');\n    titleContainer.classList.add('title-container');\n\n    const taskBody = document.createElement('div');\n    taskBody.classList.add('task-body');\n    \n    taskItem.appendChild(itemHeader);\n    titleContainer.appendChild(taskTitle);\n    titleContainer.appendChild(taskPriority);\n    taskBody.appendChild(titleContainer);\n    taskBody.appendChild(taskDescription);\n    taskItem.appendChild(taskBody);\n    \n    tasksList.appendChild(taskItem);\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects/tasksController.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;