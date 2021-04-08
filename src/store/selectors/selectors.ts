import { createSelector } from '@ngrx/store';

const selectOptions = (state) => {
  return state.selectedOption;
};

export const getSelectedOption = createSelector(
  selectOptions,
  (state: string) => state
);
