import React from 'react';
import s from './Navbar.module.css';

const Navbar  = () =>{

  return(
    <nav className={s.nav}>
    <div className={s.item}><a href="/profile">Профиль</a></div>
    <div className={`${s.item} ${s.active}`}><a href="/dialogs">Сообщенния</a></div>
    <div className={s.item}><a href="/news">Новости</a></div>
    <div className={s.item}><a href="/music">Музыка</a></div>
    <div className={s.item}><a href="/settings">Настройки</a></div>
  </nav>
  );
};

export default Navbar;