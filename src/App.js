import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
class App extends Component {
  constructor(props){
    super(props);
    }
  
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
          </Layout>
      </div>
    );

  }
}

export default App;
