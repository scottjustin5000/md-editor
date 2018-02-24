import React from 'react'
import ReactDOM from 'react-dom'
import MdEditor from '../md-editor'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MdEditor />, div)
  ReactDOM.unmountComponentAtNode(div)
})
