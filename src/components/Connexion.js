import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    console.log('handleChange')
    const pseudo = event.target.value

    this.setState({ pseudo })
  }

  handleSubmit = event => {
    console.log('handleSubmit')

    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.handleSubmit}>
          <input
            type='text' placeholder='Pseudo' required
            value={this.state.pseudo}
            onChange={this.handleChange}
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
