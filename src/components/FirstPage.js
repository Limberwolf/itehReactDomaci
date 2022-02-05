import FormAddCity from "./FormAddCity";
import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'



function FirstPage() {

    const [gradovi, setGradovi] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/grad').then(odgovor => {
            setGradovi(odgovor.data.data);
            setLoading(false);
        })
    }, []);

    console.log(gradovi)
    if (loading)
        return <h1>Loading...</h1>


    return (
        <div className="first-page">
            <Nav />
            <h2 id="nova-forma-h2">Forma za dodavanje novog grada</h2>
            <FormAddCity gradovi={gradovi} />
        </div>
    );
}

export default FirstPage;