import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './posts-list.css';

const PostsList = () => { 
    return (
        <ul className="list-group app-list">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>

    )
}

export default PostsList; 