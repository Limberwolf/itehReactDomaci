import { useState } from 'react'

function FormAddCity(props) {

    const [gradovi2, setGradovi2] = useState(props.gradovi);

    const [grad, setGrad] = useState({
        ime: '',
        drzava: '',
        brojStanovnika: '',
    })

    console.log(gradovi2)

    function noviGrad(grad) {
        setGradovi2(gradovi2 => [...gradovi2, grad])
        alert('Uspešno dodat grad ' + grad.ime + '!')
    }

    return (
        <div className="form-add-city">
            <div className="add-city-fields">
                <label>Ime: </label>
                <input type={'text'} className="form-control" value={grad.ime} onChange={e => setGrad({ ...grad, ime: e.target.value })} />
            </div>
            <div className="add-city-fields">
                <label>Država: </label>
                <input type={'text'} className="form-control" value={grad.drzava} onChange={e => setGrad({ ...grad, drzava: e.target.value })} />
            </div>
            <div className="add-city-fields">
                <label>Broj stanovnika: </label>
                <input type={'number'} className="form-control" value={grad.brojStanovnika} onChange={e => setGrad({ ...grad, brojStanovnika: e.target.value })} />
            </div>
            <button type="button" onClick={() => noviGrad(grad)} className="btn btn-primary" id="dugme_novi">Dodaj</button>
        </div>
    );
}

export default FormAddCity;