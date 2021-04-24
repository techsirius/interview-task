import React from 'react';
import { employee_list } from '../../services/common';

class Employees extends React.Component {
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

        html.push( < div class = "list-group" > < /div>);

        html = this.state.employee_list.map((a, key) => {
            return ( < div key = { key } > { a.name }, { a.designation }, { a.joining_date } < /div>)
        })

        return html;
    }

    render() {
        return <div > { this.employeeView() } < /div>;
    }
}

export default Employees;