// export const initState{
//     count: 100
// };

// export const Reducer=(state=initState,action)=>{
//     switch(action.type){
//         case "INCRE":
//             return{
//                 count: state.count+1
//             }
//             break;
//             case "DECRE":
//                 return{
//                     count:state.count-1
//                 }
//                 default:
//                     return state;
//     }
// };

import {reducer} from 'redux-form';
import { combineReducers } from 'redux';
export const Reducer=combineReducers({
    form: reducer
});