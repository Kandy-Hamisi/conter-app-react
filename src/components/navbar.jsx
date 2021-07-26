import React, { Component } from 'react';

// Stateless Functional Component
 const Navbar = ({ totalCounters}) => {
   console.log('Navbar - Rendered');
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Navbar{" "}
            <span className="badge badge-pill badge-primary">
                {totalCounters}
            </span>
          </a>
        </div>
      </nav>
     );
 };


// class Navbar extends Component {
//     render() { 
        
//     }
// }
 
export default Navbar;