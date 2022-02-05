import { useState } from 'react'

function FormPretraga(props) {

    const [ime, setIme] = useState('');

    function handleInput(e) {
        setIme(e.target.value);
    }

    return (
        <div className="formpretraga">
            <input type={'text'} className="form-control" value={ime} onChange={handleInput} />
            <button type="button" onClick={() => props.pretraga(ime)} className="btn btn-primary" id="dugme_pretraga">Pretraga</button>
        </div>
    );
}

export default FormPretraga;