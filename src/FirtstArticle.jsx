import React,{useState, useEffect} from "react";
import { useParams, Link,} from "react-router-dom";

function FirstArticle() {
    const [article, setArticle] = useState();
    const [articleTitle, setArticleTitle] = useState();
    let {id} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
          .then(res => res.json())
          .then(data => {
            setArticle(data.body);
            setArticleTitle(data.title)}
            );
          
      },[])

  
    return (
      <>
      <div className="logo">
          <p className="logo-text">Logo</p>
      </div>

      <div className="nav articlesList">
      { <>
            <h1 className="articleH1">{articleTitle}</h1>
             <p className="articleParagraph">{article}</p>
        </>     
      }
        <div className="linkWrap">
          <Link to={"/Articles"}>назад</Link>
        </div>
      </div>
      </>
    );
  }
export{FirstArticle}