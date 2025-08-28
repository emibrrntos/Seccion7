import { useAuth, useUser } from "reactfire";

const DashboardPage = () => {

  const auth = useAuth();
  const {data: user} = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Bienvenido, {user.displayName}</p>
          <p>Tu correo electrónico es: {user.email}</p>
          <button onClick={() => auth.signOut()}>Cerrar sesión</button>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  )
}

export default DashboardPage