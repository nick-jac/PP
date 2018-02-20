import React from 'react'
import Form from './AddProduct'
import {addproduct} from '../api'
//import connect from 'react-redux'
//import DisplayProduct from './DisplayProduct'

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//
//     }
//
//   }
// }

export default function App (props) {
  return<div>
    <div className='container'>
      <center>
        <h1>POP SOCKETS DATABASE</h1>
        <br/>
        <Form />
      </center>
    </div>
  </div>
}


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     )
//   }
// }
