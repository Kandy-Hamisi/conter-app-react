import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 3},
            {id: 3, value: 2},
            {id: 4, value: 1}
        ]
      };

    handleDelete = (counterId) => {
        // console.log("Event Handler Called", counterId); 
        // initialize counters to all ids except for the components id
       const counters = this.state.counters.filter(c => c.id !== counterId);
       this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    render() { 
        return (
        <div>
            <button
                onClick={this.handleReset}
             className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter =>
             <Counter
              onDelete={this.handleDelete}
               key={counter.id} 
               counter={counter}>
                 {/* <h4>Counter #{counter.id}</h4> */}
             </Counter>)};
        </div>
        );
    }
}
 
export default Counters;