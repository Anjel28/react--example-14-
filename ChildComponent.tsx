import React from 'react';

interface IProps{
    message: string;
}

const ChildComponent:React.FC<IProps>=({message})=>{
    return(
        <p>{message}</p>
    )
}

export default ChildComponent;