const SET_PAGE = "pagination/SET_PAGE"
const GET_PAGE = "pagination/GET_PAGE"

export const setPage = (pageNumber) => ({
    type:SET_PAGE,
    pageNumber
})

const getPage = (pageNumber) => ({
    type:GET_PAGE,
})

const initialState = 1

export default function pagination(state=initialState,action) {
    switch(action.type) {
        case SET_PAGE:
            console.log(action.pageNumber)
            return action.pageNumber
        default:
            return state
    }
}