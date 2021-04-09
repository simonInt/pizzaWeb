import React from 'react';
import './App.css';

class PizzaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    addPizza(pizza){
        let alreadyIn = false;
        let array = [];

        if(localStorage.getItem("panier") == null){
            pizza.quantity = 1;
            array.push(pizza);         
        }
        else{
            array = JSON.parse(localStorage.getItem("panier"));  
            
            if(array.forEach(el => {
                if(el.pizzaId == pizza.pizzaId){
                    el.quantity++;
                    alreadyIn = true
                }
            }))

            console.log(alreadyIn)

            if(alreadyIn === false){
                pizza.quantity = 1;
                array.push(pizza);
            }
        }

        localStorage.setItem("panier", JSON.stringify(array));

        this.props.addPizzaEvent();
    }

    render() {
        return (
            <div className="col-md-3">
                <div class="card w-75 pizzaCard">
                    <div class="card-body text-center">
                        <img src={"/img/"+this.props.data.imgPath} className="card-img-top" alt="..." ></img>
                        <h5 className="card-title">{this.props.data.nom}</h5>
                        <p className="card-text">{this.props.data.description}</p>
                        <div className="addPizzaButtonDiv">
                        <div className="alignBottom">
                            <button onClick={() => this.addPizza(this.props.data)} class="button btn btnAddPizza fas fa-shopping-cart" type="button">AJOUTER</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PizzaCard;
