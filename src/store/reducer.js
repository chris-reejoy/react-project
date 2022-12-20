const initialState = {count: 0}
const reducer = (state=initialState, action) => {
    if(action.type === 'increment') {
        return {
            count: state.count + 1
        }
    }
    else if(action.type === 'decrement') {
        return {
            count: state.count - 1
        }
    }
    return state
}
export default reducer