
import "./index.css"
import axios from "axios"
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { cacheAction, jobsAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";
import { EditJobForm } from "..";

import { CustomizedForm, SnackBarMui } from "..";
interface JobCardProps {
    key: string,
    document: any,
    cb?: any
}

// const switchClassPriorityColor = (label:string) =>{
//     label = label.toLowerCase()
//     switch(label){
//         case "high":
//             return 
//     }
// }



const JobCard = ({document, cb}: JobCardProps) =>{

    const dispatch = useDispatch()

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"
    
    const [isDropdown, setIsDropdown] = useState(false)
    const [priorityLabel, setPriorityLabel] = useState("HIGH")
    const [progressLabel, setProgressLabel] = useState("todo");
    const [isHover, setIsHover] = useState(false);
    const [isEditForm, setIsEditForm] =  useState(false);

    const jobsState = useSelector((state:any)=> state.jobs) 
    const {error, loading, payload} = jobsState as any;

    const editingState = useSelector((state:any)=> state.editing);
    const editingPayload = editingState && editingState.payload;
    const isEditing = editingPayload && editingPayload.isEditing;

    const dropdownHandler = (event:any) =>{
        const divText = event.target.textContent; 
        setPriorityLabel(divText);
        setIsDropdown(!isDropdown);
    };

    const dropdownItemHandler = async (event: any) =>{
        try {
            const divText = event.target.textContent; 
            setPriorityLabel(divText);
            setIsDropdown(!isDropdown); 

            const reduxState = undefined;
            const update = {
                priority: divText
            }
            const documentId = document && document._id || ""
            const responsePut = await axios.put(`${baseUrl}/jobs/one/${documentId}`, update, {withCredentials: true});
            const data = responsePut && responsePut.data;
            const modifiedCount = data && data.modifiedCount || "nan"
            // alert("modifiedCount " + modifiedCount)
            dispatch(jobsAction(reduxState) as unknown as AnyAction);
            dispatch(cacheAction(reduxState) as unknown as AnyAction);
        } catch (error:any) { 
            const {message, response} = error;
            const data = response && response.data;
            const messageServer = data && data.message;
            setErrorMessage(`${message}. ${messageServer}`);
            setOpenSnackBar(!openSnackBar)
        }
        
    }

    const jobSpanHandler = async () =>{
        try { 
            let jobProgress = "doing"
            jobProgress = progressLabel == jobProgress ? "done" : jobProgress
            const update = {
                jobProgress
            }
            const documentId = document && document._id || ""
            const responsePut = await axios.put(`${baseUrl}/jobs/one/${documentId}`, update, {withCredentials: true});
            const data = responsePut && responsePut.data;
            const modifiedCount = data && data.modifiedCount || "nan" 

            const reduxState = undefined;
            dispatch(jobsAction(reduxState) as unknown as AnyAction);
            dispatch(cacheAction(reduxState) as unknown as AnyAction);

            setProgressLabel(jobProgress);
        } catch (error:any) { 
            const {message, response} = error;
            const data = response && response.data;
            const messageServer = data && data.message;
            setErrorMessage(`${message}. ${messageServer}`);
            setOpenSnackBar(!openSnackBar)
        }
        
    };

    const onHoverHandler = () =>{
        setIsHover(!isHover);
    }

    const deleteHandler = async () =>{
        try {
            const documentId = document && document._id || ""
            alert("delete" + documentId);
            const response = await axios.delete(`${baseUrl}/jobs/one/${documentId}`, {withCredentials: true})
            const {data} = response as any;
            const deletedCount = response && data.deletedCount;
            alert("deletedCount " + deletedCount);
            const reduxState = undefined;
            dispatch(jobsAction(reduxState) as unknown as AnyAction);
            dispatch(cacheAction(reduxState) as unknown as AnyAction);
        } catch (error:any) { 
            const {message, response} = error;
            const data = response && response.data;
            const messageServer = data && data.message;
            setErrorMessage(`${message}. ${messageServer}`);
            setOpenSnackBar(!openSnackBar)
        }
    }

    const editFormHandler = async () =>{
        const documentId = document && document._id || ""
        // alert(documentId);
        // const response = await axios.del(`${baseUrl}/jobs/one/${documentId}`)
        setIsEditForm(!isEditForm)
    }

    const openExternalLink = (externalURL:string) => {
        // const externalURL = 'https://www.example.com'; 
        window.open(externalURL, '_blank');
    };

    useEffect(()=>{
        const priority = document.priority || "HIGH"
        const progress = document.jobProgress || "todo"
        setPriorityLabel(priority);
        setProgressLabel(progress);
    }, [])

    return (
        <>
            <div className="job-card-div">
                {/* <h3>Job: {document._id}</h3> */}
                <div className={`job-card-info  ${isEditing ? `job-card-info-editing-mode `:``}`} onClick={isEditing ? editFormHandler : ()=>null}>
                    <div className="job-card-info-top">
                        <p className="job-card-title">{document.job.toUpperCase()}</p>
                        <div className="job-card-priority-div">
                            <div className="job-card-priority-label">
                                <p className={`job-card-priority-label-text  job-card-priority-label-${priorityLabel.toLocaleLowerCase()}`} onClick={dropdownHandler}>{priorityLabel}</p>
                            </div>
                            {
                                isDropdown ? 
                                isEditing ? null:
                                <div className="job-card-priority-dropdown">
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>HIGH</p>
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>MED</p>
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>LOW</p>
                                </div> : null
                            }
                            
                        </div>
                    </div>
                    <div className="job-card-info-bottom">
                        <p className="job-card-footnote">{document._id || "-"}</p>
                        <p className="job-card-footnote" >owner: {document.stakeholder[0] || "-"}</p>
                        <p className="job-card-footnote">progress: {progressLabel}</p>
                        {/* <p className="job-card-footnote">ON DUE</p> */}
                    </div>
                </div>
                <div className={`job-card-span ${isEditing?"job-card-span-loading":null}`} onClick={isEditing ? deleteHandler : progressLabel=="done" ? ()=>null : jobSpanHandler} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}  >
                    <div>
                        {
                            isEditing ? <p className="job-card-span-text">DELETE</p> :
                            isHover ? 
                                (progressLabel == "todo" ?
                                    <p className="job-card-span-text">DO THIS</p>
                                :
                                    <p className="job-card-span-text">DONE </p>
                                )
                            :
                                <p className="job-card-span-text">{progressLabel.toUpperCase()}</p>
                        }
                    </div>
                </div>
            </div>
            {isEditForm ? <EditJobForm cb={()=>setIsEditForm(!isEditForm)} documents={document}/>: null }
            {openSnackBar ? 
                <SnackBarMui openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} message={errorMessage}/>
             : null
            }
            
            
        </>
    )
}

export default JobCard;
