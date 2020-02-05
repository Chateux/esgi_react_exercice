import React from 'react';
import './App.css';
import Utilisateurs from './Utilisateurs';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Header';

class App extends React.Component {
  state = {
    users: [
      {id: 1, name:'Yann', sexe: 'Masculin'},
      {id: 2, name:'tata', sexe: 'Feminin'},
    ],
    pseudo: null

  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  componentDidMount() {
    console.log('ok');
  }
  // J'écris Yann avant que je rajoute le n on voit bien qu'il y a Yan
  componentDidUpdate(prevProps, prevState) {
    console.log('ok mise à jour !');
    console.log(prevProps, prevState);
  }

  render(){
    // Sous composant et va afficher la page d'accueil
    // Ajouter le mot clé exact
    // Page d'accueil il s'affiche que le /
    //  <Route path="/info" component={Info}/>
    return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
   
      <header className="App-header">
      Wow votre peudo est : {this.state.pseudo}
        <Utilisateurs users={this.state.users}/>
        
        <form onSubmit={this.submit}>
          Entrez votre pseudo : 
          <input type="text" id="pseudo" onChange={this.change} />
    
          <button>Send</button>
          
        </form>
       
      </header>
    </div>
  );


  }


  
}

export default App;
