import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import
{
	MatIconModule,
	MatButtonModule,
	MatGridListModule
} from '@angular/material';

import { routes } from './portfolio.routes';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioReducer, PortfolioEffects } from './portfolio.store';

@NgModule( {
	declarations: [
		PortfolioComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		RouterModule.forChild( routes ),
		StoreModule.forFeature( 'portfolioState', PortfolioReducer ),
		EffectsModule.forFeature( [ PortfolioEffects ] )
	],
	exports: [
		PortfolioComponent
	]
} )
export class PortfolioModule { }
