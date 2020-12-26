import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div>
           <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/articles" activeClassName="active">Articles</NavLink>
                </li>
                

                <li className="nav-item">
                <NavLink className="nav-link" to="/guestbook" activeClassName="active">Guestbook</NavLink>
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