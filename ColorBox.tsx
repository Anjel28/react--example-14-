//CONSTRUCTOR FUNCTION IN THE CLASS COMPONENTS AND ADD A COLOR PROPERTY
import React, {Component } from 'react';
 // Constructor props
type MyState ={
    color: string;
}
class ColorBox extends Component<{}, MyState> {
    constructor() {
    super({});
    this.state = {
      color: 'blue'
    }
    } 
  render(){
    const {color} = this.state;
    return(
        <>
        <div style={{backgroundColor: color, padding: '20px', color:'blue'}}>
        <h2>The Current Color is: {color}</h2>
        </div>
        </>
    )
  }
}

export default ColorBox;