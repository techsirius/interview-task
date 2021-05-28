const Counter2 = (props)=>{
	return (
		<button onClick={ props.incCount }>
			{props.count} | Counter 2
		</button>
	);
}

export default Counter2;