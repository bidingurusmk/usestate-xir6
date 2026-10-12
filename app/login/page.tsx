"use client";
import { users } from "@/data/user";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleLogin = () => {
        const user = users.find(u => u.username === username && u.password === password);
        if(user) {
            alert(`Welcome ${user.username}`);
            router.push("/");
        } else {
            alert("Invalid username or password");
        }
    }
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 
        justify-center items-center text-black">
            <div className="w-100 border border-gray-500 bg-white shadow-md
            rounded-md flex flex-col gap-2 p-4 relative justify-center items-center
            pt-16">
                <div className="w-30 h-30 overflow-hidden rounded-full absolute -top-15
                border-4 border-gray-500">
                    <Image src="/images/logo-superman.png" alt="Logo" width={100} 
                    height={100} className="w-full" />
                </div>
                <h1 className="text-3xl text-center">LOGIN ADMIN</h1>
                <div className="flex flex-col gap-2 relative w-full">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" className="pl-25 z-1 p-2 border border-gray-300 w-full 
                    focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" />
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">Username</span>
                </div>
                <div className="flex flex-col gap-2 relative w-full">
                    <input onChange={(e) => setPassword(e.target.value)} type="text" className="pl-25 z-1 p-2 border border-gray-300 pr-12 w-full focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" />
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">Password</span>

                    <div className="p-2 bg-gray-200 absolute top-0 right-0 rounded-e-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
                <button onClick={handleLogin} className="p-2 bg-blue-800 text-white hover:bg-blue-500 transition-all ease-in-out duration-1000">
                    LOGIN</button>
            </div>
        </div>
    );
}
export default LoginPage