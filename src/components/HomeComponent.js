import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
function RenderCard({item}) {

    return(
        <Card>
            <CardImg  width="300rem" src={item.image}  />
            <CardBody>
            <h4>{item.name}</h4>
            {item.designation ? <h5>{item.designation}</h5> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}
function Home(props) {
    return(
  
        <div className="container">
        <div className="row ">
            <div className=" col-sm-4">
                <RenderCard item={props.dish} />
            </div>
            <div className=" col-sm-4">
                <RenderCard item={props.promotion} />
            </div>
            <div className=" col-sm-4">
                <RenderCard item={props.leader} />
            </div>
        </div>
    </div>
);
}

export default Home; 