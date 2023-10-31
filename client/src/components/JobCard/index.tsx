
import "./index.css"
import axios from "axios"
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
interface JobCardProps {
    key: string,
    document: any
}

// const switchClassPriorityColor = (label:string) =>{
//     label = label.toLowerCase()
//     switch(label){
//         case "high":
//             return 
//     }
// }

const baseUrl = "http://localhost:5002"

const JobCard = ({document}: JobCardProps) =>{

    const [isDropdown, setIsDropdown] = useState(false)
    const [priorityLabel, setPriorityLabel] = useState("HIGH")
    const [progressLabel, setProgressLabel] = useState("todo");
    const [isHover, setIsHover] = useState(false);

    const jobsState = useSelector((state:any)=> state.jobs)
    const {error, loading, payload} = jobsState;

    const dropdownHandler = (event:any) =>{
        const divText = event.target.textContent;
        console.log(divText);
        setPriorityLabel(divText);
        setIsDropdown(!isDropdown);
    };

    const dropdownItemHandler = async (event: any) =>{

        const divText = event.target.textContent;
        console.log(divText);
        setPriorityLabel(divText);
        setIsDropdown(!isDropdown);

        const update = {
            priority: divText
        }
        const documentId = document && document._id || ""
        const responsePut = await axios.put(`${baseUrl}/jobs?_id=${documentId}`, update);
        const data = responsePut && responsePut.data;
        const modifiedCount = data && data.modifiedCount || "nan"
        alert("modifiedCount " + modifiedCount)
    }

    const jobSpanHandler = async () =>{
        
        let jobProgress = "doing"
        jobProgress = progressLabel == jobProgress ? "done" : jobProgress
        const update = {
            jobProgress
        }

        const documentId = document && document._id || ""
        const responsePut = await axios.put(`${baseUrl}/jobs?_id=${documentId}`, update);
        const data = responsePut && responsePut.data;
        const modifiedCount = data && data.modifiedCount || "nan"
        alert("modifiedCount " + modifiedCount)

        setProgressLabel(jobProgress);
    };

    const onHoverHandler = () =>{
        setIsHover(!isHover);
    }

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
                <div className="job-card-info">
                    <div className="job-card-info-top">
                        <p className="job-card-title">{document.job.toUpperCase()}</p>
                        <div className="job-card-priority-div">
                            <div className="job-card-priority-label">
                                <p className={`job-card-priority-label-text  job-card-priority-label-${priorityLabel.toLocaleLowerCase()}`} onClick={dropdownHandler}>{priorityLabel}</p>
                            </div>
                            {
                                isDropdown ? 
                                <div className="job-card-priority-dropdown">
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>HIGH</p>
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>MED</p>
                                    <p className="job-card-priority-dropdown-item" onClick={dropdownItemHandler}>LOW</p>
                                </div> : null
                            }
                            
                        </div>
                    </div>
                    <div className="job-card-info-bottom">
                        <p className="job-card-text">{document._id || "-"}</p>
                        <p className="job-card-footnote">owner: {document.stakeholder[0] || "-"}</p>
                        <p className="job-card-footnote">progress: {progressLabel}</p>
                        {/* <p className="job-card-footnote">ON DUE</p> */}
                    </div>
                </div>
                <div className="job-card-span" onClick={progressLabel=="done" ? ()=>null : jobSpanHandler} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}  >
                    <div>
                        {
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
        </>
    )
}

export default JobCard;