import React from 'react';

const UpdatedComponent = ( OriginalComponent ) => {
  class NewComponent extends React.Component{

    state = { count : 0 };

    incCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };

    render(){
      return(
        <OriginalComponent name="Atul" incCount={ this.incCount} count={ this.state.count } />
      );
    };

  }

  return NewComponent;
}

export default UpdatedComponent;