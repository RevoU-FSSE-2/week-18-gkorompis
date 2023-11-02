
import { useEffect, useState} from "react";
import { AppNavbar, ErrorBanner, LinearProgressMUI, NewJobForm, PageBanner, SearchBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import JobBoardMain from "./JobBoardMain";
import { cacheAction, jobsAction, editingAction } from "../../actions";
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

    const [isNewJob, setIsNewJob] = useState(false);
    const handleNewJob = () =>{
        setIsNewJob(!isNewJob);
        if(isNewJob){
            dispatch( jobsAction(jobsList) as unknown as AnyAction)
            dispatch( cacheAction(undefined) as unknown as AnyAction)
        }
    }
    
    const cachesState = useSelector((state:any)=> state.cache);
    const jobsCollection = cachesState && cachesState.payload;
    const jobsCache = jobsCollection && jobsCollection.jobsCache;

    const jobsState = useSelector((state:any)=> state.jobs);
    const {loading, error, payload, message}  = jobsState;
    const jobsList = payload && payload || [];

    const reloadJobsState = useSelector((state:any)=> state.cache);
    const reloadJobsPayload = reloadJobsState && reloadJobsState.payload;
    const isReload = reloadJobsPayload && reloadJobsPayload.isReload;

    const editingState = useSelector((state:any)=> state.editing);
    const editingPayload = editingState && editingState.payload;
    const isEditing = editingPayload && editingPayload.isEditing; 

    const sessionProfileState = useSelector((state:any)=> state.sessionProfile);
    const sessionProfile = sessionProfileState && sessionProfileState.payload;
    
    

    useEffect(()=>{ 
        dispatch( jobsAction(jobsList) as unknown as AnyAction)
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
                {/* <div className="app-icon-container">
                    <div className="app-icon-bar">
                        <img className="app-logo-img app-logo-add" src="/add.png" onClick={handleNewJob}/>
                        <img className="app-logo-img app-logo-edit" src="/editing.png" onClick={()=>handleEditing(isEditing)}/>
                        <img className="app-logo-img app-logo-loupe" src="/loupe.png" onClick={handleLoupe}/>
                        
                    </div>
                </div>
                <div className="dialogs">
                    {isLoupe? <SearchBar searchData= {jobsList} cacheName={"jobsCache"}/>: null}
                    {isNewJob ? <NewJobForm cb={handleNewJob} isCancelButton={true}/> : null}
                    {isEditing ? <PageBanner/>: null}
                </div> */}
                {
                    loading ? <div className="bg-blur"><LinearProgressMUI/></div> :
                    error ? <ErrorBanner message={message}/>: 
                    <>
                        <div className="app-icon-container">
                            <div className="app-icon-bar">
                                <img className="app-logo-img app-logo-add" src="/add.png" onClick={handleNewJob}/>
                                <img className="app-logo-img app-logo-edit" src="/editing.png" onClick={()=>handleEditing(isEditing)}/>
                                <img className="app-logo-img app-logo-loupe" src="/loupe.png" onClick={handleLoupe}/>
                                
                            </div>
                        </div>
                        <div className="dialogs">
                            {isLoupe? <SearchBar searchData= {jobsList} cacheName={"jobsCache"}/>: null}
                            {isNewJob ? <NewJobForm cb={handleNewJob} isCancelButton={true} sessionProfile={sessionProfile}/> : null}
                            {isEditing ? <PageBanner/>: null}
                            
                        </div>
                        <JobBoardMain documents={jobsCache || jobsList} />
                    </>
                    
                } 
            </main>
        </div>
    )
};

export default JobBoard;