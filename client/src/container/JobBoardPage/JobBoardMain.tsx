
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jobsAction, cacheAction} from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

import { dummyDataJobs } from "../../actions/jobsAction/data";

import { EmptyContentBanner, JobCard } from "../../components";
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


const JobBoardMain = ({documents, cb}:any) =>{
    const jobsList = documents || [];
    const sortedJobsList = jobsList[0] ? jobsList.sort(sortMostRecent) : []

    return (
        <>
            {
                sortedJobsList[0] ? <div className="collection-info-div"><p>Found {jobsList.length} jobs in collection</p></div> : null
            }
            <div className="app-jobsboard-page-main jobcard-grid-col2">
                
                {
                    sortedJobsList[0] ?  
                        jobsList.map((x:any, key:any)=>{
                        return <><JobCard key={key}  document={x} /></>
                    }) : <EmptyContentBanner message={"empty collection"}/>
                }
            </div>
        </>
    )
};

export default JobBoardMain;