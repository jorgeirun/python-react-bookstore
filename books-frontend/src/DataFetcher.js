import { useEffect } from 'react';

function DataFetcher({ url_path, onDataFetched }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url_path);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                onDataFetched(data);
            } catch (error) {
                onDataFetched({ error: error.message });
            }
        };
        fetchData();
    }, []);

    return null;
}

export default DataFetcher;
