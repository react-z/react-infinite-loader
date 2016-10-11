'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visit = function (_Component) {
  _inherits(Visit, _Component);

  _createClass(Visit, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        visitStyle: { visibility: 'hidden' }
      };
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        containerElement: _react2.default.PropTypes.object,
        onVisited: _react2.default.PropTypes.func,
        visitStyle: _react2.default.PropTypes.object
      };
    }
  }]);

  function Visit(props) {
    _classCallCheck(this, Visit);

    var _this = _possibleConstructorReturn(this, (Visit.__proto__ || Object.getPrototypeOf(Visit)).call(this, props));

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.state = { visited: false };
    return _this;
  }

  _createClass(Visit, [{
    key: 'containerElementDefined',
    value: function containerElementDefined() {
      return !(this.props.containerElement == null || this.props.containerElement == undefined);
    }
  }, {
    key: 'resetVisited',
    value: function resetVisited() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ visited: false });
      }, 1000);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.containerElementDefined()) {
        this.props.containerElement.addEventListener('scroll', this.handleScroll);
      } else {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.containerElementDefined()) {
        this.props.containerElement.removeEventListener('scroll', this.handleScroll);
      } else {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'handleScroll',
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
            this.setState({ visited: true });
          }
        }
      }
    }
  }, {
    key: 'isElementInViewport',
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { className: this.props.className, style: this.props.visitStyle, ref: 'visit' });
    }
  }]);

  return Visit;
}(_react.Component);

exports.default = Visit;