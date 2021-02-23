import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./components/StateProvider"
import reducer , {initialState} from "./components/Reducer"

// components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
