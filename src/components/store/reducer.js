const  insitialState = {count : 0};

const counterReducer = (state = insitialState , action) =>{
switch (action.type) {
 case 'INCREMENT': return {count : state.count+1};
 case 'DECEREMENT':return {count : state.count-1}
 default :return state;
}
}
export default counterReducer;