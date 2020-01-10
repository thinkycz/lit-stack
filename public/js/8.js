(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/inertia/Pages/App/Sidebar.vue");
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
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "flex" },
      [
        _c("sidebar"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full bg-white rounded-lg mx-auto px-10 py-8" },
          [
            _c("h1", { staticClass: "text-2xl font-medium mb-2" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c(
              "h2",
              {
                staticClass:
                  "font-medium text-sm text-gray-500 mb-4 uppercase tracking-wide"
              },
              [_vm._v("This is your dashboard")]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore eligendi et ex harum\n                sapiente! Animi culpa cum cupiditate eligendi eveniet harum necessitatibus nesciunt, officiis,\n                sapiente sequi unde vero voluptatum!"
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "nav",
    { staticClass: "w-1/5 py-4 relative", attrs: { id: "nav" } },
    [
      _c("ul", { staticClass: "relative" }, [
        _c(
          "li",
          { staticClass: "activeLink" },
          [
            _c(
              "inertia-link",
              {
                staticClass:
                  "py-3 pl-1 w-full flex items-center text-gray-600 hover:text-gray-700",
                class: {
                  "text-indigo-600 hover:text-indigo-600": _vm.$isRoute(
                    "app.dashboard"
                  )
                },
                attrs: { href: _vm.$route("app.dashboard") }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 fill-current",
                    attrs: { viewBox: "0 0 640 512" }
                  },
                  [
                    _c("g", [
                      _c("path", {
                        attrs: {
                          d:
                            "M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-3 text-sm font-medium" }, [
                  _vm._v("Dashboard")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "inertia-link",
              {
                staticClass:
                  "py-3 pl-1 w-full flex items-center text-gray-600 hover:text-gray-700",
                class: {
                  "text-indigo-600 hover:text-indigo-600": _vm.$isRoute(
                    "app.users"
                  )
                },
                attrs: { href: _vm.$route("app.users") }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-5 w-5 ml-1 fill-current",
                    attrs: { viewBox: "0 0 512 412" }
                  },
                  [
                    _c("g", [
                      _c("path", {
                        attrs: { d: "M351.75 168a128 128 0 0 1-255.5 0z" }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M13.6 79.83l6.4 1.5v58.4c-7 4.19-12 11.5-12 20.27 0 8.4 4.6 15.4 11.1 19.71L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.27C51.4 175.42 56 168.42 56 160c0-8.79-5-16.1-12-20.29V87.12l52 12.53V136h256V99.65l82.3-19.82c18.2-4.41 18.2-27.1 0-31.5l-190.4-46a85.9 85.9 0 0 0-39.7 0L13.6 48.23c-18.1 4.39-18.1 27.19 0 31.6zm305.8 240.79L224 416l-95.4-95.4C57.1 323.73 0 382.23 0 454.42V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-9.6c0-72.17-57.1-130.67-128.6-133.78z"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-3 text-sm font-medium" }, [
                  _vm._v("Users")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "inertia-link",
              {
                staticClass:
                  "py-3 pl-1 w-full flex items-center text-gray-600 hover:text-gray-700",
                class: {
                  "text-indigo-600 hover:text-indigo-600": _vm.$isRoute(
                    "app.integrations"
                  )
                },
                attrs: { href: _vm.$route("app.integrations") }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 fill-current",
                    attrs: { viewBox: "0 0 384 512" }
                  },
                  [
                    _c("g", [
                      _c("path", {
                        attrs: {
                          d:
                            "M96 0a32 32 0 0 0-32 32v96h64V32A32 32 0 0 0 96 0zm192 0a32 32 0 0 0-32 32v96h64V32a32 32 0 0 0-32-32z"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M384 176v32a16 16 0 0 1-16 16h-16v32a160.07 160.07 0 0 1-128 156.8V512h-64v-99.2A160.07 160.07 0 0 1 32 256v-32H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-3 text-sm font-medium" }, [
                  _vm._v("Integrations")
                ])
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/inertia/Pages/App/Dashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/inertia/Pages/App/Dashboard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=076b6050& */ "./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inertia/Pages/App/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050&":
/*!*************************************************************************************!*\
  !*** ./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=076b6050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Dashboard.vue?vue&type=template&id=076b6050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_076b6050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/inertia/Pages/App/Sidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/inertia/Pages/App/Sidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=2ff307a0& */ "./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inertia/Pages/App/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=2ff307a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inertia/Pages/App/Sidebar.vue?vue&type=template&id=2ff307a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_2ff307a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);