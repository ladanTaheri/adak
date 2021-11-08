import React, { Component } from "react";
import styles from "../Blog.module.css";
import { Fragment } from "react";
import Link from "next/link";
import config from '../../../services/config.json';

class Item extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.card}>
          <img src={`${config.api}${this.props.data.image.url}`} className={styles.image} />
          <h1 className={styles.heading}>{this.props.data.title}</h1>
          <p className={styles.shortText}>{this.props.data.description}</p>
          <Link href="/detail/[name]" as={`/detail/${this.props.data.id}`}>
            <a className={styles.btn}>مشاهده بیشتر</a>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Item;
