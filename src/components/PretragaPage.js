import { useLocation } from 'react-router-dom'
import FormPretraga from './FormPretraga'
import Nav from './Nav'

function PretragaPage() {

    const location = useLocation()
    const { gradovi } = location.state


    return (
        <div className="pretraga">
            <Nav />
            <h1 id="pretraga-naslov">Pretraga gradova</h1>
            <FormPretraga gradovi={gradovi} />
        </div>
    );
}

export default PretragaPage;