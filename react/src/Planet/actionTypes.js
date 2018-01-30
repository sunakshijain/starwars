import keyMirror from 'key-mirror';
const actionTypes = keyMirror({
    FETCH_PLANET_REQUEST: null,
    FETCH_PLANET_SUCCESS: null,
    FETCH_PLANET_FAILURE: null,
    SEARCH_PLANET_REQUEST: null,
    SEARCH_PLANET_SUCCESS: null,
    SEARCH_PLANET_FAILURE: null,
    FETCH_NEXT_PLANET_REQUEST: null,
    FETCH_NEXT_PLANET_SUCCESS: null,
    FETCH_NEXT_PLANET_FAILURE: null,
    FETCH_PREV_PLANET_REQUEST: null,
    FETCH_PREV_PLANET_SUCCESS: null,
    FETCH_PREV_PLANET_FAILURE: null
});

export default actionTypes