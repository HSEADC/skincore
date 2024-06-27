const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const S_Header = require('./components/S_Header/S_Header.jsx').default

import { props } from './menubar-data.js'

const menubar = ReactDOMServer.renderToString(
  React.createElement(S_Header, props)
)

export { menubar }