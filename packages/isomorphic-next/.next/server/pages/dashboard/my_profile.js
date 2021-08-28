module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/my_profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@iso/assets/images/bucket.svg":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/bucket.svg ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNDNUE7IiBkPSJNNTkuMDE0LDc5Ljc1MXYzNjQuNjY1YzAsMTkuMzc2LDE1LjcwNiwzNS4wODQsMzUuMDgsMzUuMDg0aDMyMy44MTQNCgljMTkuMzc0LDAsMzUuMDgtMTUuNzA4LDM1LjA4LTM1LjA4NFY3OS43NTFINTkuMDE0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjAwMDsiIGQ9Ik00MjQuMTgxLDc5Ljc1MXYzNjQuNjY1YzAsMTkuMzc2LTE1LjcwNiwzNS4wODQtMzUuMDgsMzUuMDg0aDI4LjgwNg0KCWMxOS4zNzQsMCwzNS4wNzktMTUuNzA4LDM1LjA3OS0zNS4wODRWNzkuNzUxSDQyNC4xODF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZBMjI3OyIgZD0iTTQ2NC4wOTIsOTAuNzUySDQ3LjkwOGMtOC43MzMsMC0xNS44MTMtNy4wOC0xNS44MTMtMTUuODEzVjQ4LjMxNg0KCWMwLTguNzMzLDcuMDgtMTUuODEzLDE1LjgxMy0xNS44MTNoNDE2LjE4NGM4LjczMywwLDE1LjgxMyw3LjA4LDE1LjgxMywxNS44MTN2MjYuNjIzDQoJQzQ3OS45MDYsODMuNjcyLDQ3Mi44MjYsOTAuNzUyLDQ2NC4wOTIsOTAuNzUyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3OEIwQjsiIGQ9Ik00NjQuMDkzLDMyLjUwMmgtMTIuOTk0djEwLjE0OWMwLDEwLjY1NC04LjYzNiwxOS4yOTEtMTkuMjg5LDE5LjI5MUgzMi4wOTV2MTIuOTk2DQoJYzAsOC43MzQsNy4wNzksMTUuODE0LDE1LjgxMiwxNS44MTRoNDE2LjE4NmM4LjczMywwLDE1LjgxMi03LjA4LDE1LjgxMi0xNS44MTRWNDguMzE3DQoJQzQ3OS45MDYsMzkuNTgzLDQ3Mi44MjYsMzIuNTAyLDQ2NC4wOTMsMzIuNTAyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGMzk1QTsiIGQ9Ik0zNDAuNTUxLDM3Ni40MzRIMTcxLjQ0OWMtNy4yOTcsMC0xMy4yMTItNS45MTUtMTMuMjEyLTEzLjIxMnYtMjQuMDc4DQoJYzAtNy4yOTcsNS45MTUtMTMuMjEyLDEzLjIxMi0xMy4yMTJoMTY5LjEwMmM3LjI5NywwLDEzLjIxMiw1LjkxNSwxMy4yMTIsMTMuMjEydjI0LjA3OA0KCUMzNTMuNzYzLDM3MC41MTgsMzQ3Ljg0OCwzNzYuNDM0LDM0MC41NTEsMzc2LjQzNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODE5NDI7IiBkPSJNMzQwLjU1MiwzMjUuOTMyaC0yOC44MDZjNy4yOTYsMCwxMy4yMTEsNS45MTYsMTMuMjExLDEzLjIxM3YyNC4wNzcNCgljMCw3LjI5Ny01LjkxNSwxMy4yMTMtMTMuMjExLDEzLjIxM2gyOC44MDZjNy4yOTYsMCwxMy4yMTEtNS45MTYsMTMuMjExLTEzLjIxM3YtMjQuMDc3DQoJQzM1My43NjMsMzMxLjg0NywzNDcuODQ4LDMyNS45MzIsMzQwLjU1MiwzMjUuOTMyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzA4OEFGRjsiIGQ9Ik05My41NTIsMzIuNTAydjE0NC4yOTZjMCwxOC44MTEsMTUuMjQ3LDM0LjA1OSwzNC4wNTUsMzQuMDU5bDAsMA0KCWMxOC44MDgsMCwzNC4wNTYtMTUuMjQ5LDM0LjA1Ni0zNC4wNTl2LTcuMDA2YzAtMTguODEsMTUuMjQ3LTM0LjA1OSwzNC4wNTUtMzQuMDU5bDAsMGMxOC44MDgsMCwzNC4wNTYsMTUuMjQ5LDM0LjA1NiwzNC4wNTkNCgl2NTEuNjM1YzAsMTguODExLDE1LjI0NywzNC4wNTksMzQuMDU1LDM0LjA1OWwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDU5di05Ny40MzkNCgljMCwxOC44MTEsMTUuMjQ3LDM0LjA2LDM0LjA1NSwzNC4wNmwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDZWMzIuNTAySDkzLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDc2Q0U7IiBkPSJNMjk3Ljg4NSwxMjMuOTg4Yy0xNS45MDksMC0yOC44MDYsMTIuODk5LTI4LjgwNiwyOC44MXY2OC42M2MwLDEzLjY2MS04LjA0NSwyNS40MzctMTkuNjUyLDMwLjg2NA0KCQljNC4zNzUsMi4wNDYsOS4yNTQsMy4xOTUsMTQuNDAzLDMuMTk1bDAsMGMxOC44MDgsMCwzNC4wNTUtMTUuMjQ5LDM0LjA1NS0zNC4wNTlWMTIzLjk4OEwyOTcuODg1LDEyMy45ODh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNzZDRTsiIGQ9Ik0xNjYuOTEyLDEzNS43MzJjLTE4LjgwOCwwLTM0LjA1NSwxNS4yNDktMzQuMDU1LDM0LjA2djcuMDA2YzAsMTMuNjYxLTguMDQ1LDI1LjQzNy0xOS42NTIsMzAuODY0DQoJCWM0LjM3NiwyLjA0Niw5LjI1NCwzLjE5NSwxNC40MDMsMy4xOTVjMTguODA4LDAsMzQuMDU2LTE1LjI0OSwzNC4wNTYtMzQuMDU5di03LjAwNmMwLTEzLjY2MSw4LjA0NS0yNS40MzcsMTkuNjUyLTMwLjg2NA0KCQlDMTc2LjkzOSwxMzYuODgyLDE3Mi4wNjEsMTM1LjczMiwxNjYuOTEyLDEzNS43MzJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNzZDRTsiIGQ9Ik0zMzcuMTg5LDMyLjUwMnY5MS40ODZjMCwxMy42NjEtOC4wNDUsMjUuNDM3LTE5LjY1MiwzMC44NjRjNC4zNzUsMi4wNDYsOS4yNTQsMy4xOTUsMTQuNDAzLDMuMTk1DQoJCWwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDU5VjMyLjUwMkgzMzcuMTg5eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzA1MUMxQjsiIGQ9Ik00ODcuNDA1LDU1LjM1N3YtNy4wNDJjMC0xMi44NTUtMTAuNDU4LTIzLjMxMy0yMy4zMTMtMjMuMzEzaC05OC4wOTdIOTMuNTUySDQ3LjkwOA0KCWMtMTIuODU1LDAtMjMuMzEzLDEwLjQ1OC0yMy4zMTMsMjMuMzEzdjcuMDQyQzEwLjQ4OCw1OC44NjMsMCw3MS42MzIsMCw4Ni44MXY4NS4wMDJjMCw0NC43MTIsMTYuMDQ4LDg3Ljk2OSw0NS4xODgsMTIxLjgwMg0KCWMyLjA1MiwyLjM4Miw0LjE2NSw0LjcwMSw2LjMyNSw2Ljk2OHY4MS43OTVjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTgsNy41LTcuNXYtNjcuNjkzDQoJYzI0LjE1NCwyMC4zMjcsNTMuMTQ4LDM0LjI5OSw4NC4yMjQsNDAuMzc4djguMTZjMCwxMS40Miw5LjI5MiwyMC43MTIsMjAuNzEyLDIwLjcxMmgxNjkuMTAyYzExLjQyMSwwLDIwLjcxMi05LjI5MiwyMC43MTItMjAuNzEyDQoJdi04LjE2YzMxLjA3Ny02LjA4LDYwLjA3MS0yMC4wNTIsODQuMjI1LTQwLjM3OXYxMjkuNzMzYzAsMTUuMjA5LTEyLjM3MiwyNy41ODMtMjcuNTgsMjcuNTgzSDk0LjA5Mw0KCWMtMTUuMjA4LDAtMjcuNTgtMTIuMzc0LTI3LjU4LTI3LjU4M3YtMzEuNzExYzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVzLTcuNSwzLjM1OC03LjUsNy41djMxLjcxMQ0KCWMwLDIzLjQ4LDE5LjEwMSw0Mi41ODMsNDIuNTgsNDIuNTgzaDMyMy44MTRjMjMuNDc5LDAsNDIuNTgtMTkuMTAzLDQyLjU4LTQyLjU4M1YzMDAuNThjMi4xNi0yLjI2Nyw0LjI3My00LjU4NSw2LjMyNC02Ljk2Nw0KCUM0OTUuOTUyLDI1OS43ODEsNTEyLDIxNi41MjMsNTEyLDE3MS44MTJWODYuODFDNTEyLDcxLjYzMiw1MDEuNTEyLDU4Ljg2Myw0ODcuNDA1LDU1LjM1N3ogTTQ3Mi40MDUsNDguMzE1djI2LjYyMw0KCWMwLDQuNTg0LTMuNzI5LDguMzEzLTguMzEzLDguMzEzaC05MC41OTd2LTQzLjI1aDkwLjU5N0M0NjguNjc3LDQwLjAwMiw0NzIuNDA1LDQzLjczMSw0NzIuNDA1LDQ4LjMxNXogTTM1OC40OTYsOTAuNzUydjMzLjIzNg0KCWMwLDE0LjY0NS0xMS45MTMsMjYuNTYtMjYuNTU2LDI2LjU2cy0yNi41NTYtMTEuOTE1LTI2LjU1Ni0yNi41NmMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXY5Ny40MzkNCgljMCwxNC42NDUtMTEuOTEzLDI2LjU1OS0yNi41NTYsMjYuNTU5cy0yNi41NTYtMTEuOTE1LTI2LjU1Ni0yNi41NTl2LTUxLjYzNWMwLTIyLjkxNi0xOC42NDItNDEuNTYtNDEuNTU1LTQxLjU2DQoJYy0yMi45MTQsMC00MS41NTYsMTguNjQ0LTQxLjU1Niw0MS41NnY3LjAwNWMwLDE0LjY0NS0xMS45MTMsMjYuNTYtMjYuNTU2LDI2LjU2cy0yNi41NTUtMTEuOTE1LTI2LjU1NS0yNi41NlY5MC43NTJ2LTUwLjc1DQoJaDI1Ny40NDR2NTAuNzVIMzU4LjQ5NnogTTM5LjU5NSw0OC4zMTVjMC00LjU4NCwzLjcyOS04LjMxMyw4LjMxMy04LjMxM2gzOC4xNDR2NDMuMjVINDcuOTA4Yy00LjU4NCwwLTguMzEzLTMuNzI5LTguMzEzLTguMzEzDQoJVjQ4LjMxNXogTTE1LDE3MS44MTJWODYuODFjMC02Ljc5LDMuOTExLTEyLjY3Nyw5LjU5NS0xNS41NDZ2My42NzVjMCwxMi44NTUsMTAuNDU4LDIzLjMxMywyMy4zMTMsMjMuMzEzaDMuNjA1djE3OS44OTUNCglDMjguNDkyLDI0OC44MTYsMTUsMjExLjgyOSwxNSwxNzEuODEyeiBNMzQwLjU1MSwzNjguOTM0SDE3MS40NDljLTMuMTQ5LDAtNS43MTItMi41NjMtNS43MTItNS43MTJ2LTEzLjAzNQ0KCWMwLjA4NC0wLjQ1MSwwLjEzNy0wLjkxLDAuMTM3LTEuMzc3di05Ljc4M2MwLTEuNzUxLDAuNzk1LTMuMzE4LDIuMDQyLTQuMzY0YzAuOTczLTAuNzY5LDIuMTk5LTEuMjMyLDMuNTMzLTEuMjMyaDE2OS4xMDINCgljMS4zMzQsMCwyLjU2LDAuNDYzLDMuNTM0LDEuMjMzYzEuMjQ2LDEuMDQ1LDIuMDQyLDIuNjEzLDIuMDQyLDQuMzYzdjkuNzgzYzAsMC40NjYsMC4wNTIsMC45MjYsMC4xMzcsMS4zNzd2MTMuMDM1DQoJQzM0Ni4yNjMsMzY2LjM3MSwzNDMuNywzNjguOTM0LDM0MC41NTEsMzY4LjkzNHogTTQ5NywxNzEuODEyYzAsNDAuMDE3LTEzLjQ5Miw3Ny4wMDQtMzYuNTEzLDEwNi4zMzN2LTExOC4yNw0KCWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXYxMzQuOThjLTIyLjYwNywyMi4wNzQtNTEuNDc5LDM3Ljk4OC04NC4yMjUsNDQuOTE1di0wLjYyNw0KCWMwLTYuNDY3LTIuOTgzLTEyLjI0Ny03LjY0MS0xNi4wNDljLTMuNTgzLTIuOTcyLTguMTgtNC43NjEtMTMuMTg4LTQuNzYxSDE3MS41NjdjLTUuMDA4LDAtOS42MDQsMS43OS0xMy4xODgsNC43NjENCgljLTQuNjU5LDMuODAxLTcuNjQyLDkuNTgyLTcuNjQyLDE2LjA0OXYwLjYyN2MtMzIuNzQ2LTYuOTI3LTYxLjYxNi0yMi44NDEtODQuMjI0LTQ0LjkxNVY5OC4yNTJoMTkuNTM4djc4LjU0Ng0KCWMwLDIyLjkxNiwxOC42NDIsNDEuNTYsNDEuNTU1LDQxLjU2YzIyLjkxNCwwLDQxLjU1Ni0xOC42NDQsNDEuNTU2LTQxLjU2di03LjAwNWMwLTE0LjY0NSwxMS45MTMtMjYuNTYsMjYuNTU2LTI2LjU2DQoJczI2LjU1NSwxMS45MTUsMjYuNTU1LDI2LjU2djUxLjYzNWMwLDIyLjkxNiwxOC42NDIsNDEuNTU5LDQxLjU1Niw0MS41NTlzNDEuNTU2LTE4LjY0Myw0MS41NTYtNDEuNTU5di02NS40OTYNCgljNy4yMDYsNi4wMDIsMTYuNDY3LDkuNjE2LDI2LjU1Niw5LjYxNmMyMi45MTQsMCw0MS41NTYtMTguNjQ0LDQxLjU1Ni00MS41NlY5OC4yNTJoNzEuOTkxdjMxLjQ5OWMwLDQuMTQyLDMuMzU3LDcuNSw3LjUsNy41DQoJczcuNS0zLjM1OCw3LjUtNy41Vjk4LjI1MmgzLjYwNWMxMi44NTQsMCwyMy4zMTMtMTAuNDU4LDIzLjMxMy0yMy4zMTN2LTMuNjc1YzUuNjg0LDIuODY5LDkuNTk1LDguNzU2LDkuNTk1LDE1LjU0NnY4NS4wMDJINDk3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/china.svg":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/flag/china.svg ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDgwMCA4MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA4MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRDFGMzQ7IiBkPSJNMjQuODA3LDY0Ni4xNlYxNTMuODM4aDc1MC4zODd2NDAxYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2gxdjI3LjgwN2gtMQ0KCQljLTYuNTYzLDAtMTEuOTAzLDUuMzQtMTEuOTAzLDExLjkwMnYzOS43MUgyNC44MDd6IE0yNzMuNDM1LDQzNS4xOGMtNC40OTMsMC04LjcxNywxLjc1LTExLjg5NCw0LjkyOA0KCQljLTMuMTc3LDMuMTc2LTQuOTI2LDcuMzk5LTQuOTI2LDExLjg5M2MwLDQuNDkyLDEuNzUsOC43MTcsNC45MjYsMTEuODk1YzMuMTc3LDMuMTc3LDcuNDAxLDQuOTI3LDExLjg5NCw0LjkyNw0KCQljNC40OTIsMCw4LjcxNi0xLjc1LDExLjg5My00LjkyN2MzLjE3Ny0zLjE3OCw0LjkyNy03LjQwMiw0LjkyNy0xMS44OTVjMC00LjQ5My0xLjc1LTguNzE3LTQuOTI3LTExLjg5Mw0KCQlDMjgyLjE1MSw0MzYuOTMsMjc3LjkyNyw0MzUuMTgsMjczLjQzNSw0MzUuMTh6IE0yMDAuNDIsNDExLjYzNGMxLjkzNiwxLjI2LDQuMTc5LDEuOTI2LDYuNDg5LDEuOTI2DQoJCWMyLjUyOSwwLDQuOTQ5LTAuNzg3LDYuOTk4LTIuMjc1YzMuOTYyLTIuODc3LDUuNzcxLTcuOTg4LDQuNS0xMi43MTlsLTExLjk4MS00NC41ODVsMzUuODk4LTI5LjAyNw0KCQljMy44MDgtMy4wNzgsNS4zNDktOC4yNzYsMy44MzYtMTIuOTM1cy01LjgxNi03Ljk1OC0xMC43MDctOC4yMWwtNDYuMTA1LTIuMzgxbC0xNi41MTEtNDMuMTExDQoJCWMtMS43NTEtNC41NzMtNi4yMTktNy42NDUtMTEuMTE2LTcuNjQ1cy05LjM2NCwzLjA3Mi0xMS4xMTYsNy42NDVsLTE2LjUxMSw0My4xMTFsLTQ2LjEwNCwyLjM4MQ0KCQljLTQuODkxLDAuMjUyLTkuMTkzLDMuNTUyLTEwLjcwNyw4LjIxYy0xLjUxMyw0LjY1OCwwLjAyOSw5Ljg1NSwzLjgzNiwxMi45MzNsMzUuODk5LDI5LjAyN2wtMTEuOTgxLDQ0LjU4NQ0KCQljLTEuMjcxLDQuNzMsMC41MzgsOS44NDEsNC41LDEyLjcxOWMyLjA0NywxLjQ4Nyw0LjQ2NywyLjI3Myw2Ljk5OCwyLjI3M2MyLjMxLDAsNC41NTQtMC42NjUsNi40ODktMS45MjVsMzguNjk5LTI1LjE3Mw0KCQlMMjAwLjQyLDQxMS42MzR6IE0zMTQuMzEzLDM2NC4zNTRjLTcuNTg5LDAtMTQuMjYzLDUuMTI3LTE2LjIzLDEyLjQ2OGMtMS4xNjMsNC4zMzktMC41NjcsOC44NzEsMS42NzgsMTIuNzYNCgkJYzIuMjQ2LDMuODg5LDUuODczLDYuNjcyLDEwLjIxMiw3LjgzNWMxLjQzLDAuMzgzLDIuODk5LDAuNTc4LDQuMzY1LDAuNTc4YzcuNTg5LDAsMTQuMjY0LTUuMTI3LDE2LjIzMS0xMi40NjgNCgkJYzIuMzk5LTguOTU2LTIuOTM1LTE4LjE5NS0xMS44OTEtMjAuNTk2QzMxNy4yNDcsMzY0LjU0OSwzMTUuNzc4LDM2NC4zNTQsMzE0LjMxMywzNjQuMzU0eiBNMzE0LjMzNCwyODIuNTc0DQoJCWMtMS40NjYsMC0yLjkzNCwwLjE5NC00LjM2NCwwLjU3OGMtOC45NTYsMi40MDEtMTQuMjksMTEuNjQtMTEuODksMjAuNTk2YzEuOTY3LDcuMzQsOC42NDIsMTIuNDY3LDE2LjIzMywxMi40NjcNCgkJYzEuNDY1LDAsMi45MzMtMC4xOTQsNC4zNjMtMC41NzdjNC4zMzktMS4xNjIsNy45NjUtMy45NDQsMTAuMjExLTcuODM0czIuODQyLTguNDIyLDEuNjc5LTEyLjc2Mg0KCQlDMzI4LjU5OSwyODcuNzAxLDMyMS45MjQsMjgyLjU3NCwzMTQuMzM0LDI4Mi41NzR6IE0yNzMuNDM1LDIxMS43NTJjLTQuNDkzLDAtOC43MTcsMS43NS0xMS44OTQsNC45MjgNCgkJYy0zLjE3NywzLjE3Ni00LjkyNiw3LjM5OS00LjkyNiwxMS44OTJzMS43NSw4LjcxNyw0LjkyNiwxMS44OTVzNy40MDEsNC45MjcsMTEuODk0LDQuOTI3YzQuNDkyLDAsOC43MTYtMS43NSwxMS44OTMtNC45MjcNCgkJYzMuMTc3LTMuMTc4LDQuOTI3LTcuNDAyLDQuOTI3LTExLjg5NXMtMS43NS04LjcxNi00LjkyNy0xMS44OTJDMjgyLjE1MSwyMTMuNTAyLDI3Ny45MjcsMjExLjc1MiwyNzMuNDM1LDIxMS43NTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VEMUYzNDsiIGQ9Ik03NzQuMTkzLDU1NC44Mzh2LTQwMEgyNS44MDdWNjQ1LjE2aDc0OC4zODd2LTM4LjcxYzAtNy4xMjcsNS43NzUtMTIuOTAyLDEyLjkwMy0xMi45MDJ2LTI1LjgwNw0KCQlDNzc5Ljk2OSw1NjcuNzQxLDc3NC4xOTMsNTYxLjk2Niw3NzQuMTkzLDU1NC44Mzh6IE0yNDIuOTUyLDMyNS43MzFsLTM1LjM5MiwyOC42MThsMTEuODEzLDQzLjk1Nw0KCQljMS4zODcsNS4xNjItMC41NTIsMTAuNjQ2LTQuODc3LDEzLjc4OGMtMi4yNTcsMS42NC00LjkxOCwyLjQ2Ni03LjU4NSwyLjQ2NmMtMi40NDUsMC00Ljg5MS0wLjY5Mi03LjAzNS0yLjA4OGwtMzguMTU0LTI0LjgyDQoJCWwtMzguMTU0LDI0LjgxOGMtNC40OCwyLjkxNS0xMC4yOTUsMi43NjYtMTQuNjItMC4zNzhjLTQuMzI1LTMuMTQyLTYuMjY0LTguNjI2LTQuODc3LTEzLjc4OGwxMS44MTMtNDMuOTU3bC0zNS4zOTUtMjguNjE4DQoJCWMtNC4xNTctMy4zNi01LjgxLTguOTM2LTQuMTU5LTE0LjAyYzEuNjUyLTUuMDg0LDYuMjY4LTguNjI1LDExLjYwNi04LjlsNDUuNDU1LTIuMzQ4bDE2LjI3OS00Mi41MDMNCgkJYzEuOTEyLTQuOTkxLDYuNzA1LTguMjg3LDEyLjA1LTguMjg3YzUuMzQ2LDAsMTAuMTM5LDMuMjk2LDEyLjA1LDguMjg3bDE2LjI3OCw0Mi41MDNsNDUuNDU2LDIuMzQ4DQoJCWM1LjMzOCwwLjI3NSw5Ljk1NSwzLjgxNiwxMS42MDYsOC45QzI0OC43NjIsMzE2Ljc5NSwyNDcuMTA5LDMyMi4zNzIsMjQyLjk1MiwzMjUuNzMxeiBNMjg2LjAzNSw0NjQuNjAyDQoJCWMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwYy02Ljk1OS02Ljk2MS02Ljk1OS0xOC4yNDQsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwDQoJCUMyOTIuOTk1LDQ0Ni4zNTcsMjkyLjk5NSw0NTcuNjQxLDI4Ni4wMzUsNDY0LjYwMnogTTI4Ni4wMzUsMjQxLjE3NGMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwDQoJCWMtNi45NTktNi45Ni02Ljk1OS0xOC4yNDMsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwQzI5Mi45OTUsMjIyLjkzMSwyOTIuOTk1LDIzNC4yMTMsMjg2LjAzNSwyNDEuMTc0eg0KCQkgTTMzMS41MzQsMzg1Ljc4N2MtMi41NDcsOS41MDMtMTIuMzE1LDE1LjE0NS0yMS44MiwxMi41OTdjLTkuNTA2LTIuNTQ4LTE1LjE0Ni0xMi4zMTUtMTIuNTk3LTIxLjgyDQoJCWMyLjU0Ny05LjUwNSwxMi4zMTUtMTUuMTQ1LDIxLjgyLTEyLjU5N0MzMjguNDQyLDM2Ni41MTQsMzM0LjA4LDM3Ni4yODMsMzMxLjUzNCwzODUuNzg3eiBNMzE4LjkzNiwzMTYuNjAzDQoJCWMtOS41MDQsMi41NDYtMTkuMjc0LTMuMDkzLTIxLjgyMS0xMi41OTdzMy4wOTMtMTkuMjcyLDEyLjU5Ny0yMS44MnMxOS4yNzMsMy4wOTUsMjEuODIsMTIuNTk3DQoJCUMzMzQuMDgsMzA0LjI4OCwzMjguNDQsMzE0LjA1OSwzMTguOTM2LDMxNi42MDN6Ii8+DQoJPHBhdGggZD0iTTc3NC4xOTMsNjA2LjQ1djM4LjcxSDI1LjgwN1YxNTQuODM4aDc0OC4zODd2NDAwYzAsNy4xMjgsNS43NzUsMTIuOTAzLDEyLjkwMywxMi45MDNTODAwLDU2MS45NjYsODAwLDU1NC44MzhWMTQxLjkzNQ0KCQljMC03LjEyOC01Ljc3NS0xMi45MDMtMTIuOTAzLTEyLjkwM0gxMi45MDNDNS43NzcsMTI5LjAzMSwwLDEzNC44MDcsMCwxNDEuOTM1djUxNi4xMjljMCw3LjEyOCw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwMw0KCQloNzc0LjE5M2M3LjEyOCwwLDEyLjkwMy01Ljc3NSwxMi45MDMtMTIuOTAzdi01MS42MTNjMC03LjEyNy01Ljc3NS0xMi45MDItMTIuOTAzLTEyLjkwMlM3NzQuMTkzLDU5OS4zMjMsNzc0LjE5Myw2MDYuNDV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGQ9Ik0xNjguMjA4LDM2Mi4yODNjLTEuOTM1LTEuMjYtNC4xNzgtMS45MjUtNi40ODktMS45MjVzLTQuNTU1LDAuNjY2LTYuNDg5LDEuOTI1bC0xOS4xMzgsMTIuNDQ4DQoJCWw1LjkyNC0yMi4wNDhjMS4yMjEtNC41NDItMC4zNTQtOS4zODctNC4wMTEtMTIuMzQ1bC0xNy43NTUtMTQuMzU2bDIyLjgwMi0xLjE3N2M0LjY5OC0wLjI0NCw4LjgyLTMuMjM5LDEwLjUwMi03LjYzMQ0KCQlsOC4xNjctMjEuMzE5bDguMTY3LDIxLjMxN2MxLjY4Myw0LjM5Myw1LjgwNCw3LjM4OSwxMC40OTksNy42MzNsMjIuODAyLDEuMTc3bC0xNy43NTUsMTQuMzU2DQoJCWMtMy42NTcsMi45NTgtNS4yMzEsNy44MDMtNC4wMSwxMi4zNDRsNS45MjQsMjIuMDQ4TDE2OC4yMDgsMzYyLjI4M3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMDAwOyIgZD0iTTE2OC45NTMsMzE3LjUzbC03LjIzMy0xOC44OGwtNy4yMzIsMTguODgxYy0xLjgyNSw0Ljc2Ni02LjI4OCw4LjAwNy0xMS4zODQsOC4yNzJsLTIwLjE5NCwxLjA0Mg0KCQlsMTUuNzI1LDEyLjcxNGMzLjk2NywzLjIwOCw1LjY3Miw4LjQ1NCw0LjM0OCwxMy4zODFsLTUuMjQ3LDE5LjUyN2wxNi45NS0xMS4wMjRjMi4xMzgtMS4zOTIsNC41ODYtMi4wODcsNy4wMzUtMi4wODcNCgkJczQuODk2LDAuNjk1LDcuMDM1LDIuMDg3bDE2Ljk1LDExLjAyNGwtNS4yNDctMTkuNTI3Yy0xLjMyNS00LjkyNywwLjM4LTEwLjE3Myw0LjM0Ny0xMy4zODFsMTUuNzI1LTEyLjcxNGwtMjAuMTk0LTEuMDQyDQoJCUMxNzUuMjQsMzI1LjUzOSwxNzAuNzc4LDMyMi4yOTYsMTY4Ljk1MywzMTcuNTN6Ii8+DQoJPHBhdGggZD0iTTIzNS41MDQsMzAyLjgxMmwtNDUuNDU2LTIuMzQ5TDE3My43NywyNTcuOTZjLTEuOTEyLTQuOTkxLTYuNzA1LTguMjg4LTEyLjA1LTguMjg4cy0xMC4xMzgsMy4yOTYtMTIuMDUsOC4yODgNCgkJbC0xNi4yNzksNDIuNTAzbC00NS40NTUsMi4zNDljLTUuMzM5LDAuMjc1LTkuOTU1LDMuODE2LTExLjYwNiw4LjljLTEuNjUyLDUuMDgzLDAuMDAxLDEwLjY2LDQuMTU4LDE0LjAybDM1LjM5MywyOC42MTgNCgkJbC0xMS44MTMsNDMuOTU3Yy0xLjM4Nyw1LjE2MiwwLjU1MiwxMC42NDYsNC44NzcsMTMuNzg4YzQuMzIzLDMuMTQ0LDEwLjE0LDMuMjkzLDE0LjYyLDAuMzc4bDM4LjE1NC0yNC44MmwzOC4xNTQsMjQuODE4DQoJCWMyLjE0NCwxLjM5Niw0LjU5LDIuMDg4LDcuMDM1LDIuMDg4YzIuNjY3LDAsNS4zMjgtMC44MjQsNy41ODUtMi40NjZjNC4zMjUtMy4xNDIsNi4yNjQtOC42MjYsNC44NzctMTMuNzg4bC0xMS44MTMtNDMuOTU3DQoJCWwzNS4zOTMtMjguNjE4YzQuMTU3LTMuMzYsNS44MS04LjkzNiw0LjE1OC0xNC4wMkMyNDUuNDU5LDMwNi42MjgsMjQwLjg0MywzMDMuMDg3LDIzNS41MDQsMzAyLjgxMnogTTE4NC44MDUsMzM5LjU1OQ0KCQljLTMuOTY3LDMuMjA4LTUuNjcyLDguNDU0LTQuMzQ4LDEzLjM4MWw1LjI0OCwxOS41MjdsLTE2Ljk1LTExLjAyNGMtMi4xMzktMS4zOTItNC41ODctMi4wODctNy4wMzUtMi4wODcNCgkJcy00Ljg5NiwwLjY5NS03LjAzNSwyLjA4N2wtMTYuOTUsMTEuMDI0bDUuMjQ4LTE5LjUyN2MxLjMyNS00LjkyNy0wLjM4LTEwLjE3My00LjM0OC0xMy4zODFsLTE1LjcyNS0xMi43MTRsMjAuMTk0LTEuMDQyDQoJCWM1LjA5Ni0wLjI2Myw5LjU1OS0zLjUwNiwxMS4zODQtOC4yNzJsNy4yMzEtMTguODhsNy4yMzMsMTguODgxYzEuODI1LDQuNzY2LDYuMjg4LDguMDA3LDExLjM4NCw4LjI3MmwyMC4xOTQsMS4wNDINCgkJTDE4NC44MDUsMzM5LjU1OXoiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjI5OS4zOTUiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iMjI4LjU3MiIgcj0iMTcuODIiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjM4MS4xNzYiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iNDUyLjAwMSIgcj0iMTcuODIiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/france.svg":
/*!************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/flag/france.svg ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3NS0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA0LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc1LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyOCwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI4LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjUsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc1LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NSwxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/italy.svg":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/flag/italy.svg ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3Ny0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA2LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc3LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI2LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjMsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc3LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/spain.svg":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/flag/spain.svg ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRTAwMCIgZD0iTTY0NC4xNjEsNTMwLjAzMnYtMWMwLTYuNTYzLTUuMzQtMTEuOTAzLTExLjkwMy0xMS45MDNIMjQuODA3VjI4Mi44NzFoNzUwLjM4N3YyMzQuMjU4aC05MS4zMjINCgkJYy02LjU2MywwLTExLjkwMyw1LjM0LTExLjkwMywxMS45MDN2MUg2NDQuMTYxeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkUwMDAiIGQ9Ik02ODMuODcxLDUxNi4xMjloOTAuMzIyVjI4My44NzFIMjUuODA3djIzMi4yNThoNjA2LjQ1MWM3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzaDI1LjgwNw0KCQlDNjcwLjk2OCw1MjEuOTA2LDY3Ni43NDUsNTE2LjEyOSw2ODMuODcxLDUxNi4xMjl6Ii8+DQoJPHJlY3QgeD0iMjQuODA3IiB5PSIxNTMuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzUwLjM4NyIgaGVpZ2h0PSIxMDUuMjI2Ii8+DQoJPHJlY3QgeD0iMjUuODA3IiB5PSIxNTQuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzQ4LjM4NyIgaGVpZ2h0PSIxMDMuMjI2Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTI0LjgwNyw2NDYuMTYxVjU0MC45MzZoNjA3LjQ1MWM2LjU2MywwLDExLjkwMy01LjM0LDExLjkwMy0xMS45MDN2LTFoMjcuODA3djENCgkJYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2g5MS4zMjJ2MTA1LjIyNkgyNC44MDd6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTY4My44NzEsNTQxLjkzNmMtNy4xMjYsMC0xMi45MDMtNS43NzctMTIuOTAzLTEyLjkwM2gtMjUuODA3YzAsNy4xMjYtNS43NzcsMTIuOTAzLTEyLjkwMywxMi45MDNIMjUuODA3DQoJCXYxMDMuMjI2aDc0OC4zODdWNTQxLjkzNkg2ODMuODcxeiIvPg0KCTxwYXRoIGQ9Ik03ODcuMDk3LDEyOS4wMzJIMTIuOTAzQzUuNzc3LDEyOS4wMzIsMCwxMzQuODEsMCwxNDEuOTM2djUxNi4xMjljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM2g3NzQuMTkzDQoJCWM3LjEyNiwwLDEyLjkwMy01Ljc3NywxMi45MDMtMTIuOTAzVjE0MS45MzZDODAwLDEzNC44MSw3OTQuMjIzLDEyOS4wMzIsNzg3LjA5NywxMjkuMDMyeiBNNzc0LjE5MywxNTQuODM5djEwMy4yMjZIMjUuODA3DQoJCVYxNTQuODM5SDc3NC4xOTN6IE0yNS44MDcsNjQ1LjE2MVY1NDEuOTM2aDYwNi40NTFjNy4xMjYsMCwxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3MtNS43NzctMTIuOTAzLTEyLjkwMy0xMi45MDNIMjUuODA3DQoJCVYyODMuODcxaDc0OC4zODd2MjMyLjI1OGgtOTAuMzIyYy03LjEyNiwwLTEyLjkwMyw1Ljc3Ny0xMi45MDMsMTIuOTAzczUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDkwLjMyMnYxMDMuMjI2SDI1LjgwN3oiLz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/uk.svg":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/flag/uk.svg ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/uk-bc48afcc15d5d9d51255de0b2ee708be.svg";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/user1.png":
/*!******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/user1.png ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user1-56a1f25e5fb02becf99ef7c50fe14233.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/user3.png":
/*!******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/assets/images/user3.png ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/@iso/components/AvatarCard/AvatarCard.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/AvatarCard/AvatarCard.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AvatarCard_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarCard.style */ "../../node_modules/@iso/components/AvatarCard/AvatarCard.style.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\AvatarCard\\AvatarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AvatarCard = ({
  className,
  avatar,
  name,
  username
}) => {
  return __jsx(_AvatarCard_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `avatar-card ${className ? className : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, avatar && __jsx(_AvatarCard_style__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: avatar,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), name || username ? __jsx(_AvatarCard_style__WEBPACK_IMPORTED_MODULE_1__["Info"], {
    className: "info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name && __jsx("h3", {
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 20
    }
  }, name), username && __jsx("p", {
    className: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 24
    }
  }, username)) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarCard);

/***/ }),

/***/ "../../node_modules/@iso/components/AvatarCard/AvatarCard.style.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/AvatarCard/AvatarCard.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: Avatar, Info, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AvatarCardstyle__CardWrapper",
  componentId: "ce604a-0"
})(["display:flex;align-items:center;"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AvatarCardstyle__Avatar",
  componentId: "ce604a-1"
})(["width:170px;height:170px;border-radius:50%;overflow:hidden;flex-shrink:0;border:4px solid #ffffff;img{width:100%;height:100%;object-fit:cover;}"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AvatarCardstyle__Info",
  componentId: "ce604a-2"
})(["width:calc(100% - 170px);padding-left:10px;"]);
/* harmony default export */ __webpack_exports__["default"] = (CardWrapper);

/***/ }),

/***/ "../../node_modules/@iso/components/Cart/SingleCartModal.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/Cart/SingleCartModal.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleCartModal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleCartModal.style */ "../../node_modules/@iso/components/Cart/SingleCartModal.style.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\Cart\\SingleCartModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  price,
  quantity,
  image,
  objectID,
  cancelQuantity,
  _highlightResult
}) {
  return __jsx(_SingleCartModal_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "isoCartItems",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoItemImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "#",
    src: image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "isoCartDetails",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, _highlightResult.name.value)), __jsx("p", {
    className: "isoItemPriceQuantity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "$"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, price.toFixed(2)), __jsx("span", {
    className: "itemMultiplier",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "X"), __jsx("span", {
    className: "isoItemQuantity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, quantity))), __jsx("a", {
    className: "isoItemRemove",
    onClick: () => cancelQuantity(objectID),
    href: "#!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-android-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "../../node_modules/@iso/components/Cart/SingleCartModal.style.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/Cart/SingleCartModal.style.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarCartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SingleCartModalstyle__TopbarCartWrapper",
  componentId: "sc-11nst29-0"
})(["width:100%;display:flex;align-items:center;padding:15px 30px;flex-shrink:0;position:relative;border-bottom:1px solid ", ";", ";.isoItemImage{width:50px;height:50px;flex-shrink:0;display:flex;align-items:center;justify-content:center;img{width:100%;height:100%;object-fit:cover;}}.isoCartDetails{width:100%;display:flex;padding:", ";flex-direction:column;text-align:", ";h3{margin:0 0 5px;line-height:1;a{font-size:13px;font-weight:500;color:", ";line-height:1.3;text-decoration:none;}}p{display:flex;margin:0;span{font-size:12px;font-weight:400;color:", ";line-height:1.2;&.itemMultiplier{padding:0 3px;}}}}.isoItemRemove{position:absolute;right:", ";left:", ";font-size:13px;font-weight:500;color:", " !important;opacity:0;", ";}&:hover{background-color:", ";.isoItemRemove{opacity:1;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '0 20px 0 0' : '0 0 0 20px', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), props => props['data-rtl'] === 'rtl' ? 'inherit' : '15px', props => props['data-rtl'] === 'rtl' ? '15px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarCartWrapper));

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

/***/ "../../node_modules/@iso/components/PostCard/InstagramCard.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/PostCard/InstagramCard.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InstagramCard_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InstagramCard.style */ "../../node_modules/@iso/components/PostCard/InstagramCard.style.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\PostCard\\InstagramCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InstagramCard = ({
  key,
  type,
  image,
  numberOfView,
  numberOfcomment,
  numberOflike,
  onClick,
  className
}) => {
  return __jsx(_InstagramCard_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `post-card instagram ${className ? className : ''}`,
    key: key,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: image,
    alt: "instagram post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), type === 'gallery' && __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosImages"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }
  }), type === 'video' && __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosVideocam"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }
  }), __jsx("figcaption", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, type === 'video' ? __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, numberOfView, " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 30
    }
  })) : __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, numberOflike, " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosHeart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 30
    }
  })), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, numberOfcomment, " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosChatbubbles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (InstagramCard);

/***/ }),

/***/ "../../node_modules/@iso/components/PostCard/InstagramCard.style.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/PostCard/InstagramCard.style.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure.withConfig({
  displayName: "InstagramCardstyle__CardWrapper",
  componentId: "sc-1o76qo3-0"
})(["max-width:370px;width:100%;position:relative;img{max-width:100%;height:auto;border-radius:4px;}img + svg{position:absolute;top:15px;right:15px;width:auto;height:18px;fill:#ffffff;z-index:2;}figcaption{position:absolute;top:0;left:0;border-radius:4px;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,0.4);opacity:0;visibility:hidden;transition:all 0.1s ease;ul{margin:0;padding:0;display:flex;align-items:center;li{display:inline-flex;align-items:center;margin:0 20px;color:#ffffff;font-size:16px;font-weight:400;svg{width:auto;height:18px;margin-left:10px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}}&:hover{figcaption{opacity:1;visibility:visible;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (CardWrapper);

/***/ }),

/***/ "../../node_modules/@iso/components/PostCard/index.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/PostCard/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InstagramCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstagramCard */ "../../node_modules/@iso/components/PostCard/InstagramCard.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\PostCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PostCard = _ref => {
  let {
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, variant === 'instagram' && __jsx(_InstagramCard__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 40
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "../../node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_intlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\ThemeSwitcher\\ThemeSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  config,
  changeTheme,
  selectedId
}) => {
  const {
    id,
    label,
    options
  } = config;
  return __jsx("div", {
    className: "themeSwitchBlock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_utility_intlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "themeSwitchBtnWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, options.map(option => {
    const {
      themeName,
      buttonColor
    } = option;

    const onClick = () => {
      changeTheme(id, themeName);
    };

    const customClass = themeName === selectedId ? 'selectedTheme' : '';
    return __jsx("button", {
      type: "button",
      key: themeName,
      onClick: onClick,
      className: customClass,
      style: {
        backgroundColor: buttonColor
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    });
  })));
});

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

/***/ "../../node_modules/@iso/components/uielements/menu.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/menu.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "../../node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/popover.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/uielements/popover.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a);

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

/***/ "../../node_modules/@iso/components/utility/Logo.next.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/components/utility/Logo.next.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\components\\utility\\Logo.next.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function ({
  collapsed
}) {
  return __jsx("div", {
    className: "isoLogoWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, collapsed ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }))) : __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteName))));
});

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

/***/ "../../node_modules/@iso/config/language.config.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/language.config.js ***!
  \********************************************************************************************************/
/*! exports provided: langDir, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langDir", function() { return langDir; });
const language = 'english';
const langDir = 'ltr';
/* harmony default export */ __webpack_exports__["default"] = (language);

/***/ }),

/***/ "../../node_modules/@iso/config/site.config.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/site.config.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  footerText: `Isomorphic @ ${new Date().getFullYear()} Created by RedQ, Inc`,
  enableAnimatedRoute: false,
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1'
  },
  dashboard: '/dashboard'
});

/***/ }),

/***/ "../../node_modules/@iso/config/theme/custom.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/theme/custom.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "../../node_modules/@iso/config/theme/default.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _default__WEBPACK_IMPORTED_MODULE_0__["default"]), {}, {
  palette: {
    primary: ['#f00'],
    secondary: ['#0f0']
  }
}));

/***/ }),

/***/ "../../node_modules/@iso/config/theme/default.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/theme/default.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {};
theme.palette = {
  primary: ['#4482FF', // 0: Default
  '#3A78F5', // 1: Darken 4%
  '#3775F2', // 2: Darken 5%
  'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
  '#4C8AFF', // 4: Lighten 3%
  'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
  '#6AA8FF', // 6: Lighten 15%
  '#63A1FF', // 7: Lighten 12%
  '#3F7DFA', // 8: Darken 2%
  '#3369e7', // 9: Algolia color
  '#5896FF', // 10: Lighten 8%
  '#2b69e6', // 11:
  '#236cfe', // 12: darken 10%
  '#4d88ff' // 13: Lighten 5%
  ],
  secondary: ['#2d3446', // 0: DarkBlue
  '#f1f3f6', // 1: LightBluish
  '#788195', // 2: LightBlue
  '#E4E6E9', // 3: LightBluish Darken 5%
  '#364d79', // 4:
  '#202739', // 5: DarkBlue Darken 5%
  '#f5f6f8', // 6: LighterBluish
  '#e9ebf1', // 7: DarkBluish
  '#F6F8FB', // 8: LighterBluish Lighten 2%
  '#E9EBEE', // 9: LighterBluish Darken 3%
  '#1a1a1a' // 10: Sidebar submenu select
  ],
  color: ['#FEAC01', // 0: Orange
  '#42299a', // 1: Purple
  '#F75D81', // 2: Pink
  '#7ED321', // 3: LimeGreen
  '#39435f', // 4: BlueShade
  '#FFCA28', // 5: Yellow
  '#F2BD1B', // 6: Yellow Darken 5%
  '#3b5998', // 7: Facebook
  '#344e86', // 8: Facebook Darken 5%
  '#dd4b39', // 9: Google Plus
  '#d73925', // 10: Google Plus Darken 5%
  '#e14615', // 11: Auth0
  '#ca3f13', // 12: Auth0
  '#e0364c' // 13: themeColor--AlizarinCrimson
  ],
  warning: ['#ffbf00' // 0: Warning
  ],
  success: ['#00b16a' // 0: Success
  ],
  error: ['#f64744', // 0: Error
  '#EC3D3A', // 1: Darken 4%
  '#FF5B58' // 2: Lighten 8%
  ],
  grayscale: ['#bababa', // 0: GreyShade
  '#c1c1c1', // 1: GreyDark
  '#D8D8D8', // 2: Grey
  '#f1f1f1', // 3: GreyAlt
  '#F3F3F3', // 4: GreyLight
  '#fafafa', // 5: DarkWhite
  '#F9F9F9', // 6: DarkerWhite
  '#fcfcfc', // 7: #fff Darken 1%
  '#eeeeee', // 8:
  '#fbfbfb', // 9:
  '#f5f5f5', // 10:
  '#f7f8f9' // 11: today-highlight-bg
  ],
  text: ['#323332', // 0: Heading
  '#595959', // 1: HeadingLight
  '#979797', // 2: Text
  '#797979', // 3: TextDark
  '#6a6c6a' // 4: Heading Lighten 22%
  ],
  border: ['#e9e9e9', // 0: Border
  '#d8d8d8', // 1: BorderDark
  '#ebebeb', // 2: BorderLight
  '#d3d3d3', // 3:
  'rgba(228, 228, 228, 0.65)' // 4:
  ],
  calendar: ['#905', // 0:
  '#690', // 1:
  '#a67f59', // 2:
  '#07a', // 3:
  '#dd4a68', // 4:
  '#e90' // 5:
  ]
};
theme.fonts = {
  primary: 'Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "../../node_modules/@iso/config/theme/theme.config.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/config/theme/theme.config.js ***!
  \***********************************************************************************************************/
/*! exports provided: themeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeConfig", function() { return themeConfig; });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "../../node_modules/@iso/config/theme/default.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "../../node_modules/@iso/config/theme/custom.js");


const themes = {
  defaultTheme: _default__WEBPACK_IMPORTED_MODULE_0__["default"],
  customTheme: _custom__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const themeConfig = {
  topbar: 'defaultTheme',
  sidebar: 'defaultTheme',
  layout: 'defaultTheme',
  theme: 'defaultTheme'
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "../../node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_redux_languageSwitcher_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/redux/languageSwitcher/actions */ "../../node_modules/@iso/redux/languageSwitcher/actions.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/containers/LanguageSwitcher/config.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\containers\\LanguageSwitcher\\LanguageSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  changeLanguage
} = _iso_redux_languageSwitcher_actions__WEBPACK_IMPORTED_MODULE_3__["default"];
function LanguageSwitcher() {
  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.LanguageSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", {
    className: "themeSwitchBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "languageSwitcher.label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "themeSwitchBtnWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["default"].options.map(option => {
    const {
      languageId,
      icon
    } = option;
    const customClass = languageId === language.languageId ? 'selectedTheme languageSwitch' : 'languageSwitch';
    return __jsx("button", {
      type: "button",
      className: customClass,
      key: languageId,
      onClick: () => {
        dispatch(changeLanguage(languageId));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: icon,
      alt: "flag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }));
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/LanguageSwitcher/config.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/LanguageSwitcher/config.js ***!
  \********************************************************************************************************************/
/*! exports provided: getCurrentLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony import */ var _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/language.config */ "../../node_modules/@iso/config/language.config.js");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/assets/images/flag/uk.svg */ "../../node_modules/@iso/assets/images/flag/uk.svg");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/assets/images/flag/china.svg */ "../../node_modules/@iso/assets/images/flag/china.svg");
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/flag/spain.svg */ "../../node_modules/@iso/assets/images/flag/spain.svg");
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/assets/images/flag/france.svg */ "../../node_modules/@iso/assets/images/flag/france.svg");
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/flag/italy.svg */ "../../node_modules/@iso/assets/images/flag/italy.svg");
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__);






const config = {
  defaultLanguage: _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__["default"],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    languageId: 'spanish',
    locale: 'es',
    text: 'Spanish',
    icon: _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    languageId: 'french',
    locale: 'fr',
    text: 'French',
    icon: _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    languageId: 'italian',
    locale: 'it',
    text: 'Italian',
    icon: _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }]
};
function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_redux_themeSwitcher_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/redux/themeSwitcher/actions */ "../../node_modules/@iso/redux/themeSwitcher/actions.js");
/* harmony import */ var _iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/ThemeSwitcher/ThemeSwitcher */ "../../node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js");
/* harmony import */ var _LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LanguageSwitcher/LanguageSwitcher */ "../../node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/containers/ThemeSwitcher/config.js");
/* harmony import */ var _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/assets/images/bucket.svg */ "../../node_modules/@iso/assets/images/bucket.svg");
/* harmony import */ var _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _ThemeSwitcher_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeSwitcher.styles */ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\containers\\ThemeSwitcher\\ThemeSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const {
  switchActivation,
  changeTheme
} = _iso_redux_themeSwitcher_actions__WEBPACK_IMPORTED_MODULE_2__["default"];
function ThemeSwitcher() {
  const {
    isActivated,
    topbarTheme,
    sidebarTheme,
    layoutTheme
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const styleButton = {
    background: sidebarTheme.buttonColor
  };
  return __jsx(_ThemeSwitcher_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "componentTitleWrapper",
    style: styleButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "componentTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "themeSwitcher.settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "SwitcherBlockWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].sidebarTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: sidebarTheme.themeName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].topbarTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: topbarTheme.themeName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].layoutTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: layoutTheme.themeName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "purchaseBtnWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam",
    className: "purchaseBtn",
    target: "_blank",
    style: styleButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "themeSwitcher.purchase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }))), __jsx("button", {
    type: "primary",
    className: "switcherToggleBtn",
    style: styleButton,
    onClick: () => {
      dispatch(switchActivation());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "bucket",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const ThemeSwitcherStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThemeSwitcherstyles__ThemeSwitcherStyle",
  componentId: "sc-17l608g-0"
})(["background-color:#ffffff;width:340px;height:calc(100% - 70px);padding:0 0 50px;flex-shrink:0;position:fixed;top:70px;right:", ";left:", ";z-index:1001;", ";", ";@media only screen and (max-width:767px){width:270px;right:", ";left:", ";}&.active{right:", ";left:", ";}.switcher{right:", ";left:", ";}.componentTitleWrapper{padding:25px 15px;height:70px;background-color:", ";.componentTitle{font-size:21px;font-weight:700;color:#fff;line-height:1;width:100%;text-align:center;display:flex;justify-content:center;}}.SwitcherBlockWrapper{width:100%;height:100%;padding-bottom:105px;overflow:hidden;overflow-y:auto;display:flex;flex-direction:column;.themeSwitchBlock{width:100%;display:-webkit-flex;display:-ms-flex;display:flex;flex-shrink:0;flex-direction:column;margin-top:30px;h4{font-size:14px;font-weight:700;color:", ";line-height:1.3;margin-bottom:0;padding:0 15px;text-transform:uppercase;}.themeSwitchBtnWrapper{width:100%;display:flex;align-items:center;padding:15px 20px;button{width:20px;height:20px;display:flex;margin:", ";border:1px solid #e4e4e4;outline:0;padding:0;background:none;justify-content:center;position:relative;cursor:pointer;", ";&.languageSwitch{border:0;width:30px;height:auto;&.selectedTheme{&:before,&:after{top:2px;left:", ";right:", ";}}}img{width:100%;}&.selectedTheme{&:before{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;background-color:", ";position:absolute;top:-2px;left:", ";right:", ";", ";}&:after{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;border:1px solid ", ";background-color:", ";position:absolute;top:-2px;left:", ";right:", ";-webkit-animation:selectedAnimation 1.2s infinite ease-in-out;animation:selectedAnimation 1.2s infinite ease-in-out;", ";}}}}}}.switcherToggleBtn{width:50px;height:50px;display:flex;align-items:center;justify-content:center;text-align:center;background-color:#ffffff;outline:0;border:0;position:absolute;text-align:center;top:200px;left:", ";right:", ";cursor:pointer;border-radius:", ";", ";img{width:23px;}}.purchaseBtnWrapper{width:100%;padding:25px 0;display:flex;align-items:center;justify-content:center;bottom:0px;position:absolute;background-color:#ffffff;.purchaseBtn{width:calc(100% - 50px);height:42px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;background-color:", ";text-transform:uppercase;line-height:1;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer;", ";", ";&:hover{background-color:", ";}}}@-webkit-keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}@keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}"], props => props['data-rtl'] === 'rtl' ? 'inherit' : '-340px', props => props['data-rtl'] === 'rtl' ? '-340px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('-1px 0 5px rgba(0,0,0,0.25)'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-270px', props => props['data-rtl'] === 'rtl' ? '-270px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', props => props['data-rtl'] === 'rtl' ? '-98px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '-98px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('3px'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-3px', props => props['data-rtl'] === 'rtl' ? '-3px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-50px', props => props['data-rtl'] === 'rtl' ? '-50px' : 'inherit', props => props['data-rtl'] === 'rtl' ? '0 3px 3px 0' : '3px 0 0 3px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('-2px 0 5px rgba(0,0,0,0.2)'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 13));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(ThemeSwitcherStyle));

/***/ }),

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/config.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/ThemeSwitcher/config.js ***!
  \*****************************************************************************************************************/
/*! exports provided: getCurrentTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "../../node_modules/@iso/config/theme/theme.config.js");

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].theme,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme2',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }]
};
const topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].topbar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].sidebar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#323332',
    backgroundColor: undefined,
    textColor: '#788195'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].layout,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    backgroundColor: '#F1F3F6',
    textColor: undefined
  }, {
    themeName: 'theme1',
    buttonColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#323232'
  }, {
    themeName: 'theme2',
    buttonColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textColor: '#ffffff'
  }]
};
const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme
};
function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
/* harmony default export */ __webpack_exports__["default"] = (customizedThemes);

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

/***/ "../../node_modules/@iso/redux/app/actions.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/app/actions.js ***!
  \***************************************************************************************************/
/*! exports provided: getView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
function getView(width) {
  let newView = 'MobileView';

  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }

  return newView;
}
const actions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  CLEAR_MENU: 'CLEAR_MENU',
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current
  }),
  clearMenu: () => ({
    type: actions.CLEAR_MENU
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/actions.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/ecommerce/actions.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  INIT_DATA: 'ECOMMERCE_INIT_DATA',
  INIT_DATA_SAGA: 'ECOMMERCE_INIT_DATA_SAGA',
  UPDATE_DATA: 'ECOMMERCE_UPDATE_DATA',
  UPDATE_DATA_SAGA: 'ECOMMERCE_UPDATE_DATA_SAGA',
  CHANGE_VIEW: 'ECOMMERCE_CHANGE_VIEW',
  VIEW_TOPBAR_CART: 'ECOMMERCE_VIEW_TOPBAR_CART',
  initData: () => ({
    type: actions.INIT_DATA_SAGA
  }),
  changeView: view => ({
    type: actions.CHANGE_VIEW,
    view
  }),
  changeViewTopbarCart: viewTopbarCart => {
    return {
      type: actions.VIEW_TOPBAR_CART,
      viewTopbarCart
    };
  },
  changeProductQuantity: productQuantity => {
    return (dispatch, getState) => {
      const {
        products
      } = getState().Ecommerce;
      dispatch({
        type: actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  },
  addToCart: product => {
    return (dispatch, getState) => {
      const {
        products,
        productQuantity
      } = getState().Ecommerce;
      const objectID = product.objectID;
      productQuantity.push({
        objectID,
        quantity: 1
      });
      products[objectID] = product;
      dispatch({
        type: actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/languageSwitcher/actions.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/languageSwitcher/actions.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/languageSwitcher/config.js");

const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: actions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentLanguage"])(language)
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/languageSwitcher/config.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/languageSwitcher/config.js ***!
  \***************************************************************************************************************/
/*! exports provided: getCurrentLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony import */ var _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/language.config */ "../../node_modules/@iso/config/language.config.js");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/assets/images/flag/uk.svg */ "../../node_modules/@iso/assets/images/flag/uk.svg");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/assets/images/flag/china.svg */ "../../node_modules/@iso/assets/images/flag/china.svg");
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/flag/spain.svg */ "../../node_modules/@iso/assets/images/flag/spain.svg");
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/assets/images/flag/france.svg */ "../../node_modules/@iso/assets/images/flag/france.svg");
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/flag/italy.svg */ "../../node_modules/@iso/assets/images/flag/italy.svg");
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__);






const config = {
  defaultLanguage: _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__["default"],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    languageId: 'spanish',
    locale: 'es',
    text: 'Spanish',
    icon: _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    languageId: 'french',
    locale: 'fr',
    text: 'French',
    icon: _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    languageId: 'italian',
    locale: 'it',
    text: 'Italian',
    icon: _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }]
};
function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "../../node_modules/@iso/redux/profile/actions.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/profile/actions.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const profileActions = {
  FETCH_PROFILE_DATA_START: 'FETCH_PROFILE_DATA_START',
  FETCH_PROFILE_DATA_SUCCESS: 'FETCH_PROFILE_DATA_SUCCESS',
  FETCH_PROFILE_DATA_FAILURE: 'FETCH_PROFILE_DATA_FAILURE',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START
  }),
  fetchProfileDataSuccess: profile => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile
  }),
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (profileActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/themeSwitcher/actions.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/themeSwitcher/actions.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/themeSwitcher/config.js");

const actions = {
  CHANGE_THEME: 'CHANGE_THEME',
  SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
  switchActivation: () => ({
    type: actions.SWITCH_ACTIVATION
  }),
  changeTheme: (attribute, themeName) => {
    const theme = Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])(attribute, themeName);

    if (attribute === 'layoutTheme') {
      document.getElementsByClassName('isomorphicContent')[0].style.backgroundColor = theme.backgroundColor;
    }

    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/themeSwitcher/config.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/redux/themeSwitcher/config.js ***!
  \************************************************************************************************************/
/*! exports provided: getCurrentTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "../../node_modules/@iso/config/theme/theme.config.js");

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].theme,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'customTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }]
};
const topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].topbar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].sidebar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#323332',
    backgroundColor: undefined,
    textColor: '#788195'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].layout,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    backgroundColor: '#F1F3F6',
    textColor: undefined
  }, {
    themeName: 'theme1',
    buttonColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#323232'
  }, {
    themeName: 'theme2',
    buttonColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textColor: '#ffffff'
  }]
};
const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme
};
function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
/* harmony default export */ __webpack_exports__["default"] = (customizedThemes);

/***/ }),

/***/ "../../node_modules/@iso/ui/Antd/Button/Button.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/Antd/Button/Button.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "../../node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/ui/Antd/Modal/Modal.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/Antd/Modal/Modal.js ***!
  \*****************************************************************************************************/
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

/***/ "../../node_modules/@iso/ui/Antd/Spin/Spin.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/Antd/Spin/Spin.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "../../node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/ui/GlideCarousel/GlideCarousel.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/GlideCarousel/GlideCarousel.js ***!
  \****************************************************************************************************************/
/*! exports provided: GlideSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlide", function() { return GlideSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlideCarousel.style */ "../../node_modules/@iso/ui/GlideCarousel/GlideCarousel.style.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\ui\\GlideCarousel\\GlideCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector
}) => {
  // Add all classs to an array.
  const addAllClasses = ['glide']; // className prop checking.

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop.


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  }, []);
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "glide__slides",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, children)), controls && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["ButtonControlWrapper"], {
    className: "glide__controls",
    "data-glide-el": "controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, prevButton ? prevButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 40
    }
  }, "Prev")), __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, nextButton ? nextButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 40
    }
  }, "Next"))), bullets && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["BulletControlWrapper"], {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, totalBullets.map(index => __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["BulletButton"], {
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  })))));
}; // Glide Slide wrapper component.


const GlideSlide = ({
  children
}) => {
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_4__["GlideSlideWrapper"], {
    className: "glide__slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, children);
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. [Note: if "bullets" props is set TRUE, then "numberOfBullets" must be added] */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
};
GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
}; // GlideCarousel default props.

GlideCarousel.defaultProps = {
  controls: true
};

/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/@iso/ui/GlideCarousel/GlideCarousel.style.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/GlideCarousel/GlideCarousel.style.js ***!
  \**********************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // Glide wrapper style

const GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__GlideWrapper",
  componentId: "eippew-0"
})([".glide__slides{margin-bottom:0;}.glide__controls{.glide__prev--area,.glide__next--area{cursor:pointer;}}"]); // Glide slide wrapper style

const GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "GlideCarouselstyle__GlideSlideWrapper",
  componentId: "eippew-1"
})(["position:relative;"]); // Button wrapper style

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonWrapper",
  componentId: "eippew-2"
})(["display:inline-block;"]); // ButtonControlWrapper style

const ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonControlWrapper",
  componentId: "eippew-3"
})([""]); // BulletControlWrapper style

const BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__BulletControlWrapper",
  componentId: "eippew-4"
})([""]); // BulletButton style

const BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__BulletButton",
  componentId: "eippew-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#d6d6d6;&:hover,&.glide__bullet--active{background-color:#869791;}"]); // default button style

const DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__DefaultBtn",
  componentId: "eippew-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/@iso/ui/UI/Container/Container.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/UI/Container/Container.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.style */ "../../node_modules/@iso/ui/UI/Container/Container.style.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\node_modules\\@iso\\ui\\UI\\Container\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  fluid
}) => {
  return __jsx(_Container_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    fullWidth: fullWidth,
    noGutter: noGutter,
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);
};

Container.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  noGutter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/@iso/ui/UI/Container/Container.style.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/ui/UI/Container/Container.style.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Containerstyle__ContainerWrapper",
  componentId: "sc-6uyabi-0"
})(["margin-left:auto;margin-right:auto;", ";", ";", " @media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:1170px;width:100%;}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;@media only screen and (max-width:480px){padding-left:25px;padding-right:25px;}"]), props => props.fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100% !important;max-width:100% !important;@media only screen and (min-width:1441px){padding-left:75px;padding-right:75px;}"]));
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

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

/***/ "../../node_modules/antd/lib/layout/style/css.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/layout/style/css.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/layout/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/layout/style/index.css":
/*!*********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/layout/style/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/menu/style/css.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/menu/style/css.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/menu/style/index.css");

__webpack_require__(/*! ../../tooltip/style/css */ "../../node_modules/antd/lib/tooltip/style/css.js");

/***/ }),

/***/ "../../node_modules/antd/lib/menu/style/index.css":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/menu/style/index.css ***!
  \*******************************************************************************************************/
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

/***/ "../../node_modules/antd/lib/popover/style/css.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/popover/style/css.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/popover/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/popover/style/index.css":
/*!**********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/popover/style/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/spin/style/css.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/spin/style/css.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/spin/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/spin/style/index.css":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/spin/style/index.css ***!
  \*******************************************************************************************************/
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

/***/ "../../node_modules/antd/lib/tooltip/style/css.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/tooltip/style/css.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "../../node_modules/antd/lib/tooltip/style/index.css");

/***/ }),

/***/ "../../node_modules/antd/lib/tooltip/style/index.css":
/*!**********************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/antd/lib/tooltip/style/index.css ***!
  \**********************************************************************************************************/
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

/***/ "./containers/DashboardLayout/DashboardLayout.js":
/*!*******************************************************!*\
  !*** ./containers/DashboardLayout/DashboardLayout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardLayout; });
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.js");
/* harmony import */ var _iso_containers_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/containers/ThemeSwitcher/ThemeSwitcher */ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js");
/* harmony import */ var _Topbar_Topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/Topbar */ "./containers/Topbar/Topbar.js");
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
/* harmony import */ var _DashboardLayout_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardLayout.styles */ "./containers/DashboardLayout/DashboardLayout.styles.js");


var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\DashboardLayout\\DashboardLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const {
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;
function DashboardLayout({
  children
}) {
  return __jsx(_DashboardLayout_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      height: '100vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_Topbar_Topbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      flexDirection: 'row',
      overflowX: 'hidden'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "isoContentMainLayout",
    style: {
      height: '100vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(Content, {
    className: "isomorphicContent",
    style: {
      padding: '70px 0 0',
      flexShrink: '0',
      background: '#f1f3f6',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, children), __jsx(Footer, {
    style: {
      background: '#ffffff',
      textAlign: 'center',
      borderTop: '1px solid #ededed'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, _iso_config_site_config__WEBPACK_IMPORTED_MODULE_6__["default"].footerText))), __jsx(_iso_containers_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./containers/DashboardLayout/DashboardLayout.styles.js":
/*!**************************************************************!*\
  !*** ./containers/DashboardLayout/DashboardLayout.styles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const AppHolder = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardLayoutstyles__AppHolder",
  componentId: "sc-1u8mb4a-0"
})([".trigger{font-size:18px;line-height:64px;padding:0 16px;cursor:pointer;transition:color 0.3s;}.trigger:hover{color:", ";}.ant-layout-sider-collapsed .anticon{font-size:16px;}.ant-layout-sider-collapsed .nav-text{display:none;}.ant-layout{background:", ";&.isoContentMainLayout{overflow:auto;overflow-x:hidden;@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);flex-shrink:0;}@media only screen and (max-width:767px){width:100%;flex-shrink:0;}}}.isoLayoutContent{width:100%;padding:35px;background-color:#ffffff;border:1px solid ", ";height:100%;}.isomorphicLayout{width:calc(100% - 240px);flex-shrink:0;overflow-x:hidden !important;@media only screen and (max-width:767px){width:100%;}@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);}}.ant-layout-footer{font-size:13px;@media (max-width:767px){padding:10px 20px;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
/* harmony default export */ __webpack_exports__["default"] = (AppHolder);

/***/ }),

/***/ "./containers/Profile/Followers/Followers.js":
/*!***************************************************!*\
  !*** ./containers/Profile/Followers/Followers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_ui_Antd_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/ui/Antd/Button/Button */ "../../node_modules/@iso/ui/Antd/Button/Button.js");
/* harmony import */ var _iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/AvatarCard/AvatarCard */ "../../node_modules/@iso/components/AvatarCard/AvatarCard.js");
/* harmony import */ var _Followers_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Followers.styles */ "./containers/Profile/Followers/Followers.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Profile\\Followers\\Followers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Followers = ({
  data
}) => {
  return __jsx(_Followers_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data.length), " Followers"), __jsx(_Followers_styles__WEBPACK_IMPORTED_MODULE_3__["FollowerList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, data.length > 0 && data.map(follower => __jsx(_Followers_styles__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    key: `follower-key${follower.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatar: follower.avatar,
    name: follower.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }), __jsx(_iso_ui_Antd_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Following")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Followers);

/***/ }),

/***/ "./containers/Profile/Followers/Followers.styles.js":
/*!**********************************************************!*\
  !*** ./containers/Profile/Followers/Followers.styles.js ***!
  \**********************************************************/
/*! exports provided: FollowerList, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerList", function() { return FollowerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followersstyles__Wrapper",
  componentId: "sc-14m5w8s-0"
})(["overflow:hidden;> h3{display:block;padding:0 0 10px;margin:0 0 15px;color:", ";border-bottom:1px solid ", ";font-weight:400;strong{font-weight:600;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const FollowerList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followersstyles__FollowerList",
  componentId: "sc-14m5w8s-1"
})(["max-height:396px;overflow-y:auto;width:calc(100% + 40px);padding-right:40px;.avatar-card{width:100%;.avatar{width:60px;height:60px;}.info{h3{color:", ";font-size:14px;}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5));
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followersstyles__ListItem",
  componentId: "sc-14m5w8s-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;&:last-of-type{margin-bottom:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./containers/Profile/Following/Following.js":
/*!***************************************************!*\
  !*** ./containers/Profile/Following/Following.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_ui_Antd_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/ui/Antd/Button/Button */ "../../node_modules/@iso/ui/Antd/Button/Button.js");
/* harmony import */ var _iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/AvatarCard/AvatarCard */ "../../node_modules/@iso/components/AvatarCard/AvatarCard.js");
/* harmony import */ var _Following_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Following.styles */ "./containers/Profile/Following/Following.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Profile\\Following\\Following.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Following = ({
  data
}) => {
  return __jsx(_Following_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data.length), " Following"), __jsx(_Following_styles__WEBPACK_IMPORTED_MODULE_3__["FollowingList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, data.length > 0 && data.map(follower => __jsx(_Following_styles__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    key: `follower-key${follower.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatar: follower.avatar,
    name: follower.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }), __jsx(_iso_ui_Antd_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Following")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Following);

/***/ }),

/***/ "./containers/Profile/Following/Following.styles.js":
/*!**********************************************************!*\
  !*** ./containers/Profile/Following/Following.styles.js ***!
  \**********************************************************/
/*! exports provided: FollowingList, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingList", function() { return FollowingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followingstyles__Wrapper",
  componentId: "sc-1x7b3qg-0"
})(["overflow:hidden;> h3{display:block;padding:0 0 10px;margin:0 0 15px;color:", ";border-bottom:1px solid ", ";font-weight:400;strong{font-weight:600;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const FollowingList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followingstyles__FollowingList",
  componentId: "sc-1x7b3qg-1"
})(["max-height:396px;overflow-y:auto;width:calc(100% + 40px);padding-right:40px;.avatar-card{width:100%;.avatar{width:60px;height:60px;}.info{h3{color:", ";font-size:14px;}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5));
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Followingstyles__ListItem",
  componentId: "sc-1x7b3qg-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;&:last-of-type{margin-bottom:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./containers/Profile/Posts/Comments.js":
/*!**********************************************!*\
  !*** ./containers/Profile/Posts/Comments.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Profile\\Posts\\Comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Comments = ({
  role,
  avatar,
  name,
  content,
  time,
  handleLike,
  handleReply
}) => {
  const renderHtml = data => {
    return {
      __html: data
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, role === 'author' && __jsx("div", {
    className: "author comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatar,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, name), __jsx("span", {
    dangerouslySetInnerHTML: renderHtml(content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("time", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, time)))), role === 'user' && __jsx("div", {
    className: "visitor comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatar,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, name), __jsx("span", {
    dangerouslySetInnerHTML: renderHtml(content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("time", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, time), __jsx("button", {
    type: "button",
    onClick: handleLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "1 like"), __jsx("button", {
    type: "button",
    onClick: handleReply,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Reply")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./containers/Profile/Posts/Posts.js":
/*!*******************************************!*\
  !*** ./containers/Profile/Posts/Posts.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_ui_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/ui/GlideCarousel/GlideCarousel */ "../../node_modules/@iso/ui/GlideCarousel/GlideCarousel.js");
/* harmony import */ var _iso_ui_Antd_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/ui/Antd/Modal/Modal */ "../../node_modules/@iso/ui/Antd/Modal/Modal.js");
/* harmony import */ var _iso_components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/PostCard */ "../../node_modules/@iso/components/PostCard/index.js");
/* harmony import */ var _iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/AvatarCard/AvatarCard */ "../../node_modules/@iso/components/AvatarCard/AvatarCard.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comments */ "./containers/Profile/Posts/Comments.js");
/* harmony import */ var _Posts_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Posts.styles */ "./containers/Profile/Posts/Posts.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Profile\\Posts\\Posts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const galleryOptions = {
  gap: 0
};

const Posts = ({
  data,
  avatar,
  username
}) => {
  const {
    0: currentPost,
    1: setCurrentPost
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showSelectedPost = data => {
    setCurrentPost(data.id);
    setVisible(true);
  };

  const renderHtml = data => {
    return {
      __html: data
    };
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlePrevPost = () => {
    setCurrentPost(currentPost - 1);
  };

  const handleNextPost = () => {
    setCurrentPost(currentPost + 1);
  };

  let newData = {};
  data.forEach(item => {
    if (item.id === currentPost) {
      newData = item;
    }
  });
  return __jsx(_Posts_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, data.map(item => __jsx(_iso_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: item.id,
    variant: "instagram",
    type: item.type,
    image: item.thumb_url,
    numberOflike: item.numberOflike && item.numberOflike,
    numberOfView: item.numberOfView && item.numberOfView,
    numberOfcomment: item.numberOfcomment,
    onClick: () => showSelectedPost(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx(_iso_ui_Antd_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    wrapClassName: "instagram-modal",
    visible: visible,
    onCancel: handleCancel,
    footer: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, currentPost > 1 && __jsx(_Posts_styles__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "prev",
    onClick: handlePrevPost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowBack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })), currentPost < data.length && __jsx(_Posts_styles__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "next",
    onClick: handleNextPost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowForward"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  })), __jsx(_Posts_styles__WEBPACK_IMPORTED_MODULE_9__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, newData.type === 'image' && __jsx("img", {
    src: newData.thumb_url,
    alt: 'post',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), newData.type === 'gallery' && __jsx(_iso_ui_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: galleryOptions,
    bullets: true,
    prevButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDropleftCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }),
    nextButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDroprightCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }),
    numberOfBullets: newData.gallery.length,
    carouselSelector: `post-gallery--${newData.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, newData.gallery.map((item, index) => __jsx(_iso_ui_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_4__["GlideSlide"], {
    key: `gallery-key${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: item,
    alt: 'post',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }))))), newData.type === 'video' && __jsx("div", {
    className: "video-container",
    dangerouslySetInnerHTML: renderHtml(newData.video),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("header", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "avatar-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(_iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    avatar: avatar,
    username: username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "\u2022"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard/my-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, "Follow"))), __jsx("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMoreHorizontal"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, newData.comments !== undefined && newData.comments.length > 0 ? newData.comments.map(item => __jsx(_Comments__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: `comment-key${item.id}`,
    role: item.role,
    avatar: item.avatar,
    name: item.username,
    content: item.comment,
    time: item.time,
    handleLike: () => console.log('Write like function for post.', newData.id),
    handleReply: () => console.log('Write reply function for post.', newData.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  })) : '')), __jsx("footer", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "top-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "like",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiHeart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  })), __jsx("button", {
    className: "comment",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMessageCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  })), __jsx("button", {
    className: "share",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiShare"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  })), __jsx("button", {
    className: "bookmark",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiBookmark"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "activity-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, newData.numberOflike, " likes"), __jsx("time", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "AUGUST 31")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./containers/Profile/Posts/Posts.styles.js":
/*!**************************************************!*\
  !*** ./containers/Profile/Posts/Posts.styles.js ***!
  \**************************************************/
/*! exports provided: ContentWrapper, Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const PostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Postsstyles__PostsWrapper",
  componentId: "sc-346rpo-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;.post-card{width:calc(100% / 3 - 20px);margin-bottom:30px;@media only screen and (max-width:991px){width:calc(100% / 2 - 15px);}@media only screen and (max-width:480px){width:100%;}}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "Postsstyles__ContentWrapper",
  componentId: "sc-346rpo-1"
})(["display:flex;flex-wrap:wrap;height:600px;@media only screen and (max-width:991px){height:480px;}.media{width:calc(100% - 335px);@media only screen and (max-width:767px){width:100%;height:calc(100% - 172px);margin-top:69px;pointer-events:all;}img{width:100%;height:100%;object-fit:cover;}.glide{position:relative;height:100%;.glide__track{height:100%;.glide__slides{height:100%;}}.glide__controls{> div{position:absolute;top:calc(50% - 15px);svg{width:28px;height:auto;fill:rgba(255,255,255,0.7);}&.glide__prev--area{left:11px;right:auto;}&.glide__next--area{left:auto;right:11px;}}}.glide__bullets{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;left:0;bottom:15px;.glide__bullet{width:6px;height:6px;margin:0 2px;background-color:#ffffff;opacity:0.4;&.glide__bullet--active{opacity:1;background-color:#ffffff;}}}}.video-container{position:relative;background-color:#000000;height:100%;display:flex;flex-direction:column;justify-content:center;iframe{width:100% !important;}}}.content{width:334px;display:flex;flex-direction:column;min-height:450px;border-left:1px solid #efefef;overflow:hidden;@media only screen and (max-width:767px){width:100%;justify-content:space-between;position:absolute;left:0;top:0;height:100%;pointer-events:none;border-left:0;}header,.comments,footer > div{padding-left:16px;padding-right:16px;background-color:#ffffff;}header{display:flex;align-items:center;border-bottom:1px solid #efefef;padding-top:16px;padding-bottom:16px;@media only screen and (max-width:767px){pointer-events:all;}.avatar-wrapper{display:flex;align-items:center;.avatar-card{.avatar{width:36px;height:36px;border:0;}.info{width:calc(100% - 46px);.username{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:", ";margin:0;}}}span{font-weight:600;color:", ";margin-left:-7px;margin-right:5px;}a{font-weight:600;color:", ";}}button{border:0;padding:0;background-color:transparent;display:inline-flex;cursor:pointer;margin-left:auto;svg{width:22px;height:auto;}&:hover,&:focus{outline:none;}}}.body{flex:1 0 auto;overflow-x:hidden;position:relative;margin-right:-16px;@media only screen and (max-width:767px){display:none;visibility:hidden;}.comments{width:100%;height:100%;overflow-y:scroll;padding-bottom:16px;box-sizing:border-box;position:absolute;padding-right:32px;.comment{display:flex;padding-top:12px;.avatar{width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}}.info{padding-left:18px;@media only screen and (max-width:991px){padding-left:10px;}h3{display:inline-flex;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:", ";font-size:14px;}span{color:", ";margin-left:5px;a{color:", ";}}.time{margin-top:12px;color:", ";button{border:0;cursor:pointer;font-size:12px;font-weight:600;margin-left:16px;padding:0;background-color:transparent;&:hover,&:focus{outline:0;}}}}}}}footer{border-top:1px solid #efefef;@media only screen and (max-width:767px){pointer-events:all;}.top-bar{display:flex;align-items:center;padding-top:13px;padding-bottom:10px;button{border:0;font-size:20px;background-color:transparent;color:", ";display:inline-flex;cursor:pointer;&:hover,&:focus{outline:none;}&.like{margin-left:-8px;}&.bookmark{margin-left:auto;margin-right:-8px;}}}.activity-info{padding-top:5px;padding-bottom:9px;h5{color:", ";font-size:14px;font-weight:600;}time{font-size:10px;color:", ";}}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Postsstyles__Button",
  componentId: "sc-346rpo-2"
})(["border:0;background-color:transparent;position:absolute;top:calc(50% - 18px);z-index:1;color:#fff;font-size:36px;padding:0;line-height:1;cursor:pointer;&:hover,&:focus{outline:0;}&.prev{right:calc(100% + 15px);left:auto;}&.next{left:calc(100% + 15px);right:auto;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PostsWrapper);

/***/ }),

/***/ "./containers/Profile/Profile.styles.js":
/*!**********************************************!*\
  !*** ./containers/Profile/Profile.styles.js ***!
  \**********************************************/
/*! exports provided: Banner, Navigation, ContentWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Profilestyles__Wrapper",
  componentId: "sc-17z4chn-0"
})([""]);
const Banner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Profilestyles__Banner",
  componentId: "sc-17z4chn-1"
})(["background-repeat:no-repeat;background-size:cover;background-position:center;height:400px;position:relative;&::after{content:'';height:160px;width:100%;position:absolute;bottom:0;left:0;background:linear-gradient(rgba(255,255,255,0),rgba(0,0,0,0.41));}.container{height:400px;position:relative;z-index:1;.avatar-card{position:absolute;bottom:-42px;left:30px;pointer-events:none;width:calc(100% - 60px);@media only screen and (max-width:767px){bottom:-35px;}@media only screen and (max-width:667px){bottom:20px;}.avatar{@media only screen and (max-width:767px){width:160px;height:160px;}@media only screen and (max-width:667px){width:140px;height:140px;}@media only screen and (max-width:480px){width:100px;height:100px;border-width:3px;}}.info{@media only screen and (max-width:767px){padding-left:15px;width:calc(100% - 160px);}@media only screen and (max-width:667px){width:calc(100% - 140px);}@media only screen and (max-width:480px){width:calc(100% - 100px);}h3{font-size:24px;line-height:36px;font-weight:500;color:#ffffff;pointer-events:all;margin:0;@media only screen and (max-width:667px){font-size:22px;line-height:34px;}@media only screen and (max-width:480px){font-size:18px;line-height:30px;}}p{color:#ffffff;font-size:14px;line-height:24px;pointer-events:all;}}}}"]);
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Profilestyles__Navigation",
  componentId: "sc-17z4chn-2"
})(["background-color:#ffffff;pointer-events:all;box-shadow:0 1px 2px #e5e5e5;ul.menu{display:flex;align-items:center;justify-content:center;@media only screen and (max-width:667px){justify-content:flex-start;}li{margin:0 15px;display:block;padding:18px 15px 19px;color:", ";font-size:14px;font-weight:400;cursor:pointer;@media only screen and (max-width:320px){margin:0 7px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}strong{font-size:18px;font-weight:600;margin-right:4px;}&.active{border-bottom:2px solid ", ";}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5));
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Profilestyles__ContentWrapper",
  componentId: "sc-17z4chn-3"
})(["padding:30px 0;"]);
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./containers/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./containers/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/uielements/menu */ "../../node_modules/@iso/components/uielements/menu.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/app/actions */ "../../node_modules/@iso/redux/app/actions.js");
/* harmony import */ var _iso_components_utility_Logo_next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/components/utility/Logo.next */ "../../node_modules/@iso/components/utility/Logo.next.js");
/* harmony import */ var _Sidebar_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sidebar.styles */ "./containers/Sidebar/Sidebar.styles.js");
/* harmony import */ var _SidebarMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarMenu */ "./containers/Sidebar/SidebarMenu.js");
/* harmony import */ var _sidebar_navigations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar.navigations */ "./containers/Sidebar/sidebar.navigations.js");


var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Sidebar\\Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











const SubMenu = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].SubMenu;
const MenuItemGroup = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].ItemGroup;
const {
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__["default"];
function Sidebar(props) {
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    height,
    current
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.App);
  const {
    sidebarTheme
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));

    if (view === 'MobileView') {
      setTimeout(() => {
        dispatch(toggleCollapsed()); // dispatch(toggleOpenDrawer());
      }, 100);
    }
  }

  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
    const latestCloseKey = openKeys.find(key => !(newOpenKeys.indexOf(key) > -1));
    let nextOpenKeys = [];

    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }

    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }

    dispatch(changeOpenKeys(nextOpenKeys));
  }

  const getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  const isCollapsed = collapsed && !openDrawer;
  const mode = isCollapsed === true ? 'vertical' : 'inline';
  const scrollheight = height;
  const styling = {
    backgroundColor: sidebarTheme.backgroundColor
  };
  const submenuStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: sidebarTheme.textColor
  };
  const submenuColor = {
    color: sidebarTheme.textColor
  };

  const onMouseEnter = () => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  return __jsx(_Sidebar_styles__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: isCollapsed,
    width: 240,
    className: "isomorphicSidebar",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: styling,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_iso_components_utility_Logo_next__WEBPACK_IMPORTED_MODULE_9__["default"], {
    collapsed: isCollapsed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__["Scrollbars"], {
    style: {
      height: scrollheight - 70
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClick,
    theme: "dark",
    mode: mode,
    openKeys: isCollapsed ? [] : openKeys,
    selectedKeys: current,
    onOpenChange: onOpenChange,
    className: "isoDashboardMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, _sidebar_navigations__WEBPACK_IMPORTED_MODULE_12__["default"].map(option => __jsx(_SidebarMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: option.key,
    item: option,
    submenuColor: submenuColor,
    submenuStyle: submenuStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    title: __jsx("span", {
      className: "isoMenuHolder",
      style: submenuColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "ion-android-options",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "nav-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.menuLevels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(MenuItemGroup, {
    key: "g1",
    title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 24
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  })), __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }))), __jsx(MenuItemGroup, {
    key: "g2",
    title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.item2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 24
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  })), __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }))))))));
}

/***/ }),

/***/ "./containers/Sidebar/Sidebar.styles.js":
/*!**********************************************!*\
  !*** ./containers/Sidebar/Sidebar.styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Sidebarstyles__SidebarWrapper",
  componentId: "sv5nw8-0"
})([".isomorphicSidebar{z-index:1000;background:", ";width:280px;flex:0 0 280px;.scrollarea{height:calc(100vh - 70px);}@media only screen and (max-width:767px){width:240px !important;flex:0 0 240px !important;}&.ant-layout-sider-collapsed{@media only screen and (max-width:767px){width:0;min-width:0 !important;max-width:0 !important;flex:0 0 0 !important;}}.isoLogoWrapper{height:70px;background:rgba(0,0,0,0.3);margin:0;padding:0 10px;text-align:center;overflow:hidden;", ";h3{a,i{font-size:21px;font-weight:300;line-height:70px;letter-spacing:3px;text-transform:uppercase;color:", ";display:block;text-decoration:none;}}}&.ant-layout-sider-collapsed{.isoLogoWrapper{padding:0;h3{a{font-size:27px;font-weight:500;letter-spacing:0;}}}}.isoDashboardMenu{padding-top:35px;padding-bottom:35px;background:transparent;a{text-decoration:none;font-weight:400;}.ant-menu-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 24px;margin:0;}.isoMenuHolder{display:flex;align-items:center;i{font-size:19px;color:inherit;margin:", ";width:18px;", ";}}.anticon{font-size:18px;margin-right:30px;color:inherit;", ";}.nav-text{font-size:14px;color:inherit;font-weight:400;", ";}.ant-menu-item-selected{background-color:rgba(0,0,0,0.4) !important;.anticon{color:#fff;}i{color:#fff;}.nav-text{color:#fff;}}.ant-menu-item{&:hover{i,.nav-text > span{color:#ffffff;}}}.ant-menu-submenu{&:hover{.ant-menu-submenu-title{i,.nav-text > span{color:#ffffff;}}}}}.ant-menu-dark .ant-menu-inline.ant-menu-sub{background:", ";}.ant-menu-submenu-inline,.ant-menu-submenu-vertical{> .ant-menu-submenu-title{width:100%;display:flex;align-items:center;padding:0 24px;> span{display:flex;align-items:center;}.ant-menu-submenu-arrow{left:", ";right:", ";&:before,&:after{width:8px;", ";}&:before{transform:rotate(-45deg) translateX(3px);}&:after{transform:rotate(45deg) translateX(-3px);}", ";}&:hover{.ant-menu-submenu-arrow{&:before,&:after{color:#ffffff;}}}}.ant-menu-inline,.ant-menu-submenu-vertical{> li:not(.ant-menu-item-group){padding-left:", ";padding-right:", ";font-size:13px;font-weight:400;margin:0;color:inherit;", ";&:hover{a{color:#ffffff !important;}}}.ant-menu-item-group{padding-left:0;.ant-menu-item-group-title{padding-left:100px !important;}.ant-menu-item-group-list{.ant-menu-item{padding-left:125px !important;}}}}.ant-menu-sub{box-shadow:none;background-color:transparent !important;}}&.ant-layout-sider-collapsed{.nav-text{display:none;}.ant-menu-submenu-inline >{.ant-menu-submenu-title:after{display:none;}}.ant-menu-submenu-vertical{> .ant-menu-submenu-title:after{display:none;}.ant-menu-sub{background-color:transparent !important;.ant-menu-item{height:35px;}}}}.ant-menu-inline-collapsed > .ant-menu-item,.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title{left:0;-o-text-overflow:clip;text-overflow:clip;padding:0 32px !important;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), props => props['data-rtl'] === 'rtl' ? '25px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '25px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), ''
/* &:after {
content: '\f123';
font-family: 'Ionicons' !important;
font-size: 16px;
color: inherit;
left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
${transition()};
} */
, props => props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important', props => props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])());
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(SidebarWrapper));

/***/ }),

/***/ "./containers/Sidebar/SidebarMenu.js":
/*!*******************************************!*\
  !*** ./containers/Sidebar/SidebarMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SidebarMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/menu */ "../../node_modules/@iso/components/uielements/menu.js");
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Sidebar\\SidebarMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SubMenu = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_2__["default"].SubMenu;
function SidebarMenu(_ref) {
  let {
    item,
    submenuStyle,
    submenuColor
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item", "submenuStyle", "submenuColor"]);

  const {
    key,
    label,
    leftIcon,
    children
  } = item;
  const url = _iso_config_site_config__WEBPACK_IMPORTED_MODULE_3__["default"].dashboard;

  if (children) {
    return __jsx(SubMenu, _extends({
      key: key,
      title: __jsx("span", {
        className: "isoMenuHolder",
        style: submenuColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: leftIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }), __jsx("span", {
        className: "nav-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      })))
    }, rest, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }), children.map(({
      key,
      label,
      withoutDashboard
    }) => {
      const linkTo = withoutDashboard ? `/${key}` : `${url}/${key}`;
      return __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
        style: submenuStyle,
        key: key,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: linkTo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "isoMenuHolder",
        style: submenuColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "nav-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 19
        }
      }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      })))));
    }));
  }

  return __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_2__["default"].Item, _extends({
    key: key
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${url}/${key}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "isoMenuHolder",
    style: submenuColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: leftIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "nav-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./containers/Sidebar/sidebar.navigations.js":
/*!***************************************************!*\
  !*** ./containers/Sidebar/sidebar.navigations.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  key: 'mailbox',
  path: '/mailbox',
  label: 'sidebar.email',
  leftIcon: 'ion-android-mail'
}, {
  key: 'chat',
  label: 'sidebar.chat',
  leftIcon: 'ion-chatbubbles'
}, {
  key: 'ecommerce',
  label: 'sidebar.ecommerce',
  leftIcon: 'ion-bag',
  children: [{
    key: 'shop',
    label: 'sidebar.shop'
  }, {
    key: 'cart',
    label: 'sidebar.cart'
  }, {
    key: 'checkout',
    label: 'sidebar.checkout'
  }, {
    key: 'card',
    label: 'sidebar.cards'
  }]
}, {
  key: 'maps',
  label: 'sidebar.maps',
  leftIcon: 'ion-map',
  children: [{
    key: 'googlemap',
    label: 'sidebar.googleMap'
  }, {
    key: 'leafletmap',
    label: 'sidebar.leafletMap'
  }]
}, {
  key: 'my_profile',
  label: 'sidebar.profile',
  leftIcon: 'ion-person'
}, {
  key: 'invoice',
  label: 'sidebar.invoice',
  leftIcon: 'ion-clipboard'
}, {
  key: 'youtubeSearch',
  label: 'sidebar.youtubeSearch',
  leftIcon: 'ion-social-youtube'
}, {
  key: 'calendar',
  label: 'sidebar.calendar',
  leftIcon: 'ion-calendar'
}, {
  key: 'notes',
  label: 'sidebar.notes',
  leftIcon: 'ion-ios-paper'
}, {
  key: 'todo',
  label: 'sidebar.todos',
  leftIcon: 'ion-android-checkbox-outline'
}, {
  key: 'contacts',
  label: 'sidebar.contacts',
  leftIcon: 'ion-android-person-add'
}, {
  key: 'shuffle',
  label: 'sidebar.shuffle',
  leftIcon: 'ion-grid'
}, {
  key: 'charts',
  label: 'sidebar.charts',
  leftIcon: 'ion-arrow-graph-up-right',
  children: [{
    key: 'googleChart',
    label: 'sidebar.googleCharts'
  }, {
    key: 'reecharts',
    label: 'sidebar.recharts'
  }, {
    key: 'reactChart2',
    label: 'sidebar.reactChart2'
  }, {
    key: 'reactTrend',
    label: 'sidebar.reactTrend'
  }]
}, {
  key: 'Forms',
  label: 'sidebar.forms',
  leftIcon: 'ion-android-mail',
  children: [{
    key: 'InputField',
    label: 'sidebar.input'
  }, {
    key: 'editor',
    label: 'sidebar.editor'
  }, {
    key: 'FormsWithValidation',
    label: 'sidebar.formsWithValidation'
  }, {
    key: 'progress',
    label: 'sidebar.progress'
  }, {
    key: 'button',
    label: 'sidebar.button'
  }, {
    key: 'tab',
    label: 'sidebar.tab'
  }, {
    key: 'checkbox',
    label: 'sidebar.checkbox'
  }, {
    key: 'radiobox',
    label: 'sidebar.radiobox'
  }, {
    key: 'selectbox',
    label: 'sidebar.selectbox'
  }, {
    key: 'transfer',
    label: 'sidebar.transfer'
  }, {
    key: 'autocomplete',
    label: 'sidebar.autocomplete'
  }]
}, // {
//   key: 'gridLayout',
//   label: 'sidebar.boxOptions',
//   leftIcon: 'ion-cube'
// },
{
  key: 'uielements',
  label: 'sidebar.uiElements',
  leftIcon: 'ion-leaf',
  children: [{
    key: 'op_badge',
    label: 'sidebar.badge'
  }, {
    key: 'op_card',
    label: 'sidebar.card2'
  }, {
    key: 'op_carousel',
    label: 'sidebar.corusel'
  }, {
    key: 'op_collapse',
    label: 'sidebar.collapse'
  }, {
    key: 'op_popover',
    label: 'sidebar.popover'
  }, {
    key: 'op_tooltip',
    label: 'sidebar.tooltip'
  }, {
    key: 'op_tag',
    label: 'sidebar.tag'
  }, {
    key: 'op_timeline',
    label: 'sidebar.timeline'
  }, {
    key: 'dropdown',
    label: 'sidebar.dropdown'
  }, {
    key: 'pagination',
    label: 'sidebar.pagination'
  }, {
    key: 'rating',
    label: 'sidebar.rating'
  }, {
    key: 'tree',
    label: 'sidebar.tree'
  }, {
    key: 'swiper_slider',
    label: 'sidebar.swiperslider'
  }]
}, {
  key: 'advancedUielements',
  label: 'sidebar.advancedElements',
  leftIcon: 'ion-flash',
  children: [{
    key: 'reactDates',
    label: 'sidebar.reactDates'
  }, {
    key: 'codeMirror',
    label: 'sidebar.codeMirror'
  }, {
    key: 'uppy',
    label: 'sidebar.uppy'
  }, {
    key: 'dropzone',
    label: 'sidebar.dropzone'
  }]
}, {
  key: 'feedback',
  label: 'sidebar.feedback',
  leftIcon: 'ion-thumbsup',
  children: [{
    key: 'alert',
    label: 'sidebar.alert'
  }, {
    key: 'modal',
    label: 'sidebar.modal'
  }, {
    key: 'message',
    label: 'sidebar.message'
  }, {
    key: 'notification',
    label: 'sidebar.notification'
  }, {
    key: 'popConfirm',
    label: 'sidebar.popConfirm'
  }, {
    key: 'spin',
    label: 'sidebar.spin'
  }]
}, {
  key: 'table',
  label: 'sidebar.tables',
  leftIcon: 'ion-android-menu',
  children: [{
    key: 'table_ant',
    label: 'sidebar.antTables'
  }]
}, {
  key: 'pages',
  label: 'sidebar.pages',
  leftIcon: 'ion-document-text',
  children: [{
    key: '404',
    label: 'sidebar.404',
    withoutDashboard: true
  }, {
    key: '500',
    label: 'sidebar.500',
    withoutDashboard: true
  }, {
    key: 'signin',
    label: 'sidebar.signIn',
    withoutDashboard: true
  }, {
    key: 'signup',
    label: 'sidebar.signUp',
    withoutDashboard: true
  }, {
    key: 'forgotpassword',
    label: 'sidebar.forgotPw',
    withoutDashboard: true
  }, {
    key: 'resetpassword',
    label: 'sidebar.resetPw',
    withoutDashboard: true
  }]
}, {
  key: 'githubSearch',
  label: 'sidebar.githubSearch',
  leftIcon: 'ion-social-github'
}, {
  key: 'blank_page',
  label: 'sidebar.blankPage',
  leftIcon: 'ion-document'
}]);

/***/ }),

/***/ "./containers/Topbar/Topbar.js":
/*!*************************************!*\
  !*** ./containers/Topbar/Topbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/redux/app/actions */ "../../node_modules/@iso/redux/app/actions.js");
/* harmony import */ var _TopbarNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopbarNotification */ "./containers/Topbar/TopbarNotification.js");
/* harmony import */ var _TopbarMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopbarMessage */ "./containers/Topbar/TopbarMessage.js");
/* harmony import */ var _TopbarSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopbarSearch */ "./containers/Topbar/TopbarSearch.js");
/* harmony import */ var _TopbarUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopbarUser */ "./containers/Topbar/TopbarUser.js");
/* harmony import */ var _TopbarAddToCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopbarAddToCart */ "./containers/Topbar/TopbarAddToCart.js");
/* harmony import */ var _Topbar_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Topbar.styles */ "./containers/Topbar/Topbar.styles.js");


var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\Topbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  Header
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;
const {
  toggleCollapsed
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_4__["default"];

class Topbar extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    const {
      toggleCollapsed,
      url,
      customizedTheme,
      locale
    } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return __jsx(_Topbar_styles__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx(Header, {
      style: styling,
      className: collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "isoLeft",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx("button", {
      className: collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen',
      style: {
        color: customizedTheme.textColor
      },
      onClick: toggleCollapsed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    })), __jsx("ul", {
      className: "isoRight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx("li", {
      className: "isoSearch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(_TopbarSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'notification'
      }),
      className: "isoNotify",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(_TopbarNotification__WEBPACK_IMPORTED_MODULE_5__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'message'
      }),
      className: "isoMsg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx(_TopbarMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'addToCart'
      }),
      className: "isoCart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx(_TopbarAddToCart__WEBPACK_IMPORTED_MODULE_9__["default"], {
      url: url,
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'user'
      }),
      className: "isoUser",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx(_TopbarUser__WEBPACK_IMPORTED_MODULE_8__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => _objectSpread(_objectSpread({}, state.App), {}, {
  locale: state.LanguageSwitcher.language.locale,
  customizedTheme: state.ThemeSwitcher.topbarTheme
}), {
  toggleCollapsed
})(Topbar));

/***/ }),

/***/ "./containers/Topbar/Topbar.styles.js":
/*!********************************************!*\
  !*** ./containers/Topbar/Topbar.styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Topbarstyles__TopbarWrapper",
  componentId: "jgdias-0"
})([".isomorphicTopbar{display:flex;justify-content:space-between;background-color:#ffffff;border-bottom:1px solid rgba(0,0,0,0.1);padding:", ";z-index:1000;", ";@media only screen and (max-width:767px){padding:", ";}&.collapsed{padding:", ";@media only screen and (max-width:767px){padding:", ";}}.isoLeft{display:flex;align-items:center;@media only screen and (max-width:767px){margin:", ";}.triggerBtn{width:24px;height:100%;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;position:relative;cursor:pointer;&:before{content:'\f20e';font-family:'Ionicons';font-size:26px;color:inherit;line-height:0;position:absolute;}}}.isoRight{display:flex;align-items:center;justify-content:center;margin:0;li{margin-left:", ";margin-right:", ";cursor:pointer;line-height:normal;position:relative;display:inline-block;@media only screen and (max-width:360px){margin-left:", ";margin-right:", ";}&:last-child{margin:0;}i{font-size:24px;color:", ";line-height:1;}.isoIconWrapper{position:relative;line-height:normal;span{font-size:12px;color:#fff;background-color:", ";width:20px;height:20px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:20px;position:absolute;top:-8px;left:", ";right:", ";", ";}}&.isoMail{.isoIconWrapper{span{background-color:", ";}}}&.isoNotify{.isoIconWrapper{span{background-color:", ";}}}&.isoMsg{.isoIconWrapper{span{background-color:", ";}}}&.isoCart{.isoIconWrapper{span{background-color:", ";}}}&.isoUser{.isoImgWrapper{width:40px;height:40px;display:flex;align-items:center;justify-content:center;position:relative;background-color:", ";", ";img{height:100%;object-fit:cover;}.userActivity{width:10px;height:10px;display:block;background-color:", ";position:absolute;bottom:0;right:3px;border:1px solid #ffffff;", ";}}}}}}.isoUserDropdown{.ant-popover-inner{.ant-popover-inner-content{.isoUserDropdownContent{padding:7px 0;display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;.isoBorderRadius(5px);", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}}}}.ant-popover{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:360px;min-width:160px;flex-shrink:0;", ";", ";@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;width:100%;", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin-right:15px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding-right:15px;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}}}}&.topbarMail{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:519px){right:-170px;}}}}}&.topbarMessage{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-69px;}}}}}&.topbarNotification{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-120px;}}}}}&.topbarAddtoCart{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";}}}}}}"], props => props['data-rtl'] === 'rtl' ? '0 265px 0 31px' : '0 31px 0 265px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '0px 260px 0px 15px !important' : '0px 15px 0px 260px !important', props => props['data-rtl'] === 'rtl' ? '0 89px 0 31px' : '0 31px 0 89px', props => props['data-rtl'] === 'rtl' ? '0px 15px !important' : '0px 15px !important', props => props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0', props => props['data-rtl'] === 'rtl' ? '35px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '35px', props => props['data-rtl'] === 'rtl' ? '25px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '25px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? 'inherit' : '10px', props => props['data-rtl'] === 'rtl' ? '10px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 3), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 6), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarWrapper));

/***/ }),

/***/ "./containers/Topbar/TopbarAddToCart.js":
/*!**********************************************!*\
  !*** ./containers/Topbar/TopbarAddToCart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/uielements/popover */ "../../node_modules/@iso/components/uielements/popover.js");
/* harmony import */ var _iso_components_Cart_SingleCartModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/Cart/SingleCartModal */ "../../node_modules/@iso/components/Cart/SingleCartModal.js");
/* harmony import */ var _iso_redux_ecommerce_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/redux/ecommerce/actions */ "../../node_modules/@iso/redux/ecommerce/actions.js");
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\TopbarAddToCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const {
  changeViewTopbarCart,
  changeProductQuantity
} = _iso_redux_ecommerce_actions__WEBPACK_IMPORTED_MODULE_5__["default"];
let totalPrice;

class TopbarAddtoCart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.cancelQuantity = this.cancelQuantity.bind(this);
  }

  hide() {
    this.props.changeViewTopbarCart(false);
  }

  handleVisibleChange() {
    this.props.changeViewTopbarCart(!this.props.viewTopbarCart);
  }

  renderProducts() {
    const {
      productQuantity,
      products
    } = this.props;
    totalPrice = 0;

    if (!productQuantity || productQuantity.length === 0) {
      return __jsx("div", {
        className: "isoNoItemMsg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, "No item found"));
    }

    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return __jsx(_iso_components_Cart_SingleCartModal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
        key: product.objectID,
        quantity: product.quantity,
        changeQuantity: this.changeQuantity,
        cancelQuantity: this.cancelQuantity
      }, products[product.objectID], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }));
    });
  }

  changeQuantity(objectID, quantity) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      } else {
        newProductQuantity.push({
          objectID,
          quantity
        });
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  cancelQuantity(objectID) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  render() {
    const {
      url,
      productQuantity,
      viewTopbarCart,
      customizedTheme
    } = this.props;

    const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "topbarAddtoCart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "isoDropdownHeader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, "Cart")), __jsx("div", {
      className: "isoDropdownBody isoCartItemsWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, this.renderProducts()), __jsx("div", {
      className: "isoDropdownFooterLinks",
      onClick: this.hide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/dashboard/cart`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, "View Cart")), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, "Total Price: ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 26
      }
    }, "$", totalPrice.toFixed(2)))));

    return __jsx(_iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: content,
      trigger: "click",
      visible: viewTopbarCart,
      onVisibleChange: this.handleVisibleChange,
      placement: "bottomLeft",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "isoIconWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, __jsx("i", {
      className: "ion-android-cart",
      style: {
        color: customizedTheme.textColor
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }), productQuantity.length === 0 ? '' : __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, productQuantity.length)));
  }

}

function mapStateToProps(state) {
  return _objectSpread(_objectSpread({}, state.Ecommerce), {}, {
    customizedTheme: state.ThemeSwitcher.topbarTheme
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  changeViewTopbarCart,
  changeProductQuantity
})(TopbarAddtoCart));

/***/ }),

/***/ "./containers/Topbar/TopbarDropdown.styles.js":
/*!****************************************************!*\
  !*** ./containers/Topbar/TopbarDropdown.styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarDropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TopbarDropdownstyles__TopbarDropdownWrapper",
  componentId: "sc-11nq80a-0"
})(["display:flex;flex-direction:column;background-color:#ffffff;margin:-8px -16px;width:360px;min-width:160px;flex-shrink:0;", ";", ";", ";@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";a{text-decoration:none;}.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;text-align:", ";width:100%;border-bottom:1px solid ", ";", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin:", ";display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding:", ";}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}&.topbarMail{@media only screen and (max-width:519px){right:-170px;}}&.topbarMessage{@media only screen and (max-width:500px){right:-69px;}}&.topbarNotification{@media only screen and (max-width:500px){right:-120px;}}&.topbarAddtoCart{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";display:flex;flex-direction:column;.isoNoItemMsg{height:100%;display:flex;align-items:center;justify-content:center;span{font-size:30px;font-weight:300;color:", ";line-height:1.2;}}}}&.isoUserDropdown{padding:7px 0;display:flex;flex-direction:column;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;", ";", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}"], Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 2px 10px rgba(0,0,0,0.2)'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 2px 10px rgba(0,0,0,0.2)'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 6));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarDropdownWrapper));

/***/ }),

/***/ "./containers/Topbar/TopbarMessage.js":
/*!********************************************!*\
  !*** ./containers/Topbar/TopbarMessage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarMessage; });
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");
/* harmony import */ var _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/user3.png */ "../../node_modules/@iso/assets/images/user3.png");
/* harmony import */ var _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\TopbarMessage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const demoMassage = [{
  id: 1,
  name: 'David Doe',
  time: '3 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  time: '4 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  time: '5 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  time: '6 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarMessage() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "topbarMessage withImg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoDropdownHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Messages")), __jsx("div", {
    className: "isoDropdownBody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, demoMassage.map(massage => __jsx("a", {
    className: "isoDropdownListItem",
    key: massage.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "isoImgWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: "#",
    src: _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "isoListContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "isoListHead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, massage.name), __jsx("span", {
    className: "isoDate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, massage.time)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, massage.massage))))), __jsx("a", {
    className: "isoViewAllBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "View All"));

  return __jsx(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoIconWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-chatbubbles",
    style: {
      color: customizedTheme.textColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, demoMassage.length)));
}

/***/ }),

/***/ "./containers/Topbar/TopbarNotification.js":
/*!*************************************************!*\
  !*** ./containers/Topbar/TopbarNotification.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarNotification; });
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");


var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\TopbarNotification.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const demoNotifications = [{
  id: 1,
  name: 'David Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarNotification() {
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "topbarNotification",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoDropdownHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Notifications")), __jsx("div", {
    className: "isoDropdownBody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, demoNotifications.map(notification => __jsx("a", {
    className: "isoDropdownListItem",
    key: notification.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, notification.name), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, notification.notification)))), __jsx("a", {
    className: "isoViewAllBtn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "View All"));

  return __jsx(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoIconWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-android-notifications",
    style: {
      color: customizedTheme.textColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, demoNotifications.length)));
}

/***/ }),

/***/ "./containers/Topbar/TopbarSearch.js":
/*!*******************************************!*\
  !*** ./containers/Topbar/TopbarSearch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var _TopbarSearchModal_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopbarSearchModal.styles */ "./containers/Topbar/TopbarSearchModal.styles.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\TopbarSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Searchbar(props) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });
  return __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__["InputSearch"], {
    id: "InputTopbarSearch",
    size: "large",
    placeholder: "Enter search text",
    onBlur: props.onBlur,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  });
}

function TopbarSearch() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  const handleCancel = () => {
    setVisibility(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setVisibility(false);
    }, 200);
  };

  const showModal = () => {
    setVisibility(true);
  };

  return __jsx("div", {
    onClick: showModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: "ion-ios-search-strong",
    style: {
      color: customizedTheme.textColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_TopbarSearchModal_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: visible,
    onOk: handleCancel,
    onCancel: handleCancel,
    wrapClassName: "isoSearchModal",
    width: "60%",
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "isoSearchContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, visible ? __jsx(Searchbar, {
    onBlur: handleBlur,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 22
    }
  }) : '')));
}

/***/ }),

/***/ "./containers/Topbar/TopbarSearchModal.styles.js":
/*!*******************************************************!*\
  !*** ./containers/Topbar/TopbarSearchModal.styles.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/components/Feedback/Modal */ "../../node_modules/@iso/components/Feedback/Modal.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarSearchModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "TopbarSearchModalstyles__TopbarSearchModal",
  componentId: "sc-1psc211-0"
})(["&.ant-modal{top:150px;padding-bottom:0;}.ant-modal-close-x{width:28px;height:28px;line-height:28px;display:none;}.ant-modal-content{overflow:hidden;border-radius:5px;.ant-modal-header{display:none;}.ant-modal-body{padding:0px;.isoSearchContainer{.ant-input-search{.ant-input{border:0;border-radius:0;padding-left:", ";padding-right:", ";height:60px;font-size:14px;&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}&:focus{outline:0;box-shadow:none;}}}.ant-input-suffix{right:", ";left:", ";height:0;&:before{content:'\f4a4';font-family:'ionicons';font-size:24px;color:", ";}.ant-input-search-icon{display:none;}}}}}"], props => props['data-rtl'] === 'rtl' ? '15px' : '55px', props => props['data-rtl'] === 'rtl' ? '55px' : '15px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? '20px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '20px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 2));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarSearchModal));

/***/ }),

/***/ "./containers/Topbar/TopbarUser.js":
/*!*****************************************!*\
  !*** ./containers/Topbar/TopbarUser.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/popover */ "../../node_modules/@iso/components/uielements/popover.js");
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/actions */ "./authentication/actions.js");
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/user1.png */ "../../node_modules/@iso/assets/images/user1.png");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\containers\\Topbar\\TopbarUser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  logout
} = _authentication_actions__WEBPACK_IMPORTED_MODULE_3__["default"];

function TopbarUser() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "isoUserDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "isoDropdownLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Settings"), __jsx("a", {
    className: "isoDropdownLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Feedback"), __jsx("a", {
    className: "isoDropdownLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Help"), __jsx("a", {
    className: "isoDropdownLink",
    onClick: () => dispatch(logout()),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Logout"));

  return __jsx(_iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    arrowPointAtCenter: true,
    placement: "bottomLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "isoImgWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: "user",
    src: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "userActivity online",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./pages/dashboard/my_profile.js":
/*!***************************************!*\
  !*** ./pages/dashboard/my_profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_ui_Antd_Spin_Spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/ui/Antd/Spin/Spin */ "../../node_modules/@iso/ui/Antd/Spin/Spin.js");
/* harmony import */ var _iso_ui_Antd_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/ui/Antd/Modal/Modal */ "../../node_modules/@iso/ui/Antd/Modal/Modal.js");
/* harmony import */ var _iso_ui_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/ui/UI/Container/Container */ "../../node_modules/@iso/ui/UI/Container/Container.js");
/* harmony import */ var _iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/AvatarCard/AvatarCard */ "../../node_modules/@iso/components/AvatarCard/AvatarCard.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_Profile_Posts_Posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/Profile/Posts/Posts */ "./containers/Profile/Posts/Posts.js");
/* harmony import */ var _containers_Profile_Followers_Followers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../containers/Profile/Followers/Followers */ "./containers/Profile/Followers/Followers.js");
/* harmony import */ var _containers_Profile_Following_Following__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../containers/Profile/Following/Following */ "./containers/Profile/Following/Following.js");
/* harmony import */ var _containers_Profile_Profile_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/Profile/Profile.styles */ "./containers/Profile/Profile.styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iso_redux_profile_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/redux/profile/actions */ "../../node_modules/@iso/redux/profile/actions.js");
/* harmony import */ var _authentication_auth_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../authentication/auth.utils */ "./authentication/auth.utils.js");
/* harmony import */ var _containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../containers/DashboardLayout/DashboardLayout */ "./containers/DashboardLayout/DashboardLayout.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\pages\\dashboard\\my_profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const MyProfile = () => {
  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.profile.data);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.profile.loading);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const getProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => dispatch(_iso_redux_profile_actions__WEBPACK_IMPORTED_MODULE_11__["default"].fetchProfileDataStart()), [dispatch]);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('post');
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getProfile();
  }, [getProfile]);

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }

    if (type === 'followers') {
      setActive(type);
      setVisible(true);
    }

    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "My profile")), __jsx(_containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_containers_Profile_Profile_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, loading !== true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_containers_Profile_Profile_styles__WEBPACK_IMPORTED_MODULE_9__["Banner"], {
    className: "profile-banner",
    style: {
      backgroundImage: `url(${data.profile_bg})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(_iso_ui_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_iso_components_AvatarCard_AvatarCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    avatar: data.avatar,
    name: data.name,
    username: data.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }))), __jsx(_containers_Profile_Profile_styles__WEBPACK_IMPORTED_MODULE_9__["Navigation"], {
    className: "navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(_iso_ui_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("li", {
    className: active === 'post' ? 'active' : '',
    onClick: () => handleMenu('post'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  }, data.post.length), " Posts"), __jsx("li", {
    className: active === 'followers' ? 'active' : '',
    onClick: () => handleMenu('followers'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }, data.followers.length), " Followers"), __jsx("li", {
    className: active === 'following' ? 'active' : '',
    onClick: () => handleMenu('following'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, data.following.length), " Following")))), __jsx(_containers_Profile_Profile_styles__WEBPACK_IMPORTED_MODULE_9__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx(_iso_ui_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_containers_Profile_Posts_Posts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    avatar: data.avatar,
    username: data.username,
    data: data.post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }), __jsx(_iso_ui_Antd_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    wrapClassName: "follow-modal",
    visible: visible,
    onCancel: handleCancel,
    footer: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, active === 'followers' && __jsx(_containers_Profile_Followers_Followers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.followers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }), active === 'following' && __jsx(_containers_Profile_Following_Following__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.following,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }))))) : __jsx("div", {
    style: {
      minHeight: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_iso_ui_Antd_Spin_Spin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_12__["withAuthSync"])(MyProfile));

/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "clone":
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clone");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9idWNrZXQuc3ZnIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9jaGluYS5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2ZyYW5jZS5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2l0YWx5LnN2ZyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvc3BhaW4uc3ZnIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy91ay5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMS5wbmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMy5wbmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9BdmF0YXJDYXJkL0F2YXRhckNhcmQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9BdmF0YXJDYXJkL0F2YXRhckNhcmQuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9DYXJ0L1NpbmdsZUNhcnRNb2RhbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL0NhcnQvU2luZ2xlQ2FydE1vZGFsLnN0eWxlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvRmVlZGJhY2svTW9kYWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9Qb3N0Q2FyZC9JbnN0YWdyYW1DYXJkLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvUG9zdENhcmQvSW5zdGFncmFtQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL1Bvc3RDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvc3R5bGVzL2lucHV0LnN0eWxlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9Mb2dvLm5leHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91dGlsaXR5L2ludGxNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvbGFuZ3VhZ2UuY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbmZpZy9zaXRlLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvdGhlbWUvY3VzdG9tLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbmZpZy90aGVtZS9kZWZhdWx0LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbmZpZy90aGVtZS90aGVtZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9MYW5ndWFnZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb250YWluZXJzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb250YWluZXJzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9UaGVtZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9saWIvaGVscGVycy9ydGwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvYXBwL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvZWNvbW1lcmNlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvbGFuZ3VhZ2VTd2l0Y2hlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3JlZHV4L3Byb2ZpbGUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9yZWR1eC90aGVtZVN3aXRjaGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvdGhlbWVTd2l0Y2hlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vdWkvQW50ZC9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3VpL0FudGQvTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vdWkvQW50ZC9TcGluL1NwaW4uanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vdWkvR2xpZGVDYXJvdXNlbC9HbGlkZUNhcm91c2VsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3VpL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby91aS9VSS9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3VpL1VJL0NvbnRhaW5lci9Db250YWluZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvcG9wb3Zlci9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vLy4vYXV0aGVudGljYXRpb24vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hdXRoZW50aWNhdGlvbi9hdXRoLnV0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvRGFzaGJvYXJkTGF5b3V0L0Rhc2hib2FyZExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0Rhc2hib2FyZExheW91dC9EYXNoYm9hcmRMYXlvdXQuc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUHJvZmlsZS9Gb2xsb3dlcnMvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUHJvZmlsZS9Gb2xsb3dlcnMvRm9sbG93ZXJzLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2ZpbGUvRm9sbG93aW5nL0ZvbGxvd2luZy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2ZpbGUvRm9sbG93aW5nL0ZvbGxvd2luZy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Qcm9maWxlL1Bvc3RzL0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2ZpbGUvUG9zdHMvUG9zdHMuc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUHJvZmlsZS9Qcm9maWxlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1NpZGViYXIvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1NpZGViYXIvU2lkZWJhci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9TaWRlYmFyL1NpZGViYXJNZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvU2lkZWJhci9zaWRlYmFyLm5hdmlnYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXIuc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhckFkZFRvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJEcm9wZG93bi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ub3BiYXIvVG9wYmFyTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ub3BiYXIvVG9wYmFyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhclNlYXJjaE1vZGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJVc2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9teV9wcm9maWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnbGlkZWpzL2dsaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9tZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9wb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc3BpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXRoZW1lXCIiXSwibmFtZXMiOlsiQXZhdGFyQ2FyZCIsImNsYXNzTmFtZSIsImF2YXRhciIsIm5hbWUiLCJ1c2VybmFtZSIsIkNhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQXZhdGFyIiwiSW5mbyIsInByaWNlIiwicXVhbnRpdHkiLCJpbWFnZSIsIm9iamVjdElEIiwiY2FuY2VsUXVhbnRpdHkiLCJfaGlnaGxpZ2h0UmVzdWx0IiwidmFsdWUiLCJ0b0ZpeGVkIiwiVG9wYmFyQ2FydFdyYXBwZXIiLCJwYWxldHRlIiwidHJhbnNpdGlvbiIsInByb3BzIiwiV2l0aERpcmVjdGlvbiIsIkluc3RhZ3JhbUNhcmQiLCJrZXkiLCJ0eXBlIiwibnVtYmVyT2ZWaWV3IiwibnVtYmVyT2Zjb21tZW50IiwibnVtYmVyT2ZsaWtlIiwib25DbGljayIsImZpZ3VyZSIsIlBvc3RDYXJkIiwidmFyaWFudCIsImNvbmZpZyIsImNoYW5nZVRoZW1lIiwic2VsZWN0ZWRJZCIsImlkIiwibGFiZWwiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwidGhlbWVOYW1lIiwiYnV0dG9uQ29sb3IiLCJjdXN0b21DbGFzcyIsImJhY2tncm91bmRDb2xvciIsIlNlYXJjaCIsIlRleHRBcmVhIiwiR3JvdXAiLCJXRFN0eWxlZElucHV0IiwiSW5wdXRXcmFwcGVyIiwiU3R5bGVkSW5wdXQiLCJXRElucHV0R3JvdXAiLCJJbnB1dEdyb3VwV3JhcHBlciIsIklucHV0R3JvdXAiLCJXRElucHV0U2VhcmNoIiwiSW5wdXRTZWFyY2hXcmFwcGVyIiwiSW5wdXRTZWFyY2giLCJXRFRleHRhcmVhIiwiVGV4dEFyZWFXcmFwcGVyIiwiVGV4dGFyZWEiLCJDb21wb25lbnROYW1lIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sbGFwc2VkIiwic2l0ZUNvbmZpZyIsInNpdGVJY29uIiwic2l0ZU5hbWUiLCJJbmplY3RNYXNzYWdlIiwiaW5qZWN0SW50bCIsIndpdGhSZWYiLCJsYW5ndWFnZSIsImxhbmdEaXIiLCJmb290ZXJUZXh0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZW5hYmxlQW5pbWF0ZWRSb3V0ZSIsImFwaVVybCIsImdvb2dsZSIsImFuYWx5dGljc0tleSIsImRhc2hib2FyZCIsImRlZmF1bHRUaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0aGVtZSIsImNvbG9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJlcnJvciIsImdyYXlzY2FsZSIsInRleHQiLCJib3JkZXIiLCJjYWxlbmRhciIsImZvbnRzIiwicHJlIiwidGhlbWVzIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZUNvbmZpZyIsInRvcGJhciIsInNpZGViYXIiLCJsYXlvdXQiLCJjaGFuZ2VMYW5ndWFnZSIsImFjdGlvbnMiLCJMYW5ndWFnZVN3aXRjaGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsYW5ndWFnZUlkIiwiaWNvbiIsImRlZmF1bHRMYW5ndWFnZSIsImxvY2FsZSIsImVuZ2xpc2hMYW5nIiwiY2hpbmVzZUxhbmciLCJzcGFuaXNoTGFuZyIsImZyZW5jaExhbmciLCJpdGFsaWFuTGFuZyIsImdldEN1cnJlbnRMYW5ndWFnZSIsImxhbmciLCJzZWxlY2V0ZWRMYW5ndWFnZSIsImZvckVhY2giLCJzd2l0Y2hBY3RpdmF0aW9uIiwiQWN0aW9ucyIsIlRoZW1lU3dpdGNoZXIiLCJpc0FjdGl2YXRlZCIsInRvcGJhclRoZW1lIiwic2lkZWJhclRoZW1lIiwibGF5b3V0VGhlbWUiLCJzdHlsZUJ1dHRvbiIsImJhY2tncm91bmQiLCJUaGVtZXMiLCJhdHRyIiwiYnVja2V0U1ZHIiwiVGhlbWVTd2l0Y2hlclN0eWxlIiwiY2hhbmdlVGhlbWVzIiwidGV4dENvbG9yIiwidW5kZWZpbmVkIiwiY3VzdG9taXplZFRoZW1lcyIsImdldEN1cnJlbnRUaGVtZSIsImF0dHJpYnV0ZSIsInNlbGVjdGVkVGhlbWVuYW1lIiwic2VsZWNldGVkVGhlbWUiLCJkaXJlY3Rpb24iLCJ3aXRoRGlyZWN0aW9uIiwiQ29tcG9uZW50IiwidGltaW5nIiwicmFkaXVzIiwic2hhZG93IiwiZ2V0VmlldyIsIndpZHRoIiwibmV3VmlldyIsIkNPTExQU0VfQ0hBTkdFIiwiQ09MTFBTRV9PUEVOX0RSQVdFUiIsIkNIQU5HRV9PUEVOX0tFWVMiLCJUT0dHTEVfQUxMIiwiQ0hBTkdFX0NVUlJFTlQiLCJDTEVBUl9NRU5VIiwidG9nZ2xlQ29sbGFwc2VkIiwidG9nZ2xlQWxsIiwiaGVpZ2h0IiwidmlldyIsInRvZ2dsZU9wZW5EcmF3ZXIiLCJjaGFuZ2VPcGVuS2V5cyIsIm9wZW5LZXlzIiwiY2hhbmdlQ3VycmVudCIsImN1cnJlbnQiLCJjbGVhck1lbnUiLCJJTklUX0RBVEEiLCJJTklUX0RBVEFfU0FHQSIsIlVQREFURV9EQVRBIiwiVVBEQVRFX0RBVEFfU0FHQSIsIkNIQU5HRV9WSUVXIiwiVklFV19UT1BCQVJfQ0FSVCIsImluaXREYXRhIiwiY2hhbmdlVmlldyIsImNoYW5nZVZpZXdUb3BiYXJDYXJ0Iiwidmlld1RvcGJhckNhcnQiLCJjaGFuZ2VQcm9kdWN0UXVhbnRpdHkiLCJwcm9kdWN0UXVhbnRpdHkiLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwiRWNvbW1lcmNlIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInB1c2giLCJDSEFOR0VfTEFOR1VBR0UiLCJBQ1RJVkFURV9MQU5HX01PREFMIiwicHJvZmlsZUFjdGlvbnMiLCJGRVRDSF9QUk9GSUxFX0RBVEFfU1RBUlQiLCJGRVRDSF9QUk9GSUxFX0RBVEFfU1VDQ0VTUyIsIkZFVENIX1BST0ZJTEVfREFUQV9GQUlMVVJFIiwiU0VUX1BST0ZJTEVfREFUQSIsImZldGNoUHJvZmlsZURhdGFTdGFydCIsImZldGNoUHJvZmlsZURhdGFTdWNjZXNzIiwicHJvZmlsZSIsInBheWxvYWQiLCJmZXRjaFByb2ZpbGVEYXRhRmFpbHVyZSIsIkNIQU5HRV9USEVNRSIsIlNXSVRDSF9BQ1RJVkFUSU9OIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJHbGlkZUNhcm91c2VsIiwiY2hpbGRyZW4iLCJjb250cm9scyIsInByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwiYnVsbGV0cyIsIm51bWJlck9mQnVsbGV0cyIsImNhcm91c2VsU2VsZWN0b3IiLCJhZGRBbGxDbGFzc2VzIiwidG90YWxCdWxsZXRzIiwiaSIsInVzZUVmZmVjdCIsImdsaWRlIiwiR2xpZGUiLCJtb3VudCIsImpvaW4iLCJpbmRleCIsIkdsaWRlU2xpZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJlbGVtZW50Iiwib2JqZWN0IiwiYm9vbCIsIm51bWJlciIsIm9uZU9mVHlwZSIsImRlZmF1bHRQcm9wcyIsIkdsaWRlV3JhcHBlciIsIkdsaWRlU2xpZGVXcmFwcGVyIiwibGkiLCJCdXR0b25XcmFwcGVyIiwiQnV0dG9uQ29udHJvbFdyYXBwZXIiLCJCdWxsZXRDb250cm9sV3JhcHBlciIsIkJ1bGxldEJ1dHRvbiIsImJ1dHRvbiIsIkRlZmF1bHRCdG4iLCJDb250YWluZXIiLCJmdWxsV2lkdGgiLCJub0d1dHRlciIsImZsdWlkIiwiQ29udGFpbmVyV3JhcHBlciIsImNzcyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTE9HSU5fUkVRVUVTVF9TVEFSVCIsIkpXVF9MT0dJTl9SRVFVRVNUX1NUQVJUIiwiTE9HSU5fUkVRVUVTVF9TVUNDRVNTIiwiTE9HSU5fUkVRVUVTVF9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1RfU1RBUlQiLCJMT0dPVVRfUkVRVUVTVF9TVUNDRVNTIiwiTE9HT1VUX1JFUVVFU1RfRkFJTFVSRSIsImxvZ2luIiwiand0TG9naW4iLCJoaXN0b3J5IiwidXNlckluZm8iLCJsb2dpblJlcXVlc3RTdWNjZXNzIiwibG9naW5SZXF1ZXN0RmFpbHVyZSIsImxvZ291dCIsImxvZ291dFJlcXVlc3RTdWNjZXNzIiwibG9nb3V0UmVxdWVzdEZhaWx1cmUiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVGcm9tQnJvd3NlciIsImdldENvb2tpZUZyb21TZXJ2ZXIiLCJjb29raWUiLCJoZWFkZXJzIiwicmF3Q29va2llIiwic3BsaXQiLCJmaW5kIiwiYyIsInRyaW0iLCJzdGFydHNXaXRoIiwidG9rZW4iLCJleHBpcmVzIiwibmV4dENvb2tpZSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicmVtb3ZlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIldyYXBwZWRDb21wb25lbnQiLCJXcmFwcGVyIiwic3luY0xvZ291dCIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImNvbXBvbmVudFByb3BzIiwiQ29udGVudCIsIkZvb3RlciIsIkRhc2hib2FyZExheW91dCIsImZsZXhEaXJlY3Rpb24iLCJvdmVyZmxvd1giLCJwYWRkaW5nIiwiZmxleFNocmluayIsInRleHRBbGlnbiIsImJvcmRlclRvcCIsIkFwcEhvbGRlciIsIkZvbGxvd2VycyIsImxlbmd0aCIsImZvbGxvd2VyIiwiRm9sbG93ZXJMaXN0IiwiTGlzdEl0ZW0iLCJGb2xsb3dpbmciLCJGb2xsb3dpbmdMaXN0IiwiQ29tbWVudHMiLCJyb2xlIiwiY29udGVudCIsInRpbWUiLCJoYW5kbGVMaWtlIiwiaGFuZGxlUmVwbHkiLCJyZW5kZXJIdG1sIiwiX19odG1sIiwiZ2FsbGVyeU9wdGlvbnMiLCJnYXAiLCJQb3N0cyIsImN1cnJlbnRQb3N0Iiwic2V0Q3VycmVudFBvc3QiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd1NlbGVjdGVkUG9zdCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZVByZXZQb3N0IiwiaGFuZGxlTmV4dFBvc3QiLCJuZXdEYXRhIiwidGh1bWJfdXJsIiwiZ2FsbGVyeSIsInZpZGVvIiwiY29tbWVudHMiLCJjb21tZW50IiwiUG9zdHNXcmFwcGVyIiwiQ29udGVudFdyYXBwZXIiLCJhcnRpY2xlIiwiQnV0dG9uIiwiQmFubmVyIiwiTmF2aWdhdGlvbiIsIlN1Yk1lbnUiLCJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIlNpZGVyIiwiYXBwQWN0aW9ucyIsIlNpZGViYXIiLCJvcGVuRHJhd2VyIiwiaGFuZGxlQ2xpY2siLCJzZXRUaW1lb3V0Iiwib25PcGVuQ2hhbmdlIiwibmV3T3BlbktleXMiLCJsYXRlc3RPcGVuS2V5IiwiaW5kZXhPZiIsImxhdGVzdENsb3NlS2V5IiwibmV4dE9wZW5LZXlzIiwiZ2V0QW5jZXN0b3JLZXlzIiwiY29uY2F0Iiwic3ViMyIsImlzQ29sbGFwc2VkIiwibW9kZSIsInNjcm9sbGhlaWdodCIsInN0eWxpbmciLCJzdWJtZW51U3R5bGUiLCJzdWJtZW51Q29sb3IiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJTSURFQkFSX01FTlVfT1BUSU9OUyIsIlNpZGViYXJXcmFwcGVyIiwiU2lkZWJhck1lbnUiLCJyZXN0IiwibGVmdEljb24iLCJ3aXRob3V0RGFzaGJvYXJkIiwibGlua1RvIiwiSGVhZGVyIiwiVG9wYmFyIiwicmVuZGVyIiwiY3VzdG9taXplZFRoZW1lIiwicG9zaXRpb24iLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsImNvbm5lY3QiLCJUb3BiYXJXcmFwcGVyIiwiZWNvbW1lcmNlQWN0aW9uIiwidG90YWxQcmljZSIsIlRvcGJhckFkZHRvQ2FydCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJiaW5kIiwiaGlkZSIsInJlbmRlclByb2R1Y3RzIiwiY2hhbmdlUXVhbnRpdHkiLCJuZXdQcm9kdWN0UXVhbnRpdHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJUb3BiYXJEcm9wZG93bldyYXBwZXIiLCJkZW1vTWFzc2FnZSIsIm1hc3NhZ2UiLCJUb3BiYXJNZXNzYWdlIiwic2V0VmlzaWJpbGl0eSIsIkltYWdlIiwiZGVtb05vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb24iLCJUb3BiYXJOb3RpZmljYXRpb24iLCJTZWFyY2hiYXIiLCJ0aW1lciIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjbGVhclRpbWVvdXQiLCJvbkJsdXIiLCJUb3BiYXJTZWFyY2giLCJoYW5kbGVCbHVyIiwic2hvd01vZGFsIiwiVG9wYmFyU2VhcmNoTW9kYWwiLCJNb2RhbCIsImF1dGhBY3Rpb24iLCJUb3BiYXJVc2VyIiwidXNlcnBpYyIsIk15UHJvZmlsZSIsImxvYWRpbmciLCJnZXRQcm9maWxlIiwidXNlQ2FsbGJhY2siLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVNZW51IiwiYmFja2dyb3VuZEltYWdlIiwicHJvZmlsZV9iZyIsInBvc3QiLCJmb2xsb3dlcnMiLCJmb2xsb3dpbmciLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxxQ0FBcUMsb3BQOzs7Ozs7Ozs7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QUFBQTtBQUFBLElBUkYsQ0FqRUosQ0FERixDQUpGLENBREY7QUFzRkQsQ0F6SEQ7O0FBMkhlckosK0lBQVksQ0FBQ3NJLFNBQUQsQ0FBM0IsRTs7Ozs7Ozs7Ozs7QUM3SUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL215X3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC9teV9wcm9maWxlLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HUmtORE5VRTdJaUJrUFNKTk5Ua3VNREUwTERjNUxqYzFNWFl6TmpRdU5qWTFZekFzTVRrdU16YzJMREUxTGpjd05pd3pOUzR3T0RRc016VXVNRGdzTXpVdU1EZzBhRE15TXk0NE1UUU5DZ2xqTVRrdU16YzBMREFzTXpVdU1EZ3RNVFV1TnpBNExETTFMakE0TFRNMUxqQTRORlkzT1M0M05URklOVGt1TURFMGVpSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR1FqQXdNRHNpSUdROUlrMDBNalF1TVRneExEYzVMamMxTVhZek5qUXVOalkxWXpBc01Ua3VNemMyTFRFMUxqY3dOaXd6TlM0d09EUXRNelV1TURnc016VXVNRGcwYURJNExqZ3dOZzBLQ1dNeE9TNHpOelFzTUN3ek5TNHdOemt0TVRVdU56QTRMRE0xTGpBM09TMHpOUzR3T0RSV056a3VOelV4U0RReU5DNHhPREY2SWk4K0RRbzhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pSa1pCTWpJM095SWdaRDBpVFRRMk5DNHdPVElzT1RBdU56VXlTRFEzTGprd09HTXRPQzQzTXpNc01DMHhOUzQ0TVRNdE55NHdPQzB4TlM0NE1UTXRNVFV1T0RFelZqUTRMak14TmcwS0NXTXdMVGd1TnpNekxEY3VNRGd0TVRVdU9ERXpMREUxTGpneE15MHhOUzQ0TVROb05ERTJMakU0TkdNNExqY3pNeXd3TERFMUxqZ3hNeXczTGpBNExERTFMamd4TXl3eE5TNDRNVE4yTWpZdU5qSXpEUW9KUXpRM09TNDVNRFlzT0RNdU5qY3lMRFEzTWk0NE1qWXNPVEF1TnpVeUxEUTJOQzR3T1RJc09UQXVOelV5ZWlJdlBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFkzT0VJd1Fqc2lJR1E5SWswME5qUXVNRGt6TERNeUxqVXdNbWd0TVRJdU9UazBkakV3TGpFME9XTXdMREV3TGpZMU5DMDRMall6Tml3eE9TNHlPVEV0TVRrdU1qZzVMREU1TGpJNU1VZ3pNaTR3T1RWMk1USXVPVGsyRFFvSll6QXNPQzQzTXpRc055NHdOemtzTVRVdU9ERTBMREUxTGpneE1pd3hOUzQ0TVRSb05ERTJMakU0Tm1NNExqY3pNeXd3TERFMUxqZ3hNaTAzTGpBNExERTFMamd4TWkweE5TNDRNVFJXTkRndU16RTNEUW9KUXpRM09TNDVNRFlzTXprdU5UZ3pMRFEzTWk0NE1qWXNNekl1TlRBeUxEUTJOQzR3T1RNc016SXVOVEF5ZWlJdlBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFpHTXprMVFUc2lJR1E5SWswek5EQXVOVFV4TERNM05pNDBNelJJTVRjeExqUTBPV010Tnk0eU9UY3NNQzB4TXk0eU1USXROUzQ1TVRVdE1UTXVNakV5TFRFekxqSXhNbll0TWpRdU1EYzREUW9KWXpBdE55NHlPVGNzTlM0NU1UVXRNVE11TWpFeUxERXpMakl4TWkweE15NHlNVEpvTVRZNUxqRXdNbU0zTGpJNU55d3dMREV6TGpJeE1pdzFMamt4TlN3eE15NHlNVElzTVRNdU1qRXlkakkwTGpBM09BMEtDVU16TlRNdU56WXpMRE0zTUM0MU1UZ3NNelEzTGpnME9Dd3pOell1TkRNMExETTBNQzQxTlRFc016YzJMalF6TkhvaUx6NE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5FT0RFNU5ESTdJaUJrUFNKTk16UXdMalUxTWl3ek1qVXVPVE15YUMweU9DNDRNRFpqTnk0eU9UWXNNQ3d4TXk0eU1URXNOUzQ1TVRZc01UTXVNakV4TERFekxqSXhNM1l5TkM0d056Y05DZ2xqTUN3M0xqSTVOeTAxTGpreE5Td3hNeTR5TVRNdE1UTXVNakV4TERFekxqSXhNMmd5T0M0NE1EWmpOeTR5T1RZc01Dd3hNeTR5TVRFdE5TNDVNVFlzTVRNdU1qRXhMVEV6TGpJeE0zWXRNalF1TURjM0RRb0pRek0xTXk0M05qTXNNek14TGpnME55d3pORGN1T0RRNExETXlOUzQ1TXpJc016UXdMalUxTWl3ek1qVXVPVE15ZWlJdlBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJekE0T0VGR1Jqc2lJR1E5SWswNU15NDFOVElzTXpJdU5UQXlkakUwTkM0eU9UWmpNQ3d4T0M0NE1URXNNVFV1TWpRM0xETTBMakExT1N3ek5DNHdOVFVzTXpRdU1EVTViREFzTUEwS0NXTXhPQzQ0TURnc01Dd3pOQzR3TlRZdE1UVXVNalE1TERNMExqQTFOaTB6TkM0d05UbDJMVGN1TURBMll6QXRNVGd1T0RFc01UVXVNalEzTFRNMExqQTFPU3d6TkM0d05UVXRNelF1TURVNWJEQXNNR014T0M0NE1EZ3NNQ3d6TkM0d05UWXNNVFV1TWpRNUxETTBMakExTml3ek5DNHdOVGtOQ2dsMk5URXVOak0xWXpBc01UZ3VPREV4TERFMUxqSTBOeXd6TkM0d05Ua3NNelF1TURVMUxETTBMakExT1d3d0xEQmpNVGd1T0RBNExEQXNNelF1TURVMUxURTFMakkwT1N3ek5DNHdOVFV0TXpRdU1EVTVkaTA1Tnk0ME16a05DZ2xqTUN3eE9DNDRNVEVzTVRVdU1qUTNMRE0wTGpBMkxETTBMakExTlN3ek5DNHdObXd3TERCak1UZ3VPREE0TERBc016UXVNRFUxTFRFMUxqSTBPU3d6TkM0d05UVXRNelF1TURaV016SXVOVEF5U0RrekxqVTFNbm9pTHo0TkNqeG5QZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNd01EYzJRMFU3SWlCa1BTSk5NamszTGpnNE5Td3hNak11T1RnNFl5MHhOUzQ1TURrc01DMHlPQzQ0TURZc01USXVPRGs1TFRJNExqZ3dOaXd5T0M0NE1YWTJPQzQyTTJNd0xERXpMalkyTVMwNExqQTBOU3d5TlM0ME16Y3RNVGt1TmpVeUxETXdMamcyTkEwS0NRbGpOQzR6TnpVc01pNHdORFlzT1M0eU5UUXNNeTR4T1RVc01UUXVOREF6TERNdU1UazFiREFzTUdNeE9DNDRNRGdzTUN3ek5DNHdOVFV0TVRVdU1qUTVMRE0wTGpBMU5TMHpOQzR3TlRsV01USXpMams0T0V3eU9UY3VPRGcxTERFeU15NDVPRGg2SWk4K0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJekF3TnpaRFJUc2lJR1E5SWsweE5qWXVPVEV5TERFek5TNDNNekpqTFRFNExqZ3dPQ3d3TFRNMExqQTFOU3d4TlM0eU5Ea3RNelF1TURVMUxETTBMakEyZGpjdU1EQTJZekFzTVRNdU5qWXhMVGd1TURRMUxESTFMalF6TnkweE9TNDJOVElzTXpBdU9EWTBEUW9KQ1dNMExqTTNOaXd5TGpBME5pdzVMakkxTkN3ekxqRTVOU3d4TkM0ME1ETXNNeTR4T1RWak1UZ3VPREE0TERBc016UXVNRFUyTFRFMUxqSTBPU3d6TkM0d05UWXRNelF1TURVNWRpMDNMakF3Tm1Nd0xURXpMalkyTVN3NExqQTBOUzB5TlM0ME16Y3NNVGt1TmpVeUxUTXdMamcyTkEwS0NRbERNVGMyTGprek9Td3hNell1T0RneUxERTNNaTR3TmpFc01UTTFMamN6TWl3eE5qWXVPVEV5TERFek5TNDNNeko2SWk4K0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJekF3TnpaRFJUc2lJR1E5SWswek16Y3VNVGc1TERNeUxqVXdNblk1TVM0ME9EWmpNQ3d4TXk0Mk5qRXRPQzR3TkRVc01qVXVORE0zTFRFNUxqWTFNaXd6TUM0NE5qUmpOQzR6TnpVc01pNHdORFlzT1M0eU5UUXNNeTR4T1RVc01UUXVOREF6TERNdU1UazFEUW9KQ1d3d0xEQmpNVGd1T0RBNExEQXNNelF1TURVMUxURTFMakkwT1N3ek5DNHdOVFV0TXpRdU1EVTVWak15TGpVd01rZ3pNemN1TVRnNWVpSXZQZzBLUEM5blBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJekExTVVNeFFqc2lJR1E5SWswME9EY3VOREExTERVMUxqTTFOM1l0Tnk0d05ESmpNQzB4TWk0NE5UVXRNVEF1TkRVNExUSXpMak14TXkweU15NHpNVE10TWpNdU16RXphQzA1T0M0d09UZElPVE11TlRVeVNEUTNMamt3T0EwS0NXTXRNVEl1T0RVMUxEQXRNak11TXpFekxERXdMalExT0MweU15NHpNVE1zTWpNdU16RXpkamN1TURReVF6RXdMalE0T0N3MU9DNDROak1zTUN3M01TNDJNeklzTUN3NE5pNDRNWFk0TlM0d01ESmpNQ3cwTkM0M01USXNNVFl1TURRNExEZzNMamsyT1N3ME5TNHhPRGdzTVRJeExqZ3dNZzBLQ1dNeUxqQTFNaXd5TGpNNE1pdzBMakUyTlN3MExqY3dNU3cyTGpNeU5TdzJMamsyT0hZNE1TNDNPVFZqTUN3MExqRTBNaXd6TGpNMU9DdzNMalVzTnk0MUxEY3VOWE0zTGpVdE15NHpOVGdzTnk0MUxUY3VOWFl0TmpjdU5qa3pEUW9KWXpJMExqRTFOQ3d5TUM0ek1qY3NOVE11TVRRNExETTBMakk1T1N3NE5DNHlNalFzTkRBdU16YzRkamd1TVRaak1Dd3hNUzQwTWl3NUxqSTVNaXd5TUM0M01USXNNakF1TnpFeUxESXdMamN4TW1neE5qa3VNVEF5WXpFeExqUXlNU3d3TERJd0xqY3hNaTA1TGpJNU1pd3lNQzQzTVRJdE1qQXVOekV5RFFvSmRpMDRMakUyWXpNeExqQTNOeTAyTGpBNExEWXdMakEzTVMweU1DNHdOVElzT0RRdU1qSTFMVFF3TGpNM09YWXhNamt1TnpNell6QXNNVFV1TWpBNUxURXlMak0zTWl3eU55NDFPRE10TWpjdU5UZ3NNamN1TlRnelNEazBMakE1TXcwS0NXTXRNVFV1TWpBNExEQXRNamN1TlRndE1USXVNemMwTFRJM0xqVTRMVEkzTGpVNE0zWXRNekV1TnpFeFl6QXROQzR4TkRJdE15NHpOVGd0Tnk0MUxUY3VOUzAzTGpWekxUY3VOU3d6TGpNMU9DMDNMalVzTnk0MWRqTXhMamN4TVEwS0NXTXdMREl6TGpRNExERTVMakV3TVN3ME1pNDFPRE1zTkRJdU5UZ3NOREl1TlRnemFETXlNeTQ0TVRSak1qTXVORGM1TERBc05ESXVOVGd0TVRrdU1UQXpMRFF5TGpVNExUUXlMalU0TTFZek1EQXVOVGhqTWk0eE5pMHlMakkyTnl3MExqSTNNeTAwTGpVNE5TdzJMak15TkMwMkxqazJOdzBLQ1VNME9UVXVPVFV5TERJMU9TNDNPREVzTlRFeUxESXhOaTQxTWpNc05URXlMREUzTVM0NE1USldPRFl1T0RGRE5URXlMRGN4TGpZek1pdzFNREV1TlRFeUxEVTRMamcyTXl3ME9EY3VOREExTERVMUxqTTFOM29nVFRRM01pNDBNRFVzTkRndU16RTFkakkyTGpZeU13MEtDV013TERRdU5UZzBMVE11TnpJNUxEZ3VNekV6TFRndU16RXpMRGd1TXpFemFDMDVNQzQxT1RkMkxUUXpMakkxYURrd0xqVTVOME0wTmpndU5qYzNMRFF3TGpBd01pdzBOekl1TkRBMUxEUXpMamN6TVN3ME56SXVOREExTERRNExqTXhOWG9nVFRNMU9DNDBPVFlzT1RBdU56VXlkak16TGpJek5nMEtDV013TERFMExqWTBOUzB4TVM0NU1UTXNNall1TlRZdE1qWXVOVFUyTERJMkxqVTJjeTB5Tmk0MU5UWXRNVEV1T1RFMUxUSTJMalUxTmkweU5pNDFObU13TFRRdU1UUXlMVE11TXpVM0xUY3VOUzAzTGpVdE55NDFjeTAzTGpVc015NHpOVGd0Tnk0MUxEY3VOWFk1Tnk0ME16a05DZ2xqTUN3eE5DNDJORFV0TVRFdU9URXpMREkyTGpVMU9TMHlOaTQxTlRZc01qWXVOVFU1Y3kweU5pNDFOVFl0TVRFdU9URTFMVEkyTGpVMU5pMHlOaTQxTlRsMkxUVXhMall6TldNd0xUSXlMamt4TmkweE9DNDJOREl0TkRFdU5UWXROREV1TlRVMUxUUXhMalUyRFFvSll5MHlNaTQ1TVRRc01DMDBNUzQxTlRZc01UZ3VOalEwTFRReExqVTFOaXcwTVM0MU5uWTNMakF3TldNd0xERTBMalkwTlMweE1TNDVNVE1zTWpZdU5UWXRNall1TlRVMkxESTJMalUyY3kweU5pNDFOVFV0TVRFdU9URTFMVEkyTGpVMU5TMHlOaTQxTmxZNU1DNDNOVEoyTFRVd0xqYzFEUW9KYURJMU55NDBORFIyTlRBdU56VklNelU0TGpRNU5ub2dUVE01TGpVNU5TdzBPQzR6TVRWak1DMDBMalU0TkN3ekxqY3lPUzA0TGpNeE15dzRMak14TXkwNExqTXhNMmd6T0M0eE5EUjJORE11TWpWSU5EY3VPVEE0WXkwMExqVTROQ3d3TFRndU16RXpMVE11TnpJNUxUZ3VNekV6TFRndU16RXpEUW9KVmpRNExqTXhOWG9nVFRFMUxERTNNUzQ0TVRKV09EWXVPREZqTUMwMkxqYzVMRE11T1RFeExURXlMalkzTnl3NUxqVTVOUzB4TlM0MU5EWjJNeTQyTnpWak1Dd3hNaTQ0TlRVc01UQXVORFU0TERJekxqTXhNeXd5TXk0ek1UTXNNak11TXpFemFETXVOakExZGpFM09TNDRPVFVOQ2dsRE1qZ3VORGt5TERJME9DNDRNVFlzTVRVc01qRXhMamd5T1N3eE5Td3hOekV1T0RFeWVpQk5NelF3TGpVMU1Td3pOamd1T1RNMFNERTNNUzQwTkRsakxUTXVNVFE1TERBdE5TNDNNVEl0TWk0MU5qTXROUzQzTVRJdE5TNDNNVEoyTFRFekxqQXpOUTBLQ1dNd0xqQTROQzB3TGpRMU1Td3dMakV6Tnkwd0xqa3hMREF1TVRNM0xURXVNemMzZGkwNUxqYzRNMk13TFRFdU56VXhMREF1TnprMUxUTXVNekU0TERJdU1EUXlMVFF1TXpZMFl6QXVPVGN6TFRBdU56WTVMREl1TVRrNUxURXVNak15TERNdU5UTXpMVEV1TWpNeWFERTJPUzR4TURJTkNnbGpNUzR6TXpRc01Dd3lMalUyTERBdU5EWXpMRE11TlRNMExERXVNak16WXpFdU1qUTJMREV1TURRMUxESXVNRFF5TERJdU5qRXpMREl1TURReUxEUXVNell6ZGprdU56Z3pZekFzTUM0ME5qWXNNQzR3TlRJc01DNDVNallzTUM0eE16Y3NNUzR6TnpkMk1UTXVNRE0xRFFvSlF6TTBOaTR5TmpNc016WTJMak0zTVN3ek5ETXVOeXd6TmpndU9UTTBMRE0wTUM0MU5URXNNelk0TGprek5Ib2dUVFE1Tnl3eE56RXVPREV5WXpBc05EQXVNREUzTFRFekxqUTVNaXczTnk0d01EUXRNell1TlRFekxERXdOaTR6TXpOMkxURXhPQzR5TncwS0NXTXdMVFF1TVRReUxUTXVNelUzTFRjdU5TMDNMalV0Tnk0MWN5MDNMalVzTXk0ek5UZ3ROeTQxTERjdU5YWXhNelF1T1RoakxUSXlMall3Tnl3eU1pNHdOelF0TlRFdU5EYzVMRE0zTGprNE9DMDROQzR5TWpVc05EUXVPVEUxZGkwd0xqWXlOdzBLQ1dNd0xUWXVORFkzTFRJdU9UZ3pMVEV5TGpJME55MDNMalkwTVMweE5pNHdORGxqTFRNdU5UZ3pMVEl1T1RjeUxUZ3VNVGd0TkM0M05qRXRNVE11TVRnNExUUXVOell4U0RFM01TNDFOamRqTFRVdU1EQTRMREF0T1M0Mk1EUXNNUzQzT1MweE15NHhPRGdzTkM0M05qRU5DZ2xqTFRRdU5qVTVMRE11T0RBeExUY3VOalF5TERrdU5UZ3lMVGN1TmpReUxERTJMakEwT1hZd0xqWXlOMk10TXpJdU56UTJMVFl1T1RJM0xUWXhMall4TmkweU1pNDROREV0T0RRdU1qSTBMVFEwTGpreE5WWTVPQzR5TlRKb01Ua3VOVE00ZGpjNExqVTBOZzBLQ1dNd0xESXlMamt4Tml3eE9DNDJORElzTkRFdU5UWXNOREV1TlRVMUxEUXhMalUyWXpJeUxqa3hOQ3d3TERReExqVTFOaTB4T0M0Mk5EUXNOREV1TlRVMkxUUXhMalUyZGkwM0xqQXdOV013TFRFMExqWTBOU3d4TVM0NU1UTXRNall1TlRZc01qWXVOVFUyTFRJMkxqVTJEUW9KY3pJMkxqVTFOU3d4TVM0NU1UVXNNall1TlRVMUxESTJMalUyZGpVeExqWXpOV013TERJeUxqa3hOaXd4T0M0Mk5ESXNOREV1TlRVNUxEUXhMalUxTml3ME1TNDFOVGx6TkRFdU5UVTJMVEU0TGpZME15dzBNUzQxTlRZdE5ERXVOVFU1ZGkwMk5TNDBPVFlOQ2dsak55NHlNRFlzTmk0d01ESXNNVFl1TkRZM0xEa3VOakUyTERJMkxqVTFOaXc1TGpZeE5tTXlNaTQ1TVRRc01DdzBNUzQxTlRZdE1UZ3VOalEwTERReExqVTFOaTAwTVM0MU5sWTVPQzR5TlRKb056RXVPVGt4ZGpNeExqUTVPV013TERRdU1UUXlMRE11TXpVM0xEY3VOU3czTGpVc055NDFEUW9KY3pjdU5TMHpMak0xT0N3M0xqVXROeTQxVmprNExqSTFNbWd6TGpZd05XTXhNaTQ0TlRRc01Dd3lNeTR6TVRNdE1UQXVORFU0TERJekxqTXhNeTB5TXk0ek1UTjJMVE11TmpjMVl6VXVOamcwTERJdU9EWTVMRGt1TlRrMUxEZ3VOelUyTERrdU5UazFMREUxTGpVME5uWTROUzR3TURKSU5EazNlaUl2UGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSk1ZWGxsY2w4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lOQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJRGd3TUNBNE1EQWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEZ3dNQ0E0TURBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4blBnMEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5GUkRGR016UTdJaUJrUFNKTk1qUXVPREEzTERZME5pNHhObFl4TlRNdU9ETTRhRGMxTUM0ek9EZDJOREF4WXpBc05pNDFOak1zTlM0ek5Dd3hNUzQ1TURNc01URXVPVEF6TERFeExqa3dNMmd4ZGpJM0xqZ3dOMmd0TVEwS0NRbGpMVFl1TlRZekxEQXRNVEV1T1RBekxEVXVNelF0TVRFdU9UQXpMREV4TGprd01uWXpPUzQzTVVneU5DNDRNRGQ2SUUweU56TXVORE0xTERRek5TNHhPR010TkM0ME9UTXNNQzA0TGpjeE55d3hMamMxTFRFeExqZzVOQ3cwTGpreU9BMEtDUWxqTFRNdU1UYzNMRE11TVRjMkxUUXVPVEkyTERjdU16azVMVFF1T1RJMkxERXhMamc1TTJNd0xEUXVORGt5TERFdU56VXNPQzQzTVRjc05DNDVNallzTVRFdU9EazFZek11TVRjM0xETXVNVGMzTERjdU5EQXhMRFF1T1RJM0xERXhMamc1TkN3MExqa3lOdzBLQ1Fsak5DNDBPVElzTUN3NExqY3hOaTB4TGpjMUxERXhMamc1TXkwMExqa3lOMk16TGpFM055MHpMakUzT0N3MExqa3lOeTAzTGpRd01pdzBMamt5TnkweE1TNDRPVFZqTUMwMExqUTVNeTB4TGpjMUxUZ3VOekUzTFRRdU9USTNMVEV4TGpnNU13MEtDUWxETWpneUxqRTFNU3cwTXpZdU9UTXNNamMzTGpreU55dzBNelV1TVRnc01qY3pMalF6TlN3ME16VXVNVGg2SUUweU1EQXVORElzTkRFeExqWXpOR014TGprek5pd3hMakkyTERRdU1UYzVMREV1T1RJMkxEWXVORGc1TERFdU9USTJEUW9KQ1dNeUxqVXlPU3d3TERRdU9UUTVMVEF1TnpnM0xEWXVPVGs0TFRJdU1qYzFZek11T1RZeUxUSXVPRGMzTERVdU56Y3hMVGN1T1RnNExEUXVOUzB4TWk0M01UbHNMVEV4TGprNE1TMDBOQzQxT0RWc016VXVPRGs0TFRJNUxqQXlOdzBLQ1Fsak15NDRNRGd0TXk0d056Z3NOUzR6TkRrdE9DNHlOellzTXk0NE16WXRNVEl1T1RNMWN5MDFMamd4TmkwM0xqazFPQzB4TUM0M01EY3RPQzR5TVd3dE5EWXVNVEExTFRJdU16Z3hiQzB4Tmk0MU1URXRORE11TVRFeERRb0pDV010TVM0M05URXROQzQxTnpNdE5pNHlNVGt0Tnk0Mk5EVXRNVEV1TVRFMkxUY3VOalExY3kwNUxqTTJOQ3d6TGpBM01pMHhNUzR4TVRZc055NDJORFZzTFRFMkxqVXhNU3cwTXk0eE1URnNMVFEyTGpFd05Dd3lMak00TVEwS0NRbGpMVFF1T0RreExEQXVNalV5TFRrdU1Ua3pMRE11TlRVeUxURXdMamN3Tnl3NExqSXhZeTB4TGpVeE15dzBMalkxT0N3d0xqQXlPU3c1TGpnMU5Td3pMamd6Tml3eE1pNDVNek5zTXpVdU9EazVMREk1TGpBeU4yd3RNVEV1T1RneExEUTBMalU0TlEwS0NRbGpMVEV1TWpjeExEUXVOek1zTUM0MU16Z3NPUzQ0TkRFc05DNDFMREV5TGpjeE9XTXlMakEwTnl3eExqUTROeXcwTGpRMk55d3lMakkzTXl3MkxqazVPQ3d5TGpJM00yTXlMak14TERBc05DNDFOVFF0TUM0Mk5qVXNOaTQwT0RrdE1TNDVNalZzTXpndU5qazVMVEkxTGpFM013MEtDUWxNTWpBd0xqUXlMRFF4TVM0Mk16UjZJRTB6TVRRdU16RXpMRE0yTkM0ek5UUmpMVGN1TlRnNUxEQXRNVFF1TWpZekxEVXVNVEkzTFRFMkxqSXpMREV5TGpRMk9HTXRNUzR4TmpNc05DNHpNemt0TUM0MU5qY3NPQzQ0TnpFc01TNDJOemdzTVRJdU56WU5DZ2tKWXpJdU1qUTJMRE11T0RnNUxEVXVPRGN6TERZdU5qY3lMREV3TGpJeE1pdzNMamd6TldNeExqUXpMREF1TXpnekxESXVPRGs1TERBdU5UYzRMRFF1TXpZMUxEQXVOVGM0WXpjdU5UZzVMREFzTVRRdU1qWTBMVFV1TVRJM0xERTJMakl6TVMweE1pNDBOamdOQ2drSll6SXVNems1TFRndU9UVTJMVEl1T1RNMUxURTRMakU1TlMweE1TNDRPVEV0TWpBdU5UazJRek14Tnk0eU5EY3NNelkwTGpVME9Td3pNVFV1TnpjNExETTJOQzR6TlRRc016RTBMak14TXl3ek5qUXVNelUwZWlCTk16RTBMak16TkN3eU9ESXVOVGMwRFFvSkNXTXRNUzQwTmpZc01DMHlMamt6TkN3d0xqRTVOQzAwTGpNMk5Dd3dMalUzT0dNdE9DNDVOVFlzTWk0ME1ERXRNVFF1TWprc01URXVOalF0TVRFdU9Ea3NNakF1TlRrMll6RXVPVFkzTERjdU16UXNPQzQyTkRJc01USXVORFkzTERFMkxqSXpNeXd4TWk0ME5qY05DZ2tKWXpFdU5EWTFMREFzTWk0NU16TXRNQzR4T1RRc05DNHpOak10TUM0MU56ZGpOQzR6TXprdE1TNHhOaklzTnk0NU5qVXRNeTQ1TkRRc01UQXVNakV4TFRjdU9ETTBjekl1T0RReUxUZ3VOREl5TERFdU5qYzVMVEV5TGpjMk1nMEtDUWxETXpJNExqVTVPU3d5T0RjdU56QXhMRE15TVM0NU1qUXNNamd5TGpVM05Dd3pNVFF1TXpNMExESTRNaTQxTnpSNklFMHlOek11TkRNMUxESXhNUzQzTlRKakxUUXVORGt6TERBdE9DNDNNVGNzTVM0M05TMHhNUzQ0T1RRc05DNDVNamdOQ2drSll5MHpMakUzTnl3ekxqRTNOaTAwTGpreU5pdzNMak01T1MwMExqa3lOaXd4TVM0NE9USnpNUzQzTlN3NExqY3hOeXcwTGpreU5pd3hNUzQ0T1RWek55NDBNREVzTkM0NU1qY3NNVEV1T0RrMExEUXVPVEkzWXpRdU5Ea3lMREFzT0M0M01UWXRNUzQzTlN3eE1TNDRPVE10TkM0NU1qY05DZ2tKWXpNdU1UYzNMVE11TVRjNExEUXVPVEkzTFRjdU5EQXlMRFF1T1RJM0xURXhMamc1TlhNdE1TNDNOUzA0TGpjeE5pMDBMamt5TnkweE1TNDRPVEpETWpneUxqRTFNU3d5TVRNdU5UQXlMREkzTnk0NU1qY3NNakV4TGpjMU1pd3lOek11TkRNMUxESXhNUzQzTlRKNklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBWRU1VWXpORHNpSUdROUlrMDNOelF1TVRrekxEVTFOQzQ0TXpoMkxUUXdNRWd5TlM0NE1EZFdOalExTGpFMmFEYzBPQzR6T0RkMkxUTTRMamN4WXpBdE55NHhNamNzTlM0M056VXRNVEl1T1RBeUxERXlMamt3TXkweE1pNDVNREoyTFRJMUxqZ3dOdzBLQ1FsRE56YzVMamsyT1N3MU5qY3VOelF4TERjM05DNHhPVE1zTlRZeExqazJOaXczTnpRdU1Ua3pMRFUxTkM0NE16aDZJRTB5TkRJdU9UVXlMRE15TlM0M016RnNMVE0xTGpNNU1pd3lPQzQyTVRoc01URXVPREV6TERRekxqazFOdzBLQ1Fsak1TNHpPRGNzTlM0eE5qSXRNQzQxTlRJc01UQXVOalEyTFRRdU9EYzNMREV6TGpjNE9HTXRNaTR5TlRjc01TNDJOQzAwTGpreE9Dd3lMalEyTmkwM0xqVTROU3d5TGpRMk5tTXRNaTQwTkRVc01DMDBMamc1TVMwd0xqWTVNaTAzTGpBek5TMHlMakE0T0d3dE16Z3VNVFUwTFRJMExqZ3lEUW9KQ1d3dE16Z3VNVFUwTERJMExqZ3hPR010TkM0ME9Dd3lMamt4TlMweE1DNHlPVFVzTWk0M05qWXRNVFF1TmpJdE1DNHpOemhqTFRRdU16STFMVE11TVRReUxUWXVNalkwTFRndU5qSTJMVFF1T0RjM0xURXpMamM0T0d3eE1TNDRNVE10TkRNdU9UVTNiQzB6TlM0ek9UVXRNamd1TmpFNERRb0pDV010TkM0eE5UY3RNeTR6TmkwMUxqZ3hMVGd1T1RNMkxUUXVNVFU1TFRFMExqQXlZekV1TmpVeUxUVXVNRGcwTERZdU1qWTRMVGd1TmpJMUxERXhMall3TmkwNExqbHNORFV1TkRVMUxUSXVNelE0YkRFMkxqSTNPUzAwTWk0MU1ETU5DZ2tKWXpFdU9URXlMVFF1T1RreExEWXVOekExTFRndU1qZzNMREV5TGpBMUxUZ3VNamczWXpVdU16UTJMREFzTVRBdU1UTTVMRE11TWprMkxERXlMakExTERndU1qZzNiREUyTGpJM09DdzBNaTQxTUROc05EVXVORFUyTERJdU16UTREUW9KQ1dNMUxqTXpPQ3d3TGpJM05TdzVMamsxTlN3ekxqZ3hOaXd4TVM0Mk1EWXNPQzQ1UXpJME9DNDNOaklzTXpFMkxqYzVOU3d5TkRjdU1UQTVMRE15TWk0ek56SXNNalF5TGprMU1pd3pNalV1TnpNeGVpQk5NamcyTGpBek5TdzBOalF1TmpBeURRb0pDV010Tmk0NU5Ua3NOaTQ1TlRrdE1UZ3VNalF5TERZdU9UVTVMVEkxTGpJd01Td3dZeTAyTGprMU9TMDJMamsyTVMwMkxqazFPUzB4T0M0eU5EUXNNQzB5TlM0eU1ERmpOaTQ1TlRrdE5pNDVOakVzTVRndU1qUXlMVFl1T1RZeExESTFMakl3TVN3d0RRb0pDVU15T1RJdU9UazFMRFEwTmk0ek5UY3NNamt5TGprNU5TdzBOVGN1TmpReExESTROaTR3TXpVc05EWTBMall3TW5vZ1RUSTROaTR3TXpVc01qUXhMakUzTkdNdE5pNDVOVGtzTmk0NU5Ua3RNVGd1TWpReUxEWXVPVFU1TFRJMUxqSXdNU3d3RFFvSkNXTXROaTQ1TlRrdE5pNDVOaTAyTGprMU9TMHhPQzR5TkRNc01DMHlOUzR5TURGak5pNDVOVGt0Tmk0NU5qRXNNVGd1TWpReUxUWXVPVFl4TERJMUxqSXdNU3d3UXpJNU1pNDVPVFVzTWpJeUxqa3pNU3d5T1RJdU9UazFMREl6TkM0eU1UTXNNamcyTGpBek5Td3lOREV1TVRjMGVnMEtDUWtnVFRNek1TNDFNelFzTXpnMUxqYzROMk10TWk0MU5EY3NPUzQxTURNdE1USXVNekUxTERFMUxqRTBOUzB5TVM0NE1pd3hNaTQxT1RkakxUa3VOVEEyTFRJdU5UUTRMVEUxTGpFME5pMHhNaTR6TVRVdE1USXVOVGszTFRJeExqZ3lEUW9KQ1dNeUxqVTBOeTA1TGpVd05Td3hNaTR6TVRVdE1UVXVNVFExTERJeExqZ3lMVEV5TGpVNU4wTXpNamd1TkRReUxETTJOaTQxTVRRc016TTBMakE0TERNM05pNHlPRE1zTXpNeExqVXpOQ3d6T0RVdU56ZzNlaUJOTXpFNExqa3pOaXd6TVRZdU5qQXpEUW9KQ1dNdE9TNDFNRFFzTWk0MU5EWXRNVGt1TWpjMExUTXVNRGt6TFRJeExqZ3lNUzB4TWk0MU9UZHpNeTR3T1RNdE1Ua3VNamN5TERFeUxqVTVOeTB5TVM0NE1uTXhPUzR5TnpNc015NHdPVFVzTWpFdU9ESXNNVEl1TlRrM0RRb0pDVU16TXpRdU1EZ3NNekEwTGpJNE9Dd3pNamd1TkRRc016RTBMakExT1N3ek1UZ3VPVE0yTERNeE5pNDJNRE42SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVGMzTkM0eE9UTXNOakEyTGpRMWRqTTRMamN4U0RJMUxqZ3dOMVl4TlRRdU9ETTRhRGMwT0M0ek9EZDJOREF3WXpBc055NHhNamdzTlM0M056VXNNVEl1T1RBekxERXlMamt3TXl3eE1pNDVNRE5UT0RBd0xEVTJNUzQ1TmpZc09EQXdMRFUxTkM0NE16aFdNVFF4TGprek5RMEtDUWxqTUMwM0xqRXlPQzAxTGpjM05TMHhNaTQ1TURNdE1USXVPVEF6TFRFeUxqa3dNMGd4TWk0NU1ETkROUzQzTnpjc01USTVMakF6TVN3d0xERXpOQzQ0TURjc01Dd3hOREV1T1RNMWRqVXhOaTR4TWpsak1DdzNMakV5T0N3MUxqYzNOeXd4TWk0NU1ETXNNVEl1T1RBekxERXlMamt3TXcwS0NRbG9OemMwTGpFNU0yTTNMakV5T0N3d0xERXlMamt3TXkwMUxqYzNOU3d4TWk0NU1ETXRNVEl1T1RBemRpMDFNUzQyTVROak1DMDNMakV5TnkwMUxqYzNOUzB4TWk0NU1ESXRNVEl1T1RBekxURXlMamt3TWxNM056UXVNVGt6TERVNU9TNHpNak1zTnpjMExqRTVNeXcyTURZdU5EVjZJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdSVEF3TURzaUlHUTlJazB4TmpndU1qQTRMRE0yTWk0eU9ETmpMVEV1T1RNMUxURXVNall0TkM0eE56Z3RNUzQ1TWpVdE5pNDBPRGt0TVM0NU1qVnpMVFF1TlRVMUxEQXVOalkyTFRZdU5EZzVMREV1T1RJMWJDMHhPUzR4TXpnc01USXVORFE0RFFvSkNXdzFMamt5TkMweU1pNHdORGhqTVM0eU1qRXROQzQxTkRJdE1DNHpOVFF0T1M0ek9EY3ROQzR3TVRFdE1USXVNelExYkMweE55NDNOVFV0TVRRdU16VTJiREl5TGpnd01pMHhMakUzTjJNMExqWTVPQzB3TGpJME5DdzRMamd5TFRNdU1qTTVMREV3TGpVd01pMDNMall6TVEwS0NRbHNPQzR4TmpjdE1qRXVNekU1YkRndU1UWTNMREl4TGpNeE4yTXhMalk0TXl3MExqTTVNeXcxTGpnd05DdzNMak00T1N3eE1DNDBPVGtzTnk0Mk16TnNNakl1T0RBeUxERXVNVGMzYkMweE55NDNOVFVzTVRRdU16VTJEUW9KQ1dNdE15NDJOVGNzTWk0NU5UZ3ROUzR5TXpFc055NDRNRE10TkM0d01Td3hNaTR6TkRSc05TNDVNalFzTWpJdU1EUTRUREUyT0M0eU1EZ3NNell5TGpJNE0zb2lMejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkZNREF3T3lJZ1pEMGlUVEUyT0M0NU5UTXNNekUzTGpVemJDMDNMakl6TXkweE9DNDRPR3d0Tnk0eU16SXNNVGd1T0RneFl5MHhMamd5TlN3MExqYzJOaTAyTGpJNE9DdzRMakF3TnkweE1TNHpPRFFzT0M0eU56SnNMVEl3TGpFNU5Dd3hMakEwTWcwS0NRbHNNVFV1TnpJMUxERXlMamN4TkdNekxqazJOeXd6TGpJd09DdzFMalkzTWl3NExqUTFOQ3cwTGpNME9Dd3hNeTR6T0RGc0xUVXVNalEzTERFNUxqVXlOMnd4Tmk0NU5TMHhNUzR3TWpSak1pNHhNemd0TVM0ek9USXNOQzQxT0RZdE1pNHdPRGNzTnk0d016VXRNaTR3T0RjTkNna0pjelF1T0RrMkxEQXVOamsxTERjdU1ETTFMREl1TURnM2JERTJMamsxTERFeExqQXlOR3d0TlM0eU5EY3RNVGt1TlRJM1l5MHhMak15TlMwMExqa3lOeXd3TGpNNExURXdMakUzTXl3MExqTTBOeTB4TXk0ek9ERnNNVFV1TnpJMUxURXlMamN4Tkd3dE1qQXVNVGswTFRFdU1EUXlEUW9KQ1VNeE56VXVNalFzTXpJMUxqVXpPU3d4TnpBdU56YzRMRE15TWk0eU9UWXNNVFk0TGprMU15d3pNVGN1TlRONklpOCtEUW9KUEhCaGRHZ2daRDBpVFRJek5TNDFNRFFzTXpBeUxqZ3hNbXd0TkRVdU5EVTJMVEl1TXpRNVRERTNNeTQzTnl3eU5UY3VPVFpqTFRFdU9URXlMVFF1T1RreExUWXVOekExTFRndU1qZzRMVEV5TGpBMUxUZ3VNamc0Y3kweE1DNHhNemdzTXk0eU9UWXRNVEl1TURVc09DNHlPRGdOQ2drSmJDMHhOaTR5Tnprc05ESXVOVEF6YkMwME5TNDBOVFVzTWk0ek5EbGpMVFV1TXpNNUxEQXVNamMxTFRrdU9UVTFMRE11T0RFMkxURXhMall3Tml3NExqbGpMVEV1TmpVeUxEVXVNRGd6TERBdU1EQXhMREV3TGpZMkxEUXVNVFU0TERFMExqQXliRE0xTGpNNU15d3lPQzQyTVRnTkNna0piQzB4TVM0NE1UTXNORE11T1RVM1l5MHhMak00Tnl3MUxqRTJNaXd3TGpVMU1pd3hNQzQyTkRZc05DNDROemNzTVRNdU56ZzRZelF1TXpJekxETXVNVFEwTERFd0xqRTBMRE11TWprekxERTBMall5TERBdU16YzRiRE00TGpFMU5DMHlOQzQ0TW13ek9DNHhOVFFzTWpRdU9ERTREUW9KQ1dNeUxqRTBOQ3d4TGpNNU5pdzBMalU1TERJdU1EZzRMRGN1TURNMUxESXVNRGc0WXpJdU5qWTNMREFzTlM0ek1qZ3RNQzQ0TWpRc055NDFPRFV0TWk0ME5qWmpOQzR6TWpVdE15NHhORElzTmk0eU5qUXRPQzQyTWpZc05DNDROemN0TVRNdU56ZzRiQzB4TVM0NE1UTXRORE11T1RVM0RRb0pDV3d6TlM0ek9UTXRNamd1TmpFNFl6UXVNVFUzTFRNdU16WXNOUzQ0TVMwNExqa3pOaXcwTGpFMU9DMHhOQzR3TWtNeU5EVXVORFU1TERNd05pNDJNamdzTWpRd0xqZzBNeXd6TURNdU1EZzNMREl6TlM0MU1EUXNNekF5TGpneE1ub2dUVEU0TkM0NE1EVXNNek01TGpVMU9RMEtDUWxqTFRNdU9UWTNMRE11TWpBNExUVXVOamN5TERndU5EVTBMVFF1TXpRNExERXpMak00TVd3MUxqSTBPQ3d4T1M0MU1qZHNMVEUyTGprMUxURXhMakF5TkdNdE1pNHhNemt0TVM0ek9USXROQzQxT0RjdE1pNHdPRGN0Tnk0d016VXRNaTR3T0RjTkNna0pjeTAwTGpnNU5pd3dMalk1TlMwM0xqQXpOU3d5TGpBNE4yd3RNVFl1T1RVc01URXVNREkwYkRVdU1qUTRMVEU1TGpVeU4yTXhMak15TlMwMExqa3lOeTB3TGpNNExURXdMakUzTXkwMExqTTBPQzB4TXk0ek9ERnNMVEUxTGpjeU5TMHhNaTQzTVRSc01qQXVNVGswTFRFdU1EUXlEUW9KQ1dNMUxqQTVOaTB3TGpJMk15dzVMalUxT1MwekxqVXdOaXd4TVM0ek9EUXRPQzR5TnpKc055NHlNekV0TVRndU9EaHNOeTR5TXpNc01UZ3VPRGd4WXpFdU9ESTFMRFF1TnpZMkxEWXVNamc0TERndU1EQTNMREV4TGpNNE5DdzRMakkzTW13eU1DNHhPVFFzTVM0d05ESU5DZ2tKVERFNE5DNDRNRFVzTXpNNUxqVTFPWG9pTHo0TkNnazhZMmx5WTJ4bElITjBlV3hsUFNKbWFXeHNPaU5HUmtVd01EQTdJaUJqZUQwaU16RTBMak15TkNJZ1kzazlJakk1T1M0ek9UVWlJSEk5SWpFM0xqZ3hOU0l2UGcwS0NUeGphWEpqYkdVZ2MzUjViR1U5SW1acGJHdzZJMFpHUlRBd01Ec2lJR040UFNJeU56TXVORE0xSWlCamVUMGlNakk0TGpVM01pSWdjajBpTVRjdU9ESWlMejROQ2drOFkybHlZMnhsSUhOMGVXeGxQU0ptYVd4c09pTkdSa1V3TURBN0lpQmplRDBpTXpFMExqTXlOQ0lnWTNrOUlqTTRNUzR4TnpZaUlISTlJakUzTGpneE5TSXZQZzBLQ1R4amFYSmpiR1VnYzNSNWJHVTlJbVpwYkd3NkkwWkdSVEF3TURzaUlHTjRQU0l5TnpNdU5ETTFJaUJqZVQwaU5EVXlMakF3TVNJZ2NqMGlNVGN1T0RJaUx6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWtOaGNHRmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lEZ3dNQ0E0TURBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUVXhOaTR4TWprc01qUTFMakUyTVhZdE9UQXVNekl5U0RJNE15NDROekYyTkRrd0xqTXlNbWd5TXpJdU1qVTRWakk1Tmk0M056UmpNQzAzTGpFeU5pdzFMamMzTlMweE1pNDVNRE1zTVRJdU9UQXpMVEV5TGprd00zWXRNalV1T0RBM0RRb0pDVU0xTWpFdU9UQTBMREkxT0M0d05qUXNOVEUyTGpFeU9Td3lOVEl1TWpnM0xEVXhOaTR4TWprc01qUTFMakUyTVhvaUx6NE5DZ2s4Y21WamRDQjRQU0l5TkM0NE1EY2lJSGs5SWpFMU15NDRNemtpSUdacGJHdzlJaU14TmpSR1EwVWlJSGRwWkhSb1BTSXlNelF1TWpVNElpQm9aV2xuYUhROUlqUTVNaTR6TWpJaUx6NE5DZ2s4Y21WamRDQjRQU0l5TlM0NE1EY2lJSGs5SWpFMU5DNDRNemtpSUdacGJHdzlJaU14TmpSR1EwVWlJSGRwWkhSb1BTSXlNekl1TWpVNElpQm9aV2xuYUhROUlqUTVNQzR6TWpJaUx6NE5DZ2s4Y0dGMGFDQm1hV3hzUFNJalJVUXhSak0wSWlCa1BTSk5OVFF3TGprek5pdzJORFl1TVRZeFZqSTVOaTQzTnpSak1DMDJMalUyTXkwMUxqTTBMVEV4TGprd015MHhNUzQ1TURNdE1URXVPVEF6YUMweGRpMHlOeTQ0TURkb01RMEtDUWxqTmk0MU5qTXNNQ3d4TVM0NU1ETXROUzR6TkN3eE1TNDVNRE10TVRFdU9UQXpkaTA1TVM0ek1qSm9Nak0wTGpJMU9IWTBPVEl1TXpJeVNEVTBNQzQ1TXpaNklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVFUwTVM0NU16WXNNalExTGpFMk1XTXdMRGN1TVRJMkxUVXVOemMxTERFeUxqa3dNeTB4TWk0NU1ETXNNVEl1T1RBemRqSTFMamd3TjJNM0xqRXlPQ3d3TERFeUxqa3dNeXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6ZGpNME9DNHpPRGNOQ2drSmFESXpNaTR5TlRoV01UVTBMamd6T1VnMU5ERXVPVE0yVmpJME5TNHhOakY2SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVGM0Tnk0d09UY3NNVEk1TGpBek1rZ3hNaTQ1TURORE5TNDNOemNzTVRJNUxqQXpNaXd3TERFek5DNDRNU3d3TERFME1TNDVNeloyTlRFMkxqRXlPV013TERjdU1USTJMRFV1TnpjM0xERXlMamt3TXl3eE1pNDVNRE1zTVRJdU9UQXphRGMzTkM0eE9UTU5DZ2tKWXpjdU1USTRMREFzTVRJdU9UQXpMVFV1TnpjM0xERXlMamt3TXkweE1pNDVNRE5XTVRReExqa3pOa000TURBc01UTTBMamd4TERjNU5DNHlNalVzTVRJNUxqQXpNaXczT0RjdU1EazNMREV5T1M0d016SjZJRTAzTnpRdU1Ua3pMRFkwTlM0eE5qRklOVFF4TGprek5sWXlPVFl1TnpjMERRb0pDV013TFRjdU1USTJMVFV1TnpjMUxURXlMamt3TXkweE1pNDVNRE10TVRJdU9UQXpjeTB4TWk0NU1ETXNOUzQzTnpjdE1USXVPVEF6TERFeUxqa3dNM1l6TkRndU16ZzNTREk0TXk0NE56RldNVFUwTGpnek9XZ3lNekl1TWpVNGRqa3dMak15TWcwS0NRbGpNQ3czTGpFeU5pdzFMamMzTlN3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd00zTXhNaTQ1TURNdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd00zWXRPVEF1TXpJeWFESXpNaTR5TlRoV05qUTFMakUyTVhvZ1RUSTFMamd3Tnl3eE5UUXVPRE01YURJek1pNHlOVGgyTkRrd0xqTXlNa2d5TlM0NE1EY05DZ2tKVmpFMU5DNDRNemw2SWk4K0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE5pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIZHBaSFJvUFNJNE1EQndlQ0lnYUdWcFoyaDBQU0k0TURCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURnd01DQTRNREFpSUdWdVlXSnNaUzFpWVdOclozSnZkVzVrUFNKdVpYY2dNQ0F3SURnd01DQTRNREFpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnMEtQR2MrRFFvSlBIQmhkR2dnWm1sc2JEMGlJMFpHUmtaR1JpSWdaRDBpVFRVeE5pNHhNamtzTWpRMUxqRTJNWFl0T1RBdU16SXlTREk0TXk0NE56RjJORGt3TGpNeU1tZ3lNekl1TWpVNFZqSTVOaTQzTnpSak1DMDNMakV5Tml3MUxqYzNOeTB4TWk0NU1ETXNNVEl1T1RBekxURXlMamt3TTNZdE1qVXVPREEzRFFvSkNVTTFNakV1T1RBMkxESTFPQzR3TmpRc05URTJMakV5T1N3eU5USXVNamczTERVeE5pNHhNamtzTWpRMUxqRTJNWG9pTHo0TkNnazhjbVZqZENCNFBTSXlOQzQ0TURjaUlIazlJakUxTXk0NE16a2lJR1pwYkd3OUlpTXlOVGt5TkRVaUlIZHBaSFJvUFNJeU16UXVNalU0SWlCb1pXbG5hSFE5SWpRNU1pNHpNaklpTHo0TkNnazhjbVZqZENCNFBTSXlOUzQ0TURjaUlIazlJakUxTkM0NE16a2lJR1pwYkd3OUlpTXlOVGt5TkRVaUlIZHBaSFJvUFNJeU16SXVNalU0SWlCb1pXbG5hSFE5SWpRNU1DNHpNaklpTHo0TkNnazhjR0YwYUNCbWFXeHNQU0lqUlVReFJqTTBJaUJrUFNKTk5UUXdMamt6Tml3Mk5EWXVNVFl4VmpJNU5pNDNOelJqTUMwMkxqVTJNeTAxTGpNMExURXhMamt3TXkweE1TNDVNRE10TVRFdU9UQXphQzB4ZGkweU55NDRNRGRvTVEwS0NRbGpOaTQxTmpNc01Dd3hNUzQ1TURNdE5TNHpOQ3d4TVM0NU1ETXRNVEV1T1RBemRpMDVNUzR6TWpKb01qTTBMakkxT0hZME9USXVNekl5U0RVME1DNDVNelo2SWk4K0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBWRU1VWXpOQ0lnWkQwaVRUVTBNUzQ1TXpZc01qUTFMakUyTVdNd0xEY3VNVEkyTFRVdU56YzNMREV5TGprd015MHhNaTQ1TURNc01USXVPVEF6ZGpJMUxqZ3dOMk0zTGpFeU5pd3dMREV5TGprd015dzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXpkak0wT0M0ek9EY05DZ2tKYURJek1pNHlOVGhXTVRVMExqZ3pPVWcxTkRFdU9UTTJWakkwTlM0eE5qRjZJaTgrRFFvSlBIQmhkR2dnWkQwaVRUYzROeTR3T1Rjc01USTVMakF6TWtneE1pNDVNRE5ETlM0M056Y3NNVEk1TGpBek1pd3dMREV6TkM0NE1Td3dMREUwTVM0NU16WjJOVEUyTGpFeU9XTXdMRGN1TVRJMkxEVXVOemMzTERFeUxqa3dNeXd4TWk0NU1ETXNNVEl1T1RBemFEYzNOQzR4T1RNTkNna0pZemN1TVRJMkxEQXNNVEl1T1RBekxUVXVOemMzTERFeUxqa3dNeTB4TWk0NU1ETldNVFF4TGprek5rTTRNREFzTVRNMExqZ3hMRGM1TkM0eU1qTXNNVEk1TGpBek1pdzNPRGN1TURrM0xERXlPUzR3TXpKNklFMDNOelF1TVRrekxEWTBOUzR4TmpGSU5UUXhMamt6TmxZeU9UWXVOemMwRFFvSkNXTXdMVGN1TVRJMkxUVXVOemMzTFRFeUxqa3dNeTB4TWk0NU1ETXRNVEl1T1RBemN5MHhNaTQ1TURNc05TNDNOemN0TVRJdU9UQXpMREV5TGprd00zWXpORGd1TXpnM1NESTRNeTQ0TnpGV01UVTBMamd6T1dneU16SXVNalU0ZGprd0xqTXlNZzBLQ1Fsak1DdzNMakV5Tml3MUxqYzNOeXd4TWk0NU1ETXNNVEl1T1RBekxERXlMamt3TTNNeE1pNDVNRE10TlM0M056Y3NNVEl1T1RBekxURXlMamt3TTNZdE9UQXVNekl5YURJek1pNHlOVGhXTmpRMUxqRTJNWG9nVFRJMUxqZ3dOeXd4TlRRdU9ETTVhREl6TWk0eU5UaDJORGt3TGpNeU1rZ3lOUzQ0TURjTkNna0pWakUxTkM0NE16bDZJaTgrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tmk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlrTmhjR0ZmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhkcFpIUm9QU0k0TURCd2VDSWdhR1ZwWjJoMFBTSTRNREJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRGd3TUNBNE1EQWlJR1Z1WVdKc1pTMWlZV05yWjNKdmRXNWtQU0p1WlhjZ01DQXdJRGd3TUNBNE1EQWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BHYytEUW9KUEhCaGRHZ2dabWxzYkQwaUkwWkdSVEF3TUNJZ1pEMGlUVFkwTkM0eE5qRXNOVE13TGpBek1uWXRNV013TFRZdU5UWXpMVFV1TXpRdE1URXVPVEF6TFRFeExqa3dNeTB4TVM0NU1ETklNalF1T0RBM1ZqSTRNaTQ0TnpGb056VXdMak00TjNZeU16UXVNalU0YUMwNU1TNHpNaklOQ2drSll5MDJMalUyTXl3d0xURXhMamt3TXl3MUxqTTBMVEV4TGprd015d3hNUzQ1TUROMk1VZzJORFF1TVRZeGVpSXZQZzBLQ1R4d1lYUm9JR1pwYkd3OUlpTkdSa1V3TURBaUlHUTlJazAyT0RNdU9EY3hMRFV4Tmk0eE1qbG9PVEF1TXpJeVZqSTRNeTQ0TnpGSU1qVXVPREEzZGpJek1pNHlOVGhvTmpBMkxqUTFNV00zTGpFeU5pd3dMREV5TGprd015dzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXphREkxTGpnd053MEtDUWxETmpjd0xqazJPQ3cxTWpFdU9UQTJMRFkzTmk0M05EVXNOVEUyTGpFeU9TdzJPRE11T0RjeExEVXhOaTR4TWpsNklpOCtEUW9KUEhKbFkzUWdlRDBpTWpRdU9EQTNJaUI1UFNJeE5UTXVPRE01SWlCbWFXeHNQU0lqUlVReFJqTTBJaUIzYVdSMGFEMGlOelV3TGpNNE55SWdhR1ZwWjJoMFBTSXhNRFV1TWpJMklpOCtEUW9KUEhKbFkzUWdlRDBpTWpVdU9EQTNJaUI1UFNJeE5UUXVPRE01SWlCbWFXeHNQU0lqUlVReFJqTTBJaUIzYVdSMGFEMGlOelE0TGpNNE55SWdhR1ZwWjJoMFBTSXhNRE11TWpJMklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVEkwTGpnd055dzJORFl1TVRZeFZqVTBNQzQ1TXpab05qQTNMalExTVdNMkxqVTJNeXd3TERFeExqa3dNeTAxTGpNMExERXhMamt3TXkweE1TNDVNRE4yTFRGb01qY3VPREEzZGpFTkNna0pZekFzTmk0MU5qTXNOUzR6TkN3eE1TNDVNRE1zTVRFdU9UQXpMREV4TGprd00yZzVNUzR6TWpKMk1UQTFMakl5TmtneU5DNDRNRGQ2SWk4K0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBWRU1VWXpOQ0lnWkQwaVRUWTRNeTQ0TnpFc05UUXhMamt6Tm1NdE55NHhNallzTUMweE1pNDVNRE10TlM0M056Y3RNVEl1T1RBekxURXlMamt3TTJndE1qVXVPREEzWXpBc055NHhNall0TlM0M056Y3NNVEl1T1RBekxURXlMamt3TXl3eE1pNDVNRE5JTWpVdU9EQTNEUW9KQ1hZeE1ETXVNakkyYURjME9DNHpPRGRXTlRReExqa3pOa2cyT0RNdU9EY3hlaUl2UGcwS0NUeHdZWFJvSUdROUlrMDNPRGN1TURrM0xERXlPUzR3TXpKSU1USXVPVEF6UXpVdU56YzNMREV5T1M0d016SXNNQ3d4TXpRdU9ERXNNQ3d4TkRFdU9UTTJkalV4Tmk0eE1qbGpNQ3czTGpFeU5pdzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd00yZzNOelF1TVRrekRRb0pDV00zTGpFeU5pd3dMREV5TGprd015MDFMamMzTnl3eE1pNDVNRE10TVRJdU9UQXpWakUwTVM0NU16WkRPREF3TERFek5DNDRNU3czT1RRdU1qSXpMREV5T1M0d016SXNOemczTGpBNU55d3hNamt1TURNeWVpQk5OemMwTGpFNU15d3hOVFF1T0RNNWRqRXdNeTR5TWpaSU1qVXVPREEzRFFvSkNWWXhOVFF1T0RNNVNEYzNOQzR4T1RONklFMHlOUzQ0TURjc05qUTFMakUyTVZZMU5ERXVPVE0yYURZd05pNDBOVEZqTnk0eE1qWXNNQ3d4TWk0NU1ETXROUzQzTnpjc01USXVPVEF6TFRFeUxqa3dNM010TlM0M056Y3RNVEl1T1RBekxURXlMamt3TXkweE1pNDVNRE5JTWpVdU9EQTNEUW9KQ1ZZeU9ETXVPRGN4YURjME9DNHpPRGQyTWpNeUxqSTFPR2d0T1RBdU16SXlZeTAzTGpFeU5pd3dMVEV5TGprd015dzFMamMzTnkweE1pNDVNRE1zTVRJdU9UQXpjelV1TnpjM0xERXlMamt3TXl3eE1pNDVNRE1zTVRJdU9UQXphRGt3TGpNeU1uWXhNRE11TWpJMlNESTFMamd3TjNvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3VrLWJjNDhhZmNjMTVkNWQ5ZDUxMjU1ZGUwYjJlZTcwOGJlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy91c2VyMS01NmExZjI1ZTVmYjAyYmVjZjk5ZWY3YzUwZmUxNDIzMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQy9WQk1WRVVBQUFEMzlQTHA3TzNnNU9iejh2SGk1K25GeWN6ejh2SG02K3pvN08zYzVPZG1abTcwOC9MdzhmSFo0K2J6OHZMMjlmUFc0ZVgyOVBQcjd1N3k4dkxZNGVYdzhmQzZ3TVQ0OS9UbzdPM1MzdUxtNnV4a2FuVDI5UEptYkhYYTQrYlg0ZVQzOWZQVzR1VGg2T3B5ZFh4d2RuLzI5ZlBQMmQzdzhmSFk0ZVhrNnV4OWdJVmthblhVMytSalozSHg4ZkhqNk9waWFITHM3dTV3ZFg3WDRPWDQ5dk5HTnprK01qVlhXV0ZGUEVFdUpDdGhhSFE3TWpoOGVuL1g0T1BoNk9yZDVlZmk2T2hkWVdxb3NyZ3pKU2d1SGlJK09VTzR3TVJiV0ZrMEppdno4dkwwOVBMMjlmUHU3Ky92OFBEeDhmRXJJeXJ0N3U3cjdPNzQ5ZlBjNXVqejh2RXNKQ3pZNHViNDl2VGI1ZWZmNStuczdlL1YzK1B1Nys0dUpDdnA3ZTdYNGVVdkppN1c0T1gyOWZMZDUralQzdU10SlMzYTVPWXdKaTNtNit3eEp5Ly8vLy9vNiszaTZPczRMVE16SnkzazZldzFLUzlsYTNReEtURmVZV3R2ZFgxb2JIWDgrL25oNStsaVpXN3I3dTVxYjNkaVozRXBJaXBaWVd4cWNYdGRaRzVVV1dSbGFYRkdNVEUvTGpENy9mM2E0K2ZPMitCZlpuRFEzZUpqYVhMbDZlcHRjbnBaWG1oclFqbzVNVGhSVm1CTU5UTnhlSUU3S3k3bTYrNVlXbVEvTkRoK2hZMW5ibmhjWDJkTFNsTnlTRUJCTVRRMExET0trWmhGTnpwN2dZaE5VbDc1K1BaMGdJbzNKeXgxZTRSTlBqNkRqSlJzZG9BWERoWHk4dk90cDZhUG1hRlZYR2hUTmpQMDlmVjFlSDVES0Nnekl5ang4UERnM3R6R3ZibHJYVnRSVUZoQ1IxUmVUazQvT2tKNFJqb3VIU0htNWVTUGIyRldSa1pZT3poZU9UVWlHQ0QzKy96MDkvanM5UFdicHE2a21aYU9nSHA0VjA5OVRrUTdKU2N2SVNidDZ1blgxdFhRemMyNHNyQmFWVnRSU2s5RlFrbGhSRDlMS3lwTlEwY21IaWJGdHFwdFltT0ZYRkZyVWsxbE9EUlNMaTN2OGZMU3hydUdlWGxGVDExL1pGdHNSMEdLUkQ0VEJnM3o3dXZzNWQ3YzA4dkJ4Y2phemNPVWlvaW5qSDFoYm50eE9qVFQzT0RNeGNPenViMnF0cjJYb2FlK3FKZWNnWEZyWjJ5WVVVZkR6TkdabmFDeW00MkFkbk4xYm01M2pKcWlzYm9XQzYrVkFBQUFTblJTVGxNQS9pQVdaUkFIZ3hzTll4ak5TVUwwd3IrYzhyV0VkUDcweXZQcXVqODk5T0xkMGNDaThPcThxWjZUZm4xMFlUWDA4OTNVbEk1c0grL3Uwcy9FdzZpaE5kemN5YUNZaldsTVFjbnNZa3dBQUJCRVNVUkJWRmpEcEpPL2E5dEFITVZEM0xpMklBWlRQTlFlYk93aDJHQUlKWE9TL2dGSnNTczRkRFpJQ0JuaDFpb0NMMGNnWTJTTVZxMmxVTHFZREIzU3RSVGlDRG8wYmVqUWtLVjA3NUQrQ1gzZnU0cmdOaitjOU4wUHpzdm5udDg5TGR5b2JHWlRLOVR6RHgrWFZzdVZTalZmTDJpYm1lekMveW1keVRYWHEyWGhPWWJCUmRqWExidlg2L2FLMWZWbUxwTytNemFWSytTTGxzdVlZVGc2c3kyYjZZWmhkYnU5RVZUTUYzS3BPMkVYdFh6WnRTekdiQlpZRmxrZGo3dXU0K2l1MWUyTmdSNFhWN1RGMjJPYmVSdEVadGtXd1F5R0t5aUdMbVBrR1doaWovTE4yNkdYdEtyRkxDYW5GVEJYMXdNYjZnTFp3eHhEY2lPMHRqUS9kemxmRGhnTHNCajR0bVRhTUdyYnZRUjlEckN5WFZ6SnpmdG1qUkphRUxnRWR1V2tRRWpnU3hFZU9nZVhWQ25NOVlxNUd2ZDgzL004SkJzRXdFb3BNQVRUTWhLNTVET0NQb2ZwdEZaeGRGMTNITkE5NGJoTTJsYnNCSzU4NDh3QzE2VXJScU9xZGtPcnM0VlZycE1NZytEb2xoRVlCdUNncTlaZFJFSng0QWVpaCs5aUlYdHRHeHFjZTV5SVZESGk0d2JEeGJwSWhjQlFBZ2NlNXBIMzJqWHRTRzE0SHVlY3ZFSU9Fa0hTZ0Nad2VrL1huWUgzcExwMHFLZXU5THZCdVFBWnBuVUMwd1gwaGhnU3I5aE1DV1E1d1NUYjVMNStoZWRzdy9ROXlXMFB1RFN0NG9Cekhnb2M1VVRtMGphVUpDNzlVdVJybCthY3Z0OXFtVHVkUWJ2dmRWcSs0RUplUW1uRE1SZllsY2cyeEZqaTNiYVkvSUN3RlM3cnhyMEhIYlAxWlB2Z29OVnVIUXo4QWRqb3N5L2hxaVM2WXNPNFNrV0pZUVhxS2xiV0x2a3VIcG1tMmVsc2JXTzB0M2JhVzZZbk1HRGI0VkY4Rk1lUjdHRmluTGlZSkJ5VC94RlVjdjhVb3ViN2ZXZ1E5ZnVtMlc1UjNKZ2ViTWZUNzU5L2ZYa1hUNmV4bzZNemttK1E3VVRxS2k3dzMycC9WNlBoUjFIa1IzMC9FY1VRQ3QrTTk0NzN6MTU4ZXZQcTdPZkorMmxrY0VpWFhWUlNZQzZVZEw0MnkxMHU5U001L2tpaVJYUzBOejNlL3pxWkhKNmVIbUwvc1A4NlJnR0Z3Rkl2bStDNWc4RUpYMXFlYVhCTnBpRGxLM0pmZUVmUGowOStmRHVjN0E2SEw0ZkQ0YlBkeWVUajA3ZENaUmFHZmhqaUJRU0haQzNwRUFwUlc1cHB4RysyeXVhMWlTQU00L0VEcWlJcXRnZ2lIcnlJTjhVL28zVS9zdEJCREx0aExzTjJOKzY2N0tHd2tKUFprMkNSUWkrbUJrUUNVYkNvclZEUlZHMmtSa1ZGaTYzMUV6VWliUkVQRnNHVHp6dGpUQU0rT3pzN2grUTNUNTU1MzgxUW9ZQkJnbXNhSi9QK3dKV1pXcXUyRUhNdWhIRGo4V0I4b2JYaVA0QUZxYng2WUk5VEo3QUxodFNSelIzdXhyMzViaFh5Wng3NFU5UDNhd3NzanJuREdET1p3Nk5nNUg1cDJiZVVjaGpaWE03Q2tNSnZLQlFzYkxTMzgyKzFwOUJoMGxkeXVhSEc4WlVuTURzZWUxd3c1amhBQ3hZRzBibEYvejF3TkNBcm13V1oxc0FEU3NNNnMrZC9oaTBVczVZazZkZWJ0ZnNzaUoySXc2eHBta0l3a3p0ajA1OFdaOTluYlRBVFNkYXdCQlI0MnNaS0xBdVBmNVkzM3pCdTZMcEdPMXU1Skp1QXUrRjFhNEVMQjhTaWFUTDRMUUx0bUpXMTFjWFp5MkRvdHFScUVGYlNPMFJZMjdhemYxUGUxTmRQR3V3M0JuRVpocTc1azlNMTRRbDRGY0lzQWsybVFSZWpiNVorMncxTjEzVkF3U0MwcnBHVWR3dkNvMitUcXVGZUhSOEZjWEJRN21BTUg3dlppZ0lYTUpjN3NBdzJ1UmJjODU1Y3EzOW9UTkF2Vk5MK1V1R1Vua3BXcjZybEhoMHlPcnJzejdWWUtaUVdIVGgxWFpmUjdEaHV3S0x6YTVPcGNjTXdPbUR3NkphUklBZFNEM0czN0pJeGRKUk9SclVnUWc2TXdhNGJ1UTZCd1RXOUlCaVpmN1I2WjFiNzU3ak4xcWd5TkN2QmpLUGF1d1hnL1R1Ti92V2FHUDVZQzF4QngrWTQ0bExvbWlUaG91b0FEaXFmSC8xTUc3YXlEQ1RkTnRKT2tJZFZzQ0JNdlR1b2lMdXdTSGp5VlNYZ0RGaG11dUdvSzgrT2NjZnhIRmVJT0tnMjY0dU5pUzdEbUdTMnBId0I2Q0dVOHRaRC9kM3lwMG9WSnd5UktBS0dhWURsS2JyVTJUd09LdFBOcFE4K2FKQ0NkdzRSWGFLNi9ORFd6TWJ0M2R5SmRPNTZBRERRcUFhaWtubkIwQ0ZBZTNINWRMWDVxUDV0MWxaVzJ3SWVCWWRPeVFNN1ZFREloeWxpQXhjTm10SzUyNkVRT0RGS1dRZ0VRaDBOTkJMbjRYaXBQUE9wK1c3T1I2NkpiR1FyRHlXSmxjK2hNTUJPTEtqM2NHYnpBRFRZY1R4ODUrYnBrZEJqakp5aUdtUWVDSmxpNWp6QzZUV2I4OVZucVdVbk9VQXgxcjlsNEJuQ2Z0c3lQYW90Mm1qRGYxNmRybzdLN3NCVVpGalFvS0pHRXNGWWVXYXBlWFVsMWFrakVzREFWcExtTWFQY3NPeko3TzZPbU1BbDVDdGNIcEpaTWs2ZTRSM2NxRlFwenpUUHYzbnF2NWNBV1FuZ0VBc25seVJrV2JyZW5lbUQyY3Zyd09uVGw3ZEdpdHh6SFZHa0xKUVlRZ1kzR2kyWHEyL09yajVkQmhrTmdTdXJRWW1HMXdiVkJtcUVWcmJlbDBGUkFOelJST05DWmN6aE1aQWN0eExsUUZ3dnFsUXE4MmQvVHk3aHRVejlTN1VoYnhKbUlGWDFiYzhjR0JqbzhtejRkMTdjanRFaHJFamdvaUtqcXNQSXUvUjJ2bHd1My8xYy8vRHg3WEtxWlNXVmVHRGpUaUNiWGhwNEhzMGNISURXaDN4eCtPSHRZaEFJcG5LZ0NkWG13ZS8xNzEvTzM0MUd6MzJ1cjEzNU5PWHJiYlVOSnhTMVZON2FsOWxKWEVsdVI0SU84ZHl4Y1ZVUEtsL3VoVkVRUHY1MTl0NVNLU3pkcmRjWHAzNmtlSEVwcmlKVElybUU0RlFzdlgvWUx2L1hKTUk0anM4b2lpaUtpZ3FpdnlIb3o4Z0RpekQ4cGVDUWp1TU9UdlFrR1l4TDh3WlNlRTRreTUwMk5ITXhONGVrYnN1MmFjVm1SbDhZTTZnbVphM1d0NDIrMHZmb2ZYZDZVK3A5ejkxdGJMejIzdnY1UEovbkVXQlVzYkdkM0h0dk9zbUZPVUNiZzZJVnY2Rms3ZXVpWEMzWms5Rm5VL2w3ZDlraHZYTnFEKzJsQklReTJZNG9tbEN6UG4zczdEVnVnRU03YXhZd1RXT0JoOFJzYlhFeEk4bGlNdlI0NmxYNjJhdGVrMjY1ZldtcnNSemFnOGt6bTgxd2pVVDBpanRhdUo2eUgyTlV3OVN4WXlUTkFPeXQxMVlXeFZyVmF4TlR0NTZrWDBoTElBTzlLcTFBOE1UWTM3WEpyRWVocDh6ZWk0b2N4Vk5JNFJnQ0pta1MzR0M1WGwrVXhRVXZHUXBOdkxzVkxienBIUUpZWVRmeFd2Zlh2dDdVdGNNSWdRenBwaE5zV2tSUEp5bWFobDJLc2lYQnpTelVzd3RmcStVa3ZndVdicWZ1bTBhSFdpR2FsUTBUblV6VEZkdzd1cllaVjRWUTFGeE1MbGNsR09ZWWlzUit4OUIwVWhSaFdGcW9aVmUreWpZYTgyaXpaeit6UXgxYmp4bWpKWk5wVzlkNlk0ZWFQMlFuQ3lEektBZGw0dXlpMStzdFMxSTVteTArNGc3YTdYYWV1ejIxZEtQWmNIWDBxa3pydGJiWmFSci9HbUtlRnNOUm5xUVZyQmdGT0xNZ3kxS3BITVRTcGhrK0ZpMy9jTjBFVFEwQXR3cldiWnMyb3RIcjBIYStsVTNmRmpsVXI2akVnRHNEeDhXcW5MRlRqSTFtNE5uNzduQ3ZXZmVpUmEybXJhQzM3TVBXWlB3dk9aRjRtb1ZSQ1BPR1VaSmtTYTdLWHBxRUdCdkRjOUpuMTZnQ3c0MExhc3RrMHhwc3BzYi9pODA5RGtMZVlEQ1R5WlJLSlVrQytMbElnVXN6MlB3Q29mazNMT3BpTmVNaGt5NXNwbDA3Q2NoS0tESmk2Q0xZSjgvbU04RFdhN1ZhdlN3VlpaQmxMMFhiNEpoaFl1Rnc5TXVkM3ZiMjFhYWR5b0ZsTjJFaE1LeWdLaThyWGxZai9rS0NmVko1T0RiV1A0Zk83eTBYaXlvNWVJUmtTSVhNZ3h4RUdLWTJzTG5GM2JKWFBXSlpWTElWVUF1ZUlHc3l1a1kvL3I1NGVYblpQUkwzOUU5TEs4WGljM25lVHBGQWd4dUxjUU5UYXNQUTBYcEZiOTJnSGdvdGlnajFKdUJZOWE3SWRXYm00dVh6cHdXUDRCTkc0dU56OHl2RjZ2T29rZ01QY0NER2hTZnlzS3lDTzdWZU84YnV0alFGcE9wWEExc1N1NFlIVDU3dWNmUkUzUDYrdUREZUdKc3ZGb09Ba2lSUDhnRW9OZnR5OU1DLzJySzVlZkJ1Y1ZVaFlFMHU0NThQMzVjZDUzMDlRanp1NmZPYzdXczBwb3RTZ0kvaFFoQ0J3TlZVWmNsS05CZFc2M0NDMWRJOGVHUHhFZjhJaGwyVEgyYk9PUnh1anlERVJ4Q0ZVK2h2TkNZZVBZN3hBUzRXQ0VOemhka2xUSE9Ic0dhdXJOVzRXQ050Ukd0cjVseTVtZUdaaXo2LzAzYzIwaTEwbiswYkgrK0xOMGJTRlp5RytNQkE2c0hjZytuSyswa3owVW1GdHE3UlA0NFovakdjY09WMkRaNzdPT3gwdXJzRnA5UGo4VVE4Y1pESFovS3A4RUE0TlRGUitGbEo1M1BLNzFweEdReUVnVGg4R09Pd0FVWGNacm1UYTJFL1hIZzlmSEw0Z3Z1RXcrbHcreU1ldjkvdkZOekx3bkx1L3E5Q29mRHo3V3orN2t1REFSTURIQzVkQkphenJyVW9ETDNtb0FRN0dSbjhOdWo3Tk9oemRIZWZHdkgzK056T3ZySCtzY2lsMzhmWk0vbjMrZnU1T3k5ZGxvVEZBRlFiRk5xTmhIV3QrMXVhdVlSR0RVVmgySUlQcEF2RlRWMVVRYWk2VUFRUjM3cnhMYm9RQm1GV0JSRmNtSVY0dmZlTzRjYmNKQ0NFa05DUUV2TkFZcVpwbkFGbkpBN28xS0dpdUtoQ3g4YzQrTUtOS3g4clVVRVVYWGlxVkJ4UlcvUlAxbDh1Ly9uUENadzdQejhwYUpDOElKeU13N0Vlbkk2VnVXWXB1b1p3cXpGd3JGa2JIbnowNGNJTFFSQUtod3VGb1h3TzB0bUJuYkIwL3F5T3RjS3lTV3grNkxSdzUrNVlzVGdXcVpIbk9ZcGtsSTM2UVAvbzZMRkdXSGZ0ZXV2NXJYdEFCaWFvQzRxZCswbUg5eStERFArc3RaTmNvYkR2YmlVcXFVR0ZlMTRTSWIrY2FBM0FEb1NCeVJWcUtOQXM0b1U3d3VuOHZzT1FJWGc2clZqYnlZV0pBZGhjcmlDOHVqeFdLa1hFVEwwNDlqMkhKd2srZnFBNTJMYVVxb1d4cG9tYXlIU2w5UG9PMkFFNTZOVCtMcGdTdjJqUkVpQ2ZMank1WFVxOFV1bDlsTEE2OVZMeVBuTDcrNGZQQkpSaWJOa1FPZ0RyR2xYMDdQNUJZZWpIY1NlanNXUlJKL1Y3TW9hRWw3ZWZlVnJtT2RGYlJscHFXb29ybGJCNXJOYmd2b2doSFVHZzRzRFZxaElOZEZtTnJoVUsrWDBUYmtETnZ2TWhFYjliNkowKytIbjhpaGVrU2JsU2tvS1FwRjVVZWRDc2pUOG9Fd05xYUtIQUZhbmtxZ0ZYTU9SYjllN3VFNGFBRE9DdWI3SHJtalA3dHl2SUJmZlBEajZOeGFkWHMvY21iOWltRTBXdDJ2QjR2VXcwU2VLR1NyRXJZbXk2b1NGYW9vVkU3ZE9uZTRVaHFPR0VjbUQ0Z3JsL1dKcjJEUTUrcVZ5dmpWNDhGNFlEekV5aUQ4M2FwVmJaa0VUTW1Cam95TVZLUUZCWXJGb3VwcHBlVHN3ZUlRK1Jnd1RuZ1B2SFJXLzNqdEg0d3VqTlUrZWFwMDYxR1NteDQ4T1hXb2xwaUJLbFRDc2FUQlUxVjBMdWlBMWZ3bFh1eDJsMFI0QTQ1K0ROTGZqTHByNTdaL1Q4WnY4Sjhmek5nYlpZZHM0MUo3aU1VcVFaeUhLUmo2a1VpbHdPWFdaUUpESEhpaXJmellEL3c5KzRRRjZ4c1ZZNyt1SHE0MGJiVEIrTlF0MU1qVkk0c005Q0RGNHpYRGVSU1lzaVJZVHFzZXk4ZTMydGtBUHV2RG16cGxqK3I5dlVmeVI3ZW1nZ1RGcTE4VWZBUWtpVE5PYUlMdk16b21Hc0dyR0JOTXBNSHp0bCs5M3Ixd1VZTDB0bVRuMmx0WGRMK3dPTUhCRWZ1M1NXTzJDdVlSaVlwMFdiK2NpZ2txb2luMEZNS0VJaVQ5VEt4NTZ1UXRkODZJdXB0WDdYaGkvdHRuVG0wckNjbXBsSkNURWxTWEpkUkd5ZE0xMFUvYmdxeTdadFlTVlc0amM5MXhhdWhUNmVsdlpzRFVjZVBheU5KR2xHU0VaOGgzQ3RycVI4UklvdHdwVTRsU2kwdHkzTGp1OTg3RmtPODJ5NjZsNjM1Y2I0RVRpcTZjVFFkUVRwMUhZOUx5eWFNaUlaMDAwcUtiTHMrdzZYdCsvdXFOclVmcXpicEJKS1RIQ1lNY1F5eFRXNFk0OFFYMDZ6cXF3cnVxUkx4T2RiVjNhRWJIcm9WYjFMR2RJbDZuZ0VPYWlvY2QwS1RjU0p6bW0xS3ZzY3JlNWQxVDNqWDlTOWVHWHYwamptRGxGVUl0cE9LalVnYThUeVRGbG5xM3RYTGdic1AycDI5K0lWZlpzM0lDU1RESFBQYXNnTzQwNjJlazBmVUNlVCt4L3dWU3Y2ZWpldldiclUzcmh0VFcvZmlsWFRnWDRGdUgwMkU0N2p6SElBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkV3JhcHBlciwgeyBBdmF0YXIsIEluZm8gfSBmcm9tICcuL0F2YXRhckNhcmQuc3R5bGUnO1xuXG5jb25zdCBBdmF0YXJDYXJkID0gKHsgY2xhc3NOYW1lLCBhdmF0YXIsIG5hbWUsIHVzZXJuYW1lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFdyYXBwZXIgY2xhc3NOYW1lPXtgYXZhdGFyLWNhcmQgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgIHthdmF0YXIgJiYgKFxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPC9BdmF0YXI+XG4gICAgICApfVxuICAgICAge25hbWUgfHwgdXNlcm5hbWUgPyAoXG4gICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICB7bmFtZSAmJiA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvaDM+fVxuICAgICAgICAgIHt1c2VybmFtZSAmJiA8cCBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnt1c2VybmFtZX08L3A+fVxuICAgICAgICA8L0luZm8+XG4gICAgICApIDogKFxuICAgICAgICAnJ1xuICAgICAgKX1cbiAgICA8L0NhcmRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyQ2FyZDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQXZhdGFyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTcwcHgpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9wYmFyQ2FydFdyYXBwZXIgZnJvbSAnLi9TaW5nbGVDYXJ0TW9kYWwuc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7XG4gIHByaWNlLFxuICBxdWFudGl0eSxcbiAgaW1hZ2UsXG4gIG9iamVjdElELFxuICBjYW5jZWxRdWFudGl0eSxcbiAgX2hpZ2hsaWdodFJlc3VsdCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9wYmFyQ2FydFdyYXBwZXIgY2xhc3NOYW1lPVwiaXNvQ2FydEl0ZW1zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0l0ZW1JbWFnZVwiPlxuICAgICAgICA8aW1nIGFsdD1cIiNcIiBzcmM9e2ltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0NhcnREZXRhaWxzXCI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8YSBocmVmPVwiIyFcIj57X2hpZ2hsaWdodFJlc3VsdC5uYW1lLnZhbHVlfTwvYT5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXNvSXRlbVByaWNlUXVhbnRpdHlcIj5cbiAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntwcmljZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtTXVsdGlwbGllclwiPlg8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXNvSXRlbVF1YW50aXR5XCI+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9XCJpc29JdGVtUmVtb3ZlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsUXVhbnRpdHkob2JqZWN0SUQpfVxuICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tYW5kcm9pZC1jbG9zZVwiIC8+XG4gICAgICA8L2E+XG4gICAgPC9Ub3BiYXJDYXJ0V3JhcHBlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5jb25zdCBUb3BiYXJDYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDIpfTtcbiAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gIC5pc29JdGVtSW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cblxuICAuaXNvQ2FydERldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PlxuICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMjBweCAwIDAnIDogJzAgMCAwIDIwcHgnfTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMil9O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuXG4gICAgICAgICYuaXRlbU11bHRpcGxpZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb0l0ZW1SZW1vdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzE1cHgnKX07XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE1cHgnIDogJ2luaGVyaXQnKX07XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XG5cbiAgICAuaXNvSXRlbVJlbW92ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJDYXJ0V3JhcHBlcik7XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJb0lvc0ltYWdlcyxcbiAgSW9Jb3NWaWRlb2NhbSxcbiAgSW9Jb3NQbGF5LFxuICBJb0lvc0hlYXJ0LFxuICBJb0lvc0NoYXRidWJibGVzLFxufSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgQ2FyZFdyYXBwZXIgZnJvbSAnLi9JbnN0YWdyYW1DYXJkLnN0eWxlJztcblxuY29uc3QgSW5zdGFncmFtQ2FyZCA9ICh7XG4gIGtleSxcbiAgdHlwZSxcbiAgaW1hZ2UsXG4gIG51bWJlck9mVmlldyxcbiAgbnVtYmVyT2Zjb21tZW50LFxuICBudW1iZXJPZmxpa2UsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17YHBvc3QtY2FyZCBpbnN0YWdyYW0gJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gfVxuICAgICAga2V5PXtrZXl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiaW5zdGFncmFtIHBvc3RcIiAvPlxuICAgICAge3R5cGUgPT09ICdnYWxsZXJ5JyAmJiA8SW9Jb3NJbWFnZXMgLz59XG4gICAgICB7dHlwZSA9PT0gJ3ZpZGVvJyAmJiA8SW9Jb3NWaWRlb2NhbSAvPn1cbiAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3R5cGUgPT09ICd2aWRlbycgPyAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIHtudW1iZXJPZlZpZXd9IDxJb0lvc1BsYXkgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAge251bWJlck9mbGlrZX0gPElvSW9zSGVhcnQgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICB7bnVtYmVyT2Zjb21tZW50fSA8SW9Jb3NDaGF0YnViYmxlcyAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgPC9DYXJkV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbUNhcmQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZmlndXJlYFxuICBtYXgtd2lkdGg6IDM3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIGltZyArIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIGZpZ2NhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgZmlnY2FwdGlvbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnN0YWdyYW1DYXJkIGZyb20gJy4vSW5zdGFncmFtQ2FyZCc7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPD57dmFyaWFudCA9PT0gJ2luc3RhZ3JhbScgJiYgPEluc3RhZ3JhbUNhcmQgey4uLnByb3BzfSAvPn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gJy4uL3V0aWxpdHkvaW50bE1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY29uZmlnLCBjaGFuZ2VUaGVtZSwgc2VsZWN0ZWRJZCB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCBvcHRpb25zIH0gPSBjb25maWc7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZVN3aXRjaEJsb2NrXCI+XG4gICAgICA8aDQ+XG4gICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e2xhYmVsfSAvPlxuICAgICAgPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVTd2l0Y2hCdG5XcmFwcGVyXCI+XG4gICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdGhlbWVOYW1lLCBidXR0b25Db2xvciB9ID0gb3B0aW9uO1xuICAgICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VUaGVtZShpZCwgdGhlbWVOYW1lKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdGhlbWVOYW1lID09PSBzZWxlY3RlZElkID8gJ3NlbGVjdGVkVGhlbWUnIDogJyc7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGtleT17dGhlbWVOYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1c3RvbUNsYXNzfVxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbkNvbG9yIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIElucHV0V3JhcHBlcixcbiAgSW5wdXRHcm91cFdyYXBwZXIsXG4gIElucHV0U2VhcmNoV3JhcHBlcixcbiAgVGV4dEFyZWFXcmFwcGVyLFxufSBmcm9tICcuL3N0eWxlcy9pbnB1dC5zdHlsZSc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5jb25zdCB7IFNlYXJjaCwgVGV4dEFyZWEsIEdyb3VwIH0gPSBJbnB1dDtcblxuY29uc3QgV0RTdHlsZWRJbnB1dCA9IElucHV0V3JhcHBlcihJbnB1dCk7XG5jb25zdCBTdHlsZWRJbnB1dCA9IFdpdGhEaXJlY3Rpb24oV0RTdHlsZWRJbnB1dCk7XG5cbmNvbnN0IFdESW5wdXRHcm91cCA9IElucHV0R3JvdXBXcmFwcGVyKEdyb3VwKTtcbmNvbnN0IElucHV0R3JvdXAgPSBXaXRoRGlyZWN0aW9uKFdESW5wdXRHcm91cCk7XG5cbmNvbnN0IFdESW5wdXRTZWFyY2ggPSBJbnB1dFNlYXJjaFdyYXBwZXIoU2VhcmNoKTtcbmNvbnN0IElucHV0U2VhcmNoID0gV2l0aERpcmVjdGlvbihXRElucHV0U2VhcmNoKTtcblxuY29uc3QgV0RUZXh0YXJlYSA9IFRleHRBcmVhV3JhcHBlcihUZXh0QXJlYSk7XG5jb25zdCBUZXh0YXJlYSA9IFdpdGhEaXJlY3Rpb24oV0RUZXh0YXJlYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZElucHV0O1xuZXhwb3J0IHsgSW5wdXRTZWFyY2gsIElucHV0R3JvdXAsIFRleHRhcmVhIH07XG4iLCJpbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHtcbiAgdHJhbnNpdGlvbixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG59IGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMnO1xuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICR7Ym9yZGVyUmFkaXVzKCc0cHgnKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1sZyB7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1zbSB7XG4gICAgICBwYWRkaW5nOiAxcHggMTBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cblxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnKX07XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuICB9XG5gO1xuY29uc3QgSW5wdXRHcm91cFdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0xcHgnIDogJzAnKX07XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dCB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDRweCA0cHggMCcgOiAnNHB4IDAgMCA0cHgnfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LWlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgLmFudC1pbnB1dC1ncm91cC13cmFwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgPiAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMXB4J307XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJyl9O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDQpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCcgOiAnMCd9O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICcxcHgnfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDRweCA0cHggMCcgOiAnNHB4IDAgMCA0cHgnfTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJzFweCd9O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHgnIDogJzAnfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc0cHggMCAwIDRweCcgOiAnMCA0cHggNHB4IDAnfTtcbiAgICAgIH1cblxuICAgICAgLmFudC1zZWxlY3Qge1xuICAgICAgICAuYW50LXNlbGVjdC1zZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICR7Ym94U2hhZG93KCl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1ncm91cC1hZGRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLFxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICYgPiAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJHsnJyAvKiBib3JkZXItbGVmdDogMDsgKi99O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQ6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+ICoge1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHggJyA6ICcwJ307XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0ID4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhbGVuZGFyLXBpY2tlciAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FzY2FkZXItcGlja2VyIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtbWVudGlvbi13cmFwcGVyIC5hbnQtbWVudGlvbi1lZGl0b3IsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtdGltZS1waWNrZXIgLmFudC10aW1lLXBpY2tlci1pbnB1dCB7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCAnIDogJzAnfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gKjpmaXJzdC1jaGlsZCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3Q6Zmlyc3QtY2hpbGQgPiAuYW50LXNlbGVjdC1zZWxlY3Rpb24sXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FsZW5kYXItcGlja2VyOmZpcnN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlOmZpcnN0LWNoaWxkXG4gICAgICAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhc2NhZGVyLXBpY2tlcjpmaXJzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC1tZW50aW9uLXdyYXBwZXI6Zmlyc3QtY2hpbGRcbiAgICAgIC5hbnQtbWVudGlvbi1lZGl0b3IsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LXRpbWUtcGlja2VyOmZpcnN0LWNoaWxkXG4gICAgICAuYW50LXRpbWUtcGlja2VyLWlucHV0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgNHB4IDRweCAwJyA6ICc0cHggMCAwIDRweCd9O1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweFxuICAgICAgICAkeycnIC8qIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307ICovfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gKjpsYXN0LWNoaWxkLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdDpsYXN0LWNoaWxkID4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhbGVuZGFyLXBpY2tlcjpsYXN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGU6bGFzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhc2NhZGVyLXBpY2tlcjpsYXN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LW1lbnRpb24td3JhcHBlcjpsYXN0LWNoaWxkXG4gICAgICAuYW50LW1lbnRpb24tZWRpdG9yLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC10aW1lLXBpY2tlcjpsYXN0LWNoaWxkXG4gICAgICAuYW50LXRpbWUtcGlja2VyLWlucHV0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzRweCAwIDAgNHB4JyA6ICcwIDRweCA0cHggMCd9O1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwICcgOiAnMXB4J307XG4gICAgfVxuXG4gICAgLmFudC1jYWxlbmRhci1waWNrZXItY2xlYXIsXG4gICAgLmFudC1jYWxlbmRhci1waWNrZXItaWNvbiB7XG4gICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzhweCcpfTtcbiAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc4cHgnIDogJ2luaGVyaXQnKX07XG4gICAgfVxuICB9XG5cbiAgJi5hbnQtaW5wdXQtZ3JvdXAtbGcge1xuICAgIC5hbnQtaW5wdXQsXG4gICAgPiAuYW50LWlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVGV4dEFyZWFXcmFwcGVyID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gICYuYW50LWlucHV0IHtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICR7Ym9yZGVyUmFkaXVzKCc0cHgnKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cblxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJbnB1dFNlYXJjaFdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XG4gICAgLmFudC1pbnB1dCB7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICAgJHtib3JkZXJSYWRpdXMoJzRweCcpfTtcbiAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgfVxuXG4gICAgICAmLmFudC1pbnB1dC1sZyB7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICYuYW50LWlucHV0LXNtIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDEwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgIH1cblxuICAgICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuXG4gICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1zdWZmaXgge1xuICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICc3cHgnKX07XG4gICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnN3B4JyA6ICdpbmhlcml0Jyl9O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtYW50LWlucHV0LXByZWZpeCB7XG4gICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzdweCcgOiAnaW5oZXJpdCcpfTtcbiAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICc3cHgnKX07XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1zZWFyY2gtaWNvbiB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IHsgSW5wdXRXcmFwcGVyLCBJbnB1dEdyb3VwV3JhcHBlciwgSW5wdXRTZWFyY2hXcmFwcGVyLCBUZXh0QXJlYVdyYXBwZXIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHNpdGVDb25maWcgZnJvbSAnQGlzby9jb25maWcvc2l0ZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGNvbGxhcHNlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc29Mb2dvV3JhcHBlclwiPlxuICAgICAge2NvbGxhcHNlZCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3NpdGVDb25maWcuc2l0ZUljb259IC8+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8aDM+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgIDxhPntzaXRlQ29uZmlnLnNpdGVOYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgSW5qZWN0TWFzc2FnZSA9IHByb3BzID0+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5wcm9wc30gLz47XG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEluamVjdE1hc3NhZ2UsIHtcbiAgd2l0aFJlZjogZmFsc2UsXG59KTtcbiIsImNvbnN0IGxhbmd1YWdlID0gJ2VuZ2xpc2gnO1xuZXhwb3J0IGNvbnN0IGxhbmdEaXIgPSAnbHRyJztcblxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2U7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNpdGVOYW1lOiAnSVNPTU9SUEhJQycsXG4gIHNpdGVJY29uOiAnaW9uLWZsYXNoJyxcbiAgZm9vdGVyVGV4dDogYElzb21vcnBoaWMgQCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ3JlYXRlZCBieSBSZWRRLCBJbmNgLFxuICBlbmFibGVBbmltYXRlZFJvdXRlOiBmYWxzZSxcbiAgYXBpVXJsOiAnaHR0cDovL3lvdXJzaXRlLmNvbS9hcGkvJyxcbiAgZ29vZ2xlOiB7XG4gICAgYW5hbHl0aWNzS2V5OiAnVUEteHh4eHh4eHh4LTEnLFxuICB9LFxuICBkYXNoYm9hcmQ6ICcvZGFzaGJvYXJkJyxcbn07XG4iLCJpbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uZGVmYXVsdFRoZW1lLFxuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogWycjZjAwJ10sXG4gICAgc2Vjb25kYXJ5OiBbJyMwZjAnXSxcbiAgfSxcbn07XG4iLCJjb25zdCB0aGVtZSA9IHt9O1xuXG50aGVtZS5wYWxldHRlID0ge1xuICBwcmltYXJ5OiBbXG4gICAgJyM0NDgyRkYnLCAvLyAwOiBEZWZhdWx0XG4gICAgJyMzQTc4RjUnLCAvLyAxOiBEYXJrZW4gNCVcbiAgICAnIzM3NzVGMicsIC8vIDI6IERhcmtlbiA1JVxuICAgICdyZ2JhKDY4LCAxMzAsIDI1NSwgMC4yKScsIC8vIDM6IEZhZGUgMjAlXG4gICAgJyM0QzhBRkYnLCAvLyA0OiBMaWdodGVuIDMlXG4gICAgJ3JnYmEoNjgsIDEzMCwgMjU1LCAwLjc1KScsIC8vIDU6IEZhZGUgNzUlXG4gICAgJyM2QUE4RkYnLCAvLyA2OiBMaWdodGVuIDE1JVxuICAgICcjNjNBMUZGJywgLy8gNzogTGlnaHRlbiAxMiVcbiAgICAnIzNGN0RGQScsIC8vIDg6IERhcmtlbiAyJVxuICAgICcjMzM2OWU3JywgLy8gOTogQWxnb2xpYSBjb2xvclxuICAgICcjNTg5NkZGJywgLy8gMTA6IExpZ2h0ZW4gOCVcbiAgICAnIzJiNjllNicsIC8vIDExOlxuICAgICcjMjM2Y2ZlJywgLy8gMTI6IGRhcmtlbiAxMCVcbiAgICAnIzRkODhmZicsIC8vIDEzOiBMaWdodGVuIDUlXG4gIF0sXG4gIHNlY29uZGFyeTogW1xuICAgICcjMmQzNDQ2JywgLy8gMDogRGFya0JsdWVcbiAgICAnI2YxZjNmNicsIC8vIDE6IExpZ2h0Qmx1aXNoXG4gICAgJyM3ODgxOTUnLCAvLyAyOiBMaWdodEJsdWVcbiAgICAnI0U0RTZFOScsIC8vIDM6IExpZ2h0Qmx1aXNoIERhcmtlbiA1JVxuICAgICcjMzY0ZDc5JywgLy8gNDpcbiAgICAnIzIwMjczOScsIC8vIDU6IERhcmtCbHVlIERhcmtlbiA1JVxuICAgICcjZjVmNmY4JywgLy8gNjogTGlnaHRlckJsdWlzaFxuICAgICcjZTllYmYxJywgLy8gNzogRGFya0JsdWlzaFxuICAgICcjRjZGOEZCJywgLy8gODogTGlnaHRlckJsdWlzaCBMaWdodGVuIDIlXG4gICAgJyNFOUVCRUUnLCAvLyA5OiBMaWdodGVyQmx1aXNoIERhcmtlbiAzJVxuICAgICcjMWExYTFhJywgLy8gMTA6IFNpZGViYXIgc3VibWVudSBzZWxlY3RcbiAgXSxcbiAgY29sb3I6IFtcbiAgICAnI0ZFQUMwMScsIC8vIDA6IE9yYW5nZVxuICAgICcjNDIyOTlhJywgLy8gMTogUHVycGxlXG4gICAgJyNGNzVEODEnLCAvLyAyOiBQaW5rXG4gICAgJyM3RUQzMjEnLCAvLyAzOiBMaW1lR3JlZW5cbiAgICAnIzM5NDM1ZicsIC8vIDQ6IEJsdWVTaGFkZVxuICAgICcjRkZDQTI4JywgLy8gNTogWWVsbG93XG4gICAgJyNGMkJEMUInLCAvLyA2OiBZZWxsb3cgRGFya2VuIDUlXG4gICAgJyMzYjU5OTgnLCAvLyA3OiBGYWNlYm9va1xuICAgICcjMzQ0ZTg2JywgLy8gODogRmFjZWJvb2sgRGFya2VuIDUlXG4gICAgJyNkZDRiMzknLCAvLyA5OiBHb29nbGUgUGx1c1xuICAgICcjZDczOTI1JywgLy8gMTA6IEdvb2dsZSBQbHVzIERhcmtlbiA1JVxuICAgICcjZTE0NjE1JywgLy8gMTE6IEF1dGgwXG4gICAgJyNjYTNmMTMnLCAvLyAxMjogQXV0aDBcbiAgICAnI2UwMzY0YycsIC8vIDEzOiB0aGVtZUNvbG9yLS1BbGl6YXJpbkNyaW1zb25cbiAgXSxcbiAgd2FybmluZzogW1xuICAgICcjZmZiZjAwJywgLy8gMDogV2FybmluZ1xuICBdLFxuICBzdWNjZXNzOiBbXG4gICAgJyMwMGIxNmEnLCAvLyAwOiBTdWNjZXNzXG4gIF0sXG4gIGVycm9yOiBbXG4gICAgJyNmNjQ3NDQnLCAvLyAwOiBFcnJvclxuICAgICcjRUMzRDNBJywgLy8gMTogRGFya2VuIDQlXG4gICAgJyNGRjVCNTgnLCAvLyAyOiBMaWdodGVuIDglXG4gIF0sXG4gIGdyYXlzY2FsZTogW1xuICAgICcjYmFiYWJhJywgLy8gMDogR3JleVNoYWRlXG4gICAgJyNjMWMxYzEnLCAvLyAxOiBHcmV5RGFya1xuICAgICcjRDhEOEQ4JywgLy8gMjogR3JleVxuICAgICcjZjFmMWYxJywgLy8gMzogR3JleUFsdFxuICAgICcjRjNGM0YzJywgLy8gNDogR3JleUxpZ2h0XG4gICAgJyNmYWZhZmEnLCAvLyA1OiBEYXJrV2hpdGVcbiAgICAnI0Y5RjlGOScsIC8vIDY6IERhcmtlcldoaXRlXG4gICAgJyNmY2ZjZmMnLCAvLyA3OiAjZmZmIERhcmtlbiAxJVxuICAgICcjZWVlZWVlJywgLy8gODpcbiAgICAnI2ZiZmJmYicsIC8vIDk6XG4gICAgJyNmNWY1ZjUnLCAvLyAxMDpcbiAgICAnI2Y3ZjhmOScsIC8vIDExOiB0b2RheS1oaWdobGlnaHQtYmdcbiAgXSxcbiAgdGV4dDogW1xuICAgICcjMzIzMzMyJywgLy8gMDogSGVhZGluZ1xuICAgICcjNTk1OTU5JywgLy8gMTogSGVhZGluZ0xpZ2h0XG4gICAgJyM5Nzk3OTcnLCAvLyAyOiBUZXh0XG4gICAgJyM3OTc5NzknLCAvLyAzOiBUZXh0RGFya1xuICAgICcjNmE2YzZhJywgLy8gNDogSGVhZGluZyBMaWdodGVuIDIyJVxuICBdLFxuICBib3JkZXI6IFtcbiAgICAnI2U5ZTllOScsIC8vIDA6IEJvcmRlclxuICAgICcjZDhkOGQ4JywgLy8gMTogQm9yZGVyRGFya1xuICAgICcjZWJlYmViJywgLy8gMjogQm9yZGVyTGlnaHRcbiAgICAnI2QzZDNkMycsIC8vIDM6XG4gICAgJ3JnYmEoMjI4LCAyMjgsIDIyOCwgMC42NSknLCAvLyA0OlxuICBdLFxuXG4gIGNhbGVuZGFyOiBbXG4gICAgJyM5MDUnLCAvLyAwOlxuICAgICcjNjkwJywgLy8gMTpcbiAgICAnI2E2N2Y1OScsIC8vIDI6XG4gICAgJyMwN2EnLCAvLyAzOlxuICAgICcjZGQ0YTY4JywgLy8gNDpcbiAgICAnI2U5MCcsIC8vIDU6XG4gIF0sXG59O1xuXG50aGVtZS5mb250cyA9IHtcbiAgcHJpbWFyeTogJ1JvYm90bywgc2Fucy1zZXJpZicsXG4gIHByZTogJ0NvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2UnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJpbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdCc7XG5pbXBvcnQgY3VzdG9tVGhlbWUgZnJvbSAnLi9jdXN0b20nO1xuXG5jb25zdCB0aGVtZXMgPSB7XG4gIGRlZmF1bHRUaGVtZSxcbiAgY3VzdG9tVGhlbWUsXG59O1xuXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWcgPSB7XG4gIHRvcGJhcjogJ2RlZmF1bHRUaGVtZScsXG4gIHNpZGViYXI6ICdkZWZhdWx0VGhlbWUnLFxuICBsYXlvdXQ6ICdkZWZhdWx0VGhlbWUnLFxuICB0aGVtZTogJ2RlZmF1bHRUaGVtZScsXG59O1xuZXhwb3J0IGRlZmF1bHQgdGhlbWVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSAnQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaW50bE1lc3NhZ2VzJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJ0Bpc28vcmVkdXgvbGFuZ3VhZ2VTd2l0Y2hlci9hY3Rpb25zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCB7IGNoYW5nZUxhbmd1YWdlIH0gPSBhY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5ndWFnZVN3aXRjaGVyKCkge1xuICBjb25zdCB7IGxhbmd1YWdlIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5MYW5ndWFnZVN3aXRjaGVyKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVTd2l0Y2hCbG9ja1wiPlxuICAgICAgPGg0PlxuICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwibGFuZ3VhZ2VTd2l0Y2hlci5sYWJlbFwiIC8+XG4gICAgICA8L2g0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZVN3aXRjaEJ0bldyYXBwZXJcIj5cbiAgICAgICAge2NvbmZpZy5vcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbGFuZ3VhZ2VJZCwgaWNvbiB9ID0gb3B0aW9uO1xuICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cbiAgICAgICAgICAgIGxhbmd1YWdlSWQgPT09IGxhbmd1YWdlLmxhbmd1YWdlSWRcbiAgICAgICAgICAgICAgPyAnc2VsZWN0ZWRUaGVtZSBsYW5ndWFnZVN3aXRjaCdcbiAgICAgICAgICAgICAgOiAnbGFuZ3VhZ2VTd2l0Y2gnO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgICAgICAgIGtleT17bGFuZ3VhZ2VJZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlSWQpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IGFsdD1cImZsYWdcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBsYW5ndWFnZSBmcm9tICdAaXNvL2NvbmZpZy9sYW5ndWFnZS5jb25maWcnO1xuXG5pbXBvcnQgZW5nbGlzaExhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvdWsuc3ZnJztcbmltcG9ydCBjaGluZXNlTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9jaGluYS5zdmcnO1xuaW1wb3J0IHNwYW5pc2hMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL3NwYWluLnN2Zyc7XG5pbXBvcnQgZnJlbmNoTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9mcmFuY2Uuc3ZnJztcbmltcG9ydCBpdGFsaWFuTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9pdGFseS5zdmcnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGRlZmF1bHRMYW5ndWFnZTogbGFuZ3VhZ2UsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnZW5nbGlzaCcsXG4gICAgICBsb2NhbGU6ICdlbicsXG4gICAgICB0ZXh0OiAnRW5nbGlzaCcsXG4gICAgICBpY29uOiBlbmdsaXNoTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdjaGluZXNlJyxcbiAgICAgIGxvY2FsZTogJ3poJyxcbiAgICAgIHRleHQ6ICdDaGluZXNlJyxcbiAgICAgIGljb246IGNoaW5lc2VMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ3NwYW5pc2gnLFxuICAgICAgbG9jYWxlOiAnZXMnLFxuICAgICAgdGV4dDogJ1NwYW5pc2gnLFxuICAgICAgaWNvbjogc3BhbmlzaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnZnJlbmNoJyxcbiAgICAgIGxvY2FsZTogJ2ZyJyxcbiAgICAgIHRleHQ6ICdGcmVuY2gnLFxuICAgICAgaWNvbjogZnJlbmNoTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdpdGFsaWFuJyxcbiAgICAgIGxvY2FsZTogJ2l0JyxcbiAgICAgIHRleHQ6ICdJdGFsaWFuJyxcbiAgICAgIGljb246IGl0YWxpYW5MYW5nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudExhbmd1YWdlKGxhbmcpIHtcbiAgbGV0IHNlbGVjZXRlZExhbmd1YWdlID0gY29uZmlnLm9wdGlvbnNbMF07XG4gIGNvbmZpZy5vcHRpb25zLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgIGlmIChsYW5ndWFnZS5sYW5ndWFnZUlkID09PSBsYW5nKSB7XG4gICAgICBzZWxlY2V0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY2V0ZWRMYW5ndWFnZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L3RoZW1lU3dpdGNoZXIvYWN0aW9ucyc7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnQGlzby9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlcic7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tICcuLi9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXInO1xuaW1wb3J0IFRoZW1lcyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgYnVja2V0U1ZHIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9idWNrZXQuc3ZnJztcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSAnQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaW50bE1lc3NhZ2VzJztcbmltcG9ydCBUaGVtZVN3aXRjaGVyU3R5bGUgZnJvbSAnLi9UaGVtZVN3aXRjaGVyLnN0eWxlcyc7XG5cbmNvbnN0IHsgc3dpdGNoQWN0aXZhdGlvbiwgY2hhbmdlVGhlbWUgfSA9IEFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZW1lU3dpdGNoZXIoKSB7XG4gIGNvbnN0IHsgaXNBY3RpdmF0ZWQsIHRvcGJhclRoZW1lLCBzaWRlYmFyVGhlbWUsIGxheW91dFRoZW1lIH0gPSB1c2VTZWxlY3RvcihcbiAgICBzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyXG4gICk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVCdXR0b24gPSB7IGJhY2tncm91bmQ6IHNpZGViYXJUaGVtZS5idXR0b25Db2xvciB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lU3dpdGNoZXJTdHlsZVxuICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2YXRlZCA/ICdpc29UaGVtZVN3aXRjaGVyIGFjdGl2ZScgOiAnaXNvVGhlbWVTd2l0Y2hlcid9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRUaXRsZVdyYXBwZXJcIiBzdHlsZT17c3R5bGVCdXR0b259PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29tcG9uZW50VGl0bGVcIj5cbiAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwidGhlbWVTd2l0Y2hlci5zZXR0aW5nc1wiIC8+XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTd2l0Y2hlckJsb2NrV3JhcHBlclwiPlxuICAgICAgICA8U3dpdGNoZXJcbiAgICAgICAgICBjb25maWc9e1RoZW1lcy5zaWRlYmFyVGhlbWV9XG4gICAgICAgICAgY2hhbmdlVGhlbWU9eyhhdHRyLCB0aGVtZSkgPT4gZGlzcGF0Y2goY2hhbmdlVGhlbWUoYXR0ciwgdGhlbWUpKX1cbiAgICAgICAgICBzZWxlY3RlZElkPXtzaWRlYmFyVGhlbWUudGhlbWVOYW1lfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxTd2l0Y2hlclxuICAgICAgICAgIGNvbmZpZz17VGhlbWVzLnRvcGJhclRoZW1lfVxuICAgICAgICAgIGNoYW5nZVRoZW1lPXsoYXR0ciwgdGhlbWUpID0+IGRpc3BhdGNoKGNoYW5nZVRoZW1lKGF0dHIsIHRoZW1lKSl9XG4gICAgICAgICAgc2VsZWN0ZWRJZD17dG9wYmFyVGhlbWUudGhlbWVOYW1lfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxTd2l0Y2hlclxuICAgICAgICAgIGNvbmZpZz17VGhlbWVzLmxheW91dFRoZW1lfVxuICAgICAgICAgIGNoYW5nZVRoZW1lPXsoYXR0ciwgdGhlbWUpID0+IGRpc3BhdGNoKGNoYW5nZVRoZW1lKGF0dHIsIHRoZW1lKSl9XG4gICAgICAgICAgc2VsZWN0ZWRJZD17bGF5b3V0VGhlbWUudGhlbWVOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2VCdG5XcmFwcGVyXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vaXNvbW9ycGhpYy1yZWFjdC1yZWR1eC1hZG1pbi1kYXNoYm9hcmQvMjAyNjIzMzA/cmVmPXJlZHF0ZWFtXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwdXJjaGFzZUJ0blwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGVCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwidGhlbWVTd2l0Y2hlci5wdXJjaGFzZVwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPVwic3dpdGNoZXJUb2dnbGVCdG5cIlxuICAgICAgICBzdHlsZT17c3R5bGVCdXR0b259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hBY3RpdmF0aW9uKCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17YnVja2V0U1ZHfSBhbHQ9XCJidWNrZXRcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9UaGVtZVN3aXRjaGVyU3R5bGU+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHtcbiAgdHJhbnNpdGlvbixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG59IGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnQGlzby9saWIvaGVscGVycy9ydGwnO1xuXG5jb25zdCBUaGVtZVN3aXRjaGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gIHBhZGRpbmc6IDAgMCA1MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDcwcHg7XG4gIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnLTM0MHB4Jyl9O1xuICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTM0MHB4JyA6ICdpbmhlcml0Jyl9O1xuICB6LWluZGV4OiAxMDAxO1xuICAke3RyYW5zaXRpb24oKX07XG4gICR7Ym94U2hhZG93KCctMXB4IDAgNXB4IHJnYmEoMCwwLDAsMC4yNSknKX07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy0yNzBweCcpfTtcbiAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTI3MHB4JyA6ICdpbmhlcml0Jyl9O1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnMCcpfTtcbiAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnaW5oZXJpdCcpfTtcbiAgfVxuXG4gIC5zd2l0Y2hlciB7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctOThweCcgOiAnaW5oZXJpdCcpfTtcbiAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnLTk4cHgnKX07XG4gIH1cblxuICAuY29tcG9uZW50VGl0bGVXcmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcblxuICAgIC5jb21wb25lbnRUaXRsZSB7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5Td2l0Y2hlckJsb2NrV3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRoZW1lU3dpdGNoQmxvY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAudGhlbWVTd2l0Y2hCdG5XcmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMCAwIDEwcHgnIDogJzAgMTBweCAwIDAnfTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgJHtib3JkZXJSYWRpdXMoJzNweCcpfTtcblxuICAgICAgICAgICYubGFuZ3VhZ2VTd2l0Y2gge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgICYuc2VsZWN0ZWRUaGVtZSB7XG4gICAgICAgICAgICAgICY6YmVmb3JlLFxuICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnLTNweCd9O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTNweCcgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc2VsZWN0ZWRUaGVtZSB7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdjb2xvcicsIDEzKX07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy0ycHgnfTtcbiAgICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTJweCcgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgICAgICAke2JvcmRlclJhZGl1cygnNTAlJyl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2NvbG9yJywgMTMpfTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdjb2xvcicsIDEzKX07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy0ycHgnfTtcbiAgICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTJweCcgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2VsZWN0ZWRBbmltYXRpb24gMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzZWxlY3RlZEFuaW1hdGlvbiAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAke2JvcmRlclJhZGl1cygnNTAlJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zd2l0Y2hlclRvZ2dsZUJ0biB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy01MHB4Jyl9O1xuICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTUwcHgnIDogJ2luaGVyaXQnKX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDNweCAzcHggMCcgOiAnM3B4IDAgMCAzcHgnfTtcbiAgICAke2JveFNoYWRvdygnLTJweCAwIDVweCByZ2JhKDAsMCwwLDAuMiknKX07XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDIzcHg7XG4gICAgfVxuICB9XG5cbiAgLnB1cmNoYXNlQnRuV3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3R0b206IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgIC5wdXJjaGFzZUJ0biB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJHtib3JkZXJSYWRpdXMoJzVweCcpfTtcbiAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDEzKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNlbGVjdGVkQW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2VsZWN0ZWRBbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhEaXJlY3Rpb24oVGhlbWVTd2l0Y2hlclN0eWxlKTtcbiIsImltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSAnQGlzby9jb25maWcvdGhlbWUvdGhlbWUuY29uZmlnJztcbmNvbnN0IGNoYW5nZVRoZW1lcyA9IHtcbiAgaWQ6ICdjaGFuZ2VUaGVtZXMnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnRoZW1lLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCB0b3BiYXJUaGVtZSA9IHtcbiAgaWQ6ICd0b3BiYXJUaGVtZScsXG4gIGxhYmVsOiAndGhlbWVTd2l0Y2hlci5Ub3BiYXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnRvcGJhcixcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMDM2NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NTM0ZmYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDgyRkYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTQnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjJlNjInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjE0NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTYnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NjcwYTInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTcnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OTQ5ODInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBzaWRlYmFyVGhlbWUgPSB7XG4gIGlkOiAnc2lkZWJhclRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLlNpZGViYXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnNpZGViYXIsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdkZWZhdWx0VGhlbWUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMzIzMzMyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLFxuICAgICAgdGV4dENvbG9yOiAnIzc4ODE5NScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMDM2NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NTM0ZmYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDgyRkYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTQnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjJlNjInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjE0NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTYnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NjcwYTInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTcnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OTQ5ODInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBsYXlvdXRUaGVtZSA9IHtcbiAgaWQ6ICdsYXlvdXRUaGVtZScsXG4gIGxhYmVsOiAndGhlbWVTd2l0Y2hlci5CYWNrZ3JvdW5kJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy5sYXlvdXQsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdkZWZhdWx0VGhlbWUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMUYzRjYnLFxuICAgICAgdGV4dENvbG9yOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzIzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjRjlGOUY5JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUY5RjknLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZWJlYmViJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmViZWInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBjdXN0b21pemVkVGhlbWVzID0ge1xuICBjaGFuZ2VUaGVtZXMsXG4gIHRvcGJhclRoZW1lLFxuICBzaWRlYmFyVGhlbWUsXG4gIGxheW91dFRoZW1lLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGhlbWUoYXR0cmlidXRlLCBzZWxlY3RlZFRoZW1lbmFtZSkge1xuICBsZXQgc2VsZWNldGVkVGhlbWUgPSB7fTtcbiAgY3VzdG9taXplZFRoZW1lc1thdHRyaWJ1dGVdLm9wdGlvbnMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgaWYgKHRoZW1lLnRoZW1lTmFtZSA9PT0gc2VsZWN0ZWRUaGVtZW5hbWUpIHtcbiAgICAgIHNlbGVjZXRlZFRoZW1lID0gdGhlbWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlbGVjZXRlZFRoZW1lO1xufVxuZXhwb3J0IGRlZmF1bHQgY3VzdG9taXplZFRoZW1lcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBkaXJlY3Rpb24gPSAnbHRyJztcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmdldEF0dHJpYnV0ZSgnZGlyJyk7XG59XG5jb25zdCB3aXRoRGlyZWN0aW9uID0gQ29tcG9uZW50ID0+IHByb3BzID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYXRhLXJ0bD17ZGlyZWN0aW9ufSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXJlY3Rpb247XG5leHBvcnQgeyBkaXJlY3Rpb24gfTtcbiIsIi8vIFRyYW5zaXRpb25cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKHRpbWluZyA9IDAuMykge1xuICByZXR1cm4gYFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICAtbXMtdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICBgO1xufVxuXG4vLyBCb3JkZXIgUmFkaXVzXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzKHJhZGl1cyA9IDApIHtcbiAgcmV0dXJuIGBcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHtyYWRpdXN9O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gICAgICAtbXMtdHJhbnNpdGlvbjogJHtyYWRpdXN9O1xuICAgICAgLW8tYm9yZGVyLXJhZGl1czogJHtyYWRpdXN9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXN9O1xuICBgO1xufVxuXG4vLyBCb3ggU2hhZG93XG5leHBvcnQgZnVuY3Rpb24gYm94U2hhZG93KHNoYWRvdyA9ICdub25lJykge1xuICByZXR1cm4gYFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAke3NoYWRvd307XG4gICAgICAtbW96LWJveC1zaGFkb3c6ICR7c2hhZG93fTtcbiAgICAgIGJveC1zaGFkb3c6ICR7c2hhZG93fTtcbiAgYDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3KHdpZHRoKSB7XG4gIGxldCBuZXdWaWV3ID0gJ01vYmlsZVZpZXcnO1xuICBpZiAod2lkdGggPiAxMjIwKSB7XG4gICAgbmV3VmlldyA9ICdEZXNrdG9wVmlldyc7XG4gIH0gZWxzZSBpZiAod2lkdGggPiA3NjcpIHtcbiAgICBuZXdWaWV3ID0gJ1RhYlZpZXcnO1xuICB9XG4gIHJldHVybiBuZXdWaWV3O1xufVxuY29uc3QgYWN0aW9ucyA9IHtcbiAgQ09MTFBTRV9DSEFOR0U6ICdDT0xMUFNFX0NIQU5HRScsXG4gIENPTExQU0VfT1BFTl9EUkFXRVI6ICdDT0xMUFNFX09QRU5fRFJBV0VSJyxcbiAgQ0hBTkdFX09QRU5fS0VZUzogJ0NIQU5HRV9PUEVOX0tFWVMnLFxuICBUT0dHTEVfQUxMOiAnVE9HR0xFX0FMTCcsXG4gIENIQU5HRV9DVVJSRU5UOiAnQ0hBTkdFX0NVUlJFTlQnLFxuICBDTEVBUl9NRU5VOiAnQ0xFQVJfTUVOVScsXG4gIHRvZ2dsZUNvbGxhcHNlZDogKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTExQU0VfQ0hBTkdFLFxuICB9KSxcbiAgdG9nZ2xlQWxsOiAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBnZXRWaWV3KHdpZHRoKTtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB2aWV3ICE9PSAnRGVza3RvcFZpZXcnO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLlRPR0dMRV9BTEwsXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICB2aWV3LFxuICAgICAgaGVpZ2h0LFxuICAgIH07XG4gIH0sXG4gIHRvZ2dsZU9wZW5EcmF3ZXI6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5DT0xMUFNFX09QRU5fRFJBV0VSLFxuICB9KSxcbiAgY2hhbmdlT3BlbktleXM6IG9wZW5LZXlzID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfT1BFTl9LRVlTLFxuICAgIG9wZW5LZXlzLFxuICB9KSxcbiAgY2hhbmdlQ3VycmVudDogY3VycmVudCA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuQ0hBTkdFX0NVUlJFTlQsXG4gICAgY3VycmVudCxcbiAgfSksXG4gIGNsZWFyTWVudTogKCkgPT4gKHsgdHlwZTogYWN0aW9ucy5DTEVBUl9NRU5VIH0pLFxufTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG4iLCJjb25zdCBhY3Rpb25zID0ge1xuICBJTklUX0RBVEE6ICdFQ09NTUVSQ0VfSU5JVF9EQVRBJyxcbiAgSU5JVF9EQVRBX1NBR0E6ICdFQ09NTUVSQ0VfSU5JVF9EQVRBX1NBR0EnLFxuICBVUERBVEVfREFUQTogJ0VDT01NRVJDRV9VUERBVEVfREFUQScsXG4gIFVQREFURV9EQVRBX1NBR0E6ICdFQ09NTUVSQ0VfVVBEQVRFX0RBVEFfU0FHQScsXG4gIENIQU5HRV9WSUVXOiAnRUNPTU1FUkNFX0NIQU5HRV9WSUVXJyxcbiAgVklFV19UT1BCQVJfQ0FSVDogJ0VDT01NRVJDRV9WSUVXX1RPUEJBUl9DQVJUJyxcbiAgaW5pdERhdGE6ICgpID0+ICh7IHR5cGU6IGFjdGlvbnMuSU5JVF9EQVRBX1NBR0EgfSksXG4gIGNoYW5nZVZpZXc6IHZpZXcgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9WSUVXLFxuICAgIHZpZXcsXG4gIH0pLFxuICBjaGFuZ2VWaWV3VG9wYmFyQ2FydDogdmlld1RvcGJhckNhcnQgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLlZJRVdfVE9QQkFSX0NBUlQsXG4gICAgICB2aWV3VG9wYmFyQ2FydCxcbiAgICB9O1xuICB9LFxuICBjaGFuZ2VQcm9kdWN0UXVhbnRpdHk6IHByb2R1Y3RRdWFudGl0eSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGdldFN0YXRlKCkuRWNvbW1lcmNlO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9EQVRBX1NBR0EsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBwcm9kdWN0UXVhbnRpdHksXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuICBhZGRUb0NhcnQ6IHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCB7IHByb2R1Y3RzLCBwcm9kdWN0UXVhbnRpdHkgfSA9IGdldFN0YXRlKCkuRWNvbW1lcmNlO1xuICAgICAgY29uc3Qgb2JqZWN0SUQgPSBwcm9kdWN0Lm9iamVjdElEO1xuICAgICAgcHJvZHVjdFF1YW50aXR5LnB1c2goeyBvYmplY3RJRCwgcXVhbnRpdHk6IDEgfSk7XG4gICAgICBwcm9kdWN0c1tvYmplY3RJRF0gPSBwcm9kdWN0O1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9EQVRBX1NBR0EsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBwcm9kdWN0UXVhbnRpdHksXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG4iLCJpbXBvcnQgeyBnZXRDdXJyZW50TGFuZ3VhZ2UgfSBmcm9tICcuL2NvbmZpZyc7XG5jb25zdCBhY3Rpb25zID0ge1xuICBDSEFOR0VfTEFOR1VBR0U6ICdDSEFOR0VfTEFOR1VBR0UnLFxuICBBQ1RJVkFURV9MQU5HX01PREFMOiAnQUNUSVZBVEVfTEFOR19NT0RBTCcsXG4gIHN3aXRjaEFjdGl2YXRpb246ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5BQ1RJVkFURV9MQU5HX01PREFMLFxuICB9KSxcbiAgY2hhbmdlTGFuZ3VhZ2U6IGxhbmd1YWdlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfTEFOR1VBR0UsXG4gICAgICBsYW5ndWFnZTogZ2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICB9O1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG4iLCJpbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnQGlzby9jb25maWcvbGFuZ3VhZ2UuY29uZmlnJztcblxuaW1wb3J0IGVuZ2xpc2hMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL3VrLnN2Zyc7XG5pbXBvcnQgY2hpbmVzZUxhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvY2hpbmEuc3ZnJztcbmltcG9ydCBzcGFuaXNoTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9zcGFpbi5zdmcnO1xuaW1wb3J0IGZyZW5jaExhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvZnJhbmNlLnN2Zyc7XG5pbXBvcnQgaXRhbGlhbkxhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvaXRhbHkuc3ZnJztcblxuY29uc3QgY29uZmlnID0ge1xuICBkZWZhdWx0TGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2VuZ2xpc2gnLFxuICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgdGV4dDogJ0VuZ2xpc2gnLFxuICAgICAgaWNvbjogZW5nbGlzaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnY2hpbmVzZScsXG4gICAgICBsb2NhbGU6ICd6aCcsXG4gICAgICB0ZXh0OiAnQ2hpbmVzZScsXG4gICAgICBpY29uOiBjaGluZXNlTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdzcGFuaXNoJyxcbiAgICAgIGxvY2FsZTogJ2VzJyxcbiAgICAgIHRleHQ6ICdTcGFuaXNoJyxcbiAgICAgIGljb246IHNwYW5pc2hMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2ZyZW5jaCcsXG4gICAgICBsb2NhbGU6ICdmcicsXG4gICAgICB0ZXh0OiAnRnJlbmNoJyxcbiAgICAgIGljb246IGZyZW5jaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnaXRhbGlhbicsXG4gICAgICBsb2NhbGU6ICdpdCcsXG4gICAgICB0ZXh0OiAnSXRhbGlhbicsXG4gICAgICBpY29uOiBpdGFsaWFuTGFuZyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMYW5ndWFnZShsYW5nKSB7XG4gIGxldCBzZWxlY2V0ZWRMYW5ndWFnZSA9IGNvbmZpZy5vcHRpb25zWzBdO1xuICBjb25maWcub3B0aW9ucy5mb3JFYWNoKGxhbmd1YWdlID0+IHtcbiAgICBpZiAobGFuZ3VhZ2UubGFuZ3VhZ2VJZCA9PT0gbGFuZykge1xuICAgICAgc2VsZWNldGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VsZWNldGVkTGFuZ3VhZ2U7XG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJjb25zdCBwcm9maWxlQWN0aW9ucyA9IHtcbiAgRkVUQ0hfUFJPRklMRV9EQVRBX1NUQVJUOiAnRkVUQ0hfUFJPRklMRV9EQVRBX1NUQVJUJyxcbiAgRkVUQ0hfUFJPRklMRV9EQVRBX1NVQ0NFU1M6ICdGRVRDSF9QUk9GSUxFX0RBVEFfU1VDQ0VTUycsXG4gIEZFVENIX1BST0ZJTEVfREFUQV9GQUlMVVJFOiAnRkVUQ0hfUFJPRklMRV9EQVRBX0ZBSUxVUkUnLFxuICBTRVRfUFJPRklMRV9EQVRBOiAnU0VUX1BST0ZJTEVfREFUQScsXG4gIGZldGNoUHJvZmlsZURhdGFTdGFydDogKCkgPT4gKHtcbiAgICB0eXBlOiBwcm9maWxlQWN0aW9ucy5GRVRDSF9QUk9GSUxFX0RBVEFfU1RBUlQsXG4gIH0pLFxuICBmZXRjaFByb2ZpbGVEYXRhU3VjY2VzczogcHJvZmlsZSA9PiAoe1xuICAgIHR5cGU6IHByb2ZpbGVBY3Rpb25zLkZFVENIX1BST0ZJTEVfREFUQV9TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHByb2ZpbGUsXG4gIH0pLFxuICBmZXRjaFByb2ZpbGVEYXRhRmFpbHVyZTogZXJyb3IgPT4gKHtcbiAgICB0eXBlOiBwcm9maWxlQWN0aW9ucy5GRVRDSF9QUk9GSUxFX0RBVEFfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlQWN0aW9ucztcbiIsImltcG9ydCB7IGdldEN1cnJlbnRUaGVtZSB9IGZyb20gJy4vY29uZmlnJztcbmNvbnN0IGFjdGlvbnMgPSB7XG4gIENIQU5HRV9USEVNRTogJ0NIQU5HRV9USEVNRScsXG4gIFNXSVRDSF9BQ1RJVkFUSU9OOiAnU1dJVENIX0FDVElWQVRJT04nLFxuICBzd2l0Y2hBY3RpdmF0aW9uOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuU1dJVENIX0FDVElWQVRJT04sXG4gIH0pLFxuICBjaGFuZ2VUaGVtZTogKGF0dHJpYnV0ZSwgdGhlbWVOYW1lKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSBnZXRDdXJyZW50VGhlbWUoYXR0cmlidXRlLCB0aGVtZU5hbWUpO1xuICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYXlvdXRUaGVtZScpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICdpc29tb3JwaGljQ29udGVudCdcbiAgICAgIClbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhlbWUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfVEhFTUUsXG4gICAgICBhdHRyaWJ1dGUsXG4gICAgICB0aGVtZSxcbiAgICB9O1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XG4iLCJpbXBvcnQgeyB0aGVtZUNvbmZpZyB9IGZyb20gJ0Bpc28vY29uZmlnL3RoZW1lL3RoZW1lLmNvbmZpZyc7XG5jb25zdCBjaGFuZ2VUaGVtZXMgPSB7XG4gIGlkOiAnY2hhbmdlVGhlbWVzJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy50aGVtZSxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdjdXN0b21UaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCB0b3BiYXJUaGVtZSA9IHtcbiAgaWQ6ICd0b3BiYXJUaGVtZScsXG4gIGxhYmVsOiAndGhlbWVTd2l0Y2hlci5Ub3BiYXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnRvcGJhcixcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMDM2NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NTM0ZmYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDgyRkYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTQnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjJlNjInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjE0NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTYnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NjcwYTInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTcnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OTQ5ODInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBzaWRlYmFyVGhlbWUgPSB7XG4gIGlkOiAnc2lkZWJhclRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLlNpZGViYXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnNpZGViYXIsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdkZWZhdWx0VGhlbWUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMzIzMzMyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLFxuICAgICAgdGV4dENvbG9yOiAnIzc4ODE5NScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMDM2NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NTM0ZmYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDgyRkYnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTQnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MjJlNjInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjE0NGMnLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTYnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0NjcwYTInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTcnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OTQ5ODInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBsYXlvdXRUaGVtZSA9IHtcbiAgaWQ6ICdsYXlvdXRUaGVtZScsXG4gIGxhYmVsOiAndGhlbWVTd2l0Y2hlci5CYWNrZ3JvdW5kJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy5sYXlvdXQsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdkZWZhdWx0VGhlbWUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMUYzRjYnLFxuICAgICAgdGV4dENvbG9yOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTEnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzIzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjRjlGOUY5JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUY5RjknLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTMnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZWJlYmViJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmViZWInLFxuICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgXSxcbn07XG5jb25zdCBjdXN0b21pemVkVGhlbWVzID0ge1xuICBjaGFuZ2VUaGVtZXMsXG4gIHRvcGJhclRoZW1lLFxuICBzaWRlYmFyVGhlbWUsXG4gIGxheW91dFRoZW1lLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGhlbWUoYXR0cmlidXRlLCBzZWxlY3RlZFRoZW1lbmFtZSkge1xuICBsZXQgc2VsZWNldGVkVGhlbWUgPSB7fTtcbiAgY3VzdG9taXplZFRoZW1lc1thdHRyaWJ1dGVdLm9wdGlvbnMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgaWYgKHRoZW1lLnRoZW1lTmFtZSA9PT0gc2VsZWN0ZWRUaGVtZW5hbWUpIHtcbiAgICAgIHNlbGVjZXRlZFRoZW1lID0gdGhlbWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlbGVjZXRlZFRoZW1lO1xufVxuZXhwb3J0IGRlZmF1bHQgY3VzdG9taXplZFRoZW1lcztcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgU3BpbjtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHbGlkZSBmcm9tICdAZ2xpZGVqcy9nbGlkZSc7XG5pbXBvcnQgJ0BnbGlkZWpzL2dsaWRlL2Rpc3QvY3NzL2dsaWRlLmNvcmUubWluLmNzcyc7XG5pbXBvcnQgR2xpZGVXcmFwcGVyLCB7XG4gIEdsaWRlU2xpZGVXcmFwcGVyLFxuICBCdXR0b25Db250cm9sV3JhcHBlcixcbiAgQnV0dG9uV3JhcHBlcixcbiAgQnVsbGV0Q29udHJvbFdyYXBwZXIsXG4gIEJ1bGxldEJ1dHRvbixcbiAgRGVmYXVsdEJ0bixcbn0gZnJvbSAnLi9HbGlkZUNhcm91c2VsLnN0eWxlJztcblxuY29uc3QgR2xpZGVDYXJvdXNlbCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIG9wdGlvbnMsXG4gIGNvbnRyb2xzLFxuICBwcmV2QnV0dG9uLFxuICBuZXh0QnV0dG9uLFxuICBidWxsZXRzLFxuICBudW1iZXJPZkJ1bGxldHMsXG4gIGNhcm91c2VsU2VsZWN0b3IsXG59KSA9PiB7XG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5LlxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydnbGlkZSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nLlxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvLyBudW1iZXIgb2YgYnVsbGV0cyBsb29wLlxuICBjb25zdCB0b3RhbEJ1bGxldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1bGxldHM7IGkrKykge1xuICAgIHRvdGFsQnVsbGV0cy5wdXNoKGkpO1xuICB9XG5cbiAgLy8gTG9hZCBnbGlkZS5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnbGlkZSA9IG5ldyBHbGlkZShcbiAgICAgIGNhcm91c2VsU2VsZWN0b3IgPyBgIyR7Y2Fyb3VzZWxTZWxlY3Rvcn1gIDogJyNnbGlkZScsXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9XG4gICAgKTtcbiAgICBnbGlkZS5tb3VudCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2xpZGVXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfVxuICAgICAgaWQ9e2Nhcm91c2VsU2VsZWN0b3IgfHwgJ2dsaWRlJ31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsaWRlX190cmFja1wiIGRhdGEtZ2xpZGUtZWw9XCJ0cmFja1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2xpZGVfX3NsaWRlc1wiPntjaGlsZHJlbn08L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiogaWYgY29udHJvbHMgcHJvcCB0cnVlIHRoZW4gc2hvdyBjb250cm9scyBuYXYuICovfVxuICAgICAge2NvbnRyb2xzICYmIChcbiAgICAgICAgPEJ1dHRvbkNvbnRyb2xXcmFwcGVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2xpZGVfX2NvbnRyb2xzXCJcbiAgICAgICAgICBkYXRhLWdsaWRlLWVsPVwiY29udHJvbHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbldyYXBwZXIgY2xhc3NOYW1lPVwiZ2xpZGVfX3ByZXYtLWFyZWFcIiBkYXRhLWdsaWRlLWRpcj1cIjxcIj5cbiAgICAgICAgICAgIHtwcmV2QnV0dG9uID8gcHJldkJ1dHRvbiA6IDxEZWZhdWx0QnRuPlByZXY8L0RlZmF1bHRCdG4+fVxuICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICA8QnV0dG9uV3JhcHBlciBjbGFzc05hbWU9XCJnbGlkZV9fbmV4dC0tYXJlYVwiIGRhdGEtZ2xpZGUtZGlyPVwiPlwiPlxuICAgICAgICAgICAge25leHRCdXR0b24gPyBuZXh0QnV0dG9uIDogPERlZmF1bHRCdG4+TmV4dDwvRGVmYXVsdEJ0bj59XG4gICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxuICAgICAgICA8L0J1dHRvbkNvbnRyb2xXcmFwcGVyPlxuICAgICAgKX1cblxuICAgICAgey8qKiBpZiBidWxsZXRzIHByb3AgdHJ1ZSB0aGVuIHNob3cgYnVsbGV0cyBuYXYuICovfVxuICAgICAge2J1bGxldHMgJiYgKFxuICAgICAgICA8QnVsbGV0Q29udHJvbFdyYXBwZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fYnVsbGV0c1wiXG4gICAgICAgICAgZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzW25hdl1cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge3RvdGFsQnVsbGV0cy5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgICA8QnVsbGV0QnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fYnVsbGV0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWdsaWRlLWRpcj17YD0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICA8L0J1bGxldENvbnRyb2xXcmFwcGVyPlxuICAgICAgKX1cbiAgICA8L0dsaWRlV3JhcHBlcj5cbiAgKTtcbn07XG5cbi8vIEdsaWRlIFNsaWRlIHdyYXBwZXIgY29tcG9uZW50LlxuY29uc3QgR2xpZGVTbGlkZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R2xpZGVTbGlkZVdyYXBwZXIgY2xhc3NOYW1lPVwiZ2xpZGVfX3NsaWRlXCI+e2NoaWxkcmVufTwvR2xpZGVTbGlkZVdyYXBwZXI+XG4gICk7XG59O1xuXG5HbGlkZUNhcm91c2VsLnByb3BUeXBlcyA9IHtcbiAgLyoqIGNsYXNzTmFtZSBvZiB0aGUgR2xpZGVDYXJvdXNlbC4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDaGlsZHJlbi4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKiBZb3UgY2FuIGFkZCB5b3VyIGN1c3RvbSBnbGlkIG9wdGlvbnMgdXNpbmcgdGhpcyBwcm9wLiAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBIaWRlIHx8IHNob3cgY29udHJvbHMgbmF2LiAqL1xuICBjb250cm9sczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEhpZGUgfHwgc2hvdyBidWxsZXRzIG5hdi4gKi9cbiAgYnVsbGV0czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFRoaXMgcHJvcCBvbmx5IHRha2UgeW91ciBzbGlkZXIgLyBjYXJvdXNlbCAvIHRlc3RpbW9uaWFscyBkYXRhIGxlbmd0aC4gW05vdGU6IGlmIFwiYnVsbGV0c1wiIHByb3BzIGlzIHNldCBUUlVFLCB0aGVuIFwibnVtYmVyT2ZCdWxsZXRzXCIgbXVzdCBiZSBhZGRlZF0gKi9cbiAgbnVtYmVyT2ZCdWxsZXRzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKiBTZXQgcHJldmlvdXMgYnV0dG9uIGZvciBnbGlkZSBjYXJvdXNlbC4gKi9cbiAgcHJldkJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKiBTZXQgbmV4dCBidXR0b24gZm9yIGdsaWRlIGNhcm91c2VsLiAqL1xuICBuZXh0QnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG59O1xuXG5HbGlkZVNsaWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqIENoaWxkcmVuLiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG4vLyBHbGlkZUNhcm91c2VsIGRlZmF1bHQgcHJvcHMuXG5HbGlkZUNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG59O1xuXG5leHBvcnQgeyBHbGlkZVNsaWRlIH07XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gR2xpZGUgd3JhcHBlciBzdHlsZVxuY29uc3QgR2xpZGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmdsaWRlX19zbGlkZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmdsaWRlX19jb250cm9scyB7XG4gICAgLmdsaWRlX19wcmV2LS1hcmVhLFxuICAgIC5nbGlkZV9fbmV4dC0tYXJlYSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBHbGlkZSBzbGlkZSB3cmFwcGVyIHN0eWxlXG5jb25zdCBHbGlkZVNsaWRlV3JhcHBlciA9IHN0eWxlZC5saWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuLy8gQnV0dG9uIHdyYXBwZXIgc3R5bGVcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5gO1xuXG4vLyBCdXR0b25Db250cm9sV3JhcHBlciBzdHlsZVxuY29uc3QgQnV0dG9uQ29udHJvbFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XG5cbi8vIEJ1bGxldENvbnRyb2xXcmFwcGVyIHN0eWxlXG5jb25zdCBCdWxsZXRDb250cm9sV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuLy8gQnVsbGV0QnV0dG9uIHN0eWxlXG5jb25zdCBCdWxsZXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogNHB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcblxuICAmOmhvdmVyLFxuICAmLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OTc5MTtcbiAgfVxuYDtcblxuLy8gZGVmYXVsdCBidXR0b24gc3R5bGVcbmNvbnN0IERlZmF1bHRCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweCAzcHg7XG5gO1xuXG5leHBvcnQge1xuICBHbGlkZVNsaWRlV3JhcHBlcixcbiAgQnV0dG9uQ29udHJvbFdyYXBwZXIsXG4gIEJ1dHRvbldyYXBwZXIsXG4gIEJ1bGxldENvbnRyb2xXcmFwcGVyLFxuICBCdWxsZXRCdXR0b24sXG4gIERlZmF1bHRCdG4sXG59O1xuZXhwb3J0IGRlZmF1bHQgR2xpZGVXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29udGFpbmVyV3JhcHBlciBmcm9tICcuL0NvbnRhaW5lci5zdHlsZSc7XG5cbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGZ1bGxXaWR0aCwgbm9HdXR0ZXIsIGZsdWlkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBmdWxsV2lkdGg9e2Z1bGxXaWR0aH1cbiAgICAgIG5vR3V0dGVyPXtub0d1dHRlcn1cbiAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250YWluZXJXcmFwcGVyPlxuICApO1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICBub0d1dHRlcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5mdWxsV2lkdGggJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGB9O1xuICAke3Byb3BzID0+XG4gICAgKHByb3BzLm5vR3V0dGVyICYmXG4gICAgICBjc3NgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIGApIHx8XG4gICAgY3NzYFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgYH07XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmZsdWlkICYmXG4gICAgY3NzYFxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xuICAgICAgfVxuICAgIGB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgbWF4LXdpZHRoOiA5NzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldyYXBwZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9idXR0b24vc3R5bGUvY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL3Rvb2x0aXAvc3R5bGUvY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9idXR0b24vc3R5bGUvY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImNvbnN0IGFjdGlvbnMgPSB7XG4gIExPR0lOX1JFUVVFU1RfU1RBUlQ6ICdMT0dJTl9SRVFVRVNUX1NUQVJUJyxcbiAgSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQ6ICdKV1RfTE9HSU5fUkVRVUVTVF9TVEFSVCcsXG4gIExPR0lOX1JFUVVFU1RfU1VDQ0VTUzogJ0xPR0lOX1JFUVVFU1RfU1VDQ0VTUycsXG4gIExPR0lOX1JFUVVFU1RfRkFJTFVSRTogJ0xPR0lOX1JFUVVFU1RfRkFJTFVSRScsXG4gIExPR09VVF9SRVFVRVNUX1NUQVJUOiAnTE9HT1VUX1JFUVVFU1RfU1RBUlQnLFxuICBMT0dPVVRfUkVRVUVTVF9TVUNDRVNTOiAnTE9HT1VUX1JFUVVFU1RfU1VDQ0VTUycsXG4gIExPR09VVF9SRVFVRVNUX0ZBSUxVUkU6ICdMT0dPVVRfUkVRVUVTVF9GQUlMVVJFJyxcblxuICBsb2dpbjogY3JlZGVudGlhbHMgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1RBUlQsXG4gICAgcGF5bG9hZDogY3JlZGVudGlhbHMsXG4gIH0pLFxuICBqd3RMb2dpbjogKGhpc3RvcnksIHVzZXJJbmZvKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQsXG4gICAgcGF5bG9hZDogeyBoaXN0b3J5LCB1c2VySW5mbyB9LFxuICB9KSxcbiAgbG9naW5SZXF1ZXN0U3VjY2VzczogY3JlZGVudGlhbHMgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBjcmVkZW50aWFscyxcbiAgfSksXG4gIGxvZ2luUmVxdWVzdEZhaWx1cmU6IGVycm9yID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dJTl9SRVFVRVNUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogZXJyb3IsXG4gIH0pLFxuICBsb2dvdXQ6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9TVEFSVCxcbiAgfSksXG4gIGxvZ291dFJlcXVlc3RTdWNjZXNzOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfU1VDQ0VTUyxcbiAgfSksXG4gIGxvZ291dFJlcXVlc3RGYWlsdXJlOiBlcnJvciA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XG4gICAgICBleHBpcmVzOiAxLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0ga2V5ID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XG4gICAgICBleHBpcmVzOiAxLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcbiAgICA/IGdldENvb2tpZUZyb21Ccm93c2VyKGtleSlcbiAgICA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4ge1xuICByZXR1cm4gY29va2llLmdldChrZXkpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgcmF3Q29va2llID0gcmVxLmhlYWRlcnMuY29va2llXG4gICAgLnNwbGl0KCc7JylcbiAgICAuZmluZChjID0+IGMudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSk7XG4gIGlmICghcmF3Q29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gcmF3Q29va2llLnNwbGl0KCc9JylbMV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoeyB0b2tlbiB9KSA9PiB7XG4gIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4sIHsgZXhwaXJlczogMSB9KTtcbiAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gY3R4ID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpO1xuXG4gIC8qXG4gICAqIElmIGBjdHgucmVxYCBpcyBhdmFpbGFibGUgaXQgbWVhbnMgd2UgYXJlIG9uIHRoZSBzZXJ2ZXIuXG4gICAqIEFkZGl0aW9uYWxseSBpZiB0aGVyZSdzIG5vIHRva2VuIGl0IG1lYW5zIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4uXG4gICAqL1xuICBpZiAoY3R4LnJlcSAmJiAhdG9rZW4pIHtcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvc2lnbmluJyB9KTtcbiAgICBjdHgucmVzLmVuZCgpO1xuICB9XG5cbiAgLy8gV2UgYWxyZWFkeSBjaGVja2VkIGZvciBzZXJ2ZXIuIFRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIG9uIGNsaWVudC5cbiAgaWYgKCF0b2tlbikge1xuICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICBjb29raWUucmVtb3ZlKCd0b2tlbicpO1xuICAvLyB0byBzdXBwb3J0IGxvZ2dpbmcgb3V0IGZyb20gYWxsIHdpbmRvd3NcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvdXQnLCBEYXRlLm5vdygpKTtcbiAgUm91dGVyLnB1c2goJy9zaWduaW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgV3JhcHBlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQgZnJvbSBzdG9yYWdlIScpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBzeW5jTG9nb3V0KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBzeW5jTG9nb3V0KTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dvdXQnKTtcbiAgICAgIH07XG4gICAgfSwgW251bGxdKTtcblxuICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICB9O1xuXG4gIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGF1dGgoY3R4KTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID1cbiAgICAgIFdyYXBwZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAoYXdhaXQgV3JhcHBlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSk7XG5cbiAgICByZXR1cm4geyAuLi5jb21wb25lbnRQcm9wcywgdG9rZW4gfTtcbiAgfTtcblxuICByZXR1cm4gV3JhcHBlcjtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL1NpZGViYXIvU2lkZWJhcic7XG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICdAaXNvL2NvbnRhaW5lcnMvVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyJztcbmltcG9ydCBUb3BiYXIgZnJvbSAnLi4vVG9wYmFyL1RvcGJhcic7XG5pbXBvcnQgc2l0ZUNvbmZpZyBmcm9tICdAaXNvL2NvbmZpZy9zaXRlLmNvbmZpZyc7XG5pbXBvcnQgQXBwSG9sZGVyIGZyb20gJy4vRGFzaGJvYXJkTGF5b3V0LnN0eWxlcyc7XG5cbmNvbnN0IHsgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwSG9sZGVyPlxuICAgICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIDxUb3BiYXIgLz5cblxuICAgICAgICA8TGF5b3V0IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnLCBvdmVyZmxvd1g6ICdoaWRkZW4nIH19PlxuICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgPExheW91dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXNvQ29udGVudE1haW5MYXlvdXRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29tb3JwaGljQ29udGVudFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzcwcHggMCAwJyxcbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmMWYzZjYnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2VkZWRlZCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaXRlQ29uZmlnLmZvb3RlclRleHR9XG4gICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxUaGVtZVN3aXRjaGVyIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0FwcEhvbGRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5cbmNvbnN0IEFwcEhvbGRlciA9IHN0eWxlZC5kaXZgXG4gIC50cmlnZ2VyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICB9XG5cbiAgLnRyaWdnZXI6aG92ZXIge1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gIH1cblxuICAuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQgLmFudGljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCAubmF2LXRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYW50LWxheW91dCB7XG4gICAgYmFja2dyb3VuZDogJHtwYWxldHRlKCdzZWNvbmRhcnknLCAxKX07XG5cbiAgICAmLmlzb0NvbnRlbnRNYWluTGF5b3V0IHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaXNvTGF5b3V0Q29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pc29tb3JwaGljTGF5b3V0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgIH1cbiAgfVxuXG4gIC5hbnQtbGF5b3V0LWZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQXBwSG9sZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQGlzby91aS9BbnRkL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IEF2YXRhckNhcmQgZnJvbSAnQGlzby9jb21wb25lbnRzL0F2YXRhckNhcmQvQXZhdGFyQ2FyZCc7XG5pbXBvcnQgV3JhcHBlciwgeyBGb2xsb3dlckxpc3QsIExpc3RJdGVtIH0gZnJvbSAnLi9Gb2xsb3dlcnMuc3R5bGVzJztcblxuY29uc3QgRm9sbG93ZXJzID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8aDM+XG4gICAgICAgIDxzdHJvbmc+e2RhdGEubGVuZ3RofTwvc3Ryb25nPiBGb2xsb3dlcnNcbiAgICAgIDwvaDM+XG4gICAgICA8Rm9sbG93ZXJMaXN0PlxuICAgICAgICB7ZGF0YS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZGF0YS5tYXAoZm9sbG93ZXIgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17YGZvbGxvd2VyLWtleSR7Zm9sbG93ZXIuaWR9YH0+XG4gICAgICAgICAgICAgIDxBdmF0YXJDYXJkIGF2YXRhcj17Zm9sbG93ZXIuYXZhdGFyfSBuYW1lPXtmb2xsb3dlci5uYW1lfSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uPkZvbGxvd2luZzwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvRm9sbG93ZXJMaXN0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VycztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICA+IGgzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDAgMTBweDtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzdHJvbmcge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb2xsb3dlckxpc3QgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiAzOTZweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAuYXZhdGFyLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAaXNvL3VpL0FudGQvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgQXZhdGFyQ2FyZCBmcm9tICdAaXNvL2NvbXBvbmVudHMvQXZhdGFyQ2FyZC9BdmF0YXJDYXJkJztcbmltcG9ydCBXcmFwcGVyLCB7IEZvbGxvd2luZ0xpc3QsIExpc3RJdGVtIH0gZnJvbSAnLi9Gb2xsb3dpbmcuc3R5bGVzJztcblxuY29uc3QgRm9sbG93aW5nID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8aDM+XG4gICAgICAgIDxzdHJvbmc+e2RhdGEubGVuZ3RofTwvc3Ryb25nPiBGb2xsb3dpbmdcbiAgICAgIDwvaDM+XG4gICAgICA8Rm9sbG93aW5nTGlzdD5cbiAgICAgICAge2RhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGRhdGEubWFwKGZvbGxvd2VyID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Bmb2xsb3dlci1rZXkke2ZvbGxvd2VyLmlkfWB9PlxuICAgICAgICAgICAgICA8QXZhdGFyQ2FyZCBhdmF0YXI9e2ZvbGxvd2VyLmF2YXRhcn0gbmFtZT17Zm9sbG93ZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5Gb2xsb3dpbmc8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0ZvbGxvd2luZ0xpc3Q+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gID4gaDMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHN0cm9uZyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvbGxvd2luZ0xpc3QgPSBzdHlsZWQuZGl2YFxuICBtYXgtaGVpZ2h0OiAzOTZweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAuYXZhdGFyLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5hdmF0YXIge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbW1lbnRzID0gKHtcbiAgcm9sZSxcbiAgYXZhdGFyLFxuICBuYW1lLFxuICBjb250ZW50LFxuICB0aW1lLFxuICBoYW5kbGVMaWtlLFxuICBoYW5kbGVSZXBseSxcbn0pID0+IHtcbiAgY29uc3QgcmVuZGVySHRtbCA9IGRhdGEgPT4ge1xuICAgIHJldHVybiB7IF9faHRtbDogZGF0YSB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3JvbGUgPT09ICdhdXRob3InICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3IgY29tbWVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtyZW5kZXJIdG1sKGNvbnRlbnQpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgICAgIDx0aW1lPnt0aW1lfTwvdGltZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cm9sZSA9PT0gJ3VzZXInICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNpdG9yIGNvbW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gYWx0PXtuYW1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17cmVuZGVySHRtbChjb250ZW50KX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICAgICAgICA8dGltZT57dGltZX08L3RpbWU+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxpa2V9PlxuICAgICAgICAgICAgICAgIDEgbGlrZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlUmVwbHl9PlxuICAgICAgICAgICAgICAgIFJlcGx5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIElvSW9zQXJyb3dCYWNrLFxuICBJb0lvc0Fycm93Rm9yd2FyZCxcbiAgSW9Jb3NBcnJvd0Ryb3BsZWZ0Q2lyY2xlLFxuICBJb0lvc0Fycm93RHJvcHJpZ2h0Q2lyY2xlLFxufSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQge1xuICBGaUhlYXJ0LFxuICBGaVNoYXJlLFxuICBGaUJvb2ttYXJrLFxuICBGaU1lc3NhZ2VDaXJjbGUsXG4gIEZpTW9yZUhvcml6b250YWwsXG59IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCBHbGlkZUNhcm91c2VsLCB7IEdsaWRlU2xpZGUgfSBmcm9tICdAaXNvL3VpL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQGlzby91aS9BbnRkL01vZGFsL01vZGFsJztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICdAaXNvL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IEF2YXRhckNhcmQgZnJvbSAnQGlzby9jb21wb25lbnRzL0F2YXRhckNhcmQvQXZhdGFyQ2FyZCc7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XG5pbXBvcnQgUG9zdHNXcmFwcGVyLCB7IEJ1dHRvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL1Bvc3RzLnN0eWxlcyc7XG5cbmNvbnN0IGdhbGxlcnlPcHRpb25zID0ge1xuICBnYXA6IDAsXG59O1xuXG5jb25zdCBQb3N0cyA9ICh7IGRhdGEsIGF2YXRhciwgdXNlcm5hbWUgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFBvc3QsIHNldEN1cnJlbnRQb3N0XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd1NlbGVjdGVkUG9zdCA9IGRhdGEgPT4ge1xuICAgIHNldEN1cnJlbnRQb3N0KGRhdGEuaWQpO1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySHRtbCA9IGRhdGEgPT4ge1xuICAgIHJldHVybiB7IF9faHRtbDogZGF0YSB9O1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2UG9zdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UG9zdChjdXJyZW50UG9zdCAtIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHRQb3N0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRQb3N0KGN1cnJlbnRQb3N0ICsgMSk7XG4gIH07XG5cbiAgbGV0IG5ld0RhdGEgPSB7fTtcblxuICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uaWQgPT09IGN1cnJlbnRQb3N0KSB7XG4gICAgICBuZXdEYXRhID0gaXRlbTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBvc3RzV3JhcHBlcj5cbiAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIHZhcmlhbnQ9XCJpbnN0YWdyYW1cIlxuICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cbiAgICAgICAgICBpbWFnZT17aXRlbS50aHVtYl91cmx9XG4gICAgICAgICAgbnVtYmVyT2ZsaWtlPXtpdGVtLm51bWJlck9mbGlrZSAmJiBpdGVtLm51bWJlck9mbGlrZX1cbiAgICAgICAgICBudW1iZXJPZlZpZXc9e2l0ZW0ubnVtYmVyT2ZWaWV3ICYmIGl0ZW0ubnVtYmVyT2ZWaWV3fVxuICAgICAgICAgIG51bWJlck9mY29tbWVudD17aXRlbS5udW1iZXJPZmNvbW1lbnR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1NlbGVjdGVkUG9zdChpdGVtKX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgd3JhcENsYXNzTmFtZT1cImluc3RhZ3JhbS1tb2RhbFwiXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAge2N1cnJlbnRQb3N0ID4gMSAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17aGFuZGxlUHJldlBvc3R9PlxuICAgICAgICAgICAgPElvSW9zQXJyb3dCYWNrIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtjdXJyZW50UG9zdCA8IGRhdGEubGVuZ3RoICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm5leHRcIiBvbkNsaWNrPXtoYW5kbGVOZXh0UG9zdH0+XG4gICAgICAgICAgICA8SW9Jb3NBcnJvd0ZvcndhcmQgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cblxuICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAge25ld0RhdGEudHlwZSA9PT0gJ2ltYWdlJyAmJiAoXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXdEYXRhLnRodW1iX3VybH0gYWx0PXsncG9zdCd9IC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7bmV3RGF0YS50eXBlID09PSAnZ2FsbGVyeScgJiYgKFxuICAgICAgICAgICAgICA8R2xpZGVDYXJvdXNlbFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dhbGxlcnlPcHRpb25zfVxuICAgICAgICAgICAgICAgIGJ1bGxldHM9e3RydWV9XG4gICAgICAgICAgICAgICAgcHJldkJ1dHRvbj17PElvSW9zQXJyb3dEcm9wbGVmdENpcmNsZSAvPn1cbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uPXs8SW9Jb3NBcnJvd0Ryb3ByaWdodENpcmNsZSAvPn1cbiAgICAgICAgICAgICAgICBudW1iZXJPZkJ1bGxldHM9e25ld0RhdGEuZ2FsbGVyeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxTZWxlY3Rvcj17YHBvc3QtZ2FsbGVyeS0tJHtuZXdEYXRhLmlkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICB7bmV3RGF0YS5nYWxsZXJ5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEdsaWRlU2xpZGUga2V5PXtgZ2FsbGVyeS1rZXkke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSBhbHQ9eydwb3N0J30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HbGlkZVNsaWRlPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgPC9HbGlkZUNhcm91c2VsPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge25ld0RhdGEudHlwZSA9PT0gJ3ZpZGVvJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtyZW5kZXJIdG1sKG5ld0RhdGEudmlkZW8pfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPEF2YXRhckNhcmQgYXZhdGFyPXthdmF0YXJ9IHVzZXJuYW1lPXt1c2VybmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvbXktcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgPGE+Rm9sbG93PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxGaU1vcmVIb3Jpem9udGFsIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAge25ld0RhdGEuY29tbWVudHMgIT09IHVuZGVmaW5lZCAmJiBuZXdEYXRhLmNvbW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgID8gbmV3RGF0YS5jb21tZW50cy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bjb21tZW50LWtleSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17aXRlbS5yb2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtpdGVtLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtpdGVtLnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMaWtlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV3JpdGUgbGlrZSBmdW5jdGlvbiBmb3IgcG9zdC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGEuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVwbHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXcml0ZSByZXBseSBmdW5jdGlvbiBmb3IgcG9zdC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGEuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxpa2VcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8RmlIZWFydCAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxGaU1lc3NhZ2VDaXJjbGUgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNoYXJlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPEZpU2hhcmUgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvb2ttYXJrXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPEZpQm9va21hcmsgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoNT57bmV3RGF0YS5udW1iZXJPZmxpa2V9IGxpa2VzPC9oNT5cbiAgICAgICAgICAgICAgICA8dGltZT5BVUdVU1QgMzE8L3RpbWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICA8L01vZGFsPlxuICAgIDwvUG9zdHNXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuXG5jb25zdCBQb3N0c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLnBvc3QtY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMgLSAyMHB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cbiAgLm1lZGlhIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzM1cHgpO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzJweCk7XG4gICAgICBtYXJnaW4tdG9wOiA2OXB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5nbGlkZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAuZ2xpZGVfX3RyYWNrIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAuZ2xpZGVfX3NsaWRlcyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZ2xpZGVfX2NvbnRyb2xzIHtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmdsaWRlX19wcmV2LS1hcmVhIHtcbiAgICAgICAgICAgIGxlZnQ6IDExcHg7XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5nbGlkZV9fbmV4dC0tYXJlYSB7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZ2xpZGVfX2J1bGxldHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAuZ2xpZGVfX2J1bGxldCB7XG4gICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICYuZ2xpZGVfX2J1bGxldC0tYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAzMzRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogMDtcbiAgICB9XG4gICAgaGVhZGVyLFxuICAgIC5jb21tZW50cyxcbiAgICBmb290ZXIgPiBkaXYge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgIGhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgIH1cbiAgICAgIC5hdmF0YXItd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5hdmF0YXItY2FyZCB7XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ2cHgpO1xuICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5ib2R5IHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNCl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGltZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICB9XG4gICAgICAudG9wLWJhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYubGlrZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5ib29rbWFyayB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLThweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hY3Rpdml0eS1pbmZvIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgICAgICAgaDUge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICB0aW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDMpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDE4cHgpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gICYucHJldiB7XG4gICAgcmlnaHQ6IGNhbGMoMTAwJSArIDE1cHgpO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgJi5uZXh0IHtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxNXB4KTtcbiAgICByaWdodDogYXV0bztcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNXcmFwcGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGNvbnN0IEJhbm5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMCwgMCwgMC40MSkpO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICAuYXZhdGFyLWNhcmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtNDJweDtcbiAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmF2YXRhciB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW5mbyB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2MHB4KTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggI2U1ZTVlNTtcbiAgdWwubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDE4cHggMTVweCAxOXB4O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDdweDtcbiAgICAgIH1cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDUpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMwcHggMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNsb25lIGZyb20gJ2Nsb25lJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBNZW51IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL21lbnUnO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9pbnRsTWVzc2FnZXMnO1xuXG5pbXBvcnQgYXBwQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2FwcC9hY3Rpb25zJztcbmltcG9ydCBMb2dvIGZyb20gJ0Bpc28vY29tcG9uZW50cy91dGlsaXR5L0xvZ28ubmV4dCc7XG5pbXBvcnQgU2lkZWJhcldyYXBwZXIgZnJvbSAnLi9TaWRlYmFyLnN0eWxlcyc7XG5pbXBvcnQgU2lkZWJhck1lbnUgZnJvbSAnLi9TaWRlYmFyTWVudSc7XG5pbXBvcnQgU0lERUJBUl9NRU5VX09QVElPTlMgZnJvbSAnLi9zaWRlYmFyLm5hdmlnYXRpb25zJztcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcbmNvbnN0IHtcbiAgdG9nZ2xlT3BlbkRyYXdlcixcbiAgY2hhbmdlT3BlbktleXMsXG4gIGNoYW5nZUN1cnJlbnQsXG4gIHRvZ2dsZUNvbGxhcHNlZCxcbn0gPSBhcHBBY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgdmlldyxcbiAgICBvcGVuS2V5cyxcbiAgICBjb2xsYXBzZWQsXG4gICAgb3BlbkRyYXdlcixcbiAgICBoZWlnaHQsXG4gICAgY3VycmVudCxcbiAgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLkFwcCk7XG4gIGNvbnN0IHsgc2lkZWJhclRoZW1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgZGlzcGF0Y2goY2hhbmdlQ3VycmVudChbZS5rZXldKSk7XG4gICAgaWYgKHZpZXcgPT09ICdNb2JpbGVWaWV3Jykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZCgpKTtcbiAgICAgICAgLy8gZGlzcGF0Y2godG9nZ2xlT3BlbkRyYXdlcigpKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG9uT3BlbkNoYW5nZShuZXdPcGVuS2V5cykge1xuICAgIGNvbnN0IGxhdGVzdE9wZW5LZXkgPSBuZXdPcGVuS2V5cy5maW5kKFxuICAgICAga2V5ID0+ICEob3BlbktleXMuaW5kZXhPZihrZXkpID4gLTEpXG4gICAgKTtcbiAgICBjb25zdCBsYXRlc3RDbG9zZUtleSA9IG9wZW5LZXlzLmZpbmQoXG4gICAgICBrZXkgPT4gIShuZXdPcGVuS2V5cy5pbmRleE9mKGtleSkgPiAtMSlcbiAgICApO1xuICAgIGxldCBuZXh0T3BlbktleXMgPSBbXTtcbiAgICBpZiAobGF0ZXN0T3BlbktleSkge1xuICAgICAgbmV4dE9wZW5LZXlzID0gZ2V0QW5jZXN0b3JLZXlzKGxhdGVzdE9wZW5LZXkpLmNvbmNhdChsYXRlc3RPcGVuS2V5KTtcbiAgICB9XG4gICAgaWYgKGxhdGVzdENsb3NlS2V5KSB7XG4gICAgICBuZXh0T3BlbktleXMgPSBnZXRBbmNlc3RvcktleXMobGF0ZXN0Q2xvc2VLZXkpO1xuICAgIH1cbiAgICBkaXNwYXRjaChjaGFuZ2VPcGVuS2V5cyhuZXh0T3BlbktleXMpKTtcbiAgfVxuICBjb25zdCBnZXRBbmNlc3RvcktleXMgPSBrZXkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgIHN1YjM6IFsnc3ViMiddLFxuICAgIH07XG4gICAgcmV0dXJuIG1hcFtrZXldIHx8IFtdO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gY29sbGFwc2VkICYmICFvcGVuRHJhd2VyO1xuICBjb25zdCBtb2RlID0gaXNDb2xsYXBzZWQgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2lubGluZSc7XG4gIGNvbnN0IHNjcm9sbGhlaWdodCA9IGhlaWdodDtcbiAgY29uc3Qgc3R5bGluZyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNpZGViYXJUaGVtZS5iYWNrZ3JvdW5kQ29sb3IsXG4gIH07XG4gIGNvbnN0IHN1Ym1lbnVTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxuICAgIGNvbG9yOiBzaWRlYmFyVGhlbWUudGV4dENvbG9yLFxuICB9O1xuICBjb25zdCBzdWJtZW51Q29sb3IgPSB7XG4gICAgY29sb3I6IHNpZGViYXJUaGVtZS50ZXh0Q29sb3IsXG4gIH07XG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoY29sbGFwc2VkICYmIG9wZW5EcmF3ZXIgPT09IGZhbHNlKSB7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVPcGVuRHJhd2VyKCkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAoY29sbGFwc2VkICYmIG9wZW5EcmF3ZXIgPT09IHRydWUpIHtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZU9wZW5EcmF3ZXIoKSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhcldyYXBwZXI+XG4gICAgICA8U2lkZXJcbiAgICAgICAgdHJpZ2dlcj17bnVsbH1cbiAgICAgICAgY29sbGFwc2libGU9e3RydWV9XG4gICAgICAgIGNvbGxhcHNlZD17aXNDb2xsYXBzZWR9XG4gICAgICAgIHdpZHRoPXsyNDB9XG4gICAgICAgIGNsYXNzTmFtZT1cImlzb21vcnBoaWNTaWRlYmFyXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICBzdHlsZT17c3R5bGluZ31cbiAgICAgID5cbiAgICAgICAgPExvZ28gY29sbGFwc2VkPXtpc0NvbGxhcHNlZH0gLz5cbiAgICAgICAgPFNjcm9sbGJhcnMgc3R5bGU9e3sgaGVpZ2h0OiBzY3JvbGxoZWlnaHQgLSA3MCB9fT5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgIG9wZW5LZXlzPXtpc0NvbGxhcHNlZCA/IFtdIDogb3BlbktleXN9XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e2N1cnJlbnR9XG4gICAgICAgICAgICBvbk9wZW5DaGFuZ2U9e29uT3BlbkNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzb0Rhc2hib2FyZE1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtTSURFQkFSX01FTlVfT1BUSU9OUy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgICAgPFNpZGViYXJNZW51XG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24ua2V5fVxuICAgICAgICAgICAgICAgIGl0ZW09e29wdGlvbn1cbiAgICAgICAgICAgICAgICBzdWJtZW51Q29sb3I9e3N1Ym1lbnVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdWJtZW51U3R5bGU9e3N1Ym1lbnVTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICBrZXk9XCJzdWIxXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb01lbnVIb2xkZXJcIiBzdHlsZT17c3VibWVudUNvbG9yfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1hbmRyb2lkLW9wdGlvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWVudUxldmVsc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwXG4gICAgICAgICAgICAgICAga2V5PVwiZzFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5pdGVtMVwiIC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9XCIxXCI+XG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5vcHRpb24xXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXtzdWJtZW51U3R5bGV9IGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm9wdGlvbjJcIiAvPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwXG4gICAgICAgICAgICAgICAga2V5PVwiZzJcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5pdGVtMlwiIC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9XCIzXCI+XG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5vcHRpb24zXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXtzdWJtZW51U3R5bGV9IGtleT1cIjRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm9wdGlvbjRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+XG4gICAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L1Njcm9sbGJhcnM+XG4gICAgICA8L1NpZGVyPlxuICAgIDwvU2lkZWJhcldyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiwgYm9yZGVyUmFkaXVzIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5cbmNvbnN0IFNpZGViYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmlzb21vcnBoaWNTaWRlYmFyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgMCl9O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBmbGV4OiAwIDAgMjgwcHg7XG4gICAgLnNjcm9sbGFyZWEge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIHdpZHRoOiAyNDBweCAhaW1wb3J0YW50O1xuICAgICAgZmxleDogMCAwIDI0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4OiAwIDAgMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuaXNvTG9nb1dyYXBwZXIge1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICR7Ym9yZGVyUmFkaXVzKCl9O1xuICAgICAgaDMge1xuICAgICAgICBhLFxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNil9O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkIHtcbiAgICAgIC5pc29Mb2dvV3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmlzb0Rhc2hib2FyZE1lbnUge1xuICAgICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIC5hbnQtbWVudS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5pc29NZW51SG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMCAwIDMwcHgnIDogJzAgMzBweCAwIDAnfTtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hbnRpY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICB9XG4gICAgICAubmF2LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICAgICAgICAuYW50aWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBpLFxuICAgICAgICAgIC5uYXYtdGV4dCA+IHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtc3VibWVudSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICAubmF2LXRleHQgPiBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hbnQtbWVudS1kYXJrIC5hbnQtbWVudS1pbmxpbmUuYW50LW1lbnUtc3ViIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgIH1cbiAgICAuYW50LW1lbnUtc3VibWVudS1pbmxpbmUsXG4gICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgPiAuYW50LW1lbnUtc3VibWVudS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbWVudS1zdWJtZW51LWFycm93IHtcbiAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMjVweCcgOiAnYXV0bycpfTtcbiAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzI1cHgnKX07XG4gICAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHsnJyAvKiAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYxMjMnO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJb25pY29ucycgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE2cHgnIDogJ2F1dG8nKX07XG4gICAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzE2cHgnKX07XG4gICAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgICAgfSAqL307XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLmFudC1tZW51LXN1Ym1lbnUtYXJyb3cge1xuICAgICAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtaW5saW5lLFxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgICA+IGxpOm5vdCguYW50LW1lbnUtaXRlbS1ncm91cCkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzBweCAhaW1wb3J0YW50JyA6ICc3NHB4ICFpbXBvcnRhbnQnfTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNzRweCAhaW1wb3J0YW50JyA6ICcwcHggIWltcG9ydGFudCd9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1tZW51LWl0ZW0tZ3JvdXAge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAuYW50LW1lbnUtaXRlbS1ncm91cC10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtbWVudS1pdGVtLWdyb3VwLWxpc3Qge1xuICAgICAgICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtc3ViIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCB7XG4gICAgICAubmF2LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lID4ge1xuICAgICAgICAuYW50LW1lbnUtc3VibWVudS10aXRsZTphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgICA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbWVudS1zdWIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZCA+IC5hbnQtbWVudS1pdGVtLFxuICAgIC5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkXG4gICAgICA+IC5hbnQtbWVudS1pdGVtLWdyb3VwXG4gICAgICA+IC5hbnQtbWVudS1pdGVtLWdyb3VwLWxpc3RcbiAgICAgID4gLmFudC1tZW51LWl0ZW0sXG4gICAgLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWQgPiAuYW50LW1lbnUtc3VibWVudSA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICAtby10ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgICAgIHBhZGRpbmc6IDAgMzJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihTaWRlYmFyV3JhcHBlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL21lbnUnO1xuaW1wb3J0IHNpdGVDb25maWcgZnJvbSAnQGlzby9jb25maWcvc2l0ZS5jb25maWcnO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9pbnRsTWVzc2FnZXMnO1xuXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyTWVudSh7XG4gIGl0ZW0sXG4gIHN1Ym1lbnVTdHlsZSxcbiAgc3VibWVudUNvbG9yLFxuICAuLi5yZXN0XG59KSB7XG4gIGNvbnN0IHsga2V5LCBsYWJlbCwgbGVmdEljb24sIGNoaWxkcmVuIH0gPSBpdGVtO1xuXG4gIGNvbnN0IHVybCA9IHNpdGVDb25maWcuZGFzaGJvYXJkO1xuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViTWVudVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb01lbnVIb2xkZXJcIiBzdHlsZT17c3VibWVudUNvbG9yfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17bGVmdEljb259IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPXtsYWJlbH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKHsga2V5LCBsYWJlbCwgd2l0aG91dERhc2hib2FyZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlua1RvID0gd2l0aG91dERhc2hib2FyZCA/IGAvJHtrZXl9YCA6IGAke3VybH0vJHtrZXl9YDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmtUb30+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvTWVudUhvbGRlclwiIHN0eWxlPXtzdWJtZW51Q29sb3J9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD17bGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3ViTWVudT5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPE1lbnUuSXRlbSBrZXk9e2tleX0gey4uLnJlc3R9PlxuICAgICAgPExpbmsgaHJlZj17YCR7dXJsfS8ke2tleX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvTWVudUhvbGRlclwiIHN0eWxlPXtzdWJtZW51Q29sb3J9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17bGVmdEljb259IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e2xhYmVsfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTWVudS5JdGVtPlxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAga2V5OiAnbWFpbGJveCcsXG4gICAgcGF0aDogJy9tYWlsYm94JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZW1haWwnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtbWFpbCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjaGF0JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2hhdCcsXG4gICAgbGVmdEljb246ICdpb24tY2hhdGJ1YmJsZXMnLFxuICB9LFxuICB7XG4gICAga2V5OiAnZWNvbW1lcmNlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZWNvbW1lcmNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1iYWcnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Nob3AnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2hvcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjYXJ0JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2hlY2tvdXQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY2hlY2tvdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2FyZCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5jYXJkcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdtYXBzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubWFwcycsXG4gICAgbGVmdEljb246ICdpb24tbWFwJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdnb29nbGVtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZ29vZ2xlTWFwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2xlYWZsZXRtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubGVhZmxldE1hcCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdteV9wcm9maWxlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucHJvZmlsZScsXG4gICAgbGVmdEljb246ICdpb24tcGVyc29uJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2ludm9pY2UnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5pbnZvaWNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1jbGlwYm9hcmQnLFxuICB9LFxuICB7XG4gICAga2V5OiAneW91dHViZVNlYXJjaCcsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnlvdXR1YmVTZWFyY2gnLFxuICAgIGxlZnRJY29uOiAnaW9uLXNvY2lhbC15b3V0dWJlJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2NhbGVuZGFyJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2FsZW5kYXInLFxuICAgIGxlZnRJY29uOiAnaW9uLWNhbGVuZGFyJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ25vdGVzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubm90ZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWlvcy1wYXBlcicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICd0b2RvJyxcbiAgICBsYWJlbDogJ3NpZGViYXIudG9kb3MnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZScsXG4gIH0sXG5cbiAge1xuICAgIGtleTogJ2NvbnRhY3RzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY29udGFjdHMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtcGVyc29uLWFkZCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdzaHVmZmxlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuc2h1ZmZsZScsXG4gICAgbGVmdEljb246ICdpb24tZ3JpZCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjaGFydHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5jaGFydHMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdnb29nbGVDaGFydCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5nb29nbGVDaGFydHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVlY2hhcnRzJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJlY2hhcnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlYWN0Q2hhcnQyJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJlYWN0Q2hhcnQyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlYWN0VHJlbmQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmVhY3RUcmVuZCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdGb3JtcycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1hbmRyb2lkLW1haWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ0lucHV0RmllbGQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZWRpdG9yJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmVkaXRvcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdGb3Jtc1dpdGhWYWxpZGF0aW9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zV2l0aFZhbGlkYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucHJvZ3Jlc3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYnV0dG9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmJ1dHRvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd0YWInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFiJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NoZWNrYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JhZGlvYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJhZGlvYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NlbGVjdGJveCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5zZWxlY3Rib3gnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAndHJhbnNmZXInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJhbnNmZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmF1dG9jb21wbGV0ZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBrZXk6ICdncmlkTGF5b3V0JyxcbiAgLy8gICBsYWJlbDogJ3NpZGViYXIuYm94T3B0aW9ucycsXG4gIC8vICAgbGVmdEljb246ICdpb24tY3ViZSdcbiAgLy8gfSxcbiAge1xuICAgIGtleTogJ3VpZWxlbWVudHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci51aUVsZW1lbnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1sZWFmJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9iYWRnZScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5iYWRnZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9jYXJkJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcmQyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX2Nhcm91c2VsJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNvcnVzZWwnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfY29sbGFwc2UnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY29sbGFwc2UnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfcG9wb3ZlcicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5wb3BvdmVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3Rvb2x0aXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudG9vbHRpcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF90YWcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3RpbWVsaW5lJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnRpbWVsaW5lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmRyb3Bkb3duJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BhZ2luYXRpb24nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucGFnaW5hdGlvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyYXRpbmcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmF0aW5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3RyZWUnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJlZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzd2lwZXJfc2xpZGVyJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnN3aXBlcnNsaWRlcicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdhZHZhbmNlZFVpZWxlbWVudHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5hZHZhbmNlZEVsZW1lbnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1mbGFzaCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVhY3REYXRlcycsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5yZWFjdERhdGVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NvZGVNaXJyb3InLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY29kZU1pcnJvcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd1cHB5JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnVwcHknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZHJvcHpvbmUnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZHJvcHpvbmUnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiAnZmVlZGJhY2snLFxuICAgIGxhYmVsOiAnc2lkZWJhci5mZWVkYmFjaycsXG4gICAgbGVmdEljb246ICdpb24tdGh1bWJzdXAnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2FsZXJ0JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmFsZXJ0JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ21vZGFsJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLm1vZGFsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ21lc3NhZ2UnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubWVzc2FnZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubm90aWZpY2F0aW9uJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BvcENvbmZpcm0nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucG9wQ29uZmlybScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzcGluJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnNwaW4nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiAndGFibGUnLFxuICAgIGxhYmVsOiAnc2lkZWJhci50YWJsZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtbWVudScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAndGFibGVfYW50JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmFudFRhYmxlcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdwYWdlcycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhZ2VzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1kb2N1bWVudC10ZXh0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICc0MDQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuNDA0JyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJzUwMCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci41MDAnLFxuICAgICAgICB3aXRob3V0RGFzaGJvYXJkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnc2lnbmluJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnNpZ25JbicsXG4gICAgICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzaWdudXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2lnblVwJyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZvcmdvdFB3JyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Jlc2V0cGFzc3dvcmQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmVzZXRQdycsXG4gICAgICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdnaXRodWJTZWFyY2gnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5naXRodWJTZWFyY2gnLFxuICAgIGxlZnRJY29uOiAnaW9uLXNvY2lhbC1naXRodWInLFxuICB9LFxuICB7XG4gICAga2V5OiAnYmxhbmtfcGFnZScsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmJsYW5rUGFnZScsXG4gICAgbGVmdEljb246ICdpb24tZG9jdW1lbnQnLFxuICB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgYXBwQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2FwcC9hY3Rpb25zJztcbmltcG9ydCBUb3BiYXJOb3RpZmljYXRpb24gZnJvbSAnLi9Ub3BiYXJOb3RpZmljYXRpb24nO1xuaW1wb3J0IFRvcGJhck1lc3NhZ2UgZnJvbSAnLi9Ub3BiYXJNZXNzYWdlJztcbmltcG9ydCBUb3BiYXJTZWFyY2ggZnJvbSAnLi9Ub3BiYXJTZWFyY2gnO1xuaW1wb3J0IFRvcGJhclVzZXIgZnJvbSAnLi9Ub3BiYXJVc2VyJztcbmltcG9ydCBUb3BiYXJBZGR0b0NhcnQgZnJvbSAnLi9Ub3BiYXJBZGRUb0NhcnQnO1xuaW1wb3J0IFRvcGJhcldyYXBwZXIgZnJvbSAnLi9Ub3BiYXIuc3R5bGVzJztcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcbmNvbnN0IHsgdG9nZ2xlQ29sbGFwc2VkIH0gPSBhcHBBY3Rpb25zO1xuXG5jbGFzcyBUb3BiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b2dnbGVDb2xsYXBzZWQsIHVybCwgY3VzdG9taXplZFRoZW1lLCBsb2NhbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5wcm9wcy5jb2xsYXBzZWQgJiYgIXRoaXMucHJvcHMub3BlbkRyYXdlcjtcbiAgICBjb25zdCBzdHlsaW5nID0ge1xuICAgICAgYmFja2dyb3VuZDogY3VzdG9taXplZFRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogNzAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvcGJhcldyYXBwZXI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzdHlsZT17c3R5bGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgY29sbGFwc2VkID8gJ2lzb21vcnBoaWNUb3BiYXIgY29sbGFwc2VkJyA6ICdpc29tb3JwaGljVG9wYmFyJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlZCA/ICd0cmlnZ2VyQnRuIG1lbnVDb2xsYXBzZWQnIDogJ3RyaWdnZXJCdG4gbWVudU9wZW4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpc29SaWdodFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlzb1NlYXJjaFwiPlxuICAgICAgICAgICAgICA8VG9wYmFyU2VhcmNoIGxvY2FsZT17bG9jYWxlfSAvPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdub3RpZmljYXRpb24nIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29Ob3RpZnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VG9wYmFyTm90aWZpY2F0aW9uIGxvY2FsZT17bG9jYWxlfSAvPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdtZXNzYWdlJyB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXNvTXNnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhck1lc3NhZ2UgbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdhZGRUb0NhcnQnIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29DYXJ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhckFkZHRvQ2FydCB1cmw9e3VybH0gbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogJ3VzZXInIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29Vc2VyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhclVzZXIgbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgPC9Ub3BiYXJXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICAuLi5zdGF0ZS5BcHAsXG4gICAgbG9jYWxlOiBzdGF0ZS5MYW5ndWFnZVN3aXRjaGVyLmxhbmd1YWdlLmxvY2FsZSxcbiAgICBjdXN0b21pemVkVGhlbWU6IHN0YXRlLlRoZW1lU3dpdGNoZXIudG9wYmFyVGhlbWUsXG4gIH0pLFxuICB7IHRvZ2dsZUNvbGxhcHNlZCB9XG4pKFRvcGJhcik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHtcbiAgdHJhbnNpdGlvbixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG59IGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnQGlzby9saWIvaGVscGVycy9ydGwnO1xuXG5jb25zdCBUb3BiYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmlzb21vcnBoaWNUb3BiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCAyNjVweCAwIDMxcHgnIDogJzAgMzFweCAwIDI2NXB4J307XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJ1xuICAgICAgICAgID8gJzBweCAyNjBweCAwcHggMTVweCAhaW1wb3J0YW50J1xuICAgICAgICAgIDogJzBweCAxNXB4IDBweCAyNjBweCAhaW1wb3J0YW50J307XG4gICAgfVxuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgcGFkZGluZzogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA4OXB4IDAgMzFweCcgOiAnMCAzMXB4IDAgODlweCd9O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnXG4gICAgICAgICAgICA/ICcwcHggMTVweCAhaW1wb3J0YW50J1xuICAgICAgICAgICAgOiAnMHB4IDE1cHggIWltcG9ydGFudCd9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pc29MZWZ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAyMHB4JyA6ICcwIDIwcHggMCAwJ307XG4gICAgICB9XG5cbiAgICAgIC50cmlnZ2VyQnRuIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnXFxmMjBlJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ0lvbmljb25zJztcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlzb1JpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICczNXB4JyA6ICcwJyl9O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICczNXB4Jyl9O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzI1cHgnIDogJzAnKX07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMjVweCd9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pc29JY29uV3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdzZWNvbmRhcnknLCAxKX07XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnMTBweCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzEwcHgnIDogJ2luaGVyaXQnfTtcbiAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29NYWlsIHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAwKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29Ob3RpZnkge1xuICAgICAgICAgIC5pc29JY29uV3JhcHBlciB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuaXNvTXNnIHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAxKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29DYXJ0IHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAyKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29Vc2VyIHtcbiAgICAgICAgICAuaXNvSW1nV3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDkpfTtcbiAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyQWN0aXZpdHkge1xuICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdjb2xvcicsIDMpfTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb1VzZXJEcm9wZG93biB7XG4gICAgLmFudC1wb3BvdmVyLWlubmVyIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgLmlzb1VzZXJEcm9wZG93bkNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgLmlzb0JvcmRlclJhZGl1cyg1cHgpO1xuICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1cHgnKX07XG4gICAgICAgICAgLyogJHtib3hTaGFkb3coJzAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjIpJyl9OyAqL1xuICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgIC5pc29Ecm9wZG93bkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC8vIERyb3Bkb3duICovXG4gIC5hbnQtcG9wb3ZlciB7XG4gICAgLmFudC1wb3BvdmVyLWlubmVyIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAke2JvcmRlclJhZGl1cygnNXB4Jyl9O1xuICAgICAgICAgIC8qICR7Ym94U2hhZG93KCcwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4yKScpfTsgKi9cbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICB3aWR0aDogMzEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG5cbiAgICAgICAgICAgIC5pc29Ecm9wZG93bkxpc3RJdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaXNvTGlzdEhlYWQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmlzb0RhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAxKX07XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXNvVmlld0FsbEJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDIpfTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duRm9vdGVyTGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDEpfTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53aXRoSW1nIHtcbiAgICAgICAgICAgIC5pc29Ecm9wZG93bkxpc3RJdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgICAgICAuaXNvSW1nV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA5KX07XG4gICAgICAgICAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pc29MaXN0Q29udGVudCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgLmlzb0xpc3RIZWFkIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXNvRGF0ZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAxKX07XG4gICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYudG9wYmFyTWFpbCB7XG4gICAgICAuYW50LXBvcG92ZXItaW5uZXIge1xuICAgICAgICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxOXB4KSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMTcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50b3BiYXJNZXNzYWdlIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lciB7XG4gICAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAuaXNvRHJvcGRvd25Db250ZW50IHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC02OXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYudG9wYmFyTm90aWZpY2F0aW9uIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lciB7XG4gICAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAuaXNvRHJvcGRvd25Db250ZW50IHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC0xMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnRvcGJhckFkZHRvQ2FydCB7XG4gICAgICAuYW50LXBvcG92ZXItaW5uZXIge1xuICAgICAgICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtNTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzb0Ryb3Bkb3duQm9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJXcmFwcGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3BvcG92ZXInO1xuaW1wb3J0IFNpbmdsZUNhcnQgZnJvbSAnQGlzby9jb21wb25lbnRzL0NhcnQvU2luZ2xlQ2FydE1vZGFsJztcbmltcG9ydCBlY29tbWVyY2VBY3Rpb24gZnJvbSAnQGlzby9yZWR1eC9lY29tbWVyY2UvYWN0aW9ucyc7XG5pbXBvcnQgVG9wYmFyRHJvcGRvd25XcmFwcGVyIGZyb20gJy4vVG9wYmFyRHJvcGRvd24uc3R5bGVzJztcblxuY29uc3QgeyBjaGFuZ2VWaWV3VG9wYmFyQ2FydCwgY2hhbmdlUHJvZHVjdFF1YW50aXR5IH0gPSBlY29tbWVyY2VBY3Rpb247XG5sZXQgdG90YWxQcmljZTtcbmNsYXNzIFRvcGJhckFkZHRvQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyUHJvZHVjdHMgPSB0aGlzLnJlbmRlclByb2R1Y3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VRdWFudGl0eSA9IHRoaXMuY2hhbmdlUXVhbnRpdHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbmNlbFF1YW50aXR5ID0gdGhpcy5jYW5jZWxRdWFudGl0eS5iaW5kKHRoaXMpO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VWaWV3VG9wYmFyQ2FydChmYWxzZSk7XG4gIH1cbiAgaGFuZGxlVmlzaWJsZUNoYW5nZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVZpZXdUb3BiYXJDYXJ0KCF0aGlzLnByb3BzLnZpZXdUb3BiYXJDYXJ0KTtcbiAgfVxuICByZW5kZXJQcm9kdWN0cygpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RRdWFudGl0eSwgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdG90YWxQcmljZSA9IDA7XG4gICAgaWYgKCFwcm9kdWN0UXVhbnRpdHkgfHwgcHJvZHVjdFF1YW50aXR5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ob0l0ZW1Nc2dcIj5cbiAgICAgICAgICA8c3Bhbj5ObyBpdGVtIGZvdW5kPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0UXVhbnRpdHkubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgdG90YWxQcmljZSArPSBwcm9kdWN0LnF1YW50aXR5ICogcHJvZHVjdHNbcHJvZHVjdC5vYmplY3RJRF0ucHJpY2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2luZ2xlQ2FydFxuICAgICAgICAgIGtleT17cHJvZHVjdC5vYmplY3RJRH1cbiAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICBjaGFuZ2VRdWFudGl0eT17dGhpcy5jaGFuZ2VRdWFudGl0eX1cbiAgICAgICAgICBjYW5jZWxRdWFudGl0eT17dGhpcy5jYW5jZWxRdWFudGl0eX1cbiAgICAgICAgICB7Li4ucHJvZHVjdHNbcHJvZHVjdC5vYmplY3RJRF19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVF1YW50aXR5KG9iamVjdElELCBxdWFudGl0eSkge1xuICAgIGNvbnN0IHsgcHJvZHVjdFF1YW50aXR5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld1Byb2R1Y3RRdWFudGl0eSA9IFtdO1xuICAgIHByb2R1Y3RRdWFudGl0eS5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgaWYgKHByb2R1Y3Qub2JqZWN0SUQgIT09IG9iamVjdElEKSB7XG4gICAgICAgIG5ld1Byb2R1Y3RRdWFudGl0eS5wdXNoKHByb2R1Y3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UHJvZHVjdFF1YW50aXR5LnB1c2goe1xuICAgICAgICAgIG9iamVjdElELFxuICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVByb2R1Y3RRdWFudGl0eShuZXdQcm9kdWN0UXVhbnRpdHkpO1xuICB9XG4gIGNhbmNlbFF1YW50aXR5KG9iamVjdElEKSB7XG4gICAgY29uc3QgeyBwcm9kdWN0UXVhbnRpdHkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3UHJvZHVjdFF1YW50aXR5ID0gW107XG4gICAgcHJvZHVjdFF1YW50aXR5LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBpZiAocHJvZHVjdC5vYmplY3RJRCAhPT0gb2JqZWN0SUQpIHtcbiAgICAgICAgbmV3UHJvZHVjdFF1YW50aXR5LnB1c2gocHJvZHVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VQcm9kdWN0UXVhbnRpdHkobmV3UHJvZHVjdFF1YW50aXR5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICBwcm9kdWN0UXVhbnRpdHksXG4gICAgICB2aWV3VG9wYmFyQ2FydCxcbiAgICAgIGN1c3RvbWl6ZWRUaGVtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgPFRvcGJhckRyb3Bkb3duV3JhcHBlciBjbGFzc05hbWU9XCJ0b3BiYXJBZGR0b0NhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkhlYWRlclwiPlxuICAgICAgICAgIDxoMz5DYXJ0PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25Cb2R5IGlzb0NhcnRJdGVtc1dyYXBwZXJcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9kdWN0cygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkZvb3RlckxpbmtzXCIgb25DbGljaz17dGhpcy5oaWRlfT5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZC9jYXJ0YH0+XG4gICAgICAgICAgICA8YT5WaWV3IENhcnQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVG90YWwgUHJpY2U6IDxzcGFuPiR7dG90YWxQcmljZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3ZpZXdUb3BiYXJDYXJ0fVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSWNvbldyYXBwZXJcIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWFuZHJvaWQtY2FydFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY3VzdG9taXplZFRoZW1lLnRleHRDb2xvciB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Byb2R1Y3RRdWFudGl0eS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj57cHJvZHVjdFF1YW50aXR5Lmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUuRWNvbW1lcmNlLFxuICAgIGN1c3RvbWl6ZWRUaGVtZTogc3RhdGUuVGhlbWVTd2l0Y2hlci50b3BiYXJUaGVtZSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge1xuICAgIGNoYW5nZVZpZXdUb3BiYXJDYXJ0LFxuICAgIGNoYW5nZVByb2R1Y3RRdWFudGl0eSxcbiAgfVxuKShUb3BiYXJBZGR0b0NhcnQpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCB7XG4gIHRyYW5zaXRpb24sXG4gIGJvcmRlclJhZGl1cyxcbiAgYm94U2hhZG93LFxufSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcblxuY29uc3QgVG9wYmFyRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAtOHB4IC0xNnB4O1xuICB3aWR0aDogMzYwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAke2JvcmRlclJhZGl1cygnNXB4Jyl9O1xuICAke2JveFNoYWRvdygnMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMiknKX07XG4gICR7dHJhbnNpdGlvbigpfTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICB9XG5cbiAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaXNvRHJvcGRvd25Cb2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG5cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAuaXNvRHJvcGRvd25MaXN0SXRlbSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAyKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDMpfTtcbiAgICAgIH1cblxuICAgICAgLmlzb0xpc3RIZWFkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMil9O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlzb0RhdGUge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDEpfTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb1ZpZXdBbGxCdG4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cbiAgfVxuXG4gIC5pc29Ecm9wZG93bkZvb3RlckxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4O1xuXG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAxKX07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cbiAgfVxuXG4gICYud2l0aEltZyB7XG4gICAgLmlzb0Ryb3Bkb3duTGlzdEl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC5pc29JbWdXcmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMCAwIDE1cHgnIDogJzAgMTVweCAwIDAnfTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDkpfTtcbiAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXNvTGlzdENvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuaXNvTGlzdEhlYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAxNXB4JyA6ICcwIDE1cHggMCAwJ307XG4gICAgICAgIH1cblxuICAgICAgICAuaXNvRGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDEpfTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudG9wYmFyTWFpbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTlweCkge1xuICAgICAgcmlnaHQ6IC0xNzBweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhck1lc3NhZ2Uge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHJpZ2h0OiAtNjlweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhck5vdGlmaWNhdGlvbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgcmlnaHQ6IC0xMjBweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhckFkZHRvQ2FydCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xuICAgICAgcmlnaHQ6IC01NXB4O1xuICAgIH1cblxuICAgIC5pc29Ecm9wZG93bkhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5pc29Ecm9wZG93bkJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLmlzb05vSXRlbU1zZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMSl9O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmlzb1VzZXJEcm9wZG93biB7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgJHtib3JkZXJSYWRpdXMoJzVweCcpfTtcbiAgICAke2JveFNoYWRvdygnMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMiknKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgLmlzb0Ryb3Bkb3duTGluayB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdzZWNvbmRhcnknLCA2KX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoRGlyZWN0aW9uKFRvcGJhckRyb3Bkb3duV3JhcHBlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVG9wYmFyRHJvcGRvd25XcmFwcGVyIGZyb20gJy4vVG9wYmFyRHJvcGRvd24uc3R5bGVzJztcblxuaW1wb3J0IEltYWdlIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMy5wbmcnO1xuXG5jb25zdCBkZW1vTWFzc2FnZSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdEYXZpZCBEb2UnLFxuICAgIHRpbWU6ICczIG1pbnV0ZXMgYWdvJyxcbiAgICBtYXNzYWdlOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnTmF2aXMgRG9lJyxcbiAgICB0aW1lOiAnNCBtaW51dGVzIGFnbycsXG4gICAgbWFzc2FnZTpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ0VtYW51YWwgRG9lJyxcbiAgICB0aW1lOiAnNSBtaW51dGVzIGFnbycsXG4gICAgbWFzc2FnZTpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0Rvd2FpbiBEb2UnLFxuICAgIHRpbWU6ICc2IG1pbnV0ZXMgYWdvJyxcbiAgICBtYXNzYWdlOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BiYXJNZXNzYWdlKCkge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGN1c3RvbWl6ZWRUaGVtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLlRoZW1lU3dpdGNoZXIudG9wYmFyVGhlbWUpO1xuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKCkge1xuICAgIHNldFZpc2liaWxpdHkodmlzaWJsZSA9PiAhdmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwidG9wYmFyTWVzc2FnZSB3aXRoSW1nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duSGVhZGVyXCI+XG4gICAgICAgIDxoMz5NZXNzYWdlczwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25Cb2R5XCI+XG4gICAgICAgIHtkZW1vTWFzc2FnZS5tYXAobWFzc2FnZSA9PiAoXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaXN0SXRlbVwiIGtleT17bWFzc2FnZS5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ltZ1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCIjXCIgc3JjPXtJbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0xpc3RDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTGlzdEhlYWRcIj5cbiAgICAgICAgICAgICAgICA8aDU+e21hc3NhZ2UubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb0RhdGVcIj57bWFzc2FnZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPnttYXNzYWdlLm1hc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvVmlld0FsbEJ0blwiPlZpZXcgQWxsPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ljb25XcmFwcGVyXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWNoYXRidWJibGVzXCJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY3VzdG9taXplZFRoZW1lLnRleHRDb2xvciB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj57ZGVtb01hc3NhZ2UubGVuZ3RofTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9wb3Zlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBUb3BiYXJEcm9wZG93bldyYXBwZXIgZnJvbSAnLi9Ub3BiYXJEcm9wZG93bi5zdHlsZXMnO1xuXG5jb25zdCBkZW1vTm90aWZpY2F0aW9ucyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdEYXZpZCBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05hdmlzIERvZScsXG4gICAgbm90aWZpY2F0aW9uOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnRW1hbnVhbCBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0Rvd2FpbiBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wYmFyTm90aWZpY2F0aW9uKCkge1xuICBjb25zdCBjdXN0b21pemVkVGhlbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyLnRvcGJhclRoZW1lKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVZpc2libGVDaGFuZ2UoKSB7XG4gICAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlID0+ICF2aXNpYmxlKTtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwidG9wYmFyTm90aWZpY2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duSGVhZGVyXCI+XG4gICAgICAgIDxoMz5Ob3RpZmljYXRpb25zPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkJvZHlcIj5cbiAgICAgICAge2RlbW9Ob3RpZmljYXRpb25zLm1hcChub3RpZmljYXRpb24gPT4gKFxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlzdEl0ZW1cIiBrZXk9e25vdGlmaWNhdGlvbi5pZH0+XG4gICAgICAgICAgICA8aDU+e25vdGlmaWNhdGlvbi5uYW1lfTwvaDU+XG4gICAgICAgICAgICA8cD57bm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbn08L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvVmlld0FsbEJ0blwiPlZpZXcgQWxsPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ljb25XcmFwcGVyXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+e2RlbW9Ob3RpZmljYXRpb25zLmxlbmd0aH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcG92ZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBJbnB1dFNlYXJjaCB9IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2lucHV0JztcbmltcG9ydCBUb3BiYXJTZWFyY2hNb2RhbCBmcm9tICcuL1RvcGJhclNlYXJjaE1vZGFsLnN0eWxlcyc7XG5cbmZ1bmN0aW9uIFNlYXJjaGJhcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRUb3BiYXJTZWFyY2gnKS5mb2N1cygpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9LCAyMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxJbnB1dFNlYXJjaFxuICAgICAgaWQ9XCJJbnB1dFRvcGJhclNlYXJjaFwiXG4gICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzZWFyY2ggdGV4dFwiXG4gICAgICBvbkJsdXI9e3Byb3BzLm9uQmx1cn1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BiYXJTZWFyY2goKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY3VzdG9taXplZFRoZW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuVGhlbWVTd2l0Y2hlci50b3BiYXJUaGVtZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoZmFsc2UpO1xuICB9O1xuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfSwgMjAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkodHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzaG93TW9kYWx9PlxuICAgICAgPGlcbiAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWlvcy1zZWFyY2gtc3Ryb25nXCJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgIC8+XG4gICAgICA8VG9wYmFyU2VhcmNoTW9kYWxcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25Paz17aGFuZGxlQ2FuY2VsfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICB3cmFwQ2xhc3NOYW1lPVwiaXNvU2VhcmNoTW9kYWxcIlxuICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29TZWFyY2hDb250YWluZXJcIj5cbiAgICAgICAgICB7dmlzaWJsZSA/IDxTZWFyY2hiYXIgb25CbHVyPXtoYW5kbGVCbHVyfSAvPiA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9wYmFyU2VhcmNoTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnQGlzby9jb21wb25lbnRzL0ZlZWRiYWNrL01vZGFsJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5cbmNvbnN0IFRvcGJhclNlYXJjaE1vZGFsID0gc3R5bGVkKE1vZGFsKWBcbiAgJi5hbnQtbW9kYWwge1xuICAgIHRvcDogMTUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAuYW50LW1vZGFsLWNsb3NlLXgge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFudC1tb2RhbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIC5hbnQtbW9kYWwtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmlzb1NlYXJjaENvbnRhaW5lciB7XG4gICAgICAgIC5hbnQtaW5wdXQtc2VhcmNoIHtcbiAgICAgICAgICAuYW50LWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE1cHgnIDogJzU1cHgnfTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzU1cHgnIDogJzE1cHgnfTtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtaW5wdXQtc3VmZml4IHtcbiAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzIwcHgnIDogJ2F1dG8nKX07XG4gICAgICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzIwcHgnKX07XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjRhNCc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2lvbmljb25zJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFudC1pbnB1dC1zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJTZWFyY2hNb2RhbCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9wb3BvdmVyJztcbmltcG9ydCBhdXRoQWN0aW9uIGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2FjdGlvbnMnO1xuaW1wb3J0IFRvcGJhckRyb3Bkb3duV3JhcHBlciBmcm9tICcuL1RvcGJhckRyb3Bkb3duLnN0eWxlcyc7XG5cbmNvbnN0IHsgbG9nb3V0IH0gPSBhdXRoQWN0aW9uO1xuaW1wb3J0IHVzZXJwaWMgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL3VzZXIxLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGJhclVzZXIoKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKCkge1xuICAgIHNldFZpc2liaWxpdHkodmlzaWJsZSA9PiAhdmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwiaXNvVXNlckRyb3Bkb3duXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkxpbmtcIj5TZXR0aW5nczwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlua1wiPkZlZWRiYWNrPC9hPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaW5rXCI+SGVscDwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlua1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGxvZ291dCgpKX0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgIGFycm93UG9pbnRBdENlbnRlcj17dHJ1ZX1cbiAgICAgIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSW1nV3JhcHBlclwiPlxuICAgICAgICA8aW1nIGFsdD1cInVzZXJcIiBzcmM9e3VzZXJwaWN9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJBY3Rpdml0eSBvbmxpbmVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qb3BvdmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW4gZnJvbSAnQGlzby91aS9BbnRkL1NwaW4vU3Bpbic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQGlzby91aS9BbnRkL01vZGFsL01vZGFsJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGlzby91aS9VSS9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCBBdmF0YXJDYXJkIGZyb20gJ0Bpc28vY29tcG9uZW50cy9BdmF0YXJDYXJkL0F2YXRhckNhcmQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBQb3N0cyBmcm9tICcuLi8uLi9jb250YWluZXJzL1Byb2ZpbGUvUG9zdHMvUG9zdHMnO1xuaW1wb3J0IEZvbGxvd2VycyBmcm9tICcuLi8uLi9jb250YWluZXJzL1Byb2ZpbGUvRm9sbG93ZXJzL0ZvbGxvd2Vycyc7XG5pbXBvcnQgRm9sbG93aW5nIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvUHJvZmlsZS9Gb2xsb3dpbmcvRm9sbG93aW5nJztcbmltcG9ydCBXcmFwcGVyLCB7XG4gIEJhbm5lcixcbiAgTmF2aWdhdGlvbixcbiAgQ29udGVudFdyYXBwZXIsXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvUHJvZmlsZS9Qcm9maWxlLnN0eWxlcyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgcHJvZmlsZUFjdGlvbnMgZnJvbSAnQGlzby9yZWR1eC9wcm9maWxlL2FjdGlvbnMnO1xuaW1wb3J0IHsgd2l0aEF1dGhTeW5jIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aC51dGlscyc7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRGFzaGJvYXJkTGF5b3V0L0Rhc2hib2FyZExheW91dCc7XG5jb25zdCBNeVByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wcm9maWxlLmRhdGEpO1xuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZmlsZS5sb2FkaW5nKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBnZXRQcm9maWxlID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gZGlzcGF0Y2gocHJvZmlsZUFjdGlvbnMuZmV0Y2hQcm9maWxlRGF0YVN0YXJ0KCkpLFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ3Bvc3QnKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvZmlsZSgpO1xuICB9LCBbZ2V0UHJvZmlsZV0pO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSB0eXBlID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3Bvc3QnKSB7XG4gICAgICBzZXRBY3RpdmUodHlwZSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZm9sbG93ZXJzJykge1xuICAgICAgc2V0QWN0aXZlKHR5cGUpO1xuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICBzZXRBY3RpdmUodHlwZSk7XG4gICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2V0QWN0aXZlKCdwb3N0Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwcm9maWxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIHtsb2FkaW5nICE9PSB0cnVlID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUtYmFubmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhLnByb2ZpbGVfYmd9KWAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyQ2FyZFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2RhdGEuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtkYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgICAgICAgPE5hdmlnYXRpb24gY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA9PT0gJ3Bvc3QnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51KCdwb3N0Jyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntkYXRhLnBvc3QubGVuZ3RofTwvc3Ryb25nPiBQb3N0c1xuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZSA9PT0gJ2ZvbGxvd2VycycgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnUoJ2ZvbGxvd2VycycpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57ZGF0YS5mb2xsb3dlcnMubGVuZ3RofTwvc3Ryb25nPiBGb2xsb3dlcnNcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPT09ICdmb2xsb3dpbmcnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51KCdmb2xsb3dpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2RhdGEuZm9sbG93aW5nLmxlbmd0aH08L3N0cm9uZz4gRm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L05hdmlnYXRpb24+XG5cbiAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8UG9zdHNcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtkYXRhLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEucG9zdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgd3JhcENsYXNzTmFtZT1cImZvbGxvdy1tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSA9PT0gJ2ZvbGxvd2VycycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxGb2xsb3dlcnMgZGF0YT17ZGF0YS5mb2xsb3dlcnN9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmUgPT09ICdmb2xsb3dpbmcnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9sbG93aW5nIGRhdGE9e2RhdGEuZm9sbG93aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTUwcHgnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTcGluIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L0Rhc2hib2FyZExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoU3luYyhNeVByb2ZpbGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdsaWRlanMvZ2xpZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvc3BpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXRoZW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=