import React, { Component } from 'react'

class Formulaire extends Component {
  state = {
    message: ''
  }

  createMessage = () => {
    console.log('createMessage')
    const { addMessage, pseudo } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)

    // Reset
    this.setState({ message: '' })
  }

  handleSubmit = event => {
    console.log('handleSubmit')
    event.preventDefault()
    this.createMessage()
  }

  handleChange = event => {
    console.log('handleChange')
    const message = event.target.value
    this.setState({ message })
  }

  render () {
    return (
      <form
        className='form'
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <textarea
          required
          value={this.state.message}
          maxLength='140'
        />
        <div className='info'>140</div>
        <button type='submit'>Envoyer!</button>
      </form>
    )
  }
}

export default Formulaire
