import { NavItem } from "./sidenav";

export interface LayoutState
{
	processing: boolean;
	toolbarTitle: string;
	logoUrl: string;
	navList: NavItem[];
	selectedNavItem: NavItem;
	sidebarToggled: boolean;
}
