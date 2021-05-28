import React, { Component, createRef } from 'react';

class Uncontrolled extends Component{
	constructor(){
		super();

		this.name		=	createRef();
		this.password	=	createRef();
	}

	handleSubmit(e){
		e.preventDefault();

		console.log(this.name.current.value, this.password.current.value)
		
	}

	render(){
		return(
			<>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					<input type="text" placeholder="Name" ref={this.name} /><br /><br />
					<input type="password" placeholder="Password" ref={this.password} /><br /><br />
					<button type="submit">Submit</button>
				</form>
			</>
		);
	}
}

export default Uncontrolled;