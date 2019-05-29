import React from 'react';
import s from './Dialogs.module.css';
//noinspection JSUnresolvedVariable
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '  ' + s.active  + ' ' + s.user}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props)=> {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Маша' id="1"/>
                <DialogItem name='Мама ' id="2"/>
                <DialogItem name='Сеня' id="3"/>
                <DialogItem name='Папа' id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Привет"/>
                <Message message="Хорошо"/>
                <Message message="Пока"/>
            </div>
        </div>
    );
};

export default Dialogs;