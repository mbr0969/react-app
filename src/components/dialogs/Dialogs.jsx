import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
    return (
        <div className={s.dialog + '  ' + s.active }>
            <NavLink  to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
};

const  Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <DialogItem name ='Маша' id="1" />
               <div className={s.dialog}>
                   <DialogItem name ='Мама ' id="2" />
               </div>
               <div className={s.dialog}>
                   <DialogItem name ='Сеня' id="3" />
               </div>
               <div className={s.dialog}>
                   <DialogItem name ='Папа' id="4" />
               </div>
           </div>
            <div className={s.messages}>
                <div className={s.message}>Привет</div>
                <div className={s.message}>Пока</div>
                <div className={s.message}>Хорошо</div>
            </div>
        </div>
    );
};

export default Dialogs;