const initialState = {
    currantCount: 12
}
const counterReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case 'INCREMENT':
            newState.currantCount = ++state.currantCount;
            break;
        case 'DECREMENT':
            newState.currantCount = ++state.currantCount;
            break;
        default:
            break;
    }
  return newState;
}

export default counterReducer;