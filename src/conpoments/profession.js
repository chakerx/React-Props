import React from "react";
function Profession(props) {
    
    return ( 
    <div >
        <p>{props.fullname}</p>
        <div>{props.children}</div>
        <p >{props.profession}</p>
        <button className="btn btn-warning" onClick={()=>{props.handle(props.fullname)}}> User </button>
    </div>);
}

export default Profession;