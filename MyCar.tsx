//REACT PROPS EXAMPLE IN FUNCTION COMPONENTS
import React from 'react';
import Card from './Card'

interface IProps{
    name: string,
    age: number,
}

const MyCar: React.FC<IProps>=({name,age})=>{
    return(
        <div className="container m-3 p-2">
            <div className="card mt-3">
             <h1>Hello, Name= {name}, Age={age}</h1>
             <Card title ="Welcome">
                <p>This is inside the card</p>
             </Card>
        </div>
        </div>
    )
}

export default MyCar;