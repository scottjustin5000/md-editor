import React from 'react'
import ReactDOM from 'react-dom'
import MdEditor from './md-editor'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MdEditor />, document.getElementById('root'))
registerServiceWorker()
