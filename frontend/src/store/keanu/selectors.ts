import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getLoading = (state: AppState) => state.keanu.loading;
const getKeanuImageUrl = (state: AppState) => state.keanu.keanuUrl;
const getError = (state: AppState) => state.keanu.error;

export const getKeanuSelector = createSelector(getKeanuImageUrl, (keanu) => keanu);
export const getLoadingSelector = createSelector(
  getLoading,
  (loading) => loading
);
export const getErrorSelector = createSelector(getError, (error) => error);