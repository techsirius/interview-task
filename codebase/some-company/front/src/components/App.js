import React from 'react';

import Dashboard from './dashboard/index';
import TopNav from './top-nav';

class App extends React.Component {
    componentDidMount() {

    }

    render() {
        return ( 
        	<React.Fragment>
	            <TopNav />
	            <Dashboard />
            </React.Fragment>
        );
    }
}

export default App;