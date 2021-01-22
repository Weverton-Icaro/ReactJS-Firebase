import React, { Component } from 'react';
import firebase from './FireBaseConnetion';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      user: null
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.auth = this.auth.bind(this);
    this.deslogar = this.deslogar.bind(this);
    
  };

  componentDidMount() {
    this.auth();
  }

  auth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      }
    })
  }

  cadastrar() {

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).catch((error) => {
      if (error.code === 'auth/invalid-email') {
        alert('Email inválido! ');
      }
      if (error.code === 'auth/weak-password') {
        alert('Senha fraca! ');
      } else {
        alert('Codigo de error: ' + error.code)
      }
    })

  }

  logar() {

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).catch((error) => {
      if (error.code === 'auth/wrong-password') {
        alert('Senha inválido! ');
      } else {
        alert('Codigo de error: ' + error.code)
      }
    })

  }

  deslogar() {

    firebase.auth().signOut().then((user) => {
      this.setState({ user: null });
      alert('Deslogado com sucesso! ')
    })
  }


  render() {

    return (
      <div>
        {this.state.user ?
          <div>
            <p>Painel Admin</p><br />
            <p>Sejam bem vindo</p>
            <button onClick={this.deslogar}>Sair</button>
          </div>
          :
          <div>
            <h1>Seja bem vindo!</h1>


            <label>Email:</label><br />
            <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br />

            <label>Senha:</label><br />
            <input type="text" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /><br />


            <button onClick={this.cadastrar}>cadastrar</button>
            <button onClick={this.logar}>Login</button>
            <button onClick={this.deslogar}>Sair</button>
          </div>
        }
      </div>
    )
  }
}