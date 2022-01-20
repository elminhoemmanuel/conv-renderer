import {  SET_CHILDREN, TEST } from "../types";

const initialState = {
  children:{},
  modalData:{}
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHILDREN:
        let modal 
        let given = action.payload
        // console.log(given);
        
        for (let [key, value] of Object.entries(given)) {
            console.log(given[key].Content.type)
            
            if (given[key].Content.type === 'ModalComponent') {
                console.log(value)
                modal = value
                console.log(modal);
            }
        }
      return {
        ...state,
        children: action.payload,
        modalData:modal
      };
    default:
      return state;
  }
};