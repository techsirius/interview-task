import React from 'react';

import EmployeeList from '../employees/index';
import TopNav from '../top-nav';

class Dashboard extends React.Component {
    render() {
        return ( 
        	<React.Fragment >
	        	<TopNav />
	            <EmployeeList />
            </React.Fragment>
        );
    }
}

export default Dashboard;