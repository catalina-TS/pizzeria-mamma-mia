import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { getProfile, logout } = useContext(UserContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();

      if (data && data.email) {
        setEmail(data.email);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h2>Mi Perfil</h2>
      <p className="mt-4 fs-4">Email: <strong>{email}</strong></p>
      <button className="btn btn-dark mt-3 px-4" onClick={logout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
