import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Привет!!' likesCount='89'/>
                <Post message='Как дела?' likesCount='4'/>
                <Post message='Отлично!!!' likesCount='123'/>
            </div>
        </div>
    );
};

export default MyPosts;