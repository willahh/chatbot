import React, { Component } from 'react';
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    console.log('addMessage')
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    console.log(messages);
    this.setState({ messages })
  }

  render () {
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <Formulaire 
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App;
