//PROPS IN CONSTRUCTOR-{EXAMPLE}
import React, { Component } from 'react';

interface IProps{
    title: string;
    count: number;
}

class Greeting extends  Component<IProps>{
    constructor(props: IProps){
        super(props);
    console.log('props is constructor: ', props);
    }
   
    
    render(){
     return(
    <div>
        <h1>{this.props.title}</h1>
        <p>Count: {this.props.count}</p>
    </div>
     )
    }
}

export default Greeting;