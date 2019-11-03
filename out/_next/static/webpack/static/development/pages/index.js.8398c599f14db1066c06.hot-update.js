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
              setShowAnimate(true);
              _context.next = 4;
              return fetch('/quotes/quotes.json');

            case 4:
              data = _context.sent;
              _context.next = 7;
              return data.json();

            case 7:
              res = _context.sent;
              setQuotes(res[Math.floor(Math.random() * res.length)]);

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
    className: "jsx-3524414122",
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
    className: "jsx-3524414122" + " " + "quotes-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h4", {
    id: "text",
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, quotes && quotes.quoteText), __jsx("h4", {
    id: "author",
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "- ", quotes && quotes.quoteAuthor))), __jsx("section", {
    className: "jsx-3524414122" + " " + "quote-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("section", {
    id: "quote-wrapper",
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("section", {
    id: "tweet-quote",
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=BEEBEE",
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Tweet"))), __jsx("section", {
    className: "jsx-3524414122" + " " + "button-wrapper",
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
    className: "jsx-3524414122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "New quote")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3524414122",
    __self: this
  }, "#quote-box.jsx-3524414122{width:30%;background:#fff;margin:auto;padding:20px;border-radius:4px;}.quotes-fade-enter.jsx-3524414122{opacity:0;}.quotes-fade-enter-active.jsx-3524414122{opacity:1;-webkit-transition:opacity .8s;transition:opacity .8s;}#text.jsx-3524414122{font-size:24px;margin-bottom:12px;}#author.jsx-3524414122{text-align:right;font-size:16px;margin-bottom:12px;}.quote-action.jsx-3524414122{margin:40px 0 10px;display:grid;grid-template-columns:repeat(2,1fr);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button-wrapper.jsx-3524414122{text-align:right;}#tweet-quote.jsx-3524414122 a.jsx-3524414122{display:grid;width:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;border:none;border:2px solid #de6060;border-radius:4px;background:#fff;color:#de6060;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s,border .3s;transition:box-shadow .3s,background .3s,border .3s;}#tweet-quote.jsx-3524414122 a.jsx-3524414122:hover{background:#ffdfdf;box-shadow:0px 12px 11px -6px #aba9a9;border:2px solid #fd7b7b;}#new-quote.jsx-3524414122{width:70%;min-height:38px;padding:4px 8px;border:none;background:#de6060;color:#fff;border-radius:4px;cursor:pointer;box-shadow:0px 12px 11px -10px #aba9a9;-webkit-transition:box-shadow .3s,background .3s;transition:box-shadow .3s,background .3s;}#new-quote.jsx-3524414122:hover{background:#fd7b7b;box-shadow:0px 12px 11px -6px #aba9a9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wbWVudFxcTmV4dFxcbmV4dC1ncWxcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RlLEFBR2dCLEFBUUEsQUFHQSxBQUtLLEFBS0UsQUFNRSxBQU9GLEFBSUosQUFpQk0sQUFNVCxBQVlTLFVBeEVILEFBUWpCLEFBR3dCLEFBa0RQLEdBdkJMLEVBdEJRLEVBS0YsQUFhbEIsRUFQYyxBQTRCeUIsQUFrQkEsS0FsQ25CLEVBdENQLEFBNkRJLE1BeENHLEFBTWtCLEVBWHRDLElBZmMsSUE2REQsU0E1RE0sQUFvQm5CLEdBeUNvQixHQVJNLEFBa0IxQixPQTlEQSxJQWlCb0IsQ0F6QnBCLElBNkRZLFNBUlosRUFTbUIsa0JBQ0gsZUEzQlEsQUE0QmdCLHVDQUNHLEtBdkMzQyx1REFXYyxhQUNELFlBQ2EsS0EyQjFCLG9CQTFCbUIsa0JBQ0YsZ0JBQ0YsY0FDQyxlQUNNLGtEQUNrQix1Q0FDZSxnSEFDdkQiLCJmaWxlIjoiRDpcXERldmVsb3BtZW50XFxOZXh0XFxuZXh0LWdxbFxccGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0L21haW4nO1xyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Nob3dNZXNzYWdlLCBzZXRzaG93TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbcXVvdGVzLCBzZXRRdW90ZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRRdW90ZXMoKTtcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgc2V0U2hvd0FuaW1hdGUgPSAob3B0KSA9PiBzZXRzaG93TWVzc2FnZShvcHQpO1xyXG5cclxuXHRjb25zdCBnZXRRdW90ZXMgPSBhc3luYygpID0+IHtcclxuXHRcdHNldFNob3dBbmltYXRlKGZhbHNlKTtcclxuXHRcdHNldFNob3dBbmltYXRlKHRydWUpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCcvcXVvdGVzL3F1b3Rlcy5qc29uJyk7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHRcdHNldFF1b3RlcyhyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzLmxlbmd0aCldKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxyXG5cdFx0XHQ8c2VjdGlvbiBpZD1cInF1b3RlLWJveFwiPlxyXG5cdFx0XHRcdDxDU1NUcmFuc2l0aW9uXHJcblx0XHRcdFx0XHRpbj17c2hvd01lc3NhZ2V9XHJcblx0XHRcdFx0XHR0aW1lb3V0PXszMDB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWVzPVwicXVvdGVzLWZhZGVcIlxyXG5cdFx0XHRcdFx0dW5tb3VudE9uRXhpdFxyXG5cdFx0XHRcdFx0b25FeGl0ZWQ9eygpID0+IHNldFNob3dBbmltYXRlKHRydWUpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1b3Rlcy1saXN0XCI+XHJcblx0XHRcdFx0XHRcdDxoNCBpZD1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHR7IHF1b3RlcyAmJiBxdW90ZXMucXVvdGVUZXh0fVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8aDQgaWQ9XCJhdXRob3JcIj5cclxuXHRcdFx0XHRcdFx0XHQtIHsgcXVvdGVzICYmIHF1b3Rlcy5xdW90ZUF1dGhvcn1cclxuXHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHQ8L0NTU1RyYW5zaXRpb24+XHJcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicXVvdGUtYWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8c2VjdGlvbiBpZD1cInF1b3RlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJ0d2VldC1xdW90ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9oYXNodGFncz1xdW90ZXMmcmVsYXRlZD1mcmVlY29kZWNhbXAmdGV4dD1CRUVCRUVgfT5cclxuXHRcdFx0XHRcdFx0XHRcdFR3ZWV0XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwibmV3LXF1b3RlXCIgb25DbGljaz17KCkgPT4gZ2V0UXVvdGVzKCl9PlxyXG5cdFx0XHRcdFx0XHRcdE5ldyBxdW90ZVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdCNxdW90ZS1ib3gge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnF1b3Rlcy1mYWRlLWVudGVyIHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5xdW90ZXMtZmFkZS1lbnRlci1hY3RpdmUge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjhzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I3RleHQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNhdXRob3Ige1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnF1b3RlLWFjdGlvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDQwcHggMCAxMHB4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmJ1dHRvbi13cmFwcGVyIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I3R3ZWV0LXF1b3RlIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNkZTYwNjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNkZTYwNjA7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTJweCAxMXB4IC0xMHB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcywgYmFja2dyb3VuZCAuM3MsIGJvcmRlciAuM3M7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjdHdlZXQtcXVvdGUgYTpob3ZlciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZkZmRmO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDEycHggMTFweCAtNnB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmQ3YjdiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I25ldy1xdW90ZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMzhweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZGU2MDYwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTJweCAxMXB4IC0xMHB4ICNhYmE5YTk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcywgYmFja2dyb3VuZCAuM3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCNuZXctcXVvdGU6aG92ZXIge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZkN2I3YjtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAxMnB4IDExcHggLTZweCAjYWJhOWE5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl19 */\n/*@ sourceURL=D:\\Development\\Next\\next-gql\\pages\\index\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.8398c599f14db1066c06.hot-update.js.map