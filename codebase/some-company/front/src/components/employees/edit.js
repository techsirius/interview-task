import React from 'react';
import { getEmployee, updateEmployee } from '../../services/common';

import TopNav from '../top-nav';
import Loader from '../Loader';

class EmployeeEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: {
                first_name: '',
                last_name: '',
                designation: '',
            },
            loader: false
        };
    }

    componentDidMount() {

        let employee_id = this.props.match.params.employee_id;
        getEmployee(employee_id).then((res) => {
            let employee = res.data;

            this.setState({
                employee
            });
        });

    }

    tongleLoader = (status)=>{
        let oldState = Object.assign({},this.state.loader);
        oldState = status;
        this.setState(currentState => ({loader: oldState}), () => {});
    }
    updateEmployee = (e)=>{
        // e.preventDefault();
        let data = {
            id: this.state.employee.id,
            first_name: this.state.employee.first_name,
            last_name: this.state.employee.last_name,
            designation: this.state.employee.designation,
        };

        this.tongleLoader(true);
        updateEmployee(data).then((res) => {
            setTimeout(()=>{
                this.tongleLoader(false);

                this.props.history.push('/dashboard');
                
            }, 2000);
        });
    }

    handleInput = (e, obj)=>{

        let oldState = Object.assign({},this.state.employee);
        
        oldState[obj.name] = e.target.value
        
        this.setState(currentState => ({employee: oldState}), () => {});
    }

    render() {
        return (

            <React.Fragment >
                {this.state.loader===true?
                <Loader />:null
                }

                <TopNav />
                
                <form>
                    <div className="form-row align-items-center">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={(e)=>this.handleInput(e, {name:'first_name'})} value={this.state.employee.first_name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" id="last_name" placeholder="Last Name" onChange={(e)=>this.handleInput(e, {name:'last_name'})} value={this.state.employee.last_name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" className="form-control" id="designation" placeholder="Designation" onChange={(e)=>this.handleInput(e, {name:'designation'})} value={this.state.employee.designation} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateEmployee}>Update</button>
                    </div>
                </form>

            </React.Fragment>

        );
    }
}

export default EmployeeEdit;