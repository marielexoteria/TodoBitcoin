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
  var _props$precio = props.precio,
      rate_float = _props$precio.rate_float,
      code = _props$precio.code;
  var rate = rate_float.toFixed(2); //para que redondee el precio a 2 cifras decimales porque el float puede tener más de 2

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-white bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Precio actual: $", rate, " ", code))); //no se pudo desplegar las fluctuaciones del precio a 1 hora, a 24 horas y a 7 días según el proyecto porque el API de Coindesk provee el precio hace 24 horas o dentro de un rango de fechas, pero lo que devuelve es una fecha específica y me es difícil sacar el objeto porque cuando la fecha cambie, el objeto en el código no va a cambiar. Por ej. el 28 de febrero hago el query y el histórico a 24 horas me da info con "2019-02-27", el cual yo tendría que escribir en alguna variable. Cuando la fecha cambie al 1 de marzo, el código no refleja el precio al 28 de febrero. Por lo tanto, solamente desplegaré el precio del bitcoin al momento. Info en https://www.coindesk.com/api
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.c303ab2014a29788042c.hot-update.js.map