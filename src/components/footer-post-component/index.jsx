import { useState, useEffect } from "react";
import "./styles.css";

export default function FooterPostComponent({ bookmarks, likes, comments }) {
  const [like, setLike] = useState(false);
  const [countLikes, setCountLikes] = useState(0);

  useEffect(() => {
    setLike(false);
    setCountLikes(likes);
  }, [likes]);

  const handleLike = () => {
    if (like) setCountLikes(countLikes + 1);
    else setCountLikes(countLikes - 1);

    setLike(!like);
  };

  return (
    <footer>
      <div className="bookmarks">
        <div className="line"></div>
        <div>
          <span className="strong count">{bookmarks}</span>Bookmarks
        </div>
        <div className="line"></div>
      </div>
      <div className="iterations">
        <div onClick={() => handleLike()}>
          {(() => {
            if (like) {
              return <i className="fa-solid fa-heart icons icon-heart"></i>;
            } else {
              return <i className="fa-regular fa-heart icons"></i>;
            }
          })()}
          <div>{countLikes}</div>
        </div>
        <div>
          <i className="fa-regular fa-comment icons"></i>
          <div>{comments}</div>
        </div>
      </div>
    </footer>
  );
}
