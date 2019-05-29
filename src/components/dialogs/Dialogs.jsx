import React from 'react';
import s from './Dialogs.module.css';
//noinspection JSUnresolvedVariable
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '  ' + s.active  + ' ' + s.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props)=> {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {

    let dialogsData = [{id: 1, name: 'Маша'}, {id: 2, name: 'Мама'}, {id: 3, name: 'Сеня'}, {id: 4, name: 'Папа'}];
    let messagesData = [{id: 1, message: 'Привет!!!'}, {id: 2, message: 'Хорошо'}, {id: 3, message: 'Пока'}];


    let dialogs = dialogsData.map((item) =>{
        const {id, name} = item;
        return <DialogItem name={name} id={id}/>
    });



    let messages = messagesData.map((item) => {
        const {id, message} = item;
        return <Message message={message} id={id}/>;
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;