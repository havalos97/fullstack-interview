import {
  FETCH_KEANU_REQUEST,
  FETCH_KEANU_SUCCESS,
  FETCH_KEANU_FAILURE,
} from "./actionTypes";

import { KeanuActions, IKeanuState } from "./types";

const initialState: IKeanuState = {
  loading: false,
  keanuUrl: '',
  error: null,
};

const reducer = (state = initialState, action: KeanuActions) => {
  switch (action.type) {
    case FETCH_KEANU_REQUEST:
      return {
        ...state,
        loading: true,
        payload: action.payload
      };
    case FETCH_KEANU_SUCCESS:
      return {
        ...state,
        loading: false,
        keanuUrl: action.payload.url,
        error: null,
      };
    case FETCH_KEANU_FAILURE:
      return {
        ...state,
        loading: false,
        keanuUrl: '',
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;