
import { useEffect, useState} from "react";
import { AppNavbar, SearchBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import JobBoardMain from "./JobBoardMain";
import { jobsAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

const JobBoard = () =>{

    const [isLoupe, setIsLoupe] = useState(false);
    const handleLoupe = () =>{
        setIsLoupe(!isLoupe);
    }
    
    const cachesState = useSelector((state:any)=> state.cache);
    const jobsCollection = cachesState && cachesState.payload;
    const jobsCache = jobsCollection && jobsCollection.jobsCache;

    const jobsState = useSelector((state:any)=> state.jobs);
    const {loading, error, payload}  = jobsState;
    const jobsList = payload && payload || [];
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( jobsAction(jobsList) as unknown as AnyAction)
    }, [dispatch])
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
                        <img className="app-logo-img" src="/add.png"/>
                        <img className="app-logo-img" src="/add-friend.png"/>
                        <img className="app-logo-img" src="/loupe.png" onClick={handleLoupe}/>
                        
                    </div>
                </div>
                <div className="dialogs">
                    {isLoupe? <SearchBar searchData= {jobsList}/>: null}
                </div>
                {
                    loading ? <h1>loading...</h1> :
                    error ? <h1>error...</h1> :
                    <JobBoardMain documents={jobsCache || jobsList}/>
                }
                
            </main>
        </div>
    )
};

export default JobBoard;