import React from 'react';
import WithCounter from './withcounter';

class ClickCounter extends React.Component{
  render(){
    return(
      <>
        <button onClick={()=>this.props.incCount()}>{ this.props.name } has hlicked { this.props.count } times</button>
      </>
    );
  };
}

export default WithCounter(ClickCounter);