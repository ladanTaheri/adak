import React, { Component } from 'react';
import styles from "./Product.module.css";
import ProductSlider from './ProductSlider/ProductSlider';
class Product extends Component {
    state = {
        pics: []
    }
    componentDidMount = () => {
        switch (this.props.title) {
            case ("Armitan"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/armitan/s1.jpg', caption: 'armitan' },
                        { url: '/images/calender/armitan/s2.jpg', caption: 'armitan' },
                        { url: '/images/calender/armitan/s3.jpg', caption: 'armitan' }
                    ]
                });

            case ("Parniyan"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/parniyan/s1.jpg', caption: 'Parniyan' },
                        { url: '/images/calender/parniyan/s2.jpg', caption: 'Parniyan' },
                        { url: '/images/calender/parniyan/s3.jpg', caption: 'Parniyan' }
                    ]
                });

            case ("Arvand"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/arvand/s1.jpg', caption: 'arvand' },
                        { url: '/images/calender/arvand/s2.jpg', caption: 'arvand' }

                    ]
                });
            case ("Barsam"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/barsam/s1.jpg', caption: 'barsam' },
                        { url: '/images/calender/barsam/s2.jpg', caption: 'barsam' },
                        { url: '/images/calender/barsam/s2.jpg', caption: 'barsam' },

                    ]
                });

            case ("Nano"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/nano/s1.jpg', caption: 'Nano' },
                        { url: '/images/calender/nano/s2.jpg', caption: 'Nano' },
                        { url: '/images/calender/nano/s3.jpg', caption: 'Nano' },
                    ]
                });
            case ("Tisho"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/tisho/s1.jpg', caption: 'Tisho' },
                        { url: '/images/calender/tisho/s2.jpg', caption: 'Tisho' },
                    ]
                });
            case ("Perada"):
                return this.setState({
                    pics: [
                        { url: '/images/calender/perada/s1.jpg', caption: 'Perada' },
                        { url: '/images/calender/perada/s2.jpg', caption: 'Perada' },
                    ]
                });
            case ("100020"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100020/s1.jpg', caption: 'set' },
                    ]
                });
            case ("100021"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100021/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100021/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100024"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100024/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100024/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100029"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100029/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100029/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100030"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100030/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100030/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100031"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100031/s1.jpg', caption: 'set' },
                    ]
                });
            case ("100040"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100040/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100040/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100041"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100041/s1.jpg', caption: 'set' },
                    ]
                });
            case ("100042"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100042/s1.jpg', caption: 'set' },
                    ]
                });
            case ("100043"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100043/s1.jpg', caption: 'set' },
                    ]
                });
            case ("100044"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100044/s1.jpg', caption: 'set' },
                    ]
                });

            case ("100050"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100050/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100050/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100053"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100053/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100053/s2.jpg', caption: 'set' },
                    ]
                });
            case ("100054"):
                return this.setState({
                    pics: [
                        { url: '/images/sets/100054/s1.jpg', caption: 'set' },
                        { url: '/images/sets/100054/s2.jpg', caption: 'set' },
                    ]
                });
            case ("Cartie"):
                return this.setState({
                    pics: [
                        { url: '/images/pen/carteie/01.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/02.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/03.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/04.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/05.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/06.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/07.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/08.jpg', caption: 'Cartie' },
                        { url: '/images/pen/carteie/09.jpg', caption: 'Cartie' },
                    ]
                });
        }
    }
    render() {
        return (
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 ${styles.header}`}>
                            <h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.title}
                            </h2>

                        </div>

                    </div>
                </header>
                <ProductSlider pics={this.state.pics} name={this.props.title}/>

            </section>
        );
    }
}

export default Product;