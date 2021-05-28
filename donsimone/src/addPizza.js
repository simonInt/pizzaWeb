import React from 'react';


class CreeFilm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Nom:'',
      ImgPath:'',
      Description:'',

    }
  }

  handlechange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
  handleClick(){  
  fetch('https://pizzaworld20210430170205.azurewebsites.net/pizza', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':'Bearer'+ localStorage.getItem('access_token')
          },
          body: JSON.stringify({
            "Description": this.state.Description,
            "Nom": this.state.Nom,
            "ImgPath": this.state.ImgPath,
            "TempPrepa": this.state.TempPrepa
          })
     })

    .then(response => {
    return response.json()
    })
    .then(body => {
    console.log(body)
        })
        .catch(err => {
            alert(err)
        })
    }

  render(){
    return (
        <div className='signup-container'>
  <div class='left-container'>
    <h1>
      <i className='fas fa-paw'></i>
      Ajouter une pizza
    </h1>
  </div>
  <div className='right-container'>
    <header>
      <div className='set'>
        <div className='pets-name'>
          <label htmlFor='pets-name'>Nom</label>
          <input id='pets-name' type='text' name='Nom' onChange={(e) => this.handlechange(e)}/>
        </div>
        <div className='pets-name'>
          <label htmlFor='pets-name'>Temp de préparation</label>
          <input id='pets-name' type='text' name='TempPrepa' onChange={(e) => this.handlechange(e)}/>
        </div>
      </div>
      
      <div className='pets-weight'>
        <label htmlFor='pet-weight-0-25'>Lien de l'image</label>
        <div className='radio-container'>
          <input id='Lien' placeholder='https%3A%2F%2FwwA' type='text' name='ImgPath' onChange={(e) => this.handlechange(e)}/>
        </div>
      </div>
      <div className='pets-weight'>
        <label htmlFor='pet-weight-0-25'>Description</label>
        <div className='radio-container'>
          <textarea id='description' placeholder='Description' type='text' name='Description' onChange={(e) => this.handlechange(e)}></textarea>
        </div>
      </div>
    </header>
    <footer>
      <div className='set'>
        <button id='back'>Annuler</button>
        <button id='next'onClick={() => this.handleClick()} >Publier</button>
      </div>
    </footer>
  </div>
</div>
      
);
    } 
}

export default CreeFilm;
