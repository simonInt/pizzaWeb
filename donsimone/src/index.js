import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Panier from './Panier';
import Login from './Login';
import addPizza from './addPizza';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

const Root = () => {
  return(
    <Router>
      <Switch>
      
        <Route exact path='/' component={App} />
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/panier' component={Panier}/>
        <ProtectedRoute exact path='/addPizza' component={addPizza}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
