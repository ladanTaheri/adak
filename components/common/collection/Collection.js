import React, { Component } from 'react';
import Link from 'next/link';
import Flickity from "react-flickity-component";
import styles from './Collection.module.css';

class Collection extends Component {
    state = {
    }
    render() {
        const flickityOptions = {
            cellAlign: "right",
            contain: true,
            rightToLeft: true,
            pageDots: false,
            groupCells: true
        }
        const headerClasses = ['col-md-12', styles.header]
        const href = `/sets/${this.props.title}`;

        return (
            <section className={styles.section}>
                <header className="container-fluid">
                    <div className="row">
                        <div className={headerClasses.join(' ')}>
                            <Link href='/sets/[name]' as={href}><h2>
                                <img src="/images/home/category-sign.svg" alt="" />
                                {this.props.title}
                            </h2></Link>
                            <Link href='/sets/[name]' as={href}><a>مشاهده همه</a></Link>
                        </div>
                    </div>
                </header>

                <Flickity options={flickityOptions} className={styles.carousel}>
                    {this.props.items ? this.props.items.map(m => (
                        <Link href='/product/[name]' as={`/product/${m.name}`}><div key={m.ID}><Link href='/product/[name]' as={`/product/${m.name}`}><img key={m.ID} src={m.imageUrl} alt="" /></Link></div></Link>
                    )) : null}

                </Flickity>

            </section>
        );
    }
}

export default Collection;