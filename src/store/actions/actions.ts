import { createAction, props } from '@ngrx/store';

export const changeType = createAction(
  '[ControlComponent] changeType',
  props<{payload: string }>()
);
