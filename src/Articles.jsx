import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {FirstArticle} from "./FirtstArticle"

function Articles(props){
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/post')
      .then(res => res.json())
      .then(data => {
        const titles = data.posts.map(item => item.title);
        setTitles(titles);
      });
  }, [])

  return(
    <>
          <div className="logo">
            <p className="logo-text">Logo</p>
          </div>
    <div className="nav articlesList"> 
      {
        titles.map((title, index) => (
          <span className="linkWrap" key={index = index + 1}>
            <Link to={`/FirstArticle/${index}`}>{title}</Link>
          </span>
        ))

      }

    </div>
    </>
  );
} 
export {Articles};