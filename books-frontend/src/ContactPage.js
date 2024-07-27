import React, { useEffect, useState } from 'react';
import './App.css';
import { API_BASE_URL } from './constants';
import Layout from './Layout.js';

function ContactPage() {

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`${API_BASE_URL}/contact`)
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

export default ContactPage;