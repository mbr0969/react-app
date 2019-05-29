import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Привет!!!', likesCount: '89'},
        {id: 2, message: 'Как дела?', likesCount: '4'},
        {id: 3, message: 'Отлично!!!', likesCount: '123'}
    ];

    let posts = postsData.map((item) => {
        const {id, message, likesCount} = item;
        return <Post message={message} likesCount={likesCount} id={id}/>
    });

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
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;