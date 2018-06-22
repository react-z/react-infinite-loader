"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Visit = require("./Visit");

var _Visit2 = _interopRequireDefault(_Visit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteLoader = function (_Component) {
  _inherits(InfiniteLoader, _Component);

  _createClass(InfiniteLoader, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        visitStyle: { visibility: "hidden" }
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        containerElement: _propTypes2.default.object,
        onVisited: _propTypes2.default.func,
        visitStyle: _propTypes2.default.object,
        loaderStyle: _propTypes2.default.object
      };
    }
  }]);

  function InfiniteLoader(props) {
    _classCallCheck(this, InfiniteLoader);

    return _possibleConstructorReturn(this, (InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call(this, props));
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
      var _this2 = this;

      return _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement("div", { className: "loader", style: this.props.loaderStyle }),
        _react2.default.createElement(_Visit2.default, _extends({ className: "visit", ref: "visit" }, this.props, { onVisited: function onVisited() {
            return _this2.handleVisit();
          } }))
      );
    }
  }]);

  return InfiniteLoader;
}(_react.Component);

exports.default = InfiniteLoader;