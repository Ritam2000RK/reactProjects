import React from 'react'
import { useState, useEffect } from 'react'

function DataFetchingComponent() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }
    };
    
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: {error.message}</p>
    }

  return (
    <>
        <div>
            <h1>Feteched Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default DataFetchingComponent