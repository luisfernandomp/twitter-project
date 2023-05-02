import { useState, useEffect } from "react";
import FooterPostComponent from "../footer-post-component";
import HeaderPostComponent from "../header-post-component";
import "./styles.css";

export default function PostComponent(props) {
  const [post, setPost] = useState(props.post);
  const [data, setData] = useState({
    date: "",
    views: 0,
    bookmarks: 0,
    likes: 0,
    comments: 0
  });

  useEffect(() => {
    setPost(props?.post);
    simularDados();
  }, [props?.post]);

  const randomIntFromInterval = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const simularDados = () => {
    let min = 0;
    let max = 999;
    let countViews = randomIntFromInterval(min, max);
    let countBookmarks = randomIntFromInterval(min, max);
    let countLikes = randomIntFromInterval(min, max);
    let countComments = randomIntFromInterval(min, max);

    setData({
      ...data,
      views: countViews,
      bookmarks: countBookmarks,
      likes: countLikes,
      comments: countComments,
      date: getCurrentDate(),
      hour: getCurrentHour()
    });
  };

  return (
    <section className="container-post">
      <HeaderPostComponent
        name={post.name}
        user={post.user}
        checked={post.checked}
      />
      <main className="post-comment">
        <div className="comment">{post.message}</div>
        <div className="post-data">
          <div>
            <div>{data.hour}</div>
            <div className="dot"></div>
          </div>
          <div>
            <div>{data.date}</div>
            <div className="dot"></div>
          </div>
          <div>
            <span className="strong count">{data.views}</span>
            Views
          </div>
        </div>
      </main>
      <FooterPostComponent
        bookmarks={data.bookmarks}
        likes={data.likes}
        comments={data.comments}
      />
    </section>
  );

  function getCurrentHour() {
    let hour = randomIntFromInterval(1, 12);
    let min = randomIntFromInterval(0, 60);

    return `${hour}:${min}`;
  }
}

export function getCurrentDate(separator = "/") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
