import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

// function helloTemplate (props) {
//  return(
//    <div>hello {props.name}</div>
//  )
// }
//
// var data = { name: 'Pop Sockets' }
// var view = hellloTemplate(data)
//
// ReactDOM.render(view placeToMount)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
