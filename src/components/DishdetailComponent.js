import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom' ;
    function RenderDish({dish}) {
        if (dish != null){
            return (
                <Card >
                    <CardImg width="50%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
            else {
                return(
                <div>
                </div>
                );
            }
            }
    
            function RenderComments({ comments}) {
                if (comments != null) {
                    return (
                        <div className='col-12 col-md-5 m-1'>
                                {
                                    
                                    comments.map((comment, i) => {
                                        return (
                                            <ul className='list-unstyled' key={comment.id}>
                                                <li>
                                                    <div>{comment.comment}</div>
                                                    <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</div>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                        </div>
            
                    )
                } else {
                    return <div></div>
                }
            }
            
            
    const DishDetail=(props)=> {
        if (props.dish != null)

return (
    <div className="container">
         <div className="row">
         <div className="col-sm-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>      
                </div>                
          
            </div>
    <div className="row">
        <h4>Comments</h4>
        <div className="col-12 col-md-5 m-1">
           <RenderDish dish ={props.dish} />
           </div>
           <div className="">
         < RenderComments comments={props.comments} />
        </div>
    </div>
    </div>

)
    }

    

    


export default DishDetail;