import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navtoggle, setnavtoggle] = useState(false);

    const handleToggle = () => {
        setnavtoggle(!navtoggle)

    }
   
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <button onClick={handleToggle} 
                                                className="navbar-toggler" 
                                                type="button" data-toggle="collapse"
                                                data-target="#navbarColor01" aria-controls="navbarColor01"
                                                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={(!navtoggle ? 'collapse' : '') + ' navbar-collapse'} id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/albums">Album</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Pricing</Link>
                        </li>

                    </ul>

                </div>
            </nav>



        </>


    );
}

export default Header;