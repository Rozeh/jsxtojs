import React, { Component } from 'react';
import './App.css';
import PropsStart from './components/PropsStart';

class App extends Component {
    constructor(){
        super();
        this.state = {
            output:'',

        }
    }

    update(e){
        const code= e.target.value;
        try{
        this.setState({
            output:
            window.Babel.transform(code,
                    {presets:['es2015', 'react']}
                    ).code
        });
    }catch(err){
        this.setState({err:err.message})
    }
    }
  render() {
    return (
      <div>
          <header>{this.state.err}</header>
          <div className="container">
              <textarea
                  onChange={this.update} defaultValue={this.state.input} ></textarea>
              <pre>
                  {this.state.output}
              </pre>
          </div>
      </div>
    );
  }
}

export default App;
