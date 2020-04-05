import React from 'react'

import {Link} from 'react-router-dom'

class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light AppText">
                <Link to="/" className="navbar-brand">
                    To All Posts
                </Link>
                  |
                <span className="navbar-text">
                <Link to="/login" className="navbar-brand">
                   Login
                </Link>
                </span>
            </nav>
        );
    }
}

export default Header;
