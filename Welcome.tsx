//FUNCTINAL COMPONENTS- {EXAMPLE}
import React from 'react';

interface IProps{  // COMPONENT RENDERING WITH PROPS
    name: string;
    age: number;
}
const Welcome: React.FC<IProps> = ({name,age}) =>{
  return(
    <div className="container">
        <h2>Hello, {name}</h2>
        {/*Rendering*/}
        age && <p>You are {age} Years old</p> 

    </div>
  )
}
export default Welcome;
