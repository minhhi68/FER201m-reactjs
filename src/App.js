// // import React, {Component} from "react";
// // import Main from "./components/MainComponent.js"
// // import "./App.css"

// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <Main />
// //       </div>
// //     );
// //   }
  
// // }
// // export default App;

// import React, {Component} from "react";
// import Main from "./components/MainComponent.js"
// import "./App.css"
// import { BrowserRouter } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Main />
//       </div>
//     );
//   }
  
// }
// export default App;

// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
// import Home from "./components/HomeComponent";
import { BrowserRouter } from "react-router-dom";
// function App() {
//    return (
//       <div className="App">
//          <Navbar dark color="primary">
//             <div className="container">
//                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//             </div>
//          </Navbar>
//       </div>
//    );
// }
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
      };
   }
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Main />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;