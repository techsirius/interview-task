import React from 'react';

class TopNav extends React.Component {
    render() {
        return (<React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    
                        <li className="nav-item">
                            <a className="nav-link" href={`/dashboard`}>Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/employees/create`}>Add Employee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`#`}>Settings</a>
                        </li>

                    </ul>
                    <span className="navbar-text">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <a className="nav-link" href={`#`}>Logout</a>
                        </li>

                    </ul>
                    </span>
                </div>

            </nav>
        </React.Fragment>);
    }
}

export default TopNav;