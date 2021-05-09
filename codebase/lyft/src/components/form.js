import React from 'react';
import {connect} from 'react-redux';

import { addUser } from '../actions/index';
import { USER_CODES } from '../constants/index';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form_data: {
                name: '',
                code: ''
            },
            loader: false
        };
    }

    updateUserList = (e)=>{
        let name = this.state.form_data.name;
        let code = this.state.form_data.code;

        let index_name = USER_CODES.findIndex((a)=>{
            return (a.name === name);
        });

        let index_code = 0;

        if(index_name !== -1){
            let temp = USER_CODES[index_name];
            index_code = (temp.code === null || temp.code === code)?0:-1;
        }

        // e.preventDefault();

        if(index_name === -1){
            alert('Invalid user');
        }
        else if(index_code === -1){
            alert('Invalid invitation code');
        }
        else{
            this.props.addUser({
                name,
                code
            })

            this.props.history.push('/list');
        }
    }

    handleInput = (e, obj)=>{

        let oldState = Object.assign({},this.state.form_data);
        
        oldState[obj.name] = e.target.value
        
        this.setState(currentState => ({form_data: oldState}), () => {});
    }

    render() {
        return (

            <React.Fragment >
                <div className="container">
                    <h2>User Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" maxLength="20" onChange={(e)=>this.handleInput(e, {name:'name'})} value={this.state.form_data.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="code" placeholder="Code" maxLength="20" onChange={(e)=>this.handleInput(e, {name:'code'})} value={this.state.form_data.code} />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.updateUserList}>Submit</button>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
  return { user_list: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (data) => {
      dispatch(addUser( data ))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);