import { Navigate } from "react-router-dom"
import SignUp from "./SignUp"

export const RouteSignUp=({childern,user})=>
    {
        return user ? childern : <Navigate to={<SignUp/>}></Navigate>
    }