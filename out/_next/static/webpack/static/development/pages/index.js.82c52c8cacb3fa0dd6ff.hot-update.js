webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/main */ "./layout/main.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");


var _jsxFileName = "D:\\Development\\Next\\next-gql\\pages\\index\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      showMessage = _useState[0],
      setshowMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      quotes = _useState2[0],
      setQuotes = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getQuotes();
  }, []);

  var setShowAnimate = function setShowAnimate(opt) {
    return setshowMessage(opt);
  };

  var getQuotes =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/quotes/quotes.json');

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              res = _context.sent;
              setQuotes(res[Math.floor(Math.random() * res.length)]);
              setShowAnimate(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getQuotes() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_layout_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("section", {
    id: "quote-box",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
    "in": showMessage,
    timeout: 300,
    classNames: "quotes-fade",
    unmountOnExit: true,
    onExited: function onExited() {
      return setShowAnimate(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-5468638" + " " + "quotes-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h4", {
    id: "text",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, quotes && quotes.quoteText), __jsx("h4", {
    id: "author",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "- ", quotes && quotes.quoteAuthor))), __jsx("section", {
    className: "jsx-5468638" + " " + "quote-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("section", {
    id: "quote-wrapper",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("section", {
    id: "tweet-quote",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=BEEBEE",
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Tweet"))), __jsx("section", {
    className: "jsx-5468638" + " " + "button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("button", {
    id: "new-quote",
    onClick: function onClick() {
      return getQuotes();
    },
    className: "jsx-5468638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "New quote")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "5468638",
    __self: this
  }, "#quote-box.jsx-5468638{width:30%;background:#fff;margin:auto;padding:20px;border-radius:4px;}.quotes-fade-enter.jsx-5468638{opacity:0;}.quotes-fade-enter-active.jsx-5468638{opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s;}.quotes-fade-exit.jsx-5468638{opacity:1;}.quotes-fade-exit-active.jsx-5468638{opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s;}#text.jsx-5468638{font-size:24px;margin-bottom:12px;}#author.jsx-5468638{text-align:right;font-size:16px;margin-bottom:12px;}.quote-action.jsx-5468638{margin:40px 0 10px;display:grid;grid-template-columns:repeat(2,1fr);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button-wrapper.jsx-5468638{text-align:right;}#tweet-quote.jsx-5468638 a.jsx-5468638{display:grid;width:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;border:none;border:2px solid #de6060;border-radius:4px;background:#fff;color:#de6060;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s,border .3s;transition:box-shadow .3s,background .3s,border .3s;}#tweet-quote.jsx-5468638 a.jsx-5468638:hover{background:#ffdfdf;box-shadow:0px 12px 11px -6px #aba9a9;border:2px solid #fd7b7b;}#new-quote.jsx-5468638{width:70%;min-height:38px;padding:4px 8px;border:none;background:#de6060;color:#fff;border-radius:4px;cursor:pointer;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s;transition:box-shadow .3s,background .3s;}#new-quote.jsx-5468638:hover{background:#fd7b7b;box-shadow:0px 12px 11px -6px #aba9a9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wbWVudFxcTmV4dFxcbmV4dC1ncWxcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURlLEFBR2dCLEFBUUEsQUFHQSxBQUlBLEFBR0EsQUFLSyxBQUtFLEFBTUUsQUFPRixBQUlKLEFBaUJNLEFBTVQsQUFZUyxVQS9FSCxBQVFqQixBQUd3QixBQUl4QixBQUd3QixBQWtEUCxHQXZCTCxFQXRCUSxFQUtGLEFBYWxCLEVBUGMsQUE0QnlCLEFBa0JBLEtBbENuQixFQTdDUCxBQW9FSSxNQXhDRyxBQU1rQixFQVh0QyxJQXRCYyxJQW9FRCxTQW5FTSxBQTJCbkIsR0F5Q29CLEdBUk0sQUFrQjFCLE9BckVBLEFBT0EsSUFpQm9CLENBaENwQixJQW9FWSxTQVJaLEVBU21CLGtCQUNILGVBM0JRLEFBNEJnQix1Q0FDRyxLQXZDM0MsdURBV2MsYUFDRCxZQUNhLEtBMkIxQixvQkExQm1CLGtCQUNGLGdCQUNGLGNBQ0MsZUFDTSxrREFDa0IsdUNBQ2UsZ0hBQ3ZEIiwiZmlsZSI6IkQ6XFxEZXZlbG9wbWVudFxcTmV4dFxcbmV4dC1ncWxcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0c2hvd01lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3F1b3Rlcywgc2V0UXVvdGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0UXVvdGVzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IHNldFNob3dBbmltYXRlID0gKG9wdCkgPT4gc2V0c2hvd01lc3NhZ2Uob3B0KTtcclxuXHJcblx0Y29uc3QgZ2V0UXVvdGVzID0gYXN5bmMoKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJy9xdW90ZXMvcXVvdGVzLmpzb24nKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cdFx0c2V0UXVvdGVzKHJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXMubGVuZ3RoKV0pO1xyXG5cdFx0c2V0U2hvd0FuaW1hdGUoZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJIb21lXCI+XHJcblx0XHRcdDxzZWN0aW9uIGlkPVwicXVvdGUtYm94XCI+XHJcblx0XHRcdFx0PENTU1RyYW5zaXRpb25cclxuXHRcdFx0XHRcdGluPXtzaG93TWVzc2FnZX1cclxuXHRcdFx0XHRcdHRpbWVvdXQ9ezMwMH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZXM9XCJxdW90ZXMtZmFkZVwiXHJcblx0XHRcdFx0XHR1bm1vdW50T25FeGl0XHJcblx0XHRcdFx0XHRvbkV4aXRlZD17KCkgPT4gc2V0U2hvd0FuaW1hdGUodHJ1ZSl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGVzLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGlkPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdHsgcXVvdGVzICYmIHF1b3Rlcy5xdW90ZVRleHR9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxoNCBpZD1cImF1dGhvclwiPlxyXG5cdFx0XHRcdFx0XHRcdC0geyBxdW90ZXMgJiYgcXVvdGVzLnF1b3RlQXV0aG9yfVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdDwvQ1NTVHJhbnNpdGlvbj5cclxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJxdW90ZS1hY3Rpb25cIj5cclxuXHRcdFx0XHRcdDxzZWN0aW9uIGlkPVwicXVvdGUtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBpZD1cInR3ZWV0LXF1b3RlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P2hhc2h0YWdzPXF1b3RlcyZyZWxhdGVkPWZyZWVjb2RlY2FtcCZ0ZXh0PUJFRUJFRWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0VHdlZXRcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJuZXctcXVvdGVcIiBvbkNsaWNrPXsoKSA9PiBnZXRRdW90ZXMoKX0+XHJcblx0XHRcdFx0XHRcdFx0TmV3IHF1b3RlXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0I3F1b3RlLWJveCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucXVvdGVzLWZhZGUtZW50ZXIge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnF1b3Rlcy1mYWRlLWVudGVyLWFjdGl2ZSB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5xdW90ZXMtZmFkZS1leGl0IHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5xdW90ZXMtZmFkZS1leGl0LWFjdGl2ZSB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjdGV4dCB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I2F1dGhvciB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucXVvdGUtYWN0aW9uIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNDBweCAwIDEwcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYnV0dG9uLXdyYXBwZXIge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjdHdlZXQtcXVvdGUgYSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2RlNjA2MDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHRjb2xvcjogI2RlNjA2MDtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxMnB4IDExcHggLTEwcHggI2FiYTlhOTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzLCBiYWNrZ3JvdW5kIC4zcywgYm9yZGVyIC4zcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCN0d2VldC1xdW90ZSBhOmhvdmVyIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmRmZGY7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTJweCAxMXB4IC02cHggI2FiYTlhOTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmZDdiN2I7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjbmV3LXF1b3RlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCU7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzOHB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNHB4IDhweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNkZTYwNjA7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxMnB4IDExcHggLTEwcHggI2FiYTlhOTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzLCBiYWNrZ3JvdW5kIC4zcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0I25ldy1xdW90ZTpob3ZlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmQ3YjdiO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDEycHggMTFweCAtNnB4ICNhYmE5YTk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=D:\\Development\\Next\\next-gql\\pages\\index\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.82c52c8cacb3fa0dd6ff.hot-update.js.map