
import "./index.css"
const EmptyContentBanner =  ({message}:any) =>{

    return (
        <>
            <div className="empty-content-banner">
                <img className="empty-content-banner-img" src="/empty-box-open.png"/>
                <p className="empty-content-banner-message">{message}</p>
            </div>
        </>
    )
}

export default EmptyContentBanner;