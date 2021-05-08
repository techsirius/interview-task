import React from 'react';
import { connect } from "react-redux";

// import Loader from './Loader';

class UserList extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         loader: false,
    //     };
    // }

    tongleLoader = (status)=>{
        let oldState = Object.assign({},this.state.loader);
        oldState = status;
        this.setState(currentState => ({loader: oldState}), () => {});
    }

    userView = () => {
        let html = [];

        html = this.props.user_list.map((a, key) => {
            return (
                <tr key = { `${key}` }>
                    <td> { key } </td>
                    <td> { a.name } </td>
                    <td> { a.code } </td>
                </tr>
            )
        })

        return html;
    }

    render() {
        return(

            <React.Fragment>
                
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

const mapStateToProps = state => {
  return { user_list: state.users };
};

export default connect(mapStateToProps)(UserList);