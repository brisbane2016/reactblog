import React, { useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';

const Header = () => {

    // hover dropdow and show sub menu: hover event (in the mobile view, it is click and not hover ,you can't hover in phone )
    const [navbarDropdown, setnavbarDropdown] = useState(false);

    // responsive button 
    const [navtoggle, setnavtoggle] = useState(false);
    const handleToggle = () => {
        setnavtoggle(!navtoggle)
    }

   


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <Link  className="navbar-brand" to="/">Navbar</Link>

                <button onClick={handleToggle}
                    className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarColor01" aria-controls="navbarColor01"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={(!navtoggle ? 'collapse' : '') + ' navbar-collapse'} id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink  exact className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/userlist">User List</NavLink>
                        </li>
                     
                        <li className="nav-item dropdown" onMouseEnter={() => setnavbarDropdown(true)} >

                                <Link className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to='#'
                                    >User import</Link>
                                <div className={(navbarDropdown ? 'show ' : '') + 'dropdown-menu'}
                                onMouseLeave={() => setnavbarDropdown(false)}
                                    aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/importuserpage">User import</Link>
                                    <Link className="dropdown-item" to="/importuserpage">User import</Link>

                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/importuserpage">User import</Link>
                                </div>

                            
                        </li>

                    </ul>

                </div>
            </nav>



        </>


    );
}

export default Header;


// use  <NavLink> auto get 'active' class  in the menu

//  use exact to tell NavLink don't read "/" and "/albums" ,only read '/'