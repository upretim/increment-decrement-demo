import React, {Component} from 'react';
import Button from './../components/Button/Button';

class Layout extends Component {
    constructor(props){
        super(props)

        this.state = {
            currantCount: 0,
            disabledInc: false,
            disabledDec: false
        }
    }

    

    increment = ()=>{
       this.setState((prevState)=>({
        currantCount: prevState.currantCount + 1
       }))
    }
    decrement = ()=>{
        this.setState((prevState)=>({
            currantCount: prevState.currantCount - 1
        }))
    }
  
    render(){
        return(
            <> 
            <div style={
                {
                    marginTop:'50px'
                }
            }>
                Number is : {this.state.currantCount}
            </div>
            <Button click={this.increment} isDisabled={this.state.disabledInc}>Increment</Button>
            <Button click={this.decrement} isDisabled={this.state.disabledDec}>Decrement</Button>
            </>
        )
    }
}

export default Layout;