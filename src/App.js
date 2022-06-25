// // // import logo from './logo.svg';
// //  import './App.css';
// //  //import * as ReactDOM from 'react-dom'
// //  //import React from 'react';n
// // // import React, { Component } from "react";
// // //import { DISHES } from './shared/dishes';
// // // import Hello  from './components/Hello';
// // // import{Hello2} from './components/Hello2';
// // // import {Navbar, NavbarBrand} from 'reactstrap';
// // // import Welcome from './components/Welcome';
// // // import Comment from './components/Comment';
// // // import Avatar from './components/Avatar';
// // // import Car from './components/Car';

import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
 class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="App">
        <Main />
      </div>
    );
  }
 }
 export default App;




// import './App.css';
// //import logo from "./logo.svg";
// import "./App.css";

// import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";

// import Menu from "./components/MenuComponent";
// import { DISHES } from './shared/dishes';

// /*
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// */
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container text-left">
//             <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         {/* <Menu /> */}
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }
// }

// export default App;

// // // import DISHES from './shared/dishes';

// // import React, { Component } from "react";
// // import Menu from './components/MenuComponent';
// //  class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { dishes: '' };
// //   }
// //   render() {
// //     return <Menu dishes={this.state.dishes} />;
// //   }
// // }

// // export default App;



// // // export default class App extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = { dishes: '' };
// // //   }
// // //   render() {
// // //     return <Menu dishes={this.state.dishes} />;
// // //   }
// // // }


// // // function App(){
// // //   return(
// // //     <div className="App">
// // //     <Navbar dark color="primary">
// // //     <div className="container">
// // //     <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
// // //      </div>
// // //      </Navbar>
// // //      <Menu/>
// // //      </div>

// // //     );
// // // }

// // // export default App;