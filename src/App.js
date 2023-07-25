// файл App.js

import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import serverData from '../serverData';
// импортируем нужные компоненты
import Friends from './Friends';
import Friend from './Friend';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className="header">
          <NavLink to='/' className="header__logo">Parrot Friendship Society</NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item"><NavLink className="menu__link" to='/friends'>Друзья</NavLink></li>
              <li className="menu__list-item"><NavLink className="menu__link" to='/news'>Новости</NavLink></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/friends' element={<Friends serverData={serverData} />} />
          <Route path='/friends/:id' element={<Friend serverData={serverData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;