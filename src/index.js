import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/Global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
