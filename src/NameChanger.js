import React from "react";
import { useState } from "react";

function NameChanger(){
    const [name,setName] = useState("python")
    const ChangerName = ()=> setName("java")
    return(
        <div>
            <h2>Name: {name} </h2>
            <button onClick={ChangeName}>Change Name</button>
        </div>
    )
}
export default NameChanger;