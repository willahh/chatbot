import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBFMo2rqVvd3Id4XTGVVt5WqRehirQ9g_E',
  authDomain: 'chatbot-fr.firebaseapp.com',
  databaseURL: 'https://chatbot-fr.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
