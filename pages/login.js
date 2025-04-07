
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { loginSuccess, loginFailure } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  //console.log('Dispatch:', dispatch);
  //console.log('Error:', error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const router= useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let userCredential;
      if (isRegister) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setIsRegister(false)
        setEmail("");
        setPassword("");
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      const user = userCredential.user;
      dispatch(loginSuccess({ email: user.email, uid: user.uid }));
      router.push("/dashboard")
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className="min-h-screen p-6 mt-4 flex items-center justify-center flex-1">
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-blue-300 shadow-md md:max-w-2xl">
      <h2 className="sm:text-lg text-xl font-semibold mt-6 text-center">
        {isRegister ? "Register" : "Login"}
      </h2>
      <form onSubmit={handleSubmit} className="p-8 space-y-4">
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-none rounded bg-white text-base"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-none rounded bg-white text-base"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="items-center justify-center mx-auto flex text-white p-3 rounded font-medium hover:bg-blue-700 transition">
          {isRegister ? "Sign Up" : "Login"}
        </button>
      </form>
      <button
        className="m-4 text-sm text-gray-600 underline block text-center"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Already have an account? Login" : "New user? Register"}
      </button>
    </div>
    </div>
  );
}
