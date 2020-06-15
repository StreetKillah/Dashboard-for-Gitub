import React from 'react';
import styles from '../styles/header.scss';
import logo from '../img/Octocat.png';

class Header extends React.Component{

    render() {
        return(
            <div>
                <div className="header">
                    <div className="header_content">
                        <span>Github Dashboard</span>
                            <img src={logo} alt="cat" />
                    </div>
        
                </div>
            </div>
        )
    }
    
}







export default Header;