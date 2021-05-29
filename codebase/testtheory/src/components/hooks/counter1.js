import React, { useState, useEffect } from 'react';

const Counter1 = () => {
	const colors = ['red','green','blue','orange','yellow'];

	const [ count, setCount ] = useState(()=>{
		return 0;
	});

	const [ color, setColor ] = useState(()=>{
		return 'red';
	});

	useEffect(()=>{
		console.log('count has been changed');
	},[count]);

	useEffect(()=>{
		console.log('color has been changed');
	},[color]);

    // const color = colors[count];

	return (
		<>
        	<button onClick={()=>setCount((prevState)=>{
        		const new_count = prevState + 1;

        		// setColor((setColor)=>{
        		// 	return colors[new_count];
        		// });

        		return new_count;
    		})}>Clicked { count } times and color is { color }</button>
      	</>
	);
}

export default Counter1;