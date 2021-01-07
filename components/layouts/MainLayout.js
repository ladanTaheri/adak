import React, { Component, Fragment } from 'react';
import Footer from '../common/footer/Footer';
import Nav from '../common/nav/Nav';
class MainLayout extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Nav/>
                {this.props.children}
                <Footer/>
            </Fragment>
        );
    }
}

export default MainLayout;