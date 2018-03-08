import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from '../actions/types';

const initialState = {
    people: [],
    errorMessage: '',
    isFetching: false
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, isFetching: true };
        case FETCH_SUCCESS:
            return { ...state, isFetching: false, people: action.payload };
        case FETCH_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
};

export default peopleReducer;
