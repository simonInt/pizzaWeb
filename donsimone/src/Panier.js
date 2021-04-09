import React from 'react';
import './Panier.css';
import Header from './Header';
import fromage from './img/fromage.png';

class Panier extends React.Component {
  render() {
    return (
      <div>
        
        <div className="card text-center Panier-card">
          <div className="card-body">
            <h5 className="card-title">4 Fromage</h5>
            <img src={fromage} className="card-img Panier-card-img" alt="..." ></img>
            <div className="card-text Panier-card-text">
              <p>Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP</p>
            </div>
          </div>
        </div>

        <div className="card text-center Panier-card">
          <div className="card-body">
            <h5 className="card-title">4 Fromage</h5>
            <img src={fromage} className="card-img Panier-card-img" alt="..." ></img>
            <div className="card-text Panier-card-text">
              <p>Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Panier;
