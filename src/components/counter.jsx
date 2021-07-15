import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

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
    handleIncrement = product =>{
        // console.log("increment Clicked", this);

        // this.state.count++;
        console.log(product);
        this.setState({count: this.state.count + 1});
    }

    //  doHandleIncrement = () =>{
    //      this.handleIncrement({ id: this.formatCount()});
    //  }

    render() { 

        return (
            <div>
            
                <span className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncrement({id: this.formatCount()})}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button> 
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
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;