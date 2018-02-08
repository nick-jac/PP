import React from 'react'
import api from '../api'

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
    this.save = this.save.bind(this)
  }
  updateField(e) {
    console.log('name', e.target.name)
    console.log('value', e.target.value)
    const {newProduct} = this.state
    newProduct[e.target.name] = e.target.value
    this.setState({newProduct})
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(e)
    console.log(this.state.newProduct)
    this.save()
  }

  save() {
    const product = this.state.newProduct
    this.setState({newProduct: {
      sku: '',
      description: '',
      accordion: '',
      platform: '',
      barcode: '',
      style: '',
      status: ''
    }})
    this.props.submitCallback(product)
  }

  render() {
    //console.log(this.state.newProduct)
    console.log(this.onSubmit)
    const {sku, description, accordion, platform, barcode, style, status} = this.state.newProduct
    return <div className="flex-container">
      <form onSubmit={this.onSubmit}>
      <h1>Enter PopSocket here</h1>
      <div><input name="sku" placeholder="SKU" type="integer" onChange={this.updateField} value={this.state.newProduct.sku} /></div>
      <div><input name="description" placeholder="Name" type="text" onChange={this.updateField} value={this.state.newProduct.description} /></div>
      <div><input name="accordion" placeholder="Accordion Colour" type="text" onChange={this.updateField} value={this.state.newProduct.accordion} /></div>
      <div><input name="platform" placeholder="Platform Colour" type="text" onChange={this.updateField} value={this.state.newProduct.platform} /></div>
      <div><input name="barcode" placeholder="Barcode" type="integer" onChange={this.updateField} value={this.state.newProduct.barcode} /></div>
      <div><input name="style" placeholder="Style" type="text" onChange={this.updateField} value={this.state.newProduct.style} /></div>
      <div><input name="status" placeholder="Status" type="text" onChange={this.updateField} value={this.state.newProduct.status} /></div>
      <input name="Submit" type="Submit" value="Enter the PopSocket"/>
       </form>
      </div>
  }
}