/******/
(function(modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}/******/
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
                /******/
            }
            /******/
        }
        ;
        /******/
        /******/
        // define __esModule on exports
        /******/
        __webpack_require__.r = function(exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        }
        ;
        /******/
        /******/
        // create a fake namespace object
        /******/
        // mode & 1: value is a module id, require it
        /******/
        // mode & 2: merge all properties of value into the ns
        /******/
        // mode & 4: return value when already ns object
        /******/
        // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function(value, mode) {
            /******/
            if (mode & 1)
                value = __webpack_require__(value);
            /******/
            if (mode & 8)
                return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }
                        .bind(null, key));
            /******/
            return ns;
            /******/
        }
        ;
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
                function getDefault() {
                    return module['default'];
                }
                : /******/
                function getModuleExports() {
                    return module;
                }
            ;
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        }
        ;
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }
        ;
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
        /******/
    }
)/************************************************************************/
    /******/
    ({

        /***/
        "./css/all.css": /*!*********************!*\
  !*** ./css/all.css ***!
  \*********************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./all.css */ \"./node_modules/css-loader/dist/cjs.js!./css/all.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./css/all.css?");

                    /***/
                }
            ),

        /***/
        "./css/navstyle.css": /*!**************************!*\
  !*** ./css/navstyle.css ***!
  \**************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./navstyle.css */ \"./node_modules/css-loader/dist/cjs.js!./css/navstyle.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./css/navstyle.css?");

                    /***/
                }
            ),

        /***/
        "./node_modules/css-loader/dist/cjs.js!./css/all.css": /*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/all.css ***!
  \***********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\r\\n  .w3-animate-bottom {\\r\\n    animation: animatebottom 1.5s;\\r\\n  }\\r\\n  HR{\\r\\n    width: 90%;\\r\\n    border: 0;\\r\\n    margin: auto;\\r\\n    height: 1px;\\r\\n    background: #333;\\r\\n    background-image: linear-gradient(to right, #ccc, #333, #ccc);\\r\\n  }\\r\\n  html,\\r\\n  body {\\r\\n    background-color: #fff;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n  p,h1,h2,h3,h4,h5{\\r\\n    font-family: Microsoft JhengHei;\\r\\n  }\\r\\n  \\r\\n  .hide {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .visibility {\\r\\n    visibility: hidden;\\r\\n  }\\r\\n\\r\\n\\r\\n  .myExperience h2 {\\r\\n    font-family: Microsoft JhengHei;\\r\\n    padding: 40px 0 5px 0;\\r\\n    text-align: center;\\r\\n  }\\r\\n  .myself-text h1 {\\r\\n    font-family: Microsoft JhengHei;\\r\\n    color: #fff;\\r\\n    font-size: 50px;\\r\\n    padding: 50px 50px 50px 0;\\r\\n  }\\r\\n\\r\\n  .myself-text p{padding: 50px 0 0 0;}\\r\\n\\r\\n  .myself-text {\\r\\n    top:15%;\\r\\n    position: absolute;\\r\\n    left: 20%;\\r\\n    font-size: 20px;\\r\\n    color: #fff;\\r\\n  }\\r\\n  /* 自我介紹 */\\r\\n  .pic img {\\r\\n    width: 70%;\\r\\n    margin: 0 10px 0;\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n\\r\\n \\r\\n  .myData {\\r\\n    background: #fff;\\r\\n    padding:100px 100px 100px 100px;\\r\\n  }\\r\\n  \\r\\n  .MyResume {\\r\\n    padding: 65px 0 0 0;\\r\\n    \\r\\n  }\\r\\n\\r\\n  .Mytext h3{\\r\\n    font-family: Microsoft JhengHei;\\r\\n    font-size: 34px;\\r\\n    font-weight:bold;\\r\\n  }\\r\\n  .Mytext {\\r\\n\\r\\n    padding: 10%;\\r\\n    width: 63.33333%;\\r\\n    line-height: 30px;\\r\\n    text-align: left;\\r\\n    font-size: 18px;\\r\\n  }\\r\\n\\r\\n  .aboutme {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    padding: 0 50px 0 ;\\r\\n  }\\r\\n\\r\\n\\r\\n  /* 經歷 */\\r\\n  .myExperience {\\r\\n    width: 100%;\\r\\n    background: #fff;\\r\\n    padding:100px  100px;\\r\\n  }\\r\\n\\r\\n  .Expergird{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    /* padding: 0 10% 0; */\\r\\n  }\\r\\n  .MyPython,\\r\\n  .MySpecialSubject,\\r\\n  .MyCurrent {\\r\\n    box-shadow: 0 0 15px #dadadae1;\\r\\n    width: 100%;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    margin: 0 20px 0;\\r\\n    border-radius: 5px;\\r\\n  }\\r\\n\\r\\n  .Expic img {\\r\\n    border-radius: 50%;\\r\\n    padding: 0 15px 0;\\r\\n  }\\r\\n  .Extext h3{\\r\\n    font-family: Microsoft JhengHei;\\r\\n    font-weight:bold;\\r\\n  }\\r\\n  .Extext{\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n    font-size: 16px;\\r\\n \\r\\n  }\\r\\n  .Extext strong{\\r\\n    color:#2e659c;\\r\\n  }\\r\\n  .Extext strong:hover{\\r\\n    font-size: 22px;\\r\\n\\r\\n  }\\r\\n  /* 我的技術 */\\r\\n  .myskill {\\r\\n    width: 100%;\\r\\n    background: #fff;\\r\\n    padding: 100px 100px 100px 100px;\\r\\n  }\\r\\n  .skill-btn{\\r\\n    padding: 500px 10% 0;\\r\\n  }\\r\\n  .myskill h2 {\\r\\n    text-align: left;\\r\\n    font-weight:bold;\\r\\n  }\\r\\n\\r\\n  .front-end,.back-end,.Other  {\\r\\n    display: flex;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    justify-content: center;\\r\\n    padding: 100px 15% 100px;\\r\\n  }\\r\\n  .bg-1 {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n  }\\r\\n\\r\\n  .skill-text{\\r\\n    width: 50%;\\r\\n    padding: 0 50px 0;\\r\\n    text-align: left;\\r\\n    font-size: 18px;\\r\\n  }\\r\\n\\r\\n  .skill-chart {\\r\\n    width: 50%;\\r\\n    padding: 20px;\\r\\n  }\\r\\n\\r\\n  .bar {\\r\\n    background-color: #f2f2f1;\\r\\n    width: 100%;\\r\\n    height: 24px;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  .bar-front {\\r\\n    background-color: #2ecc71;\\r\\n    width: 0%;\\r\\n    height: 100%;\\r\\n    position: relative;\\r\\n    transition: width 200ms linear;\\r\\n  }\\r\\n\\r\\n  .bar-front::after {\\r\\n    position: absolute;\\r\\n    right: 2.5%;\\r\\n    content: attr(data-percent);\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n    font-weight: 700;\\r\\n    line-height: 24px;\\r\\n  }\\r\\n\\r\\n  .bar-back {\\r\\n    background-color: #2ecc71;\\r\\n    width: 0%;\\r\\n    height: 100%;\\r\\n    position: relative;\\r\\n    transition: width 200ms linear;\\r\\n  }\\r\\n\\r\\n  .bar-back::after {\\r\\n    position: absolute;\\r\\n    right: 2.5%;\\r\\n    content: attr(data-percent);\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n    font-weight: 700;\\r\\n    line-height: 24px;\\r\\n  }\\r\\n\\r\\n  .bar-other {\\r\\n    background-color: #2ecc71;\\r\\n    width: 0%;\\r\\n    height: 100%;\\r\\n    position: relative;\\r\\n    transition: width 200ms linear;\\r\\n  }\\r\\n\\r\\n  .bar-other::after {\\r\\n    position: absolute;\\r\\n    right: 2.5%;\\r\\n    content: attr(data-percent);\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n    font-weight: 700;\\r\\n    line-height: 24px;\\r\\n  }\\r\\n \\r\\n  /* 這是聯絡我 */\\r\\n  .callme {\\r\\n    /* display: none; */\\r\\n    display: flex;\\r\\n    width:100% ;\\r\\n    background: #3D3D50;\\r\\n    padding: 50px 0 50px 0;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .item-group{\\r\\n    border-right: .5px solid #f3f3f3bb;\\r\\n    padding: 0 100px;\\r\\n    width:33.33333% ;\\r\\n  }\\r\\n  .contact-bottom{\\r\\n    width:33.33333%;\\r\\n    padding: 0 100px ;\\r\\n  }\\r\\n  .item {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .callme .cpic img {\\r\\n    width: 30px;\\r\\n  }\\r\\n\\r\\n  .calltext p{\\r\\n    color: #fff;\\r\\n    text-align: left;\\r\\n    padding: 0 20px;\\r\\n  }\\r\\n  .contact-bottom a{\\r\\n    color: #fff;\\r\\n    display: flex;\\r\\n    text-align: left;\\r\\n    flex-direction: column;\\r\\n    padding: 3px 0;\\r\\n  }\\r\\n  .bottom-text{\\r\\n    background: #3D3D50;\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n  }\\r\\n  @media (max-width: 1200px) {\\r\\n    .aboutme{\\r\\n      display: block;\\r\\n    }\\r\\n    .pic img{\\r\\n      width: 300px;\\r\\n    }\\r\\n    .Mytext {\\r\\n      width: 100%;\\r\\n    }\\r\\n    .myExperience {\\r\\n      padding:50px 100px;\\r\\n    }\\r\\n    .Expergird  {\\r\\n      display: block;\\r\\n    }\\r\\n    .MyPython,\\r\\n    .MySpecialSubject,\\r\\n    .MyCurrent{\\r\\n      height: 380px;\\r\\n      margin: 50px 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (max-width: 992px) {\\r\\n    .front-end,.back-end,.Other  {\\r\\n      display: block;\\r\\n      padding: 100px 15% 100px;\\r\\n    }\\r\\n    .myskill h2 {\\r\\n    text-align: center;\\r\\n    }\\r\\n    .skill-text{\\r\\n      width: 100%;\\r\\n      text-align: center;\\r\\n    }\\r\\n    .skill-chart {\\r\\n      width: 100%;\\r\\n      padding: 20px;\\r\\n    }\\r\\n    .skill-btn{\\r\\n      padding: 750px 10% 0;\\r\\n    }\\r\\n    .callme{\\r\\n      display: block;\\r\\n      padding: 0 50px 0;\\r\\n      width:100% ;\\r\\n    }\\r\\n    .item-group{\\r\\n      border-right:0;\\r\\n      padding: 0 50px;\\r\\n      width:100% ;\\r\\n      \\r\\n    }\\r\\n    .item {\\r\\n      justify-content: center;\\r\\n    }\\r\\n\\r\\n    .callme .cpic img {\\r\\n      width: 24px;\\r\\n    }\\r\\n    .calltext p{\\r\\n      text-align: left;\\r\\n      padding: 0 20px;\\r\\n    }\\r\\n    .contact-bottom{\\r\\n      display: flex;\\r\\n      justify-content: center;\\r\\n      flex-direction: row;\\r\\n      width:100%;\\r\\n    }\\r\\n    .contact-bottom a{\\r\\n      padding: 0 5px ;\\r\\n    }\\r\\n\\r\\n\\t}\\r\\n\\r\\n  @media (max-width: 768px) {\\r\\n    .skill-btn{\\r\\n      padding: 830px 10% 0;\\r\\n    }\\r\\n    .myself-text {\\r\\n      position: absolute;\\r\\n      top: 10%;\\r\\n      left: 5%;\\r\\n      font-size: 18px;\\r\\n      font-weight: bold;\\r\\n    }\\r\\n  \\r\\n\\r\\n  }\\r\\n  @media (max-width: 576px) {\\r\\n    .myData {\\r\\n      padding: 50px 50px;\\r\\n    }\\r\\n\\r\\n    .aboutme {\\r\\n      padding: 0 10px 0 ;\\r\\n    }\\r\\n    .Mytext {\\r\\n      padding:0;\\r\\n      text-align: center;\\r\\n    }\\r\\n    .myExperience {\\r\\n      padding:0;\\r\\n      margin: 0;\\r\\n    }\\r\\n    .MyPython,\\r\\n    .MySpecialSubject,\\r\\n    .MyCurrent{\\r\\n      height: 450px;\\r\\n    }\\r\\n\\r\\n    .pic img{\\r\\n      width: 150px;\\r\\n    }\\r\\n    .front-end,.back-end,.Other  {\\r\\n      padding: 50px 10%;\\r\\n    }\\r\\n    .skill-text{\\r\\n      display: none;\\r\\n    }\\r\\n    .skill-btn{\\r\\n      padding: 400px 10% 0;\\r\\n    }\\r\\n    .bg-1 {\\r\\n      display: inline-block;\\r\\n    }\\r\\n \\r\\n  }\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./css/all.css?./node_modules/css-loader/dist/cjs.js");

                    /***/
                }
            ),

        /***/
        "./node_modules/css-loader/dist/cjs.js!./css/navstyle.css": /*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/navstyle.css ***!
  \****************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\r\\n\\r\\nheader {\\r\\n      width: 100%;\\r\\n      height: 100vh;\\r\\n      background: url(https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Fbanner1.png?alt=media&token=cc6528e3-d605-4602-ade3-ae86d412c120) no-repeat 50% 50%;\\r\\n      background-size: cover;\\r\\n      background-attachment: fixed;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n      line-height: 60px;\\r\\n      position: fixed;\\r\\n      float: left;\\r\\n      margin: 16px 46px;\\r\\n      color: #fff;\\r\\n      font-weight: bold;\\r\\n      font-size: 20px;\\r\\n      letter-spacing: 2px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n      z-index: 999999;\\r\\n      position: fixed;\\r\\n      width: 100%;\\r\\n      line-height: 60px;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n      line-height: 60px;\\r\\n      list-style: none;\\r\\n      background: rgba(0, 0, 0, 0);\\r\\n      overflow: hidden;\\r\\n      color: #fff;\\r\\n      padding: 0;\\r\\n      text-align: right;\\r\\n      margin: 0;\\r\\n      padding-right: 40px;\\r\\n      transition: 1s;\\r\\n}\\r\\n\\r\\nnav.black ul {\\r\\n      background: #000;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n      display: inline-block;\\r\\n      padding: 16px 40px;;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n      text-decoration: none;\\r\\n      color: #fff;\\r\\n      font-size: 16px;\\r\\n}\\r\\n\\r\\n.menu-icon {\\r\\n      line-height: 60px;\\r\\n      width: 100%;\\r\\n      background: #000;\\r\\n      text-align: right;\\r\\n      box-sizing: border-box;\\r\\n      padding: 15px 24px;\\r\\n      cursor: pointer;\\r\\n      color: #fff;\\r\\n      display: none;\\r\\n}\\r\\n\\r\\n@media(max-width: 786px) {\\r\\n\\r\\n      .logo {\\r\\n            position: fixed;\\r\\n            top: 0;\\r\\n            margin-top: 16px;\\r\\n      }\\r\\n\\r\\n      nav ul {\\r\\n            max-height: 0px;\\r\\n            background: #000;\\r\\n      }\\r\\n\\r\\n      nav.black ul {\\r\\n            background: #000;\\r\\n      }\\r\\n\\r\\n      .showing {\\r\\n            max-height: 34em;\\r\\n      }\\r\\n\\r\\n      nav ul li {\\r\\n            box-sizing: border-box;\\r\\n            width: 100%;\\r\\n            padding: 24px;\\r\\n            text-align: center;\\r\\n      }\\r\\n\\r\\n      .menu-icon {\\r\\n            display: block;\\r\\n      }\\r\\n\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./css/navstyle.css?./node_modules/css-loader/dist/cjs.js");

                    /***/
                }
            ),

        /***/
        "./node_modules/css-loader/dist/runtime/api.js": /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    "use strict";
                    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

                    /***/
                }
            ),

        /***/
        "./node_modules/style-loader/lib/addStyles.js": /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

                    /***/
                }
            ),

        /***/
        "./node_modules/style-loader/lib/urls.js": /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

                    eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

                    /***/
                }
            ),

        /***/
        "./src/index.js": /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/all.css */ \"./css/all.css\");\n/* harmony import */ var _css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_all_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_navstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/navstyle.css */ \"./css/navstyle.css\");\n/* harmony import */ var _css_navstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_navstyle_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$(function () {\n  var front_bar;\n  var back_bar;\n  var other_bar;\n  addbar(front_bar, '.bar-front');\n\n  function FrontClick() {\n    $('.front-end').removeClass('visibility');\n    $('.back-end').addClass('visibility');\n    $('.Other').addClass('visibility');\n    addbar(front_bar, '.bar-front');\n    cleanbar(back_bar, '.bar-back');\n    cleanbar(other_bar, '.bar-other');\n  }\n\n  window.FrontClick = FrontClick;\n\n  function BackClick() {\n    $('.front-end').addClass('visibility');\n    $('.back-end').removeClass('visibility');\n    $('.back-end').removeClass('visibility');\n    $('.Other').addClass('visibility');\n    addbar(back_bar, '.bar-back');\n    cleanbar(front_bar, '.bar-front');\n    cleanbar(other_bar, '.bar-other');\n  }\n\n  window.BackClick = BackClick;\n\n  function OtherClick() {\n    $('.front-end').addClass('visibility');\n    $('.back-end').addClass('visibility'); // $('.Other').removeClass('visibility');\n\n    $('.Other').removeClass('visibility');\n    addbar(other_bar, '.bar-other');\n    cleanbar(front_bar, '.bar-front');\n    cleanbar(back_bar, '.bar-back');\n  }\n\n  window.OtherClick = OtherClick;\n\n  function addbar(bars, classname) {\n    bars = [].slice.call(document.querySelectorAll(classname));\n    bars.map(function (bar, index) {\n      setTimeout(function () {\n        bar.style.width = bar.dataset.percent;\n      }, index * 200);\n    });\n  }\n\n  function cleanbar(bars, classname) {\n    bars = [].slice.call(document.querySelectorAll(classname));\n    bars.map(function (bar, index) {\n      setTimeout(function () {\n        bar.style.width = \"0%\";\n      }, index);\n    });\n  }\n});\n$(function () {\n  // 飛入\n  $(window).scroll(function () {\n    var scrollVal = $(this).scrollTop();\n\n    if (scrollVal >= 1000) {\n      $('.myExperience').addClass(\".w3-container w3-animate-bottom\");\n    }\n\n    if (scrollVal >= 1400) {\n      $('.myskill').removeClass(\"visibility\");\n      $('.myskill').addClass(\".w3-container w3-animate-bottom\");\n    }\n  }); // 導覽列 點擊 錨點\n\n  $('a[href*=#]:not([href=#])').click(function () {\n    var target = $(this.hash);\n    $('html,body').animate({\n      scrollTop: target.offset().top\n    }, 800);\n    return false;\n  });\n});\n$(document).ready(function () {\n  $(\".menu-icon\").on(\"click\", function () {\n    $(\"nav ul\").toggleClass(\"showing\");\n  });\n}); // Scrolling Effect\n\n$(window).on(\"scroll\", function () {\n  if ($(window).scrollTop()) {\n    $('nav').addClass('black');\n  } else {\n    $('nav').removeClass('black');\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

                    /***/
                }
            )
        /******/
    });
