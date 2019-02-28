webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marielbackman/Desktop/cursos online/udemy/reactjs/proyectos/todo_bitcoin/components/Evento.js";


var Evento = function Evento(props) {
  //haciendo destructuring para extraer la info que se quiere desplegar
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description; //para que solamente se desplieguen 300 caracteres de la descripción del evento, si la hubiere

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 300);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, name.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, description.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.4bc08098c67f4fb68a03.hot-update.js.map