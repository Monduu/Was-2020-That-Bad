import {NavLink} from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import { header } from '../CSS/header.css';

import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';




function Header() {
    return (
        <div className="header">
           <ul className="nav">

           
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/articles" activeClassName="active">Articles</NavLink>
                </li>
                

                <li className="nav-item">
                <NavLink className="nav-link" to="/guestbook" activeClassName="active"><FontAwesomeIcon icon={faBook}/> Guestbook</NavLink>
                </li>


                <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/about-us" activeClassName="active" >About us</NavLink>
                </li>
                </ul>
        </div>
    );
}

export default Header;