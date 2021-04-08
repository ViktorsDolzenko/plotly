import {changeType} from '../actions/actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface State {
  selectedOption: string;
  selectedToggle: string;
  title: string;
  minValue: number;
  maxValue: number;
}

export const initialState: State = {
  selectedOption: 'box',
  selectedToggle: '',
  title: '',
  minValue: 0,
  maxValue: 0,
};


export const controlReducer = createReducer(
  initialState,

  on(changeType, (state, action) => ({
    ...state,
    selectedOption: action.payload
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return controlReducer(state, action);
}
