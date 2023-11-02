


import { AnyAction } from "@reduxjs/toolkit";
import { cacheAction, usersAction } from "../../actions";
import "./index.css"
import { useSelector, useDispatch} from "react-redux";
import axios from 'axios'
import { useState } from "react";
import { EditUserForm } from "..";

import { CustomizedForm, SnackBarMui } from "..";

const ProfileCard = ({documents}:any) =>{
    const profileUsername = documents && documents.username 

    const dispatch = useDispatch()

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

    const [isEditUserForm, setIsEditUserForm] =  useState(false); 
    const editingState = useSelector((state:any)=> state.editing);
    const editingPayload = editingState && editingState.payload;
    const isEditing = editingPayload && editingPayload.isEditing;

    const editFormHandler = () =>{ 
        setIsEditUserForm(!isEditUserForm)
    }

    const deleteHandler = async () =>{
        try {
            const documentId = documents && documents._id || ""
            alert("delete" + documentId);
            const response = await axios.delete(`${baseUrl}/users/one/${documentId}`, {withCredentials: true})
            const {data} = response as any;
            const deletedCount = response && data.deletedCount;
            alert("deletedCount " + deletedCount);
            const reduxState = undefined;
            dispatch(usersAction(reduxState) as unknown as AnyAction);
            dispatch(cacheAction(reduxState) as unknown as AnyAction);
        } catch(error:any) { 
            const {message, response} = error;
            const data = response && response.data;
            const messageServer = data && data.message;
            setErrorMessage(`${message}. ${messageServer}`);
            setOpenSnackBar(!openSnackBar)
        }
    }

    return (
        <>
            <div className="app-profile-card" >
                <div className="app-profile-card-img-div" onClick={isEditing ? editFormHandler : ()=> null}>
                    <img className="app-profile-card-img" src="/user.png"/>
                </div>
                <div className="app-profile-card-info" onClick={isEditing ? editFormHandler : ()=> null}>
                    <p className="app-profil-card-text">{profileUsername}</p>
                </div>
                {
                    isEditing ? 
                    <div className="app-profile-card-span profile-card-span-loading">
                        <div className="profile-card-span-delete" onClick={deleteHandler}>
                            <p className="app-profil-card-btn-text">DELETE</p>
                        </div>
                    </div> : null
                }
                
            </div>
            {isEditUserForm ?<><EditUserForm cb={()=>setIsEditUserForm(!isEditUserForm)} documents={documents}/></> : null }
            {openSnackBar ? 
                <SnackBarMui openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} message={errorMessage}/>
             : null
            }
        </>
    )
};

export default ProfileCard