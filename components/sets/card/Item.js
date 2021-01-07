import React, { Component } from 'react';
import Link from 'next/link';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styles from './item.module.css';

class Item extends Component {
    state = {
        mark: [styles.mark],
        isActive: false,
        title: this.props.title,
        titleSummery: null,
        as: '/',
        href: '/',
        direction: null,
        timeClass: null,
        tooltip: null,

    };


    render() {


        return (
            <div className={`card ${styles.filmCard}`} style={{ marginRight: this.props.marginRight, marginLeft: this.props.marginLeft }}>

                <Link href='/product/[name]' as={`/product/${this.props.item.name}`}>
                    <figure className="imghvr-blur">
                        {this.props.item ? <img src={this.props.item.imageUrl} className="carousel-cell-image" /> : <img src="/images/film-pic.png" className="carousel-cell-image" />}


                        <figcaption>

                            <h5 className={styles.heading}>
                                {this.props.item ? `${this.props.item.type} :  ${this.props.item.name}` : 'نام محصول'}
                            </h5>
                        </figcaption>
                    </figure>
                </Link>
            </div>
        );
    }
}

export default Item;