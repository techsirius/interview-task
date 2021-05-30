import React, { useState, useEffect } from 'react';

const Counter1 = () => {
	// const colors = ['red','green','blue','orange','yellow'];

	// const [ count, setCount ] = useState(()=>{
	// 	return 0;
	// });

	// const [ color, setColor ] = useState(()=>{
	// 	return 'red';
	// });

	// useEffect(()=>{
	// 	console.log('count has been changed');
	// },[count]);

	// useEffect(()=>{
	// 	console.log('color has been changed');
	// },[color]);

    // const color = colors[count];

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePoistion = (e) => {
    	setX(e.clientX);
    	setY(e.clientX);
    };

    useEffect(()=>{
    	console.log('Eventlistener added')
    	window.addEventListener('mousemove', logMousePoistion);

    	return ()=>{
    		console.log('Eventlistener has been removed')
    		window.removeEventListener('mousemove', logMousePoistion);
    	}
    }, []);

	return (
		<>
        	{/*<button onClick={()=>setCount((prevState)=>{
        		const new_count = prevState + 1;

        		// setColor((setColor)=>{
        		// 	return colors[new_count];
        		// });

        		return new_count;
    		})}>Clicked { count } times and color is { color }</button>
    		*/}

    		<div>
    			Hooks X - {x} Y - {y}
    		</div>
      	</>
	);
}

export default Counter1;