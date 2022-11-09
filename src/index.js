// React help in crating components and its lifecycle
import React from 'react';

// to add the React jsx TO BROWSER
import ReactDOM from 'react-dom/client';

import App from './App';

// get access to root element of index.html
const ele = document.getElementById('root');

// this will add to root element
const root = ReactDOM.createRoot(ele);

// render React component to browser
root.render(
  <App />
);
