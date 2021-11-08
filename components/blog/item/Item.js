import React, { Component } from "react";
import styles from "../Blog.module.css";
import { Fragment } from "react";
import Link from 'next/link';

class Item extends Component {
  state = {
    brief: true,
  };
  handleClick = () => {
    this.setState({ brief: !this.state.brief });
  };
  render() {
      const item ={
          name:"عنوان"
      }
    return (
      <Fragment>
        <div className={styles.card}>
            <img src={this.props.imgUrl} className={styles.image}/>
            <h1 className={styles.heading}>عنوان</h1>
            <p className={styles.shortText}> کوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتکوتاه متن اخباکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارراه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبارن اخبارکوتاه متن اخبارکوتاه متن اخبارکوتاه متن اخبار</p>
            <Link href='/detail/[name]' as={`/detail/${item.name}`}><a  className={styles.btn}>مشاهده بیشتر</a></Link>
        </div>
      </Fragment>
    );
  }
}

export default Item;
