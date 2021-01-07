import React, { Component } from 'react';
import Item from './card/Item';
import styles from './Sets.module.css';
class Sets extends Component {
    state = {
        sources: []
    }
    componentDidMount = () => {
        switch (this.props.title) {
            case ("ست های مدیریتی"):
                return this.setState({
                    sources: [
                        { ID: 0, type: 'ست مدیریتی', name: '100050', imageUrl: '/images/sets/00.jpg' },
                        { ID: 1, type: 'ست مدیریتی', name: '100020', imageUrl: '/images/sets/01.jpg' },
                        { ID: 2, type: 'ست مدیریتی', name: '100029', imageUrl: '/images/sets/02.jpg' },
                        { ID: 3, type: 'ست مدیریتی', name: '100024', imageUrl: '/images/sets/03.jpg' },
                        { ID: 4, type: 'ست مدیریتی', name: '100022', imageUrl: '/images/sets/04.jpg' },
                        { ID: 5, type: 'ست مدیریتی', name: '100021', imageUrl: '/images/sets/05.jpg' },
                        { ID: 6, type: 'ست مدیریتی', name: '100054', imageUrl: '/images/sets/06.jpg' },
                        { ID: 7, type: 'ست مدیریتی', name: '100053', imageUrl: '/images/sets/07.jpg' },
                        { ID: 8, type: 'ست مدیریتی', name: '100043', imageUrl: '/images/sets/08.jpg' },
                        { ID: 9, type: 'ست مدیریتی', name: '100042', imageUrl: '/images/sets/09.jpg' },
                        { ID: 10, type: 'ست مدیریتی', name: '100040', imageUrl: '/images/sets/10.jpg' },
                        { ID: 11, type: 'ست مدیریتی', name: '100031', imageUrl: '/images/sets/11.jpg' },
                        { ID: 12, type: 'ست مدیریتی', name: '100030', imageUrl: '/images/sets/12.jpg' },
                        { ID: 13, type: 'ست مدیریتی', name: '100044', imageUrl: '/images/sets/13.jpg' },
                        { ID: 14, type: 'ست مدیریتی', name: '100024', imageUrl: '/images/sets/14.jpg' },
                        { ID: 15, type: 'ست مدیریتی', name: '100041', imageUrl: '/images/sets/15.jpg' }

                    ]
                })
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

export default Sets;