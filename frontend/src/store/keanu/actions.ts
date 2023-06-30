import {
  FETCH_KEANU_REQUEST,
  FETCH_KEANU_FAILURE,
  FETCH_KEANU_SUCCESS,
} from "./actionTypes";
import {
  IFetchKeanuRequest,
  IFetchKeanuSuccess,
  IFetchKeanuSuccessPayload,
  IFetchKeanuFailure,
  IFetchKeanuFailurePayload,
  IFetchKeanuRequestPayload,
} from "./types";

export const fetchKeanuRequest = (
  payload: IFetchKeanuRequestPayload
): IFetchKeanuRequest => ({
  type: FETCH_KEANU_REQUEST,
  payload,
});

export const fetchKeanuSuccess = (
  payload: IFetchKeanuSuccessPayload
): IFetchKeanuSuccess => ({
  type: FETCH_KEANU_SUCCESS,
  payload,
});

export const fetchKeanuFailure = (
  payload: IFetchKeanuFailurePayload
): IFetchKeanuFailure => ({
  type: FETCH_KEANU_FAILURE,
  payload,
});