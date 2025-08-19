//LIFECYCLEBPHASES - {MOUNTING PHASE}
import React, {Component} from 'react';
//import {  } from 'react-router/dist/development/index-react-server-client-Bi_fx8qz';

interface IProps{
    initialCount: number;
    previousCount?: number;
}

interface IState{
    initialCount: number,
}      

class Counter extends Component<{}, IProps , IState>{
    //Constructor method
    constructor(props: IProps ){
        super(props);
        this.state = {initialCount: 12};
        
        
    }
    //Static method
    static getDerivedStateFromProps(props: IProps, state: IState): Partial<IState> | null {
    return props.initialCount !== state.initialCount ? {initialCount: props.initialCount!} : null;
}
//unmounting
componentWillUnmount(){
    console.log("component is  being removed");
}
//Updating - componentDidMount
componentDidMount(){
    setTimeout (() => {
        this.setState({initialCount: 10})
    },1000)
}
 componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevProps.initialCount !== this.state.initialCount) {
      console.log(`Count changed from ${prevProps.initialCount} to ${this.state.initialCount}`);
      this.setState({ previousCount: prevProps.initialCount});
    }
  }
    render(){
        return(
            <>
            <h1>{this.state.initialCount}</h1>
            </>
        )
    }
}


    export default Counter;
