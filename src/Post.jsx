import React, { useState } from "react";

function Post(props) {

  function changeOpacity(className) {
    if (isReadMore === false) {
      document.querySelectorAll(className).forEach(el => {
        el.style.display = 'none';
        window.history.pushState('page2', title, '#' + title.replace(/\s/g, '-'));
      })
    } else {
      document.querySelectorAll(className).forEach(el => {
        el.style.display = 'block';
        window.history.pushState('page2', title, '/');
        document.getElementById(title.replace(/\s/g, '-')).scrollIntoView();
      })
    }
  };

  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    setTimeout(changeOpacity, 50, ".singlePost");
  };

  let text = props.post;
  let title = props.title;


  return <div className={isReadMore ? "focusOnSinglePost" : "singlePost"} id={title.replace(/\s/g, '-')}>
    <div className="title" onClick={toggleReadMore}>{isReadMore ? '⟵ ' + props.title : props.title}</div>
    <div className="post">{isReadMore ? text : text.slice(0, 950) + '...'}</div>
    <div className="date">{props.published}</div>
  </div>
}

export default Post;