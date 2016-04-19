'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Visit = require('./Visit');

var _Visit2 = _interopRequireDefault(_Visit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*import loader from '!raw!../assets/images/spin.svg'*/


/* styles, plus move in the svg
.InfiniteLoader {
  width: 100%;
  margin-top: 4rem;
}

.Loader {
  width: 3rem;
  height: 3rem;
  display: block;
  width: 100%;
}

.Loader svg {
  width: 100%;
  height: 100%;
}
*/

var InfiniteLoader = function (_Component) {
  _inherits(InfiniteLoader, _Component);

  function InfiniteLoader(props) {
    _classCallCheck(this, InfiniteLoader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteLoader).call(this, props));

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(InfiniteLoader, [{
    key: 'visited',
    value: function visited() {
      var _this2 = this;

      this.setState({ loading: true });
      this.props.load();
      setTimeout(function () {
        _this2.refs['loaderVisit'].revisit();
        _this2.setState({ loading: false });
      }, 2000);
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.setState({ loading: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;


      return _react2.default.createElement(
        'div',
        { className: 'InfiniteLoader' },
        loading ? _react2.default.createElement(
          'span',
          { className: 'Loader' },
          'loading...'
        ) : null,
        _react2.default.createElement(_Visit2.default, { ref: 'loaderVisit', visited: this.visited.bind(this) })
      );
    }
  }]);

  return InfiniteLoader;
}(_react.Component);

exports.default = InfiniteLoader;