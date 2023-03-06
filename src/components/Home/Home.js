import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
    const phones = useLoaderData()

    return (
        <div>
            <h4>Show me on the phones you have</h4>
            <h5>I got: {phones.length}</h5>
            {
                phones.map(ph => <li ><Link to={`/phones/${ph.id}`}
                >{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;