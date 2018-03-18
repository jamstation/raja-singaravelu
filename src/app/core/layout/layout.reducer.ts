import { LayoutState } from './layout.state';
import { LayoutActionTypes, LayoutActions } from './layout.actions';

const initialState: LayoutState = {
	processing: false,
	toolbarTitle: null,
	logoUrl: null,
	navList: [],
	selectedNavItem: null,
	sidebarToggled: false
}

export function LayoutReducer ( state = initialState, action: LayoutActions.All ): LayoutState
{
	switch ( action.type ) {

		case LayoutActionTypes.getMetadata:
			return {
				...state,
				processing: true
			};

		case LayoutActionTypes.getMetadataSuccess:
			return {
				...state,
				processing: false,
				toolbarTitle: action.metadata.toolbarTitle,
				logoUrl: action.metadata.logoUrl,
				navList: action.metadata.navList
			};

		case LayoutActionTypes.selectNavItem:
			return {
				...state,
				selectedNavItem: action.navItem || state.navList[ 0 ] || null
			};

		case LayoutActionTypes.toggleSidebar:
			return {
				...state,
				sidebarToggled: !state.sidebarToggled
			};

		default:
			return state;
	}
}
