import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/profile">Профиль</NavLink></div>
            <div className={`${s.item} ${s.active}`}><NavLink activeClassName={s.activeLink} to="/dialogs">Сообщенния</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/news">Новости</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.activeLink} to="/music">Музыка</NavLink></div>
            <div className={s.item}><NavLink  activeClassName={s.activeLink} to="/settings">Настройки</NavLink></div>
        </nav>
    );
};

export default Navbar;