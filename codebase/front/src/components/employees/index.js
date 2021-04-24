import React from 'react';
import { employee_list, deleteEmployee } from '../../services/common';

import Loader from '../Loader';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee_list: [],
            loader: false
        };
    }

    componentDidMount() {
        this.getEmployeeList();
    }

    tongleLoader = (status)=>{
        let oldState = Object.assign({},this.state.loader);
        oldState = status;
        this.setState(currentState => ({loader: oldState}), () => {});
    }

    deleteEmployee = (id) =>{
        if(window.confirm('Are you sure you want to remove this employee?')){
            this.tongleLoader(true);

            deleteEmployee(id).then((res) => {
                
                setTimeout(()=>{
                    this.getEmployeeList();
                    this.tongleLoader(false)
                }, 2000);

            });
        }
    }

    getEmployeeList = () => {
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
                    <td> 
                        <a href={`employees/${a.id}`}>Edit</a> &nbsp;
                        <a onClick={()=>this.deleteEmployee(a.id)} href={`#`}>Delete</a> &nbsp;
                    </td>
                </tr>)
        })

        return html;
    }

    render() {
        return(

            <React.Fragment>
                {this.state.loader===true?
                <Loader />:null
                }

                <table className="table">
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
                </table>
            </React.Fragment>
        );
    }
}

export default EmployeeList;