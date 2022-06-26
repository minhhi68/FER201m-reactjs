// import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent';
// import DishDetail from './DishDetailComponent';
// import { DISHES } from '../shared/dishes';
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
// import Home from './HeaderComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';



// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         dishes: DISHES,
//       //  selectedDish: null
//     };
//   }
//   // onDishSelect(dishId) {
//   //   this.setState({ selectedDish: dishId});
//   // }
//   render() {
//     const HomePage = () => {
//     return (
//       <Home />
//     );
//     };
//      return(

//       <div>
//         {
//         // <Navbar dark color="primary">
//         //   <div className="container">
//         //     <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         //   </div>
//         // </Navbar> }
//         <Header /> 
//         {
//         // <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//         // <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
//         }
//         <Switch>
//           <Route path ='/home' component={HomePage} />
//           <Route exact path ='/menu' component={() => <Menu dishes = {this.state.dishes} /> } />
//           <Redirect to = "/home" />
//         </Switch>

//       <Footer />
//       </div>
//      );
//       }
//       }

//       export default Main;

import React from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedDish: null,
         dishes: DISHES,
      };
   }
   onDishSelect(dish) {
      this.setState({ selectedDish: dish });
   }
   render() {
      const HomePage = () => {
         return <Home />;
      };
      return (
         <div>
            {/* <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
               </div>
            </Navbar> */}
            <Header />
            {/* <Menu
               dishes={this.state.dishes}
               click={(dish) => this.onDishSelect(dish)}
            />
            <DishDetail dish={this.state.selectedDish} /> */}
            <Switch>
               <Route path="/home" component={HomePage} />
               <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.state.dishes} />}
               />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;


       
      