"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _InfiniteLoader = _interopRequireDefault(require("../InfiniteLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('InfiniteLoader renders correctly and matches snapshot', function () {
  var handleVisit = jest.fn();
  var visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InfiniteLoader.default, {
    visitStyle: visitStyle,
    onVisit: handleVisit
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('InfiniteLoader renders the correct elements and props', function () {
  var handleVisit = jest.fn();
  var handleLeave = jest.fn();
  var visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
  };
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_InfiniteLoader.default, {
    visitStyle: visitStyle,
    onVisit: handleVisit
  }));
  expect(wrapper.instance().props.visitStyle).toEqual(visitStyle);
  expect(wrapper.instance().props.onVisit).toEqual(handleVisit);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find('Visit').length).toEqual(1);
  expect(wrapper.find('div').props().className).toContain('loader');
  setTimeout(function () {
    expect(handleVisit).toBeCalled();
  }, 0); // console.log(wrapper.debug())
});