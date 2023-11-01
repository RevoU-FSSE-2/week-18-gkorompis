


import { AnyAction } from "@reduxjs/toolkit";
import { cacheAction, usersAction } from "../../actions";
import "./index.css"
import { useSelector, useDispatch} from "react-redux";
import axios from 'axios'
import { useState } from "react";
import { EditUserForm } from "..";


const ProfileCard = ({documents}:any) =>{
    const profileUsername = documents && documents.username
    console.log("profile card", documents)

    const dispatch = useDispatch()

    const baseUrl = "http://localhost:5002"

    const [isEditUserForm, setIsEditUserForm] =  useState(false);
    console.log(">>isEditUserForm" , isEditUserForm)
    const editingState = useSelector((state:any)=> state.editing);
    const editingPayload = editingState && editingState.payload;
    const isEditing = editingPayload && editingPayload.isEditing;

    const editFormHandler = () =>{
        console.log("editForm is Clicked")
        setIsEditUserForm(!isEditUserForm)
    }

    const deleteHandler = async () =>{
        const documentId = documents && documents._id || ""
        alert("delete" + documentId);
        const response = await axios.delete(`${baseUrl}/users/one/${documentId}`)
        const {data} = response as any;
        const deletedCount = response && data.deletedCount;
        alert("deletedCount " + deletedCount);
        const reduxState = undefined;
        dispatch(usersAction(reduxState) as unknown as AnyAction);
        dispatch(cacheAction(reduxState) as unknown as AnyAction);
    }

    return (
        <>
            <div className="app-profile-card" onClick={isEditing ? editFormHandler : ()=> null}>
                <div>
                    <img className="app-profile-card-img" src="/user.png"/>
                </div>
                <div className="app-profile-card-info" onClick={
                    isEditing ? ()=>null : ()=>null 
                }>
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
        </>
    )
};

export default ProfileCard