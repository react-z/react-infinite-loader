"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Visit = _interopRequireDefault(require("../Visit"));

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
test('Visit renders correctly and matches snapshot', function () {
  var handleVisit = jest.fn();
  var visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Visit.default, {
    className: "visit",
    visitStyle: visitStyle,
    onVisited: handleVisit
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Visit renders the correct elements and props', function () {
  var handleVisit = jest.fn();
  var visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
  };
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Visit.default, {
    className: "visit",
    visitStyle: visitStyle,
    onVisited: handleVisit
  }));
  expect(wrapper.instance().props.visitStyle).toEqual(visitStyle);
  expect(wrapper.instance().props.onVisited).toEqual(handleVisit);
  expect(wrapper.instance().props.className).toContain('visit');
  expect(wrapper.find('span').length).toEqual(1);
  expect(wrapper.find('span').props().className).toContain('visit');
  setTimeout(function () {
    expect(onVisited).toBeCalled();
  }, 0); // console.log(wrapper.debug())
});