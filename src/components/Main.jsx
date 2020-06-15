import React from 'react';
import styles from '../styles/main.scss';
import icon from '../img/4023817131558096454.svg';


class Main extends React.Component {
  render(){
    return(
      <div>
          <div className="main">
              <div className="container">
                <div className="title_page">
                    <span>Поиск репозиториев GitHub №1</span>
                </div>
                <div className="search" id="search">
                      <input type="text" placeholder="Найти репозиторий" name="input_key" id="input_user"/>
                      <button type="submit" id="submit_user"><span>Найти репозиторий</span><img src={icon} alt="." /></button>
                </div>
                  <div className="repositories_list" id="repositories_list">
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
}

export default Main;
