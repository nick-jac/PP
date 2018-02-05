import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
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
  }
  updateField(e) {
    console.log(e.target.name, e.target.value)
    const {newProduct} = this.state
    newProduct[e.target.name] = e.target.value
    this.setState({newProduct})
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.create(this.state.newProduct)
    this.setState({newProduct: {
      sku: '',
      description: '',
      accordion: '',
      platform: '',
      barcode: '',
      style: '',
      status: ''
    }})
    console.log(this.state)
  }
  render() {
    //console.log(this.state.newProduct)
    const {sku, description, accordion, platform, barcode, style, status} = this.state.newProduct
    return <div className="flex-container">
      <form onSubmit={this.onSubmit}>
      <h1>Enter PopSocket here</h1>
      <div><input placeholder="SKU" type="integer" onChange={this.updateField} value={sku} /></div>
      <div><input placeholder="Name" type="text" onChange={this.updateField} value={description} /></div>
      <div><input placeholder="Accordion Colour" type="text" onChange={this.updateField} value={accordion} /></div>
      <div><input placeholder="Platform Colour" type="text" onChange={this.updateField} value={platform} /></div>
      <div><input placeholder="Barcode" type="integer" onChange={this.updateField} value={barcode} /></div>
      <div><input placeholder="Style" type="text" onChange={this.updateField} value={style} /></div>
      <div><input placeholder="Status" type="text" onChange={this.updateField} value={style} /></div>
      <input type="Submit" value="Enter the PopSocket" />

     </form>
   </div>

  }
}
