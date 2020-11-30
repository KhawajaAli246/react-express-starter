import {
    SET_USER
} from "../actions/types";


const initialState = {
    FirstName:"",
    LastName:"",
    Email:"",
    Password:""

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:{ 
            return {
                ...state,                                                                                                                                                                                                                                                                                                                                                         
            [action.payload.name]:action.payload.value  
            }                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }

        default:
            return state;
    }
};