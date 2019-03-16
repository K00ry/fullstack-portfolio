import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  state ={
    greet:'',
    note:''

  };

  componentDidMount() {
    axios.post('/').then(response=>{
      console.log(response);
      const{greet,note}= response.data;
      this.setState({
        greet,
        note
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h2>{this.state.greet}</h2>
        <p>{this.state.note}</p>
      </div>
    );
  }
}

export default App;
