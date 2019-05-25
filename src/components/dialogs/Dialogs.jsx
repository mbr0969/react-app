import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <NavLink to="#">
                    <div className={s.dialog + '  ' + s.active }>
                        Маша
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className={s.dialog}>
                        Мама
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className={s.dialog}>
                        Сеня
                    </div>
                </NavLink>
                <NavLink to="#">
                    <div className={s.dialog}>
                        Папа
                    </div>
                </NavLink>
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