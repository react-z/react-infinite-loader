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
import Visit from '../Visit'

test('Visit renders correctly and matches snapshot', () => {
  const handleVisit = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

  const component = renderer.create(
    <Visit
      className='visit'
      visitStyle={visitStyle}
      onVisited={handleVisit} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Visit renders the correct elements and props', () => {
  const handleVisit = jest.fn()

  let visitStyle = {
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
    marginTop: '-10rem',
    height: '10rem'
 }

 const wrapper = shallow(
    <Visit
      className='visit'
      visitStyle={visitStyle}
      onVisited={handleVisit} />
  )

  expect(wrapper.instance().props.visitStyle).toEqual(visitStyle)
  expect(wrapper.instance().props.onVisited).toEqual(handleVisit)
  expect(wrapper.instance().props.className).toContain('visit')

  expect(wrapper.find('span').length).toEqual(1)
  expect(wrapper.find('span').props().className).toContain('visit')

  setTimeout(() => {
    expect(onVisited).toBeCalled();
  }, 0)

  // console.log(wrapper.debug())
})
