import FormAddCity from "./FormAddCity";
import { useEffect, useState } from 'react'
import axios from 'axios'



function FirstPage() {

    const [gradovi, setGradovi] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/grad').then(odgovor => {
            setGradovi(odgovor.data.data);
        })
    }, []);

    console.log(gradovi)

    return (
        <div className="first-page">
            <FormAddCity gradovi={gradovi} />
        </div>
    );
}

export default FirstPage;