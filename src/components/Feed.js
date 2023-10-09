import React, { useState } from 'react';
import AddPostForm from './AddPostForm';
import { useUser } from '../UserContext';
import './Feed.css';

const Feed = () => {
    const { username } = useUser();
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    return (
        <div>
            <h1>Feed</h1>
            <p className="usernameDisplay">Posting as: {username}</p>
            <AddPostForm addPost={addPost} />
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>Posted by: {username}</p>
                    <audio controls src={post.file}></audio>
                </div>
            ))}
        </div>
    );
};

export default Feed;
