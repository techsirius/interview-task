import React from 'react';
import {connect} from 'react-redux';

import {addUser} from '../actions/index';

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
        // e.preventDefault();
        let data = {
            name: this.state.form_data.name,
            code: this.state.form_data.code,
        };

        this.props.addUser(data)

        this.props.history.push('/list');
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
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=>this.handleInput(e, {name:'name'})} value={this.state.form_data.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="code" placeholder="Code" onChange={(e)=>this.handleInput(e, {name:'code'})} value={this.state.form_data.code} />
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