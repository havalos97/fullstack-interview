import {
  FETCH_KEANU_REQUEST,
  FETCH_KEANU_SUCCESS,
  FETCH_KEANU_FAILURE,
} from "./actionTypes";

export interface IKeanuState {
  loading: boolean;
  keanuUrl: string;
  error: string | null;
}

export interface IFetchKeanuSuccessPayload {
  url: string;
}

export interface IFetchKeanuFailurePayload {
  error: string;
}

export interface IFetchKeanuRequestPayload {
  width: number;
  height: number;
  young: boolean;
  grayscale: boolean;
}

export interface IFetchKeanuRequest {
  type: typeof FETCH_KEANU_REQUEST;
  payload: IFetchKeanuRequestPayload;
}

export interface IFetchKeanuSuccess {
  type: typeof FETCH_KEANU_SUCCESS;
  payload: IFetchKeanuSuccessPayload;
};

export interface IFetchKeanuFailure {
  type: typeof FETCH_KEANU_FAILURE;
  payload: IFetchKeanuFailurePayload;
};

export interface IGraphQLResponse {
  data: {
    image: string
  }
}

export type KeanuActions =
  | IFetchKeanuRequest
  | IFetchKeanuSuccess
  | IFetchKeanuFailure;