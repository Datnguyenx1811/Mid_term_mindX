import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <h1>Anonime</h1>
            <nav>
                <a className="navbar-item" href="/">Home</a>
                <a className="navbar-item" href="/list-anime">List anime</a>
            </nav>
            <input type="text" placeholder="Search anime or movie" />
        </header>
    );
}
