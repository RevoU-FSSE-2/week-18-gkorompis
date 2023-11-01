import { useState } from "react";
import "./index.css";
import { useDispatch, useSelector} from "react-redux";
import { cacheAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";

const SearchBar = ({searchData, cacheName}:any) =>{

    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const cacheState = useSelector((state:any)=> state.cache);
    const payload = cacheState && cacheState.payload;
    

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
        const newField:any = {};
        newField[cacheName] = results;

        const newCache = {...payload, ...newField};
        console.log("newCache", newCache);

        
        dispatch( cacheAction(newCache) as unknown as AnyAction)
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