(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['errors', 'user'],
  data: function data() {
    return {
      form: {
        name: this.user.name,
        email: this.user.email
      }
    };
  },
  methods: {
    submit: function submit() {
      this.$inertia.put(this.$route('settings.profile.update'), this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("app-layout", [
    _c("div", { staticClass: "container mx-auto max-w-3xl" }, [
      _c(
        "h1",
        { staticClass: "text-2xl font-bold text-gray-700 px-6 md:px-0" },
        [_vm._v("Profile Settings")]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass:
            "flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0"
        },
        [
          _c(
            "li",
            {
              staticClass: "mr-8 text-gray-700 hover:text-gray-900",
              class: {
                "border-b-2 border-gray-800": _vm.$isRoute(
                  "settings.profile.index"
                )
              }
            },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "py-4 inline-block",
                  attrs: { href: _vm.$route("settings.profile.index") }
                },
                [_vm._v("\n                    My Profile\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "mr-8 text-gray-700 hover:text-gray-900",
              class: {
                "border-b-2 border-gray-800": _vm.$isRoute(
                  "settings.password.index"
                )
              }
            },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "py-4 inline-block",
                  attrs: { href: _vm.$route("settings.password.index") }
                },
                [_vm._v("\n                    Password\n                ")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
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
                "w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none"
            },
            [
              _c(
                "div",
                { staticClass: "w-1/3 bg-gray-100 p-8 hidden md:inline-block" },
                [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "font-medium text-md text-gray-700 mb-4 tracking-wide"
                    },
                    [_vm._v("Personal information")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xs text-gray-500" }, [
                    _vm._v(
                      "\n                        In this section, you can change your personal information such as Name and Email Address\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md:w-2/3 w-full" }, [
                _c("div", { staticClass: "py-8 px-16" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-sm text-gray-600",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass:
                      "mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500",
                    class: { "border-red-500": _vm.errors.name },
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c(
                        "p",
                        { staticClass: "text-red-500 text-xs italic mt-2" },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.name[0]) +
                              "\n                        "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "border-gray-200" }),
                _vm._v(" "),
                _c("div", { staticClass: "py-8 px-16" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-sm text-gray-600",
                      attrs: { for: "email" }
                    },
                    [_vm._v("Email Address")]
                  ),
                  _vm._v(" "),
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
                      "mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500",
                    class: { "border-red-500": _vm.errors.email },
                    attrs: { type: "email", id: "email" },
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
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200"
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "float-left text-xs text-gray-500 tracking-tight mt-3"
                },
                [
                  _vm._v(
                    "\n                    Please click Save to save your changes\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass:
                  "bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-full float-right uppercase cursor-pointer",
                attrs: { type: "submit", value: "Save" }
              })
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/inertia/Pages/Settings/Profile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/inertia/Pages/Settings/Profile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=3d1c853b& */ "./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inertia/Pages/Settings/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=3d1c853b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/Settings/Profile.vue?vue&type=template&id=3d1c853b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3d1c853b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);