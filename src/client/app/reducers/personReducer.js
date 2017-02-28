import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

const initialState = {
  userData: {},
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function personReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        userData: {},
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userData: action.userData,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
