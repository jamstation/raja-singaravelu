import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { PortfolioActions } from './portfolio.actions';
import { PortfolioModuleState } from './portfolio.store';

@Component( {
	selector: 'app-home-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: [ './portfolio.component.css' ]
} )
export class PortfolioComponent
{

	private list$: Observable<any[]>;
	private title$: Observable<string>;

	constructor ( private store: Store<PortfolioModuleState> )
	{
		this.store.dispatch( new PortfolioActions.Load() );

		this.list$ = this.store.pipe(
			select( state => state.portfolioState.list ),
			map( list => list.map( ( item, i ) => ( {
				rowspan: i == 1 ? 2 : 1,
				url: 'url(' + item + ')'
			} ) ) )
		);

		this.title$ = this.store.pipe(
			select( state => state.layoutState.selectedNavItem ),
			map( navItem => navItem ? navItem.text : '' )
		);
	}

}
