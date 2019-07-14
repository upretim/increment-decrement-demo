import React, {Component} from 'react';
import Button from './../components/Button/Button';
import {connect} from 'react-redux';


const layout  = (props)=> {
        return(
            <> 
            <div style={
                {
                    marginTop:'50px'
                }
            }>
                Number is : {props.currantCount}
            </div>
            <Button click={props.increment}>Increment</Button>
            <Button click={props.decrement}>Decrement</Button>
            </>
        )
}

const mapStateToProps = (state) => {
    return {
        currantCount: state.currantCount
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { dispatch({type:'INCREMENT', payload: {}})},
        decrement: () => { dispatch({type:'DECREMENT', payload:{}})}
    };
  };

export default connect(mapStateToProps,mapDispatchToProps, null)(layout);