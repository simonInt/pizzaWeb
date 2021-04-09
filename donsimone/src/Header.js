import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import chargementScooter from './img/chargementScooter.gif';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={chargementScooter} className="scooterLogo" alt="..." ></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/panier'>Panier<span class="badge badge-secondary">{this.props.pizzasInCart}</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Login'>Connexion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;