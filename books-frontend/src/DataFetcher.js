import { useEffect } from 'react';

function DataFetcher({ onDataFetched }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/books/?skip=0&limit=12`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                onDataFetched(data);
            } catch (error) {
                onDataFetched({ error: error.message });
            }
        };
        fetchData();
    }, [onDataFetched]);

    return null;
}

export default DataFetcher;
