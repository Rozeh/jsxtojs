import React from 'react';

class PropsStart extends React.Component{
    render(){
        return(
          <div>
              <h1>Hello{this.props.name} {this.props.children}</h1>
          </div>
        );
    }
}

export default PropsStart;