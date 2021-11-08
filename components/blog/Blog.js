import React, { Component } from "react";
import styles from "./Blog.module.css";
import Item from "./item/Item";
class Blog extends Component {
  state = {};
  render() {
    return (
      <div className={styles.cardWrapper}>
        <Item imgUrl="/images/blog/blog2.jpg" />
        <Item imgUrl="/images/blog/blog3.jpg" />
        <Item imgUrl="/images/blog/blog3.jpg" />
      </div>
    );
  }
}

export default Blog;
