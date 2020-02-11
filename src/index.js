import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

//const element = React.createElement('h1',{},'Hola asdasd')

const container = document.getElementById('app');

ReactDOM.render(<App />, container);


//firstName="Jonathan" lastName="Delgado" />, container);