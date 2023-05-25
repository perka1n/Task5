import { Routes, Route, } from 'react-router-dom';
import React from 'react';

import {Home} from './Home';
import {Games} from './Games';
import {Tests} from './Tests';

import {style} from './style.css'

const Osn = () => {
    return (
        <div class="osnl">
        <a href="/">Статья 1</a>
        <br />
        <a href="/Tests">Статья 2</a>
        <br />
        <a href="/Games">Статья 3</a>
        <br />
        </div>
    )
}

export {Osn}