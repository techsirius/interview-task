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
            return ( <React.Fragment>
                <tr>
                    <td key = { `${key}_1` }> { a.id } </td>
                    <td key = { `${key}_2` }> { a.name } </td>
                    <td key = { `${key}_3` }> { a.designation } </td>
                </tr>
            </React.Fragment>)
        })

        return html;
    }

    render() {
        return( <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
          { this.employeeView() }
          </tbody>
        </table>);
    }
}

export default EmployeeList;