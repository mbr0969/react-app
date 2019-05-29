import React from 'react';
import s  from './ProfileInfo.module.css';

const ProfileInfo = ()=> {
    return (
        <div>
            <div>
                <img src='content.jpg'/>
            </div>
            < div className={s.descriptionBlock}>
                ava + discrict
            </ div >
        </div>
    );
};
export default ProfileInfo;