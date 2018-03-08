import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from './types';

export const fetchRequest = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = json => ({ 
    type: FETCH_SUCCESS,
    payload: json
});
export const fetchError = error => ({
    type: FETCH_ERROR,
    payload: error
});

export const fetchPeople = () => async dispatch => {
    dispatch(fetchRequest());
    try {
        const response = await fetch('https://randomuser.me/api/?results=15');
        const json = await response.json();
        dispatch(fetchSuccess(json.results));
    } catch (error) {
        dispatch(fetchError(error));
    }
};
