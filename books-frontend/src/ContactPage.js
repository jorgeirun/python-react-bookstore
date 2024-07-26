import React, { useEffect, useState } from 'react';
import './App.css';
import { API_BASE_URL } from './constants';

function App() {

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`${API_BASE_URL}/contact`)
        .then(res => res.json())
        .then(data => setContent(data.data))
    })

    return (
        <div>
            {content}
        </div>
    )

}

export default App;