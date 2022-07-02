// import React from "react";
// import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

// // class DishDetail extends React.Component {
// //    // renderDish(dish) {
// //    //    console.log(dish);
// //    //    if (dish != null)
// //    //       return (
// //    //          <div className="col-12 col-sm-5">
// //    //             <Card>
// //    //                <CardImg src={dish.image} alt={dish.name} />
// //    //                <CardBody>
// //    //                   <CardTitle>{dish.name}</CardTitle>
// //    //                   <CardText>{dish.description}</CardText>
// //    //                </CardBody>
// //    //             </Card>
// //    //          </div>
// //    //       );
// //    //    else return <div></div>;
// //    // }
// //    // renderComments(dish) {
// //    //    const comment = dish.comments.map((item) => {
// //    //       return (
// //    //          <div key={item.id} className="text-left">
// //    //             <p>{item.comment}</p>
// //    //             <p>
// //    //                -- {item.author} ,{item.date}
// //    //             </p>
// //    //          </div>
// //    //       );
// //    //    });
// //    //    return (
// //    //       <div className="col-12 col-sm-7">
// //    //          <h2>Comments</h2>
// //    //          {comment}
// //    //       </div>
// //    //    );
// //    // }
// //    // render() {
// //    //    if (this.props.dish != null) {
// //    //       return (
// //    //          <div className="container">
// //    //             <div className="row">
// //    //                {this.renderDish(this.props.dish)}
// //    //                {this.renderComments(this.props.dish)}
// //    //             </div>
// //    //          </div>
// //    //       );
// //    //    } else {
// //    //       return <div>hello</div>;
// //    //    }
// //    // }
// //    render() {
// //       if (this.props.dish != null) {
// //          const comment = this.props.dish.comments.map((item) => {
// //             return (
// //                <div key={item.id}>
// //                   <p>{item.comment}</p>
// //                   <p>
// //                      -- {item.author}, {item.date}
// //                   </p>
// //                </div>
// //             );
// //          });

// //          const dish = this.props.dish;
// //          return (
// //             <div className="container">
// //                <div className="row">
// //                   <div className="col-12 col-md-5 m-1">
// //                      <Card key={dish.id}>
// //                         <CardImg
// //                            width="100%"
// //                            src={dish.image}
// //                            alt={dish.name}
// //                         />
// //                         <CardBody>
// //                            <CardTitle>{dish.name}</CardTitle>
// //                            <CardText>{dish.description}</CardText>
// //                         </CardBody>
// //                      </Card>
// //                   </div>
// //                   <div className="col-12 col-md-5 m-1">
// //                      <Card>
// //                         <CardBody>
// //                            <div>{comment}</div>
// //                         </CardBody>
// //                      </Card>
// //                   </div>
// //                </div>
// //             </div>
// //          );
// //       } else {
// //          return <div></div>;
// //       }
// //    }
// // }
// function renderDish({ dish }) {
//    console.log(dish);
//    if (dish != null)
//       return (
//          <div className="col-12 col-sm-5">
//             <Card>
//                <CardImg src={dish.image} alt={dish.name} />
//                <CardBody>
//                   <CardTitle>{dish.name}</CardTitle>
//                   <CardText>{dish.description}</CardText>
//                </CardBody>
//             </Card>
//          </div>
//       );
//    else return <div></div>;
// }
// function renderComments({ dish }) {
//    const comment = dish.comments.map((item) => {
//       return (
//          <div key={item.id} className="text-left">
//             <p>{item.comment}</p>
//             <p>
//                -- {item.author} ,{item.date}
//             </p>
//          </div>
//       );
//    });
//    return (
//       <div className="col-12 col-sm-7">
//          <h2>Comments</h2>
//          {comment}
//       </div>
//    );
// }

// const DishDetail = (props) => {
//    if (props.dish != null) {
//       return (
//          <div className="container">
//             <div className="row">
//                {renderDish(props)}
//                {renderComments(props)}
//             </div>
//          </div>
//       );
//    } else {
//       return <div></div>;
//    }
// };

// export default DishDetail;

// import React from 'react';
// import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
// import {Link} from 'react-router-dom';
// export function RenderDish({dish}){
//    return(

//       <div className="col-12 col-sm-5">
//          <Card>
//             <CardImg top src = {dish.image} alt ={dish.name} />
//             <CardBody>
//                <CardTitle>{dish.name}</CardTitle>
//                <CardText>{dish.description}</CardText>
//             </CardBody>
//          </Card>
//       </div>
//    );
// }

// export function RenderComments({comments}){
//    const comment=comments.map( (item) =>{
//       return(
//          <div>
//             <p>{item.comment}</p>
//             <p>{item.author} {item.date}</p>
//          </div>
//       );
//    });

//    return (
//       <div className = "col-12 col-sm-7">
//          <h2>comments</h2>
//          {comment}
//       </div>
//    );
// }

import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
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
function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
    );
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
          </div>
      </div>
      </div>
  );

  } else {
    return <div></div>;
  }
};

export default DishDetail;
