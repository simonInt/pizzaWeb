import React from 'react';
import './App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            loggedIn: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick() {
        fetch('https://pizzaworld20210430170205.azurewebsites.net/auth/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'email': this.state.login,
                'password': this.state.password
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    throw ("Erreur de connexion.");
                }
                return response.json()
            })
            .then(token => {
                localStorage.setItem('access_token', token)
                this.setState({
                    loggedIn: true
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Se connecter</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">

                                        <input type="text" className="form-control" name="login" placeholder="Utilisateur" onChange={(e) => this.handleChange(e)} />

                                    </div>
                                    <div className="input-group form-group">

                                        <input type="password" className="form-control" name="password" placeholder="MotDePasse" onChange={(e) => this.handleChange(e)} />
                                    </div>

                                    <div className="form-group">
                                        <button type="button" className="btn float-right login_btn" onClick={() => this.handleClick()} >Connexion</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center">
                                    <a href="/">Accueil</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Login;