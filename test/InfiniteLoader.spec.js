import test from 'tape'
import React from 'react'
import InfiniteLoader from '../src/InfiniteLoader'

import { shallow, mount } from 'enzyme'

test('Infinite Loader component', (t) => {
  const testVisit = () => {
    console.log('just visiting...')
  }

  let visitStyle = { position: 'absolute', width: '100%', bottom: '10rem', height: '10rem' }

  const component = shallow(<InfiniteLoader />)
  const wrapper = mount(<InfiniteLoader visitStyle={visitStyle} handleVisit={testVisit} />)

  t.equal(
    wrapper.props().handleVisit, testVisit, 'the Infinite Loader component has a handleVisit prop'
  )

  t.equal(
    wrapper.props().visitStyle, visitStyle, 'the Infinite Loader component has a visit style'
  )

  t.end()
});
