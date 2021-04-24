import React from 'react';
import { employee_list } from '../../services/common';

class EmployeeCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee_list: []
        };
    }

    componentDidMount() {
        employee_list().then((res) => {
            let employee_list = res.data;

            this.setState({
                employee_list
            });
        });
    }

    employeeView = () => {
        let html = [];

        html = this.state.employee_list.map((a, key) => {
            return ( < div className = "list-group-item"
                key = { key } > { a.name }, { a.designation }, { a.joining_date } < /div>)
            })

        return html;
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default EmployeeCreate;