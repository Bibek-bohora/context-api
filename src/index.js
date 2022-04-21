import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// contextapi wuith reducer index.js
import {StateProvider} from "./utils/stateProvider"
import reducer, {  initialState } from "./utils/Reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* contextapi wuith reducer */}
    <StateProvider  initialState={ initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
);
