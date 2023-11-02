import { useNavigate } from "react-router-dom"



const redirecting = (cb:any) =>{
        setTimeout(()=>{ 
            cb('/')
        }, 1000)
    }

const RedirectPage = () => {

const navigate = useNavigate();
    redirecting(navigate)
    return (
        <>
            <h1>redirecting page</h1>
        </>
    )
}

export default RedirectPage

