import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  componentWillMount(){
    axios.get('/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&json=1&p=3&sid=1440_27216_21127_26350_20929&req=2&csor=1&cb=jQuery1102043400801481969076_1539522381615&_=1539522381618')
    .then(res=>{
      console.log(res);
    })
    .catch(e=>{
      console.error(e)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactqwe
          </a>
        </header>
      </div>
    );
  }
}

export default App;
