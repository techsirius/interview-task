import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class UserList extends React.Component {

    userView = () => {
        let html = [];
        html.push(<tr key={-1}>
                    <td colSpan="3" align="center"> No data to show </td>
                </tr>);

        if(this.props.user_list.length > 0){
            html = this.props.user_list.map((a, key) => {
                return (
                    <tr key = { `${key}` }>
                        <td> { key + 1 } </td>
                        <td> { a.name } </td>
                        <td> { a.code } </td>
                    </tr>
                )
            })
        }

        return html;
    }

    render() {
        return(

            <React.Fragment>
                
                <div className="container">
                    <h2>User List</h2>
                    <h2>
                        <Link to="/form">Add User</Link>
                    </h2>
                    <table className="table">
                      <thead>
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
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
  return { user_list: state.users };
};

export default connect(mapStateToProps)(UserList);