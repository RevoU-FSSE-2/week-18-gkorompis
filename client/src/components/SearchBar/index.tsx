import { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { cacheAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

const SearchBar = ({searchData}:any) =>{

    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();


    const handleSearch = (data:never[]) => {

        console.log('>>>data', data)
        const results = data.filter((item:any) => {
        for (const key in item) {
            if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText.toLowerCase())) {
            return true;
            }
        }
            return false;
        });
        const caches = {
            jobsCache: results
        }
        dispatch( cacheAction(caches) as unknown as AnyAction)
    };

    const handleEnter = (e:any) =>{
        // console.log(">>>",e.key)
        if(e.key==='Enter'){
           handleSearch(searchData)
        }
    }
    return (
        <>
            <div className="app-search-bar">
                <div className="app-search-bar-form-item">
                    <p className="app-search-bar-fieldname"></p>
                    <input 
                    className="app-search-bar-field" 
                    type="text" 
                    placeholder="Search..."
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleEnter} 
                    />
                    <button className="app-search-bar-btn" type="submit" onClick={()=>handleSearch(searchData)}>Search</button>
                </div>
                
            </div>
        </>
    )
};

export default SearchBar