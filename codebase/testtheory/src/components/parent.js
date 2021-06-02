import React, { Component } from 'react';
import Regular from './regular';
import Pure from './pure';

class Parent extends Component{

	constructor(props){
		super(props);

		this.state = {
			name: "Atul",
			address: {
				address1: "Somewhere",
				address2: "Somewhere",
				address3: "Somewhere",
			}
		}
	}

	componentDidMount = ()=> {
		setInterval(()=>{
			this.setState({
				name: 'Atul',
				address: {
					address1: "Somewhere",
					address2: "Somewhere 2",
					address3: "Somewhere",
				}
			});
		}, 2000);
	};

	render(){
		console.log('************************* Parent component is rendering *************************');

		return(
			<div>
				Regular Component
				<Pure name={this.state.name} />
				<Regular name={this.state.name} />
			</div>
		);
	}
}

export default Parent;