import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

 

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
