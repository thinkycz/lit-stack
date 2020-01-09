(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mx-auto" }, [
    _c("div", { staticClass: "flex flex-wrap justify-center" }, [
      _c("div", { staticClass: "w-full max-w-sm" }, [
        _c(
          "div",
          {
            staticClass:
              "flex flex-col break-words bg-white border border-2 rounded shadow-md"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0"
              },
              [_vm._v("\n                    Reset Password\n                ")]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "w-full p-6",
                attrs: { method: "POST", action: _vm.$route("password.update") }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "token" },
                  domProps: { value: _vm.token }
                }),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-gray-700 text-sm font-bold mb-2",
          attrs: { for: "email" }
        },
        [
          _vm._v(
            "\n                            E-Mail Address\n                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        attrs: {
          id: "email",
          type: "email",
          name: "email",
          required: "",
          autocomplete: "email",
          autofocus: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-gray-700 text-sm font-bold mb-2",
          attrs: { for: "password" }
        },
        [
          _vm._v(
            "\n                            Password\n                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        attrs: {
          id: "password",
          type: "password",
          name: "password",
          required: "",
          autocomplete: "new-password"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-gray-700 text-sm font-bold mb-2",
          attrs: { for: "password-confirm" }
        },
        [
          _vm._v(
            "\n                            Confirm Password\n                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        attrs: {
          id: "password-confirm",
          type: "password",
          name: "password_confirmation",
          required: "",
          autocomplete: "new-password"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          attrs: { type: "submit" }
        },
        [
          _vm._v(
            "\n                            Reset Password\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/inertia/Pages/Auth/Passwords/Reset.vue":
/*!*************************************************************!*\
  !*** ./resources/js/inertia/Pages/Auth/Passwords/Reset.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset.vue?vue&type=template&id=a69818a2& */ "./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inertia/Pages/Auth/Passwords/Reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2&":
/*!********************************************************************************************!*\
  !*** ./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=template&id=a69818a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=a69818a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_a69818a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);