import * as ActionTypes from './ActionTypes';
// export const increaseAge = (text) =>{
//     return{
//         type: ActionTypes.INCREMENT,
//         payload: text
//     }};

// export const decreaseAge = (text) =>{
//     return{
//     type: ActionTypes.DECREMENT,
//     payload: text
// }};

export const loaddata = (text) => {
    return{
        type: ActionTypes.LOADDATA,
        payload: text
    }};

    export const displaydata = (data) => {
        return{
            type: ActionTypes.DISPLAYDATA,
            payload: data
        }};

        export const loading = ()=> (dispatch)=>{
        dispatch(loaddata('is loading...'));
        setTimeout(() => {
            dispatch(displaydata({name: 'van' , age: 18, description: }))
        }, timeout);
        }

        