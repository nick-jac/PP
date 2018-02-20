import React from 'react'
import api from '../api'
import {makeDonation} from '../index'
import connect from 'react-redux'

export default class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newProduct: {
        sku: '',
        description: '',
        accordion: '',
        platform: '',
        barcode: '',
        style: '',
        status: ''
      }
    }
    this.updateField = this.updateField.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    //this.save = this.save.bind(this)
  }
  updateField(event) {
    const {newProduct} = this.state
    newProduct[event.target.name] = event.target.value
    this.setState({newProduct})
  }
  onSubmit(event) {
    e.preventDefault()
    //console.log(e)
    //console.log(this.state.newProduct)
    this.save()
  }

//    save() {
// console.log(api)
//     const product = this.state.newProduct
//     api.addProduct(products, () => {
//       this.setState({newProduct: {
//         sku: '',
//         description: '',
//         accordion: '',
//         platform: '',
//         barcode: '',
//         style: '',
//         status: ''
//       }})
//     })
//  }



  render() {
    //console.log(this.state.newProduct)
    //console.log(this.onSubmit)
    const {sku, description, accordion, platform, barcode, style, status} = this.state.newProduct
    return <div className="row-container">
<body>
  <div class="container">
    <div class="columns">
  <div class="column">
    <h1>View PopSocket Image Here</h1>
      <div class="field"><label class="label">Subject</label>

     <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
  </div>
  <div class="column">
    <h1>Enter PopSocket here</h1>
    <form class="container" onSubmit={this.onSubmit}>
        SKU: <input type="integer" name="sku" value={this.state.newProduct.sku} onChange={this.updateField} /> <br/>
        DESCRIPTION: <input type="text" name="description" value={this.state.newProduct.description}    onChange={this.updateField} /> <br/>
        ACCORDION: <input type="text" name="accordion" value={this.state.newProduct.accordion} onChange={this.updateField}  /><br/>
        PLATFORM: <input type="text" name="platform" value={this.state.newProduct.platform} onChange={this.updateField}  /><br/>
        BARCODE: <input type="integer" name="barcode" value={this.state.newProduct.barcode} onChange={this.updateField}  /><br/>
        STYLE: <input type="text" name="style" value={this.state.newProduct.style} onChange={this.updateField} /><br/>
        STATUS: <input type="text" name="status" value={this.state.newProduct.status} onChange={this.updateField} /><br/>
        <br/>
        SUBMIT: <input type="Submit" name="Submit" value="Enter PopSocket"/>
  </form>

  </div>
  <div class="column">
    Third column
  </div>
</div>

  </div>
      <h1>Enter PopSocket here</h1>
      <form class="container" onSubmit={this.onSubmit}>
          SKU: <input type="integer" name="sku" value={this.state.newProduct.sku} onChange={this.updateField} /> <br/>
          DESCRIPTION: <input type="text" name="description" value={this.state.newProduct.description}    onChange={this.updateField} /> <br/>
          ACCORDION: <input type="text" name="accordion" value={this.state.newProduct.accordion} onChange={this.updateField}  /><br/>
          PLATFORM: <input type="text" name="platform" value={this.state.newProduct.platform} onChange={this.updateField}  /><br/>
          BARCODE: <input type="integer" name="barcode" value={this.state.newProduct.barcode} onChange={this.updateField}  /><br/>
          STYLE: <input type="text" name="style" value={this.state.newProduct.style} onChange={this.updateField} /><br/>
          STATUS: <input type="text" name="status" value={this.state.newProduct.status} onChange={this.updateField} /><br/>
          <br/>
          SUBMIT: <input type="Submit" name="Submit" value="Enter PopSocket"/>
    </form>

       <h1>View PopSocket Image Here</h1>
         <div class="field"><label class="label">Subject</label>

        <div class="control">
             <div class="select">
               <select>
                 <option>Select dropdown</option>
                 <option>With options</option>
               </select>
             </div>
           </div>
         </div>
       <div className= 'footer'><h1>Footer</h1></div>
  </body>

</div>
  }
}
