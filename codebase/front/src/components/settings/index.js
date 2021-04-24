import React from 'react';
import { getSettings, updateSettings } from '../../services/common';

import TopNav from '../top-nav';

class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sedtting: []
        };
    }

    componentDidMount() {
        getSettings().then((res) => {
            let sedtting = res.data;

            this.setState({
                sedtting
            });
        });
    }

    render() {
        return (

            <React.Fragment >
                <TopNav />
                
                <form>
                    <div className="form-group">
                        <label for="first_name">First Name</label>
                        <input type="text" className="form-control" id="first_name" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" placeholder="Last Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </React.Fragment>
        );
    }
}

export default Setting;