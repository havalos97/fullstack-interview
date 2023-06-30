import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { call, put } from "redux-saga/effects";

import { fetchKeanuFailure, fetchKeanuSuccess } from "./actions";
import { IFetchKeanuRequest, IFetchKeanuRequestPayload, IGraphQLResponse } from './types';

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const getKeanu = async (
  fetchKeanuRequestPayload: IFetchKeanuRequestPayload
) => {
  return client.query({
    query: gql`
    query GetKeanuImage(
      $width: Int!
      $height: Int!
      $young: Boolean!
      $grayscale: Boolean!
    ) {
      image(width: $width, height: $height, young: $young, grayscale: $grayscale)
    }
    `,
    variables: fetchKeanuRequestPayload,
  });
}

function* keanuSaga(action: IFetchKeanuRequest) {
  const { payload } = action;

  try {
    const response: IGraphQLResponse = yield call(getKeanu, payload);
    yield put(
      fetchKeanuSuccess({
        url: response.data.image,
      })
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(
        fetchKeanuFailure({
          error: error.message,
        })
      );
    }
    console.error('Unexpected error:', error);
  }
}

export default keanuSaga;