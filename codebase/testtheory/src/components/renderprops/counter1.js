const Counter1 = (props)=>{
	return (
		<button onClick={ props.incCount }>
			{props.count} | Counter 1
		</button>
	);
}

export default Counter1;