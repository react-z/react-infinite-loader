import test from 'tape'
import React from 'react'
import Visit from '../src/Visit'

import { shallow, mount } from 'enzyme'

test('Visit component', (t) => {
  const testVisit = () => {
    console.log('just visiting...')
  }

  const testLeave = () => {
    console.log('just leaving...')
  }

  const component = shallow(<Visit />)
  const wrapper = mount(<Visit onVisit={testVisit} onLeave={testLeave} />)

  t.equal(
    wrapper.props().onVisit, testVisit, 'the visit component has an onVisit prop'
  )

  t.equal(
    wrapper.props().onLeave, testLeave, 'the visit component has an onLeave prop'
  )

  t.end()
});
