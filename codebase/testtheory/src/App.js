// import Uncontrolled from './components/uncontrolled';

// import RenderProps from './wrappers/renderprops'; 
// import Counter1 from './components/renderprops/counter1';
// import Counter2 from './components/renderprops/counter2';

// import ClickCounter from './components/hoc/clickcounter';
// import HoverCounter from './components/hoc/hovercounter';

// import HooksCounter from './components/hooks/counter';
import HooksCounter1 from './components/hooks/counter1';

function App() {
  return (
    <>
    	{/*<RenderProps render={(count, incCount)=>{
			return (
				<Counter1 count={ count } incCount={ incCount } />
			);
		}} />

		<RenderProps render={(count, incCount)=>{
			return (
				<Counter2 count={ count } incCount={ incCount } />
			);
		}} /> */}

       {/* <Uncontrolled /> */}

       {/* <ClickCounter />
       <HoverCounter /> */}

       {/* <HooksCounter /> */}
       <HooksCounter1 />

    </>
  );
}

export default App;
