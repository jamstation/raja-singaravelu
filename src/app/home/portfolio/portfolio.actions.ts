import { Action } from '@ngrx/store';

export const enum PortfolioActionTypes
{
	load = '[Portfolio] load',
	loaded = '[Portfolio] loaded',
	select = '[Portfolio] select'
}

export namespace PortfolioActions
{
	export class Load implements Action
	{
		public readonly type = PortfolioActionTypes.load;
		constructor () { }
	}

	export class Loaded implements Action
	{
		public readonly type = PortfolioActionTypes.loaded;
		constructor ( public list: string[] ) { }
	}

	export class Select implements Action
	{
		public readonly type = PortfolioActionTypes.select;
		constructor ( public key: string ) { }
	}

	export type All
		= Load
		| Loaded
		| Select;
}
