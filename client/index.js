import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import App from './components/App'
//import connect from 'react-redux'

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

export function makeDonation(donationDetails) {
  return (dispatch) => {
    console.log(donationDetails)
    return request
      .post('/api')
      .send(donationDetails)
      .then(res => {
        dispatch(donationMade(doantionDetails))
        .catch(err => {
          dispatch(err.message)
        })
      })
    }
  }
