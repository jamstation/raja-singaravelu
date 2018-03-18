import { ActionReducerMap } from "@ngrx/store";

import { LayoutState, LayoutReducer, LayoutEffects } from './core/layout';

/**
 * All States
 */

export interface AppModuleState
{
	layoutState: LayoutState;
}

/**
 * All Reducers
 */


export const appReducers: ActionReducerMap<AppModuleState> = {
	layoutState: LayoutReducer,
}

/**
 * All Effects
 */

export const appEffects = [
	LayoutEffects
]
