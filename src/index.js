import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

// Import custom types
import type { AppProps } from './index-js.types';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
