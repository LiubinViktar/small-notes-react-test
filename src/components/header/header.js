import React from 'react';
import './header.css';

const Header = ({user}) => {
    return (
        <div className="d-flex app-header">
            <h1>
                {user}
            </h1>
            <h2>
                3 notes, favorite 1
            </h2>
        </div>
    )
}

export default Header;