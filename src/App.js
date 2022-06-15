import logo from './logo.svg';
import './App.css';
import * as ReactDOM from 'react-dom'
import React from 'react';
import Hello  from './components/Hello';
import{Hello2} from './components/Hello2';
import {Navbar, NavbarBrand} from 'reactstrap';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Avatar from './components/Avatar';
import Car from './components/Car';
import Menu from './components/MenuComponent';

function App(){
  return(
    <div className="App">
    <Navbar dark color="primary">
    <div className="container">
    <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
     </div>
     </Navbar>
     <Menu/>
     </div>

    );
}

export default App;








// //function App(){
//   return (
//     <div>
//     <Welcome name ="Van"/>
//      <Welcome name ="Minh Huy"/>
//      <Welcome name ="Minh Khang"/>
//          </div>
//     );

// }



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
// class App extends React.Component {
//   render(){
//     return (
//       <div className = "App">
//       <Navbar dark color ="primary">
//       <div className ="container">
//       <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
//       </div>
//       </Navbar>
//       </div>

//       );
//   }
// }

// const comment ={
//   date: new Date(),
//   text: 'welcome to react component'
//   author:{
//     name = 'vanttn',
//     avatarUrl : 'images/logo.png'
//   }
// };

//  return(
//   <Commment date = {comment.date} text = {comment.text} author={comment.author}/>
//   )

//  const cities ={'Jaipur', 'Jodhpur', 'udapur', 'Pune', 'Chandigarh'};
//  const names = cities.map( (c)=>{return <li>{c}</li>})

//   function Car(props){
//     return <li> I am a {props.brand}</li>;
    
//     function Garage(){
//       const cars = [
//             {id: 1, brand: 'Ford'},
//             {id: 2, brand: 'BMW'},
//             {id: 3, brand: 'Audi'}

//       ];
//       return (
//         <>
//         <h1> Who lives in my Garage?</h1>
//         <ul>
//         {cars.map((car)=>)}
//         )
//     }
//   }

// export default App;
