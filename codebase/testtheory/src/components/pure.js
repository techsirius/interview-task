import React, { PureComponent } from 'react';

class Pure extends PureComponent{

	render(){
		console.log('Pure component is rendering');

		return(
			<div>
				Pure Component
			</div>
		);
	}
}

export default Pure;