
// // import React from "react";
// // import Menu from "./MenuComponent";
// // import Header from "./HeaderComponent";
// // import Footer from "./FooterComponent";
// // import { DISHES } from "../shared/dishes";
// // import Home from "./HomeComponent";
// // import { Switch, Route, Redirect } from "react-router-dom";
// // import Contact from "./ContactComponent";

// // class Main extends React.Component {
// //    constructor(props) {
// //       super(props);
// //       this.state = {
// //          selectedDish: null,
// //          dishes: DISHES,
// //       };
// //    }
// //    onDishSelect(dish) {
// //       this.setState({ selectedDish: dish });
// //    }
// //    render() {
// //       const HomePage = () => {
// //          return <Home />;
// //       };
// //       return (
// //          <div>
// //             {/* <Navbar dark color="primary">
// //                <div className="container">
// //                   <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
// //                </div>
// //             </Navbar> */}
// //             <Header />
// //             {/* <Menu
// //                dishes={this.state.dishes}
// //                click={(dish) => this.onDishSelect(dish)}
// //             />
// //             <DishDetail dish={this.state.selectedDish} /> */}
// //             <Switch>
// //                <Route path="/home" component={HomePage} />
// //                <Route  exact path="/contactus" component={Contact} />
// //                <Route
// //                   exact
// //                   path="/menu"
// //                   component={() => <Menu dishes={this.state.dishes} />}
// //                />
// //                <Redirect to="/home" />
// //             </Switch>
// //             <Footer />
// //          </div>
// //       );
// //    }
// // }
// // export default Main;

// import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
// import Menu from "./MenuComponent";
// import DishDetail from "./DishDetailComponent";

// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
// import Home from "./HomeComponent";
// import Contact from "./ContactComponent";
// import { DISHES } from "../shared/dishes";
// import { COMMENTS } from "../shared/comments";
// import { PROMOTIONS } from "../shared/promotions";
// import { LEADERS } from "../shared/leaders";
// import { Routes, Route, Navigate } from "react-router-dom";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES,
//       comments: COMMENTS,
//       promotions: PROMOTIONS,
//       leaders: LEADERS,
//       selectedDish: null,
//     };
//   }
//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId });
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/menu"
//             element={ <Menu dishes={this.state.dishes} />}
//             path="/home"
//             element={
//               <Home
//                 dish={this.state.dishes.filter((dish) => dish.featured)[0]}
//                 promotion={
//                   this.state.promotions.filter((promo) => promo.featured)[0]
//                 }
//                 leader={
//                   this.state.leaders.filter((leader) => leader.featured)[0]
//                 }
//               />
//             }
//           />

//           <Route path="/" element={<Navigate replace to="/home" />} />
//           <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
//           <Route path="/contactus" element={<Contact />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//         </Routes>
//         <Footer />
//       </div>
//     );
//   }
// }
// export default Main;

import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
//import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;

       
      