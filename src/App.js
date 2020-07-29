import React, { Component } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    console.log('addMessage')
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    console.log(messages)
    this.setState({ messages })
  }

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
         />
      ))

    console.log('messages', messages)

    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <div className="message">
              { messages }
            </div>
          </div>
        </div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
