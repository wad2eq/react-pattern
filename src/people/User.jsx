import React from "react";  

export const User = ({dataUser = {} }) =>{
    console.log("User", dataUser);
    if(dataUser){
        return (
            <>
                <div>{dataUser.name} has {dataUser.age}</div>
            </>
        )
    }
    return <div> The user with id {dataUser.id} nor exists </div>;

}