import React from 'react';
// import { employee_list, deleteEmployee, deleteMultiEmployee } from '../../services/common';

import Loader from './Loader';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_list: [{
                name: "Atul",
                code: "007"
            }],
            loader: false,
        };
    }

    tongleLoader = (status)=>{
        let oldState = Object.assign({},this.state.loader);
        oldState = status;
        this.setState(currentState => ({loader: oldState}), () => {});
    }

    userView = () => {
        let html = [];

        html = this.state.user_list.map((a, key) => {
            return (
                <tr key = { `${key}` }>
                    <td> { key } </td>
                    <td> { a.name } </td>
                    <td> { a.code } </td>
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
                      <th colSpan="3">User List</th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Code</th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.userView() }
                  </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default List;