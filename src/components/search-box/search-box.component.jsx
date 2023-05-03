import React from 'react';
import "./search-box.styles.css"


export const SearchBox=({placeholder, handelChange})=> {
    return <input className="search-box" type="search" placeholder={placeholder} onChange={handelChange}/>


}