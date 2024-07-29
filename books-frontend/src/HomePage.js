import React, { useEffect, useState } from 'react';
import './css/App.css';
import { API_BASE_URL } from './constants';
import Layout from './layout/Layout';

function HomePage() {

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`${API_BASE_URL}/`)
            .then(res => res.json())
            .then(data => setContent(data.data))
    })

    return (
        <Layout>
            <div className="App">
                <header className="App-header">
                    <div className="main">
                        {content}
                    </div>
                </header>
            </div>
        </Layout>
    )
}

export default HomePage;


// https://medium.com/@alyshapm10/half-a-stack-integrating-react-app-with-fastapi-part-1-2-81cff4cbd7bf