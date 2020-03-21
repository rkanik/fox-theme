import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app/App"



//import "uikit/dist/css/uikit.min.css"
//import "bootstrap/dist/css/bootstrap.min.css"

// Style sheets
import "./assets/css/style.css"
import "./assets/css/night-mode.css"

// Bootstrap and Uikit
import "./assets/css/framework.css"
import "./assets/css/bootstrap.css"

import "./assets/css/icons.css"


// library files
import "./lib/jqueryLoader"

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);