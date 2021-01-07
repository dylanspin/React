import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    handleIncrement = amount =>{
        console.log(amount);
        this.setState({ value: this.state.value + 1})
    };

    doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    };

    render(){
        return (
          <div>
              {this.props.children}
              <span className={this.getBadgeClasses()}>{this.state.value}</span>
              <button
                  onClick={() => this.handleIncrement(1)}
                  className="btn btn-secondary btn-sm"
              >
                  increment
              </button>
          </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
