import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";



  
  function RenderComments({comments}) {
      
    if (comments == null) {
        return <div></div>;
      }
      
      const allComment = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}, &nbsp;
              {new Intl.DateTimeFormat("en-Us", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{allComment}</ul>
      </div>
    );
  }

  function RenderDish({dish}) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle tag="h5">{dish.name}</CardTitle>
              <CardText>{dish.description} </CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props) => {
    const dish = props.dish;
      if (dish == null) {
        return <div></div>;
      }
      const dItem = <RenderDish dish={props.dish} />;
      const comment = <RenderComments comments={props.dish.comments} />;

    return (
      <div className="container">
        <div className="row">
          {dItem}
          {comment}
        </div>
      </div>
    );
  }

  
export default DishDetail;