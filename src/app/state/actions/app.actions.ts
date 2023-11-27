import { createAction, props } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";

export const loadApp = createAction(
    '[App] App data updated',
    props<{ data: AppState }>()
)