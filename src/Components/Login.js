import { useState } from "react"
import { useLoaderData } from "react-router-dom"
export function Loader({request}){
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const message=useLoaderData()
    function handleSubmit(e) {
        e.preventDefault()
        
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">  {message}</h2>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}