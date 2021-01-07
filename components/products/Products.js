import React, { Component } from 'react';
import Item from '../common/sectionSlider/card/Item';
import styles from './Products.module.css';
class Products extends Component {
    state = {
        sources: []
    }
    componentDidMount = () => {
        switch (this.props.title) {
            case ("سالنامه"):
                return this.setState({
                    sources: [
                        { ID: 1, type: 'سالنامه', name: 'Armitan', imageUrl: '/images/calender/01.jpg' },
                        { ID: 2, type: 'سالنامه', name: 'Parniyan', imageUrl: '/images/calender/02.jpg' },
                        { ID: 3, type: 'سالنامه', name: 'Arvand', imageUrl: '/images/calender/03.jpg' },
                        { ID: 4, type: 'سالنامه', name: 'Barsam', imageUrl: '/images/calender/04.jpg' },
                        { ID: 5, type: 'سالنامه', name: 'Nano', imageUrl: '/images/calender/05.jpg' },
                        { ID: 6, type: 'سالنامه', name: 'Tisho', imageUrl: '/images/calender/06.jpg' },
                        { ID: 7, type: 'سالنامه', name: 'Perada', imageUrl: '/images/calender/07.jpg' },
                    ]
                })
                case ("قلم های نفیس Carteie"):
                    return this.setState({
                        sources:[ { ID: 1, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/01.jpg' },
                        { ID: 2, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/02.jpg' },
                        { ID: 3, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/03.jpg' },
                        { ID: 4, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/04.jpg' },
                        { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/05.jpg' },
                        { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/06.jpg' },
                        { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/07.jpg' },
                        { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/08.jpg' },
                        { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/09.jpg' },]})
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
             
                <section>
                    {this.state.sources !== [] ? this.state.sources.map(m => <Item key={m.ID} type={m.type} item={m} />) : null}
                </section>
            </section>
        );
    }
}

export default Products;