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
              setShowAnimate(false);
              _context.next = 3;
              return fetch('/quotes/quotes.json');

            case 3:
              data = _context.sent;
              _context.next = 6;
              return data.json();

            case 6:
              res = _context.sent;
              setQuotes(res[Math.floor(Math.random() * res.length)]);
              setShowAnimate(true);

            case 9:
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
      lineNumber: 24
    },
    __self: this
  }, __jsx("section", {
    id: "quote-box",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 26
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-787714279" + " " + "quotes-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h4", {
    id: "text",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, quotes && quotes.quoteText), __jsx("h4", {
    id: "author",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "- ", quotes && quotes.quoteAuthor))), __jsx("section", {
    className: "jsx-787714279" + " " + "quote-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("section", {
    id: "quote-wrapper",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("section", {
    id: "tweet-quote",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=BEEBEE",
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Tweet"))), __jsx("section", {
    className: "jsx-787714279" + " " + "button-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("button", {
    id: "new-quote",
    onClick: function onClick() {
      return getQuotes();
    },
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "New quote"))), __jsx("section", {
    className: "jsx-787714279",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "-- Bee Bee Wijaya")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "787714279",
    __self: this
  }, "#quote-box.jsx-787714279{width:30%;background:#fff;margin:auto;padding:20px;border-radius:4px;}.quotes-fade-enter.jsx-787714279{opacity:0;}.quotes-fade-enter-active.jsx-787714279{opacity:1;-webkit-transition:opacity .8s;transition:opacity .8s;}.quotes-fade-exit.jsx-787714279{opacity:1;}.quotes-fade-exit-active.jsx-787714279{opacity:0;-webkit-transition:opacity .8s;transition:opacity .8s;}#text.jsx-787714279{font-size:24px;margin-bottom:12px;}#author.jsx-787714279{text-align:right;font-size:16px;margin-bottom:12px;}.quote-action.jsx-787714279{margin:40px 0 10px;display:grid;grid-template-columns:repeat(2,1fr);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button-wrapper.jsx-787714279{text-align:right;}#tweet-quote.jsx-787714279 a.jsx-787714279{display:grid;width:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;border:none;border:2px solid #de6060;border-radius:4px;background:#fff;color:#de6060;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s,border .3s;transition:box-shadow .3s,background .3s,border .3s;}#tweet-quote.jsx-787714279 a.jsx-787714279:hover{background:#ffdfdf;box-shadow:0px 12px 11px -6px #aba9a9;border:2px solid #fd7b7b;}#new-quote.jsx-787714279{width:70%;min-height:38px;padding:4px 8px;border:none;background:#de6060;color:#fff;border-radius:4px;cursor:pointer;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s;transition:box-shadow .3s,background .3s;}#new-quote.jsx-787714279:hover{background:#fd7b7b;box-shadow:0px 12px 11px -6px #aba9a9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wbWVudFxcTmV4dFxcbmV4dC1ncWxcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRlLEFBR2dCLEFBUUEsQUFHQSxBQUlBLEFBR0EsQUFLSyxBQUtFLEFBTUUsQUFPRixBQUlKLEFBaUJNLEFBTVQsQUFZUyxVQS9FSCxBQVFqQixBQUd3QixBQUl4QixBQUd3QixBQWtEUCxHQXZCTCxFQXRCUSxFQUtGLEFBYWxCLEVBUGMsQUE0QnlCLEFBa0JBLEtBbENuQixFQTdDUCxBQW9FSSxNQXhDRyxBQU1rQixFQVh0QyxJQXRCYyxJQW9FRCxTQW5FTSxBQTJCbkIsR0F5Q29CLEdBUk0sQUFrQjFCLE9BckVBLEFBT0EsSUFpQm9CLENBaENwQixJQW9FWSxTQVJaLEVBU21CLGtCQUNILGVBM0JRLEFBNEJnQix1Q0FDRyxLQXZDM0MsdURBV2MsYUFDRCxZQUNhLEtBMkIxQixvQkExQm1CLGtCQUNGLGdCQUNGLGNBQ0MsZUFDTSxrREFDa0IsdUNBQ2UsZ0hBQ3ZEIiwiZmlsZSI6IkQ6XFxEZXZlbG9wbWVudFxcTmV4dFxcbmV4dC1ncWxcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2xheW91dC9tYWluJztcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0c2hvd01lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3F1b3Rlcywgc2V0UXVvdGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0UXVvdGVzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IHNldFNob3dBbmltYXRlID0gKG9wdCkgPT4gc2V0c2hvd01lc3NhZ2Uob3B0KTtcclxuXHJcblx0Y29uc3QgZ2V0UXVvdGVzID0gYXN5bmMoKSA9PiB7XHJcblx0XHRzZXRTaG93QW5pbWF0ZShmYWxzZSk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJy9xdW90ZXMvcXVvdGVzLmpzb24nKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cdFx0c2V0UXVvdGVzKHJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXMubGVuZ3RoKV0pO1xyXG5cdFx0c2V0U2hvd0FuaW1hdGUodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZT1cIkhvbWVcIj5cclxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJxdW90ZS1ib3hcIj5cclxuXHRcdFx0XHQ8Q1NTVHJhbnNpdGlvblxyXG5cdFx0XHRcdFx0aW49e3Nob3dNZXNzYWdlfVxyXG5cdFx0XHRcdFx0dGltZW91dD17MzAwfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz1cInF1b3Rlcy1mYWRlXCJcclxuXHRcdFx0XHRcdHVubW91bnRPbkV4aXRcclxuXHRcdFx0XHRcdG9uRXhpdGVkPXsoKSA9PiBzZXRTaG93QW5pbWF0ZSh0cnVlKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJxdW90ZXMtbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgaWQ9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0eyBxdW90ZXMgJiYgcXVvdGVzLnF1b3RlVGV4dH1cclxuXHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0PGg0IGlkPVwiYXV0aG9yXCI+XHJcblx0XHRcdFx0XHRcdFx0LSB7IHF1b3RlcyAmJiBxdW90ZXMucXVvdGVBdXRob3J9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0PC9DU1NUcmFuc2l0aW9uPlxyXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3RlLWFjdGlvblwiPlxyXG5cdFx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJxdW90ZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxzZWN0aW9uIGlkPVwidHdlZXQtcXVvdGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/aGFzaHRhZ3M9cXVvdGVzJnJlbGF0ZWQ9ZnJlZWNvZGVjYW1wJnRleHQ9QkVFQkVFYH0+XHJcblx0XHRcdFx0XHRcdFx0XHRUd2VldFxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cIm5ldy1xdW90ZVwiIG9uQ2xpY2s9eygpID0+IGdldFF1b3RlcygpfT5cclxuXHRcdFx0XHRcdFx0XHROZXcgcXVvdGVcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdFx0LS0gQmVlIEJlZSBXaWpheWFcclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdCNxdW90ZS1ib3gge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnF1b3Rlcy1mYWRlLWVudGVyIHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5xdW90ZXMtZmFkZS1lbnRlci1hY3RpdmUge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjhzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucXVvdGVzLWZhZGUtZXhpdCB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucXVvdGVzLWZhZGUtZXhpdC1hY3RpdmUge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjhzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I3RleHQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNhdXRob3Ige1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnF1b3RlLWFjdGlvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDQwcHggMCAxMHB4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmJ1dHRvbi13cmFwcGVyIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I3R3ZWV0LXF1b3RlIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNkZTYwNjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNkZTYwNjA7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTJweCAxMXB4IC0xMHB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcywgYmFja2dyb3VuZCAuM3MsIGJvcmRlciAuM3M7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjdHdlZXQtcXVvdGUgYTpob3ZlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZkZmRmO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDEycHggMTFweCAtNnB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmQ3YjdiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I25ldy1xdW90ZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMzhweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZGU2MDYwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTJweCAxMXB4IC0xMHB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcywgYmFja2dyb3VuZCAuM3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCNuZXctcXVvdGU6aG92ZXIge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZkN2I3YjtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxMnB4IDExcHggLTZweCAjYWJhOWE5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl19 */\n/*@ sourceURL=D:\\Development\\Next\\next-gql\\pages\\index\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.cdc07f637a526d41c72f.hot-update.js.map