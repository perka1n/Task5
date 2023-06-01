import React from "react";
import { Link } from "react-router-dom";

function Home(){

    return(
    <>      
      <div className="logo">
        <p className="logo-text">LOGO</p>
      </div>
      <div className="nav">
            <span className="linkWrap">
              <Link to="/Articles">Статьи</Link>
            </span>
            <span className="linkWrap">
              <a href="/">Тесты </a>
            </span>
            <span className="linkWrap">
              <a href="/Games">Игра Сапер </a>
            </span>
      </div>
      </>
    )
}
export {Home}