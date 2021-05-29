import React, { useState } from 'react';

const Counter = () => {
	const [ stateObj, setStateObj ] = useState(()=>{
		// console.log('Setting initial value');

		return {
			count: 0,
			color: 'blue'
		};
	});

	const colors = ['red','green','blue','orange','yellow'];

	const { count } = stateObj;

	const incCount = () => {
      setStateObj(( prevStateObj )=>{ 
      	return {
      		...prevStateObj,
      		count: prevStateObj.count + 1 ,
      		color: 'red'
      	}
      });
    };

    const color = colors[count];

	return (
		<>
        	<button onClick={()=>incCount()}>Clicked { count } times and color is { color }</button>
      	</>
	);
}

export default Counter;