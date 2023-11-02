
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jobsAction, cacheAction} from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

import { dummyDataJobs } from "../../actions/jobsAction/data";

import { JobCard, ProfileCard } from "../../components";
import { AnyAaaaRecord } from "dns";

const sortMostRecent = (a:any, b:any) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    // @ts-ignore
    return dateB - dateA;
}
const sortAToZ = (a:any, b:any) => {
    const dateA = new Date(a.username);
    const dateB = new Date(b.username);
    // @ts-ignore
    return dateB - dateA;
}


const ProfilePageMain = ({documents, cb}:any) =>{
    const jobsList = documents || [];
    // const sortedJobsList = jobsList[0] ? jobsList.sort(sortMostRecent) : []
    const sortedJobsList = jobsList[0] ? jobsList.sort(sortAToZ) : []

    return (
        <>
            {
                sortedJobsList[0] ? <div className="collection-info-div"><p>Found {jobsList.length} users in collection</p></div> : null
            }
            <div className="app-jobsboard-page-main jobcard-grid-col2">
                
                {
                    sortedJobsList[0] ?  
                        jobsList.map((x:any, key:any)=>{
                        return <><ProfileCard documents={x}/></>
                    }) : <h1>collection not found</h1>
                }
            </div>
        </>
    )
};

export default ProfilePageMain;