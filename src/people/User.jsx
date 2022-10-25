import React from "react";  

export const User = ({dataUser}) =>{
    console.log('dataUser');
    return (
        <>
            <div>{dataUser?.name}</div>
            <div>{dataUser?.age}</div>
        </> 
    )
}