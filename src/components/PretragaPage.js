import { useLocation } from 'react-router-dom'
import FormPretraga from './FormPretraga'
import Nav from './Nav'

function PretragaPage() {

    const location = useLocation()
    const { gradovi } = location.state
    const imen = 'Ime: '

    function pretraga(imeGrada) {
        for (var i = 0; i < gradovi.length; i++) {
            if (imeGrada == gradovi[i].ime) {
                alert('Grad: ' + gradovi[i].ime + ' Država: ' + gradovi[i].drzava + ' Broj stanovnika:' + gradovi[i].brojStanovnika);
            }

        }
    }

    return (
        <div className="pretraga">
            <Nav />
            <h1 id="pretraga-naslov">Pretraga gradova</h1>
            <FormPretraga gradovi={gradovi} pretraga={pretraga} />
        </div>
    );
}

export default PretragaPage;