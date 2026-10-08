const LoginPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 
        justify-center items-center">
            <div className="w-100 border border-gray-500 bg-white shadow-md
            rounded-md flex flex-col gap-2 p-4">
                <h1 className="text-3xl text-center">LOGIN ADMIN</h1>
                <div className="flex flex-col gap-2 relative">
                    <input type="text" className="pl-25 z-1 p-2 border border-gray-300 w-full focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" />
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">Username</span>
                </div>
                <div className="flex flex-col gap-2 relative">
                    <input type="text" className="pl-25 z-1 p-2 border border-gray-300 pr-12 w-full focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" />
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">Password</span>

                    <div className="p-2 bg-gray-200 absolute top-0 right-0 rounded-e-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>

                </div>
                <button className="p-2 bg-blue-800 text-white hover:bg-blue-500 transition-all ease-in-out duration-1000">
                    LOGIN</button>
            </div>
        </div>
    );
}
export default LoginPage