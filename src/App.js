import React, { Component, useEffect ,useState } from "react";
import {Routes, Route, Link, useParams,} from "react-router-dom";
import {style} from "./style.css"
import { Articles } from "./Articles";
import { FirstArticle } from "./FirtstArticle";


function App() {
  let {index} = useParams
  return (
    
    <>      
      <div className="logo">
        <p className="logo-text">LOGO</p>
      </div>
      <div className="nav">
            <span className="linkWrap">
              <Link to="/Articles">Статьи</Link>
            </span>
            <span className="linkWrap">
              <a href="/#">Тесты </a>
            </span>
            <span className="linkWrap">
              <a href="/#">Игры </a>
            </span>
      </div>

      {/* <div className="banner">
        <p className="banner-text">BANNER</p>
      </div> */}
      
            <Routes>         
                <Route path="/Articles" element={<Articles/>}/>
                <Route path="/FirstArticle/:id" element={<FirstArticle/>}></Route>     
                <Route path="/FirstArticle" element={<FirstArticle/>}></Route> \         
            </Routes>

            
            
    </>
  );
}
  
export default App;