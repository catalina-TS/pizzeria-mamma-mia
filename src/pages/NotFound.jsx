import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mt-5 text-center">
            <h1 className="container mt-5 text-center">404</h1>
            <h2>¡Ups! Te has perdido en la cocina</h2>
            <p>La pagina que buscas no existe</p>
            <Link to="/" className="btn btn-success mt-3">Volver al inicio</Link>
        </div>
    )
}

export default NotFound;