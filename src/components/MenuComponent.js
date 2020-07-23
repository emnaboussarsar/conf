import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

/* Components */
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }

   
        renderDish(dish) {
            if (dish != null) {
                return (
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                )
            } else {
                return (
                    <div>
                    </div>
                )
            }
        } 
    render() {
        const menu = this.props.dishes.map((dish) => { /* This is a prop that are provided from App.js 
            in the render() <MenuComponent dishes={}> */
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });



        console.log('Menu component render is invoked')

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className=" col-12 col-md-5 col-lg-5 mr-1">
                        <Card className="row">
                            {this.renderDish(this.state.selectedDish)}
                        </Card>
                    </div>
                    <DishDetail selectedDish={this.state.selectedDish} dishes={this.props.dishes} superDish={this.renderDish(this.state.selectedDish)} />  
                    </div>
        );
    }
}

export default Menu;
