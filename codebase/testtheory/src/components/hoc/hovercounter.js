import React from 'react';
import WithCounter from './withcounter';

class HoverCounter extends React.Component{
  render(){
    return(
      <>
        <h1 onMouseEnter={()=>this.props.incCount()}>{ this.props.name } has hovered { this.props.count } times</h1>
      </>
    );
  };
}

export default WithCounter(HoverCounter);