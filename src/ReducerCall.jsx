// const ReducerCall=(state,action)=>{
const ReducerCall=(count,action)=>{
    // if(action.type==="INC"){
    //     return (state=state+1);
    // }
    // if(action.type==="DEC"){
    //     let newNum=0;
    //     state >=1 ?(newNum=state-1) : (newNum=0);
    //     return newNum;
    // }
    // return state;
    //using switch case

    switch(action.type){
        case "INC":
            return (count+=1);
        case "DEC":
        let newNum=0;
        count >=1 ?(newNum=count-1) : (newNum=0);
        return newNum;
        default:
            return count;
    }
}
export default ReducerCall;