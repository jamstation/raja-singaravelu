import { NgModule } from '@angular/core';
import { SidenavModule } from './sidenav';
import { ToolbarModule } from './toolbar';
import { HomeModule } from '../../home';
import { LayoutComponent } from './layout.component';

@NgModule( {
	declarations: [
		LayoutComponent
	],
	imports: [
		SidenavModule,
		ToolbarModule,
		HomeModule
	],
	exports: [
		LayoutComponent
	]
} )
export class LayoutModule { }
