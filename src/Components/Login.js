//usenavigation to access currrent stATUS OF our form
//redirect to a specific path
//usenavigate
//useactiondata  used to read and display error messages
import { useState } from "react"
import { useLoaderData, Form,redirect,useActionData,useNavigation  } from "react-router-dom"
import { LoginUser } from "../pages/Api"

export function Loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}
export async function Action({request}){
    const formData= await request.formData
    const email=formData.get("email")
    const password=formData.get("password")
    const pathname=new URL(request.url).searchParams.get("redirectTo")|| "/host"
  try{
    const data=await LoginUser({email,password})
    localStorage.setItem("loggedIn",true)
    return redirect(pathname)
    
  }
  catch(err){
return err.message
  }
}
export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    
const message = useLoaderData()
    const errorMessage=useActionData()
    const navigation=useNavigation()

    

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form method="post"  className="login-form" replace>
                <input
                    name="email"
                    
                    type="email"
                    placeholder="Email address"
                  
                />
                <input
                    name="password"
                   
                    type="password"
                    placeholder="Password"
                   
                />
                <button 
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}