import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard/index';
import EmployeeCreate from './components/employees/create';
import EmployeeEdit from './components/employees/edit';
import Setting from './components/settings/index';
// import reportWebVitals from './reportWebVitals';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import { PUBLIC_DIRECTORY_PATH } from './config/index';

ReactDOM.render( 
	<React.StrictMode>
	    <Router>
		    <Switch>
			    <Route exact path = { `/dashboard` } component = { Dashboard } /> 
			    <Route exact path = { `/employees/create` } component = { EmployeeCreate } />
			    <Route exact path = { `/employees/:employee_id` } component = { EmployeeEdit } />
			    <Route exact path = { `/settings` } component = { Setting } />
			    <Route exact path="/" render={() => (
				    <Redirect from="/" to={ `/dashboard` } />
				)}/>
		    </Switch>
	    </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// reportWebVitals();