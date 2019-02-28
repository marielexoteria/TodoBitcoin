webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Precio.js":
/*!******************************!*\
  !*** ./components/Precio.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marielbackman/Desktop/cursos online/udemy/reactjs/proyectos/todo_bitcoin/components/Precio.js";


var Precio = function Precio(props) {
  console.log(props);
  var _props$precio = props.precio,
      rate_float = _props$precio.rate_float,
      code = _props$precio.code;
  var rate = rate_float.toFixed(2); //para que redondee el precio a 2 cifras decimales porque el float puede tener más de 2

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-white bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Precio actual: $ ", rate, " ", code)));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.e3ba913c8c4309fbe062.hot-update.js.map