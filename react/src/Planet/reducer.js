
import actionType from './actionTypes'
const _initialState = {
    isLoading: false,
    planetsData: [],
    currentPage: 0,
    count: 0,
    searchTerm: ''
}
const planet = (state = _initialState, { type, payload }) => {
    switch (type) {
        case actionType.FETCH_PLANET_REQUEST:
            return { ...state, showLoading: true, currentPage: 1, searchTerm: payload }
        case actionType.FETCH_PLANET_SUCCESS:
            return { ...state, showLoading: false, planetsData: payload.results, count: payload.count }
        case actionType.FETCH_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        case actionType.FETCH_NEXT_PLANET_REQUEST:
            return { ...state, showLoading: true, currentPage: state.currentPage + 1 }
        case actionType.FETCH_NEXT_PLANET_SUCCESS:
            return { ...state, showLoading: false, planetsData: payload.results, count: payload.count }
        case actionType.FETCH_NEXT_PLANET_FAILURE:
        case actionType.FETCH_PREV_PLANET_REQUEST:
            return { ...state, showLoading: true, currentPage: state.currentPage - 1 }
        case actionType.FETCH_PREV_PLANET_SUCCESS:
            return { ...state, showLoading: false, planetsData: payload.results, count: payload.count }
        case actionType.FETCH_PREV_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        case actionType.SEARCH_PLANET_REQUEST:
            return { ...state, showLoading: true }
        case actionType.SEARCH_PLANET_SUCCESS:
            return { ...state, showLoading: false, planetsData: payload.results, count: payload.count }
        case actionType.SEARCH_PLANET_FAILURE:
            return { ...state, showLoading: false, isError: true }
        default:
    }
    return state
}

export default planet