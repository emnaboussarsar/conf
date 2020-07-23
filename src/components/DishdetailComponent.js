import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const comentario = this.props.dishes.map((dish, index) => {
            if (this.props.selectedDish != null) {
                return (
                        <CardBody>
                            <CardText>{dish.comments[index].comment}</CardText>
                <p>{dish.comments[index].author},{new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[index].date)))}</p>
                        </CardBody>
                )
            }else {
            return(
                        <div></div >
                    );
    }
})
return (
    <div className="">
            <div className="">
                <h4>Comments</h4>
                {comentario}
            </div>
    </div>
)
    }

}

export default DishDetail;
