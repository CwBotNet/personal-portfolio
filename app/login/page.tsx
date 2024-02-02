"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css"
export default () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const router = useRouter();

    const login = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/auth/login", data)
            console.log("login success", response.data);

            router.push("/dashboard")
        } catch (error: any) {
            console.log("login failed", error.message);

        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (data.email && data.password) {
            setButtonDisabled(false)
        } else {

            setButtonDisabled(false)
        }
    })

    return (

        <main className="w-full h-screen flex flex-col items-center justify-center px-4 bg-white">
            <div className="max-w-sm w-full text-gray-600">
                {buttonDisabled ?
                    <div className="typing-indicator">
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                    </div>
                    : <div className="text-center">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                            <p className="">Don't have an account? <a href="" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                        </div>
                    </div>
                }
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        onClick={() => { login() }}
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Login In
                    </button>
                    <div className="text-center">
                        <a href="" className="hover:text-indigo-600">Forgot password?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}