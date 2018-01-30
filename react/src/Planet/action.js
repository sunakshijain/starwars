import { fetchPlanets } from './service.js'
import actionType from './actionTypes'
async function fetchPlanetsData(state) {
    const { planet: { currentPage, searchTerm } } = state;
    const planetsData = await fetchPlanets(currentPage, searchTerm);
    const { results, count } = planetsData.data;
    return {
        type: actionType.FETCH_PLANET_SUCCESS,
        payload: { results, count }
    }
}
export function fetchPlanetsList(searchTerm = '') {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_PLANET_REQUEST,
            payload: searchTerm
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_PLANET_FAILURE,
            })
        }
    }
}
export function fetchNextPlanetsList() {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_NEXT_PLANET_REQUEST
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_NEXT_PLANET_FAILURE,
            })
        }
    }
}
export function fetchPrevPlanetsList() {
    return async (dispatch, getState) => {
        dispatch({
            type: actionType.FETCH_PREV_PLANET_REQUEST
        })
        try {
            const results = await fetchPlanetsData(getState())
            dispatch(results)
        }
        catch (e) {
            return dispatch({
                type: actionType.FETCH_PREV_PLANET_FAILURE,
            })
        }
    }
}
