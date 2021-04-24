import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.css';
import Dashboard from './components/dashboard/index';
import EmployeeCreate from './components/employees/create';
// import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import { PUBLIC_DIRECTORY_PATH } from './config/index';

ReactDOM.render( <
    React.StrictMode >
    <
    Router >
    <
    Switch >
    <
    Route exact path = { `/dashboard` }
    component = { Dashboard }
    /> <
    Route exact path = { `/employees/create` }
    component = { EmployeeCreate }
    /> < /
    Switch > <
    /Router> < /
    React.StrictMode > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();