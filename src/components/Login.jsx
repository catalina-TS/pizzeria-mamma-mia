import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const validarDatos = (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        if (!email.trim() || !password.trim()) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            setError ('La contraseña debe tener al menos 6 carácteres.');
            return;
        }

        setSuccess('¡Inicio de sesión exitoso!');
    };
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={validarDatos}>
                {error ? <p className="text-danger">{error}</p> : null}
                {success ? <p className="text-success">{success}</p> : null}

                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                    </div>
                    <div className="form-group mb-3">
                        <label>Contraseña</label>
                        <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                </div>
                <button type="submit" className= "btn btn-primary"> Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;

