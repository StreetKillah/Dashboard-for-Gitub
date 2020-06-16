import React, {useState, useEffect} from 'react';
import styles from '../styles/main.scss';
import icon from '../img/4023817131558096454.svg';
import star from '../img/star.svg';


export default function Main(){
    const [endPoint, setEndPoint] = useState('https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=10');
    const [repositories, changeRepositories] = useState([]);
  
    useEffect(() => {
    fetch(endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        changeRepositories(data.items);
        console.log(data.items);
       
    })
  },[endPoint]); 

  var handleChange = (event) => {
    if(event.target.value != ''){
      setEndPoint(`https://api.github.com/search/repositories?q=${event.target.value}+in:name&sort=stars&order=desc`);
    }
    else {
      setEndPoint('https://api.github.com/search/repositories?q=stars&sort=stars&order=desc&per_page=10')
    }
  }
        

    return(
      <div>
          <div className="main">
              <div className="container">
                <div className="title_page">
                    <span>Поиск репозиториев GitHub №1</span>
                </div>
                <div className="search" id="search">
                      <input type="text" onChange={handleChange} placeholder="Найти репозиторий"id="input_user"/>
                      <button type="submit"  id="submit_user"><span>Найти репозиторий</span><img src={icon} alt="." /></button>
                </div>
                  <div className="repositories_list" id="repositories_list">
                  {repositories && repositories.map((elem) => {
                          return( <div id='elem' key={elem.id}><span id="name_elem">{elem.name}</span>
                                <span id="owner"><img src={elem.owner.avatar_url} alt="." /><div>by {elem.owner.login}</div></span>
                                <span id="last_commit">Last commit: {elem.updated_at.slice(0,10)}</span>
                                <a href="https://${elem.git_url.slice(6)}" id="link_to_github">Open at Github</a>
                                <span id="stars"><img src={star} alt="." />{elem.stargazers_count}</span>
                            </div>)}) 
                            }
                  </div> 
                  <div className="paginator">
                      <span id="paginator">
                      </span>
                  </div>
              </div>
           </div>
      </div>
    
    );
  
}

