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
      description = _props$info.description; //para desplegar los primeros 150 caracteres del título

  var titulo = name.text;

  if (titulo.length > 150) {
    //siempre habrá un título y por eso se busca comparar su longitud con length()
    titulo = titulo.substr(0, 150) + "...";
  } //para que solamente se desplieguen 250 caracteres de la descripción del evento, si la hubiere


  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + "...";
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, titulo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.fc5155b21d7b7d1b0510.hot-update.js.map