import {ActionReducerMap} from '@ngrx/store';
import * as  fromControlReducer from './controlReducer';


export interface State {
  control: fromControlReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  control: fromControlReducer.reducer
};
