import React from 'react';
import { employee_list } from '../../services/common';

class EmployeeList extends React.Component {
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
            return (
                <tr key = { `${key}` }>
                    <td> { a.id } </td>
                    <td> { a.first_name } </td>
                    <td> { a.last_name } </td>
                    <td> { a.designation } </td>
                    <td> <a href={`employees/${a.id}`}>Edit</a> </td>
                </tr>)
        })

        return html;
    }

    render() {
        return( <table className="table">
          <thead>
            <tr>
              <th colSpan="5">Employee List</th>
            </tr>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { this.employeeView() }
          </tbody>
        </table>);
    }
}

export default EmployeeList;