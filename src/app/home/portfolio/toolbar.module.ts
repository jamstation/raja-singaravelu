import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import
{
	MatIconModule,
	MatButtonModule
} from '@angular/material';
import { PortfolioComponent } from './portfolio.component';

@NgModule( {
	declarations: [
		PortfolioComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [
		PortfolioComponent
	]
} )
export class PortfolioModule { }
