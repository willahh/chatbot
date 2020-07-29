import React, { Component } from 'react'

class Formulaire extends Component {
  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    console.log('createMessage')
    const { addMessage, pseudo, length } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)

    // Reset
    this.setState({ message: '', length })
  }

  handleSubmit = event => {
    console.log('handleSubmit', this.state.message.length)
    event.preventDefault()
    this.createMessage()
  }

  handleChange = event => {
    console.log('handleChange')
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

  handleKeyUp = event => {
    console.log('handleKeyUp')
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  render () {
    return (
      <form
        className='form'
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
      >
        <textarea
          required
          value={this.state.message}
          maxLength={this.props.length}
        />
        <div className='info'>{this.state.length}</div>
        <button type='submit'>Envoyer!</button>
      </form>
    )
  }
}

export default Formulaire
