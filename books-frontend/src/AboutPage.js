import React, { useEffect, useState } from 'react';
import './App.css'
import { API_BASE_URL } from './constants';
import Layout from './Layout.js';

function AboutPage() {

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`${API_BASE_URL}/about`)
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

export default AboutPage;