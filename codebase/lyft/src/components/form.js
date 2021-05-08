import React from 'react';
import {connect} from 'react-redux';

import Loader from './Loader';

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

    // tongleLoader = (status)=>{
    //     let oldState = Object.assign({},this.state.loader);
    //     oldState = status;
    //     this.setState(currentState => ({loader: oldState}), () => {});
    // }

    updateUserList = (e)=>{
        // e.preventDefault();
        let data = {
            name: this.state.form_data.name,
            code: this.state.form_data.code,
        };

        // this.tongleLoader(true);
        // // updateSettings(data).then((res) => {
        //     setTimeout(()=>this.tongleLoader(false), 2000);
        // // });

        let oldState = [...this.state.user_list];
        oldState.push(data);
        this.setState(currentState => ({user_list: oldState}), () => {
            // console.log(this.state.user_list)
        });
    }

    handleInput = (e, obj)=>{

        let oldState = Object.assign({},this.state.form_data);
        
        oldState[obj.name] = e.target.value
        
        this.setState(currentState => ({form_data: oldState}), () => {});
    }

    render() {
        return (

            <React.Fragment >
                {this.state.loader===true?
                <Loader />:null
                }
                
                <form>
                    <div className="form-row align-items-center">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=>this.handleInput(e, {name:'name'})} value={this.state.form_data.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="code" placeholder="Code" onChange={(e)=>this.handleInput(e, {name:'code'})} value={this.state.form_data.code} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateUserList}>Update</button>
                    </div>
                </form>
                
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
  return { user_list: state.users };
};

export default connect(mapStateToProps)(UserForm);