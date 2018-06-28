
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import Background from './img/back3.jpg'



ReactDOM.render(<App style={{backgroundImage: `url(${Background})`}}/>, document.getElementById('app'));
