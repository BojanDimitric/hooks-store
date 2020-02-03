import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { StateProvider } from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StateProvider><App /></StateProvider>, document.getElementById('root'));

serviceWorker.unregister();
