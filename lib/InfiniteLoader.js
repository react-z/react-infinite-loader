"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Visit = _interopRequireDefault(require("./Visit"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InfiniteLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(InfiniteLoader, _Component);

  _createClass(InfiniteLoader, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        visitStyle: {
          visibility: 'hidden'
        }
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        containerElement: _propTypes.default.object,
        onVisited: _propTypes.default.func,
        visitStyle: _propTypes.default.object,
        loaderStyle: _propTypes.default.object
      };
    }
  }]);

  function InfiniteLoader(props) {
    _classCallCheck(this, InfiniteLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfiniteLoader).call(this, props));
  }

  _createClass(InfiniteLoader, [{
    key: "handleVisit",
    value: function handleVisit() {
      this.refs.visit.resetVisited();

      if (this.props.onVisited != undefined) {
        this.props.onVisited();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement("span", {
        className: "jsx-1958290726"
      }, _react.default.createElement("div", {
        style: this.props.loaderStyle,
        className: "jsx-1958290726" + " " + "loader"
      }), _react.default.createElement(_Visit.default, _extends({
        className: "visit",
        ref: "visit"
      }, this.props, {
        onVisited: function onVisited() {
          return _this.handleVisit();
        }
      })), _react.default.createElement(_style.default, {
        id: "1958290726"
      }, [".loader.jsx-1958290726{margin:20px auto;font-size:5px;position:relative;border:1.1em solid rgba(255,255,255,0.2);border-left:1.1em solid #ffffff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:loadAnimation-jsx-1958290726 1.1s infinite linear;animation:loadAnimation-jsx-1958290726 1.1s infinite linear;}", ".loader.jsx-1958290726,.loader.jsx-1958290726:after{border-radius:50%;width:10em;height:10em;}", "@-webkit-keyframes loadAnimation{0%.jsx-1958290726{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%.jsx-1958290726{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@-webkit-keyframes loadAnimation-jsx-1958290726{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes loadAnimation-jsx-1958290726{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
    }
  }]);

  return InfiniteLoader;
}(_react.Component);

exports.default = InfiniteLoader;