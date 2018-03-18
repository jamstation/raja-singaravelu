import { Action } from '@ngrx/store';
import { NavItem } from './sidenav';

export const enum LayoutActionTypes
{
	getMetadata = '[Layout] get metadata',
	getMetadataSuccess = '[Layout] get metadata success',
	selectNavItem = '[Layout] select nav item',
	toggleSidebar = '[Layout] toggle sidebar'
}

export namespace LayoutActions
{
	export class GetMetadata implements Action
	{
		public readonly type = LayoutActionTypes.getMetadata;
		constructor () { }
	}

	export class GetMetadataSuccess implements Action
	{
		public readonly type = LayoutActionTypes.getMetadataSuccess;
		constructor ( public metadata: any ) { }
	}

	export class SelectNavItem implements Action
	{
		public readonly type = LayoutActionTypes.selectNavItem;
		constructor ( public navItem?: NavItem ) { }
	}

	export class ToggleSidebar implements Action
	{
		public readonly type = LayoutActionTypes.toggleSidebar;
		constructor () { }
	}

	export type All
		= GetMetadata
		| GetMetadataSuccess
		| SelectNavItem
		| ToggleSidebar;
}
