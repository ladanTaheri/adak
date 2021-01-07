import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './ProductSlider.module.css';

class ProductSlider extends Component {
    render() {

        return (
            <Carousel className="product">
                {this.props.pics !== [] ? this.props.pics.map(m => <Carousel.Item ><img className="d-block w-100 mojgan"
                    src={m.url}
                    alt={m.caption} /></Carousel.Item>) : null}
            </Carousel>
        );
    }
}

export default ProductSlider;