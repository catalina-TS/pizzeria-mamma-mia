import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';

const Navbar = () => {

  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <div className="navbar-nav">
            
            <Link to="/" className="btn btn-outline-light text-white border-0 me-2">
              🍕 Inicio
            </Link>
            

            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light text-white border-0 me-2">
                  🔓 Perfil
                </Link>

                <button className="btn btn-outline-light text-white border-0 me-2">
                  🔒 Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light text-white border-0 me-2">
                  🔐 Iniciar Sesión
                </Link>
                <Link to="/register" className="btn btn-outline-light text-white border-0 me-2">
                  🔐 Registrarse
                </Link>
              </>
            )}
          </div>
          
          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;