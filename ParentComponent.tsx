//COMPONENTS IN COMPONENTS -{EXAMPLE
import React from 'react';
import ChildComponent from './ChildComponent'

const ParentComponent:React.FC=()=>{
    return(
        <>
        <div>
            <h1>Welcome</h1>
            <ChildComponent message="Hello from the Child"/>
        </div>
        </>
    )
}

export default ParentComponent;