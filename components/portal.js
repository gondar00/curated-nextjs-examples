import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {
  render() {
    const element = document.querySelector(this.props.selector)
    
    return element && ReactDOM.createPortal(this.props.children, element) || false
  }
}
