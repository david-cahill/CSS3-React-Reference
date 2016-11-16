import React, {Component} from 'react'
require('./LeftMenu.css')

export default class LeftMenu extends Component {
  render() {
    const { open } = this.props
    const className = open ? 'LeftMenu is-open' : 'LeftMenu'
    return (
      <div className={className}>
        Left menu component
      </div>
    )
  }
}