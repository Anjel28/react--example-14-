import React from 'react';

//LISTS OF OBJECT RENDERING 
interface task{
    id: number,
    title: string,
    completed: boolean,
}
const Drinks: React.FC = ()=>{
    const tasks: task[]=[
        //key
        {id: 1, title: 'learn React', completed: false},
        {id: 2, title: 'Pratice typescript', completed: true},

    ]
    //LIST - RENDERING OF LIST
    //const myArray: string[] = ['Water', 'Orange Juice', 'Milk'];
 return(
    <div>
        {/*condition*/}
        <ul>
            {tasks.map(task => (
                <li key = {task.id}>
                    {task.title} {task.completed? 'right': 'wrong'}
                </li>
            ))}
        </ul>
   {/* <ul>
      {myArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>*/}
    </div>
 )
}

export default Drinks;