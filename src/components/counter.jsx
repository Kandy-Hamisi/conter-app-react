import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    //     // imageUrl: 'https://picsum.photos/200'
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // constructor(){
    //     super();
    //     // console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    // using

    renderTags(){
        // checking the length of the array and if its empty, we retutn a p tag
        // if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        // return <ul>
        //             {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        //         </ul>
    }

    //changing this function into an arrow function solves the problem of accessing this
    // handleIncrement = () =>{
    //     // console.log("increment Clicked", this);

    //     // this.state.count++;
    //     // console.log(product);
    //     this.setState({value: this.state.value + 1});
    // }

    //  doHandleIncrement = () =>{
    //      this.handleIncrement({ id: this.formatCount()});
    //  }

    render() { 
        

        // console.log("props", this.props);
        console.log("Counter - Rendered");

        return (
            <div>
                {/* <h4>{this.props.id}</h4> */}
                <span className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                <button
                // commented on the below function
                // onClick={() => this.handleIncrement()}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
                {/* <button onClick={this.handleDecrement} className="btn btn-danger btn-sm m-2">
                    Decrement
                </button>  */}
                {/* {this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()} */}
            </div>
            
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // if the count is 'Zero' then give the badge a warning class else a primary class
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;