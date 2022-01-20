import { SET_CHILDREN } from "../types"

//actions
export const setChildren = (val) => (dispatch) => {
    dispatch({ type: SET_CHILDREN, payload:val })
}
