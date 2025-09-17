import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Inicio</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Profile">Anatomía</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Contact">Anticonceptivos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/RoaringKnight">E.T.S.</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Consenso">Consentimiento</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Embrion">Embarazo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Charla">La Charla</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
