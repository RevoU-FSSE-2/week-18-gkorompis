import "./index.css"
const AppNavbar = () =>{

    return (
        <>
            <div className="app-navbar-div slide-on-hover">
                <h3 className="app-navbar-logo-font">jobsprint</h3>
                <div className="app-navbar-anchors">
                    <a>jobs</a>
                    <a>users</a>
                    <a>logout</a>
                </div>
            </div>
        </>
    )
}

export default AppNavbar;