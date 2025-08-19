//CREATING THE STATE OBJECT-{EXAMPLE}
import React, { Component } from 'react';

interface IState{
    count: number;
    message:string;
}

class MyBox extends Component<{}, IState>{
    constructor(props: {}){
        super(props);
        this.state ={
            count: 0,
            message: 'Hello World',
        }
    }
     changeString = () => {
    this.setState({ message: "Gopal" });
  };
  changeNumber = () => {
    this.setState({ count: 10 });
  };

    render(){

      
        return(
            <div>
                {/*Using State Object*/}
                <p>{this.state.message}</p>
                <p>count: {this.state.count}</p>
                {/*Change State Object*/}
                <button type="button" onClick={this.changeString} >
                   ChangeName
                </button>
                 <button type="button" onClick={this.changeNumber} >
                   ChangeNumber
                </button>
            </div>
        )
    }
}

export default MyBox;
