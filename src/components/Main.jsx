import React from 'react';
import styles from '../styles/main.scss';
import star from '../img/star.svg';
import {NavLink} from 'react-router-dom';

export default function Main(props){
 

    return(
      <div>
          <div className="main">
              <div className="container">
              <div className="title_page">
                    <span>Поиск репозиториев GitHub №1</span>
                </div>
                <div className="search" id="search">
                      <input type="text" onChange={props.handleChange} placeholder="Найти репозиторий"id="input_user"/>
                      {/* <button type="submit"  id="submit_user"><span>Найти репозиторий</span><img src={icon} alt="." /></button> */}
                </div>
                  <div className="repositories_list" id="repositories_list">
                  {props.repositories && props.repositories.map((elem) => {
                          return( <div id='elem' key={elem.id}><span id="name_elem"><NavLink to='/card' onClick={props.getId}>{elem.name}</NavLink></span>
                                <span id="owner"><img src={elem.owner.avatar_url} alt="." /><div>by {elem.owner.login}</div></span>
                                <span id="last_commit">Last commit: {elem.updated_at.slice(0,10)}</span>
                                <a href={"https://"+`${elem.git_url.slice(6)}`} id="link_to_github">Open at Github</a>
                                <span id="stars"><img src={star} alt="." />{elem.stargazers_count}</span>
                            </div>)}) 
                            }
                  </div>
                  <div className="paginator">
                      <span id="paginator">
                          <ol>
                              <li onClick={props.pageChanger}>1</li>
                              <li onClick={props.pageChanger}>2</li>
                              <li onClick={props.pageChanger}>3</li>
                              <li onClick={props.pageChanger}>4</li>
                              <li onClick={props.pageChanger}>5</li>
                              <li onClick={props.pageChanger}>6</li>
                              <li onClick={props.pageChanger}>7</li>
                              <li onClick={props.pageChanger}>8</li>
                              <li onClick={props.pageChanger}>9</li>
                              <li onClick={props.pageChanger}>10</li>
                          </ol>
                      </span>
                  </div>
              </div>
           </div>
      </div>
    
    );
  
}

