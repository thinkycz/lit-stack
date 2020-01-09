(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['errors', 'status'],
  data: function data() {
    return {
      form: {
        email: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      this.$inertia.post(this.$route('password.email'), this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908& ***!
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
  return _c("layout", [
    _c("div", { staticClass: "flex py-40" }, [
      _c("div", { staticClass: "sm:max-w-xl md:max-w-2xl w-full m-auto" }, [
        Object.keys(_vm.status).length !== 0
          ? _c(
              "div",
              {
                staticClass:
                  "text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4",
                attrs: { role: "alert" }
              },
              [
                _vm._v(
                  "\n                " + _vm._s(_vm.status) + "\n            "
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass:
              "flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-indigo-500 sm:border-0",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "flex hidden overflow-hidden relative sm:block w-5/12 md:w-6/12 bg-gray-600 text-gray-300 py-4 bg-cover bg-center",
                staticStyle: {
                  "background-image":
                    "url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "flex-1 absolute bottom-0 text-white p-10" },
                  [
                    _c(
                      "h3",
                      { staticClass: "text-2xl font-bold inline-block" },
                      [_vm._v("Reset Password")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-gray-500 whitespace-no-wrap" },
                      [
                        _vm._v(
                          "\n                            Forgotten Password? No prob!\n                        "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass:
                      "absolute animate h-full w-4/12 sm:w-2/12 right-0 inset-y-0 fill-current text-white",
                    attrs: {
                      viewBox: "0 0 100 100",
                      xmlns: "http://www.w3.org/2000/svg",
                      preserveAspectRatio: "none"
                    }
                  },
                  [_c("polygon", { attrs: { points: "0,0 100,100 100,0" } })]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-1 p-6 sm:p-10 sm:py-12" }, [
              _c(
                "h3",
                { staticClass: "text-xl text-gray-700 font-bold mb-6" },
                [
                  _vm._v("\n                        Enter "),
                  _c("span", { staticClass: "text-gray-400 font-light" }, [
                    _vm._v("your email below")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-4" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email"
                    }
                  ],
                  staticClass:
                    "px-3 w-full py-2 bg-gray-200 border border-gray-200 rounded focus:border-gray-400 focus:outline-none focus:bg-white",
                  class: { "border-red-500": _vm.errors.email },
                  attrs: {
                    type: "email",
                    placeholder: "Email Address",
                    required: ""
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.email
                  ? _c(
                      "p",
                      { staticClass: "text-red-500 text-xs italic mt-2" },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.errors.email[0]) +
                            "\n                        "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-wrap items-center" }, [
                _c("div", { staticClass: "w-full sm:flex-1" }, [
                  _c("input", {
                    staticClass:
                      "w-full sm:w-auto bg-indigo-500 text-indigo-100 px-6 py-2 rounded hover:bg-indigo-600 focus:outline-none cursor-pointer",
                    attrs: { type: "submit", value: "Send Password Reset Link" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "w-full text-normal text-left text-grey-dark mt-8"
                },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "text-blue-500 hover:text-blue-700 no-underline",
                      attrs: { href: _vm.$route("login") }
                    },
                    [
                      _vm._v(
                        "\n                            Back to login\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/inertia/Pages/Auth/Passwords/Email.vue":
/*!*************************************************************!*\
  !*** ./resources/js/inertia/Pages/Auth/Passwords/Email.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=9b139908& */ "./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inertia/Pages/Auth/Passwords/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908&":
/*!********************************************************************************************!*\
  !*** ./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=9b139908& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Auth/Passwords/Email.vue?vue&type=template&id=9b139908&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_9b139908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);