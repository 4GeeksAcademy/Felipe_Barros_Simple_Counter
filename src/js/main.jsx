import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0;

const secondsTimer = () => {
  root.render(
    <React.StrictMode>
      <Home seconds= {seconds}/>
    </React.StrictMode>,
  );
  seconds++
};

setInterval(secondsTimer , 1000);

secondsTimer();
