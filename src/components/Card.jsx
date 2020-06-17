import React, {useState, useEffect} from 'react';
import styles from '../styles/card.scss';
import star from '../img/star.svg';



function Card(props) {

  var languages = [];
  var contributors = []

  fetch(props.rep.contributors_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if(data.length >= 10){
      for(let i = 0; i < 10; i++){
        contributors.push(data[i].login);
        console.log(data[i].login);
      }
    }
    else {
      for(let i in data){
        contributors.push(data[i].login);
      }
    }
    
   
    if(contributors.length > 0){
      for(let c in contributors){
       document.getElementById('contributors').insertAdjacentHTML('beforeend', 
       `<li>${contributors[c]}</li>`)
      }
    }
  })
  

fetch(props.rep.languages_url)
  .then((response) => {
    return response.json();
  }).then((data) => {
     for(let lang in data){
       languages.push(lang);
     }
     if(languages.length > 0){
       for(let lang in languages){
        document.getElementById('languages').insertAdjacentHTML('beforeend', 
        `<li id='lang'>${languages[lang]}</li>`)
       }
      
     }
     console.log(languages)
  })
    

  

    return(
      <div className="Card">
          <div className="card_container">
            <span id="card_name">{props.rep.name}</span>
            <span id="owner">by&nbsp;&nbsp;<a href={props.rep.owner.html_url}>{props.rep.owner.login}</a><img src={props.rep.owner.avatar_url} alt="." /></span>
            <div id="last_commit"><span>Last commit:</span> {props.rep.updated_at.slice(0,10)}</div>
            <span id="stars"><img src={star} alt="." />{props.rep.stargazers_count}</span>
            <span id="description">{props.rep.description}</span>
            <ol id="contributors">Contributors: </ol>
            <ol id="languages">{languages != [] && <span>Languages: </span> }
            </ol>
            
            
          </div>
      </div>
    );
  
}

export default Card;
