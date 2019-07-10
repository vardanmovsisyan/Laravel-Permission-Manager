(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var vue_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-drag-drop */ "./node_modules/vue-drag-drop/dist/vue-drag-drop.common.js");
/* harmony import */ var vue_drag_drop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_drag_drop__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var RoleRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('role');
var PermissionRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('permission');

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditPermissionsComponent",
  components: {
    Drag: vue_drag_drop__WEBPACK_IMPORTED_MODULE_2__["Drag"],
    Drop: vue_drag_drop__WEBPACK_IMPORTED_MODULE_2__["Drop"]
  },
  data: function data() {
    return {
      roleTag: '',
      roleTags: [],
      roles: [],
      routeRoles: [],
      routeAbilities: [],
      permission: {},
      permissions: [],
      autocompleteRoles: [],
      showAddEditPermission: false,
      error: '',
      over: false
    };
  },
  props: {
    currentRoute: {}
  },
  created: function created() {
    this.getAllRoles();
    this.getAllPermissions();
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      return this.autocompleteRoles.filter(function (i) {
        return i.text.toLowerCase().indexOf(_this.roleTag.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    getAllRoles: function () {
      var _getAllRoles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return RoleRepository.get();

              case 2:
                res = _context.sent;
                this.roles = res.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllRoles() {
        return _getAllRoles.apply(this, arguments);
      }

      return getAllRoles;
    }(),
    getAllPermissions: function () {
      var _getAllPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return PermissionRepository.get();

              case 2:
                res = _context2.sent;
                this.permissions = res.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllPermissions() {
        return _getAllPermissions.apply(this, arguments);
      }

      return getAllPermissions;
    }(),
    handleDrop: function handleDrop(data) {
      this.over = false;

      if ('abilities' in data) {
        this.routeAbilities = this.routeAbilities.concat(data.abilities);
      } else {
        this.routeAbilities.push(data);
      }
    },
    closeModal: function closeModal() {
      this.$parent.showPermissions = !this.$parent.showPermissions;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".program-modal[data-v-3ff8956a] {\n  width: 100%;\n}\n.program-modal .content[data-v-3ff8956a] {\n  position: relative;\n  border-bottom: 0;\n  width: 100%;\n}\n.program-modal .content h3[data-v-3ff8956a] {\n  position: relative;\n  display: block;\n  font-size: 18px;\n  height: 30px;\n}\n.program-modal .content .table-content[data-v-3ff8956a] {\n  height: 350px;\n}\n.program-modal .content table[data-v-3ff8956a] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  height: 100%;\n  margin-top: 10px;\n}\n.program-modal .content table tbody[data-v-3ff8956a] {\n  width: 100%;\n  height: 100%;\n  display: inline-flex;\n  overflow-y: auto;\n}\n.program-modal .content table tbody[data-v-3ff8956a]::-webkit-scrollbar {\n  width: 8px;\n  position: relative;\n  left: 10px;\n}\n.program-modal .content table tbody[data-v-3ff8956a]::-webkit-scrollbar-thumb {\n  background: #F2F2F3;\n  border-radius: 5px;\n}\n.program-modal .content table tbody tr[data-v-3ff8956a] {\n  display: flex;\n  flex-flow: row wrap;\n  height: 50px;\n  flex: 1;\n}\n.program-modal .content table thead tr[data-v-3ff8956a] {\n  display: flex;\n}\n.program-modal .content table thead tr th[data-v-3ff8956a] {\n  flex: 1;\n}\n.program-modal .content table thead tr th .program-container[data-v-3ff8956a] {\n  margin: 15px 25px;\n}\n.program-modal .content table tr[data-v-3ff8956a] {\n  display: block;\n}\n.program-modal .content table tr td[data-v-3ff8956a], .program-modal .content table tr th[data-v-3ff8956a] {\n  font-size: 13px;\n  display: inline-block;\n  padding: 8px;\n  margin-right: 13px;\n}\n.program-modal .content table tr td .program-container[data-v-3ff8956a], .program-modal .content table tr th .program-container[data-v-3ff8956a] {\n  display: block;\n  position: relative;\n  padding-left: 15px;\n  margin: 15px 36px 15px 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n}\n.program-modal .content table tr td .program-container.ability[data-v-3ff8956a], .program-modal .content table tr th .program-container.ability[data-v-3ff8956a] {\n  margin: 0 60px 0 15px;\n}\n.program-modal .content table tr td .program-container input[data-v-3ff8956a], .program-modal .content table tr th .program-container input[data-v-3ff8956a] {\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  /* When the checkbox is checked, add a blue background */\n  /* Show the checkmark when checked */\n}\n.program-modal .content table tr td .program-container input:checked ~ .checkmark[data-v-3ff8956a], .program-modal .content table tr th .program-container input:checked ~ .checkmark[data-v-3ff8956a] {\n  background-color: #1D86BF;\n}\n.program-modal .content table tr td .program-container input:checked ~ .checkmark[data-v-3ff8956a]:after, .program-modal .content table tr th .program-container input:checked ~ .checkmark[data-v-3ff8956a]:after {\n  display: block;\n}\n.program-modal .content table tr td .program-container .checkmark[data-v-3ff8956a], .program-modal .content table tr th .program-container .checkmark[data-v-3ff8956a] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: #F5F6FA;\n  border-radius: 3px;\n  /* Create the checkmark/indicator (hidden when not checked) */\n}\n.program-modal .content table tr td .program-container .checkmark[data-v-3ff8956a]:after, .program-modal .content table tr th .program-container .checkmark[data-v-3ff8956a]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n.program-modal .content table tr td .program-container:hover input ~ .checkmark[data-v-3ff8956a], .program-modal .content table tr th .program-container:hover input ~ .checkmark[data-v-3ff8956a] {\n  background-color: #ccc;\n}\n.program-modal .content table tr td.parent[data-v-3ff8956a] {\n  font-weight: bold;\n  padding: 0;\n  text-align: left;\n  background-color: #F5F6FA;\n}\n.program-modal .content table tr td.parent .program-container .checkmark[data-v-3ff8956a] {\n  background-color: #fff;\n}\n.program-modal .content table tr td[data-v-3ff8956a] {\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  background: #FFFFFF;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../node_modules/sass-loader/lib/loader.js??ref--6-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "modal-edit-permissions",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "modal-popout",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-popout modal-lg",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "div",
              { staticClass: "block block-themed block-transparent mb-0" },
              [
                _c("div", { staticClass: "block-header bg-primary-dark" }, [
                  _c("h3", { staticClass: "block-title" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.currentRoute.uri) +
                        " | Permissions\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "block-options" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn-block-option",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        on: {
                          click: function($event) {
                            return _vm.closeModal()
                          }
                        }
                      },
                      [_c("i", { staticClass: "si si-close" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "program-modal modal-expense" },
                        [
                          _c("div", { staticClass: "content" }, [
                            _c("div", { staticClass: "table-content" }, [
                              _c("table", [
                                _c("tbody", [
                                  _c(
                                    "tr",
                                    [
                                      _vm._l(_vm.roles, function(
                                        role,
                                        parent_key
                                      ) {
                                        return [
                                          _c(
                                            "drag",
                                            {
                                              staticClass: "drag",
                                              attrs: { transferData: role }
                                            },
                                            [
                                              _c(
                                                "td",
                                                { staticClass: "parent" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "program-container"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        { staticClass: "name" },
                                                        [
                                                          _vm._v(
                                                            _vm._s(role.name)
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(role.abilities, function(
                                            ability
                                          ) {
                                            return [
                                              _c(
                                                "drag",
                                                {
                                                  staticClass: "drag",
                                                  attrs: {
                                                    transferData: ability
                                                  }
                                                },
                                                [
                                                  _c("td", [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "program-container ability"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "name"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                ability.title
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          })
                                        ]
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "program-modal modal-expense" },
                        [
                          _c("div", { staticClass: "content" }, [
                            _c(
                              "div",
                              { staticClass: "table-content" },
                              [
                                _c(
                                  "drop",
                                  {
                                    staticClass: "drop",
                                    class: { over: _vm.over },
                                    staticStyle: {
                                      border: "1px solid",
                                      "min-height": "100px",
                                      height: "100%"
                                    },
                                    on: {
                                      dragover: function($event) {
                                        _vm.over = true
                                      },
                                      dragleave: function($event) {
                                        _vm.over = false
                                      },
                                      drop: _vm.handleDrop
                                    }
                                  },
                                  [
                                    _c("table", [
                                      _c("tbody", [
                                        _c(
                                          "tr",
                                          [
                                            _vm._l(_vm.routeAbilities, function(
                                              ability,
                                              parent_key
                                            ) {
                                              return [
                                                _c(
                                                  "td",
                                                  { staticClass: "parent" },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "program-container"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "name"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                ability.name
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            })
                                          ],
                                          2
                                        )
                                      ])
                                    ])
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
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c("div", { staticClass: "w-100 text-danger" }, [
                _vm._v(_vm._s(_vm.error))
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-alt-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue":
/*!**************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true&");
/* harmony import */ var _EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPermissionsComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ff8956a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../node_modules/sass-loader/lib/loader.js??ref--6-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=style&index=0&id=3ff8956a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_lib_loader_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_style_index_0_id_3ff8956a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue?vue&type=template&id=3ff8956a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_3ff8956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js":
/*!*************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseDomain = window.location.protocol + '//' + window.location.hostname + '/laravel-permission-manager-route-api';
var baseURL = "".concat(baseDomain);
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseURL
}));

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js":
/*!********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js ***!
  \********************************************************************************************************/
/*! exports provided: RepositoryFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryFactory", function() { return RepositoryFactory; });
/* harmony import */ var _modelRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js");
/* harmony import */ var _roleRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roleRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js");
/* harmony import */ var _permissionRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissionRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js");
/* harmony import */ var _routeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js");




var repositories = {
  model: _modelRepository__WEBPACK_IMPORTED_MODULE_0__["default"],
  role: _roleRepository__WEBPACK_IMPORTED_MODULE_1__["default"],
  permission: _permissionRepository__WEBPACK_IMPORTED_MODULE_2__["default"],
  route: _routeRepository__WEBPACK_IMPORTED_MODULE_3__["default"]
};
var RepositoryFactory = {
  get: function get(name) {
    return repositories[name];
  }
};

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js":
/*!******************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/models";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/permissions";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  },
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  update: function update(id, payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(resource, "/").concat(id), payload);
  },
  "delete": function _delete(id) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/roles";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  },
  createRole: function createRole(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  assignPermission: function assignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  unassignPermission: function unassignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  removeRole: function removeRole(roleId) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(roleId));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js":
/*!******************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/routes";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  }
});

/***/ })

}]);