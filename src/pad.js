import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import showdown from 'showdown'
import { withStyles } from 'material-ui/styles'

let converter = new showdown.Converter()
converter.setFlavor('github')
converter.setOption('omitExtraWLInCodeBlocks', false)

const styles = theme => ({
  root: {
    marginTop: '10px',
    fontSize: '12px',
    borderBottom: 'solid 1px #d5d5d5'
  },
  pad: {
    width: '50%'
  }
})

class Pad extends Component {
  constructor (props) {
    super(props)
    let txt = `# Markdown Editor

### Add your [markdown](http://www.google.com) here and, hopefully, it will show up on the right

Type your markdown into the box on the left and immediately see if on the box on the right. If you send a friend a link to a pad URL (other than the home page) you both can edit the document at the same time!

You should be able to add code blocks:

${'```'}javascript
function foo() {
  let bar = 'bar'
  return bar
}
${'```'}

images:
![images](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png =120x120)
links:
[Showdown](https://github.com/showdownjs/showdown)
# titles
## another
### another
#### and...

`
    this.state = {
      md: txt,
      converted: ''
    }
    this.inputChanged = this.inputChanged.bind(this)
  }

  componentDidMount () {
    this.convert(this.state.md)
  }

  convert (txt) {
    let converted = converter.makeHtml(txt)
    this.setState({
      md: txt,
      converted: converted
    })
  }

  inputChanged (e) {
    let txt = e.currentTarget.value
    this.convert(txt)
  }

  render () {
    return (
      <div className={this.props.classes.root}>

        <div style={{width: '50%', float: 'left'}}>
          <Paper elevation={3} style={{marginTop: '15px', paddingLeft: '5px', paddingRight: '5px', minHeight: '600px'}}>
            <TextField multiline fullWidth className={this.props.classes.textField} value={this.state.md} onChange={this.inputChanged} />
          </Paper>
        </div>
        <div style={{width: '50%', float: 'right'}}>
          <Paper elevation={3} style={{margin: '5px', minHeight: '600px'}}>
            <div style={{marginLeft: '5px'}} dangerouslySetInnerHTML={{ __html: this.state.converted}} />
          </Paper>
        </div>
      </div>
    )
  }
}

Pad.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
}

export default (withStyles(styles, { withTheme: true })(Pad))
