// // // import React, { Component } from "react";

// // // import {
// // //     Card,
// // //     CardImg,
// // //     CardText,
// // //     CardBody,
// // //     CardTitle,
// // //     Row,
// // //     Col,
// // // } from "reactstrap";

// import React from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class DishDetail extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         if(this.props.dish!= null){
//             const comment = this.props.dish.comments.map((item) => {
//                  return(
//                     <div>
//                         <p>{item.comment}</p>
//                         <p>{item.author} {item.date}</p>
//                     </div>
//                  );
//             });
//             const dish = this.props.dish;
//             return(
//                 <div className="container">
//                     <div className="row">
//                         <div className = "col-12 col-sm-5">
//                             <Card>
//                                 <CardImg top src ={dish.image} alt={dish.name} />
//                                 <CardBody>
//                                     <CardTitle>{dish.name}</CardTitle>
//                                     <CardText>{dish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                         <div className = "col-12 col-sm-7">
//                             <h2>comments</h2>
//                             {comment}
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//         else{
//             return (<div></div>);
//         }
//     }
// }
// export default DishDetail;

// // // class DishDetail extends React.Component{
// // //     constructor (props){
// // //         super(props);
// // //     }
// // //     function  renderDishes({dish}) {
// // //         return(
// // //             <div></div>
// // //         )
// // //     }
// // // }

// // import React, { Component } from "react";

// // import {
// //     Card,
// //     CardImg,
// //     CardText,
// //     CardBody,
// //     CardTitle,
// //     Row,
// //     Col,
// // } from "reactstrap";

// // class DishDetail extends Component {
// //     constructor(props){
// //         super(props);
// //     }

// //     renderDish() {
// //         if (this.props.selectedDish != null)
// //             return (
// //                 <Card>
// //                     <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
// //                     <CardBody>
// //                         <CardTitle tag="h2" className="text-center">{this.props.selectedDish.name}</CardTitle>
// //                         <CardText tag="label"><strong>Description : </strong>{this.props.selectedDish.description}</CardText>
// //                     </CardBody>
// //                 </Card>
// //             );
// //         else return <div></div>;
// //     }

// //     renderDishDetail(){
// //         if (this.props.selectedDish != null)
// //             return (
// //                 <Card>
// //                     {this.props.selectedDish.comments.map((items) => {
// //                         if (this.props.selectedDish.id == items.id) {
// //                             return (
// //                                 <CardText className="p-5">
// //                                     <h2 className="text-center mb-5 border border-danger rounded p-3"><strong>{this.props.selectedDish.name}</strong> Detail !!</h2>
// //                                     <p><strong>Comments :</strong> {items.comment}</p>
// //                                     <p><strong>Author :</strong>  {items.author}</p>
// //                                     <p><strong>Date :</strong>  {items.date}</p>
// //                                 </CardText>
// //                             );
// //                         }
// //                     })}
// //                 </Card>
// //             );
// //         else return <div></div>;
// //     }


// //     render() {
// //         return(
// //             <Row className="">
// //                 {console.log(this.props.selectedDish)}
// //                 <Col md="6" className="mb-2">
// //                     {this.renderDish()}
// //                 </Col>
// //                 <Col md="6" className="mb-2">
// //                     {this.renderDishDetail()}
// //                 </Col>
// //             </Row>
// //         )
// //     }
// // }

// // export default DishDetail;

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

/*   constructor(props) {
      super(props);
   }
*/

   renderDish(dish) {
      return (
         <div className="col-12 col-md-5 m-1">
            <Card>
               <CardImg top src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
         </div>
      );
   }

   renderComments(comments) {
      if (comments != null) {
         return (
            <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className="list-unstyled">
               {comments.map((comment) => {
                  return (
                     <li key={comment.id}>
                       <p>{comment.comment}</p>
                       <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                     </li>
                  );
                })}
                </ul>
            </div>
         );
      }
      else {
         return (
            <div></div>
         );
      }
   }
}

function renderDish({ dish} ) {
   return (
      <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
            </CardBody>
         </Card>
      </div>
   );
}

function renderComments({comments}) {
  if (comments != null) {
     return (
        <div className="col-12 col-md-5 m-1">
           <h4>Comments</h4>
           <ul className="list-unstyled">
           {comments.map((comment) => {
              return (
                 <li key={comment.id}>
                   <p>{comment.comment}</p>
                   <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                 </li>
              );
            })}
            </ul>
        </div>
     );
  }
  else {
     return (
        <div></div>
     );
  }
}



//    render() {
//       if (this.props.dish != null) {
//          return (
//             <div className="container">
//                <div className="row">
//                   {this.renderDish(this.props.dish)}
//                   {this.renderComments(this.props.dish.comments)}
//                </div>
//             </div>
//          );
//       }
//       else {
//          return (
//             <div></div> 
//          );
//       }
//    }

const DishDetail = (props) => {
    if (this.props.dish != null) {
       return (
          <div className="container">
             <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
             </div>
          </div>
       );
    }
    else {
       return (
          <div></div> 
       );
    }
}


export default DishDetail;