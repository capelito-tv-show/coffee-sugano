import React from 'react'
import PropTypes from 'prop-types'
import logo from './images/brand_logo.png'

class Maybe extends React.Component<{
  flag: boolean,
  children?: React.Node,
  else: React.Node
}> {
  render() {
    const { props } = this

    return props.flag ? props.children : props.else
  }
}

const Loading = () => (
  <div
    style={{
      textAlign: 'center',
      width: '30%',
      position: 'absolute',
      left: '35%',
      top: '35%',
      margin: '0 auto'
    }}
  >
    <img
      src={logo}
      style={{
        width: '100%',
        margin: '0 auto',
        animation: 'load8 1.1s infinite linear'
      }}
    />
  </div>
)

class SwitchLoading extends React.Component<{
  isLoading: boolean,
  children?: React.Node
}> {
  render() {
    const { props } = this
    return (
      <Maybe flag={props.isLoading} else={<Loading />}>
        {props.children}
      </Maybe>
    )
  }
}

export default SwitchLoading
