
import "./index.css"
const ErrorBanner =  ({message}:any) =>{

    return (
        <>
            <div className="error-banner">
                <img className="error-banner-img" src="/error.png"/>
                <p className="error-banner-message">{message}</p>
            </div>
        </>
    )
}

export default ErrorBanner;