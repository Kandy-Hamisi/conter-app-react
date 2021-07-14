import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };
    
    
    renderTags(){
        // checking the length of the array and if its empty, we retutn a p tag
        // if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        // return <ul>
        //             {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        //         </ul>
    }

    handleIncrement(){
        console.log("increment Clicked", this);

    }

    render() { 

        return (
            <div>
            <h1>Kandy doing his thangs</h1>
                <span className={ this.getBadgeClasses() }>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
                    Increment
                </button> 
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