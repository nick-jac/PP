import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: {
        sku: '',
        description: '',

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
      description: ''
    }})
    console.log(this.this.state)
  }
  render() {
    console.log(this.state.newProduct)
    const {sku, description} = this.state.newProduct
    return <form onSubmit={this.onSubmit}>
      <h1>Enter the PopSocket</h1>
      <input placeholder="SKU" type="integer" onChange={this.updateField} value={sku} />
      <input placeholder="Description" type="text" onChange={this.updateField} value={description} />
        <input type="Submit" value="Enter the PopSocket" />
    </form>


  }
}
