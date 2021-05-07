import React from 'react';
import { employee_list, deleteEmployee, deleteMultiEmployee } from '../../services/common';

import Loader from '../Loader';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee_list: [],
            loader: false,
            employee_ids: []
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

    deleteSelected = ()=>{

        if(window.confirm('Are you sure you want to remove selected employees?')){
            this.tongleLoader(true);

            deleteMultiEmployee(this.state.employee_ids).then((res) => {
                
                setTimeout(()=>{
                    this.getEmployeeList();
                    this.tongleLoader(false)

                    let oldState = [...this.state.employee_ids];
                    oldState    =   [];
                    this.setState(currentState => ({employee_ids: oldState}), () => {});

                }, 2000);

            });
        }

    }

    selectId = (e, id) => {

        let oldState = [...this.state.employee_ids];

        if(e.target.checked){
            oldState.push(id);
        }else{
            let index = oldState.indexOf(id);
            oldState.splice(index, 1);
        }

        this.setState(currentState => ({employee_ids: oldState}), () => {
            // console.log(this.state.employee_ids)
        });

    }

    employeeView = () => {
        let html = [];

        html = this.state.employee_list.map((a, key) => {
            return (
                <tr key = { `${key}` }>
                    <td>
                        <input type="checkbox" onClick={(e)=>this.selectId(e, a.id)} />
                    </td>
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
                      <th>
                        <a onClick={()=>this.deleteSelected()} href={`#`}>Delete</a>
                      </th>
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