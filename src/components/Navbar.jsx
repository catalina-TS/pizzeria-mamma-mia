import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    logout();      
    closeMenu();   
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          Pizzería Mamma Mia!
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <div className="navbar-nav me-auto mt-2 mt-lg-0">

            <Link to="/" className="btn btn-outline-light text-white border-0 me-2 mb-1" onClick={closeMenu}>
              🍕 Inicio
            </Link>
            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light text-white border-0 me-2 mb-1" onClick={closeMenu}>
                  🔓 Perfil
                </Link>
                <button className="btn btn-outline-light text-white border-0 me-2 mb-1" onClick={handleLogout}>
                  🔒 Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light text-white border-0 me-2 mb-1" onClick={closeMenu}>
                  🔐 Iniciar Sesión
                </Link>
                <Link to="/register" className="btn btn-outline-light text-white border-0 me-2 mb-1" onClick={closeMenu}>
                  📝 Registrarse
                </Link>
              </>
            )}
          </div>

          <Link to="/cart" className="btn btn-outline-info mt-2 mt-lg-0" onClick={closeMenu}>
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;