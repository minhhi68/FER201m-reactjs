import logo from './logo.svg';
import './App.css';
import * as ReactDOM from 'react-dom'
import React from 'react';
import Hello  from './components/Hello';
import{Hello2} from './components/Hello2';
import {Navbar, NavbarBrand} from 'reactstrap';

// function formatName(user){
//   return user.firstName + '' +user.lastName;
// } 
// const user = {
//   firstName: 'Minh Khang',
//   lastName: 'Nguyen'
// };

// const element = (
//   <h1>
//   Hello, {formatName(user)}!
//   </h1>
//   );

// function App(){
//      const data={id: "1", name: "thi no"};
//   return (

//     <div>
//     <Hello msg="Em chan co" user={data} />
//     <Hello2 msg="ok" />
//     </div>
//     );
//   }


// //  const name = 'Josh Perez';
//  const element = <h1>Hello, {name}</h1>;

//  ReactDOM.render(
//   element,
//   document.getElementById('root')
//  );


//   return (
//      <div className="App">
//      <h1>Hello World</h1>
//      </div>
//    );
   
// }
class App extends React.Component {
  render(){
    return (
      <div className = "App">
      <Navbar dark color ="primary">
      <div className ="container">
      <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      </div>

      );
  }
}

export default App;
