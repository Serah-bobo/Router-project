//userouteerror is used to access the error thrown during route loading process.handle and display errors
import { useRouteError } from "react-router-dom"
const Error = () => {
  const error=useRouteError()
  return (
    <div>
        <h1>Error:{error.message}</h1>
        <p>{error.status}-{error.statusText}</p>
    </div>
  )
}

export default Error