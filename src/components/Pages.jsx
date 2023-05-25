import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export function Home() {
  return (<h2>Рандомная статья</h2>);
}

function Tests() {
  return (<h2>Тесты</h2>);
}

function Games() {
  return (<h2>Игры</h2>);
}
