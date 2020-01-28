import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './page/BadgeNew';
import Badges from './page/Badges';

//const element = React.createElement('h1',{},'Hola asdasd')

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);


//firstName="Jonathan" lastName="Delgado" />, container);