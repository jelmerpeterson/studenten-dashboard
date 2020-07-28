import React from "react";

import { Link } from "react-router-dom";


function StudentView(props) {
    
    const data = props.getAllNames();
    const nameList = data.map((item) => {
        return (
            <li>
                <Link to={`/studentview/${item.name}`}><button className="btn-li">{item.name}</button></Link>
            </li>
        )
    })

    
 
    return (
    <div className="student-list-div">
        <ul className="student-list">
            {nameList}  
         </ul> 
    
    </div>
    
  )
}

export default StudentView;
