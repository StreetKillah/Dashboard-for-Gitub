import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';

class App extends React.Component {

 

  render(){
    return(
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
