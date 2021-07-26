import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

import './App.css';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 3},
        {id: 3, value: 2},
        {id: 4, value: 1}
    ]
  };

  // practising lifecycle hooks
  // Mounting
  constructor(props){
    super(props);
    console.log('App - Constructor', this.props);
  }
  // =>componentDidMount
  componentDidMount() {
    // Ajax Call
    // this.setState({  });
    console.log('App - Mounted');
  }

  // updating
  componentDidUpdate(prevProps, prevState){
    console.log("prepProps",prevProps);
    console.log("PrevState",prevState);

    // if (prevProps.counter.value != this.props.counter.value) {
    //   // Ajax call and get new data from the server
      
    // }
  }

  // Unmounting
  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
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
    
    console.log("App - Rendered");
    
    return ( 
      <React.Fragment>
        <Navbar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
         />
        <main className="container">
          <Counters
           counters = {this.state.counters}
           onReset={this.handleReset}
           onDelete={this.handleDelete}
           onIncrement={this.handleIncrement}
           />
        </main>
      </React.Fragment>

     );
  }
}
 
export default App;