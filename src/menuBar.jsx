import './menuBar.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'

import S_Header from './components/S_Header/S_Header.jsx'
import { props } from './menubar-data.js'

console.clear()

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  } else {
    return ''
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.S_Header').remove()
  const Header = document.createElement('div')
  Header.classList.add('S_Header')
  document.body.prepend(Header)

  const root = createRoot(Header)
  root.render(<S_Header searchInputValue={getSearchRequest()} {...props} />)
})