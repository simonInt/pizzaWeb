import React from "react";

import { Route, Redirect } from "react-router-dom";

 

const parseJwt = (token) => {

    var base64Url = token.split('.')[1];

    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {

    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

}).join(''));

 

    return JSON.parse(jsonPayload);

};

 

const validToken = (token) => {

    let tokenContent = parseJwt(token);

 

    console.log('exp', tokenContent.exp);

    console.log('newDate', +new Date().setHours(new Date().getHours() + 1) / 1000);

 

    if((+new Date().setHours(new Date().getHours() + 1)) / 1000 <= tokenContent.exp){

        return true;

    }

    return false;

}

 

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render ={({ props }) =>
        (localStorage.getItem("access_token") && validToken(localStorage.getItem("access_token"))) ? (
          
          <Component {...props}/>

        ) : (

          <Redirect
            to='/login'
          />
        )
      }
    />
  );
};

export default ProtectedRoute;