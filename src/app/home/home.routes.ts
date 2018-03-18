import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'portfolio', pathMatch: 'full' },
	{ path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' }
]
