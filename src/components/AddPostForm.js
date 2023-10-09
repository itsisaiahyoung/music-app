import React, { useState } from 'react';

const AddPostForm = ({ addPost }) => {
    const [songTitle, setSongTitle] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!songTitle || !file) return;

        // Create a new post object
        const newPost = {
            id: new Date().getTime(),
            title: songTitle,
            file: URL.createObjectURL(file)
        };

        // Add the new post
        addPost(newPost);

        // Reset form
        setSongTitle('');
        setFile(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Song Title" 
                value={songTitle} 
                onChange={(e) => setSongTitle(e.target.value)} 
            />
            <input 
                type="file" 
                accept="audio/*" 
                onChange={handleFileChange} 
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default AddPostForm;
