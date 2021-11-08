import React, { Component } from "react";
import { getNewsById } from "../../services/blogService";
import styles from "./Detail.module.css";
import config from '../../services/config.json';

class Detail extends Component {
  state = { blog: null };
  componentDidMount = () => {
    this.handleGetBlog();
  };
  handleGetBlog = async () => {
    try {
      const { data, status } = await getNewsById(this.props.title);

      if (status === 200) {
        console.log("data");
        console.log(data);
        this.setState({ blog: data });
      }
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <section className={styles.main}>
        <div className={styles.news}>
          <h2> {this.state.blog ? this.state.blog.title : null}</h2>
          <div className={styles.imgHoverZoom}>
            <img
              src={
                this.state.blog
                  ? `${config.api}${this.state.blog.image.url}`
                  : null
              }
              className={styles.imgMain}
            />
          </div>
          <div className={styles.date}>
            <p>
               , تخمین زمان خواندن :
              {this.state.blog ? this.state.blog.estimationReadTime : null}{" "}
              دقیقه
            </p>
          </div>
          <p
            className={
              this.state.brief ? styles.showBrief : styles.showBrief.active
            }
          >
            {this.state.blog ? this.state.blog.description : null}
          </p>
        </div>
      </section>
    );
  }
}

export default Detail;
