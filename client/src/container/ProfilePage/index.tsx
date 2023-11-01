
import { useEffect, useState} from "react";
import { AppNavbar, LinearProgressMUI, NewUserForm, PageBanner, SearchBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import ProfilePageMain from "./ProfilePageMain";
import { cacheAction, usersAction, editingAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

const JobBoard = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoupe, setIsLoupe] = useState(false);
    const handleLoupe = () =>{
        setIsLoupe(!isLoupe);
    }

    const handleEditing = (isEditing:boolean) =>{
        const reduxState = {isEditing: !isEditing}
        dispatch( editingAction(reduxState) as unknown as AnyAction )
    }

    const [isNewUser, setIsNewUser] = useState(false);
    const handleNewUser = () =>{
        setIsNewUser(!isNewUser);
        if(isNewUser){
            dispatch( usersAction(usersList) as unknown as AnyAction)
            dispatch( cacheAction(undefined) as unknown as AnyAction)
        }
    }
    
    const cachesState = useSelector((state:any)=> state.cache);
    const usersCollection = cachesState && cachesState.payload;
    const usersCache = usersCollection && usersCollection.usersCache;

    const usersState = useSelector((state:any)=> state.users);
    const {loading, error, payload}  = usersState;
    const usersList = payload && payload || [];

    const reloadJobsState = useSelector((state:any)=> state.cache);
    const reloadJobsPayload = reloadJobsState && reloadJobsState.payload;
    const isReload = reloadJobsPayload && reloadJobsPayload.isReload;

    const editingState = useSelector((state:any)=> state.editing);
    const editingPayload = editingState && editingState.payload;
    const isEditing = editingPayload && editingPayload.isEditing;
    console.log("isEditing", isEditing)
    
    

    useEffect(()=>{
        console.log("use effect triggerred")
        dispatch( usersAction(usersList) as unknown as AnyAction)
    }, [dispatch, reloadJobsState])
    return (
        <div className="app-jobsboard-page grid-col-2">
            <header className="app-navbar">
               <AppNavbar/>
            </header>
            <main className="app-main">
                <div className="app-logo-div">
                    
                    <h3 className="app-jobsboard-page-main-logo-font">jobsprint</h3>
                </div>
                <div className="app-icon-container">
                    <div className="app-icon-bar">
                        <img className="app-logo-img app-logo-add" src="/add.png" onClick={handleNewUser}/>
                        <img className="app-logo-img app-logo-edit" src="/editing.png" onClick={()=>handleEditing(isEditing)}/>
                        <img className="app-logo-img app-logo-loupe" src="/loupe.png" onClick={handleLoupe}/>
                        
                    </div>
                </div>
                <div className="dialogs">
                    {isLoupe? <SearchBar searchData= {usersList} cacheName={"usersCache"}/>: null}
                    {isNewUser ? <NewUserForm cb={handleNewUser} isCancelButton={true}/> : null}
                    {isEditing ? <PageBanner/>: null}
                    
                </div>
                {
                    loading ? <div className="bg-blur"><LinearProgressMUI/></div> :
                    error ? <h1>error...</h1> :
                    <ProfilePageMain documents={usersCache || usersList} />
                } 
            </main>
        </div>
    )
};

export default JobBoard;