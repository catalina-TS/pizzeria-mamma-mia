import Button from 'react-bootstrap/Button';

const Navbar = () =>{
    const total = 25000;
    const token = false;

    return (
        <nav className="d-flex justify-content-between text-white bg-dark p-3">
          <div className="d-flex align-items-center gap-2">
            <h4 className="m-0 me-3">Pizzería Mamma Mía!</h4>
            
            <Button variant="outline-light text-white">🍕 Home</Button>
    
            {token ? (
              <>
                <Button variant="outline-light text-white">🔓 Profile</Button>
                <Button variant="outline-light text-white">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light text-white">🔐 Login</Button>
                <Button variant="outline-light text-white">🔐 Register</Button>
              </>
            )}
          </div>
    
          <Button variant="outline-info text-info">
            🛒 Total: ${total.toLocaleString()}
          </Button>
        </nav>
      );
    };
    
    export default Navbar;