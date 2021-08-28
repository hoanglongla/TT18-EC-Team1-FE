module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/dashboard/chat": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/chat.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "../../node_modules/@iso/containers/Chat/Messages.styles.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/snowd/Desktop/isoadmin-330/admin/isomorphic/node_modules/@iso/containers/Chat/Messages.styles.js ***!
  \*****************************************************************************************************************/
/*! exports provided: MessageSingle, ChatWindow, ChatBox, ChatSidebar, Button, Input, Textarea, ComposeMessageWrapper, UserLists, UserListsWrapper, ToggleViewProfile, ComposeInputWrapper, SidebarSearchBox, MessageChatWrapper, ChatViewWrapper, ReactDrawer, MessageDialog, AddUserBtn, Fieldset, Label, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSingle", function() { return MessageSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindow", function() { return ChatWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBox", function() { return ChatBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSidebar", function() { return ChatSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMessageWrapper", function() { return ComposeMessageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLists", function() { return UserLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListsWrapper", function() { return UserListsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleViewProfile", function() { return ToggleViewProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeInputWrapper", function() { return ComposeInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSearchBox", function() { return SidebarSearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChatWrapper", function() { return MessageChatWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewWrapper", function() { return ChatViewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDrawer", function() { return ReactDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialog", function() { return MessageDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserBtn", function() { return AddUserBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/button */ "../../node_modules/@iso/components/uielements/button.js");
/* harmony import */ var _iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var react_motion_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-motion-drawer */ "react-motion-drawer");
/* harmony import */ var react_motion_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_motion_drawer__WEBPACK_IMPORTED_MODULE_4__);






const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Messagesstyles__Input",
  componentId: "c2gw2d-0"
})([""]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_3__["Textarea"]).withConfig({
  displayName: "Messagesstyles__Textarea",
  componentId: "c2gw2d-1"
})([""]);
const ReactDrawer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_motion_drawer__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "Messagesstyles__ReactDrawer",
  componentId: "c2gw2d-2"
})(["width:100%;background:#ffffff;"]);
const MessageSingle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__MessageSingle",
  componentId: "c2gw2d-3"
})(["display:flex;flex-wrap:wrap;margin:15px 0;align-items:flex-start;flex-shrink:0;@media only screen and (max-width:767px){margin:10px 0;}&.loggedUser{justify-content:flex-end;}.messageGravatar{width:40px;height:40px;flex-shrink:0;overflow:hidden;margin:0px 20px;img{border-radius:50%;width:100%;height:100%;object-fit:cover;}}.messageContent{display:flex;flex-direction:column;max-width:calc(100% - 110px);flex-shrink:0;.messageContentText{position:relative;font-size:14px;vertical-align:top;display:inline-block;padding:10px 15px;", " word-break:break-word;p{margin:0;}}.messageTime{font-size:12px;color:", ";margin-top:5px;}&.isUser{align-items:flex-end;.messageContentText{background:", ";color:#ffffff;border-radius:3px 0 3px 3px;&:after{content:'';position:absolute;border-style:solid;display:block;width:0;top:0;bottom:auto;left:auto;right:-9px;border-width:0px 0 10px 10px;border-color:transparent ", ";margin-top:0;}}.messageTime{margin-left:auto;}}&.notUser{align-items:flex-start;.messageContentText{background:", ";color:", ";border-radius:0 3px 3px 3px;&:after{content:'';position:absolute;border-style:solid;display:block;width:0;top:0;bottom:auto;left:-9px;border-width:0px 10px 10px 0;border-color:transparent ", ";margin-top:0;}}.messageTime{margin-right:auto;}}}"], ''
/* overflow: hidden; */
, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 4));
const ChatWindow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ChatWindow",
  componentId: "c2gw2d-4"
})(["display:flex;width:100%;height:100%;overflow:hidden;position:relative;@media only screen and (max-width:767px){> div{width:100%;max-width:100%;}}"]);
const ChatBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ChatBox",
  componentId: "c2gw2d-5"
})(["width:calc(100% - 350px);background-color:#ffffff;border:1px solid ", ";border-left-width:0;display:flex;flex-direction:column;@media only screen and (max-width:767px){border-left-width:1px;}@media only screen and (min-width:768px) and (max-width:991px){width:calc(100% - 280px);}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const ChatSidebar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ChatSidebar",
  componentId: "c2gw2d-6"
})(["flex-shrink:0;border:1px solid ", ";height:100%;display:flex;flex-direction:column;background-color:#ffffff;.UserListsWrapper{.messageHelperText{background:#ffffff;height:100%;padding:0 !important;}}.ComposeMessageButton{margin-top:auto;padding:20px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:100%;text-align:center;background:#ffffff;button{width:100%;margin:0;}}@media only screen and (min-width:768px) and (max-width:991px){width:280px;}@media only screen and (min-width:992px){width:350px;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Messagesstyles__Button",
  componentId: "c2gw2d-7"
})(["width:calc(100% - 60px);margin-left:30px;margin-top:30px;span{&:last-child{span{background-color:#ffffff;}}}"]);
const ComposeMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ComposeMessageWrapper",
  componentId: "c2gw2d-8"
})(["background:", ";flex-shrink:0;border-top:1px solid ", ";border-bottom:0;", "{padding:20px;border:0;background-color:transparent;resize:none;&:focus{box-shadow:none;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Textarea);
const ComposeInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ComposeInputWrapper",
  componentId: "c2gw2d-9"
})(["background:#ffffff;height:65vh;padding:30px 30px 0;> div{margin-top:-8px;width:100%;margin-left:20px;}"]);
const UserListsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__UserListsWrapper",
  componentId: "c2gw2d-10"
})(["width:100%;display:flex;flex-direction:column;height:inherit;"]);
const UserLists = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__UserLists",
  componentId: "c2gw2d-11"
})(["width:100%;margin:0;padding:10px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;text-align:left;position:relative;margin:0;margin-bottom:3px;align-items:center;cursor:pointer;box-sizing:border-box;transition:all 0.25s ease;background-color:#fff;*{box-sizing:border-box;}&:hover{background-color:", ";}.userListsGravatar{width:50px;margin:0 15px 0 0;flex-shrink:0;img{border-radius:50%;}}.userListsContent{width:100%;display:flex;flex-direction:column;overflow:hidden;h4{font-size:14px;margin:0;font-weight:500;}.chatExcerpt{width:100%;display:flex;justify-content:space-between;align-items:flex-start;p{color:", ";margin:0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;display:inline-block;}.userListsTime{color:", ";font-size:10px;flex-shrink:0;}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));
const ToggleViewProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ToggleViewProfile",
  componentId: "c2gw2d-12"
})(["background:#ffffff;height:65px;flex-shrink:0;padding-left:30px;display:flex;align-items:center;> span{font-size:17px;color:", ";cursor:pointer;}@media only screen and (max-width:767px){padding-left:20px;}", "{width:auto;padding:0;border:0;margin:0;margin-right:10px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;&:focus{box-shadow:none;}i{font-size:12px;color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Button, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0));
const SidebarSearchBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__SidebarSearchBox",
  componentId: "c2gw2d-13"
})(["padding:15px 20px;background:#ffffff;display:flex;flex-shrink:0;align-items:center;justify-content:center;border-bottom:1px solid ", ";", "{padding:0;border:0;&:focus{box-shadow:none;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Input);
const MessageChatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__MessageChatWrapper",
  componentId: "c2gw2d-14"
})(["display:flex;width:100%;height:calc(100% - 136px);flex-direction:column;overflow:hidden;overflow-y:auto;background:#ffffff;border-top:1px solid ", ";::-webkit-scrollbar{display:none;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const ChatViewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__ChatViewWrapper",
  componentId: "c2gw2d-15"
})(["height:100%;padding:30px;@media only screen and (max-width:767px){padding:0;}"]);
const MessageDialog = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__MessageDialog",
  componentId: "c2gw2d-16"
})(["h5{font-size:13px;color:", ";margin-bottom:10px;}", "{background:#ffffff;flex-shrink:0;border:0;", "{padding:4px 10px;border:1px solid ", ";margin-bottom:10px;&:focus{border-color:#4482ff;box-shadow:0 0 0 2px rgba(68,130,255,0.2);}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), ComposeMessageWrapper, Textarea, Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
const AddUserBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Messagesstyles__AddUserBtn",
  componentId: "c2gw2d-17"
})(["&&{padding:0 12px;i{font-size:17px;color:", ";}&:hover{i{color:inherit;}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1));
const Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__Fieldset",
  componentId: "c2gw2d-18"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:20px;&:last-child{margin-bottom:0;}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Messagesstyles__Label",
  componentId: "c2gw2d-19"
})(["font-size:12px;color:", ";line-height:1.5;font-weight:400;padding:0;margin:0 0 5px;"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0));
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Messagesstyles__Form",
  componentId: "c2gw2d-20"
})([""]);


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

/***/ "./pages/dashboard/chat.js":
/*!*********************************!*\
  !*** ./pages/dashboard/chat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_containers_Chat_Messages_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/containers/Chat/Messages.styles */ "../../node_modules/@iso/containers/Chat/Messages.styles.js");
/* harmony import */ var _authentication_auth_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/auth.utils */ "./authentication/auth.utils.js");
/* harmony import */ var _containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/DashboardLayout/DashboardLayout */ "./containers/DashboardLayout/DashboardLayout.js");
var _jsxFileName = "C:\\Users\\snowd\\Desktop\\isoadmin-330\\admin\\isomorphic\\packages\\isomorphic-next\\pages\\dashboard\\chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DesktopView = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @iso/containers/Chat/DesktopView */ "../../node_modules/@iso/containers/Chat/DesktopView.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @iso/containers/Chat/DesktopView */ "../../node_modules/@iso/containers/Chat/DesktopView.js")],
    modules: ['@iso/containers/Chat/DesktopView']
  }
});
const MobileView = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @iso/containers/Chat/MobileView */ "../../node_modules/@iso/containers/Chat/MobileView.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @iso/containers/Chat/MobileView */ "../../node_modules/@iso/containers/Chat/MobileView.js")],
    modules: ['@iso/containers/Chat/MobileView']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_5__["withAuthSync"])(function Chat() {
  const {
    view,
    height
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.App);
  const ChatView = view === 'MobileView' ? MobileView : DesktopView;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Chat")), __jsx(_containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_iso_containers_Chat_Messages_styles__WEBPACK_IMPORTED_MODULE_4__["ChatViewWrapper"], {
    style: {
      height: view === 'MobileView' ? height - 108 : height - 138
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(ChatView, {
    height: height,
    view: view,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
}));

/***/ }),

/***/ "antd/lib/auto-complete":
/*!*****************************************!*\
  !*** external "antd/lib/auto-complete" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

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

/***/ "antd/lib/notification":
/*!****************************************!*\
  !*** external "antd/lib/notification" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/radio":
/*!*********************************!*\
  !*** external "antd/lib/radio" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "clone":
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clone");

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

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-motion-drawer":
/*!**************************************!*\
  !*** external "react-motion-drawer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-motion-drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9idWNrZXQuc3ZnIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9jaGluYS5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2ZyYW5jZS5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2l0YWx5LnN2ZyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvc3BhaW4uc3ZnIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy91ay5zdmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMS5wbmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMy5wbmciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9DYXJ0L1NpbmdsZUNhcnRNb2RhbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL0NhcnQvU2luZ2xlQ2FydE1vZGFsLnN0eWxlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvRmVlZGJhY2svTW9kYWwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyL1RoZW1lU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3N0eWxlcy9idXR0b24uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3N0eWxlcy9pbnB1dC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb21wb25lbnRzL3V0aWxpdHkvTG9nby5uZXh0LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9pbnRsTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29uZmlnL2xhbmd1YWdlLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvc2l0ZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29uZmlnL3RoZW1lL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvdGhlbWUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb25maWcvdGhlbWUvdGhlbWUuY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL2NvbnRhaW5lcnMvQ2hhdC9NZXNzYWdlcy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9MYW5ndWFnZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb250YWluZXJzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9jb250YWluZXJzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vY29udGFpbmVycy9UaGVtZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9saWIvaGVscGVycy9ydGwuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvYXBwL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvZWNvbW1lcmNlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL0Bpc28vcmVkdXgvbGFuZ3VhZ2VTd2l0Y2hlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9AaXNvL3JlZHV4L3RoZW1lU3dpdGNoZXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvQGlzby9yZWR1eC90aGVtZVN3aXRjaGVyL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9zbm93ZC9EZXNrdG9wL2lzb2FkbWluLTMzMC9hZG1pbi9pc29tb3JwaGljL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wb3BvdmVyL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3Nub3dkL0Rlc2t0b3AvaXNvYWRtaW4tMzMwL2FkbWluL2lzb21vcnBoaWMvbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvc25vd2QvRGVza3RvcC9pc29hZG1pbi0zMzAvYWRtaW4vaXNvbW9ycGhpYy9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2F1dGhlbnRpY2F0aW9uL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXV0aGVudGljYXRpb24vYXV0aC51dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0Rhc2hib2FyZExheW91dC9EYXNoYm9hcmRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9EYXNoYm9hcmRMYXlvdXQvRGFzaGJvYXJkTGF5b3V0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1NpZGViYXIvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1NpZGViYXIvU2lkZWJhci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9TaWRlYmFyL1NpZGViYXJNZW51LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvU2lkZWJhci9zaWRlYmFyLm5hdmlnYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXIuc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhckFkZFRvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJEcm9wZG93bi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ub3BiYXIvVG9wYmFyTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9Ub3BiYXIvVG9wYmFyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhclNlYXJjaE1vZGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1RvcGJhci9Ub3BiYXJVc2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9jaGF0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2F1dG8tY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9kYXRlLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbm90aWZpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvcG9wb3ZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL3JhZGlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvdG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbXV0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvbi1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EtZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC10aGVtZVwiIl0sIm5hbWVzIjpbInByaWNlIiwicXVhbnRpdHkiLCJpbWFnZSIsIm9iamVjdElEIiwiY2FuY2VsUXVhbnRpdHkiLCJfaGlnaGxpZ2h0UmVzdWx0IiwibmFtZSIsInZhbHVlIiwidG9GaXhlZCIsIlRvcGJhckNhcnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsInRyYW5zaXRpb24iLCJwcm9wcyIsIldpdGhEaXJlY3Rpb24iLCJjb25maWciLCJjaGFuZ2VUaGVtZSIsInNlbGVjdGVkSWQiLCJpZCIsImxhYmVsIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInRoZW1lTmFtZSIsImJ1dHRvbkNvbG9yIiwib25DbGljayIsImN1c3RvbUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiQW50QnV0dG9uIiwiQnV0dG9ucyIsImlzb0J1dHRvbiIsIkFudEJ1dHRvbkdyb3VwIiwiQnV0dG9uc0dyb3VwIiwiR3JvdXAiLCJCdXR0b25Hcm91cCIsIlNlYXJjaCIsIlRleHRBcmVhIiwiV0RTdHlsZWRJbnB1dCIsIklucHV0V3JhcHBlciIsIlN0eWxlZElucHV0IiwiV0RJbnB1dEdyb3VwIiwiSW5wdXRHcm91cFdyYXBwZXIiLCJJbnB1dEdyb3VwIiwiV0RJbnB1dFNlYXJjaCIsIklucHV0U2VhcmNoV3JhcHBlciIsIklucHV0U2VhcmNoIiwiV0RUZXh0YXJlYSIsIlRleHRBcmVhV3JhcHBlciIsIlRleHRhcmVhIiwiQ29tcG9uZW50TmFtZSIsIlJhZGlvQnV0dG9ucyIsIkdob3N0QnV0dG9ucyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbGxhcHNlZCIsInNpdGVDb25maWciLCJzaXRlSWNvbiIsInNpdGVOYW1lIiwiSW5qZWN0TWFzc2FnZSIsImluamVjdEludGwiLCJ3aXRoUmVmIiwibGFuZ3VhZ2UiLCJsYW5nRGlyIiwiZm9vdGVyVGV4dCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImVuYWJsZUFuaW1hdGVkUm91dGUiLCJhcGlVcmwiLCJnb29nbGUiLCJhbmFseXRpY3NLZXkiLCJkYXNoYm9hcmQiLCJkZWZhdWx0VGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGhlbWUiLCJjb2xvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJncmF5c2NhbGUiLCJ0ZXh0IiwiYm9yZGVyIiwiY2FsZW5kYXIiLCJmb250cyIsInByZSIsInRoZW1lcyIsImN1c3RvbVRoZW1lIiwidGhlbWVDb25maWciLCJ0b3BiYXIiLCJzaWRlYmFyIiwibGF5b3V0IiwiSW5wdXQiLCJJbnB1dHMiLCJUZXh0YXJlYXMiLCJSZWFjdERyYXdlciIsIlJlYWN0RHJhd2VycyIsIk1lc3NhZ2VTaW5nbGUiLCJDaGF0V2luZG93IiwiQ2hhdEJveCIsIkNoYXRTaWRlYmFyIiwiQnV0dG9uIiwiQ29tcG9zZU1lc3NhZ2VXcmFwcGVyIiwiQ29tcG9zZUlucHV0V3JhcHBlciIsIlVzZXJMaXN0c1dyYXBwZXIiLCJVc2VyTGlzdHMiLCJUb2dnbGVWaWV3UHJvZmlsZSIsIlNpZGViYXJTZWFyY2hCb3giLCJNZXNzYWdlQ2hhdFdyYXBwZXIiLCJDaGF0Vmlld1dyYXBwZXIiLCJNZXNzYWdlRGlhbG9nIiwiQWRkVXNlckJ0biIsIkZpZWxkc2V0IiwiTGFiZWwiLCJGb3JtIiwiY2hhbmdlTGFuZ3VhZ2UiLCJhY3Rpb25zIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibGFuZ3VhZ2VJZCIsImljb24iLCJkZWZhdWx0TGFuZ3VhZ2UiLCJsb2NhbGUiLCJlbmdsaXNoTGFuZyIsImNoaW5lc2VMYW5nIiwic3BhbmlzaExhbmciLCJmcmVuY2hMYW5nIiwiaXRhbGlhbkxhbmciLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsYW5nIiwic2VsZWNldGVkTGFuZ3VhZ2UiLCJmb3JFYWNoIiwic3dpdGNoQWN0aXZhdGlvbiIsIkFjdGlvbnMiLCJUaGVtZVN3aXRjaGVyIiwiaXNBY3RpdmF0ZWQiLCJ0b3BiYXJUaGVtZSIsInNpZGViYXJUaGVtZSIsImxheW91dFRoZW1lIiwic3R5bGVCdXR0b24iLCJiYWNrZ3JvdW5kIiwiVGhlbWVzIiwiYXR0ciIsImJ1Y2tldFNWRyIsIlRoZW1lU3dpdGNoZXJTdHlsZSIsImNoYW5nZVRoZW1lcyIsInRleHRDb2xvciIsInVuZGVmaW5lZCIsImN1c3RvbWl6ZWRUaGVtZXMiLCJnZXRDdXJyZW50VGhlbWUiLCJhdHRyaWJ1dGUiLCJzZWxlY3RlZFRoZW1lbmFtZSIsInNlbGVjZXRlZFRoZW1lIiwiZGlyZWN0aW9uIiwid2l0aERpcmVjdGlvbiIsIkNvbXBvbmVudCIsInRpbWluZyIsInJhZGl1cyIsInNoYWRvdyIsImdldFZpZXciLCJ3aWR0aCIsIm5ld1ZpZXciLCJDT0xMUFNFX0NIQU5HRSIsIkNPTExQU0VfT1BFTl9EUkFXRVIiLCJDSEFOR0VfT1BFTl9LRVlTIiwiVE9HR0xFX0FMTCIsIkNIQU5HRV9DVVJSRU5UIiwiQ0xFQVJfTUVOVSIsInRvZ2dsZUNvbGxhcHNlZCIsInR5cGUiLCJ0b2dnbGVBbGwiLCJoZWlnaHQiLCJ2aWV3IiwidG9nZ2xlT3BlbkRyYXdlciIsImNoYW5nZU9wZW5LZXlzIiwib3BlbktleXMiLCJjaGFuZ2VDdXJyZW50IiwiY3VycmVudCIsImNsZWFyTWVudSIsIklOSVRfREFUQSIsIklOSVRfREFUQV9TQUdBIiwiVVBEQVRFX0RBVEEiLCJVUERBVEVfREFUQV9TQUdBIiwiQ0hBTkdFX1ZJRVciLCJWSUVXX1RPUEJBUl9DQVJUIiwiaW5pdERhdGEiLCJjaGFuZ2VWaWV3IiwiY2hhbmdlVmlld1RvcGJhckNhcnQiLCJ2aWV3VG9wYmFyQ2FydCIsImNoYW5nZVByb2R1Y3RRdWFudGl0eSIsInByb2R1Y3RRdWFudGl0eSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJFY29tbWVyY2UiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicHVzaCIsIkNIQU5HRV9MQU5HVUFHRSIsIkFDVElWQVRFX0xBTkdfTU9EQUwiLCJDSEFOR0VfVEhFTUUiLCJTV0lUQ0hfQUNUSVZBVElPTiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJMT0dJTl9SRVFVRVNUX1NUQVJUIiwiSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQiLCJMT0dJTl9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dJTl9SRVFVRVNUX0ZBSUxVUkUiLCJMT0dPVVRfUkVRVUVTVF9TVEFSVCIsIkxPR09VVF9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dPVVRfUkVRVUVTVF9GQUlMVVJFIiwibG9naW4iLCJwYXlsb2FkIiwiand0TG9naW4iLCJoaXN0b3J5IiwidXNlckluZm8iLCJsb2dpblJlcXVlc3RTdWNjZXNzIiwibG9naW5SZXF1ZXN0RmFpbHVyZSIsImxvZ291dCIsImxvZ291dFJlcXVlc3RTdWNjZXNzIiwibG9nb3V0UmVxdWVzdEZhaWx1cmUiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVGcm9tQnJvd3NlciIsImdldENvb2tpZUZyb21TZXJ2ZXIiLCJjb29raWUiLCJoZWFkZXJzIiwicmF3Q29va2llIiwic3BsaXQiLCJmaW5kIiwiYyIsInRyaW0iLCJzdGFydHNXaXRoIiwidG9rZW4iLCJleHBpcmVzIiwibmV4dENvb2tpZSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicmVtb3ZlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIldyYXBwZWRDb21wb25lbnQiLCJXcmFwcGVyIiwic3luY0xvZ291dCIsImxvZyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImNvbXBvbmVudFByb3BzIiwiQ29udGVudCIsIkZvb3RlciIsIkRhc2hib2FyZExheW91dCIsImZsZXhEaXJlY3Rpb24iLCJvdmVyZmxvd1giLCJwYWRkaW5nIiwiZmxleFNocmluayIsInRleHRBbGlnbiIsImJvcmRlclRvcCIsIkFwcEhvbGRlciIsIlN1Yk1lbnUiLCJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIlNpZGVyIiwiYXBwQWN0aW9ucyIsIlNpZGViYXIiLCJvcGVuRHJhd2VyIiwiaGFuZGxlQ2xpY2siLCJzZXRUaW1lb3V0Iiwib25PcGVuQ2hhbmdlIiwibmV3T3BlbktleXMiLCJsYXRlc3RPcGVuS2V5IiwiaW5kZXhPZiIsImxhdGVzdENsb3NlS2V5IiwibmV4dE9wZW5LZXlzIiwiZ2V0QW5jZXN0b3JLZXlzIiwiY29uY2F0Iiwic3ViMyIsImlzQ29sbGFwc2VkIiwibW9kZSIsInNjcm9sbGhlaWdodCIsInN0eWxpbmciLCJzdWJtZW51U3R5bGUiLCJzdWJtZW51Q29sb3IiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJTSURFQkFSX01FTlVfT1BUSU9OUyIsIlNpZGViYXJXcmFwcGVyIiwiU2lkZWJhck1lbnUiLCJyZXN0IiwibGVmdEljb24iLCJ3aXRob3V0RGFzaGJvYXJkIiwibGlua1RvIiwiSGVhZGVyIiwiVG9wYmFyIiwicmVuZGVyIiwiY3VzdG9taXplZFRoZW1lIiwicG9zaXRpb24iLCJzZXRTdGF0ZSIsInNlbGVjdGVkSXRlbSIsImNvbm5lY3QiLCJUb3BiYXJXcmFwcGVyIiwiZWNvbW1lcmNlQWN0aW9uIiwidG90YWxQcmljZSIsIlRvcGJhckFkZHRvQ2FydCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJiaW5kIiwiaGlkZSIsInJlbmRlclByb2R1Y3RzIiwiY2hhbmdlUXVhbnRpdHkiLCJsZW5ndGgiLCJuZXdQcm9kdWN0UXVhbnRpdHkiLCJjb250ZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiVG9wYmFyRHJvcGRvd25XcmFwcGVyIiwiZGVtb01hc3NhZ2UiLCJ0aW1lIiwibWFzc2FnZSIsIlRvcGJhck1lc3NhZ2UiLCJ2aXNpYmxlIiwic2V0VmlzaWJpbGl0eSIsInVzZVN0YXRlIiwiSW1hZ2UiLCJkZW1vTm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbiIsIlRvcGJhck5vdGlmaWNhdGlvbiIsIlNlYXJjaGJhciIsInRpbWVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImNsZWFyVGltZW91dCIsIm9uQmx1ciIsIlRvcGJhclNlYXJjaCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUJsdXIiLCJzaG93TW9kYWwiLCJUb3BiYXJTZWFyY2hNb2RhbCIsIk1vZGFsIiwiYXV0aEFjdGlvbiIsIlRvcGJhclVzZXIiLCJ1c2VycGljIiwiRGVza3RvcFZpZXciLCJkeW5hbWljIiwiTW9iaWxlVmlldyIsIkNoYXQiLCJDaGF0VmlldyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL2NoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9kYXNoYm9hcmQvY2hhdFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvY2hhdC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSk1ZWGxsY2w4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lOQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNaUExTVRJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrTkROVUU3SWlCa1BTSk5OVGt1TURFMExEYzVMamMxTVhZek5qUXVOalkxWXpBc01Ua3VNemMyTERFMUxqY3dOaXd6TlM0d09EUXNNelV1TURnc016VXVNRGcwYURNeU15NDRNVFFOQ2dsak1Ua3VNemMwTERBc016VXVNRGd0TVRVdU56QTRMRE0xTGpBNExUTTFMakE0TkZZM09TNDNOVEZJTlRrdU1ERTBlaUl2UGcwS1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdRakF3TURzaUlHUTlJazAwTWpRdU1UZ3hMRGM1TGpjMU1YWXpOalF1TmpZMVl6QXNNVGt1TXpjMkxURTFMamN3Tml3ek5TNHdPRFF0TXpVdU1EZ3NNelV1TURnMGFESTRMamd3TmcwS0NXTXhPUzR6TnpRc01Dd3pOUzR3TnprdE1UVXVOekE0TERNMUxqQTNPUzB6TlM0d09EUldOemt1TnpVeFNEUXlOQzR4T0RGNklpOCtEUW84Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUmtaQk1qSTNPeUlnWkQwaVRUUTJOQzR3T1RJc09UQXVOelV5U0RRM0xqa3dPR010T0M0M016TXNNQzB4TlM0NE1UTXROeTR3T0MweE5TNDRNVE10TVRVdU9ERXpWalE0TGpNeE5nMEtDV013TFRndU56TXpMRGN1TURndE1UVXVPREV6TERFMUxqZ3hNeTB4TlM0NE1UTm9OREUyTGpFNE5HTTRMamN6TXl3d0xERTFMamd4TXl3M0xqQTRMREUxTGpneE15d3hOUzQ0TVROMk1qWXVOakl6RFFvSlF6UTNPUzQ1TURZc09ETXVOamN5TERRM01pNDRNallzT1RBdU56VXlMRFEyTkM0d09USXNPVEF1TnpVeWVpSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBZM09FSXdRanNpSUdROUlrMDBOalF1TURrekxETXlMalV3TW1ndE1USXVPVGswZGpFd0xqRTBPV013TERFd0xqWTFOQzA0TGpZek5pd3hPUzR5T1RFdE1Ua3VNamc1TERFNUxqSTVNVWd6TWk0d09UVjJNVEl1T1RrMkRRb0pZekFzT0M0M016UXNOeTR3Tnprc01UVXVPREUwTERFMUxqZ3hNaXd4TlM0NE1UUm9OREUyTGpFNE5tTTRMamN6TXl3d0xERTFMamd4TWkwM0xqQTRMREUxTGpneE1pMHhOUzQ0TVRSV05EZ3VNekUzRFFvSlF6UTNPUzQ1TURZc016a3VOVGd6TERRM01pNDRNallzTXpJdU5UQXlMRFEyTkM0d09UTXNNekl1TlRBeWVpSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR016azFRVHNpSUdROUlrMHpOREF1TlRVeExETTNOaTQwTXpSSU1UY3hMalEwT1dNdE55NHlPVGNzTUMweE15NHlNVEl0TlM0NU1UVXRNVE11TWpFeUxURXpMakl4TW5ZdE1qUXVNRGM0RFFvSll6QXROeTR5T1Rjc05TNDVNVFV0TVRNdU1qRXlMREV6TGpJeE1pMHhNeTR5TVRKb01UWTVMakV3TW1NM0xqSTVOeXd3TERFekxqSXhNaXcxTGpreE5Td3hNeTR5TVRJc01UTXVNakV5ZGpJMExqQTNPQTBLQ1VNek5UTXVOell6TERNM01DNDFNVGdzTXpRM0xqZzBPQ3d6TnpZdU5ETTBMRE0wTUM0MU5URXNNemMyTGpRek5Ib2lMejROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORU9ERTVOREk3SWlCa1BTSk5NelF3TGpVMU1pd3pNalV1T1RNeWFDMHlPQzQ0TURaak55NHlPVFlzTUN3eE15NHlNVEVzTlM0NU1UWXNNVE11TWpFeExERXpMakl4TTNZeU5DNHdOemNOQ2dsak1DdzNMakk1TnkwMUxqa3hOU3d4TXk0eU1UTXRNVE11TWpFeExERXpMakl4TTJneU9DNDRNRFpqTnk0eU9UWXNNQ3d4TXk0eU1URXROUzQ1TVRZc01UTXVNakV4TFRFekxqSXhNM1l0TWpRdU1EYzNEUW9KUXpNMU15NDNOak1zTXpNeExqZzBOeXd6TkRjdU9EUTRMRE15TlM0NU16SXNNelF3TGpVMU1pd3pNalV1T1RNeWVpSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBNE9FRkdSanNpSUdROUlrMDVNeTQxTlRJc016SXVOVEF5ZGpFME5DNHlPVFpqTUN3eE9DNDRNVEVzTVRVdU1qUTNMRE0wTGpBMU9Td3pOQzR3TlRVc016UXVNRFU1YkRBc01BMEtDV014T0M0NE1EZ3NNQ3d6TkM0d05UWXRNVFV1TWpRNUxETTBMakExTmkwek5DNHdOVGwyTFRjdU1EQTJZekF0TVRndU9ERXNNVFV1TWpRM0xUTTBMakExT1N3ek5DNHdOVFV0TXpRdU1EVTViREFzTUdNeE9DNDRNRGdzTUN3ek5DNHdOVFlzTVRVdU1qUTVMRE0wTGpBMU5pd3pOQzR3TlRrTkNnbDJOVEV1TmpNMVl6QXNNVGd1T0RFeExERTFMakkwTnl3ek5DNHdOVGtzTXpRdU1EVTFMRE0wTGpBMU9Xd3dMREJqTVRndU9EQTRMREFzTXpRdU1EVTFMVEUxTGpJME9Td3pOQzR3TlRVdE16UXVNRFU1ZGkwNU55NDBNemtOQ2dsak1Dd3hPQzQ0TVRFc01UVXVNalEzTERNMExqQTJMRE0wTGpBMU5Td3pOQzR3Tm13d0xEQmpNVGd1T0RBNExEQXNNelF1TURVMUxURTFMakkwT1N3ek5DNHdOVFV0TXpRdU1EWldNekl1TlRBeVNEa3pMalUxTW5vaUx6NE5DanhuUGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTXdNRGMyUTBVN0lpQmtQU0pOTWprM0xqZzROU3d4TWpNdU9UZzRZeTB4TlM0NU1Ea3NNQzB5T0M0NE1EWXNNVEl1T0RrNUxUSTRMamd3Tml3eU9DNDRNWFkyT0M0Mk0yTXdMREV6TGpZMk1TMDRMakEwTlN3eU5TNDBNemN0TVRrdU5qVXlMRE13TGpnMk5BMEtDUWxqTkM0ek56VXNNaTR3TkRZc09TNHlOVFFzTXk0eE9UVXNNVFF1TkRBekxETXVNVGsxYkRBc01HTXhPQzQ0TURnc01Dd3pOQzR3TlRVdE1UVXVNalE1TERNMExqQTFOUzB6TkM0d05UbFdNVEl6TGprNE9Fd3lPVGN1T0RnMUxERXlNeTQ1T0RoNklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBd056WkRSVHNpSUdROUlrMHhOall1T1RFeUxERXpOUzQzTXpKakxURTRMamd3T0N3d0xUTTBMakExTlN3eE5TNHlORGt0TXpRdU1EVTFMRE0wTGpBMmRqY3VNREEyWXpBc01UTXVOall4TFRndU1EUTFMREkxTGpRek55MHhPUzQyTlRJc016QXVPRFkwRFFvSkNXTTBMak0zTml3eUxqQTBOaXc1TGpJMU5Dd3pMakU1TlN3eE5DNDBNRE1zTXk0eE9UVmpNVGd1T0RBNExEQXNNelF1TURVMkxURTFMakkwT1N3ek5DNHdOVFl0TXpRdU1EVTVkaTAzTGpBd05tTXdMVEV6TGpZMk1TdzRMakEwTlMweU5TNDBNemNzTVRrdU5qVXlMVE13TGpnMk5BMEtDUWxETVRjMkxqa3pPU3d4TXpZdU9EZ3lMREUzTWk0d05qRXNNVE0xTGpjek1pd3hOall1T1RFeUxERXpOUzQzTXpKNklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBd056WkRSVHNpSUdROUlrMHpNemN1TVRnNUxETXlMalV3TW5ZNU1TNDBPRFpqTUN3eE15NDJOakV0T0M0d05EVXNNalV1TkRNM0xURTVMalkxTWl3ek1DNDROalJqTkM0ek56VXNNaTR3TkRZc09TNHlOVFFzTXk0eE9UVXNNVFF1TkRBekxETXVNVGsxRFFvSkNXd3dMREJqTVRndU9EQTRMREFzTXpRdU1EVTFMVEUxTGpJME9Td3pOQzR3TlRVdE16UXVNRFU1VmpNeUxqVXdNa2d6TXpjdU1UZzVlaUl2UGcwS1BDOW5QZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpBMU1VTXhRanNpSUdROUlrMDBPRGN1TkRBMUxEVTFMak0xTjNZdE55NHdOREpqTUMweE1pNDROVFV0TVRBdU5EVTRMVEl6TGpNeE15MHlNeTR6TVRNdE1qTXVNekV6YUMwNU9DNHdPVGRJT1RNdU5UVXlTRFEzTGprd09BMEtDV010TVRJdU9EVTFMREF0TWpNdU16RXpMREV3TGpRMU9DMHlNeTR6TVRNc01qTXVNekV6ZGpjdU1EUXlRekV3TGpRNE9DdzFPQzQ0TmpNc01DdzNNUzQyTXpJc01DdzROaTQ0TVhZNE5TNHdNREpqTUN3ME5DNDNNVElzTVRZdU1EUTRMRGczTGprMk9TdzBOUzR4T0Rnc01USXhMamd3TWcwS0NXTXlMakExTWl3eUxqTTRNaXcwTGpFMk5TdzBMamN3TVN3MkxqTXlOU3cyTGprMk9IWTRNUzQzT1RWak1DdzBMakUwTWl3ekxqTTFPQ3czTGpVc055NDFMRGN1TlhNM0xqVXRNeTR6TlRnc055NDFMVGN1TlhZdE5qY3VOamt6RFFvSll6STBMakUxTkN3eU1DNHpNamNzTlRNdU1UUTRMRE0wTGpJNU9TdzROQzR5TWpRc05EQXVNemM0ZGpndU1UWmpNQ3d4TVM0ME1pdzVMakk1TWl3eU1DNDNNVElzTWpBdU56RXlMREl3TGpjeE1tZ3hOamt1TVRBeVl6RXhMalF5TVN3d0xESXdMamN4TWkwNUxqSTVNaXd5TUM0M01USXRNakF1TnpFeURRb0pkaTA0TGpFMll6TXhMakEzTnkwMkxqQTRMRFl3TGpBM01TMHlNQzR3TlRJc09EUXVNakkxTFRRd0xqTTNPWFl4TWprdU56TXpZekFzTVRVdU1qQTVMVEV5TGpNM01pd3lOeTQxT0RNdE1qY3VOVGdzTWpjdU5UZ3pTRGswTGpBNU13MEtDV010TVRVdU1qQTRMREF0TWpjdU5UZ3RNVEl1TXpjMExUSTNMalU0TFRJM0xqVTRNM1l0TXpFdU56RXhZekF0TkM0eE5ESXRNeTR6TlRndE55NDFMVGN1TlMwM0xqVnpMVGN1TlN3ekxqTTFPQzAzTGpVc055NDFkak14TGpjeE1RMEtDV013TERJekxqUTRMREU1TGpFd01TdzBNaTQxT0RNc05ESXVOVGdzTkRJdU5UZ3phRE15TXk0NE1UUmpNak11TkRjNUxEQXNOREl1TlRndE1Ua3VNVEF6TERReUxqVTRMVFF5TGpVNE0xWXpNREF1TlRoak1pNHhOaTB5TGpJMk55dzBMakkzTXkwMExqVTROU3cyTGpNeU5DMDJMamsyTncwS0NVTTBPVFV1T1RVeUxESTFPUzQzT0RFc05URXlMREl4Tmk0MU1qTXNOVEV5TERFM01TNDRNVEpXT0RZdU9ERkROVEV5TERjeExqWXpNaXcxTURFdU5URXlMRFU0TGpnMk15dzBPRGN1TkRBMUxEVTFMak0xTjNvZ1RUUTNNaTQwTURVc05EZ3VNekUxZGpJMkxqWXlNdzBLQ1dNd0xEUXVOVGcwTFRNdU56STVMRGd1TXpFekxUZ3VNekV6TERndU16RXphQzA1TUM0MU9UZDJMVFF6TGpJMWFEa3dMalU1TjBNME5qZ3VOamMzTERRd0xqQXdNaXcwTnpJdU5EQTFMRFF6TGpjek1TdzBOekl1TkRBMUxEUTRMak14TlhvZ1RUTTFPQzQwT1RZc09UQXVOelV5ZGpNekxqSXpOZzBLQ1dNd0xERTBMalkwTlMweE1TNDVNVE1zTWpZdU5UWXRNall1TlRVMkxESTJMalUyY3kweU5pNDFOVFl0TVRFdU9URTFMVEkyTGpVMU5pMHlOaTQxTm1Nd0xUUXVNVFF5TFRNdU16VTNMVGN1TlMwM0xqVXROeTQxY3kwM0xqVXNNeTR6TlRndE55NDFMRGN1TlhZNU55NDBNemtOQ2dsak1Dd3hOQzQyTkRVdE1URXVPVEV6TERJMkxqVTFPUzB5Tmk0MU5UWXNNall1TlRVNWN5MHlOaTQxTlRZdE1URXVPVEUxTFRJMkxqVTFOaTB5Tmk0MU5UbDJMVFV4TGpZek5XTXdMVEl5TGpreE5pMHhPQzQyTkRJdE5ERXVOVFl0TkRFdU5UVTFMVFF4TGpVMkRRb0pZeTB5TWk0NU1UUXNNQzAwTVM0MU5UWXNNVGd1TmpRMExUUXhMalUxTml3ME1TNDFOblkzTGpBd05XTXdMREUwTGpZME5TMHhNUzQ1TVRNc01qWXVOVFl0TWpZdU5UVTJMREkyTGpVMmN5MHlOaTQxTlRVdE1URXVPVEUxTFRJMkxqVTFOUzB5Tmk0MU5sWTVNQzQzTlRKMkxUVXdMamMxRFFvSmFESTFOeTQwTkRSMk5UQXVOelZJTXpVNExqUTVObm9nVFRNNUxqVTVOU3cwT0M0ek1UVmpNQzAwTGpVNE5Dd3pMamN5T1MwNExqTXhNeXc0TGpNeE15MDRMak14TTJnek9DNHhORFIyTkRNdU1qVklORGN1T1RBNFl5MDBMalU0TkN3d0xUZ3VNekV6TFRNdU56STVMVGd1TXpFekxUZ3VNekV6RFFvSlZqUTRMak14TlhvZ1RURTFMREUzTVM0NE1USldPRFl1T0RGak1DMDJMamM1TERNdU9URXhMVEV5TGpZM055dzVMalU1TlMweE5TNDFORFoyTXk0Mk56VmpNQ3d4TWk0NE5UVXNNVEF1TkRVNExESXpMak14TXl3eU15NHpNVE1zTWpNdU16RXphRE11TmpBMWRqRTNPUzQ0T1RVTkNnbERNamd1TkRreUxESTBPQzQ0TVRZc01UVXNNakV4TGpneU9Td3hOU3d4TnpFdU9ERXllaUJOTXpRd0xqVTFNU3d6TmpndU9UTTBTREUzTVM0ME5EbGpMVE11TVRRNUxEQXROUzQzTVRJdE1pNDFOak10TlM0M01USXROUzQzTVRKMkxURXpMakF6TlEwS0NXTXdMakE0TkMwd0xqUTFNU3d3TGpFek55MHdMamt4TERBdU1UTTNMVEV1TXpjM2RpMDVMamM0TTJNd0xURXVOelV4TERBdU56azFMVE11TXpFNExESXVNRFF5TFRRdU16WTBZekF1T1RjekxUQXVOelk1TERJdU1UazVMVEV1TWpNeUxETXVOVE16TFRFdU1qTXlhREUyT1M0eE1ESU5DZ2xqTVM0ek16UXNNQ3d5TGpVMkxEQXVORFl6TERNdU5UTTBMREV1TWpNell6RXVNalEyTERFdU1EUTFMREl1TURReUxESXVOakV6TERJdU1EUXlMRFF1TXpZemRqa3VOemd6WXpBc01DNDBOallzTUM0d05USXNNQzQ1TWpZc01DNHhNemNzTVM0ek56ZDJNVE11TURNMURRb0pRek0wTmk0eU5qTXNNelkyTGpNM01Td3pORE11Tnl3ek5qZ3VPVE0wTERNME1DNDFOVEVzTXpZNExqa3pOSG9nVFRRNU55d3hOekV1T0RFeVl6QXNOREF1TURFM0xURXpMalE1TWl3M055NHdNRFF0TXpZdU5URXpMREV3Tmk0ek16TjJMVEV4T0M0eU53MEtDV013TFRRdU1UUXlMVE11TXpVM0xUY3VOUzAzTGpVdE55NDFjeTAzTGpVc015NHpOVGd0Tnk0MUxEY3VOWFl4TXpRdU9UaGpMVEl5TGpZd055d3lNaTR3TnpRdE5URXVORGM1TERNM0xqazRPQzA0TkM0eU1qVXNORFF1T1RFMWRpMHdMall5TncwS0NXTXdMVFl1TkRZM0xUSXVPVGd6TFRFeUxqSTBOeTAzTGpZME1TMHhOaTR3TkRsakxUTXVOVGd6TFRJdU9UY3lMVGd1TVRndE5DNDNOakV0TVRNdU1UZzRMVFF1TnpZeFNERTNNUzQxTmpkakxUVXVNREE0TERBdE9TNDJNRFFzTVM0M09TMHhNeTR4T0Rnc05DNDNOakVOQ2dsakxUUXVOalU1TERNdU9EQXhMVGN1TmpReUxEa3VOVGd5TFRjdU5qUXlMREUyTGpBME9YWXdMall5TjJNdE16SXVOelEyTFRZdU9USTNMVFl4TGpZeE5pMHlNaTQ0TkRFdE9EUXVNakkwTFRRMExqa3hOVlk1T0M0eU5USm9NVGt1TlRNNGRqYzRMalUwTmcwS0NXTXdMREl5TGpreE5pd3hPQzQyTkRJc05ERXVOVFlzTkRFdU5UVTFMRFF4TGpVMll6SXlMamt4TkN3d0xEUXhMalUxTmkweE9DNDJORFFzTkRFdU5UVTJMVFF4TGpVMmRpMDNMakF3TldNd0xURTBMalkwTlN3eE1TNDVNVE10TWpZdU5UWXNNall1TlRVMkxUSTJMalUyRFFvSmN6STJMalUxTlN3eE1TNDVNVFVzTWpZdU5UVTFMREkyTGpVMmRqVXhMall6TldNd0xESXlMamt4Tml3eE9DNDJORElzTkRFdU5UVTVMRFF4TGpVMU5pdzBNUzQxTlRsek5ERXVOVFUyTFRFNExqWTBNeXcwTVM0MU5UWXROREV1TlRVNWRpMDJOUzQwT1RZTkNnbGpOeTR5TURZc05pNHdNRElzTVRZdU5EWTNMRGt1TmpFMkxESTJMalUxTml3NUxqWXhObU15TWk0NU1UUXNNQ3cwTVM0MU5UWXRNVGd1TmpRMExEUXhMalUxTmkwME1TNDFObFk1T0M0eU5USm9OekV1T1RreGRqTXhMalE1T1dNd0xEUXVNVFF5TERNdU16VTNMRGN1TlN3M0xqVXNOeTQxRFFvSmN6Y3VOUzB6TGpNMU9DdzNMalV0Tnk0MVZqazRMakkxTW1nekxqWXdOV014TWk0NE5UUXNNQ3d5TXk0ek1UTXRNVEF1TkRVNExESXpMak14TXkweU15NHpNVE4yTFRNdU5qYzFZelV1TmpnMExESXVPRFk1TERrdU5UazFMRGd1TnpVMkxEa3VOVGsxTERFMUxqVTBOblk0TlM0d01ESklORGszZWlJdlBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURnd01DQTRNREFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRGd3TUNBNE1EQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeG5QZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORlJERkdNelE3SWlCa1BTSk5NalF1T0RBM0xEWTBOaTR4TmxZeE5UTXVPRE00YURjMU1DNHpPRGQyTkRBeFl6QXNOaTQxTmpNc05TNHpOQ3d4TVM0NU1ETXNNVEV1T1RBekxERXhMamt3TTJneGRqSTNMamd3TjJndE1RMEtDUWxqTFRZdU5UWXpMREF0TVRFdU9UQXpMRFV1TXpRdE1URXVPVEF6TERFeExqa3dNbll6T1M0M01VZ3lOQzQ0TURkNklFMHlOek11TkRNMUxEUXpOUzR4T0dNdE5DNDBPVE1zTUMwNExqY3hOeXd4TGpjMUxURXhMamc1TkN3MExqa3lPQTBLQ1FsakxUTXVNVGMzTERNdU1UYzJMVFF1T1RJMkxEY3VNems1TFRRdU9USTJMREV4TGpnNU0yTXdMRFF1TkRreUxERXVOelVzT0M0M01UY3NOQzQ1TWpZc01URXVPRGsxWXpNdU1UYzNMRE11TVRjM0xEY3VOREF4TERRdU9USTNMREV4TGpnNU5DdzBMamt5TncwS0NRbGpOQzQwT1RJc01DdzRMamN4TmkweExqYzFMREV4TGpnNU15MDBMamt5TjJNekxqRTNOeTB6TGpFM09DdzBMamt5TnkwM0xqUXdNaXcwTGpreU55MHhNUzQ0T1RWak1DMDBMalE1TXkweExqYzFMVGd1TnpFM0xUUXVPVEkzTFRFeExqZzVNdzBLQ1FsRE1qZ3lMakUxTVN3ME16WXVPVE1zTWpjM0xqa3lOeXcwTXpVdU1UZ3NNamN6TGpRek5TdzBNelV1TVRoNklFMHlNREF1TkRJc05ERXhMall6TkdNeExqa3pOaXd4TGpJMkxEUXVNVGM1TERFdU9USTJMRFl1TkRnNUxERXVPVEkyRFFvSkNXTXlMalV5T1N3d0xEUXVPVFE1TFRBdU56ZzNMRFl1T1RrNExUSXVNamMxWXpNdU9UWXlMVEl1T0RjM0xEVXVOemN4TFRjdU9UZzRMRFF1TlMweE1pNDNNVGxzTFRFeExqazRNUzAwTkM0MU9EVnNNelV1T0RrNExUSTVMakF5TncwS0NRbGpNeTQ0TURndE15NHdOemdzTlM0ek5Ea3RPQzR5TnpZc015NDRNell0TVRJdU9UTTFjeTAxTGpneE5pMDNMamsxT0MweE1DNDNNRGN0T0M0eU1Xd3RORFl1TVRBMUxUSXVNemd4YkMweE5pNDFNVEV0TkRNdU1URXhEUW9KQ1dNdE1TNDNOVEV0TkM0MU56TXROaTR5TVRrdE55NDJORFV0TVRFdU1URTJMVGN1TmpRMWN5MDVMak0yTkN3ekxqQTNNaTB4TVM0eE1UWXNOeTQyTkRWc0xURTJMalV4TVN3ME15NHhNVEZzTFRRMkxqRXdOQ3d5TGpNNE1RMEtDUWxqTFRRdU9Ea3hMREF1TWpVeUxUa3VNVGt6TERNdU5UVXlMVEV3TGpjd055dzRMakl4WXkweExqVXhNeXcwTGpZMU9Dd3dMakF5T1N3NUxqZzFOU3d6TGpnek5pd3hNaTQ1TXpOc016VXVPRGs1TERJNUxqQXlOMnd0TVRFdU9UZ3hMRFEwTGpVNE5RMEtDUWxqTFRFdU1qY3hMRFF1TnpNc01DNDFNemdzT1M0NE5ERXNOQzQxTERFeUxqY3hPV015TGpBME55d3hMalE0Tnl3MExqUTJOeXd5TGpJM015dzJMams1T0N3eUxqSTNNMk15TGpNeExEQXNOQzQxTlRRdE1DNDJOalVzTmk0ME9Ea3RNUzQ1TWpWc016Z3VOams1TFRJMUxqRTNNdzBLQ1FsTU1qQXdMalF5TERReE1TNDJNelI2SUUwek1UUXVNekV6TERNMk5DNHpOVFJqTFRjdU5UZzVMREF0TVRRdU1qWXpMRFV1TVRJM0xURTJMakl6TERFeUxqUTJPR010TVM0eE5qTXNOQzR6TXprdE1DNDFOamNzT0M0NE56RXNNUzQyTnpnc01USXVOellOQ2drSll6SXVNalEyTERNdU9EZzVMRFV1T0RjekxEWXVOamN5TERFd0xqSXhNaXczTGpnek5XTXhMalF6TERBdU16Z3pMREl1T0RrNUxEQXVOVGM0TERRdU16WTFMREF1TlRjNFl6Y3VOVGc1TERBc01UUXVNalkwTFRVdU1USTNMREUyTGpJek1TMHhNaTQwTmpnTkNna0pZekl1TXprNUxUZ3VPVFUyTFRJdU9UTTFMVEU0TGpFNU5TMHhNUzQ0T1RFdE1qQXVOVGsyUXpNeE55NHlORGNzTXpZMExqVTBPU3d6TVRVdU56YzRMRE0yTkM0ek5UUXNNekUwTGpNeE15d3pOalF1TXpVMGVpQk5NekUwTGpNek5Dd3lPREl1TlRjMERRb0pDV010TVM0ME5qWXNNQzB5TGprek5Dd3dMakU1TkMwMExqTTJOQ3d3TGpVM09HTXRPQzQ1TlRZc01pNDBNREV0TVRRdU1qa3NNVEV1TmpRdE1URXVPRGtzTWpBdU5UazJZekV1T1RZM0xEY3VNelFzT0M0Mk5ESXNNVEl1TkRZM0xERTJMakl6TXl3eE1pNDBOamNOQ2drSll6RXVORFkxTERBc01pNDVNek10TUM0eE9UUXNOQzR6TmpNdE1DNDFOemRqTkM0ek16a3RNUzR4TmpJc055NDVOalV0TXk0NU5EUXNNVEF1TWpFeExUY3VPRE0wY3pJdU9EUXlMVGd1TkRJeUxERXVOamM1TFRFeUxqYzJNZzBLQ1FsRE16STRMalU1T1N3eU9EY3VOekF4TERNeU1TNDVNalFzTWpneUxqVTNOQ3d6TVRRdU16TTBMREk0TWk0MU56UjZJRTB5TnpNdU5ETTFMREl4TVM0M05USmpMVFF1TkRrekxEQXRPQzQzTVRjc01TNDNOUzB4TVM0NE9UUXNOQzQ1TWpnTkNna0pZeTB6TGpFM055d3pMakUzTmkwMExqa3lOaXczTGpNNU9TMDBMamt5Tml3eE1TNDRPVEp6TVM0M05TdzRMamN4Tnl3MExqa3lOaXd4TVM0NE9UVnpOeTQwTURFc05DNDVNamNzTVRFdU9EazBMRFF1T1RJM1l6UXVORGt5TERBc09DNDNNVFl0TVM0M05Td3hNUzQ0T1RNdE5DNDVNamNOQ2drSll6TXVNVGMzTFRNdU1UYzRMRFF1T1RJM0xUY3VOREF5TERRdU9USTNMVEV4TGpnNU5YTXRNUzQzTlMwNExqY3hOaTAwTGpreU55MHhNUzQ0T1RKRE1qZ3lMakUxTVN3eU1UTXVOVEF5TERJM055NDVNamNzTWpFeExqYzFNaXd5TnpNdU5ETTFMREl4TVM0M05USjZJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwVkVNVVl6TkRzaUlHUTlJazAzTnpRdU1Ua3pMRFUxTkM0NE16aDJMVFF3TUVneU5TNDRNRGRXTmpRMUxqRTJhRGMwT0M0ek9EZDJMVE00TGpjeFl6QXROeTR4TWpjc05TNDNOelV0TVRJdU9UQXlMREV5TGprd015MHhNaTQ1TURKMkxUSTFMamd3TncwS0NRbEROemM1TGprMk9TdzFOamN1TnpReExEYzNOQzR4T1RNc05UWXhMamsyTml3M056UXVNVGt6TERVMU5DNDRNemg2SUUweU5ESXVPVFV5TERNeU5TNDNNekZzTFRNMUxqTTVNaXd5T0M0Mk1UaHNNVEV1T0RFekxEUXpMamsxTncwS0NRbGpNUzR6T0Rjc05TNHhOakl0TUM0MU5USXNNVEF1TmpRMkxUUXVPRGMzTERFekxqYzRPR010TWk0eU5UY3NNUzQyTkMwMExqa3hPQ3d5TGpRMk5pMDNMalU0TlN3eUxqUTJObU10TWk0ME5EVXNNQzAwTGpnNU1TMHdMalk1TWkwM0xqQXpOUzB5TGpBNE9Hd3RNemd1TVRVMExUSTBMamd5RFFvSkNXd3RNemd1TVRVMExESTBMamd4T0dNdE5DNDBPQ3d5TGpreE5TMHhNQzR5T1RVc01pNDNOall0TVRRdU5qSXRNQzR6TnpoakxUUXVNekkxTFRNdU1UUXlMVFl1TWpZMExUZ3VOakkyTFRRdU9EYzNMVEV6TGpjNE9Hd3hNUzQ0TVRNdE5ETXVPVFUzYkMwek5TNHpPVFV0TWpndU5qRTREUW9KQ1dNdE5DNHhOVGN0TXk0ek5pMDFMamd4TFRndU9UTTJMVFF1TVRVNUxURTBMakF5WXpFdU5qVXlMVFV1TURnMExEWXVNalk0TFRndU5qSTFMREV4TGpZd05pMDRMamxzTkRVdU5EVTFMVEl1TXpRNGJERTJMakkzT1MwME1pNDFNRE1OQ2drSll6RXVPVEV5TFRRdU9Ua3hMRFl1TnpBMUxUZ3VNamczTERFeUxqQTFMVGd1TWpnM1l6VXVNelEyTERBc01UQXVNVE01TERNdU1qazJMREV5TGpBMUxEZ3VNamczYkRFMkxqSTNPQ3cwTWk0MU1ETnNORFV1TkRVMkxESXVNelE0RFFvSkNXTTFMak16T0N3d0xqSTNOU3c1TGprMU5Td3pMamd4Tml3eE1TNDJNRFlzT0M0NVF6STBPQzQzTmpJc016RTJMamM1TlN3eU5EY3VNVEE1TERNeU1pNHpOeklzTWpReUxqazFNaXd6TWpVdU56TXhlaUJOTWpnMkxqQXpOU3cwTmpRdU5qQXlEUW9KQ1dNdE5pNDVOVGtzTmk0NU5Ua3RNVGd1TWpReUxEWXVPVFU1TFRJMUxqSXdNU3d3WXkwMkxqazFPUzAyTGprMk1TMDJMamsxT1MweE9DNHlORFFzTUMweU5TNHlNREZqTmk0NU5Ua3ROaTQ1TmpFc01UZ3VNalF5TFRZdU9UWXhMREkxTGpJd01Td3dEUW9KQ1VNeU9USXVPVGsxTERRME5pNHpOVGNzTWpreUxqazVOU3cwTlRjdU5qUXhMREk0Tmk0d016VXNORFkwTGpZd01ub2dUVEk0Tmk0d016VXNNalF4TGpFM05HTXROaTQ1TlRrc05pNDVOVGt0TVRndU1qUXlMRFl1T1RVNUxUSTFMakl3TVN3d0RRb0pDV010Tmk0NU5Ua3ROaTQ1TmkwMkxqazFPUzB4T0M0eU5ETXNNQzB5TlM0eU1ERmpOaTQ1TlRrdE5pNDVOakVzTVRndU1qUXlMVFl1T1RZeExESTFMakl3TVN3d1F6STVNaTQ1T1RVc01qSXlMamt6TVN3eU9USXVPVGsxTERJek5DNHlNVE1zTWpnMkxqQXpOU3d5TkRFdU1UYzBlZzBLQ1FrZ1RUTXpNUzQxTXpRc016ZzFMamM0TjJNdE1pNDFORGNzT1M0MU1ETXRNVEl1TXpFMUxERTFMakUwTlMweU1TNDRNaXd4TWk0MU9UZGpMVGt1TlRBMkxUSXVOVFE0TFRFMUxqRTBOaTB4TWk0ek1UVXRNVEl1TlRrM0xUSXhMamd5RFFvSkNXTXlMalUwTnkwNUxqVXdOU3d4TWk0ek1UVXRNVFV1TVRRMUxESXhMamd5TFRFeUxqVTVOME16TWpndU5EUXlMRE0yTmk0MU1UUXNNek0wTGpBNExETTNOaTR5T0RNc016TXhMalV6TkN3ek9EVXVOemczZWlCTk16RTRMamt6Tml3ek1UWXVOakF6RFFvSkNXTXRPUzQxTURRc01pNDFORFl0TVRrdU1qYzBMVE11TURrekxUSXhMamd5TVMweE1pNDFPVGR6TXk0d09UTXRNVGt1TWpjeUxERXlMalU1TnkweU1TNDRNbk14T1M0eU56TXNNeTR3T1RVc01qRXVPRElzTVRJdU5UazNEUW9KQ1VNek16UXVNRGdzTXpBMExqSTRPQ3d6TWpndU5EUXNNekUwTGpBMU9Td3pNVGd1T1RNMkxETXhOaTQyTURONklpOCtEUW9KUEhCaGRHZ2daRDBpVFRjM05DNHhPVE1zTmpBMkxqUTFkak00TGpjeFNESTFMamd3TjFZeE5UUXVPRE00YURjME9DNHpPRGQyTkRBd1l6QXNOeTR4TWpnc05TNDNOelVzTVRJdU9UQXpMREV5TGprd015d3hNaTQ1TUROVE9EQXdMRFUyTVM0NU5qWXNPREF3TERVMU5DNDRNemhXTVRReExqa3pOUTBLQ1Fsak1DMDNMakV5T0MwMUxqYzNOUzB4TWk0NU1ETXRNVEl1T1RBekxURXlMamt3TTBneE1pNDVNRE5ETlM0M056Y3NNVEk1TGpBek1Td3dMREV6TkM0NE1EY3NNQ3d4TkRFdU9UTTFkalV4Tmk0eE1qbGpNQ3czTGpFeU9DdzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd013MEtDUWxvTnpjMExqRTVNMk0zTGpFeU9Dd3dMREV5TGprd015MDFMamMzTlN3eE1pNDVNRE10TVRJdU9UQXpkaTAxTVM0Mk1UTmpNQzAzTGpFeU55MDFMamMzTlMweE1pNDVNREl0TVRJdU9UQXpMVEV5TGprd01sTTNOelF1TVRrekxEVTVPUzR6TWpNc056YzBMakU1TXl3Mk1EWXVORFY2SWk4K0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFpHUlRBd01Ec2lJR1E5SWsweE5qZ3VNakE0TERNMk1pNHlPRE5qTFRFdU9UTTFMVEV1TWpZdE5DNHhOemd0TVM0NU1qVXROaTQwT0RrdE1TNDVNalZ6TFRRdU5UVTFMREF1TmpZMkxUWXVORGc1TERFdU9USTFiQzB4T1M0eE16Z3NNVEl1TkRRNERRb0pDV3cxTGpreU5DMHlNaTR3TkRoak1TNHlNakV0TkM0MU5ESXRNQzR6TlRRdE9TNHpPRGN0TkM0d01URXRNVEl1TXpRMWJDMHhOeTQzTlRVdE1UUXVNelUyYkRJeUxqZ3dNaTB4TGpFM04yTTBMalk1T0Mwd0xqSTBOQ3c0TGpneUxUTXVNak01TERFd0xqVXdNaTAzTGpZek1RMEtDUWxzT0M0eE5qY3RNakV1TXpFNWJEZ3VNVFkzTERJeExqTXhOMk14TGpZNE15dzBMak01TXl3MUxqZ3dOQ3czTGpNNE9Td3hNQzQwT1Rrc055NDJNek5zTWpJdU9EQXlMREV1TVRjM2JDMHhOeTQzTlRVc01UUXVNelUyRFFvSkNXTXRNeTQyTlRjc01pNDVOVGd0TlM0eU16RXNOeTQ0TURNdE5DNHdNU3d4TWk0ek5EUnNOUzQ1TWpRc01qSXVNRFE0VERFMk9DNHlNRGdzTXpZeUxqSTRNM29pTHo0TkNnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pSa1pGTURBd095SWdaRDBpVFRFMk9DNDVOVE1zTXpFM0xqVXpiQzAzTGpJek15MHhPQzQ0T0d3dE55NHlNeklzTVRndU9EZ3hZeTB4TGpneU5TdzBMamMyTmkwMkxqSTRPQ3c0TGpBd055MHhNUzR6T0RRc09DNHlOekpzTFRJd0xqRTVOQ3d4TGpBME1nMEtDUWxzTVRVdU56STFMREV5TGpjeE5HTXpMamsyTnl3ekxqSXdPQ3cxTGpZM01pdzRMalExTkN3MExqTTBPQ3d4TXk0ek9ERnNMVFV1TWpRM0xERTVMalV5TjJ3eE5pNDVOUzB4TVM0d01qUmpNaTR4TXpndE1TNHpPVElzTkM0MU9EWXRNaTR3T0Rjc055NHdNelV0TWk0d09EY05DZ2tKY3pRdU9EazJMREF1TmprMUxEY3VNRE0xTERJdU1EZzNiREUyTGprMUxERXhMakF5Tkd3dE5TNHlORGN0TVRrdU5USTNZeTB4TGpNeU5TMDBMamt5Tnl3d0xqTTRMVEV3TGpFM015dzBMak0wTnkweE15NHpPREZzTVRVdU56STFMVEV5TGpjeE5Hd3RNakF1TVRrMExURXVNRFF5RFFvSkNVTXhOelV1TWpRc016STFMalV6T1N3eE56QXVOemM0TERNeU1pNHlPVFlzTVRZNExqazFNeXd6TVRjdU5UTjZJaTgrRFFvSlBIQmhkR2dnWkQwaVRUSXpOUzQxTURRc016QXlMamd4TW13dE5EVXVORFUyTFRJdU16UTVUREUzTXk0M055d3lOVGN1T1RaakxURXVPVEV5TFRRdU9Ua3hMVFl1TnpBMUxUZ3VNamc0TFRFeUxqQTFMVGd1TWpnNGN5MHhNQzR4TXpnc015NHlPVFl0TVRJdU1EVXNPQzR5T0RnTkNna0piQzB4Tmk0eU56a3NOREl1TlRBemJDMDBOUzQwTlRVc01pNHpORGxqTFRVdU16TTVMREF1TWpjMUxUa3VPVFUxTERNdU9ERTJMVEV4TGpZd05pdzRMamxqTFRFdU5qVXlMRFV1TURnekxEQXVNREF4TERFd0xqWTJMRFF1TVRVNExERTBMakF5YkRNMUxqTTVNeXd5T0M0Mk1UZ05DZ2tKYkMweE1TNDRNVE1zTkRNdU9UVTNZeTB4TGpNNE55dzFMakUyTWl3d0xqVTFNaXd4TUM0Mk5EWXNOQzQ0Tnpjc01UTXVOemc0WXpRdU16SXpMRE11TVRRMExERXdMakUwTERNdU1qa3pMREUwTGpZeUxEQXVNemM0YkRNNExqRTFOQzB5TkM0NE1td3pPQzR4TlRRc01qUXVPREU0RFFvSkNXTXlMakUwTkN3eExqTTVOaXcwTGpVNUxESXVNRGc0TERjdU1ETTFMREl1TURnNFl6SXVOalkzTERBc05TNHpNamd0TUM0NE1qUXNOeTQxT0RVdE1pNDBOalpqTkM0ek1qVXRNeTR4TkRJc05pNHlOalF0T0M0Mk1qWXNOQzQ0TnpjdE1UTXVOemc0YkMweE1TNDRNVE10TkRNdU9UVTNEUW9KQ1d3ek5TNHpPVE10TWpndU5qRTRZelF1TVRVM0xUTXVNellzTlM0NE1TMDRMamt6Tml3MExqRTFPQzB4TkM0d01rTXlORFV1TkRVNUxETXdOaTQyTWpnc01qUXdMamcwTXl3ek1ETXVNRGczTERJek5TNDFNRFFzTXpBeUxqZ3hNbm9nVFRFNE5DNDRNRFVzTXpNNUxqVTFPUTBLQ1FsakxUTXVPVFkzTERNdU1qQTRMVFV1TmpjeUxEZ3VORFUwTFRRdU16UTRMREV6TGpNNE1XdzFMakkwT0N3eE9TNDFNamRzTFRFMkxqazFMVEV4TGpBeU5HTXRNaTR4TXprdE1TNHpPVEl0TkM0MU9EY3RNaTR3T0RjdE55NHdNelV0TWk0d09EY05DZ2tKY3kwMExqZzVOaXd3TGpZNU5TMDNMakF6TlN3eUxqQTROMnd0TVRZdU9UVXNNVEV1TURJMGJEVXVNalE0TFRFNUxqVXlOMk14TGpNeU5TMDBMamt5Tnkwd0xqTTRMVEV3TGpFM015MDBMak0wT0MweE15NHpPREZzTFRFMUxqY3lOUzB4TWk0M01UUnNNakF1TVRrMExURXVNRFF5RFFvSkNXTTFMakE1Tmkwd0xqSTJNeXc1TGpVMU9TMHpMalV3Tml3eE1TNHpPRFF0T0M0eU56SnNOeTR5TXpFdE1UZ3VPRGhzTnk0eU16TXNNVGd1T0RneFl6RXVPREkxTERRdU56WTJMRFl1TWpnNExEZ3VNREEzTERFeExqTTROQ3c0TGpJM01td3lNQzR4T1RRc01TNHdORElOQ2drSlRERTROQzQ0TURVc016TTVMalUxT1hvaUx6NE5DZ2s4WTJseVkyeGxJSE4wZVd4bFBTSm1hV3hzT2lOR1JrVXdNREE3SWlCamVEMGlNekUwTGpNeU5DSWdZM2s5SWpJNU9TNHpPVFVpSUhJOUlqRTNMamd4TlNJdlBnMEtDVHhqYVhKamJHVWdjM1I1YkdVOUltWnBiR3c2STBaR1JUQXdNRHNpSUdONFBTSXlOek11TkRNMUlpQmplVDBpTWpJNExqVTNNaUlnY2owaU1UY3VPRElpTHo0TkNnazhZMmx5WTJ4bElITjBlV3hsUFNKbWFXeHNPaU5HUmtVd01EQTdJaUJqZUQwaU16RTBMak15TkNJZ1kzazlJak00TVM0eE56WWlJSEk5SWpFM0xqZ3hOU0l2UGcwS0NUeGphWEpqYkdVZ2MzUjViR1U5SW1acGJHdzZJMFpHUlRBd01Ec2lJR040UFNJeU56TXVORE0xSWlCamVUMGlORFV5TGpBd01TSWdjajBpTVRjdU9ESWlMejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tmk0d0xqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlrTmhjR0ZmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lEUW9KSUhkcFpIUm9QU0k0TURCd2VDSWdhR1ZwWjJoMFBTSTRNREJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRGd3TUNBNE1EQWlJR1Z1WVdKc1pTMWlZV05yWjNKdmRXNWtQU0p1WlhjZ01DQXdJRGd3TUNBNE1EQWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BHYytEUW9KUEhCaGRHZ2dabWxzYkQwaUkwWkdSa1pHUmlJZ1pEMGlUVFV4Tmk0eE1qa3NNalExTGpFMk1YWXRPVEF1TXpJeVNESTRNeTQ0TnpGMk5Ea3dMak15TW1neU16SXVNalU0VmpJNU5pNDNOelJqTUMwM0xqRXlOaXcxTGpjM05TMHhNaTQ1TURNc01USXVPVEF6TFRFeUxqa3dNM1l0TWpVdU9EQTNEUW9KQ1VNMU1qRXVPVEEwTERJMU9DNHdOalFzTlRFMkxqRXlPU3d5TlRJdU1qZzNMRFV4Tmk0eE1qa3NNalExTGpFMk1Yb2lMejROQ2drOGNtVmpkQ0I0UFNJeU5DNDRNRGNpSUhrOUlqRTFNeTQ0TXpraUlHWnBiR3c5SWlNeE5qUkdRMFVpSUhkcFpIUm9QU0l5TXpRdU1qVTRJaUJvWldsbmFIUTlJalE1TWk0ek1qSWlMejROQ2drOGNtVmpkQ0I0UFNJeU5TNDRNRGNpSUhrOUlqRTFOQzQ0TXpraUlHWnBiR3c5SWlNeE5qUkdRMFVpSUhkcFpIUm9QU0l5TXpJdU1qVTRJaUJvWldsbmFIUTlJalE1TUM0ek1qSWlMejROQ2drOGNHRjBhQ0JtYVd4c1BTSWpSVVF4UmpNMElpQmtQU0pOTlRRd0xqa3pOaXcyTkRZdU1UWXhWakk1Tmk0M056UmpNQzAyTGpVMk15MDFMak0wTFRFeExqa3dNeTB4TVM0NU1ETXRNVEV1T1RBemFDMHhkaTB5Tnk0NE1EZG9NUTBLQ1Fsak5pNDFOak1zTUN3eE1TNDVNRE10TlM0ek5Dd3hNUzQ1TURNdE1URXVPVEF6ZGkwNU1TNHpNakpvTWpNMExqSTFPSFkwT1RJdU16SXlTRFUwTUM0NU16WjZJaTgrRFFvSlBIQmhkR2dnWm1sc2JEMGlJMFZFTVVZek5DSWdaRDBpVFRVME1TNDVNellzTWpRMUxqRTJNV013TERjdU1USTJMVFV1TnpjMUxERXlMamt3TXkweE1pNDVNRE1zTVRJdU9UQXpkakkxTGpnd04yTTNMakV5T0N3d0xERXlMamt3TXl3MUxqYzNOeXd4TWk0NU1ETXNNVEl1T1RBemRqTTBPQzR6T0RjTkNna0phREl6TWk0eU5UaFdNVFUwTGpnek9VZzFOREV1T1RNMlZqSTBOUzR4TmpGNklpOCtEUW9KUEhCaGRHZ2daRDBpVFRjNE55NHdPVGNzTVRJNUxqQXpNa2d4TWk0NU1ETkROUzQzTnpjc01USTVMakF6TWl3d0xERXpOQzQ0TVN3d0xERTBNUzQ1TXpaMk5URTJMakV5T1dNd0xEY3VNVEkyTERVdU56YzNMREV5TGprd015d3hNaTQ1TURNc01USXVPVEF6YURjM05DNHhPVE1OQ2drSll6Y3VNVEk0TERBc01USXVPVEF6TFRVdU56YzNMREV5TGprd015MHhNaTQ1TUROV01UUXhMamt6TmtNNE1EQXNNVE0wTGpneExEYzVOQzR5TWpVc01USTVMakF6TWl3M09EY3VNRGszTERFeU9TNHdNeko2SUUwM056UXVNVGt6TERZME5TNHhOakZJTlRReExqa3pObFl5T1RZdU56YzBEUW9KQ1dNd0xUY3VNVEkyTFRVdU56YzFMVEV5TGprd015MHhNaTQ1TURNdE1USXVPVEF6Y3kweE1pNDVNRE1zTlM0M056Y3RNVEl1T1RBekxERXlMamt3TTNZek5EZ3VNemczU0RJNE15NDROekZXTVRVMExqZ3pPV2d5TXpJdU1qVTRkamt3TGpNeU1nMEtDUWxqTUN3M0xqRXlOaXcxTGpjM05Td3hNaTQ1TURNc01USXVPVEF6TERFeUxqa3dNM014TWk0NU1ETXROUzQzTnpjc01USXVPVEF6TFRFeUxqa3dNM1l0T1RBdU16SXlhREl6TWk0eU5UaFdOalExTGpFMk1Yb2dUVEkxTGpnd055d3hOVFF1T0RNNWFESXpNaTR5TlRoMk5Ea3dMak15TWtneU5TNDRNRGNOQ2drSlZqRTFOQzQ0TXpsNklpOCtEUW84TDJjK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWtOaGNHRmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lEZ3dNQ0E0TURBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUVXhOaTR4TWprc01qUTFMakUyTVhZdE9UQXVNekl5U0RJNE15NDROekYyTkRrd0xqTXlNbWd5TXpJdU1qVTRWakk1Tmk0M056UmpNQzAzTGpFeU5pdzFMamMzTnkweE1pNDVNRE1zTVRJdU9UQXpMVEV5TGprd00zWXRNalV1T0RBM0RRb0pDVU0xTWpFdU9UQTJMREkxT0M0d05qUXNOVEUyTGpFeU9Td3lOVEl1TWpnM0xEVXhOaTR4TWprc01qUTFMakUyTVhvaUx6NE5DZ2s4Y21WamRDQjRQU0l5TkM0NE1EY2lJSGs5SWpFMU15NDRNemtpSUdacGJHdzlJaU15TlRreU5EVWlJSGRwWkhSb1BTSXlNelF1TWpVNElpQm9aV2xuYUhROUlqUTVNaTR6TWpJaUx6NE5DZ2s4Y21WamRDQjRQU0l5TlM0NE1EY2lJSGs5SWpFMU5DNDRNemtpSUdacGJHdzlJaU15TlRreU5EVWlJSGRwWkhSb1BTSXlNekl1TWpVNElpQm9aV2xuYUhROUlqUTVNQzR6TWpJaUx6NE5DZ2s4Y0dGMGFDQm1hV3hzUFNJalJVUXhSak0wSWlCa1BTSk5OVFF3TGprek5pdzJORFl1TVRZeFZqSTVOaTQzTnpSak1DMDJMalUyTXkwMUxqTTBMVEV4TGprd015MHhNUzQ1TURNdE1URXVPVEF6YUMweGRpMHlOeTQ0TURkb01RMEtDUWxqTmk0MU5qTXNNQ3d4TVM0NU1ETXROUzR6TkN3eE1TNDVNRE10TVRFdU9UQXpkaTA1TVM0ek1qSm9Nak0wTGpJMU9IWTBPVEl1TXpJeVNEVTBNQzQ1TXpaNklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVFUwTVM0NU16WXNNalExTGpFMk1XTXdMRGN1TVRJMkxUVXVOemMzTERFeUxqa3dNeTB4TWk0NU1ETXNNVEl1T1RBemRqSTFMamd3TjJNM0xqRXlOaXd3TERFeUxqa3dNeXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6ZGpNME9DNHpPRGNOQ2drSmFESXpNaTR5TlRoV01UVTBMamd6T1VnMU5ERXVPVE0yVmpJME5TNHhOakY2SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVGM0Tnk0d09UY3NNVEk1TGpBek1rZ3hNaTQ1TURORE5TNDNOemNzTVRJNUxqQXpNaXd3TERFek5DNDRNU3d3TERFME1TNDVNeloyTlRFMkxqRXlPV013TERjdU1USTJMRFV1TnpjM0xERXlMamt3TXl3eE1pNDVNRE1zTVRJdU9UQXphRGMzTkM0eE9UTU5DZ2tKWXpjdU1USTJMREFzTVRJdU9UQXpMVFV1TnpjM0xERXlMamt3TXkweE1pNDVNRE5XTVRReExqa3pOa000TURBc01UTTBMamd4TERjNU5DNHlNak1zTVRJNUxqQXpNaXczT0RjdU1EazNMREV5T1M0d016SjZJRTAzTnpRdU1Ua3pMRFkwTlM0eE5qRklOVFF4TGprek5sWXlPVFl1TnpjMERRb0pDV013TFRjdU1USTJMVFV1TnpjM0xURXlMamt3TXkweE1pNDVNRE10TVRJdU9UQXpjeTB4TWk0NU1ETXNOUzQzTnpjdE1USXVPVEF6TERFeUxqa3dNM1l6TkRndU16ZzNTREk0TXk0NE56RldNVFUwTGpnek9XZ3lNekl1TWpVNGRqa3dMak15TWcwS0NRbGpNQ3czTGpFeU5pdzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd00zTXhNaTQ1TURNdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd00zWXRPVEF1TXpJeWFESXpNaTR5TlRoV05qUTFMakUyTVhvZ1RUSTFMamd3Tnl3eE5UUXVPRE01YURJek1pNHlOVGgyTkRrd0xqTXlNa2d5TlM0NE1EY05DZ2tKVmpFMU5DNDRNemw2SWk4K0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE5pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIZHBaSFJvUFNJNE1EQndlQ0lnYUdWcFoyaDBQU0k0TURCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURnd01DQTRNREFpSUdWdVlXSnNaUzFpWVdOclozSnZkVzVrUFNKdVpYY2dNQ0F3SURnd01DQTRNREFpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnMEtQR2MrRFFvSlBIQmhkR2dnWm1sc2JEMGlJMFpHUlRBd01DSWdaRDBpVFRZME5DNHhOakVzTlRNd0xqQXpNbll0TVdNd0xUWXVOVFl6TFRVdU16UXRNVEV1T1RBekxURXhMamt3TXkweE1TNDVNRE5JTWpRdU9EQTNWakk0TWk0NE56Rm9OelV3TGpNNE4zWXlNelF1TWpVNGFDMDVNUzR6TWpJTkNna0pZeTAyTGpVMk15d3dMVEV4TGprd015dzFMak0wTFRFeExqa3dNeXd4TVM0NU1ETjJNVWcyTkRRdU1UWXhlaUl2UGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtVd01EQWlJR1E5SWswMk9ETXVPRGN4TERVeE5pNHhNamxvT1RBdU16SXlWakk0TXk0NE56RklNalV1T0RBM2RqSXpNaTR5TlRob05qQTJMalExTVdNM0xqRXlOaXd3TERFeUxqa3dNeXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6YURJMUxqZ3dOdzBLQ1FsRE5qY3dMamsyT0N3MU1qRXVPVEEyTERZM05pNDNORFVzTlRFMkxqRXlPU3cyT0RNdU9EY3hMRFV4Tmk0eE1qbDZJaTgrRFFvSlBISmxZM1FnZUQwaU1qUXVPREEzSWlCNVBTSXhOVE11T0RNNUlpQm1hV3hzUFNJalJVUXhSak0wSWlCM2FXUjBhRDBpTnpVd0xqTTROeUlnYUdWcFoyaDBQU0l4TURVdU1qSTJJaTgrRFFvSlBISmxZM1FnZUQwaU1qVXVPREEzSWlCNVBTSXhOVFF1T0RNNUlpQm1hV3hzUFNJalJVUXhSak0wSWlCM2FXUjBhRDBpTnpRNExqTTROeUlnYUdWcFoyaDBQU0l4TURNdU1qSTJJaTgrRFFvSlBIQmhkR2dnWm1sc2JEMGlJMFZFTVVZek5DSWdaRDBpVFRJMExqZ3dOeXcyTkRZdU1UWXhWalUwTUM0NU16Wm9OakEzTGpRMU1XTTJMalUyTXl3d0xERXhMamt3TXkwMUxqTTBMREV4TGprd015MHhNUzQ1TUROMkxURm9NamN1T0RBM2RqRU5DZ2tKWXpBc05pNDFOak1zTlM0ek5Dd3hNUzQ1TURNc01URXVPVEF6TERFeExqa3dNMmc1TVM0ek1qSjJNVEExTGpJeU5rZ3lOQzQ0TURkNklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVFk0TXk0NE56RXNOVFF4TGprek5tTXROeTR4TWpZc01DMHhNaTQ1TURNdE5TNDNOemN0TVRJdU9UQXpMVEV5TGprd00yZ3RNalV1T0RBM1l6QXNOeTR4TWpZdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd015d3hNaTQ1TUROSU1qVXVPREEzRFFvSkNYWXhNRE11TWpJMmFEYzBPQzR6T0RkV05UUXhMamt6TmtnMk9ETXVPRGN4ZWlJdlBnMEtDVHh3WVhSb0lHUTlJazAzT0RjdU1EazNMREV5T1M0d016SklNVEl1T1RBelF6VXVOemMzTERFeU9TNHdNeklzTUN3eE16UXVPREVzTUN3eE5ERXVPVE0yZGpVeE5pNHhNamxqTUN3M0xqRXlOaXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6TERFeUxqa3dNMmczTnpRdU1Ua3pEUW9KQ1dNM0xqRXlOaXd3TERFeUxqa3dNeTAxTGpjM055d3hNaTQ1TURNdE1USXVPVEF6VmpFME1TNDVNelpET0RBd0xERXpOQzQ0TVN3M09UUXVNakl6TERFeU9TNHdNeklzTnpnM0xqQTVOeXd4TWprdU1ETXllaUJOTnpjMExqRTVNeXd4TlRRdU9ETTVkakV3TXk0eU1qWklNalV1T0RBM0RRb0pDVll4TlRRdU9ETTVTRGMzTkM0eE9UTjZJRTB5TlM0NE1EY3NOalExTGpFMk1WWTFOREV1T1RNMmFEWXdOaTQwTlRGak55NHhNallzTUN3eE1pNDVNRE10TlM0M056Y3NNVEl1T1RBekxURXlMamt3TTNNdE5TNDNOemN0TVRJdU9UQXpMVEV5TGprd015MHhNaTQ1TUROSU1qVXVPREEzRFFvSkNWWXlPRE11T0RjeGFEYzBPQzR6T0RkMk1qTXlMakkxT0dndE9UQXVNekl5WXkwM0xqRXlOaXd3TFRFeUxqa3dNeXcxTGpjM055MHhNaTQ1TURNc01USXVPVEF6Y3pVdU56YzNMREV5TGprd015d3hNaTQ1TURNc01USXVPVEF6YURrd0xqTXlNbll4TURNdU1qSTJTREkxTGpnd04zb2lMejROQ2p3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy91ay1iYzQ4YWZjYzE1ZDVkOWQ1MTI1NWRlMGIyZWU3MDhiZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdXNlcjEtNTZhMWYyNWU1ZmIwMmJlY2Y5OWVmN2M1MGZlMTQyMzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUMvVkJNVkVVQUFBRDM5UExwN08zZzVPYno4dkhpNStuRnljeno4dkhtNit6bzdPM2M1T2RtWm03MDgvTHc4ZkhaNCtiejh2TDI5ZlBXNGVYMjlQUHI3dTd5OHZMWTRlWHc4ZkM2d01UNDkvVG83TzNTM3VMbTZ1eGthblQyOVBKbWJIWGE0K2JYNGVUMzlmUFc0dVRoNk9weWRYeHdkbi8yOWZQUDJkM3c4ZkhZNGVYazZ1eDlnSVZrYW5YVTMrUmpaM0h4OGZIajZPcGlhSExzN3U1d2RYN1g0T1g0OXZOR056aytNalZYV1dGRlBFRXVKQ3RoYUhRN01qaDhlbi9YNE9QaDZPcmQ1ZWZpNk9oZFlXcW9zcmd6SlNndUhpSStPVU80d01SYldGazBKaXZ6OHZMMDlQTDI5ZlB1NysvdjhQRHg4ZkVySXlydDd1N3I3Tzc0OWZQYzV1ano4dkVzSkN6WTR1YjQ5dlRiNWVmZjUrbnM3ZS9WMytQdTcrNHVKQ3ZwN2U3WDRlVXZKaTdXNE9YMjlmTGQ1K2pUM3VNdEpTM2E1T1l3SmkzbTYrd3hKeS8vLy8vbzYrM2k2T3M0TFRNekp5M2s2ZXcxS1M5bGEzUXhLVEZlWVd0dmRYMW9iSFg4Ky9uaDUrbGlaVzdyN3U1cWIzZGlaM0VwSWlwWllXeHFjWHRkWkc1VVdXUmxhWEZHTVRFL0xqRDcvZjNhNCtmTzIrQmZabkRRM2VKamFYTGw2ZXB0Y25wWlhtaHJRam81TVRoUlZtQk1OVE54ZUlFN0t5N202KzVZV21RL05EaCtoWTFuYm5oY1gyZExTbE55U0VCQk1UUTBMRE9La1poRk56cDdnWWhOVWw3NStQWjBnSW8zSnl4MWU0Uk5QajZEakpSc2RvQVhEaFh5OHZPdHA2YVBtYUZWWEdoVE5qUDA5ZlYxZUg1REtDZ3pJeWp4OFBEZzN0ekd2YmxyWFZ0UlVGaENSMVJlVGs0L09rSjRSam91SFNIbTVlU1BiMkZXUmtaWU96aGVPVFVpR0NEMysvejA5L2pzOVBXYnBxNmttWmFPZ0hwNFYwOTlUa1E3SlNjdklTYnQ2dW5YMXRYUXpjMjRzckJhVlZ0UlNrOUZRa2xoUkQ5TEt5cE5RMGNtSGliRnRxcHRZbU9GWEZGclVrMWxPRFJTTGkzdjhmTFN4cnVHZVhsRlQxMS9aRnRzUjBHS1JENFRCZzN6N3V2czVkN2MwOHZCeGNqYXpjT1Vpb2luakgxaGJudHhPalRUM09ETXhjT3p1YjJxdHIyWG9hZStxSmVjZ1hGcloyeVlVVWZEek5HWm5hQ3ltNDJBZG5OMWJtNTNqSnFpc2JvV0M2K1ZBQUFBU25SU1RsTUEvaUFXWlJBSGd4c05ZeGpOU1VMMHdyK2M4cldFZFA3MHl2UHF1ajg5OU9MZDBjQ2k4T3E4cVo2VGZuMTBZVFgwODkzVWxJNXNIKy91MHMvRXc2aWhOZHpjeWFDWWpXbE1RY25zWWt3QUFCQkVTVVJCVkZqRHBKTy9hOXRBSE1WRDNMaTJJQVpUUE5RZWJPd2gyR0FJSlhPUy9nRkpzU3M0ZERaSUNCbmgxaW9DTDBjZ1kyU01WcTJsVUxxWURCM1N0UlRpQ0RvMGJlalFrS1YwNzVEK0NYM2Z1NHJnTmorYzlOMFB6c3ZubnQ4OUxkeW9iR1pUSzlUekR4K1hWc3VWU2pWZkwyaWJtZXpDL3ltZHlUWFhxMlhoT1liQlJkalhMYnZYNi9hSzFmVm1McE8rTXphVksrU0xsc3VZWVRnNnN5MmI2WVpoZGJ1OUVWVE1GM0twTzJFWHRYelp0U3pHYkJaWUZsa2RqN3V1NCtpdTFlMk5nUjRYVjdURjIyT2JlUnRFWnRrV3dReUdLeWlHTG1Qa0dXaGlqL0xOMjZHWHRLckZMQ2FuRlRCWDF3TWI2Z0xad3h4RGNpTzB0alEvZHpsZkRoZ0xzQmo0dG1UYU1HcmJ2UVI5RHJDeVhWekp6ZnRtalJKYUVMZ0VkdVdrUUVqZ1N4RWVPZ2VYVkNuTTlZcTVHdmQ4My9NOEpCc0V3RW9wTUFUVE1oSzU1RE9DUG9mcHRGWnhkRjEzSE5BOTRiaE0ybGJzQks1ODQ4d0MxNlVyUnFPcWRrT3JzNFZWcnBNTWcrRG9saEVZQnVDZ3E5WmRSRUp4NEFlaWgrOWlJWHR0R3hxY2U1eUlWREhpNHdiRHhicEloY0JRQWdjZTVwSDMyalh0U0cxNEh1ZWN2RUlPRWtIU2dDWndlay9YbllIM3BMcDBxS2V1OUx2QnVRQVpwblVDMHdYMGhoZ1NyOWhNQ1dRNXdTVGI1TDUraGVkc3cvUTl5VzBQdURTdDRvQnpIZ29jNVVUbTBqYVVKQzc5VXVScmwrYWN2dDlxbVR1ZFFidnZkVnErNEVKZVFtbkRNUmZZbGNnMnhGamkzYmFZL0lDd0ZTN3J4cjBISGJQMVpQdmdvTlZ1SFF6OEFkam9zeS9ocWlTNllzTzRTa1dKWVFYcUtsYldMdmt1SHBtbTJlbHNiV08wdDNiYVc2WW5NR0RiNFZGOEZNZVI3R0ZpbkxpWUpCeVQveEZVY3Y4VW91YjdmV2dROWZ1bTJXNVIzSmdlYk1mVDc1OS9mWGtYVDZleG82TXprbStRN1VUcUtpN3czMnAvVjZQaFIxSGtSMzAvRWNVUUN0K005NDczejE1OGV2UHE3T2ZKKzJsa2NFaVhYVlJTWUM2VWRMNDJ5MTB1OVNNNS9raWlSWFMwTnozZS96cVpISjZlSG1ML3NQODZSZ0dGd0ZJdm0rQzVnOEVKWDFxZWFYQk5waURsSzNKZmVFZlBqMDkrZkR1YzdBNkhMNGZENGJQZHllVGowN2RDWlJhR2ZoamlCUVNIWkMzcEVBcFJXNXBweEcrMnl1YTFpU0FNNC9FRHFpSXF0Z2dpSHJ5SU44VS9vM1Uvc3RCQkRMdGhMc04yTis2NjdLR3drSlBaazJDUlFpK21Ca1FDVWJDb3JWRFJWRzJrUmtWRmk2MzFFelVpYlJFUEZzR1R6enRqVEFNK096czdoK1EzVDU1NTM4MVFvWUJCZ21zYUovUCt3SldaV3F1MkVITXVoSERqOFdCOG9iWGlQNEFGcWJ4NllJOVRKN0FMaHRTUnpSM3V4cjM1YmhYeVp4NzRVOVAzYXdzc2pybkRHRE9adzZOZzVINXAyYmVVY2hqWlhNN0NrTUp2S0JRc2JMUzM4MisxcDlCaDBsZHl1YUhHOFpVbk1Ec2VlMXd3NWpoQUN4WUcwYmxGL3oxd05DQXJtd1daMXNBRFNzTTZzK2QvaGkwVXM1WWs2ZGVidGZzc2lKMkl3NnhwbWtJd2t6dGowNThXWjk5bmJUQVRTZGF3QkJSNDJzWktMQXVQZjVZMzN6QnU2THBHTzF1NUpKdUF1K0YxYTRFTEI4U2lhVEw0TFFMdG1KVzExY1haeTJEb3RxUnFFRmJTTzBSWTI3YXpmMVBlMU5kUEd1dzNCbkVaaHE3NWs5TTE0UWw0RmNJc0FrMm1RUmVqYjVaKzJ3MU4xM1ZBd1NDMHJwR1Vkd3ZDbzIrVHF1RmVIUjhGY1hCUTdtQU1IN3ZaaWdJWE1KYzdzQXcydVJiYzg1NWNxMzlvVE5BdlZOTCtVdUdVbmtwV3I2cmxIaDB5T3Jyc3o3VllLWlFXSFRoMVhaZlI3RGh1d0tMemE1T3BjY013T21EdzZKYVJJQWRTRDNHMzdKSXhkSlJPUnJVZ1FnNk13YTRidVE2QndUVzlJQmlaZjdSNloxYjc1N2pOMXFneU5DdkJqS1BhdXdYZy9UdU4vdldhR1A1WUMxeEJ4K1k0NGxMb21pVGhvdW9BRGlxZkgvMU1HN2F5RENUZE50Sk9rSWRWc0NCTXZUdW9pTHV3U0hqeVZTWGdERmhtdXVHb0s4K09jY2Z4SEZlSU9LZzI2NHVOaVM3RG1HUzJwSHdCNkNHVTh0WkQvZDN5cDBvVkp3eVJLQUtHYVlEbEticlUyVHdPS3RQTnBROCthSkNDZHc0UlhhSzYvTkRXek1idDNkeUpkTzU2QUREUXFBYWlrbm5CMENGQWUzSDVkTFg1cVA1dDFsWlcyd0llQllkT3lRTTdWRURJaHlsaUF4Y05tdEs1MjZFUU9ERktXUWdFUWgwTk5CTG40WGlwUFBPcCtXN09SNjZKYkdRckR5V0psYytoTU1CT0xLajNjR2J6QURUWWNUeDg1K2Jwa2RCampKeWlHbVFlQ0psaTVqekM2VFdiODlWbnFXVW5PVUF4MXI5bDRCbkNmdHN5UGFvdDJtakRmMTZkcm83SzdzQlVaRmpRb0tKR0VzRlllV2FwZVhVbDFha2pFc0RBVnBMbU1hUGNzT3pKN082T21NQWw1Q3RjSHBKWk1rNmU0UjNjcUZRcHp6VFB2M25xdjVjQVdRbmdFQXNubHlSa1dicmVuZW1EMmN2cndPblRsN2RHaXR4ekhWR2tMSlFZUWdZM0dpMlhxMi9Pcmo1ZEJoa05nU3VyUVltRzF3YlZCbXFFVnJiZWwwRlJBTnpSUk9OQ1pjemhNWkFjdHhMbFFGd3ZxbFFxODJkL1R5N2h0VXo5UzdVaGJ4Sm1JRlgxYmM4Y0dCam84bXo0ZDE3Y2p0RWhyRWpnb2lLanFzUEl1L1Iydmx3dTMvMWMvL0R4N1hLcVpTV1ZlR0RqVGlDYlhocDRIczBjSElEV2gzeHgrT0h0WWhBSXBuS2dDZFhtd2UvMTcxL08zNDFHejMydXIxMzVOT1hyYmJVTkp4UzFWTjdhbDlsSlhFbHVSNElPOGR5eGNWVVBLbC91aFZFUVB2NTE5dDVTS1N6ZHJkY1hwMzZrZUhFcHJpSlRJcm1FNEZRc3ZYL1lMdi9YSk1JNGpzOG9paWlLaWdxaXZ5SG96OGdEaXpEOHBlQ1FqdU1PVHZRa0dZeEw4d1pTZUU0a3k1MDJOSE14TjRla2JzdTJhY1ZtUmw4WU02Z21aYTNXdDQyKzB2Zm9mWGQ2VStwOXo5MXRiTHoyM3Z2NVBKL25FV0JVc2JHZDNIdHZPc21GT1VDYmc2SVZ2NkZrN2V1aVhDM1prOUZuVS9sN2Q5a2h2WE5xRCsybEJJUXkyWTRvbWxDelBuM3M3RFZ1Z0VNN2F4WXdUV09CaDhSc2JYRXhJOGxpTXZSNDZsWDYyYXRlazI2NWZXbXJzUnphZzhrem04MXdqVVQwaWp0YXVKNnlIMk5VdzlTeFl5VE5BT3l0MTFZV3hWclZheE5UdDU2a1gwaExJQU85S3ExQThNVFkzN1hKckVlaHA4emVpNG9jeFZOSTRSZ0NKbWtTM0dDNVhsK1V4UVV2R1FwTnZMc1ZMYnpwSFFKWVlUZnhXdmZYdnQ3VXRjTUlnUXpwcGhOc1drUlBKeW1haGwyS3NpWEJ6U3pVc3d0ZnErVWt2Z3VXYnFmdW0wYUhXaUdhbFEwVG5VelRGZHc3dXJZWlY0VlExRnhNTGxjbEdPWVlpc1IreDlCMFVoUmhXRnFvWlZlK3lqWWE4Mml6WnorelF4MWJqeG1qSlpOcFc5ZDZZNGVhUDJRbkN5RHpLQWRsNHV5aTErc3RTMUk1bXkwKzRnN2E3WGFldXoyMWRLUFpjSFgwcWt6cnRiYlphUnIvR21LZUZzTlJucVFWckJnRk9MTWd5MUtwSE1UU3BoaytGaTMvY04wRVRRMEF0d3JXYlpzMm90SHIwSGErbFUzZkZqbFVyNmpFZ0RzRHg4V3FuTEZUakkxbTRObjc3bkN2V2ZlaVJhMm1yYUMzN01QV1pQd3ZPWkY0bW9WUkNQT0dVWkprU2E3S1hwcUVHQnZEYzlKbjE2Z0N3NDBMYXN0azB4cHNwc2IvaTgwOURrTGVZRENUeVpSS0pVa0MrTGxJZ1VzejJQd0NvZmszTE9waU5lTWhreTVzcGwwN0NjaEtLREppNkNMWUo4L21NOERXYTdWYXZTd1ZaWkJsTDBYYjRKaGhZdUZ3OU11ZDN2YjIxYWFkeW9GbE4yRWhNS3lnS2k4clhsWWova0tDZlZKNU9EYldQNGZPN3kwWGl5bzVlSVJrU0lYTWd4eEVHS1kyc0xuRjNiSlhQV0paVkxJVlVBdWVJR3N5dWtZLy9yNTRlWG5aUFJMMzlFOUxLOFhpYzNuZVRwRkFneHVMY1FOVGFzUFEwWHBGYjkyZ0hnb3RpZ2oxSnVCWTlhN0lkV2JtNHVYenB3V1A0Qk5HNHVOejh5dkY2dk9va2dNUGNDREdoU2Z5c0t5Q083VmVPOGJ1dGpRRnBPcFhBMXNTdTRZSFQ1N3VjZlJFM1A2K3VERGVHSnN2Rm9PQWtpUlA4Z0VvTmZ0eTlNQy8ycks1ZWZCdWNWVWhZRTB1NDU4UDM1Y2Q1MzA5UWp6dTZmT2M3V3MwcG90U2dJL2hRaENCd05WVVpjbEtOQmRXNjNDQzFkSThlR1B4RWY4SWhsMlRIMmJPT1J4dWp5REVSeENGVStodk5DWWVQWTd4QVM0V0NFTnpoZGtsVEhPSHNHYXVyTlc0V0NOdFJHdHI1bHk1bWVHWml6Ni8wM2MyMGkxMG4rMGJIKytMTjBiU0ZaeUcrTUJBNnNIY2crbksrMGt6MFVtRnRxN1JQNDRaL2pHY2NPVjJEWjc3T094MHVyc0ZwOVBqOFVROGNaREhaL0twOEVBNE5URlIrRmxKNTNQSzcxcHhHUXlFZ1RoOEdPT3dBVVhjWnJtVGEyRS9YSGc5ZkhMNGd2dUV3K2x3K3lNZXY5L3ZGTnpMd25MdS9xOUNvZkR6N1d6KzdrdURBUk1ESEM1ZEJKYXpyclVvREwzbW9BUTdHUm44TnVqN05PaHpkSGVmR3ZIMytOek92ckgrc2NpbDM4ZlpNL24zK2Z1NU95OWRsb1RGQUZRYkZOcU5oSFd0KzF1YXVZUkdEVVZoMklJUHBBdkZUVjFVUWFpNlVBUVIzN3J4TGJvUUJtRldCUkZjbUlWNHZmZU80Y2JjSkNDRWtOQ1FFdk5BWXFacG5BRm5KQTdvMUtHaXVLaEN4OGM0K01LTkt4OHJVVUVVWFhpcVZCeFJXL1JQMWw4dS8vblBDWnc3UHo4cGFKQzhJSnlNdzdFZW5JNlZ1V1lwdW9ad3F6RndyRmtiSG56MDRjSUxRUkFLaHd1Rm9Yd08wdG1CbmJCMC9xeU90Y0t5U1d4KzZMUnc1KzVZc1RnV3FaSG5PWXBrbEkzNlFQL282TEZHV0hmdGV1djVyWHRBQmlhb0M0cWQrMG1IOXkrRERQK3N0Wk5jb2JEdmJpVXFxVUdGZTE0U0liK2NhQTNBRG9TQnlSVnFLTkFzNG9VN3d1bjh2c09RSVhnNnJWamJ5WVdKQWRoY3JpQzh1anhXS2tYRVRMMDQ5ajJISndrK2ZxQTUyTGFVcW9XeHBvbWF5SFNsOVBvTzJBRTU2TlQrTHBnU3YyalJFaUNmTGp5NVhVcThVdWw5bExBNjlWTHlQbkw3KzRmUEJKUmliTmtRT2dEckdsWDA3UDVCWWVqSGNTZWpzV1JSSi9WN01vYUVsN2VmZVZybU9kRmJSbHBxV29vcmxiQjVyTmJndm9naEhVR2c0c0RWcWhJTmRGbU5yaFVLK1gwVGJrRE52dk1oRWI5YjZKMCsrSG44aWhla1NibFNrb0tRcEY1VWVkQ3NqVDhvRXdOcWFLSEFGYW5rcWdGWE1PUmI5ZTd1RTRhQURPQ3ViN0hybWpQN3R5dklCZmZQRGo2TnhhZFhzL2NtYjlpbUUwV3QydkI0dlV3MFNlS0dTckVyWW15Nm9TRmFvb1ZFN2RPbmU0VWhxT0dFY21ENGdybC9XSnIyRFE1K3FWeXZqVjQ4RjRZRHpFeWlEODNhcFZiWmtFVE1tQmpveU1WS1FGQllyRm91cHBwZVRzd2VJUStSZ3dUbmdQdkhSVy8zanRINHd1ak5VK2VhcDA2MUdTbXg0OE9YV29scGlCS2xUQ3NhVEJVMVYwTHVpQTFmd2xYdXgybDBSNEE0NStETkxmakxwcjU3Wi9UOFp2OEo4ZnpOZ2JaWWRzNDFKN2lNVXFRWnlIS1JqNmtVaWx3T1hXWlFKREhIaWlyZnpZRC93OSs0UUY2eHNWWTcrdUhxNDBiYlRCK05RdDFNalZJNHNNOUNERjR6WERlUlNZc2lSWVRxc2V5OGUzMnRrQVB1dkRtenBsaityOXZVZnlSN2VtZ2dURnExOFVmQVFraVROT2FJTHZNem9tR3NHckdCTk1wTUh6dGwrOTNyMXdVWUwwdG1UbjJsdFhkTCt3T01IQkVmdTNTV08yQ3VZUmlZcDBXYitjaWdrcW9pbjBGTUtFSWlUOVRLeDU2dVF0ZDg2SXVwdFg3WGhpL3R0blRtMHJDY21wbEpDVEVsU1hKZFJHeWRNMTBVL2JncXk3WnRZU1ZXNGpjOTF4YXVoVDZlbHZac0RVY2VQYXlOSkdsR1NFWjhoM0N0cnFSOFJJb3R3cFU0bFNpMHR5M0xqdTk4N0ZrTzgyeTY2bDYzNWNiNEVUaXE2Y1RRZFFUcDFIWTlMeXlhTWlJWjAwMHFLYkxzK3c2WHQrL3VxTnJVZnF6YnBCSktUSENZTWNReXhUVzRZNDhRWDA2enFxd3J1cVJMeE9kYlYzYUViSHJvVmIxTEdkSWw2bmdFT2Fpb2NkMEtUY1NKem1tMUt2c2NyZTVkMVQzalg5UzllR1h2MGpqbURsRlVJdHBPS2pVZ2E4VHlURmxucTN0WExnYnNQMnAyOStJVmZaczNJQ1NUREhQUGFzZ080MDYyZWswZlVDZVQreC93VlN2NmVqZXZXYnJVM3JodFRXL2ZpbFhUZ1g0RnVIMDJFNDdqekhJQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9wYmFyQ2FydFdyYXBwZXIgZnJvbSAnLi9TaW5nbGVDYXJ0TW9kYWwuc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7XG4gIHByaWNlLFxuICBxdWFudGl0eSxcbiAgaW1hZ2UsXG4gIG9iamVjdElELFxuICBjYW5jZWxRdWFudGl0eSxcbiAgX2hpZ2hsaWdodFJlc3VsdCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9wYmFyQ2FydFdyYXBwZXIgY2xhc3NOYW1lPVwiaXNvQ2FydEl0ZW1zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0l0ZW1JbWFnZVwiPlxuICAgICAgICA8aW1nIGFsdD1cIiNcIiBzcmM9e2ltYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0NhcnREZXRhaWxzXCI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8YSBocmVmPVwiIyFcIj57X2hpZ2hsaWdodFJlc3VsdC5uYW1lLnZhbHVlfTwvYT5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXNvSXRlbVByaWNlUXVhbnRpdHlcIj5cbiAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntwcmljZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtTXVsdGlwbGllclwiPlg8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXNvSXRlbVF1YW50aXR5XCI+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9XCJpc29JdGVtUmVtb3ZlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsUXVhbnRpdHkob2JqZWN0SUQpfVxuICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tYW5kcm9pZC1jbG9zZVwiIC8+XG4gICAgICA8L2E+XG4gICAgPC9Ub3BiYXJDYXJ0V3JhcHBlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5jb25zdCBUb3BiYXJDYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDIpfTtcbiAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gIC5pc29JdGVtSW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cblxuICAuaXNvQ2FydERldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PlxuICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMjBweCAwIDAnIDogJzAgMCAwIDIwcHgnfTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMil9O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuXG4gICAgICAgICYuaXRlbU11bHRpcGxpZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb0l0ZW1SZW1vdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzE1cHgnKX07XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE1cHgnIDogJ2luaGVyaXQnKX07XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XG5cbiAgICAuaXNvSXRlbVJlbW92ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJDYXJ0V3JhcHBlcik7XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gJy4uL3V0aWxpdHkvaW50bE1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY29uZmlnLCBjaGFuZ2VUaGVtZSwgc2VsZWN0ZWRJZCB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCBvcHRpb25zIH0gPSBjb25maWc7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZVN3aXRjaEJsb2NrXCI+XG4gICAgICA8aDQ+XG4gICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e2xhYmVsfSAvPlxuICAgICAgPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVTd2l0Y2hCdG5XcmFwcGVyXCI+XG4gICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdGhlbWVOYW1lLCBidXR0b25Db2xvciB9ID0gb3B0aW9uO1xuICAgICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VUaGVtZShpZCwgdGhlbWVOYW1lKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdGhlbWVOYW1lID09PSBzZWxlY3RlZElkID8gJ3NlbGVjdGVkVGhlbWUnIDogJyc7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGtleT17dGhlbWVOYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1c3RvbUNsYXNzfVxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbkNvbG9yIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCdXR0b25zLCBCdXR0b25zR3JvdXAgfSBmcm9tICcuL3N0eWxlcy9idXR0b24uc3R5bGUnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnQGlzby9saWIvaGVscGVycy9ydGwnO1xuY29uc3QgQW50QnV0dG9uID0gQnV0dG9ucyhCdXR0b24pO1xuY29uc3QgaXNvQnV0dG9uID0gV2l0aERpcmVjdGlvbihBbnRCdXR0b24pO1xuY29uc3QgQW50QnV0dG9uR3JvdXAgPSBCdXR0b25zR3JvdXAoQnV0dG9uLkdyb3VwKTtcbmNvbnN0IEJ1dHRvbkdyb3VwID0gV2l0aERpcmVjdGlvbihBbnRCdXR0b25Hcm91cCk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzb0J1dHRvbjtcbmV4cG9ydCB7IEJ1dHRvbkdyb3VwIH07XG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgSW5wdXRXcmFwcGVyLFxuICBJbnB1dEdyb3VwV3JhcHBlcixcbiAgSW5wdXRTZWFyY2hXcmFwcGVyLFxuICBUZXh0QXJlYVdyYXBwZXIsXG59IGZyb20gJy4vc3R5bGVzL2lucHV0LnN0eWxlJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcbmNvbnN0IHsgU2VhcmNoLCBUZXh0QXJlYSwgR3JvdXAgfSA9IElucHV0O1xuXG5jb25zdCBXRFN0eWxlZElucHV0ID0gSW5wdXRXcmFwcGVyKElucHV0KTtcbmNvbnN0IFN0eWxlZElucHV0ID0gV2l0aERpcmVjdGlvbihXRFN0eWxlZElucHV0KTtcblxuY29uc3QgV0RJbnB1dEdyb3VwID0gSW5wdXRHcm91cFdyYXBwZXIoR3JvdXApO1xuY29uc3QgSW5wdXRHcm91cCA9IFdpdGhEaXJlY3Rpb24oV0RJbnB1dEdyb3VwKTtcblxuY29uc3QgV0RJbnB1dFNlYXJjaCA9IElucHV0U2VhcmNoV3JhcHBlcihTZWFyY2gpO1xuY29uc3QgSW5wdXRTZWFyY2ggPSBXaXRoRGlyZWN0aW9uKFdESW5wdXRTZWFyY2gpO1xuXG5jb25zdCBXRFRleHRhcmVhID0gVGV4dEFyZWFXcmFwcGVyKFRleHRBcmVhKTtcbmNvbnN0IFRleHRhcmVhID0gV2l0aERpcmVjdGlvbihXRFRleHRhcmVhKTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSW5wdXQ7XG5leHBvcnQgeyBJbnB1dFNlYXJjaCwgSW5wdXRHcm91cCwgVGV4dGFyZWEgfTtcbiIsImltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsImltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5cbmNvbnN0IEJ1dHRvbnMgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgPiAuYW50aWNvbiArIHNwYW4sXG4gICAgPiBzcGFuICsgLmFudGljb24ge1xuICAgICAgbWFyZ2luOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAuNWVtIDAgMCcgOiAnMCAwIDAgMC41ZW0nfTtcbiAgICB9XG5cbiAgICAuYW50aWNvbi1yaWdodCB7XG4gICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdyb3RhdGUoMCknfTtcbiAgICB9XG5cbiAgICAuYW50aWNvbi1sZWZ0IHtcbiAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ3JvdGF0ZSgwKSd9O1xuICAgIH1cblxuICAgICYuYW50LWJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMTApfTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAxMCl9O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFudC1idG4tc20ge1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAmLmFudC1idG4tbG9hZGluZzpub3QoLmFudC1idG4tY2lyY2xlKTpub3QoLmFudC1idG4tY2lyY2xlLW91dGxpbmUpIHtcbiAgICAgICAgcGFkZGluZzogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDI0cHggMCAxNXB4JyA6ICcwIDE1cHggMCAyNHB4J307XG4gICAgICAgIC5hbnRpY29uIHtcbiAgICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIC0xN3B4IDAgMCcgOiAnMCAwIDAgLTE3cHgnfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi1sZyB7XG4gICAgICBwYWRkaW5nOiAwIDM1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLXByaW1hcnkge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLWRhc2hlZCB7XG4gICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdib3JkZXInLCAxKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFudC1idG4tZGFuZ2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnZXJyb3InLCAwKX07XG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgnZXJyb3InLCAwKX07XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnZXJyb3InLCAyKX07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDIpfTtcbiAgICAgIH1cblxuICAgICAgJi5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3Qge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDApfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDApfTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdlcnJvcicsIDIpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgnZXJyb3InLCAyKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFudC1idG4tY2lyY2xlLFxuICAgICYuYW50LWJ0bi1jaXJjbGUtb3V0bGluZSB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICYuYW50LWJ0bi1zbSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgJi5hbnQtYnRuLWxnIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi5kaXNhYmxlZCxcbiAgICAmLmFudC1idG5bZGlzYWJsZWRdLFxuICAgICYuYW50LWJ0bi5kaXNhYmxlZDpob3ZlcixcbiAgICAmLmFudC1idG5bZGlzYWJsZWRdOmhvdmVyLFxuICAgICYuYW50LWJ0bi5kaXNhYmxlZDpmb2N1cyxcbiAgICAmLmFudC1idG5bZGlzYWJsZWRdOmZvY3VzLFxuICAgICYuYW50LWJ0bi5kaXNhYmxlZDphY3RpdmUsXG4gICAgJi5hbnQtYnRuW2Rpc2FibGVkXTphY3RpdmUsXG4gICAgJi5hbnQtYnRuLmRpc2FibGVkLmFjdGl2ZSxcbiAgICAmLmFudC1idG5bZGlzYWJsZWRdLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAyKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLWxvYWRpbmc6bm90KC5hbnQtYnRuLWNpcmNsZSk6bm90KC5hbnQtYnRuLWNpcmNsZS1vdXRsaW5lKVxuICAgICAgLmFudGljb24ge1xuICAgICAgbWFyZ2luOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIC0xNHB4IDAgMCcgOiAnMCAwIDAgLTE0cHgnfTtcbiAgICB9XG5cbiAgICAmLmlzb0J1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMil9O1xuICAgICAgfVxuXG4gICAgICAmLmlzb0J0blNtIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgJi5pc29CdG5MZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgKyAuYW50LWJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICctMXB4J30gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJ30gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgUmFkaW9CdXR0b25zID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXIge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgJjpob3ZlcixcbiAgICAmLmFudC1yYWRpby1idXR0b24td3JhcHBlci1mb2N1c2VkIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgJi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgYm94LXNoYWRvdzogLTFweCAwIDAgMCAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCdXR0b25zR3JvdXAgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtYnRuLWdyb3VwIHtcbiAgICAuYW50LWJ0biB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ2JvcmRlcicsIDEpfTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgfVxuXG4gICAgICAmLmFudC1idG4tZGFzaGVkIHtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5hbnQtYnRuLXByaW1hcnkge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDEwKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICA+IC5hbnQtYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA0cHggNHB4IDAnIDogJzRweCAwIDAgNHB4J307XG4gICAgfVxuXG4gICAgPiAuYW50LWJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzRweCAwIDAgNHB4JyA6ICcwIDRweCA0cHggMCd9O1xuICAgIH1cblxuICAgIC5hbnQtYnRuLXByaW1hcnk6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbiAgICAuYW50LWJ0bi1wcmltYXJ5ICsgLmFudC1idG4tcHJpbWFyeSB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCdcbiAgICAgICAgICA/IHBhbGV0dGUoJ3ByaW1hcnknLCAwKVxuICAgICAgICAgIDogcGFsZXR0ZSgncHJpbWFyeScsIDIpfTtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCdcbiAgICAgICAgICA/IHBhbGV0dGUoJ3ByaW1hcnknLCAyKVxuICAgICAgICAgIDogcGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICB9XG5cbiAgICAuYW50LWJ0bi1wcmltYXJ5OmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnXG4gICAgICAgICAgPyBwYWxldHRlKCdwcmltYXJ5JywgMilcbiAgICAgICAgICA6IHBhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnXG4gICAgICAgICAgPyBwYWxldHRlKCdwcmltYXJ5JywgMClcbiAgICAgICAgICA6IHBhbGV0dGUoJ3ByaW1hcnknLCAyKX07XG4gICAgfVxuXG4gICAgLmFudC1idG4gKyAuYW50LWJ0bixcbiAgICArIC5hbnQtYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICctMXB4J30gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTFweCcgOiAnMCd9ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLWdyb3VwLWxnIHtcbiAgICAgID4gLmFudC1idG4ge1xuICAgICAgICBwYWRkaW5nOiAwIDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYW50LWJ0bi1ncm91cC1zbSB7XG4gICAgICA+IC5hbnQtYnRuIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmFudC1idG4tZ3JvdXAgKyAmLmFudC1idG4tZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnLTFweCd9ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTFweCcgOiAnMCd9ICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEdob3N0QnV0dG9ucyA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgICYuYW50LWJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IHsgQnV0dG9ucywgQnV0dG9uc0dyb3VwLCBSYWRpb0J1dHRvbnMsIEdob3N0QnV0dG9ucyB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCB7XG4gIHRyYW5zaXRpb24sXG4gIGJvcmRlclJhZGl1cyxcbiAgYm94U2hhZG93LFxufSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcblxuY29uc3QgSW5wdXRXcmFwcGVyID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gICYuYW50LWlucHV0IHtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAke2JvcmRlclJhZGl1cygnNHB4Jyl9O1xuICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtbGcge1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtc20ge1xuICAgICAgcGFkZGluZzogMXB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnKX07XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IElucHV0R3JvdXBXcmFwcGVyID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gICYuYW50LWlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJyl9O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQge1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA0cHggNHB4IDAnIDogJzRweCAwIDAgNHB4J307XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1ncm91cC1hZGRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLFxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLFxuICAgID4gLmFudC1pbnB1dDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJzFweCd9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTFweCcgOiAnMCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA0KX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHgnIDogJzAnfTtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMXB4J307XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA0cHggNHB4IDAnIDogJzRweCAwIDAgNHB4J307XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICcxcHgnfTtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNHB4IDAgMCA0cHgnIDogJzAgNHB4IDRweCAwJ307XG4gICAgICB9XG5cbiAgICAgIC5hbnQtc2VsZWN0IHtcbiAgICAgICAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAke2JveFNoYWRvdygpfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAuYW50LWlucHV0LWdyb3VwLXdyYXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmID4gLmFudC1pbnB1dDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICR7JycgLyogYm9yZGVyLWxlZnQ6IDA7ICovfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0OmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAqIHtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4ICcgOiAnMCd9O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdCA+IC5hbnQtc2VsZWN0LXNlbGVjdGlvbixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYWxlbmRhci1waWNrZXIgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZSAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhc2NhZGVyLXBpY2tlciAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LW1lbnRpb24td3JhcHBlciAuYW50LW1lbnRpb24tZWRpdG9yLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXRpbWUtcGlja2VyIC5hbnQtdGltZS1waWNrZXItaW5wdXQge1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHggJyA6ICcwJ307XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+ICo6Zmlyc3QtY2hpbGQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0OmZpcnN0LWNoaWxkID4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhbGVuZGFyLXBpY2tlcjpmaXJzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZTpmaXJzdC1jaGlsZFxuICAgICAgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYXNjYWRlci1waWNrZXI6Zmlyc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtbWVudGlvbi13cmFwcGVyOmZpcnN0LWNoaWxkXG4gICAgICAuYW50LW1lbnRpb24tZWRpdG9yLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC10aW1lLXBpY2tlcjpmaXJzdC1jaGlsZFxuICAgICAgLmFudC10aW1lLXBpY2tlci1pbnB1dCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDRweCA0cHggMCcgOiAnNHB4IDAgMCA0cHgnfTtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHhcbiAgICAgICAgJHsnJyAvKiBib3JkZXItcmlnaHQtd2lkdGg6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCcgOiAnMCd9OyAqL307XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+ICo6bGFzdC1jaGlsZCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3Q6bGFzdC1jaGlsZCA+IC5hbnQtc2VsZWN0LXNlbGVjdGlvbixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYWxlbmRhci1waWNrZXI6bGFzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlOmxhc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYXNjYWRlci1waWNrZXI6bGFzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC1tZW50aW9uLXdyYXBwZXI6bGFzdC1jaGlsZFxuICAgICAgLmFudC1tZW50aW9uLWVkaXRvcixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtdGltZS1waWNrZXI6bGFzdC1jaGlsZFxuICAgICAgLmFudC10aW1lLXBpY2tlci1pbnB1dCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc0cHggMCAwIDRweCcgOiAnMCA0cHggNHB4IDAnfTtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCAnIDogJzFweCd9O1xuICAgIH1cblxuICAgIC5hbnQtY2FsZW5kYXItcGlja2VyLWNsZWFyLFxuICAgIC5hbnQtY2FsZW5kYXItcGlja2VyLWljb24ge1xuICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICc4cHgnKX07XG4gICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnOHB4JyA6ICdpbmhlcml0Jyl9O1xuICAgIH1cbiAgfVxuXG4gICYuYW50LWlucHV0LWdyb3VwLWxnIHtcbiAgICAuYW50LWlucHV0LFxuICAgID4gLmFudC1pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRleHRBcmVhV3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dCB7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAke2JvcmRlclJhZGl1cygnNHB4Jyl9O1xuICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSW5wdXRTZWFyY2hXcmFwcGVyID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gICYuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xuICAgIC5hbnQtaW5wdXQge1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAgICR7Ym9yZGVyUmFkaXVzKCc0cHgnKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIH1cblxuICAgICAgJi5hbnQtaW5wdXQtbGcge1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmLmFudC1pbnB1dC1zbSB7XG4gICAgICAgIHBhZGRpbmc6IDFweCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICB9XG5cbiAgICAgICY6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgIH1cblxuICAgICAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgIH1cbiAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtc3VmZml4IHtcbiAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnN3B4Jyl9O1xuICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzdweCcgOiAnaW5oZXJpdCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LWFudC1pbnB1dC1wcmVmaXgge1xuICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc3cHgnIDogJ2luaGVyaXQnKX07XG4gICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnN3B4Jyl9O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtc2VhcmNoLWljb24ge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7IElucHV0V3JhcHBlciwgSW5wdXRHcm91cFdyYXBwZXIsIElucHV0U2VhcmNoV3JhcHBlciwgVGV4dEFyZWFXcmFwcGVyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzaXRlQ29uZmlnIGZyb20gJ0Bpc28vY29uZmlnL3NpdGUuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBjb2xsYXBzZWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTG9nb1dyYXBwZXJcIj5cbiAgICAgIHtjb2xsYXBzZWQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzaXRlQ29uZmlnLnNpdGVJY29ufSAvPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICA8YT57c2l0ZUNvbmZpZy5zaXRlTmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2gzPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbmplY3RJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IEluamVjdE1hc3NhZ2UgPSBwcm9wcyA9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ucHJvcHN9IC8+O1xuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChJbmplY3RNYXNzYWdlLCB7XG4gIHdpdGhSZWY6IGZhbHNlLFxufSk7XG4iLCJjb25zdCBsYW5ndWFnZSA9ICdlbmdsaXNoJztcbmV4cG9ydCBjb25zdCBsYW5nRGlyID0gJ2x0cic7XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzaXRlTmFtZTogJ0lTT01PUlBISUMnLFxuICBzaXRlSWNvbjogJ2lvbi1mbGFzaCcsXG4gIGZvb3RlclRleHQ6IGBJc29tb3JwaGljIEAgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IENyZWF0ZWQgYnkgUmVkUSwgSW5jYCxcbiAgZW5hYmxlQW5pbWF0ZWRSb3V0ZTogZmFsc2UsXG4gIGFwaVVybDogJ2h0dHA6Ly95b3Vyc2l0ZS5jb20vYXBpLycsXG4gIGdvb2dsZToge1xuICAgIGFuYWx5dGljc0tleTogJ1VBLXh4eHh4eHh4eC0xJyxcbiAgfSxcbiAgZGFzaGJvYXJkOiAnL2Rhc2hib2FyZCcsXG59O1xuIiwiaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmRlZmF1bHRUaGVtZSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IFsnI2YwMCddLFxuICAgIHNlY29uZGFyeTogWycjMGYwJ10sXG4gIH0sXG59O1xuIiwiY29uc3QgdGhlbWUgPSB7fTtcblxudGhlbWUucGFsZXR0ZSA9IHtcbiAgcHJpbWFyeTogW1xuICAgICcjNDQ4MkZGJywgLy8gMDogRGVmYXVsdFxuICAgICcjM0E3OEY1JywgLy8gMTogRGFya2VuIDQlXG4gICAgJyMzNzc1RjInLCAvLyAyOiBEYXJrZW4gNSVcbiAgICAncmdiYSg2OCwgMTMwLCAyNTUsIDAuMiknLCAvLyAzOiBGYWRlIDIwJVxuICAgICcjNEM4QUZGJywgLy8gNDogTGlnaHRlbiAzJVxuICAgICdyZ2JhKDY4LCAxMzAsIDI1NSwgMC43NSknLCAvLyA1OiBGYWRlIDc1JVxuICAgICcjNkFBOEZGJywgLy8gNjogTGlnaHRlbiAxNSVcbiAgICAnIzYzQTFGRicsIC8vIDc6IExpZ2h0ZW4gMTIlXG4gICAgJyMzRjdERkEnLCAvLyA4OiBEYXJrZW4gMiVcbiAgICAnIzMzNjllNycsIC8vIDk6IEFsZ29saWEgY29sb3JcbiAgICAnIzU4OTZGRicsIC8vIDEwOiBMaWdodGVuIDglXG4gICAgJyMyYjY5ZTYnLCAvLyAxMTpcbiAgICAnIzIzNmNmZScsIC8vIDEyOiBkYXJrZW4gMTAlXG4gICAgJyM0ZDg4ZmYnLCAvLyAxMzogTGlnaHRlbiA1JVxuICBdLFxuICBzZWNvbmRhcnk6IFtcbiAgICAnIzJkMzQ0NicsIC8vIDA6IERhcmtCbHVlXG4gICAgJyNmMWYzZjYnLCAvLyAxOiBMaWdodEJsdWlzaFxuICAgICcjNzg4MTk1JywgLy8gMjogTGlnaHRCbHVlXG4gICAgJyNFNEU2RTknLCAvLyAzOiBMaWdodEJsdWlzaCBEYXJrZW4gNSVcbiAgICAnIzM2NGQ3OScsIC8vIDQ6XG4gICAgJyMyMDI3MzknLCAvLyA1OiBEYXJrQmx1ZSBEYXJrZW4gNSVcbiAgICAnI2Y1ZjZmOCcsIC8vIDY6IExpZ2h0ZXJCbHVpc2hcbiAgICAnI2U5ZWJmMScsIC8vIDc6IERhcmtCbHVpc2hcbiAgICAnI0Y2RjhGQicsIC8vIDg6IExpZ2h0ZXJCbHVpc2ggTGlnaHRlbiAyJVxuICAgICcjRTlFQkVFJywgLy8gOTogTGlnaHRlckJsdWlzaCBEYXJrZW4gMyVcbiAgICAnIzFhMWExYScsIC8vIDEwOiBTaWRlYmFyIHN1Ym1lbnUgc2VsZWN0XG4gIF0sXG4gIGNvbG9yOiBbXG4gICAgJyNGRUFDMDEnLCAvLyAwOiBPcmFuZ2VcbiAgICAnIzQyMjk5YScsIC8vIDE6IFB1cnBsZVxuICAgICcjRjc1RDgxJywgLy8gMjogUGlua1xuICAgICcjN0VEMzIxJywgLy8gMzogTGltZUdyZWVuXG4gICAgJyMzOTQzNWYnLCAvLyA0OiBCbHVlU2hhZGVcbiAgICAnI0ZGQ0EyOCcsIC8vIDU6IFllbGxvd1xuICAgICcjRjJCRDFCJywgLy8gNjogWWVsbG93IERhcmtlbiA1JVxuICAgICcjM2I1OTk4JywgLy8gNzogRmFjZWJvb2tcbiAgICAnIzM0NGU4NicsIC8vIDg6IEZhY2Vib29rIERhcmtlbiA1JVxuICAgICcjZGQ0YjM5JywgLy8gOTogR29vZ2xlIFBsdXNcbiAgICAnI2Q3MzkyNScsIC8vIDEwOiBHb29nbGUgUGx1cyBEYXJrZW4gNSVcbiAgICAnI2UxNDYxNScsIC8vIDExOiBBdXRoMFxuICAgICcjY2EzZjEzJywgLy8gMTI6IEF1dGgwXG4gICAgJyNlMDM2NGMnLCAvLyAxMzogdGhlbWVDb2xvci0tQWxpemFyaW5Dcmltc29uXG4gIF0sXG4gIHdhcm5pbmc6IFtcbiAgICAnI2ZmYmYwMCcsIC8vIDA6IFdhcm5pbmdcbiAgXSxcbiAgc3VjY2VzczogW1xuICAgICcjMDBiMTZhJywgLy8gMDogU3VjY2Vzc1xuICBdLFxuICBlcnJvcjogW1xuICAgICcjZjY0NzQ0JywgLy8gMDogRXJyb3JcbiAgICAnI0VDM0QzQScsIC8vIDE6IERhcmtlbiA0JVxuICAgICcjRkY1QjU4JywgLy8gMjogTGlnaHRlbiA4JVxuICBdLFxuICBncmF5c2NhbGU6IFtcbiAgICAnI2JhYmFiYScsIC8vIDA6IEdyZXlTaGFkZVxuICAgICcjYzFjMWMxJywgLy8gMTogR3JleURhcmtcbiAgICAnI0Q4RDhEOCcsIC8vIDI6IEdyZXlcbiAgICAnI2YxZjFmMScsIC8vIDM6IEdyZXlBbHRcbiAgICAnI0YzRjNGMycsIC8vIDQ6IEdyZXlMaWdodFxuICAgICcjZmFmYWZhJywgLy8gNTogRGFya1doaXRlXG4gICAgJyNGOUY5RjknLCAvLyA2OiBEYXJrZXJXaGl0ZVxuICAgICcjZmNmY2ZjJywgLy8gNzogI2ZmZiBEYXJrZW4gMSVcbiAgICAnI2VlZWVlZScsIC8vIDg6XG4gICAgJyNmYmZiZmInLCAvLyA5OlxuICAgICcjZjVmNWY1JywgLy8gMTA6XG4gICAgJyNmN2Y4ZjknLCAvLyAxMTogdG9kYXktaGlnaGxpZ2h0LWJnXG4gIF0sXG4gIHRleHQ6IFtcbiAgICAnIzMyMzMzMicsIC8vIDA6IEhlYWRpbmdcbiAgICAnIzU5NTk1OScsIC8vIDE6IEhlYWRpbmdMaWdodFxuICAgICcjOTc5Nzk3JywgLy8gMjogVGV4dFxuICAgICcjNzk3OTc5JywgLy8gMzogVGV4dERhcmtcbiAgICAnIzZhNmM2YScsIC8vIDQ6IEhlYWRpbmcgTGlnaHRlbiAyMiVcbiAgXSxcbiAgYm9yZGVyOiBbXG4gICAgJyNlOWU5ZTknLCAvLyAwOiBCb3JkZXJcbiAgICAnI2Q4ZDhkOCcsIC8vIDE6IEJvcmRlckRhcmtcbiAgICAnI2ViZWJlYicsIC8vIDI6IEJvcmRlckxpZ2h0XG4gICAgJyNkM2QzZDMnLCAvLyAzOlxuICAgICdyZ2JhKDIyOCwgMjI4LCAyMjgsIDAuNjUpJywgLy8gNDpcbiAgXSxcblxuICBjYWxlbmRhcjogW1xuICAgICcjOTA1JywgLy8gMDpcbiAgICAnIzY5MCcsIC8vIDE6XG4gICAgJyNhNjdmNTknLCAvLyAyOlxuICAgICcjMDdhJywgLy8gMzpcbiAgICAnI2RkNGE2OCcsIC8vIDQ6XG4gICAgJyNlOTAnLCAvLyA1OlxuICBdLFxufTtcblxudGhlbWUuZm9udHMgPSB7XG4gIHByaW1hcnk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnLFxuICBwcmU6ICdDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHQnO1xuaW1wb3J0IGN1c3RvbVRoZW1lIGZyb20gJy4vY3VzdG9tJztcblxuY29uc3QgdGhlbWVzID0ge1xuICBkZWZhdWx0VGhlbWUsXG4gIGN1c3RvbVRoZW1lLFxufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lQ29uZmlnID0ge1xuICB0b3BiYXI6ICdkZWZhdWx0VGhlbWUnLFxuICBzaWRlYmFyOiAnZGVmYXVsdFRoZW1lJyxcbiAgbGF5b3V0OiAnZGVmYXVsdFRoZW1lJyxcbiAgdGhlbWU6ICdkZWZhdWx0VGhlbWUnLFxufTtcbmV4cG9ydCBkZWZhdWx0IHRoZW1lcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgQnV0dG9ucyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9idXR0b24nO1xuaW1wb3J0IElucHV0cyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9pbnB1dCc7XG5pbXBvcnQgeyBUZXh0YXJlYSBhcyBUZXh0YXJlYXMgfSBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9pbnB1dCc7XG5pbXBvcnQgUmVhY3REcmF3ZXJzIGZyb20gJ3JlYWN0LW1vdGlvbi1kcmF3ZXInO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZChJbnB1dHMpYGA7XG5jb25zdCBUZXh0YXJlYSA9IHN0eWxlZChUZXh0YXJlYXMpYGA7XG5jb25zdCBSZWFjdERyYXdlciA9IHN0eWxlZChSZWFjdERyYXdlcnMpYFxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbmA7XG5cbmNvbnN0IE1lc3NhZ2VTaW5nbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMTVweCAwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgJi5sb2dnZWRVc2VyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5tZXNzYWdlR3JhdmF0YXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG5cbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cbiAgLm1lc3NhZ2VDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAubWVzc2FnZUNvbnRlbnRUZXh0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAkeycnIC8qIG92ZXJmbG93OiBoaWRkZW47ICovfSB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZVRpbWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDMpfTtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgJi5pc1VzZXIge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgLm1lc3NhZ2VDb250ZW50VGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDEpfTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDNweCAzcHg7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgIHJpZ2h0OiAtOXB4O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJHtwYWxldHRlKCdwcmltYXJ5JywgMSl9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tZXNzYWdlVGltZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm5vdFVzZXIge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5tZXNzYWdlQ29udGVudFRleHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDQpfTtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDNweDtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IC05cHg7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDQpfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWVzc2FnZVRpbWUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuY29uc3QgQ2hhdFdpbmRvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgPiBkaXYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuY29uc3QgQ2hhdEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XG4gIH1cbmA7XG5jb25zdCBDaGF0U2lkZWJhciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gIC5Vc2VyTGlzdHNXcmFwcGVyIHtcbiAgICAubWVzc2FnZUhlbHBlclRleHQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuQ29tcG9zZU1lc3NhZ2VCdXR0b24ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKEJ1dHRvbnMpYFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBzcGFuIHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDb21wb3NlTWVzc2FnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDUpfTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcblxuICAke1RleHRhcmVhfSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcmVzaXplOiBub25lO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IENvbXBvc2VJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDY1dmg7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAwO1xuICA+IGRpdiB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgVXNlckxpc3RzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG5gO1xuXG5jb25zdCBVc2VyTGlzdHMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XG4gIH1cblxuICAudXNlckxpc3RzR3JhdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuICAudXNlckxpc3RzQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5jaGF0RXhjZXJwdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgLnVzZXJMaXN0c1RpbWUge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUb2dnbGVWaWV3UHJvZmlsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogNjVweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAke0J1dHRvbn0ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTaWRlYmFyU2VhcmNoQm94ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDIpfTtcblxuICAke0lucHV0fSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNZXNzYWdlQ2hhdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzZweCk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBDaGF0Vmlld1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IE1lc3NhZ2VEaWFsb2cgPSBzdHlsZWQuZGl2YFxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICR7Q29tcG9zZU1lc3NhZ2VXcmFwcGVyfSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3JkZXI6IDA7XG5cbiAgICAke1RleHRhcmVhfSB7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ0ODJmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNjgsIDEzMCwgMjU1LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQWRkVXNlckJ0biA9IHN0eWxlZChCdXR0b25zKWBcbiAgJiYge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IHtcbiAgTWVzc2FnZVNpbmdsZSxcbiAgQ2hhdFdpbmRvdyxcbiAgQ2hhdEJveCxcbiAgQ2hhdFNpZGViYXIsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIFRleHRhcmVhLFxuICBDb21wb3NlTWVzc2FnZVdyYXBwZXIsXG4gIFVzZXJMaXN0cyxcbiAgVXNlckxpc3RzV3JhcHBlcixcbiAgVG9nZ2xlVmlld1Byb2ZpbGUsXG4gIENvbXBvc2VJbnB1dFdyYXBwZXIsXG4gIFNpZGViYXJTZWFyY2hCb3gsXG4gIE1lc3NhZ2VDaGF0V3JhcHBlcixcbiAgQ2hhdFZpZXdXcmFwcGVyLFxuICBSZWFjdERyYXdlcixcbiAgTWVzc2FnZURpYWxvZyxcbiAgQWRkVXNlckJ0bixcbiAgRmllbGRzZXQsXG4gIExhYmVsLFxuICBGb3JtLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gJ0Bpc28vY29tcG9uZW50cy91dGlsaXR5L2ludGxNZXNzYWdlcyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvYWN0aW9ucyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgeyBjaGFuZ2VMYW5ndWFnZSB9ID0gYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZ3VhZ2VTd2l0Y2hlcigpIHtcbiAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuTGFuZ3VhZ2VTd2l0Y2hlcik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lU3dpdGNoQmxvY2tcIj5cbiAgICAgIDxoND5cbiAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cImxhbmd1YWdlU3dpdGNoZXIubGFiZWxcIiAvPlxuICAgICAgPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVTd2l0Y2hCdG5XcmFwcGVyXCI+XG4gICAgICAgIHtjb25maWcub3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCB7IGxhbmd1YWdlSWQsIGljb24gfSA9IG9wdGlvbjtcbiAgICAgICAgICBjb25zdCBjdXN0b21DbGFzcyA9XG4gICAgICAgICAgICBsYW5ndWFnZUlkID09PSBsYW5ndWFnZS5sYW5ndWFnZUlkXG4gICAgICAgICAgICAgID8gJ3NlbGVjdGVkVGhlbWUgbGFuZ3VhZ2VTd2l0Y2gnXG4gICAgICAgICAgICAgIDogJ2xhbmd1YWdlU3dpdGNoJztcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1c3RvbUNsYXNzfVxuICAgICAgICAgICAgICBrZXk9e2xhbmd1YWdlSWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUlkKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJmbGFnXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnQGlzby9jb25maWcvbGFuZ3VhZ2UuY29uZmlnJztcblxuaW1wb3J0IGVuZ2xpc2hMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL3VrLnN2Zyc7XG5pbXBvcnQgY2hpbmVzZUxhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvY2hpbmEuc3ZnJztcbmltcG9ydCBzcGFuaXNoTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9zcGFpbi5zdmcnO1xuaW1wb3J0IGZyZW5jaExhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvZnJhbmNlLnN2Zyc7XG5pbXBvcnQgaXRhbGlhbkxhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvaXRhbHkuc3ZnJztcblxuY29uc3QgY29uZmlnID0ge1xuICBkZWZhdWx0TGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2VuZ2xpc2gnLFxuICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgdGV4dDogJ0VuZ2xpc2gnLFxuICAgICAgaWNvbjogZW5nbGlzaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnY2hpbmVzZScsXG4gICAgICBsb2NhbGU6ICd6aCcsXG4gICAgICB0ZXh0OiAnQ2hpbmVzZScsXG4gICAgICBpY29uOiBjaGluZXNlTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdzcGFuaXNoJyxcbiAgICAgIGxvY2FsZTogJ2VzJyxcbiAgICAgIHRleHQ6ICdTcGFuaXNoJyxcbiAgICAgIGljb246IHNwYW5pc2hMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2ZyZW5jaCcsXG4gICAgICBsb2NhbGU6ICdmcicsXG4gICAgICB0ZXh0OiAnRnJlbmNoJyxcbiAgICAgIGljb246IGZyZW5jaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnaXRhbGlhbicsXG4gICAgICBsb2NhbGU6ICdpdCcsXG4gICAgICB0ZXh0OiAnSXRhbGlhbicsXG4gICAgICBpY29uOiBpdGFsaWFuTGFuZyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMYW5ndWFnZShsYW5nKSB7XG4gIGxldCBzZWxlY2V0ZWRMYW5ndWFnZSA9IGNvbmZpZy5vcHRpb25zWzBdO1xuICBjb25maWcub3B0aW9ucy5mb3JFYWNoKGxhbmd1YWdlID0+IHtcbiAgICBpZiAobGFuZ3VhZ2UubGFuZ3VhZ2VJZCA9PT0gbGFuZykge1xuICAgICAgc2VsZWNldGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VsZWNldGVkTGFuZ3VhZ2U7XG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnQGlzby9yZWR1eC90aGVtZVN3aXRjaGVyL2FjdGlvbnMnO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJ0Bpc28vY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyL1RoZW1lU3dpdGNoZXInO1xuaW1wb3J0IExhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi4vTGFuZ3VhZ2VTd2l0Y2hlci9MYW5ndWFnZVN3aXRjaGVyJztcbmltcG9ydCBUaGVtZXMgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGJ1Y2tldFNWRyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvYnVja2V0LnN2Zyc7XG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gJ0Bpc28vY29tcG9uZW50cy91dGlsaXR5L2ludGxNZXNzYWdlcyc7XG5pbXBvcnQgVGhlbWVTd2l0Y2hlclN0eWxlIGZyb20gJy4vVGhlbWVTd2l0Y2hlci5zdHlsZXMnO1xuXG5jb25zdCB7IHN3aXRjaEFjdGl2YXRpb24sIGNoYW5nZVRoZW1lIH0gPSBBY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZVN3aXRjaGVyKCkge1xuICBjb25zdCB7IGlzQWN0aXZhdGVkLCB0b3BiYXJUaGVtZSwgc2lkZWJhclRoZW1lLCBsYXlvdXRUaGVtZSB9ID0gdXNlU2VsZWN0b3IoXG4gICAgc3RhdGUgPT4gc3RhdGUuVGhlbWVTd2l0Y2hlclxuICApO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlQnV0dG9uID0geyBiYWNrZ3JvdW5kOiBzaWRlYmFyVGhlbWUuYnV0dG9uQ29sb3IgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVN3aXRjaGVyU3R5bGVcbiAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmF0ZWQgPyAnaXNvVGhlbWVTd2l0Y2hlciBhY3RpdmUnIDogJ2lzb1RoZW1lU3dpdGNoZXInfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50VGl0bGVXcmFwcGVyXCIgc3R5bGU9e3N0eWxlQnV0dG9ufT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbXBvbmVudFRpdGxlXCI+XG4gICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInRoZW1lU3dpdGNoZXIuc2V0dGluZ3NcIiAvPlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3dpdGNoZXJCbG9ja1dyYXBwZXJcIj5cbiAgICAgICAgPFN3aXRjaGVyXG4gICAgICAgICAgY29uZmlnPXtUaGVtZXMuc2lkZWJhclRoZW1lfVxuICAgICAgICAgIGNoYW5nZVRoZW1lPXsoYXR0ciwgdGhlbWUpID0+IGRpc3BhdGNoKGNoYW5nZVRoZW1lKGF0dHIsIHRoZW1lKSl9XG4gICAgICAgICAgc2VsZWN0ZWRJZD17c2lkZWJhclRoZW1lLnRoZW1lTmFtZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8U3dpdGNoZXJcbiAgICAgICAgICBjb25maWc9e1RoZW1lcy50b3BiYXJUaGVtZX1cbiAgICAgICAgICBjaGFuZ2VUaGVtZT17KGF0dHIsIHRoZW1lKSA9PiBkaXNwYXRjaChjaGFuZ2VUaGVtZShhdHRyLCB0aGVtZSkpfVxuICAgICAgICAgIHNlbGVjdGVkSWQ9e3RvcGJhclRoZW1lLnRoZW1lTmFtZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8U3dpdGNoZXJcbiAgICAgICAgICBjb25maWc9e1RoZW1lcy5sYXlvdXRUaGVtZX1cbiAgICAgICAgICBjaGFuZ2VUaGVtZT17KGF0dHIsIHRoZW1lKSA9PiBkaXNwYXRjaChjaGFuZ2VUaGVtZShhdHRyLCB0aGVtZSkpfVxuICAgICAgICAgIHNlbGVjdGVkSWQ9e2xheW91dFRoZW1lLnRoZW1lTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPExhbmd1YWdlU3dpdGNoZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmNoYXNlQnRuV3JhcHBlclwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL2lzb21vcnBoaWMtcmVhY3QtcmVkdXgtYWRtaW4tZGFzaGJvYXJkLzIwMjYyMzMwP3JlZj1yZWRxdGVhbVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHVyY2hhc2VCdG5cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlQnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInRoZW1lU3dpdGNoZXIucHVyY2hhc2VcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInN3aXRjaGVyVG9nZ2xlQnRuXCJcbiAgICAgICAgc3R5bGU9e3N0eWxlQnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goc3dpdGNoQWN0aXZhdGlvbigpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e2J1Y2tldFNWR30gYWx0PVwiYnVja2V0XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvVGhlbWVTd2l0Y2hlclN0eWxlPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCB7XG4gIHRyYW5zaXRpb24sXG4gIGJvcmRlclJhZGl1cyxcbiAgYm94U2hhZG93LFxufSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcblxuY29uc3QgVGhlbWVTd2l0Y2hlclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBwYWRkaW5nOiAwIDAgNTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3MHB4O1xuICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy0zNDBweCcpfTtcbiAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0zNDBweCcgOiAnaW5oZXJpdCcpfTtcbiAgei1pbmRleDogMTAwMTtcbiAgJHt0cmFuc2l0aW9uKCl9O1xuICAke2JveFNoYWRvdygnLTFweCAwIDVweCByZ2JhKDAsMCwwLDAuMjUpJyl9O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICctMjcwcHgnKX07XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0yNzBweCcgOiAnaW5oZXJpdCcpfTtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzAnKX07XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJ2luaGVyaXQnKX07XG4gIH1cblxuICAuc3dpdGNoZXIge1xuICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTk4cHgnIDogJ2luaGVyaXQnKX07XG4gICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy05OHB4Jyl9O1xuICB9XG5cbiAgLmNvbXBvbmVudFRpdGxlV3JhcHBlciB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG5cbiAgICAuY29tcG9uZW50VGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuU3dpdGNoZXJCbG9ja1dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50aGVtZVN3aXRjaEJsb2NrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLnRoZW1lU3dpdGNoQnRuV3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAxMHB4JyA6ICcwIDEwcHggMCAwJ307XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCczcHgnKX07XG5cbiAgICAgICAgICAmLmxhbmd1YWdlU3dpdGNoIHtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICAmLnNlbGVjdGVkVGhlbWUge1xuICAgICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJy0zcHgnfTtcbiAgICAgICAgICAgICAgICByaWdodDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0zcHgnIDogJ2luaGVyaXQnfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlbGVjdGVkVGhlbWUge1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAxMyl9O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICctMnB4J307XG4gICAgICAgICAgICAgIHJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0ycHgnIDogJ2luaGVyaXQnfTtcbiAgICAgICAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdjb2xvcicsIDEzKX07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAxMyl9O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICctMnB4J307XG4gICAgICAgICAgICAgIHJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy0ycHgnIDogJ2luaGVyaXQnfTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNlbGVjdGVkQW5pbWF0aW9uIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogc2VsZWN0ZWRBbmltYXRpb24gMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3dpdGNoZXJUb2dnbGVCdG4ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdpbmhlcml0JyA6ICctNTBweCcpfTtcbiAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJy01MHB4JyA6ICdpbmhlcml0Jyl9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+XG4gICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCAzcHggM3B4IDAnIDogJzNweCAwIDAgM3B4J307XG4gICAgJHtib3hTaGFkb3coJy0ycHggMCA1cHggcmdiYSgwLDAsMCwwLjIpJyl9O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5wdXJjaGFzZUJ0bldyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiAgICAucHVyY2hhc2VCdG4ge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICR7Ym9yZGVyUmFkaXVzKCc1cHgnKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAxMyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzZWxlY3RlZEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIuNCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHNlbGVjdGVkQW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoRGlyZWN0aW9uKFRoZW1lU3dpdGNoZXJTdHlsZSk7XG4iLCJpbXBvcnQgeyB0aGVtZUNvbmZpZyB9IGZyb20gJ0Bpc28vY29uZmlnL3RoZW1lL3RoZW1lLmNvbmZpZyc7XG5jb25zdCBjaGFuZ2VUaGVtZXMgPSB7XG4gIGlkOiAnY2hhbmdlVGhlbWVzJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy50aGVtZSxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgdGV4dENvbG9yOiAnIzMyMzMzMicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICd0aGVtZTInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHRleHRDb2xvcjogJyMzMjMzMzInLFxuICAgIH0sXG4gIF0sXG59O1xuY29uc3QgdG9wYmFyVGhlbWUgPSB7XG4gIGlkOiAndG9wYmFyVGhlbWUnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXIuVG9wYmFyJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy50b3BiYXIsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICB0aGVtZU5hbWU6ICdkZWZhdWx0VGhlbWUnLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHRleHRDb2xvcjogJyMzMjMzMzInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUxJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2UwMzY0YycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzY1MzRmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUzJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ0ODJGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU0JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQyMmU2MicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU1JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzIyMTQ0YycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU2JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ2NzBhMicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU3JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ5NDk4MicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIF0sXG59O1xuY29uc3Qgc2lkZWJhclRoZW1lID0ge1xuICBpZDogJ3NpZGViYXJUaGVtZScsXG4gIGxhYmVsOiAndGhlbWVTd2l0Y2hlci5TaWRlYmFyJyxcbiAgZGVmYXVsdFRoZW1lOiB0aGVtZUNvbmZpZy5zaWRlYmFyLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzMyMzMzMicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHVuZGVmaW5lZCxcbiAgICAgIHRleHRDb2xvcjogJyM3ODgxOTUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUxJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2UwMzY0YycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTAzNjRjJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzY1MzRmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjUzNGZmJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUzJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ0ODJGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDQ4MkZGJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU0JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQyMmU2MicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDIyZTYyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU1JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzIyMTQ0YycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjIxNDRjJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU2JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ2NzBhMicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDY3MGEyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWU3JyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnIzQ5NDk4MicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDk0OTgyJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIF0sXG59O1xuY29uc3QgbGF5b3V0VGhlbWUgPSB7XG4gIGlkOiAnbGF5b3V0VGhlbWUnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXIuQmFja2dyb3VuZCcsXG4gIGRlZmF1bHRUaGVtZTogdGhlbWVDb25maWcubGF5b3V0LFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGM0Y2JyxcbiAgICAgIHRleHRDb2xvcjogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUxJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHRleHRDb2xvcjogJyMzMjMyMzInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI0Y5RjlGOScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGOUY5JyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAndGhlbWUzJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ViZWJlYicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlYmViJyxcbiAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIF0sXG59O1xuY29uc3QgY3VzdG9taXplZFRoZW1lcyA9IHtcbiAgY2hhbmdlVGhlbWVzLFxuICB0b3BiYXJUaGVtZSxcbiAgc2lkZWJhclRoZW1lLFxuICBsYXlvdXRUaGVtZSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRoZW1lKGF0dHJpYnV0ZSwgc2VsZWN0ZWRUaGVtZW5hbWUpIHtcbiAgbGV0IHNlbGVjZXRlZFRoZW1lID0ge307XG4gIGN1c3RvbWl6ZWRUaGVtZXNbYXR0cmlidXRlXS5vcHRpb25zLmZvckVhY2godGhlbWUgPT4ge1xuICAgIGlmICh0aGVtZS50aGVtZU5hbWUgPT09IHNlbGVjdGVkVGhlbWVuYW1lKSB7XG4gICAgICBzZWxlY2V0ZWRUaGVtZSA9IHRoZW1lO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY2V0ZWRUaGVtZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWl6ZWRUaGVtZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5sZXQgZGlyZWN0aW9uID0gJ2x0cic7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5nZXRBdHRyaWJ1dGUoJ2RpcicpO1xufVxuY29uc3Qgd2l0aERpcmVjdGlvbiA9IENvbXBvbmVudCA9PiBwcm9wcyA9PiB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gZGF0YS1ydGw9e2RpcmVjdGlvbn0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlyZWN0aW9uO1xuZXhwb3J0IHsgZGlyZWN0aW9uIH07XG4iLCIvLyBUcmFuc2l0aW9uXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbih0aW1pbmcgPSAwLjMpIHtcbiAgcmV0dXJuIGBcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgYDtcbn1cblxuLy8gQm9yZGVyIFJhZGl1c1xuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclJhZGl1cyhyYWRpdXMgPSAwKSB7XG4gIHJldHVybiBgXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICR7cmFkaXVzfTtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHtyYWRpdXN9O1xuICAgICAgLW1zLXRyYW5zaXRpb246ICR7cmFkaXVzfTtcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6ICR7cmFkaXVzfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzfTtcbiAgYDtcbn1cblxuLy8gQm94IFNoYWRvd1xuZXhwb3J0IGZ1bmN0aW9uIGJveFNoYWRvdyhzaGFkb3cgPSAnbm9uZScpIHtcbiAgcmV0dXJuIGBcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHtzaGFkb3d9O1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAke3NoYWRvd307XG4gICAgICBib3gtc2hhZG93OiAke3NoYWRvd307XG4gIGA7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Vmlldyh3aWR0aCkge1xuICBsZXQgbmV3VmlldyA9ICdNb2JpbGVWaWV3JztcbiAgaWYgKHdpZHRoID4gMTIyMCkge1xuICAgIG5ld1ZpZXcgPSAnRGVza3RvcFZpZXcnO1xuICB9IGVsc2UgaWYgKHdpZHRoID4gNzY3KSB7XG4gICAgbmV3VmlldyA9ICdUYWJWaWV3JztcbiAgfVxuICByZXR1cm4gbmV3Vmlldztcbn1cbmNvbnN0IGFjdGlvbnMgPSB7XG4gIENPTExQU0VfQ0hBTkdFOiAnQ09MTFBTRV9DSEFOR0UnLFxuICBDT0xMUFNFX09QRU5fRFJBV0VSOiAnQ09MTFBTRV9PUEVOX0RSQVdFUicsXG4gIENIQU5HRV9PUEVOX0tFWVM6ICdDSEFOR0VfT1BFTl9LRVlTJyxcbiAgVE9HR0xFX0FMTDogJ1RPR0dMRV9BTEwnLFxuICBDSEFOR0VfQ1VSUkVOVDogJ0NIQU5HRV9DVVJSRU5UJyxcbiAgQ0xFQVJfTUVOVTogJ0NMRUFSX01FTlUnLFxuICB0b2dnbGVDb2xsYXBzZWQ6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5DT0xMUFNFX0NIQU5HRSxcbiAgfSksXG4gIHRvZ2dsZUFsbDogKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gZ2V0Vmlldyh3aWR0aCk7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdmlldyAhPT0gJ0Rlc2t0b3BWaWV3JztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYWN0aW9ucy5UT0dHTEVfQUxMLFxuICAgICAgY29sbGFwc2VkLFxuICAgICAgdmlldyxcbiAgICAgIGhlaWdodCxcbiAgICB9O1xuICB9LFxuICB0b2dnbGVPcGVuRHJhd2VyOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuQ09MTFBTRV9PUEVOX0RSQVdFUixcbiAgfSksXG4gIGNoYW5nZU9wZW5LZXlzOiBvcGVuS2V5cyA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuQ0hBTkdFX09QRU5fS0VZUyxcbiAgICBvcGVuS2V5cyxcbiAgfSksXG4gIGNoYW5nZUN1cnJlbnQ6IGN1cnJlbnQgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9DVVJSRU5ULFxuICAgIGN1cnJlbnQsXG4gIH0pLFxuICBjbGVhck1lbnU6ICgpID0+ICh7IHR5cGU6IGFjdGlvbnMuQ0xFQVJfTUVOVSB9KSxcbn07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuIiwiY29uc3QgYWN0aW9ucyA9IHtcbiAgSU5JVF9EQVRBOiAnRUNPTU1FUkNFX0lOSVRfREFUQScsXG4gIElOSVRfREFUQV9TQUdBOiAnRUNPTU1FUkNFX0lOSVRfREFUQV9TQUdBJyxcbiAgVVBEQVRFX0RBVEE6ICdFQ09NTUVSQ0VfVVBEQVRFX0RBVEEnLFxuICBVUERBVEVfREFUQV9TQUdBOiAnRUNPTU1FUkNFX1VQREFURV9EQVRBX1NBR0EnLFxuICBDSEFOR0VfVklFVzogJ0VDT01NRVJDRV9DSEFOR0VfVklFVycsXG4gIFZJRVdfVE9QQkFSX0NBUlQ6ICdFQ09NTUVSQ0VfVklFV19UT1BCQVJfQ0FSVCcsXG4gIGluaXREYXRhOiAoKSA9PiAoeyB0eXBlOiBhY3Rpb25zLklOSVRfREFUQV9TQUdBIH0pLFxuICBjaGFuZ2VWaWV3OiB2aWV3ID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfVklFVyxcbiAgICB2aWV3LFxuICB9KSxcbiAgY2hhbmdlVmlld1RvcGJhckNhcnQ6IHZpZXdUb3BiYXJDYXJ0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYWN0aW9ucy5WSUVXX1RPUEJBUl9DQVJULFxuICAgICAgdmlld1RvcGJhckNhcnQsXG4gICAgfTtcbiAgfSxcbiAgY2hhbmdlUHJvZHVjdFF1YW50aXR5OiBwcm9kdWN0UXVhbnRpdHkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBnZXRTdGF0ZSgpLkVjb21tZXJjZTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfREFUQV9TQUdBLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgcHJvZHVjdFF1YW50aXR5LFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcbiAgYWRkVG9DYXJ0OiBwcm9kdWN0ID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgeyBwcm9kdWN0cywgcHJvZHVjdFF1YW50aXR5IH0gPSBnZXRTdGF0ZSgpLkVjb21tZXJjZTtcbiAgICAgIGNvbnN0IG9iamVjdElEID0gcHJvZHVjdC5vYmplY3RJRDtcbiAgICAgIHByb2R1Y3RRdWFudGl0eS5wdXNoKHsgb2JqZWN0SUQsIHF1YW50aXR5OiAxIH0pO1xuICAgICAgcHJvZHVjdHNbb2JqZWN0SURdID0gcHJvZHVjdDtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfREFUQV9TQUdBLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgcHJvZHVjdFF1YW50aXR5LFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudExhbmd1YWdlIH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgQ0hBTkdFX0xBTkdVQUdFOiAnQ0hBTkdFX0xBTkdVQUdFJyxcbiAgQUNUSVZBVEVfTEFOR19NT0RBTDogJ0FDVElWQVRFX0xBTkdfTU9EQUwnLFxuICBzd2l0Y2hBY3RpdmF0aW9uOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuQUNUSVZBVEVfTEFOR19NT0RBTCxcbiAgfSksXG4gIGNoYW5nZUxhbmd1YWdlOiBsYW5ndWFnZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvbnMuQ0hBTkdFX0xBTkdVQUdFLFxuICAgICAgbGFuZ3VhZ2U6IGdldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZSksXG4gICAgfTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuIiwiaW1wb3J0IGxhbmd1YWdlIGZyb20gJ0Bpc28vY29uZmlnL2xhbmd1YWdlLmNvbmZpZyc7XG5cbmltcG9ydCBlbmdsaXNoTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy91ay5zdmcnO1xuaW1wb3J0IGNoaW5lc2VMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2NoaW5hLnN2Zyc7XG5pbXBvcnQgc3BhbmlzaExhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvc3BhaW4uc3ZnJztcbmltcG9ydCBmcmVuY2hMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2ZyYW5jZS5zdmcnO1xuaW1wb3J0IGl0YWxpYW5MYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL2l0YWx5LnN2Zyc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgZGVmYXVsdExhbmd1YWdlOiBsYW5ndWFnZSxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdlbmdsaXNoJyxcbiAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICAgIHRleHQ6ICdFbmdsaXNoJyxcbiAgICAgIGljb246IGVuZ2xpc2hMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2NoaW5lc2UnLFxuICAgICAgbG9jYWxlOiAnemgnLFxuICAgICAgdGV4dDogJ0NoaW5lc2UnLFxuICAgICAgaWNvbjogY2hpbmVzZUxhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnc3BhbmlzaCcsXG4gICAgICBsb2NhbGU6ICdlcycsXG4gICAgICB0ZXh0OiAnU3BhbmlzaCcsXG4gICAgICBpY29uOiBzcGFuaXNoTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdmcmVuY2gnLFxuICAgICAgbG9jYWxlOiAnZnInLFxuICAgICAgdGV4dDogJ0ZyZW5jaCcsXG4gICAgICBpY29uOiBmcmVuY2hMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ2l0YWxpYW4nLFxuICAgICAgbG9jYWxlOiAnaXQnLFxuICAgICAgdGV4dDogJ0l0YWxpYW4nLFxuICAgICAgaWNvbjogaXRhbGlhbkxhbmcsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50TGFuZ3VhZ2UobGFuZykge1xuICBsZXQgc2VsZWNldGVkTGFuZ3VhZ2UgPSBjb25maWcub3B0aW9uc1swXTtcbiAgY29uZmlnLm9wdGlvbnMuZm9yRWFjaChsYW5ndWFnZSA9PiB7XG4gICAgaWYgKGxhbmd1YWdlLmxhbmd1YWdlSWQgPT09IGxhbmcpIHtcbiAgICAgIHNlbGVjZXRlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlbGVjZXRlZExhbmd1YWdlO1xufVxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudFRoZW1lIH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgQ0hBTkdFX1RIRU1FOiAnQ0hBTkdFX1RIRU1FJyxcbiAgU1dJVENIX0FDVElWQVRJT046ICdTV0lUQ0hfQUNUSVZBVElPTicsXG4gIHN3aXRjaEFjdGl2YXRpb246ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5TV0lUQ0hfQUNUSVZBVElPTixcbiAgfSksXG4gIGNoYW5nZVRoZW1lOiAoYXR0cmlidXRlLCB0aGVtZU5hbWUpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IGdldEN1cnJlbnRUaGVtZShhdHRyaWJ1dGUsIHRoZW1lTmFtZSk7XG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xheW91dFRoZW1lJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgJ2lzb21vcnBoaWNDb250ZW50J1xuICAgICAgKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9USEVNRSxcbiAgICAgIGF0dHJpYnV0ZSxcbiAgICAgIHRoZW1lLFxuICAgIH07XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSAnQGlzby9jb25maWcvdGhlbWUvdGhlbWUuY29uZmlnJztcbmNvbnN0IGNoYW5nZVRoZW1lcyA9IHtcbiAgaWQ6ICdjaGFuZ2VUaGVtZXMnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnRoZW1lLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2N1c3RvbVRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IHRvcGJhclRoZW1lID0ge1xuICBpZDogJ3RvcGJhclRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLlRvcGJhcicsXG4gIGRlZmF1bHRUaGVtZTogdGhlbWVDb25maWcudG9wYmFyLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNlMDM2NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UwMzY0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyM2NTM0ZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY1MzRmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyM0NDgyRkYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0ODJGRicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNCcsXG4gICAgICBidXR0b25Db2xvcjogJyM0MjJlNjInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyMmU2MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNScsXG4gICAgICBidXR0b25Db2xvcjogJyMyMjE0NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMTQ0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNicsXG4gICAgICBidXR0b25Db2xvcjogJyM0NjcwYTInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ2NzBhMicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNycsXG4gICAgICBidXR0b25Db2xvcjogJyM0OTQ5ODInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ5NDk4MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IHNpZGViYXJUaGVtZSA9IHtcbiAgaWQ6ICdzaWRlYmFyVGhlbWUnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXIuU2lkZWJhcicsXG4gIGRlZmF1bHRUaGVtZTogdGhlbWVDb25maWcuc2lkZWJhcixcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyMzMjMzMzInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0Q29sb3I6ICcjNzg4MTk1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNlMDM2NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UwMzY0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyM2NTM0ZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY1MzRmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyM0NDgyRkYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0ODJGRicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNCcsXG4gICAgICBidXR0b25Db2xvcjogJyM0MjJlNjInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyMmU2MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNScsXG4gICAgICBidXR0b25Db2xvcjogJyMyMjE0NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMTQ0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNicsXG4gICAgICBidXR0b25Db2xvcjogJyM0NjcwYTInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ2NzBhMicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNycsXG4gICAgICBidXR0b25Db2xvcjogJyM0OTQ5ODInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ5NDk4MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IGxheW91dFRoZW1lID0ge1xuICBpZDogJ2xheW91dFRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLkJhY2tncm91bmQnLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLmxheW91dCxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YxRjNGNicsXG4gICAgICB0ZXh0Q29sb3I6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMjMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyNGOUY5RjknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RjlGOScsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyNlYmViZWInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZWJlYicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IGN1c3RvbWl6ZWRUaGVtZXMgPSB7XG4gIGNoYW5nZVRoZW1lcyxcbiAgdG9wYmFyVGhlbWUsXG4gIHNpZGViYXJUaGVtZSxcbiAgbGF5b3V0VGhlbWUsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUaGVtZShhdHRyaWJ1dGUsIHNlbGVjdGVkVGhlbWVuYW1lKSB7XG4gIGxldCBzZWxlY2V0ZWRUaGVtZSA9IHt9O1xuICBjdXN0b21pemVkVGhlbWVzW2F0dHJpYnV0ZV0ub3B0aW9ucy5mb3JFYWNoKHRoZW1lID0+IHtcbiAgICBpZiAodGhlbWUudGhlbWVOYW1lID09PSBzZWxlY3RlZFRoZW1lbmFtZSkge1xuICAgICAgc2VsZWNldGVkVGhlbWUgPSB0aGVtZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VsZWNldGVkVGhlbWU7XG59XG5leHBvcnQgZGVmYXVsdCBjdXN0b21pemVkVGhlbWVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vYnV0dG9uL3N0eWxlL2Nzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi90b29sdGlwL3N0eWxlL2Nzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vYnV0dG9uL3N0eWxlL2Nzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiY29uc3QgYWN0aW9ucyA9IHtcbiAgTE9HSU5fUkVRVUVTVF9TVEFSVDogJ0xPR0lOX1JFUVVFU1RfU1RBUlQnLFxuICBKV1RfTE9HSU5fUkVRVUVTVF9TVEFSVDogJ0pXVF9MT0dJTl9SRVFVRVNUX1NUQVJUJyxcbiAgTE9HSU5fUkVRVUVTVF9TVUNDRVNTOiAnTE9HSU5fUkVRVUVTVF9TVUNDRVNTJyxcbiAgTE9HSU5fUkVRVUVTVF9GQUlMVVJFOiAnTE9HSU5fUkVRVUVTVF9GQUlMVVJFJyxcbiAgTE9HT1VUX1JFUVVFU1RfU1RBUlQ6ICdMT0dPVVRfUkVRVUVTVF9TVEFSVCcsXG4gIExPR09VVF9SRVFVRVNUX1NVQ0NFU1M6ICdMT0dPVVRfUkVRVUVTVF9TVUNDRVNTJyxcbiAgTE9HT1VUX1JFUVVFU1RfRkFJTFVSRTogJ0xPR09VVF9SRVFVRVNUX0ZBSUxVUkUnLFxuXG4gIGxvZ2luOiBjcmVkZW50aWFscyA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HSU5fUkVRVUVTVF9TVEFSVCxcbiAgICBwYXlsb2FkOiBjcmVkZW50aWFscyxcbiAgfSksXG4gIGp3dExvZ2luOiAoaGlzdG9yeSwgdXNlckluZm8pID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5KV1RfTE9HSU5fUkVRVUVTVF9TVEFSVCxcbiAgICBwYXlsb2FkOiB7IGhpc3RvcnksIHVzZXJJbmZvIH0sXG4gIH0pLFxuICBsb2dpblJlcXVlc3RTdWNjZXNzOiBjcmVkZW50aWFscyA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HSU5fUkVRVUVTVF9TVUNDRVNTLFxuICAgIHBheWxvYWQ6IGNyZWRlbnRpYWxzLFxuICB9KSxcbiAgbG9naW5SZXF1ZXN0RmFpbHVyZTogZXJyb3IgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG4gIGxvZ291dDogKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR09VVF9SRVFVRVNUX1NUQVJULFxuICB9KSxcbiAgbG9nb3V0UmVxdWVzdFN1Y2Nlc3M6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9TVUNDRVNTLFxuICB9KSxcbiAgbG9nb3V0UmVxdWVzdEZhaWx1cmU6IGVycm9yID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9GQUlMVVJFLFxuICAgIHBheWxvYWQ6IGVycm9yLFxuICB9KSxcbn07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcbiAgICAgIGV4cGlyZXM6IDEsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBrZXkgPT4ge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgY29va2llLnJlbW92ZShrZXksIHtcbiAgICAgIGV4cGlyZXM6IDEsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlclxuICAgID8gZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KVxuICAgIDogZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSk7XG59O1xuXG5jb25zdCBnZXRDb29raWVGcm9tQnJvd3NlciA9IGtleSA9PiB7XG4gIHJldHVybiBjb29raWUuZ2V0KGtleSk7XG59O1xuXG5jb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XG4gIGlmICghcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCByYXdDb29raWUgPSByZXEuaGVhZGVycy5jb29raWVcbiAgICAuc3BsaXQoJzsnKVxuICAgIC5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcbiAgaWYgKCFyYXdDb29raWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiByYXdDb29raWUuc3BsaXQoJz0nKVsxXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh7IHRva2VuIH0pID0+IHtcbiAgY29va2llLnNldCgndG9rZW4nLCB0b2tlbiwgeyBleHBpcmVzOiAxIH0pO1xuICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBjdHggPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSBuZXh0Q29va2llKGN0eCk7XG5cbiAgLypcbiAgICogSWYgYGN0eC5yZXFgIGlzIGF2YWlsYWJsZSBpdCBtZWFucyB3ZSBhcmUgb24gdGhlIHNlcnZlci5cbiAgICogQWRkaXRpb25hbGx5IGlmIHRoZXJlJ3Mgbm8gdG9rZW4gaXQgbWVhbnMgdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbi5cbiAgICovXG4gIGlmIChjdHgucmVxICYmICF0b2tlbikge1xuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogJy9zaWduaW4nIH0pO1xuICAgIGN0eC5yZXMuZW5kKCk7XG4gIH1cblxuICAvLyBXZSBhbHJlYWR5IGNoZWNrZWQgZm9yIHNlcnZlci4gVGhpcyBzaG91bGQgb25seSBoYXBwZW4gb24gY2xpZW50LlxuICBpZiAoIXRva2VuKSB7XG4gICAgUm91dGVyLnB1c2goJy9zaWduaW4nKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XG4gIC8vIHRvIHN1cHBvcnQgbG9nZ2luZyBvdXQgZnJvbSBhbGwgd2luZG93c1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ291dCcsIERhdGUubm93KCkpO1xuICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhBdXRoU3luYyA9IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCBXcmFwcGVyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHN5bmNMb2dvdXQgPSBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dCBmcm9tIHN0b3JhZ2UhJyk7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHN5bmNMb2dvdXQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHN5bmNMb2dvdXQpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvZ291dCcpO1xuICAgICAgfTtcbiAgICB9LCBbbnVsbF0pO1xuXG4gICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gIH07XG5cbiAgV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aChjdHgpO1xuXG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPVxuICAgICAgV3JhcHBlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgIChhd2FpdCBXcmFwcGVkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpKTtcblxuICAgIHJldHVybiB7IC4uLmNvbXBvbmVudFByb3BzLCB0b2tlbiB9O1xuICB9O1xuXG4gIHJldHVybiBXcmFwcGVyO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJ0Bpc28vY29udGFpbmVycy9UaGVtZVN3aXRjaGVyL1RoZW1lU3dpdGNoZXInO1xuaW1wb3J0IFRvcGJhciBmcm9tICcuLi9Ub3BiYXIvVG9wYmFyJztcbmltcG9ydCBzaXRlQ29uZmlnIGZyb20gJ0Bpc28vY29uZmlnL3NpdGUuY29uZmlnJztcbmltcG9ydCBBcHBIb2xkZXIgZnJvbSAnLi9EYXNoYm9hcmRMYXlvdXQuc3R5bGVzJztcblxuY29uc3QgeyBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxBcHBIb2xkZXI+XG4gICAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgPFRvcGJhciAvPlxuXG4gICAgICAgIDxMYXlvdXQgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIG92ZXJmbG93WDogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpc29Db250ZW50TWFpbkxheW91dFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzb21vcnBoaWNDb250ZW50XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNzBweCAwIDAnLFxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2YxZjNmNicsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPEZvb3RlclxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWRlZGVkJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NpdGVDb25maWcuZm9vdGVyVGV4dH1cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPFRoZW1lU3dpdGNoZXIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXBwSG9sZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcblxuY29uc3QgQXBwSG9sZGVyID0gc3R5bGVkLmRpdmBcbiAgLnRyaWdnZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIH1cblxuICAudHJpZ2dlcjpob3ZlciB7XG4gICAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgfVxuXG4gIC5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCAuYW50aWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkIC5uYXYtdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hbnQtbGF5b3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAke3BhbGV0dGUoJ3NlY29uZGFyeScsIDEpfTtcblxuICAgICYuaXNvQ29udGVudE1haW5MYXlvdXQge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pc29MYXlvdXRDb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAwKX07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmlzb21vcnBoaWNMYXlvdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgfVxuICB9XG5cbiAgLmFudC1sYXlvdXQtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBIb2xkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNsb25lIGZyb20gJ2Nsb25lJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBNZW51IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL21lbnUnO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9pbnRsTWVzc2FnZXMnO1xuXG5pbXBvcnQgYXBwQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2FwcC9hY3Rpb25zJztcbmltcG9ydCBMb2dvIGZyb20gJ0Bpc28vY29tcG9uZW50cy91dGlsaXR5L0xvZ28ubmV4dCc7XG5pbXBvcnQgU2lkZWJhcldyYXBwZXIgZnJvbSAnLi9TaWRlYmFyLnN0eWxlcyc7XG5pbXBvcnQgU2lkZWJhck1lbnUgZnJvbSAnLi9TaWRlYmFyTWVudSc7XG5pbXBvcnQgU0lERUJBUl9NRU5VX09QVElPTlMgZnJvbSAnLi9zaWRlYmFyLm5hdmlnYXRpb25zJztcblxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcbmNvbnN0IHtcbiAgdG9nZ2xlT3BlbkRyYXdlcixcbiAgY2hhbmdlT3BlbktleXMsXG4gIGNoYW5nZUN1cnJlbnQsXG4gIHRvZ2dsZUNvbGxhcHNlZCxcbn0gPSBhcHBBY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgdmlldyxcbiAgICBvcGVuS2V5cyxcbiAgICBjb2xsYXBzZWQsXG4gICAgb3BlbkRyYXdlcixcbiAgICBoZWlnaHQsXG4gICAgY3VycmVudCxcbiAgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLkFwcCk7XG4gIGNvbnN0IHsgc2lkZWJhclRoZW1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgZGlzcGF0Y2goY2hhbmdlQ3VycmVudChbZS5rZXldKSk7XG4gICAgaWYgKHZpZXcgPT09ICdNb2JpbGVWaWV3Jykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZCgpKTtcbiAgICAgICAgLy8gZGlzcGF0Y2godG9nZ2xlT3BlbkRyYXdlcigpKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG9uT3BlbkNoYW5nZShuZXdPcGVuS2V5cykge1xuICAgIGNvbnN0IGxhdGVzdE9wZW5LZXkgPSBuZXdPcGVuS2V5cy5maW5kKFxuICAgICAga2V5ID0+ICEob3BlbktleXMuaW5kZXhPZihrZXkpID4gLTEpXG4gICAgKTtcbiAgICBjb25zdCBsYXRlc3RDbG9zZUtleSA9IG9wZW5LZXlzLmZpbmQoXG4gICAgICBrZXkgPT4gIShuZXdPcGVuS2V5cy5pbmRleE9mKGtleSkgPiAtMSlcbiAgICApO1xuICAgIGxldCBuZXh0T3BlbktleXMgPSBbXTtcbiAgICBpZiAobGF0ZXN0T3BlbktleSkge1xuICAgICAgbmV4dE9wZW5LZXlzID0gZ2V0QW5jZXN0b3JLZXlzKGxhdGVzdE9wZW5LZXkpLmNvbmNhdChsYXRlc3RPcGVuS2V5KTtcbiAgICB9XG4gICAgaWYgKGxhdGVzdENsb3NlS2V5KSB7XG4gICAgICBuZXh0T3BlbktleXMgPSBnZXRBbmNlc3RvcktleXMobGF0ZXN0Q2xvc2VLZXkpO1xuICAgIH1cbiAgICBkaXNwYXRjaChjaGFuZ2VPcGVuS2V5cyhuZXh0T3BlbktleXMpKTtcbiAgfVxuICBjb25zdCBnZXRBbmNlc3RvcktleXMgPSBrZXkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgIHN1YjM6IFsnc3ViMiddLFxuICAgIH07XG4gICAgcmV0dXJuIG1hcFtrZXldIHx8IFtdO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gY29sbGFwc2VkICYmICFvcGVuRHJhd2VyO1xuICBjb25zdCBtb2RlID0gaXNDb2xsYXBzZWQgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2lubGluZSc7XG4gIGNvbnN0IHNjcm9sbGhlaWdodCA9IGhlaWdodDtcbiAgY29uc3Qgc3R5bGluZyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNpZGViYXJUaGVtZS5iYWNrZ3JvdW5kQ29sb3IsXG4gIH07XG4gIGNvbnN0IHN1Ym1lbnVTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxuICAgIGNvbG9yOiBzaWRlYmFyVGhlbWUudGV4dENvbG9yLFxuICB9O1xuICBjb25zdCBzdWJtZW51Q29sb3IgPSB7XG4gICAgY29sb3I6IHNpZGViYXJUaGVtZS50ZXh0Q29sb3IsXG4gIH07XG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoY29sbGFwc2VkICYmIG9wZW5EcmF3ZXIgPT09IGZhbHNlKSB7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVPcGVuRHJhd2VyKCkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAoY29sbGFwc2VkICYmIG9wZW5EcmF3ZXIgPT09IHRydWUpIHtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZU9wZW5EcmF3ZXIoKSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhcldyYXBwZXI+XG4gICAgICA8U2lkZXJcbiAgICAgICAgdHJpZ2dlcj17bnVsbH1cbiAgICAgICAgY29sbGFwc2libGU9e3RydWV9XG4gICAgICAgIGNvbGxhcHNlZD17aXNDb2xsYXBzZWR9XG4gICAgICAgIHdpZHRoPXsyNDB9XG4gICAgICAgIGNsYXNzTmFtZT1cImlzb21vcnBoaWNTaWRlYmFyXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICBzdHlsZT17c3R5bGluZ31cbiAgICAgID5cbiAgICAgICAgPExvZ28gY29sbGFwc2VkPXtpc0NvbGxhcHNlZH0gLz5cbiAgICAgICAgPFNjcm9sbGJhcnMgc3R5bGU9e3sgaGVpZ2h0OiBzY3JvbGxoZWlnaHQgLSA3MCB9fT5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgIG9wZW5LZXlzPXtpc0NvbGxhcHNlZCA/IFtdIDogb3BlbktleXN9XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e2N1cnJlbnR9XG4gICAgICAgICAgICBvbk9wZW5DaGFuZ2U9e29uT3BlbkNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzb0Rhc2hib2FyZE1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtTSURFQkFSX01FTlVfT1BUSU9OUy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgICAgPFNpZGViYXJNZW51XG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24ua2V5fVxuICAgICAgICAgICAgICAgIGl0ZW09e29wdGlvbn1cbiAgICAgICAgICAgICAgICBzdWJtZW51Q29sb3I9e3N1Ym1lbnVDb2xvcn1cbiAgICAgICAgICAgICAgICBzdWJtZW51U3R5bGU9e3N1Ym1lbnVTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICBrZXk9XCJzdWIxXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb01lbnVIb2xkZXJcIiBzdHlsZT17c3VibWVudUNvbG9yfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1hbmRyb2lkLW9wdGlvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWVudUxldmVsc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwXG4gICAgICAgICAgICAgICAga2V5PVwiZzFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5pdGVtMVwiIC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9XCIxXCI+XG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5vcHRpb24xXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXtzdWJtZW51U3R5bGV9IGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm9wdGlvbjJcIiAvPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwXG4gICAgICAgICAgICAgICAga2V5PVwiZzJcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5pdGVtMlwiIC8+fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9XCIzXCI+XG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5vcHRpb24zXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXtzdWJtZW51U3R5bGV9IGtleT1cIjRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm9wdGlvbjRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+XG4gICAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L1Njcm9sbGJhcnM+XG4gICAgICA8L1NpZGVyPlxuICAgIDwvU2lkZWJhcldyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiwgYm9yZGVyUmFkaXVzIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9zdHlsZV91dGlscyc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5cbmNvbnN0IFNpZGViYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmlzb21vcnBoaWNTaWRlYmFyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgMCl9O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBmbGV4OiAwIDAgMjgwcHg7XG4gICAgLnNjcm9sbGFyZWEge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIHdpZHRoOiAyNDBweCAhaW1wb3J0YW50O1xuICAgICAgZmxleDogMCAwIDI0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4OiAwIDAgMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuaXNvTG9nb1dyYXBwZXIge1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICR7Ym9yZGVyUmFkaXVzKCl9O1xuICAgICAgaDMge1xuICAgICAgICBhLFxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNil9O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkIHtcbiAgICAgIC5pc29Mb2dvV3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmlzb0Rhc2hib2FyZE1lbnUge1xuICAgICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIC5hbnQtbWVudS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5pc29NZW51SG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMCAwIDMwcHgnIDogJzAgMzBweCAwIDAnfTtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hbnRpY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICB9XG4gICAgICAubmF2LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICAgICAgICAuYW50aWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBpLFxuICAgICAgICAgIC5uYXYtdGV4dCA+IHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtc3VibWVudSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICAubmF2LXRleHQgPiBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hbnQtbWVudS1kYXJrIC5hbnQtbWVudS1pbmxpbmUuYW50LW1lbnUtc3ViIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNSl9O1xuICAgIH1cbiAgICAuYW50LW1lbnUtc3VibWVudS1pbmxpbmUsXG4gICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgPiAuYW50LW1lbnUtc3VibWVudS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbWVudS1zdWJtZW51LWFycm93IHtcbiAgICAgICAgICBsZWZ0OiAke3Byb3BzID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMjVweCcgOiAnYXV0bycpfTtcbiAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzI1cHgnKX07XG4gICAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHsnJyAvKiAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYxMjMnO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJb25pY29ucycgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE2cHgnIDogJ2F1dG8nKX07XG4gICAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzE2cHgnKX07XG4gICAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgICAgfSAqL307XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLmFudC1tZW51LXN1Ym1lbnUtYXJyb3cge1xuICAgICAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtaW5saW5lLFxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgICA+IGxpOm5vdCguYW50LW1lbnUtaXRlbS1ncm91cCkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzBweCAhaW1wb3J0YW50JyA6ICc3NHB4ICFpbXBvcnRhbnQnfTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNzRweCAhaW1wb3J0YW50JyA6ICcwcHggIWltcG9ydGFudCd9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1tZW51LWl0ZW0tZ3JvdXAge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAuYW50LW1lbnUtaXRlbS1ncm91cC10aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtbWVudS1pdGVtLWdyb3VwLWxpc3Qge1xuICAgICAgICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW50LW1lbnUtc3ViIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCB7XG4gICAgICAubmF2LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lID4ge1xuICAgICAgICAuYW50LW1lbnUtc3VibWVudS10aXRsZTphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xuICAgICAgICA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbWVudS1zdWIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLmFudC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZCA+IC5hbnQtbWVudS1pdGVtLFxuICAgIC5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkXG4gICAgICA+IC5hbnQtbWVudS1pdGVtLWdyb3VwXG4gICAgICA+IC5hbnQtbWVudS1pdGVtLWdyb3VwLWxpc3RcbiAgICAgID4gLmFudC1tZW51LWl0ZW0sXG4gICAgLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWQgPiAuYW50LW1lbnUtc3VibWVudSA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICAtby10ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgICAgIHBhZGRpbmc6IDAgMzJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihTaWRlYmFyV3JhcHBlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL21lbnUnO1xuaW1wb3J0IHNpdGVDb25maWcgZnJvbSAnQGlzby9jb25maWcvc2l0ZS5jb25maWcnO1xuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tICdAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9pbnRsTWVzc2FnZXMnO1xuXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyTWVudSh7XG4gIGl0ZW0sXG4gIHN1Ym1lbnVTdHlsZSxcbiAgc3VibWVudUNvbG9yLFxuICAuLi5yZXN0XG59KSB7XG4gIGNvbnN0IHsga2V5LCBsYWJlbCwgbGVmdEljb24sIGNoaWxkcmVuIH0gPSBpdGVtO1xuXG4gIGNvbnN0IHVybCA9IHNpdGVDb25maWcuZGFzaGJvYXJkO1xuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViTWVudVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb01lbnVIb2xkZXJcIiBzdHlsZT17c3VibWVudUNvbG9yfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17bGVmdEljb259IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPlxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPXtsYWJlbH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKHsga2V5LCBsYWJlbCwgd2l0aG91dERhc2hib2FyZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlua1RvID0gd2l0aG91dERhc2hib2FyZCA/IGAvJHtrZXl9YCA6IGAke3VybH0vJHtrZXl9YDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17c3VibWVudVN0eWxlfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmtUb30+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvTWVudUhvbGRlclwiIHN0eWxlPXtzdWJtZW51Q29sb3J9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD17bGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3ViTWVudT5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPE1lbnUuSXRlbSBrZXk9e2tleX0gey4uLnJlc3R9PlxuICAgICAgPExpbmsgaHJlZj17YCR7dXJsfS8ke2tleX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvTWVudUhvbGRlclwiIHN0eWxlPXtzdWJtZW51Q29sb3J9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17bGVmdEljb259IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9e2xhYmVsfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTWVudS5JdGVtPlxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAga2V5OiAnbWFpbGJveCcsXG4gICAgcGF0aDogJy9tYWlsYm94JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZW1haWwnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtbWFpbCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjaGF0JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2hhdCcsXG4gICAgbGVmdEljb246ICdpb24tY2hhdGJ1YmJsZXMnLFxuICB9LFxuICB7XG4gICAga2V5OiAnZWNvbW1lcmNlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZWNvbW1lcmNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1iYWcnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Nob3AnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2hvcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjYXJ0JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2hlY2tvdXQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY2hlY2tvdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2FyZCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5jYXJkcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdtYXBzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubWFwcycsXG4gICAgbGVmdEljb246ICdpb24tbWFwJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdnb29nbGVtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZ29vZ2xlTWFwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2xlYWZsZXRtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubGVhZmxldE1hcCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdteV9wcm9maWxlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucHJvZmlsZScsXG4gICAgbGVmdEljb246ICdpb24tcGVyc29uJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2ludm9pY2UnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5pbnZvaWNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1jbGlwYm9hcmQnLFxuICB9LFxuICB7XG4gICAga2V5OiAneW91dHViZVNlYXJjaCcsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnlvdXR1YmVTZWFyY2gnLFxuICAgIGxlZnRJY29uOiAnaW9uLXNvY2lhbC15b3V0dWJlJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2NhbGVuZGFyJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2FsZW5kYXInLFxuICAgIGxlZnRJY29uOiAnaW9uLWNhbGVuZGFyJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ25vdGVzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubm90ZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWlvcy1wYXBlcicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICd0b2RvJyxcbiAgICBsYWJlbDogJ3NpZGViYXIudG9kb3MnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZScsXG4gIH0sXG5cbiAge1xuICAgIGtleTogJ2NvbnRhY3RzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY29udGFjdHMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtcGVyc29uLWFkZCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdzaHVmZmxlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuc2h1ZmZsZScsXG4gICAgbGVmdEljb246ICdpb24tZ3JpZCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjaGFydHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5jaGFydHMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdnb29nbGVDaGFydCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5nb29nbGVDaGFydHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVlY2hhcnRzJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJlY2hhcnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlYWN0Q2hhcnQyJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJlYWN0Q2hhcnQyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlYWN0VHJlbmQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmVhY3RUcmVuZCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdGb3JtcycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1hbmRyb2lkLW1haWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ0lucHV0RmllbGQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZWRpdG9yJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmVkaXRvcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdGb3Jtc1dpdGhWYWxpZGF0aW9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zV2l0aFZhbGlkYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucHJvZ3Jlc3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYnV0dG9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmJ1dHRvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd0YWInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFiJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NoZWNrYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JhZGlvYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJhZGlvYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NlbGVjdGJveCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5zZWxlY3Rib3gnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAndHJhbnNmZXInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJhbnNmZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmF1dG9jb21wbGV0ZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBrZXk6ICdncmlkTGF5b3V0JyxcbiAgLy8gICBsYWJlbDogJ3NpZGViYXIuYm94T3B0aW9ucycsXG4gIC8vICAgbGVmdEljb246ICdpb24tY3ViZSdcbiAgLy8gfSxcbiAge1xuICAgIGtleTogJ3VpZWxlbWVudHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci51aUVsZW1lbnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1sZWFmJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9iYWRnZScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5iYWRnZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9jYXJkJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcmQyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX2Nhcm91c2VsJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNvcnVzZWwnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfY29sbGFwc2UnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY29sbGFwc2UnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfcG9wb3ZlcicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5wb3BvdmVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3Rvb2x0aXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudG9vbHRpcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF90YWcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3RpbWVsaW5lJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnRpbWVsaW5lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmRyb3Bkb3duJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BhZ2luYXRpb24nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucGFnaW5hdGlvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyYXRpbmcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmF0aW5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3RyZWUnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJlZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzd2lwZXJfc2xpZGVyJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnN3aXBlcnNsaWRlcicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdhZHZhbmNlZFVpZWxlbWVudHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5hZHZhbmNlZEVsZW1lbnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1mbGFzaCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVhY3REYXRlcycsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5yZWFjdERhdGVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NvZGVNaXJyb3InLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY29kZU1pcnJvcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd1cHB5JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnVwcHknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZHJvcHpvbmUnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZHJvcHpvbmUnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiAnZmVlZGJhY2snLFxuICAgIGxhYmVsOiAnc2lkZWJhci5mZWVkYmFjaycsXG4gICAgbGVmdEljb246ICdpb24tdGh1bWJzdXAnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2FsZXJ0JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmFsZXJ0JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ21vZGFsJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLm1vZGFsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ21lc3NhZ2UnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubWVzc2FnZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubm90aWZpY2F0aW9uJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BvcENvbmZpcm0nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucG9wQ29uZmlybScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzcGluJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnNwaW4nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiAndGFibGUnLFxuICAgIGxhYmVsOiAnc2lkZWJhci50YWJsZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtbWVudScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAndGFibGVfYW50JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmFudFRhYmxlcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdwYWdlcycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhZ2VzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1kb2N1bWVudC10ZXh0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICc0MDQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuNDA0JyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJzUwMCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci41MDAnLFxuICAgICAgICB3aXRob3V0RGFzaGJvYXJkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnc2lnbmluJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnNpZ25JbicsXG4gICAgICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzaWdudXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2lnblVwJyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZvcmdvdFB3JyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Jlc2V0cGFzc3dvcmQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmVzZXRQdycsXG4gICAgICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdnaXRodWJTZWFyY2gnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5naXRodWJTZWFyY2gnLFxuICAgIGxlZnRJY29uOiAnaW9uLXNvY2lhbC1naXRodWInLFxuICB9LFxuICB7XG4gICAga2V5OiAnYmxhbmtfcGFnZScsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmJsYW5rUGFnZScsXG4gICAgbGVmdEljb246ICdpb24tZG9jdW1lbnQnLFxuICB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgYXBwQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2FwcC9hY3Rpb25zJztcbmltcG9ydCBUb3BiYXJOb3RpZmljYXRpb24gZnJvbSAnLi9Ub3BiYXJOb3RpZmljYXRpb24nO1xuaW1wb3J0IFRvcGJhck1lc3NhZ2UgZnJvbSAnLi9Ub3BiYXJNZXNzYWdlJztcbmltcG9ydCBUb3BiYXJTZWFyY2ggZnJvbSAnLi9Ub3BiYXJTZWFyY2gnO1xuaW1wb3J0IFRvcGJhclVzZXIgZnJvbSAnLi9Ub3BiYXJVc2VyJztcbmltcG9ydCBUb3BiYXJBZGR0b0NhcnQgZnJvbSAnLi9Ub3BiYXJBZGRUb0NhcnQnO1xuaW1wb3J0IFRvcGJhcldyYXBwZXIgZnJvbSAnLi9Ub3BiYXIuc3R5bGVzJztcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcbmNvbnN0IHsgdG9nZ2xlQ29sbGFwc2VkIH0gPSBhcHBBY3Rpb25zO1xuXG5jbGFzcyBUb3BiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b2dnbGVDb2xsYXBzZWQsIHVybCwgY3VzdG9taXplZFRoZW1lLCBsb2NhbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5wcm9wcy5jb2xsYXBzZWQgJiYgIXRoaXMucHJvcHMub3BlbkRyYXdlcjtcbiAgICBjb25zdCBzdHlsaW5nID0ge1xuICAgICAgYmFja2dyb3VuZDogY3VzdG9taXplZFRoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogNzAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvcGJhcldyYXBwZXI+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzdHlsZT17c3R5bGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgY29sbGFwc2VkID8gJ2lzb21vcnBoaWNUb3BiYXIgY29sbGFwc2VkJyA6ICdpc29tb3JwaGljVG9wYmFyJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlZCA/ICd0cmlnZ2VyQnRuIG1lbnVDb2xsYXBzZWQnIDogJ3RyaWdnZXJCdG4gbWVudU9wZW4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpc29SaWdodFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlzb1NlYXJjaFwiPlxuICAgICAgICAgICAgICA8VG9wYmFyU2VhcmNoIGxvY2FsZT17bG9jYWxlfSAvPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdub3RpZmljYXRpb24nIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29Ob3RpZnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VG9wYmFyTm90aWZpY2F0aW9uIGxvY2FsZT17bG9jYWxlfSAvPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdtZXNzYWdlJyB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXNvTXNnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhck1lc3NhZ2UgbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06ICdhZGRUb0NhcnQnIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29DYXJ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhckFkZHRvQ2FydCB1cmw9e3VybH0gbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbTogJ3VzZXInIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpc29Vc2VyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvcGJhclVzZXIgbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgPC9Ub3BiYXJXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICAuLi5zdGF0ZS5BcHAsXG4gICAgbG9jYWxlOiBzdGF0ZS5MYW5ndWFnZVN3aXRjaGVyLmxhbmd1YWdlLmxvY2FsZSxcbiAgICBjdXN0b21pemVkVGhlbWU6IHN0YXRlLlRoZW1lU3dpdGNoZXIudG9wYmFyVGhlbWUsXG4gIH0pLFxuICB7IHRvZ2dsZUNvbGxhcHNlZCB9XG4pKFRvcGJhcik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHtcbiAgdHJhbnNpdGlvbixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG59IGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnQGlzby9saWIvaGVscGVycy9ydGwnO1xuXG5jb25zdCBUb3BiYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmlzb21vcnBoaWNUb3BiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCAyNjVweCAwIDMxcHgnIDogJzAgMzFweCAwIDI2NXB4J307XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJ1xuICAgICAgICAgID8gJzBweCAyNjBweCAwcHggMTVweCAhaW1wb3J0YW50J1xuICAgICAgICAgIDogJzBweCAxNXB4IDBweCAyNjBweCAhaW1wb3J0YW50J307XG4gICAgfVxuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgcGFkZGluZzogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCA4OXB4IDAgMzFweCcgOiAnMCAzMXB4IDAgODlweCd9O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnXG4gICAgICAgICAgICA/ICcwcHggMTVweCAhaW1wb3J0YW50J1xuICAgICAgICAgICAgOiAnMHB4IDE1cHggIWltcG9ydGFudCd9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pc29MZWZ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIG1hcmdpbjogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAyMHB4JyA6ICcwIDIwcHggMCAwJ307XG4gICAgICB9XG5cbiAgICAgIC50cmlnZ2VyQnRuIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnXFxmMjBlJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ0lvbmljb25zJztcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlzb1JpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICczNXB4JyA6ICcwJyl9O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwJyA6ICczNXB4Jyl9O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzI1cHgnIDogJzAnKX07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMjVweCd9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pc29JY29uV3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdzZWNvbmRhcnknLCAxKX07XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICAgICAgbGVmdDogJHtwcm9wcyA9PlxuICAgICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnaW5oZXJpdCcgOiAnMTBweCd9O1xuICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzEwcHgnIDogJ2luaGVyaXQnfTtcbiAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29NYWlsIHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAwKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29Ob3RpZnkge1xuICAgICAgICAgIC5pc29JY29uV3JhcHBlciB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuaXNvTXNnIHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAxKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29DYXJ0IHtcbiAgICAgICAgICAuaXNvSWNvbldyYXBwZXIge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnY29sb3InLCAyKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pc29Vc2VyIHtcbiAgICAgICAgICAuaXNvSW1nV3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDkpfTtcbiAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyQWN0aXZpdHkge1xuICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdjb2xvcicsIDMpfTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1MCUnKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb1VzZXJEcm9wZG93biB7XG4gICAgLmFudC1wb3BvdmVyLWlubmVyIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgLmlzb1VzZXJEcm9wZG93bkNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgLmlzb0JvcmRlclJhZGl1cyg1cHgpO1xuICAgICAgICAgICR7Ym9yZGVyUmFkaXVzKCc1cHgnKX07XG4gICAgICAgICAgLyogJHtib3hTaGFkb3coJzAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjIpJyl9OyAqL1xuICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgIC5pc29Ecm9wZG93bkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnc2Vjb25kYXJ5JywgNil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC8vIERyb3Bkb3duICovXG4gIC5hbnQtcG9wb3ZlciB7XG4gICAgLmFudC1wb3BvdmVyLWlubmVyIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAke2JvcmRlclJhZGl1cygnNXB4Jyl9O1xuICAgICAgICAgIC8qICR7Ym94U2hhZG93KCcwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4yKScpfTsgKi9cbiAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICB3aWR0aDogMzEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG5cbiAgICAgICAgICAgIC5pc29Ecm9wZG93bkxpc3RJdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaXNvTGlzdEhlYWQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmlzb0RhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAxKX07XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXNvVmlld0FsbEJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDIpfTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzb0Ryb3Bkb3duRm9vdGVyTGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDEpfTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53aXRoSW1nIHtcbiAgICAgICAgICAgIC5pc29Ecm9wZG93bkxpc3RJdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgICAgICAuaXNvSW1nV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA5KX07XG4gICAgICAgICAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pc29MaXN0Q29udGVudCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgLmlzb0xpc3RIZWFkIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXNvRGF0ZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAxKX07XG4gICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYudG9wYmFyTWFpbCB7XG4gICAgICAuYW50LXBvcG92ZXItaW5uZXIge1xuICAgICAgICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxOXB4KSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMTcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50b3BiYXJNZXNzYWdlIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lciB7XG4gICAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAuaXNvRHJvcGRvd25Db250ZW50IHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC02OXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYudG9wYmFyTm90aWZpY2F0aW9uIHtcbiAgICAgIC5hbnQtcG9wb3Zlci1pbm5lciB7XG4gICAgICAgIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAuaXNvRHJvcGRvd25Db250ZW50IHtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC0xMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnRvcGJhckFkZHRvQ2FydCB7XG4gICAgICAuYW50LXBvcG92ZXItaW5uZXIge1xuICAgICAgICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLmlzb0Ryb3Bkb3duQ29udGVudCB7XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtNTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzb0Ryb3Bkb3duQm9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNil9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJXcmFwcGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3BvcG92ZXInO1xuaW1wb3J0IFNpbmdsZUNhcnQgZnJvbSAnQGlzby9jb21wb25lbnRzL0NhcnQvU2luZ2xlQ2FydE1vZGFsJztcbmltcG9ydCBlY29tbWVyY2VBY3Rpb24gZnJvbSAnQGlzby9yZWR1eC9lY29tbWVyY2UvYWN0aW9ucyc7XG5pbXBvcnQgVG9wYmFyRHJvcGRvd25XcmFwcGVyIGZyb20gJy4vVG9wYmFyRHJvcGRvd24uc3R5bGVzJztcblxuY29uc3QgeyBjaGFuZ2VWaWV3VG9wYmFyQ2FydCwgY2hhbmdlUHJvZHVjdFF1YW50aXR5IH0gPSBlY29tbWVyY2VBY3Rpb247XG5sZXQgdG90YWxQcmljZTtcbmNsYXNzIFRvcGJhckFkZHRvQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyUHJvZHVjdHMgPSB0aGlzLnJlbmRlclByb2R1Y3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VRdWFudGl0eSA9IHRoaXMuY2hhbmdlUXVhbnRpdHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbmNlbFF1YW50aXR5ID0gdGhpcy5jYW5jZWxRdWFudGl0eS5iaW5kKHRoaXMpO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VWaWV3VG9wYmFyQ2FydChmYWxzZSk7XG4gIH1cbiAgaGFuZGxlVmlzaWJsZUNoYW5nZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVZpZXdUb3BiYXJDYXJ0KCF0aGlzLnByb3BzLnZpZXdUb3BiYXJDYXJ0KTtcbiAgfVxuICByZW5kZXJQcm9kdWN0cygpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RRdWFudGl0eSwgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdG90YWxQcmljZSA9IDA7XG4gICAgaWYgKCFwcm9kdWN0UXVhbnRpdHkgfHwgcHJvZHVjdFF1YW50aXR5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ob0l0ZW1Nc2dcIj5cbiAgICAgICAgICA8c3Bhbj5ObyBpdGVtIGZvdW5kPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0UXVhbnRpdHkubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgdG90YWxQcmljZSArPSBwcm9kdWN0LnF1YW50aXR5ICogcHJvZHVjdHNbcHJvZHVjdC5vYmplY3RJRF0ucHJpY2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2luZ2xlQ2FydFxuICAgICAgICAgIGtleT17cHJvZHVjdC5vYmplY3RJRH1cbiAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICBjaGFuZ2VRdWFudGl0eT17dGhpcy5jaGFuZ2VRdWFudGl0eX1cbiAgICAgICAgICBjYW5jZWxRdWFudGl0eT17dGhpcy5jYW5jZWxRdWFudGl0eX1cbiAgICAgICAgICB7Li4ucHJvZHVjdHNbcHJvZHVjdC5vYmplY3RJRF19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVF1YW50aXR5KG9iamVjdElELCBxdWFudGl0eSkge1xuICAgIGNvbnN0IHsgcHJvZHVjdFF1YW50aXR5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld1Byb2R1Y3RRdWFudGl0eSA9IFtdO1xuICAgIHByb2R1Y3RRdWFudGl0eS5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgaWYgKHByb2R1Y3Qub2JqZWN0SUQgIT09IG9iamVjdElEKSB7XG4gICAgICAgIG5ld1Byb2R1Y3RRdWFudGl0eS5wdXNoKHByb2R1Y3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UHJvZHVjdFF1YW50aXR5LnB1c2goe1xuICAgICAgICAgIG9iamVjdElELFxuICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVByb2R1Y3RRdWFudGl0eShuZXdQcm9kdWN0UXVhbnRpdHkpO1xuICB9XG4gIGNhbmNlbFF1YW50aXR5KG9iamVjdElEKSB7XG4gICAgY29uc3QgeyBwcm9kdWN0UXVhbnRpdHkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3UHJvZHVjdFF1YW50aXR5ID0gW107XG4gICAgcHJvZHVjdFF1YW50aXR5LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBpZiAocHJvZHVjdC5vYmplY3RJRCAhPT0gb2JqZWN0SUQpIHtcbiAgICAgICAgbmV3UHJvZHVjdFF1YW50aXR5LnB1c2gocHJvZHVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VQcm9kdWN0UXVhbnRpdHkobmV3UHJvZHVjdFF1YW50aXR5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICBwcm9kdWN0UXVhbnRpdHksXG4gICAgICB2aWV3VG9wYmFyQ2FydCxcbiAgICAgIGN1c3RvbWl6ZWRUaGVtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgPFRvcGJhckRyb3Bkb3duV3JhcHBlciBjbGFzc05hbWU9XCJ0b3BiYXJBZGR0b0NhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkhlYWRlclwiPlxuICAgICAgICAgIDxoMz5DYXJ0PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25Cb2R5IGlzb0NhcnRJdGVtc1dyYXBwZXJcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9kdWN0cygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkZvb3RlckxpbmtzXCIgb25DbGljaz17dGhpcy5oaWRlfT5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZC9jYXJ0YH0+XG4gICAgICAgICAgICA8YT5WaWV3IENhcnQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVG90YWwgUHJpY2U6IDxzcGFuPiR7dG90YWxQcmljZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3ZpZXdUb3BiYXJDYXJ0fVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSWNvbldyYXBwZXJcIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWFuZHJvaWQtY2FydFwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY3VzdG9taXplZFRoZW1lLnRleHRDb2xvciB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Byb2R1Y3RRdWFudGl0eS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj57cHJvZHVjdFF1YW50aXR5Lmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUuRWNvbW1lcmNlLFxuICAgIGN1c3RvbWl6ZWRUaGVtZTogc3RhdGUuVGhlbWVTd2l0Y2hlci50b3BiYXJUaGVtZSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge1xuICAgIGNoYW5nZVZpZXdUb3BiYXJDYXJ0LFxuICAgIGNoYW5nZVByb2R1Y3RRdWFudGl0eSxcbiAgfVxuKShUb3BiYXJBZGR0b0NhcnQpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRoZW1lJztcbmltcG9ydCB7XG4gIHRyYW5zaXRpb24sXG4gIGJvcmRlclJhZGl1cyxcbiAgYm94U2hhZG93LFxufSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcblxuY29uc3QgVG9wYmFyRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAtOHB4IC0xNnB4O1xuICB3aWR0aDogMzYwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAke2JvcmRlclJhZGl1cygnNXB4Jyl9O1xuICAke2JveFNoYWRvdygnMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMiknKX07XG4gICR7dHJhbnNpdGlvbigpfTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICB9XG5cbiAgLmlzb0Ryb3Bkb3duSGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaXNvRHJvcGRvd25Cb2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG5cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAuaXNvRHJvcGRvd25MaXN0SXRlbSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAyKX07XG4gICAgICAke3RyYW5zaXRpb24oKX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDMpfTtcbiAgICAgIH1cblxuICAgICAgLmlzb0xpc3RIZWFkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMCl9O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMil9O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlzb0RhdGUge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDEpfTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlzb1ZpZXdBbGxCdG4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgIH1cbiAgfVxuXG4gIC5pc29Ecm9wZG93bkZvb3RlckxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4O1xuXG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDApfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlKCdib3JkZXInLCAxKX07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAwKX07XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cbiAgfVxuXG4gICYud2l0aEltZyB7XG4gICAgLmlzb0Ryb3Bkb3duTGlzdEl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC5pc29JbWdXcmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgMCAwIDE1cHgnIDogJzAgMTVweCAwIDAnfTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDkpfTtcbiAgICAgICAgJHtib3JkZXJSYWRpdXMoJzUwJScpfTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXNvTGlzdENvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuaXNvTGlzdEhlYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAxNXB4JyA6ICcwIDE1cHggMCAwJ307XG4gICAgICAgIH1cblxuICAgICAgICAuaXNvRGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDEpfTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudG9wYmFyTWFpbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTlweCkge1xuICAgICAgcmlnaHQ6IC0xNzBweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhck1lc3NhZ2Uge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHJpZ2h0OiAtNjlweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhck5vdGlmaWNhdGlvbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgcmlnaHQ6IC0xMjBweDtcbiAgICB9XG4gIH1cblxuICAmLnRvcGJhckFkZHRvQ2FydCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xuICAgICAgcmlnaHQ6IC01NXB4O1xuICAgIH1cblxuICAgIC5pc29Ecm9wZG93bkhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5pc29Ecm9wZG93bkJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLmlzb05vSXRlbU1zZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMSl9O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmlzb1VzZXJEcm9wZG93biB7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgJHtib3JkZXJSYWRpdXMoJzVweCcpfTtcbiAgICAke2JveFNoYWRvdygnMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMiknKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgLmlzb0Ryb3Bkb3duTGluayB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdzZWNvbmRhcnknLCA2KX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoRGlyZWN0aW9uKFRvcGJhckRyb3Bkb3duV3JhcHBlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVG9wYmFyRHJvcGRvd25XcmFwcGVyIGZyb20gJy4vVG9wYmFyRHJvcGRvd24uc3R5bGVzJztcblxuaW1wb3J0IEltYWdlIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy91c2VyMy5wbmcnO1xuXG5jb25zdCBkZW1vTWFzc2FnZSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdEYXZpZCBEb2UnLFxuICAgIHRpbWU6ICczIG1pbnV0ZXMgYWdvJyxcbiAgICBtYXNzYWdlOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnTmF2aXMgRG9lJyxcbiAgICB0aW1lOiAnNCBtaW51dGVzIGFnbycsXG4gICAgbWFzc2FnZTpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ0VtYW51YWwgRG9lJyxcbiAgICB0aW1lOiAnNSBtaW51dGVzIGFnbycsXG4gICAgbWFzc2FnZTpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0Rvd2FpbiBEb2UnLFxuICAgIHRpbWU6ICc2IG1pbnV0ZXMgYWdvJyxcbiAgICBtYXNzYWdlOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BiYXJNZXNzYWdlKCkge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGN1c3RvbWl6ZWRUaGVtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLlRoZW1lU3dpdGNoZXIudG9wYmFyVGhlbWUpO1xuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKCkge1xuICAgIHNldFZpc2liaWxpdHkodmlzaWJsZSA9PiAhdmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwidG9wYmFyTWVzc2FnZSB3aXRoSW1nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duSGVhZGVyXCI+XG4gICAgICAgIDxoMz5NZXNzYWdlczwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25Cb2R5XCI+XG4gICAgICAgIHtkZW1vTWFzc2FnZS5tYXAobWFzc2FnZSA9PiAoXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaXN0SXRlbVwiIGtleT17bWFzc2FnZS5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ltZ1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCIjXCIgc3JjPXtJbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0xpc3RDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTGlzdEhlYWRcIj5cbiAgICAgICAgICAgICAgICA8aDU+e21hc3NhZ2UubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzb0RhdGVcIj57bWFzc2FnZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPnttYXNzYWdlLm1hc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvVmlld0FsbEJ0blwiPlZpZXcgQWxsPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ljb25XcmFwcGVyXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWNoYXRidWJibGVzXCJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY3VzdG9taXplZFRoZW1lLnRleHRDb2xvciB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj57ZGVtb01hc3NhZ2UubGVuZ3RofTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9wb3Zlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBUb3BiYXJEcm9wZG93bldyYXBwZXIgZnJvbSAnLi9Ub3BiYXJEcm9wZG93bi5zdHlsZXMnO1xuXG5jb25zdCBkZW1vTm90aWZpY2F0aW9ucyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdEYXZpZCBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05hdmlzIERvZScsXG4gICAgbm90aWZpY2F0aW9uOlxuICAgICAgJ0EgTmF0aW9uYWwgQm9vayBBd2FyZCBGaW5hbGlzdCBBbiBFZGdhciBBd2FyZCBGaW5hbGlzdCBBIENhbGlmb3JuaWEgQm9vayBBd2FyZCBHb2xkIE1lZGFsIFdpbm5lcicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnRW1hbnVhbCBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0Rvd2FpbiBEb2UnLFxuICAgIG5vdGlmaWNhdGlvbjpcbiAgICAgICdBIE5hdGlvbmFsIEJvb2sgQXdhcmQgRmluYWxpc3QgQW4gRWRnYXIgQXdhcmQgRmluYWxpc3QgQSBDYWxpZm9ybmlhIEJvb2sgQXdhcmQgR29sZCBNZWRhbCBXaW5uZXInLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wYmFyTm90aWZpY2F0aW9uKCkge1xuICBjb25zdCBjdXN0b21pemVkVGhlbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyLnRvcGJhclRoZW1lKTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVZpc2libGVDaGFuZ2UoKSB7XG4gICAgc2V0VmlzaWJpbGl0eSh2aXNpYmxlID0+ICF2aXNpYmxlKTtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwidG9wYmFyTm90aWZpY2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duSGVhZGVyXCI+XG4gICAgICAgIDxoMz5Ob3RpZmljYXRpb25zPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkJvZHlcIj5cbiAgICAgICAge2RlbW9Ob3RpZmljYXRpb25zLm1hcChub3RpZmljYXRpb24gPT4gKFxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlzdEl0ZW1cIiBrZXk9e25vdGlmaWNhdGlvbi5pZH0+XG4gICAgICAgICAgICA8aDU+e25vdGlmaWNhdGlvbi5uYW1lfTwvaDU+XG4gICAgICAgICAgICA8cD57bm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbn08L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvVmlld0FsbEJ0blwiPlZpZXcgQWxsPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb0ljb25XcmFwcGVyXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+e2RlbW9Ob3RpZmljYXRpb25zLmxlbmd0aH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcG92ZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBJbnB1dFNlYXJjaCB9IGZyb20gJ0Bpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL2lucHV0JztcbmltcG9ydCBUb3BiYXJTZWFyY2hNb2RhbCBmcm9tICcuL1RvcGJhclNlYXJjaE1vZGFsLnN0eWxlcyc7XG5cbmZ1bmN0aW9uIFNlYXJjaGJhcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRUb3BiYXJTZWFyY2gnKS5mb2N1cygpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9LCAyMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxJbnB1dFNlYXJjaFxuICAgICAgaWQ9XCJJbnB1dFRvcGJhclNlYXJjaFwiXG4gICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzZWFyY2ggdGV4dFwiXG4gICAgICBvbkJsdXI9e3Byb3BzLm9uQmx1cn1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BiYXJTZWFyY2goKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY3VzdG9taXplZFRoZW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuVGhlbWVTd2l0Y2hlci50b3BiYXJUaGVtZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkoZmFsc2UpO1xuICB9O1xuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfSwgMjAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldFZpc2liaWxpdHkodHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzaG93TW9kYWx9PlxuICAgICAgPGlcbiAgICAgICAgY2xhc3NOYW1lPVwiaW9uLWlvcy1zZWFyY2gtc3Ryb25nXCJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IGN1c3RvbWl6ZWRUaGVtZS50ZXh0Q29sb3IgfX1cbiAgICAgIC8+XG4gICAgICA8VG9wYmFyU2VhcmNoTW9kYWxcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25Paz17aGFuZGxlQ2FuY2VsfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICB3cmFwQ2xhc3NOYW1lPVwiaXNvU2VhcmNoTW9kYWxcIlxuICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29TZWFyY2hDb250YWluZXJcIj5cbiAgICAgICAgICB7dmlzaWJsZSA/IDxTZWFyY2hiYXIgb25CbHVyPXtoYW5kbGVCbHVyfSAvPiA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9wYmFyU2VhcmNoTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnQGlzby9jb21wb25lbnRzL0ZlZWRiYWNrL01vZGFsJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJ3N0eWxlZC10aGVtZSc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5cbmNvbnN0IFRvcGJhclNlYXJjaE1vZGFsID0gc3R5bGVkKE1vZGFsKWBcbiAgJi5hbnQtbW9kYWwge1xuICAgIHRvcDogMTUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAuYW50LW1vZGFsLWNsb3NlLXgge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFudC1tb2RhbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIC5hbnQtbW9kYWwtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmlzb1NlYXJjaENvbnRhaW5lciB7XG4gICAgICAgIC5hbnQtaW5wdXQtc2VhcmNoIHtcbiAgICAgICAgICAuYW50LWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzE1cHgnIDogJzU1cHgnfTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzU1cHgnIDogJzE1cHgnfTtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbnQtaW5wdXQtc3VmZml4IHtcbiAgICAgICAgICByaWdodDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzIwcHgnIDogJ2F1dG8nKX07XG4gICAgICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2F1dG8nIDogJzIwcHgnKX07XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ1xcZjRhNCc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2lvbmljb25zJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAyKX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFudC1pbnB1dC1zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aERpcmVjdGlvbihUb3BiYXJTZWFyY2hNb2RhbCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9wb3BvdmVyJztcbmltcG9ydCBhdXRoQWN0aW9uIGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2FjdGlvbnMnO1xuaW1wb3J0IFRvcGJhckRyb3Bkb3duV3JhcHBlciBmcm9tICcuL1RvcGJhckRyb3Bkb3duLnN0eWxlcyc7XG5cbmNvbnN0IHsgbG9nb3V0IH0gPSBhdXRoQWN0aW9uO1xuaW1wb3J0IHVzZXJwaWMgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL3VzZXIxLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGJhclVzZXIoKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKCkge1xuICAgIHNldFZpc2liaWxpdHkodmlzaWJsZSA9PiAhdmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwiaXNvVXNlckRyb3Bkb3duXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkxpbmtcIj5TZXR0aW5nczwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlua1wiPkZlZWRiYWNrPC9hPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaW5rXCI+SGVscDwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlua1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGxvZ291dCgpKX0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9hPlxuICAgIDwvVG9wYmFyRHJvcGRvd25XcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgIGFycm93UG9pbnRBdENlbnRlcj17dHJ1ZX1cbiAgICAgIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvSW1nV3JhcHBlclwiPlxuICAgICAgICA8aW1nIGFsdD1cInVzZXJcIiBzcmM9e3VzZXJwaWN9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJBY3Rpdml0eSBvbmxpbmVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qb3BvdmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDaGF0Vmlld1dyYXBwZXIgfSBmcm9tICdAaXNvL2NvbnRhaW5lcnMvQ2hhdC9NZXNzYWdlcy5zdHlsZXMnO1xuXG5pbXBvcnQgeyB3aXRoQXV0aFN5bmMgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoLnV0aWxzJztcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSAnLi4vLi4vY29udGFpbmVycy9EYXNoYm9hcmRMYXlvdXQvRGFzaGJvYXJkTGF5b3V0JztcbmNvbnN0IERlc2t0b3BWaWV3ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bpc28vY29udGFpbmVycy9DaGF0L0Rlc2t0b3BWaWV3JykpO1xuY29uc3QgTW9iaWxlVmlldyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAaXNvL2NvbnRhaW5lcnMvQ2hhdC9Nb2JpbGVWaWV3JykpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFN5bmMoZnVuY3Rpb24gQ2hhdCgpIHtcbiAgY29uc3QgeyB2aWV3LCBoZWlnaHQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLkFwcCk7XG4gIGNvbnN0IENoYXRWaWV3ID0gdmlldyA9PT0gJ01vYmlsZVZpZXcnID8gTW9iaWxlVmlldyA6IERlc2t0b3BWaWV3O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoYXQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPERhc2hib2FyZExheW91dD5cbiAgICAgICAgPENoYXRWaWV3V3JhcHBlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IHZpZXcgPT09ICdNb2JpbGVWaWV3JyA/IGhlaWdodCAtIDEwOCA6IGhlaWdodCAtIDEzOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRWaWV3IGhlaWdodD17aGVpZ2h0fSB2aWV3PXt2aWV3fSAvPlxuICAgICAgICA8L0NoYXRWaWV3V3JhcHBlcj5cbiAgICAgIDwvRGFzaGJvYXJkTGF5b3V0PlxuICAgIDwvPlxuICApO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9hdXRvLWNvbXBsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9kYXRlLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9ub3RpZmljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvcG9wb3ZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9yYWRpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi90b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vdGlvbi1kcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS1maXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtdGhlbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==