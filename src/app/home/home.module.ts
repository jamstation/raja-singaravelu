import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { routes } from './home.routes';

@NgModule( {
	declarations: [
		HomeComponent
	],
	imports: [
		RouterModule.forRoot( routes )
	],
	exports: [
		HomeComponent
	]
} )
export class HomeModule { }
