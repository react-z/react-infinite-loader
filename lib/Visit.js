"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Visit =
/*#__PURE__*/
function (_Component) {
  _inherits(Visit, _Component);

  _createClass(Visit, null, [{
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
        visitStyle: _propTypes.default.object
      };
    }
  }]);

  function Visit(props) {
    var _this;

    _classCallCheck(this, Visit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Visit).call(this, props));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.state = {
      visited: false
    };
    return _this;
  }

  _createClass(Visit, [{
    key: "containerElementDefined",
    value: function containerElementDefined() {
      return !(this.props.containerElement == null || this.props.containerElement == undefined);
    }
  }, {
    key: "resetVisited",
    value: function resetVisited() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          visited: false
        });
      }, 1000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.containerElementDefined()) {
        this.props.containerElement.addEventListener('scroll', this.handleScroll);
      } else {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.containerElementDefined()) {
        this.props.containerElement.removeEventListener('scroll', this.handleScroll);
      } else {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      if (this.refs.visit != undefined) {
        if (this.isElementInViewport()) {
          if (this.state.visited) {
            /* already visited */
          } else {
            /* fire off event for element visited */
            if (this.props.onVisited != undefined) {
              this.props.onVisited();
            }

            this.setState({
              visited: true
            });
          }
        }
      }
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport() {
      var rect = this.refs.visit.getBoundingClientRect();
      var containerBottom = window.innerHeight;
      var containerRight = window.innerWidth;
      var containerTop = 0;
      var containerLeft = 0;

      if (this.containerElementDefined()) {
        var containerRect = this.props.containerElement.getBoundingClientRect();
        var _containerBottom = containerRect.bottom;
        var _containerRight = containerRect.right;
      }

      return rect.top >= containerTop && rect.left >= containerLeft && rect.bottom <= containerBottom && rect.right <= containerRight;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("span", {
        style: this.props.visitStyle,
        ref: "visit",
        className: "jsx-1351883599" + " " + 'visit'
      }, _react.default.createElement(_style.default, {
        id: "1351883599"
      }, []));
    }
  }]);

  return Visit;
}(_react.Component);

exports.default = Visit;