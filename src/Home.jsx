import React, { useEffect, useState } from 'react';

function Home(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
    fetch('https://dummyjson.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, []);
    return (
        <div class="psh">
            <h1>Статья 1</h1>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export {Home} 