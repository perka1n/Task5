import React, { Component, useEffect ,useState } from "react";
import {Routes, Route, Link, useParams,} from "react-router-dom";
import {style} from "./style.css"
import {Home} from "./Home"
import { Articles } from "./Articles";
import { FirstArticle } from "./FirtstArticle";
import {Games} from "./Games"


function App() {
  return (
    
      
            <Routes>         
                <Route path="/" element={< Home/>}></Route>
                <Route path="/Articles" element={<Articles/>}/>
                <Route path="/FirstArticle/:id" element={<FirstArticle/>}></Route>     
                <Route path="/Games" element={<Games/>}></Route>         
            </Routes>

            
            
  );
}
  
export default App;