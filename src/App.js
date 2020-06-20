import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  const [endPoint, setEndPoint] = useState('https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=10');
  const [repositories, changeRepositories] = useState([]);
  const [currentName, nextName] = useState('');
  const [currentPage, nextPage] = useState(1);
  const [currentRep, nextRep] = useState(0);

  //для обновления страницы:
  useEffect(() => {
    const input_field = localStorage.getItem('my_input');
    if(input_field){
      document.getElementById('input_user').value = input_field;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my_input', currentName);
  });





  useEffect(() => {
  fetch(endPoint)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      changeRepositories(data.items);
      console.log(data.items);
      console.log(currentPage)
  })
},[endPoint]); 

  
var handleChange = (event) => {
  nextName(event.target.value);
  if(currentName != ''){
    setEndPoint(`https://api.github.com/search/repositories?q=${currentName}+in:name&sort=stars&order=desc&page=1&per_page=10`);
  }
  else {
    setEndPoint('https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=10')
  }
}

var pageChanger = (event) => {
  nextPage(event.target.innerHTML);
  if(currentName != ''){
    setEndPoint(`https://api.github.com/search/repositories?q=${currentName}+in:name&sort=stars&order=desc&page=${currentPage}&per_page=10`);
  }
  
  // event.target.style.color="#46527a";
  // event.target.style.fontWeight=500;
}

var getId = (event) => {
  let currentId = repositories.forEach((item) => {
    if(event.target.innerHTML === item.name){
        nextRep(repositories.indexOf(item));
    }
  });
}

console.log(currentRep);

      

    return(
      <BrowserRouter>
          <div className="App">
              <Header />
              <Switch>
                  <Route exact path='/' render={() => <Main handleChange={handleChange} pageChanger={pageChanger} repositories={repositories} getId={getId} />}/>
                  <Route path='/card' render={() => <Card rep={repositories[currentRep]}  />}/>
              </Switch>
          </div>
      </BrowserRouter>
    );
  }


export default App;
