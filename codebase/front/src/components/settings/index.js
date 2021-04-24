import React from 'react';
import { getSettings, updateSettings } from '../../services/common';

import TopNav from '../top-nav';
import Loader from '../Loader';

class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setting: [],
            loader: false
        };
    }

    componentDidMount() {
        getSettings().then((res) => {
            let setting = res.data;

            this.setState({
                setting
            });
        });
    }

    tongleLoader = (status)=>{
        let oldState = Object.assign({},this.state.loader);
        oldState = status;
        this.setState(currentState => ({loader: oldState}), () => {});
    }

    updateSetting = (e)=>{
        // e.preventDefault();
        let data = {
            first_name: this.state.setting.first_name,
            last_name: this.state.setting.last_name,
        };

        this.tongleLoader(true);
        updateSettings(data).then((res) => {
            // console.log('Done');
            setTimeout(()=>this.tongleLoader(false), 2000);
        });
    }

    handleInput = (e, obj)=>{

        let oldState = Object.assign({},this.state.setting);
        
        oldState[obj.name] = e.target.value
        
        this.setState(currentState => ({setting: oldState}), () => {});
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
                            <input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={(e)=>this.handleInput(e, {name:'first_name'})} value={this.state.setting.first_name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" id="last_name" placeholder="Last Name" onChange={(e)=>this.handleInput(e, {name:'last_name'})} value={this.state.setting.last_name} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.updateSetting}>Update</button>
                    </div>
                </form>
                

            </React.Fragment>
        );
    }

}

export default Setting;