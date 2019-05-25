/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import InfiniteLoader from '../InfiniteLoader'

test('InfiniteLoader renders correctly and matches snapshot', () => {
  const handleVisit = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

  const component = renderer.create(
    <InfiniteLoader
      visitStyle={visitStyle}
      onVisit={handleVisit} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InfiniteLoader renders the correct elements and props', () => {
  const handleVisit = jest.fn()
  const handleLeave = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

 const wrapper = shallow(
    <InfiniteLoader
      visitStyle={visitStyle}
      onVisit={handleVisit} />
  )

  expect(wrapper.instance().props.visitStyle).toEqual(visitStyle)
  expect(wrapper.instance().props.onVisit).toEqual(handleVisit)

  expect(wrapper.find('div').length).toEqual(1)
  expect(wrapper.find('Visit').length).toEqual(1)
  expect(wrapper.find('div').props().className).toContain('loader')

  setTimeout(() => {
    expect(handleVisit).toBeCalled();
  }, 0)

  // console.log(wrapper.debug())
})
