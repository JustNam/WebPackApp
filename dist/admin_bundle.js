webpackJsonp([0],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)(false);
// Module
exports.push([module.i, "html {\n\tfont-size: 10px;\n\tfont-family: sans-serif;\n}\n\np {\n\tfont-size: 1.6rem;\n\tline-height: 1.5;\n}\n\n\n\nh1 {\n\tfont-family: billabong, 'billabongregular';\n\ttext-align: center;\n\tfont-weight: 100;\n\tfont-size: 13rem;\n\tmargin: 2rem 0;\n\tletter-spacing: -1px;\n\tcolor: black;\n\ttext-decoration: none;\n}\n\nh1 a {\n\tcolor: black;\n\ttext-decoration: none;\n}\n\nh1 a:focus {\n\toutline: 0;\n}\n\n@font-face {\n\tfont-family: 'billabongregular';\n\tsrc: url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot\");\n\tsrc: url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix\") format('embedded-opentype'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff\") format('woff'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf\") format('truetype'), url(\"https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular\") format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n\nbody {\n\tbackground: offwhite;\n}\n\n.photoGrid {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n\n}\n\n\n.figure {\n    flex-basis: calc(33.333% - 4rem);\n    border: 1px solid #d3d3d3;\n    padding: 2rem;\n    flex-grow: 1;\n    margin: 0 2rem 2rem 2rem;\n\t\n}\n\n .figure .single-photo {\n\tflex-basis: calc(33.333% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 2rem 2rem 2rem;\n\tpadding: 2rem;\n\tborder: 1px solid #d3d3d3;\n\tbackground: #fff;\n\tposition: relative;\n}\n\n\n.single-photo {\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tbackground: #fff;\n\tborder:  black;\n}\n\n\n.single-photo .figure {\n\tbox-shadow: none;\n\tmargin: 0 2rem 0 0;\n\tborder: 0;\n\tpadding: 0;\n\tflex: 1 0 60%;\n\tmax-width: 60%;\n}\n\n.single-photo .comments {\n\tflex: 1 0 40%;\n\tmax-width: 40%;\n}\n\n .single-photo .photo {\n\twidth: 100%;\n\tmargin: 0 ;\n} \n \n  .photo {\t\n\twidth: calc(100% + 4rem);\n\tmargin-left: - 2rem;\n\tmargin-top: - 2rem;\n\tmax-width: none;\n\n}\n\n\n\n.comment{\n\twidth: 100%\n}\n.comment p {\n\tborder-bottom: 1px solid #d3d3d3;\n\tpadding: 0.5rem 0;\n}\n\n\n.comment-form input,\n.comment-form textarea {\n\twidth: 100%;\n\tborder: 0;\n\tfont-size: 1.3rem;\n\tpadding: 1rem 0;\n\tborder-bottom: 1px solid #d3d3d3;\n\toutline: none;\n\tresize: vertical;\n}\n\n\n\n.addIcon {\n\tbackground: url(\"https://image.flaticon.com/icons/svg/60/60740.svg\") center no-repeat;\n\tbackground-size: contain;\n\tpadding: 40px;\n\tdisplay: table;\n\tmargin: 20px auto;\n\tborder: none;\n}\n\n\n.button-container {\n\tmargin: 0 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\nbutton, .button {\n\tborder: 2px solid #f2f2f2;\n\tbackground: none;\n\tflex-basis: 48%;\n\tdisplay: inline-block;\n\tline-height: 2;\n\ttext-decoration: none;\n\tpadding: 5px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tcolor: red;\n\ttransition: all 0.2s;\n\tbox-sizing: padding-box;\n\t\n}\n\nbutton:hover,.button:hover, button:focus, .button:focus {\n\tborder-color: #00f;\n\toutline: 0;\n}\n\n.speech-bubble {\n\tbackground: url(\"https://d30y9cdsu7xlg0.cloudfront.net/png/51904-200.png\") center no-repeat;\n\tbackground-size: contain;\n\tpadding: 10px;\n\tmargin: 5px;\n\tdisplay: inline-block;\n\tborder: none;\n\tposition: relative;\n}\n\n\n.comment-count {\n\tmargin: 0 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: black\n}\n\n.form  {\n\twidth: 360px;\n\tpadding: 0 0 0;\n\tmargin: auto;\n}\n  \n.form input {\n\tfont-family: sans-serif;\n\toutline: 0;\n\tbackground: #f2f2f2;\n\twidth: 100%;\n\tborder: 0;\n\tmargin: 0 0 15px;\n\tpadding: 15px;\n\tbox-sizing: border-box;\n\tfont-size: 14px;\n  }\n\n\n.form button {\n\tfont-family: \"Roboto\", sans-serif;\n\ttext-transform: uppercase;\n\toutline: 0;\n\tbackground:#065784;\n\twidth: 100%;\n\tborder: 0;\n\tpadding: 15px;\n\tcolor: #FFFFFF;\n\tfont-size: 14px;\n\t-webkit-transition: all 0.3 ease;\n\ttransition: all 0.3 ease;\n\tcursor: pointer;\n  }\n\n  .form button:hover,.form button:active,.form button:focus {\n\tbackground: #7B8589;\n}\n\n.loader {\n\theight: 20%;\n\twidth: 100%;\n\tdisplay: flex;\n\tposition: fixed;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 28pt;\n}", ""]);


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })

},[131]);