module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@iso/assets/images/sign.jpg":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/sign.jpg ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sign-adf5846b1711fa8000cfd4c6c65a411d.jpg";

/***/ }),

/***/ "../../node_modules/@iso/components/Feedback/Modal.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/Feedback/Modal.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "../../node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/Feedback/Notification.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/Feedback/Notification.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification/style/css */ "../../node_modules/antd/lib/notification/style/css.js");
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification */ "antd/lib/notification");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/button.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/button.js ***!
  \**************************************************************************************************************/
/*! exports provided: default, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "../../node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/button.style */ "../../node_modules/@iso/components/uielements/styles/button.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const AntButton = Object(_styles_button_style__WEBPACK_IMPORTED_MODULE_2__["Buttons"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a);
const isoButton = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(AntButton);
const AntButtonGroup = Object(_styles_button_style__WEBPACK_IMPORTED_MODULE_2__["ButtonsGroup"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a.Group);
const ButtonGroup = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(AntButtonGroup);
/* harmony default export */ __webpack_exports__["default"] = (isoButton);


/***/ }),

/***/ "../../node_modules/@iso/components/uielements/checkbox.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/checkbox.js ***!
  \****************************************************************************************************************/
/*! exports provided: default, CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style/css */ "../../node_modules/antd/lib/checkbox/style/css.js");
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_checkbox_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/checkbox.style */ "../../node_modules/@iso/components/uielements/styles/checkbox.style.js");



const checkbox = Object(_styles_checkbox_style__WEBPACK_IMPORTED_MODULE_2__["default"])(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a);
const CheckboxGroup = antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group;
/* harmony default export */ __webpack_exports__["default"] = (checkbox);


/***/ }),

/***/ "../../node_modules/@iso/components/uielements/input.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/input.js ***!
  \*************************************************************************************************************/
/*! exports provided: default, InputSearch, InputGroup, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style/css */ "../../node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/input.style */ "../../node_modules/@iso/components/uielements/styles/input.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const {
  Search,
  TextArea,
  Group
} = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a;
const WDStyledInput = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a);
const StyledInput = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDStyledInput);
const WDInputGroup = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputGroupWrapper"])(Group);
const InputGroup = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDInputGroup);
const WDInputSearch = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputSearchWrapper"])(Search);
const InputSearch = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDInputSearch);
const WDTextarea = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["TextAreaWrapper"])(TextArea);
const Textarea = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDTextarea);
/* harmony default export */ __webpack_exports__["default"] = (StyledInput);


/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/button.style.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/styles/button.style.js ***!
  \***************************************************************************************************************************/
/*! exports provided: Buttons, ButtonsGroup, RadioButtons, GhostButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsGroup", function() { return ButtonsGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return RadioButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostButtons", function() { return GhostButtons; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");




const Buttons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__Buttons",
  componentId: "sc-15097sb-0"
})(["&.ant-btn{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:14px;border-radius:4px;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:", ";border-color:", ";", ";&:hover{border-color:", ";color:", ";}> .anticon + span,> span + .anticon{margin:", ";}.anticon-right{transform:", ";}.anticon-left{transform:", ";}&.ant-btn-primary{background-color:", ";border-color:", ";&:hover{background-color:", ";border-color:", ";color:#fff;}}&.ant-btn-sm{padding:0 15px;height:28px;font-size:12px;&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline){padding:", ";.anticon{margin:", ";}}}&.ant-btn-lg{padding:0 35px;font-size:14px;height:42px;}&.ant-btn-primary{color:#ffffff;}&.ant-btn-dashed{border-style:dashed;border-color:", ";&:hover{color:", ";border-color:", ";}}&.ant-btn-danger{background-color:", ";border-color:", ";color:#ffffff;&:hover{background-color:", ";border-color:", ";}&.ant-btn-background-ghost{color:", ";background-color:transparent;border-color:", ";&:hover{color:", ";border-color:", ";}}}&.ant-btn-circle,&.ant-btn-circle-outline{width:35px;padding:0;font-size:14px;border-radius:50%;height:35px;&.ant-btn-sm{padding:0;height:28px;width:28px;font-size:12px;}&.ant-btn-lg{padding:0;font-size:14px;height:42px;width:42px;}}&.ant-btn.disabled,&.ant-btn[disabled],&.ant-btn.disabled:hover,&.ant-btn[disabled]:hover,&.ant-btn.disabled:focus,&.ant-btn[disabled]:focus,&.ant-btn.disabled:active,&.ant-btn[disabled]:active,&.ant-btn.disabled.active,&.ant-btn[disabled].active{color:", ";background-color:#f7f7f7;border-color:", ";cursor:not-allowed;}&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) .anticon{margin:", ";}&.isoButton{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:0;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:13px;border-radius:4px;height:35px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:#ffffff;background-color:", ";", ";&:hover{background-color:", ";}&.isoBtnSm{padding:0 15px;height:28px;font-size:12px;}&.isoBtnLg{padding:0 35px;font-size:14px;height:42px;}}}+ .ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '0 0.5em 0 0' : '0 0 0 0.5em', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 24px 0 15px' : '0 15px 0 24px', props => props['data-rtl'] === 'rtl' ? '0 -17px 0 0' : '0 0 0 -17px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 -14px 0 0' : '0 0 0 -14px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const RadioButtons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__RadioButtons",
  componentId: "sc-15097sb-1"
})([".ant-radio-button-wrapper{height:35px;line-height:33px;color:", ";border:1px solid ", ";border-left:0;background:#fff;padding:0 20px;&:hover,&.ant-radio-button-wrapper-focused{color:", ";}&.ant-radio-button-wrapper-checked{background:#fff;border-color:", ";color:", ";box-shadow:-1px 0 0 0 ", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));

const ButtonsGroup = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__ButtonsGroup",
  componentId: "sc-15097sb-2"
})(["&.ant-btn-group{.ant-btn{margin:0;margin-right:0;display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;border-color:", ";white-space:nowrap;line-height:1.5;padding:0 8px;font-size:14px;border-radius:0;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;", ";&:hover{border-color:", ";}&.ant-btn-dashed{border-style:dashed;&:hover{border-color:", ";}}&.ant-btn-primary{border-color:", ";&:hover{border-color:", ";}}}> .ant-btn:first-child:not(:last-child){border-radius:", ";}> .ant-btn:last-child:not(:first-child){border-radius:", ";}.ant-btn-primary:last-child:not(:first-child),.ant-btn-primary + .ant-btn-primary{border-left-color:", ";border-right-color:", ";}.ant-btn-primary:first-child:not(:last-child){border-left-color:", ";border-right-color:", ";}.ant-btn + .ant-btn,+ .ant-btn{margin-left:", " !important;margin-right:", " !important;}&.ant-btn-group-lg{> .ant-btn{padding:0 35px;font-size:14px;height:42px;}}&.ant-btn-group-sm{> .ant-btn{padding:0 15px;height:28px;font-size:12px;}}}&.ant-btn-group + &.ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const GhostButtons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__GhostButtons",
  componentId: "sc-15097sb-3"
})([".ant-btn-background-ghost{background:transparent !important;border-color:#fff;color:#fff;&.ant-btn-primary{color:", ";background-color:transparent;border-color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));



/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/checkbox.style.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/styles/checkbox.style.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);



const AntCheckbox = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "checkboxstyle__AntCheckbox",
  componentId: "giza60-0"
})(["&.ant-checkbox-wrapper{font-size:13px;color:", ";vertical-align:middle;.ant-checkbox{top:inherit;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1));

/* harmony default export */ __webpack_exports__["default"] = (AntCheckbox);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/input.style.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/styles/input.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: InputWrapper, InputGroupWrapper, InputSearchWrapper, TextAreaWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupWrapper", function() { return InputGroupWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchWrapper", function() { return InputSearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWrapper", function() { return TextAreaWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");




const InputWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputWrapper",
  componentId: "lmpumv-0"
})(["&.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;text-align:", ";font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{text-align:", ";color:", ";}&:-moz-placeholder{text-align:", ";color:", ";}&::-moz-placeholder{text-align:", ";color:", ";}&:-ms-input-placeholder{text-align:", ";color:", ";}}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputGroupWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputGroupWrapper",
  componentId: "lmpumv-1"
})(["&.ant-input-group{margin-bottom:10px;.ant-select-auto-complete{margin-right:", ";}.ant-input{&:first-child{border-radius:", ";}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),> .ant-input:not(:first-child):not(:last-child){padding:0 7px;border-left-width:", ";margin-right:", ";}.ant-input-group-addon{padding:4px 7px;font-size:12px;color:", ";text-align:center;background-color:", ";border:1px solid ", ";", ";&:first-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}&:last-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}.ant-select{.ant-select-selection{background-color:inherit;margin:-1px;border:1px solid transparent;", ";}}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child){border-left:0;border-right:0;}& > .ant-input:not(:first-child):not(:last-child){", ";}.ant-input:first-child:last-child{border-radius:4px;}&.ant-input-group-compact > *{border-right-width:", ";}&.ant-input-group-compact > .ant-select > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker .ant-input,&.ant-input-group-compact > .ant-select-auto-complete .ant-input,&.ant-input-group-compact > .ant-cascader-picker .ant-input,&.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker .ant-time-picker-input{border-right-width:", ";}&.ant-input-group-compact > *:first-child,&.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input{border-radius:", ";border-left-width:1px ", ";}&.ant-input-group-compact > *:last-child,&.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input{border-radius:", ";border-right-width:", ";}.ant-calendar-picker-clear,.ant-calendar-picker-icon{right:", ";left:", ";}}&.ant-input-group-lg{.ant-input,> .ant-input-group-addon{padding:6px 10px;height:35px;}}"], props => props['data-rtl'] === 'rtl' ? '-1px' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])(), ''
/* border-left: 0; */
, props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', ''
/* border-right-width: ${props =>
props['data-rtl'] === 'rtl' ? '1px' : '0'}; */
, props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? '0 ' : '1px', props => props['data-rtl'] === 'rtl' ? 'inherit' : '8px', props => props['data-rtl'] === 'rtl' ? '8px' : 'inherit');

const TextAreaWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__TextAreaWrapper",
  componentId: "lmpumv-2"
})(["&.ant-input{padding:4px 10px;width:100%;height:auto;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputSearchWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputSearchWrapper",
  componentId: "lmpumv-3"
})(["&.ant-input-affix-wrapper{.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.ant-input-suffix{right:", ";left:", ";}.ant-input-ant-input-prefix{right:", ";left:", ";}.ant-input-search-icon{color:", ";&:hover{color:", ";}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'inherit' : '7px', props => props['data-rtl'] === 'rtl' ? '7px' : 'inherit', props => props['data-rtl'] === 'rtl' ? '7px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '7px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));



/***/ }),

/***/ "../../node_modules/@iso/components/utility/intlMessages.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/utility/intlMessages.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\utility\\intlMessages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 32
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "../../node_modules/@iso/config/auth0.config.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/auth0.config.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  clientID: 'your_client_id',
  domain: 'your_domain_name',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      responseType: 'token id_token',
      redirect: true,
      redirectUrl: true ? 'http://localhost:3000/auth0loginCallback' : undefined
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo'
    },
    theme: {
      labeledSubmitButton: true,
      logo: 'your_logo_url',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000'
        }
      }
    }
  }
});

/***/ }),

/***/ "../../node_modules/@iso/config/firebase.config.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/firebase.config.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiKey: 'your_firebase_api_key',
  authDomain: 'your_firebase_auth_domain',
  databaseURL: 'your_firebase_database_url',
  projectId: 'your_firebase_project_id',
  storageBucket: 'your_firebase_storage_bucket',
  messagingSenderId: 'your_firebase_messaging_sender_id'
});

/***/ }),

/***/ "../../node_modules/@iso/config/jwt.config.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/jwt.config.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enabled: false,
  fetchUrl: 'http://your_domain_name/login',
  secretKey: 'secretKey'
});

/***/ }),

/***/ "../../node_modules/@iso/containers/FirebaseForm/FirebaseForm.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/FirebaseForm/FirebaseForm.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/components/uielements/button */ "../../node_modules/@iso/components/uielements/button.js");
/* harmony import */ var _iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var _iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/Feedback/Modal */ "../../node_modules/@iso/components/Feedback/Modal.js");
/* harmony import */ var _iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/Feedback/Notification */ "../../node_modules/@iso/components/Feedback/Notification.js");
/* harmony import */ var _iso_lib_firebase_firebase_authentication_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/lib/firebase/firebase.authentication.util */ "../../node_modules/@iso/lib/firebase/firebase.authentication.util.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\containers\\FirebaseForm\\FirebaseForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    visible: false,
    email: 'demo@gmail.com',
    password: 'demodemo',
    confirmLoading: false
  });

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [name]: value
    }));
  };

  const showModal = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      visible: true
    }));
  };

  const handleCancel = e => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      visible: false
    }));
  };

  const handleLogin = async () => {
    const {
      email,
      password
    } = state;

    if (!(email && password)) {
      Object(_iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__["default"])('error', 'Please fill in email. and password');
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      confirmLoading: true
    }));
    let user;
    let message;
    let data;

    if (props.signup) {
      try {
        await Object(_iso_lib_firebase_firebase_authentication_util__WEBPACK_IMPORTED_MODULE_5__["signUpWithEmailAndPassword"])(email, password).then(authUser => {
          user = authUser.user;
          console.log(user, 'User');
        });
      } catch (error) {
        message = error.message;
        console.log(error.message, 'Error');
      }
    } else {
      try {
        await Object(_iso_lib_firebase_firebase_authentication_util__WEBPACK_IMPORTED_MODULE_5__["signInWithEmail"])(email, password).then(authUser => {
          user = authUser.user;
        });
      } catch (error) {
        message = error.message;
        console.log(error.message, 'Error');
      }
    }

    if (user) {
      const token = await user.getIdToken();
      props.login(token);
      props.history.push('/dashboard');
    } else {
      Object(_iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__["default"])('error', message);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        confirmLoading: false
      }));
    }
  };

  const handleResetPassword = () => {
    const {
      email
    } = state;

    if (!email) {
      Object(_iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__["default"])('error', `Please fill in email.`);
      return;
    }

    Object(_iso_lib_firebase_firebase_authentication_util__WEBPACK_IMPORTED_MODULE_5__["resetPassword"])(email).then(() => Object(_iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__["default"])('success', `Password reset email sent to ${email}.`)).catch(error => Object(_iso_components_Feedback_Notification__WEBPACK_IMPORTED_MODULE_4__["default"])('error', 'Email address not found.'));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    onClick: showModal,
    className: "btnFirebase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, props.signup ? 'Sign up with Firebase' : 'Sign in with Firebase'), __jsx(_iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: props.signup ? 'Sign up with Firebase' : 'Sign in with Firebase',
    visible: state.visible,
    confirmLoading: state.confirmLoading,
    onCancel: handleCancel,
    onOk: handleLogin,
    className: "isoFirebaseLoginModal",
    cancelText: "Cancel",
    okText: props.signup ? 'Sign Up' : 'Login',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "isoInputWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Email"), __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "email",
    size: "large",
    placeholder: "Email",
    value: state.email,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "isoInputWrapper",
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Password"), __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "password",
    type: "password",
    size: "large",
    placeholder: "Password",
    value: state.password,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "isoResetPass",
    onClick: handleResetPassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Reset Password"))));
});

/***/ }),

/***/ "../../node_modules/@iso/lib/firebase/firebase.authentication.util.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/lib/firebase/firebase.authentication.util.js ***!
  \***************************************************************************************************************************/
/*! exports provided: getCurrentUser, googleProvider, facebookProvider, githubProvider, twitterProvider, signInWithGoogle, signInWithFacebook, signInWithGithub, signInWithTwitter, signInWithEmail, signUpWithEmailAndPassword, resetPassword, signOut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleProvider", function() { return googleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookProvider", function() { return facebookProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubProvider", function() { return githubProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterProvider", function() { return twitterProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithGoogle", function() { return signInWithGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithFacebook", function() { return signInWithFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithGithub", function() { return signInWithGithub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithTwitter", function() { return signInWithTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithEmail", function() { return signInWithEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpWithEmailAndPassword", function() { return signUpWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "../../node_modules/@iso/lib/firebase/firebase.js");

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
const googleProvider = new _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
const facebookProvider = new _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider();
const githubProvider = new _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GithubAuthProvider();
const twitterProvider = new _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth.TwitterAuthProvider();
const signInWithGoogle = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithPopup(googleProvider);
const signInWithFacebook = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithPopup(facebookProvider).then(function (result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken; // The signed-in user info.

  var user = result.user;
  console.log(`FB Token: ${token}`, `User: ${user}`); // ...
}).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message; // The email of the user's account used.

  var email = error.email; // The firebase.auth.AuthCredential type that was used.

  var credential = error.credential;
  console.error(error); // ...
});
const signInWithGithub = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithPopup(githubProvider);
const signInWithTwitter = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithPopup(twitterProvider);
const signInWithEmail = async (email, password) => await _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password);
const signUpWithEmailAndPassword = async (email, password) => await _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password);
const resetPassword = email => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].sendPasswordResetEmail(email);
const signOut = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut();
/* harmony default export */ __webpack_exports__["default"] = (_firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]); // async function signup(provider, info) {
//   if (!this.isValid) {
//     return;
//   }
//   try {
//     switch (provider) {
//       case this.EMAIL:
//         return await firebaseAuth().createUserWithEmailAndPassword(
//           info.email,
//           info.password
//         );
//       default:
//     }
//   } catch (error) {
//     return error;
//   }
// }

async function login(provider, info) {
  try {
    switch (provider) {
      case this.EMAIL:
        return await firebaseAuth().signInWithEmailAndPassword(info.email, info.password);

      case this.FACEBOOK:
        let fbAuthProvider = new firebaseAuth.FacebookAuthProvider();
        return await firebaseAuth().signInWithPopup(fbAuthProvider);

      case this.GOOGLE:
        let googleAuthProvider = new firebaseAuth.GoogleAuthProvider();
        return await firebaseAuth().signInWithPopup(googleAuthProvider);

      case this.GITHUB:
        let ghAuthProvider = new firebaseAuth.GithubAuthProvider();
        return await firebaseAuth().signInWithPopup(ghAuthProvider);

      case this.TWITTER:
        let twitterAuthProvider = new firebaseAuth.TwitterAuthProvider();
        return await firebaseAuth().signInWithPopup(twitterAuthProvider);

      default:
    }
  } catch (error) {
    return error;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/lib/firebase/firebase.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/lib/firebase/firebase.js ***!
  \*******************************************************************************************************/
/*! exports provided: firebaseApp, auth, db, rsf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseApp", function() { return firebaseApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsf", function() { return rsf; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga-firebase */ "redux-saga-firebase");
/* harmony import */ var redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_config_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/config/firebase.config */ "../../node_modules/@iso/config/firebase.config.js");





const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
};
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};
const config = false ? undefined : devConfig; // !firebase.apps.length ? firebase.initializeApp(isoConfig) : firebase.app();

const firebaseApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_iso_config_firebase_config__WEBPACK_IMPORTED_MODULE_4__["default"]) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const rsf = new redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3___default.a(firebaseApp);
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/rtl.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/lib/helpers/rtl.js ***!
  \*************************************************************************************************/
/*! exports provided: default, direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\lib\\helpers\\rtl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/style_utils.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/lib/helpers/style_utils.js ***!
  \*********************************************************************************************************/
/*! exports provided: transition, borderRadius, boxShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
// Transition
function transition(timing = 0.3) {
  return `
      -webkit-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
} // Border Radius

function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
} // Box Shadow

function boxShadow(shadow = 'none') {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}

/***/ }),

/***/ "../../node_modules/antd/lib/button/style/css.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/button/style/css.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/button/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/button/style/index.css":
/*!*********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/button/style/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/checkbox/style/css.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/checkbox/style/css.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/checkbox/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/checkbox/style/index.css":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/checkbox/style/index.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/input/style/css.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/input/style/css.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/input/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "../../node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "../../node_modules/antd/lib/input/style/index.css":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/input/style/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/modal/style/css.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/modal/style/css.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/modal/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "../../node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "../../node_modules/antd/lib/modal/style/index.css":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/modal/style/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/notification/style/css.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/notification/style/css.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/notification/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/notification/style/index.css":
/*!***************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/notification/style/index.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/style/index.css":
/*!**************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/style/index.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/client/link.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/client/router.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/client/with-router.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/mitt.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/router.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../../node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "../../node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "../../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "../../node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "../../node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "../../node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "../../node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "../../node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "../../node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "../../node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "../../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "../../node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "../../node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "../../node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "../../node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/lib/utils.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "../../node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!**************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/link.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./authentication/Auth0/index.js":
/*!***************************************!*\
  !*** ./authentication/Auth0/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-lock */ "auth0-lock");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_lock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/config/auth0.config */ "../../node_modules/@iso/config/auth0.config.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.utils */ "./authentication/auth.utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Auth0Helper {
  constructor() {
    _defineProperty(this, "isValid", _iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__["default"].clientID && _iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__["default"].domain);

    _defineProperty(this, "lock", null);

    this.login = this.login.bind(this);
  }

  login(handleLogin) {
    this.lock = this.isValid ? new auth0_lock__WEBPACK_IMPORTED_MODULE_0___default.a(_iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__["default"].clientID, _iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__["default"].domain, _iso_config_auth0_config__WEBPACK_IMPORTED_MODULE_1__["default"].options) : null;
    this.lock.on('authenticated', authResult => {
      if (authResult && authResult.accessToken) {
        Object(_auth_utils__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('access_token', authResult.accessToken);
        handleLogin();
        return;
      }
    });
    this.lock.show();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Auth0Helper());

/***/ }),

/***/ "./authentication/actions.js":
/*!***********************************!*\
  !*** ./authentication/actions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',
  login: credentials => ({
    type: actions.LOGIN_REQUEST_START,
    payload: credentials
  }),
  jwtLogin: (history, userInfo) => ({
    type: actions.JWT_LOGIN_REQUEST_START,
    payload: {
      history,
      userInfo
    }
  }),
  loginRequestSuccess: credentials => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: credentials
  }),
  loginRequestFailure: error => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: error
  }),
  logout: () => ({
    type: actions.LOGOUT_REQUEST_START
  }),
  logoutRequestSuccess: () => ({
    type: actions.LOGOUT_REQUEST_SUCCESS
  }),
  logoutRequestFailure: error => ({
    type: actions.LOGOUT_REQUEST_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./authentication/auth.utils.js":
/*!**************************************!*\
  !*** ./authentication/auth.utils.js ***!
  \**************************************/
/*! exports provided: setCookie, removeCookie, getCookie, login, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\authentication\\auth.utils.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

const login = ({
  token
}) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/dashboard');
};
const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/signin'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signin');
  }

  return token;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signin');
};
const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signin');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 12
      }
    }));
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return _objectSpread(_objectSpread({}, componentProps), {}, {
      token
    });
  };

  return Wrapper;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var _iso_components_uielements_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/components/uielements/checkbox */ "../../node_modules/@iso/components/uielements/checkbox.js");
/* harmony import */ var _iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/uielements/button */ "../../node_modules/@iso/components/uielements/button.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/config/jwt.config */ "../../node_modules/@iso/config/jwt.config.js");
/* harmony import */ var _iso_containers_FirebaseForm_FirebaseForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/containers/FirebaseForm/FirebaseForm */ "../../node_modules/@iso/containers/FirebaseForm/FirebaseForm.js");
/* harmony import */ var _authentication_Auth0__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../authentication/Auth0 */ "./authentication/Auth0/index.js");
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../authentication/actions */ "./authentication/actions.js");
/* harmony import */ var _styled_SignIn_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styled/SignIn.styles */ "./styled/SignIn.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const {
  login
} = _authentication_actions__WEBPACK_IMPORTED_MODULE_11__["default"];
function SignInPage(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(true));
  };

  const handleJWTLogin = () => {
    const {
      jwtLogin,
      history
    } = props;
    const userInfo = {
      username:  false || '',
      password:  false || ''
    }; // jwtLogin(history, userInfo);
  };

  return __jsx(_styled_SignIn_styles__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "isoSignInPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoLoginContentWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "isoLoginContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "isoLogoWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "isoSignInForm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "isoInputWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "inputUserName",
    size: "large",
    placeholder: "Username",
    defaultValue: "demo@gmail.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "isoInputWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "inpuPassword",
    size: "large",
    type: "password",
    placeholder: "Password",
    defaultValue: "demodemo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "isoInputWrapper isoLeftRightComponent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_iso_components_uielements_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInRememberMe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "primary",
    onClick: _iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_8__["default"].enabled ? handleJWTLogin : handleLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }))), __jsx("p", {
    className: "isoHelperText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInPreview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "isoInputWrapper isoOtherLogin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleLogin,
    type: "primary",
    className: "btnFacebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInFacebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })), __jsx(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleLogin,
    type: "primary",
    className: "btnGooglePlus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInGooglePlus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), __jsx(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => _authentication_Auth0__WEBPACK_IMPORTED_MODULE_10__["default"].login(handleLogin),
    type: "primary",
    className: "btnAuthZero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInAuth0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  })), __jsx(_iso_containers_FirebaseForm_FirebaseForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    history: router,
    login: token => dispatch(login(token)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "isoCenterComponent isoHelperWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forgotpassword",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "isoForgotPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInForgotPass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "page.signInCreateAccount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }))))))));
}

/***/ }),

/***/ "./styled/SignIn.styles.js":
/*!*********************************!*\
  !*** ./styled/SignIn.styles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");
/* harmony import */ var _iso_assets_images_sign_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/sign.jpg */ "../../node_modules/@iso/assets/images/sign.jpg");
/* harmony import */ var _iso_assets_images_sign_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_sign_jpg__WEBPACK_IMPORTED_MODULE_3__);




const SignInStyleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInstyles__SignInStyleWrapper",
  componentId: "sc-1p7uu8i-0"
})(["width:100%;min-height:100vh;height:100vh;display:flex;justify-content:flex-end;align-items:center;position:relative;background:url(", ") no-repeat center center;background-size:cover;&:before{content:'';width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.6);position:absolute;z-index:1;top:0;left:", ";right:", ";}.isoCenterComponent{text-align:center;}.isoLoginContentWrapper{width:500px;height:100%;overflow-y:auto;z-index:10;position:relative;}.isoLoginContent{min-height:100%;display:flex;flex-direction:column;padding:70px 50px;position:relative;background-color:#ffffff;@media only screen and (max-width:767px){width:100%;padding:70px 20px;}.isoLogoWrapper{width:100%;display:flex;margin-bottom:50px;justify-content:center;flex-shrink:0;a,span{font-size:24px;font-weight:300;line-height:1;text-transform:uppercase;color:", ";}}.isoSignInForm{width:100%;display:flex;flex-shrink:0;flex-direction:column;.isoInputWrapper{margin-bottom:15px;&:last-of-type{margin-bottom:0;}input{&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}&.isoLeftRightComponent{display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;}}.isoHelperText{font-size:12px;font-weight:400;line-height:1.2;color:", ";padding-left:", ";padding-right:", ";margin:15px 0;position:relative;display:flex;align-items:center;&:before{content:'*';color:", ";padding-right:3px;font-size:14px;line-height:1;position:absolute;top:2px;left:", ";right:", ";}}.isoHelperWrapper{margin-top:35px;flex-direction:column;}.isoOtherLogin{padding-top:40px;margin-top:35px;border-top:1px dashed ", ";> a{display:flex;margin-bottom:10px;&:last-child{margin-bottom:0;}}button{width:100%;height:42px;border:0;font-weight:500;&.btnFacebook{background-color:#3b5998;&:hover{background-color:darken(#3b5998,5%);}}&.btnGooglePlus{background-color:#dd4b39;margin-top:15px;&:hover{background-color:darken(#dd4b39,5%);}}&.btnAuthZero{background-color:#e14615;margin-top:15px;&:hover{background-color:darken(#e14615,5%);}}&.btnFirebase{background-color:", ";margin-top:15px;&:hover{background-color:", ";}}}}.isoForgotPass{font-size:12px;color:", ";margin-bottom:10px;text-decoration:none;&:hover{color:", ";}}button{font-weight:500;}}}"], _iso_assets_images_sign_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), props => props['data-rtl'] === 'rtl' ? 'inherit' : '13px', props => props['data-rtl'] === 'rtl' ? '13px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 6), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(SignInStyleWrapper));

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/notification":
/*!****************************************!*\
  !*** external "antd/lib/notification" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "auth0-lock":
/*!*****************************!*\
  !*** external "auth0-lock" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth0-lock");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-saga-firebase":
/*!**************************************!*\
  !*** external "redux-saga-firebase" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga-firebase");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-theme":
/*!*******************************!*\
  !*** external "styled-theme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9zaWduLmpwZyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL0ZlZWRiYWNrL01vZGFsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvRmVlZGJhY2svTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvc3R5bGVzL2J1dHRvbi5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvc3R5bGVzL2NoZWNrYm94LnN0eWxlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9zdHlsZXMvaW5wdXQuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91dGlsaXR5L2ludGxNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvYXV0aDAuY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbmZpZy9maXJlYmFzZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29uZmlnL2p3dC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9GaXJlYmFzZUZvcm0vRmlyZWJhc2VGb3JtLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2xpYi9maXJlYmFzZS9maXJlYmFzZS5hdXRoZW50aWNhdGlvbi51dGlsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2xpYi9maXJlYmFzZS9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9saWIvaGVscGVycy9ydGwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL2NoZWNrYm94L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL25vdGlmaWNhdGlvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2F1dGhlbnRpY2F0aW9uL0F1dGgwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2F1dGhlbnRpY2F0aW9uL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXV0aGVudGljYXRpb24vYXV0aC51dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZWQvU2lnbkluLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jaGVja2JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9ub3RpZmljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoMC1sb2NrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EtZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC10aGVtZVwiIl0sIm5hbWVzIjpbIkFudEJ1dHRvbiIsIkJ1dHRvbnMiLCJpc29CdXR0b24iLCJXaXRoRGlyZWN0aW9uIiwiQW50QnV0dG9uR3JvdXAiLCJCdXR0b25zR3JvdXAiLCJHcm91cCIsIkJ1dHRvbkdyb3VwIiwiY2hlY2tib3giLCJBbnRDaGVja2JveCIsIkNoZWNrYm94R3JvdXAiLCJTZWFyY2giLCJUZXh0QXJlYSIsIldEU3R5bGVkSW5wdXQiLCJJbnB1dFdyYXBwZXIiLCJTdHlsZWRJbnB1dCIsIldESW5wdXRHcm91cCIsIklucHV0R3JvdXBXcmFwcGVyIiwiSW5wdXRHcm91cCIsIldESW5wdXRTZWFyY2giLCJJbnB1dFNlYXJjaFdyYXBwZXIiLCJJbnB1dFNlYXJjaCIsIldEVGV4dGFyZWEiLCJUZXh0QXJlYVdyYXBwZXIiLCJUZXh0YXJlYSIsIkNvbXBvbmVudE5hbWUiLCJzdHlsZWQiLCJwYWxldHRlIiwidHJhbnNpdGlvbiIsInByb3BzIiwiUmFkaW9CdXR0b25zIiwiR2hvc3RCdXR0b25zIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiSW5qZWN0TWFzc2FnZSIsImluamVjdEludGwiLCJ3aXRoUmVmIiwiY2xpZW50SUQiLCJkb21haW4iLCJhbGxvd2VkQ29ubmVjdGlvbnMiLCJyZW1lbWJlckxhc3RMb2dpbiIsImxhbmd1YWdlIiwiY2xvc2FibGUiLCJvcHRpb25zIiwiYXV0aCIsImF1dG9QYXJzZUhhc2giLCJyZXNwb25zZVR5cGUiLCJyZWRpcmVjdCIsInJlZGlyZWN0VXJsIiwibGFuZ3VhZ2VEaWN0aW9uYXJ5IiwidGl0bGUiLCJlbWFpbElucHV0UGxhY2Vob2xkZXIiLCJwYXNzd29yZElucHV0UGxhY2Vob2xkZXIiLCJ0aGVtZSIsImxhYmVsZWRTdWJtaXRCdXR0b24iLCJsb2dvIiwicHJpbWFyeUNvbG9yIiwiYXV0aEJ1dHRvbnMiLCJjb25uZWN0aW9uTmFtZSIsImRpc3BsYXlOYW1lIiwiZm9yZWdyb3VuZENvbG9yIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiZW5hYmxlZCIsImZldGNoVXJsIiwic2VjcmV0S2V5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1Mb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInNob3dNb2RhbCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUxvZ2luIiwibm90aWZpY2F0aW9uIiwidXNlciIsIm1lc3NhZ2UiLCJkYXRhIiwic2lnbnVwIiwic2lnblVwV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiYXV0aFVzZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzaWduSW5XaXRoRW1haWwiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJsb2dpbiIsImhpc3RvcnkiLCJwdXNoIiwiaGFuZGxlUmVzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJjYXRjaCIsIm1hcmdpbkJvdHRvbSIsImdldEN1cnJlbnRVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXJBdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJmaXJlYmFzZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJmYWNlYm9va1Byb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJnaXRodWJQcm92aWRlciIsIkdpdGh1YkF1dGhQcm92aWRlciIsInR3aXR0ZXJQcm92aWRlciIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aEZhY2Vib29rIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsInNpZ25JbldpdGhHaXRodWIiLCJzaWduSW5XaXRoVHdpdHRlciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNpZ25PdXQiLCJwcm92aWRlciIsImluZm8iLCJFTUFJTCIsImZpcmViYXNlQXV0aCIsIkZBQ0VCT09LIiwiZmJBdXRoUHJvdmlkZXIiLCJHT09HTEUiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJHSVRIVUIiLCJnaEF1dGhQcm92aWRlciIsIlRXSVRURVIiLCJ0d2l0dGVyQXV0aFByb3ZpZGVyIiwicHJvZENvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfUFJPRF9BUElfS0VZIiwiUkVBQ1RfQVBQX1BST0RfQVVUSF9ET01BSU4iLCJSRUFDVF9BUFBfUFJPRF9EQVRBQkFTRV9VUkwiLCJSRUFDVF9BUFBfUFJPRF9QUk9KRUNUX0lEIiwiUkVBQ1RfQVBQX1BST0RfU1RPUkFHRV9CVUNLRVQiLCJSRUFDVF9BUFBfUFJPRF9NRVNTQUdJTkdfU0VOREVSX0lEIiwiZGV2Q29uZmlnIiwiUkVBQ1RfQVBQX0RFVl9BUElfS0VZIiwiUkVBQ1RfQVBQX0RFVl9BVVRIX0RPTUFJTiIsIlJFQUNUX0FQUF9ERVZfREFUQUJBU0VfVVJMIiwiUkVBQ1RfQVBQX0RFVl9QUk9KRUNUX0lEIiwiUkVBQ1RfQVBQX0RFVl9TVE9SQUdFX0JVQ0tFVCIsIlJFQUNUX0FQUF9ERVZfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImNvbmZpZyIsImZpcmViYXNlQXBwIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJpc29Db25maWciLCJhcHAiLCJkYiIsImZpcmVzdG9yZSIsInJzZiIsIlJlZHV4U2FnYUZpcmViYXNlIiwiZGlyZWN0aW9uIiwid2l0aERpcmVjdGlvbiIsIkNvbXBvbmVudCIsInRpbWluZyIsInJhZGl1cyIsInNoYWRvdyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkF1dGgwSGVscGVyIiwiQXV0aDBDb25maWciLCJiaW5kIiwibG9jayIsImlzVmFsaWQiLCJBdXRoMExvY2siLCJhdXRoUmVzdWx0Iiwic2V0Q29va2llIiwic2hvdyIsImFjdGlvbnMiLCJMT0dJTl9SRVFVRVNUX1NUQVJUIiwiSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQiLCJMT0dJTl9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dJTl9SRVFVRVNUX0ZBSUxVUkUiLCJMT0dPVVRfUkVRVUVTVF9TVEFSVCIsIkxPR09VVF9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dPVVRfUkVRVUVTVF9GQUlMVVJFIiwidHlwZSIsInBheWxvYWQiLCJqd3RMb2dpbiIsInVzZXJJbmZvIiwibG9naW5SZXF1ZXN0U3VjY2VzcyIsImxvZ2luUmVxdWVzdEZhaWx1cmUiLCJsb2dvdXQiLCJsb2dvdXRSZXF1ZXN0U3VjY2VzcyIsImxvZ291dFJlcXVlc3RGYWlsdXJlIiwicmVtb3ZlQ29va2llIiwiZ2V0Q29va2llIiwicmVxIiwiZ2V0Q29va2llRnJvbUJyb3dzZXIiLCJnZXRDb29raWVGcm9tU2VydmVyIiwiY29va2llIiwiaGVhZGVycyIsInVuZGVmaW5lZCIsInJhd0Nvb2tpZSIsInNwbGl0IiwiZmluZCIsImMiLCJ0cmltIiwic3RhcnRzV2l0aCIsImV4cGlyZXMiLCJuZXh0Q29va2llIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZW1vdmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIldyYXBwZWRDb21wb25lbnQiLCJXcmFwcGVyIiwic3luY0xvZ291dCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImNvbXBvbmVudFByb3BzIiwiYXV0aEFjdGlvbnMiLCJTaWduSW5QYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVJvdXRlciIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlSldUTG9naW4iLCJ1c2VybmFtZSIsImp3dENvbmZpZyIsIkF1dGgwIiwiU2lnbkluU3R5bGVXcmFwcGVyIiwiZGl2IiwiYmdJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRWUsc0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSw2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RmO0FBQ0E7QUFDQSxNQUFNQSxT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QUFLLElBQUtBLEtBQUssQ0FBQyxVQUFELENBQUwsS0FBc0IsS0FBdEIsR0FBOEIsR0FBOUIsR0FBb0MsU0E3SHpDLEVBeUlTRiw0REFBTyxDQUFDLFdBQUQsRUFBYyxDQUFkLENBekloQixFQXFMUUEsNERBQU8sQ0FBQyxPQUFELEVBQVUsQ0FBVixDQXJMZixFQXlMVUEsNERBQU8sQ0FBQyxPQUFELEVBQVUsQ0FBVixDQXpMakIsRUFpTVBBLDREQUFPLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FqTUEsRUFzTUxBLDREQUFPLENBQUMsU0FBRCxFQUFZLENBQVosQ0F0TUYsQ0FBeEI7QUFpTmV4QixtSUFBYSxDQUFDMmhCLGtCQUFELENBQTVCLEU7Ozs7Ozs7Ozs7O0FDdk5BLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaWduLWFkZjU4NDZiMTcxMWZhODAwMGNmZDRjNmM2NWE0MTFkLmpwZ1wiOyIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvbjtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnV0dG9ucywgQnV0dG9uc0dyb3VwIH0gZnJvbSAnLi9zdHlsZXMvYnV0dG9uLnN0eWxlJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcbmNvbnN0IEFudEJ1dHRvbiA9IEJ1dHRvbnMoQnV0dG9uKTtcbmNvbnN0IGlzb0J1dHRvbiA9IFdpdGhEaXJlY3Rpb24oQW50QnV0dG9uKTtcbmNvbnN0IEFudEJ1dHRvbkdyb3VwID0gQnV0dG9uc0dyb3VwKEJ1dHRvbi5Hcm91cCk7XG5jb25zdCBCdXR0b25Hcm91cCA9IFdpdGhEaXJlY3Rpb24oQW50QnV0dG9uR3JvdXApO1xuXG5leHBvcnQgZGVmYXVsdCBpc29CdXR0b247XG5leHBvcnQgeyBCdXR0b25Hcm91cCB9O1xuIiwiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcbmltcG9ydCBBbnRDaGVja2JveCBmcm9tICcuL3N0eWxlcy9jaGVja2JveC5zdHlsZSc7XG5cbmNvbnN0IGNoZWNrYm94ID0gQW50Q2hlY2tib3goQ2hlY2tib3gpO1xuY29uc3QgQ2hlY2tib3hHcm91cCA9IENoZWNrYm94Lkdyb3VwO1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja2JveDtcbmV4cG9ydCB7IENoZWNrYm94R3JvdXAgfTtcbiIsImltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICBJbnB1dFdyYXBwZXIsXG4gIElucHV0R3JvdXBXcmFwcGVyLFxuICBJbnB1dFNlYXJjaFdyYXBwZXIsXG4gIFRleHRBcmVhV3JhcHBlcixcbn0gZnJvbSAnLi9zdHlsZXMvaW5wdXQuc3R5bGUnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnQGlzby9saWIvaGVscGVycy9ydGwnO1xuY29uc3QgeyBTZWFyY2gsIFRleHRBcmVhLCBHcm91cCB9ID0gSW5wdXQ7XG5cbmNvbnN0IFdEU3R5bGVkSW5wdXQgPSBJbnB1dFdyYXBwZXIoSW5wdXQpO1xuY29uc3QgU3R5bGVkSW5wdXQgPSBXaXRoRGlyZWN0aW9uKFdEU3R5bGVkSW5wdXQpO1xuXG5jb25zdCBXRElucHV0R3JvdXAgPSBJbnB1dEdyb3VwV3JhcHBlcihHcm91cCk7XG5jb25zdCBJbnB1dEdyb3VwID0gV2l0aERpcmVjdGlvbihXRElucHV0R3JvdXApO1xuXG5jb25zdCBXRElucHV0U2VhcmNoID0gSW5wdXRTZWFyY2hXcmFwcGVyKFNlYXJjaCk7XG5jb25zdCBJbnB1dFNlYXJjaCA9IFdpdGhEaXJlY3Rpb24oV0RJbnB1dFNlYXJjaCk7XG5cbmNvbnN0IFdEVGV4dGFyZWEgPSBUZXh0QXJlYVdyYXBwZXIoVGV4dEFyZWEpO1xuY29uc3QgVGV4dGFyZWEgPSBXaXRoRGlyZWN0aW9uKFdEVGV4dGFyZWEpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRJbnB1dDtcbmV4cG9ydCB7IElucHV0U2VhcmNoLCBJbnB1dEdyb3VwLCBUZXh0YXJlYSB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcblxuY29uc3QgQnV0dG9ucyA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG5cbiAgICA+IC5hbnRpY29uICsgc3BhbixcbiAgICA+IHNwYW4gKyAuYW50aWNvbiB7XG4gICAgICBtYXJnaW46ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMC41ZW0gMCAwJyA6ICcwIDAgMCAwLjVlbSd9O1xuICAgIH1cblxuICAgIC5hbnRpY29uLXJpZ2h0IHtcbiAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwKSd9O1xuICAgIH1cblxuICAgIC5hbnRpY29uLWxlZnQge1xuICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAncm90YXRlKDApJ307XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLXByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAxMCl9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDEwKX07XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi1zbSB7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICYuYW50LWJ0bi1sb2FkaW5nOm5vdCguYW50LWJ0bi1jaXJjbGUpOm5vdCguYW50LWJ0bi1jaXJjbGUtb3V0bGluZSkge1xuICAgICAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMjRweCAwIDE1cHgnIDogJzAgMTVweCAwIDI0cHgnfTtcbiAgICAgICAgLmFudGljb24ge1xuICAgICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgLTE3cHggMCAwJyA6ICcwIDAgMCAtMTdweCd9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLWxnIHtcbiAgICAgIHBhZGRpbmc6IDAgMzVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICB9XG5cbiAgICAmLmFudC1idG4tcHJpbWFyeSB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAmLmFudC1idG4tZGFzaGVkIHtcbiAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2JvcmRlcicsIDEpfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi1kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDApfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDApfTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDIpfTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2Vycm9yJywgMil9O1xuICAgICAgfVxuXG4gICAgICAmLmFudC1idG4tYmFja2dyb3VuZC1naG9zdCB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2Vycm9yJywgMCl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2Vycm9yJywgMCl9O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2Vycm9yJywgMil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDIpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi1jaXJjbGUsXG4gICAgJi5hbnQtYnRuLWNpcmNsZS1vdXRsaW5lIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgJi5hbnQtYnRuLXNtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAmLmFudC1idG4tbGcge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLmRpc2FibGVkLFxuICAgICYuYW50LWJ0bltkaXNhYmxlZF0sXG4gICAgJi5hbnQtYnRuLmRpc2FibGVkOmhvdmVyLFxuICAgICYuYW50LWJ0bltkaXNhYmxlZF06aG92ZXIsXG4gICAgJi5hbnQtYnRuLmRpc2FibGVkOmZvY3VzLFxuICAgICYuYW50LWJ0bltkaXNhYmxlZF06Zm9jdXMsXG4gICAgJi5hbnQtYnRuLmRpc2FibGVkOmFjdGl2ZSxcbiAgICAmLmFudC1idG5bZGlzYWJsZWRdOmFjdGl2ZSxcbiAgICAmLmFudC1idG4uZGlzYWJsZWQuYWN0aXZlLFxuICAgICYuYW50LWJ0bltkaXNhYmxlZF0uYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDIpfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICAmLmFudC1idG4tbG9hZGluZzpub3QoLmFudC1idG4tY2lyY2xlKTpub3QoLmFudC1idG4tY2lyY2xlLW91dGxpbmUpXG4gICAgICAuYW50aWNvbiB7XG4gICAgICBtYXJnaW46ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgLTE0cHggMCAwJyA6ICcwIDAgMCAtMTRweCd9O1xuICAgIH1cblxuICAgICYuaXNvQnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAyKX07XG4gICAgICB9XG5cbiAgICAgICYuaXNvQnRuU20ge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAmLmlzb0J0bkxnIHtcbiAgICAgICAgcGFkZGluZzogMCAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICArIC5hbnQtYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PlxuICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJy0xcHgnfSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PlxuICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0xcHgnIDogJzAnfSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBSYWRpb0J1dHRvbnMgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgLmFudC1yYWRpby1idXR0b24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAmOmhvdmVyLFxuICAgICYuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWZvY3VzZWQge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG5cbiAgICAmLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICBib3gtc2hhZG93OiAtMXB4IDAgMCAwICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbnNHcm91cCA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1idG4tZ3JvdXAge1xuICAgIC5hbnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgnYm9yZGVyJywgMSl9O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICB9XG5cbiAgICAgICYuYW50LWJ0bi1kYXNoZWQge1xuICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmFudC1idG4tcHJpbWFyeSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMTApfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgID4gLmFudC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDRweCA0cHggMCcgOiAnNHB4IDAgMCA0cHgnfTtcbiAgICB9XG5cbiAgICA+IC5hbnQtYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNHB4IDAgMCA0cHgnIDogJzAgNHB4IDRweCAwJ307XG4gICAgfVxuXG4gICAgLmFudC1idG4tcHJpbWFyeTpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLFxuICAgIC5hbnQtYnRuLXByaW1hcnkgKyAuYW50LWJ0bi1wcmltYXJ5IHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJ1xuICAgICAgICAgID8gcGFsZXR0ZSgncHJpbWFyeScsIDApXG4gICAgICAgICAgOiBwYWxldHRlKCdwcmltYXJ5JywgMil9O1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJ1xuICAgICAgICAgID8gcGFsZXR0ZSgncHJpbWFyeScsIDIpXG4gICAgICAgICAgOiBwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cblxuICAgIC5hbnQtYnRuLXByaW1hcnk6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCdcbiAgICAgICAgICA/IHBhbGV0dGUoJ3ByaW1hcnknLCAyKVxuICAgICAgICAgIDogcGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCdcbiAgICAgICAgICA/IHBhbGV0dGUoJ3ByaW1hcnknLCAwKVxuICAgICAgICAgIDogcGFsZXR0ZSgncHJpbWFyeScsIDIpfTtcbiAgICB9XG5cbiAgICAuYW50LWJ0biArIC5hbnQtYnRuLFxuICAgICsgLmFudC1idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJy0xcHgnfSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJ30gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmFudC1idG4tZ3JvdXAtbGcge1xuICAgICAgPiAuYW50LWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLWdyb3VwLXNtIHtcbiAgICAgID4gLmFudC1idG4ge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYW50LWJ0bi1ncm91cCArICYuYW50LWJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICctMXB4J30gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJ30gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgR2hvc3RCdXR0b25zID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gIC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJi5hbnQtYnRuLXByaW1hcnkge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBCdXR0b25zLCBCdXR0b25zR3JvdXAsIFJhZGlvQnV0dG9ucywgR2hvc3RCdXR0b25zIH07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuXG5jb25zdCBBbnRDaGVja2JveCA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgLmFudC1jaGVja2JveCB7XG4gICAgICB0b3A6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBbnRDaGVja2JveDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQge1xuICB0cmFuc2l0aW9uLFxuICBib3JkZXJSYWRpdXMsXG4gIGJveFNoYWRvdyxcbn0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5cbmNvbnN0IElucHV0V3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dCB7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnKX07XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgJHtib3JkZXJSYWRpdXMoJzRweCcpfTtcbiAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWxnIHtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LXNtIHtcbiAgICAgIHBhZGRpbmc6IDFweCAxMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cblxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnKX07XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnKX07XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBJbnB1dEdyb3VwV3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTFweCcgOiAnMCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0IHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgNHB4IDRweCAwJyA6ICc0cHggMCAwIDRweCd9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAuYW50LWlucHV0LWdyb3VwLXdyYXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbiAgICA+IC5hbnQtaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBwYWRkaW5nOiAwIDdweDtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICcxcHgnfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0xcHgnIDogJzAnKX07XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNCl9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJzFweCd9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgNHB4IDRweCAwJyA6ICc0cHggMCAwIDRweCd9O1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMXB4J307XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCcgOiAnMCd9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzRweCAwIDAgNHB4JyA6ICcwIDRweCA0cHggMCd9O1xuICAgICAgfVxuXG4gICAgICAuYW50LXNlbGVjdCB7XG4gICAgICAgIC5hbnQtc2VsZWN0LXNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgJHtib3hTaGFkb3coKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LWlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgLmFudC1pbnB1dC1ncm91cC13cmFwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJiA+IC5hbnQtaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAkeycnIC8qIGJvcmRlci1sZWZ0OiAwOyAqL307XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dDpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gKiB7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCAnIDogJzAnfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3QgPiAuYW50LXNlbGVjdC1zZWxlY3Rpb24sXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FsZW5kYXItcGlja2VyIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYXNjYWRlci1waWNrZXIgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1tZW50aW9uLXdyYXBwZXIgLmFudC1tZW50aW9uLWVkaXRvcixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC10aW1lLXBpY2tlciAuYW50LXRpbWUtcGlja2VyLWlucHV0IHtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4ICcgOiAnMCd9O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAqOmZpcnN0LWNoaWxkLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdDpmaXJzdC1jaGlsZCA+IC5hbnQtc2VsZWN0LXNlbGVjdGlvbixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYWxlbmRhci1waWNrZXI6Zmlyc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGU6Zmlyc3QtY2hpbGRcbiAgICAgIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FzY2FkZXItcGlja2VyOmZpcnN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LW1lbnRpb24td3JhcHBlcjpmaXJzdC1jaGlsZFxuICAgICAgLmFudC1tZW50aW9uLWVkaXRvcixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtdGltZS1waWNrZXI6Zmlyc3QtY2hpbGRcbiAgICAgIC5hbnQtdGltZS1waWNrZXItaW5wdXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA0cHggNHB4IDAnIDogJzRweCAwIDAgNHB4J307XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4XG4gICAgICAgICR7JycgLyogYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHgnIDogJzAnfTsgKi99O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAqOmxhc3QtY2hpbGQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0Omxhc3QtY2hpbGQgPiAuYW50LXNlbGVjdC1zZWxlY3Rpb24sXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FsZW5kYXItcGlja2VyOmxhc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZTpsYXN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FzY2FkZXItcGlja2VyOmxhc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtbWVudGlvbi13cmFwcGVyOmxhc3QtY2hpbGRcbiAgICAgIC5hbnQtbWVudGlvbi1lZGl0b3IsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LXRpbWUtcGlja2VyOmxhc3QtY2hpbGRcbiAgICAgIC5hbnQtdGltZS1waWNrZXItaW5wdXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNHB4IDAgMCA0cHgnIDogJzAgNHB4IDRweCAwJ307XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgJyA6ICcxcHgnfTtcbiAgICB9XG5cbiAgICAuYW50LWNhbGVuZGFyLXBpY2tlci1jbGVhcixcbiAgICAuYW50LWNhbGVuZGFyLXBpY2tlci1pY29uIHtcbiAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnOHB4Jyl9O1xuICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzhweCcgOiAnaW5oZXJpdCcpfTtcbiAgICB9XG4gIH1cblxuICAmLmFudC1pbnB1dC1ncm91cC1sZyB7XG4gICAgLmFudC1pbnB1dCxcbiAgICA+IC5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUZXh0QXJlYVdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgJHtib3JkZXJSYWRpdXMoJzRweCcpfTtcbiAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cblxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0U2VhcmNoV3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcbiAgICAuYW50LWlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgICAke2JvcmRlclJhZGl1cygnNHB4Jyl9O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICB9XG5cbiAgICAgICYuYW50LWlucHV0LWxnIHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIH1cblxuICAgICAgJi5hbnQtaW5wdXQtc20ge1xuICAgICAgICBwYWRkaW5nOiAxcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuXG4gICAgICAmOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICB9XG5cbiAgICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICB9XG4gICAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LWlucHV0LXN1ZmZpeCB7XG4gICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzdweCcpfTtcbiAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc3cHgnIDogJ2luaGVyaXQnKX07XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1hbnQtaW5wdXQtcHJlZml4IHtcbiAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnN3B4JyA6ICdpbmhlcml0Jyl9O1xuICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzdweCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LXNlYXJjaC1pY29uIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBJbnB1dFdyYXBwZXIsIElucHV0R3JvdXBXcmFwcGVyLCBJbnB1dFNlYXJjaFdyYXBwZXIsIFRleHRBcmVhV3JhcHBlciB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgSW5qZWN0TWFzc2FnZSA9IHByb3BzID0+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5wcm9wc30gLz47XG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEluamVjdE1hc3NhZ2UsIHtcbiAgd2l0aFJlZjogZmFsc2UsXG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2xpZW50SUQ6ICd5b3VyX2NsaWVudF9pZCcsXG4gIGRvbWFpbjogJ3lvdXJfZG9tYWluX25hbWUnLFxuICBhbGxvd2VkQ29ubmVjdGlvbnM6IFsnVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24nXSxcbiAgcmVtZW1iZXJMYXN0TG9naW46IHRydWUsXG4gIGxhbmd1YWdlOiAnZW4nLFxuICBjbG9zYWJsZTogdHJ1ZSxcbiAgb3B0aW9uczoge1xuICAgIGF1dGg6IHtcbiAgICAgIGF1dG9QYXJzZUhhc2g6IHRydWUsXG4gICAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG4gICAgICByZWRpcmVjdDogdHJ1ZSxcbiAgICAgIHJlZGlyZWN0VXJsOlxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgICAgPyAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgwbG9naW5DYWxsYmFjaydcbiAgICAgICAgICA6ICdodHRwczovL3lvdXJfZG9tYWluX25hbWUvYXV0aDBsb2dpbkNhbGxiYWNrJyxcbiAgICB9LFxuICAgIGxhbmd1YWdlRGljdGlvbmFyeToge1xuICAgICAgdGl0bGU6ICdJc29tb3JwaGljJyxcbiAgICAgIGVtYWlsSW5wdXRQbGFjZWhvbGRlcjogJ2RlbW9AZ21haWwuY29tJyxcbiAgICAgIHBhc3N3b3JkSW5wdXRQbGFjZWhvbGRlcjogJ2RlbW9kZW1vJyxcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICBsYWJlbGVkU3VibWl0QnV0dG9uOiB0cnVlLFxuICAgICAgbG9nbzogJ3lvdXJfbG9nb191cmwnLFxuICAgICAgcHJpbWFyeUNvbG9yOiAnI0UxNDYxNScsXG4gICAgICBhdXRoQnV0dG9uczoge1xuICAgICAgICBjb25uZWN0aW9uTmFtZToge1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnTG9nIEluJyxcbiAgICAgICAgICBwcmltYXJ5Q29sb3I6ICcjYjdiN2I3JyxcbiAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogJ3lvdXJfZmlyZWJhc2VfYXBpX2tleScsXG4gIGF1dGhEb21haW46ICd5b3VyX2ZpcmViYXNlX2F1dGhfZG9tYWluJyxcbiAgZGF0YWJhc2VVUkw6ICd5b3VyX2ZpcmViYXNlX2RhdGFiYXNlX3VybCcsXG4gIHByb2plY3RJZDogJ3lvdXJfZmlyZWJhc2VfcHJvamVjdF9pZCcsXG4gIHN0b3JhZ2VCdWNrZXQ6ICd5b3VyX2ZpcmViYXNlX3N0b3JhZ2VfYnVja2V0JyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICd5b3VyX2ZpcmViYXNlX21lc3NhZ2luZ19zZW5kZXJfaWQnLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW5hYmxlZDogZmFsc2UsXG4gIGZldGNoVXJsOiAnaHR0cDovL3lvdXJfZG9tYWluX25hbWUvbG9naW4nLFxuICBzZWNyZXRLZXk6ICdzZWNyZXRLZXknLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvaW5wdXQnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0Bpc28vY29tcG9uZW50cy9GZWVkYmFjay9Nb2RhbCc7XG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJ0Bpc28vY29tcG9uZW50cy9GZWVkYmFjay9Ob3RpZmljYXRpb24nO1xuaW1wb3J0IHtcbiAgc2lnbkluV2l0aEVtYWlsLFxuICBzaWduVXBXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgcmVzZXRQYXNzd29yZCxcbn0gZnJvbSAnQGlzby9saWIvZmlyZWJhc2UvZmlyZWJhc2UuYXV0aGVudGljYXRpb24udXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGVtYWlsOiAnZGVtb0BnbWFpbC5jb20nLFxuICAgIHBhc3N3b3JkOiAnZGVtb2RlbW8nLFxuICAgIGNvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gZSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlO1xuICAgIGlmICghKGVtYWlsICYmIHBhc3N3b3JkKSkge1xuICAgICAgbm90aWZpY2F0aW9uKCdlcnJvcicsICdQbGVhc2UgZmlsbCBpbiBlbWFpbC4gYW5kIHBhc3N3b3JkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY29uZmlybUxvYWRpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgbGV0IHVzZXI7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKHByb3BzLnNpZ251cCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2lnblVwV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGF1dGhVc2VyID0+IHtcbiAgICAgICAgICB1c2VyID0gYXV0aFVzZXIudXNlcjtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLCAnVXNlcicpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlLCAnRXJyb3InKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsKGVtYWlsLCBwYXNzd29yZCkudGhlbihhdXRoVXNlciA9PiB7XG4gICAgICAgICAgdXNlciA9IGF1dGhVc2VyLnVzZXI7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UsICdFcnJvcicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlcikge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcbiAgICAgIHByb3BzLmxvZ2luKHRva2VuKTtcbiAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZmljYXRpb24oJ2Vycm9yJywgbWVzc2FnZSk7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCB9ID0gc3RhdGU7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgbm90aWZpY2F0aW9uKCdlcnJvcicsIGBQbGVhc2UgZmlsbCBpbiBlbWFpbC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzZXRQYXNzd29yZChlbWFpbClcbiAgICAgIC50aGVuKCgpID0+XG4gICAgICAgIG5vdGlmaWNhdGlvbignc3VjY2VzcycsIGBQYXNzd29yZCByZXNldCBlbWFpbCBzZW50IHRvICR7ZW1haWx9LmApXG4gICAgICApXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gbm90aWZpY2F0aW9uKCdlcnJvcicsICdFbWFpbCBhZGRyZXNzIG5vdCBmb3VuZC4nKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93TW9kYWx9IGNsYXNzTmFtZT1cImJ0bkZpcmViYXNlXCI+XG4gICAgICAgIHtwcm9wcy5zaWdudXAgPyAnU2lnbiB1cCB3aXRoIEZpcmViYXNlJyA6ICdTaWduIGluIHdpdGggRmlyZWJhc2UnfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9e3Byb3BzLnNpZ251cCA/ICdTaWduIHVwIHdpdGggRmlyZWJhc2UnIDogJ1NpZ24gaW4gd2l0aCBGaXJlYmFzZSd9XG4gICAgICAgIHZpc2libGU9e3N0YXRlLnZpc2libGV9XG4gICAgICAgIGNvbmZpcm1Mb2FkaW5nPXtzdGF0ZS5jb25maXJtTG9hZGluZ31cbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgb25Paz17aGFuZGxlTG9naW59XG4gICAgICAgIGNsYXNzTmFtZT1cImlzb0ZpcmViYXNlTG9naW5Nb2RhbFwiXG4gICAgICAgIGNhbmNlbFRleHQ9XCJDYW5jZWxcIlxuICAgICAgICBva1RleHQ9e3Byb3BzLnNpZ251cCA/ICdTaWduIFVwJyA6ICdMb2dpbid9XG4gICAgICA+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSW5wdXRXcmFwcGVyXCI+XG4gICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSW5wdXRXcmFwcGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXNvUmVzZXRQYXNzXCIgb25DbGljaz17aGFuZGxlUmVzZXRQYXNzd29yZH0+XG4gICAgICAgICAgICBSZXNldCBQYXNzd29yZFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBmaXJlYmFzZSwgeyBhdXRoIH0gZnJvbSAnLi9maXJlYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXJBdXRoID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICByZXNvbHZlKHVzZXJBdXRoKTtcbiAgICB9LCByZWplY3QpO1xuICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbmdvb2dsZVByb3ZpZGVyLnNldEN1c3RvbVBhcmFtZXRlcnMoeyBwcm9tcHQ6ICdzZWxlY3RfYWNjb3VudCcgfSk7XG5leHBvcnQgY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgZ2l0aHViUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIoKTtcbmV4cG9ydCBjb25zdCB0d2l0dGVyUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKTtcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRmFjZWJvb2sgPSAoKSA9PlxuICBhdXRoXG4gICAgLnNpZ25JbldpdGhQb3B1cChmYWNlYm9va1Byb3ZpZGVyKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBGYWNlYm9vayBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgRmFjZWJvb2sgQVBJLlxuICAgICAgdmFyIHRva2VuID0gcmVzdWx0LmNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cbiAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgICBjb25zb2xlLmxvZyhgRkIgVG9rZW46ICR7dG9rZW59YCwgYFVzZXI6ICR7dXNlcn1gKTtcblxuICAgICAgLy8gLi4uXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cbiAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXG4gICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcbiAgICAgIC8vIFRoZSBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cbiAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICAvLyAuLi5cbiAgICB9KTtcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoR2l0aHViID0gKCkgPT4gYXV0aC5zaWduSW5XaXRoUG9wdXAoZ2l0aHViUHJvdmlkZXIpO1xuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhUd2l0dGVyID0gKCkgPT4gYXV0aC5zaWduSW5XaXRoUG9wdXAodHdpdHRlclByb3ZpZGVyKTtcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRW1haWwgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PlxuICBhd2FpdCBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG5leHBvcnQgY29uc3Qgc2lnblVwV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PlxuICBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IGVtYWlsID0+IGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gYXV0aC5zaWduT3V0KCk7XG5leHBvcnQgZGVmYXVsdCBhdXRoO1xuLy8gYXN5bmMgZnVuY3Rpb24gc2lnbnVwKHByb3ZpZGVyLCBpbmZvKSB7XG4vLyAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyAgIHRyeSB7XG4vLyAgICAgc3dpdGNoIChwcm92aWRlcikge1xuLy8gICAgICAgY2FzZSB0aGlzLkVNQUlMOlxuLy8gICAgICAgICByZXR1cm4gYXdhaXQgZmlyZWJhc2VBdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuLy8gICAgICAgICAgIGluZm8uZW1haWwsXG4vLyAgICAgICAgICAgaW5mby5wYXNzd29yZFxuLy8gICAgICAgICApO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgcmV0dXJuIGVycm9yO1xuLy8gICB9XG4vLyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHByb3ZpZGVyLCBpbmZvKSB7XG4gIHRyeSB7XG4gICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgY2FzZSB0aGlzLkVNQUlMOlxuICAgICAgICByZXR1cm4gYXdhaXQgZmlyZWJhc2VBdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXG4gICAgICAgICAgaW5mby5lbWFpbCxcbiAgICAgICAgICBpbmZvLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICBjYXNlIHRoaXMuRkFDRUJPT0s6XG4gICAgICAgIGxldCBmYkF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZUF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlQXV0aCgpLnNpZ25JbldpdGhQb3B1cChmYkF1dGhQcm92aWRlcik7XG4gICAgICBjYXNlIHRoaXMuR09PR0xFOlxuICAgICAgICBsZXQgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlQXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlQXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpO1xuICAgICAgY2FzZSB0aGlzLkdJVEhVQjpcbiAgICAgICAgbGV0IGdoQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlQXV0aC5HaXRodWJBdXRoUHJvdmlkZXIoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlQXV0aCgpLnNpZ25JbldpdGhQb3B1cChnaEF1dGhQcm92aWRlcik7XG4gICAgICBjYXNlIHRoaXMuVFdJVFRFUjpcbiAgICAgICAgbGV0IHR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2VBdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZpcmViYXNlQXV0aCgpLnNpZ25JbldpdGhQb3B1cCh0d2l0dGVyQXV0aFByb3ZpZGVyKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IFJlZHV4U2FnYUZpcmViYXNlIGZyb20gJ3JlZHV4LXNhZ2EtZmlyZWJhc2UnO1xuaW1wb3J0IGlzb0NvbmZpZyBmcm9tICdAaXNvL2NvbmZpZy9maXJlYmFzZS5jb25maWcnO1xuY29uc3QgcHJvZENvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPRF9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPRF9BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9EX0RBVEFCQVNFX1VSTCxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPRF9QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPRF9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9EX01FU1NBR0lOR19TRU5ERVJfSUQsXG59O1xuY29uc3QgZGV2Q29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9ERVZfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RFVl9BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9ERVZfREFUQUJBU0VfVVJMLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9ERVZfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RFVl9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9ERVZfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbn07XG5jb25zdCBjb25maWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcbi8vICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoaXNvQ29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2VBcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGhcbiAgPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGlzb0NvbmZpZylcbiAgOiBmaXJlYmFzZS5hcHAoKTtcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5leHBvcnQgY29uc3QgcnNmID0gbmV3IFJlZHV4U2FnYUZpcmViYXNlKGZpcmViYXNlQXBwKTtcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGRpcmVjdGlvbiA9ICdsdHInO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uZ2V0QXR0cmlidXRlKCdkaXInKTtcbn1cbmNvbnN0IHdpdGhEaXJlY3Rpb24gPSBDb21wb25lbnQgPT4gcHJvcHMgPT4ge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGRhdGEtcnRsPXtkaXJlY3Rpb259IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpcmVjdGlvbjtcbmV4cG9ydCB7IGRpcmVjdGlvbiB9O1xuIiwiLy8gVHJhbnNpdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb24odGltaW5nID0gMC4zKSB7XG4gIHJldHVybiBgXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIGA7XG59XG5cbi8vIEJvcmRlciBSYWRpdXNcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMocmFkaXVzID0gMCkge1xuICByZXR1cm4gYFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICR7cmFkaXVzfTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiAke3JhZGl1c307XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gIGA7XG59XG5cbi8vIEJveCBTaGFkb3dcbmV4cG9ydCBmdW5jdGlvbiBib3hTaGFkb3coc2hhZG93ID0gJ25vbmUnKSB7XG4gIHJldHVybiBgXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR7c2hhZG93fTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogJHtzaGFkb3d9O1xuICAgICAgYm94LXNoYWRvdzogJHtzaGFkb3d9O1xuICBgO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9idXR0b24vc3R5bGUvY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9idXR0b24vc3R5bGUvY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IEF1dGgwTG9jayBmcm9tICdhdXRoMC1sb2NrJztcbmltcG9ydCBBdXRoMENvbmZpZyBmcm9tICdAaXNvL2NvbmZpZy9hdXRoMC5jb25maWcnO1xuaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUsIHJlbW92ZUNvb2tpZSB9IGZyb20gJy4uL2F1dGgudXRpbHMnO1xuXG5jbGFzcyBBdXRoMEhlbHBlciB7XG4gIGlzVmFsaWQgPSBBdXRoMENvbmZpZy5jbGllbnRJRCAmJiBBdXRoMENvbmZpZy5kb21haW47XG4gIGxvY2sgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICB9XG4gIGxvZ2luKGhhbmRsZUxvZ2luKSB7XG4gICAgdGhpcy5sb2NrID0gdGhpcy5pc1ZhbGlkXG4gICAgICA/IG5ldyBBdXRoMExvY2soXG4gICAgICAgICAgQXV0aDBDb25maWcuY2xpZW50SUQsXG4gICAgICAgICAgQXV0aDBDb25maWcuZG9tYWluLFxuICAgICAgICAgIEF1dGgwQ29uZmlnLm9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuXG4gICAgdGhpcy5sb2NrLm9uKCdhdXRoZW50aWNhdGVkJywgYXV0aFJlc3VsdCA9PiB7XG4gICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHNldENvb2tpZSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgIGhhbmRsZUxvZ2luKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxvY2suc2hvdygpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aDBIZWxwZXIoKTtcbiIsImNvbnN0IGFjdGlvbnMgPSB7XG4gIExPR0lOX1JFUVVFU1RfU1RBUlQ6ICdMT0dJTl9SRVFVRVNUX1NUQVJUJyxcbiAgSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQ6ICdKV1RfTE9HSU5fUkVRVUVTVF9TVEFSVCcsXG4gIExPR0lOX1JFUVVFU1RfU1VDQ0VTUzogJ0xPR0lOX1JFUVVFU1RfU1VDQ0VTUycsXG4gIExPR0lOX1JFUVVFU1RfRkFJTFVSRTogJ0xPR0lOX1JFUVVFU1RfRkFJTFVSRScsXG4gIExPR09VVF9SRVFVRVNUX1NUQVJUOiAnTE9HT1VUX1JFUVVFU1RfU1RBUlQnLFxuICBMT0dPVVRfUkVRVUVTVF9TVUNDRVNTOiAnTE9HT1VUX1JFUVVFU1RfU1VDQ0VTUycsXG4gIExPR09VVF9SRVFVRVNUX0ZBSUxVUkU6ICdMT0dPVVRfUkVRVUVTVF9GQUlMVVJFJyxcblxuICBsb2dpbjogY3JlZGVudGlhbHMgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1RBUlQsXG4gICAgcGF5bG9hZDogY3JlZGVudGlhbHMsXG4gIH0pLFxuICBqd3RMb2dpbjogKGhpc3RvcnksIHVzZXJJbmZvKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQsXG4gICAgcGF5bG9hZDogeyBoaXN0b3J5LCB1c2VySW5mbyB9LFxuICB9KSxcbiAgbG9naW5SZXF1ZXN0U3VjY2VzczogY3JlZGVudGlhbHMgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBjcmVkZW50aWFscyxcbiAgfSksXG4gIGxvZ2luUmVxdWVzdEZhaWx1cmU6IGVycm9yID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dJTl9SRVFVRVNUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogZXJyb3IsXG4gIH0pLFxuICBsb2dvdXQ6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9TVEFSVCxcbiAgfSksXG4gIGxvZ291dFJlcXVlc3RTdWNjZXNzOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfU1VDQ0VTUyxcbiAgfSksXG4gIGxvZ291dFJlcXVlc3RGYWlsdXJlOiBlcnJvciA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XG4gICAgICBleHBpcmVzOiAxLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0ga2V5ID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XG4gICAgICBleHBpcmVzOiAxLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcbiAgICA/IGdldENvb2tpZUZyb21Ccm93c2VyKGtleSlcbiAgICA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4ge1xuICByZXR1cm4gY29va2llLmdldChrZXkpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcmF3Q29va2llID0gcmVxLmhlYWRlcnMuY29va2llXG4gICAgLnNwbGl0KCc7JylcbiAgICAuZmluZChjID0+IGMudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSk7XG4gIGlmICghcmF3Q29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gcmF3Q29va2llLnNwbGl0KCc9JylbMV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoeyB0b2tlbiB9KSA9PiB7XG4gIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4sIHsgZXhwaXJlczogMSB9KTtcbiAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gY3R4ID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpO1xuXG4gIC8qXG4gICAqIElmIGBjdHgucmVxYCBpcyBhdmFpbGFibGUgaXQgbWVhbnMgd2UgYXJlIG9uIHRoZSBzZXJ2ZXIuXG4gICAqIEFkZGl0aW9uYWxseSBpZiB0aGVyZSdzIG5vIHRva2VuIGl0IG1lYW5zIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4uXG4gICAqL1xuICBpZiAoY3R4LnJlcSAmJiAhdG9rZW4pIHtcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvc2lnbmluJyB9KTtcbiAgICBjdHgucmVzLmVuZCgpO1xuICB9XG5cbiAgLy8gV2UgYWxyZWFkeSBjaGVja2VkIGZvciBzZXJ2ZXIuIFRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIG9uIGNsaWVudC5cbiAgaWYgKCF0b2tlbikge1xuICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICBjb29raWUucmVtb3ZlKCd0b2tlbicpO1xuICAvLyB0byBzdXBwb3J0IGxvZ2dpbmcgb3V0IGZyb20gYWxsIHdpbmRvd3NcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvdXQnLCBEYXRlLm5vdygpKTtcbiAgUm91dGVyLnB1c2goJy9zaWduaW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgV3JhcHBlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQgZnJvbSBzdG9yYWdlIScpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBzeW5jTG9nb3V0KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBzeW5jTG9nb3V0KTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dvdXQnKTtcbiAgICAgIH07XG4gICAgfSwgW251bGxdKTtcblxuICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICB9O1xuXG4gIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGgoY3R4KTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID1cbiAgICAgIFdyYXBwZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAoYXdhaXQgV3JhcHBlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSk7XG5cbiAgICByZXR1cm4geyAuLi5jb21wb25lbnRQcm9wcywgdG9rZW4gfTtcbiAgfTtcblxuICByZXR1cm4gV3JhcHBlcjtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IElucHV0IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2lucHV0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9jaGVja2JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2J1dHRvbic7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gJ0Bpc28vY29tcG9uZW50cy91dGlsaXR5L2ludGxNZXNzYWdlcyc7XG5pbXBvcnQgand0Q29uZmlnIGZyb20gJ0Bpc28vY29uZmlnL2p3dC5jb25maWcnO1xuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSAnQGlzby9jb250YWluZXJzL0ZpcmViYXNlRm9ybS9GaXJlYmFzZUZvcm0nO1xuaW1wb3J0IEF1dGgwIGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL0F1dGgwJztcbmltcG9ydCBhdXRoQWN0aW9ucyBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hY3Rpb25zJztcbmltcG9ydCBTaWduSW5TdHlsZVdyYXBwZXIgZnJvbSAnLi4vc3R5bGVkL1NpZ25Jbi5zdHlsZXMnO1xuY29uc3QgeyBsb2dpbiB9ID0gYXV0aEFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5QYWdlKHByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKGxvZ2luKHRydWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVKV1RMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGp3dExvZ2luLCBoaXN0b3J5IH0gPSBwcm9wcztcbiAgICBjb25zdCB1c2VySW5mbyA9IHtcbiAgICAgIHVzZXJuYW1lOlxuICAgICAgICAocHJvY2Vzcy5icm93c2VyICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFVzZXJOYW1lJykudmFsdWUpIHx8XG4gICAgICAgICcnLFxuICAgICAgcGFzc3dvcmQ6XG4gICAgICAgIChwcm9jZXNzLmJyb3dzZXIgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHVQYXNzd29yZCcpLnZhbHVlKSB8fFxuICAgICAgICAnJyxcbiAgICB9O1xuICAgIC8vIGp3dExvZ2luKGhpc3RvcnksIHVzZXJJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTaWduSW5TdHlsZVdyYXBwZXIgY2xhc3NOYW1lPVwiaXNvU2lnbkluUGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Mb2dpbkNvbnRlbnRXcmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTG9naW5Db250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Mb2dvV3JhcHBlclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInBhZ2Uuc2lnbkluVGl0bGVcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb1NpZ25JbkZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSW5wdXRXcmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRVc2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJkZW1vQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29JbnB1dFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJkZW1vZGVtb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29JbnB1dFdyYXBwZXIgaXNvTGVmdFJpZ2h0Q29tcG9uZW50XCI+XG4gICAgICAgICAgICAgIDxDaGVja2JveD5cbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwicGFnZS5zaWduSW5SZW1lbWJlck1lXCIgLz5cbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtqd3RDb25maWcuZW5hYmxlZCA/IGhhbmRsZUpXVExvZ2luIDogaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwicGFnZS5zaWduSW5CdXR0b25cIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpc29IZWxwZXJUZXh0XCI+XG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJwYWdlLnNpZ25JblByZXZpZXdcIiAvPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0lucHV0V3JhcHBlciBpc29PdGhlckxvZ2luXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuRmFjZWJvb2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInBhZ2Uuc2lnbkluRmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5Hb29nbGVQbHVzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJwYWdlLnNpZ25Jbkdvb2dsZVBsdXNcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gQXV0aDAubG9naW4oaGFuZGxlTG9naW4pfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5BdXRoWmVyb1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwicGFnZS5zaWduSW5BdXRoMFwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxGaXJlYmFzZUxvZ2luXG4gICAgICAgICAgICAgICAgaGlzdG9yeT17cm91dGVyfVxuICAgICAgICAgICAgICAgIGxvZ2luPXt0b2tlbiA9PiBkaXNwYXRjaChsb2dpbih0b2tlbikpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0NlbnRlckNvbXBvbmVudCBpc29IZWxwZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290cGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ZvcmdvdFBhc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJwYWdlLnNpZ25JbkZvcmdvdFBhc3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwicGFnZS5zaWduSW5DcmVhdGVBY2NvdW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2lnbkluU3R5bGVXcmFwcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcblxuaW1wb3J0IGJnSW1hZ2UgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL3NpZ24uanBnJztcblxuY29uc3QgU2lnbkluU3R5bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybCgke2JnSW1hZ2V9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnMCcpfTtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJ2luaGVyaXQnKX07XG4gIH1cbiAgLmlzb0NlbnRlckNvbXBvbmVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pc29Mb2dpbkNvbnRlbnRXcmFwcGVyIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmlzb0xvZ2luQ29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNzBweCA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA3MHB4IDIwcHg7XG4gICAgfVxuXG4gICAgLmlzb0xvZ29XcmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICBhLFxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDIpfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXNvU2lnbkluRm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5pc29JbnB1dFdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICAgICAgfVxuICAgICAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzb0xlZnRSaWdodENvbXBvbmVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlzb0hlbHBlclRleHQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDEpfTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzEzcHgnfTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxM3B4JyA6ICdpbmhlcml0J307XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDApfTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnMCcpfTtcbiAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJ2luaGVyaXQnKX07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlzb0hlbHBlcldyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuaXNvT3RoZXJMb2dpbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMil9O1xuXG4gICAgICAgID4gYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAmLmJ0bkZhY2Vib29rIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzNiNTk5OCwgNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYnRuR29vZ2xlUGx1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZGQ0YjM5LCA1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5idG5BdXRoWmVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE0NjE1O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZTE0NjE1LCA1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5idG5GaXJlYmFzZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2NvbG9yJywgNSl9O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCA2KX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pc29Gb3Jnb3RQYXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMyl9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihTaWduSW5TdHlsZVdyYXBwZXIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NoZWNrYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL25vdGlmaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoMC1sb2NrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS1maXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtdGhlbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==