import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Home } from './Home';
import { Tests } from './Tests';
import { Games } from './Games';
import { Zhest } from './Zhest';
import { Super } from './Super';
import { style } from './style.css';
import { Osn } from './Osn';

function App() {
  return (
    <>
    <header>
      <div class="logo">
        <div class="logoname">
          LOGO
        </div>
      </div>
      <div class="another">
      
      
        <Link class="info" to="/Osn">Статьи</Link>
      
      <div class="other">
        <a  class="game" href="/Zhest">Игра</a>
        <br />
        <a href="/Super">Тесты</a>
        <br />
        <a href="/Home">Назад</a>
        
      </div>
      </div>
      <div class="banner">
        <h1 class="bannername">Banner</h1>
      </div>
    </header>
    <Routes>
      <Route path="/Zhest" element={<Zhest/>}/>
      <Route path="/Super" element={<Super/>}/>
      <Route path="/Osn" element={<Osn/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/Tests" element={<Tests/>} />
      <Route path="/Games" element={<Games/>} />
    </Routes>
    </>
  );
}

export {App};
