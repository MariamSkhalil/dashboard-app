import { useDispatch } from "react-redux"
import { logout } from "@/redux/slices/authSlice"
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

export default function Header() {
    const dispatch= useDispatch()
    const router= useRouter()

    const handleLogout= async()=>{
        await signOut(auth)
        dispatch(logout())
        router.push("/login")
    }

    return(
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white text-black shadow-md">
        <div className="flex-1"/>
            <h1 className="sm:text-xl text-lg text-center flex-1 press-start-2p-regular">Dashboard</h1>
            <div className="flex-1 flex justify-end">
                <button onClick={handleLogout} className="text-sm/6 font-semibold text-gray-500 hover:text-gray-900 transition">
                    Log Out <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
    </header>
        
    )
}