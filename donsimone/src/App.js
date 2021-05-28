import React from 'react';
import './App.css';
import PizzaCard from './PizzaCard';
import Header from './Header';
import Banniere from './img/Banniere.png';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: [],
      pizzasInCart: 0
    }
  }
  
  componentDidMount() {
    fetch('https://pizzaworld20210430170205.azurewebsites.net/pizza', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':'Bearer'+ localStorage.getItem('access_token')
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          pizzas: data
        }, () => console.log(this.state.pizzas))
      })
      .catch(err => {
        console.log(err)
      })

    this.calculateNumberOfPizzasInCart();
  }

  calculateNumberOfPizzasInCart() {
    let numberOfPizzas = 0;

    if (localStorage.getItem("panier") !== null) {
      let pizzas = JSON.parse(localStorage.getItem("panier"));


      pizzas.forEach(pizza => {
        numberOfPizzas += pizza.quantity;
      })
    }

    this.setState({
      pizzasInCart: numberOfPizzas
    })
  }

  catchAddPizzaEvent() {
    this.calculateNumberOfPizzasInCart();
  }

  render() {
    return (
      <div className="back">
        <Header pizzasInCart={this.state.pizzasInCart} />
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Banniere} alt="First slide"></img>
              </div>
            </div>
          </div>
        <div className="body">
          <div className="row">
            {
              this.state.pizzas.map(pizza => <PizzaCard addPizzaEvent={() => this.catchAddPizzaEvent()} data={pizza} />)
            }

          </div>
        </div>
      </div>

    )
  }
}

export default App;
