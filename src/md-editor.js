import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Pad from './pad'
import './md-editor.css'

class MdEditor extends Component {
  render () {
    return (
      <div className='content'>
        <Typography variant='title' gutterBottom>
        Markdown Editor
      </Typography>
        <div className='main-content'>
          <Pad />
        </div>
      </div>
    )
  }
}

export default MdEditor
