import React, { useState, useEffect } from 'react';

const Timer = () => {

    const [ count, setCount ] = useState(0);

    useEffect(()=>{
    	const interval = setInterval(()=>{
            setCount( count + 1)
        }, 1000);

    	return ()=>{
    		clearInterval(interval);
    	}
    }, [ count ]);

	return (
		<>
    		<div>
    			<h1>{ count }</h1>
    		</div>
      	</>
	);
}

export default Timer;