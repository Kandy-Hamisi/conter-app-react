import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = {
    //     counters: [
    //         {id: 1, value: 4},
    //         {id: 2, value: 3},
    //         {id: 3, value: 2},
    //         {id: 4, value: 1}
    //     ]
    //   };

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     // console.log(this.state.counters[index]);
    //     this.setState({ counters });
    // };

    // handleDelete = (counterId) => {
    //     // console.log("Event Handler Called", counterId); 
    //     // initialize counters to all ids except for the components id
    //    const counters = this.state.counters.filter(c => c.id !== counterId);
    //    this.setState({counters})
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({ counters });
    // }


    render() { 

        console.log("Counters - Rendered");
        const { onReset, counters, onDelete, onIncrement } = this.props;


        return (
        <div>
            <button
                onClick={onReset}
             className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            {counters.map(counter =>
             <Counter
              onDelete={onDelete}
              onIncrement ={onIncrement}
               key={counter.id} 
               counter={counter}>
                 {/* <h4>Counter #{counter.id}</h4> */}
             </Counter>)};
        </div>
        );
    }
}
 
export default Counters;