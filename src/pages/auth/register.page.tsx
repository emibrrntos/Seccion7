import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "reactfire";

const RegisterPage = () => {

  const auth = useAuth();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth,provider);
      console.log("Iniciar sesión con Google");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  }
  

  return (
    <div>
      <h1 className="text-center mt-5">Registrar</h1>
      <button onClick={handleGoogleSignIn}>Sesion con Google</button>
    </div>
  )
}

export default RegisterPage