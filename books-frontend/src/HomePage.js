import React, { useEffect, useState } from 'react';
import './App.css';
import { API_BASE_URL } from './constants'

function App() {

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`${API_BASE_URL}/`)
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


// https://medium.com/@alyshapm10/half-a-stack-integrating-react-app-with-fastapi-part-1-2-81cff4cbd7bf