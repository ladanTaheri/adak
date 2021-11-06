import React, { Component } from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
class Navig extends Component {
    state = {}
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-xl navbar-dark fixed-top ${styles.custom}`}>
                    <a className="navbar-brand">
                        <Link href="/"><img src="/images/logo/logo-light.svg" width="140px" height="35px" alt="adak" /></Link>
                    </a>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link href="/"><a className={`nav-link ${styles.navLink} px-2`} >خانه <span className="sr-only">(current)</span></a></Link>
                            </li>

                            <li className="nav-item">
                                <Link href='/products/[name]' as='/products/سالنامه'><a className={`nav-link ${styles.navLink} px-2`} >سالنامه</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/sets/[name]' as='/sets/ست های مدیریتی'><a className={`nav-link ${styles.navLink} px-2`} >ست های مدیریتی</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products/[name]' as='/products/قلم های نفیس Carteie'><a className={`nav-link ${styles.navLink} px-2`}>قلم های نفیس</a></Link>
                            </li>
                            <Link href="/about"><li className="nav-item">
                                <a className={`nav-link ${styles.navLink} px-2`} >درباره اداک</a>
                            </li></Link>
                            {/* <li className="nav-item">
                                <a className={`nav-link ${styles.navLink} px-2`} >سایر محصولات</a>
                            </li> */}
                            <Link href="/blog"><li className="nav-item px-2">
                                <a className={`nav-link ${styles.navLink} px-2`} >بلاگ</a>
                            </li></Link>
                            <Link href="/contact"><li className="nav-item px-2">
                                <a className={`nav-link ${styles.navLink} px-2`}>تماس با اداک</a>
                            </li></Link>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-3 ml-sm-1" type="email" placeholder="ایمیل" aria-label="email" />
                            <button className={`btn button-reverse my-2 my-sm-0 ${styles.joinBtn}`} type="submit">
                                به ما بپیوندید
                            </button>
                        </form>
                    </div>
                </nav>

                <Navbar bg="light" expand="lg" className={`fixed-top ${styles.custom} d-lg-none d-xl-none d-sm-block`}>
                    <Container>
                        <Navbar.Brand href="#home"> <Link href="/"><img src="/images/logo/logo-light.svg" width="140px" height="35px" alt="adak" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                {/* *** */}
                                <li className="nav-item active">
                                    <Link href="/"><a className={`nav-link ${styles.navLink} px-2`} >خانه <span className="sr-only">(current)</span></a></Link>
                                </li>

                                <li className="nav-item">
                                    <Link href='/products/[name]' as='/products/سالنامه'><a className={`nav-link ${styles.navLink} px-2`} >سالنامه</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/sets/[name]' as='/sets/ست های مدیریتی'><a className={`nav-link ${styles.navLink} px-2`} >ست های مدیریتی</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/products/[name]' as='/products/قلم های نفیس Carteie'><a className={`nav-link ${styles.navLink} px-2`}>قلم های نفیس</a></Link>
                                </li>
                                <Link href="/about"><li className="nav-item">
                                    <a className={`nav-link ${styles.navLink} px-2`} >درباره اداک</a>
                                </li></Link>

                                {/* *** */}

                            </Nav>
                            <Nav>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-3 ml-sm-1" type="email" placeholder="ایمیل" aria-label="email" />
                                    <button className={`btn button-reverse my-2 my-sm-0 ${styles.joinBtn}`} type="submit">
                                        به ما بپیوندید
                                    </button>
                                </form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Navig;
