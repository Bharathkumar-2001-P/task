import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import ShoppingComponent from './ShoppingComponent';
import DataBindingComponent from './DataBindingComponent';
import TwoWayBinding from './TwoWayBinding';

import EventHandilingComponent from './EventHandilingComponent';
import WeatherApp from './WeatherApp';
import TwoWayClassDemo from './TwoWayClassDemo';
import ShoppingClassDemo from './ShoppingCalassDemo';
import LoginComponent from './LoginComponent';
import Practice from './DataBindingComponent';
import FormComponent from './FormComponent';
import PracticeComponent from './PracticeComponent';
import FormikDemo from './FormikDemo';
import FormikValidation from './FormikValidation';
import YupValidation from './YupValidation';
import YupValidationComponent from './YupValidationComponent';
import LifeCycleDemo from './LifeCycleDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PracticeComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
