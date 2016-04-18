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

  function Visit(props) {
    _classCallCheck(this, Visit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Visit).call(this, props));

    _this.state = {
      visited: false
    };
    return _this;
  }

  _createClass(Visit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(e) {
      if (this.refs.visit != undefined) {

        if (this.isElementInViewport(this.refs.visit)) {
          if (this.state.visited) {
            /* already visited */
          } else {
              /* fire off event for element visited */
              this.props.visited();
              this.setState({ visited: true });
            }
        }
      }
    }
  }, {
    key: 'isElementInViewport',
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { ref: 'visit' });
    }
  }]);

  return Visit;
}(_react.Component);

exports.default = Visit;