import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { map, skip } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppModuleState } from '../../../app.store';
import { SubscriptionManager } from '../../subscription-manager.service';
import { NavItem } from './nav-item.model';
import { LayoutActions } from '../layout.actions';

@Component( {
	selector: 'app-core-layout-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: [ './sidenav.component.css' ]
} )
export class SidenavComponent implements OnInit, OnDestroy
{
	@ViewChild( 'sidenav' ) sidenav: MatSidenav;
	private logoUrl: Observable<string>;
	private navList: Observable<NavItem[]>;
	private sidebarToggled: Observable<any>;
	private subscriptionToken: number;

	constructor ( private store: Store<AppModuleState>, private subcriptionManager: SubscriptionManager )
	{
		this.logoUrl = this.store.pipe(
			select( state => state.layoutState.logoUrl ),
			map( logoUrl => logoUrl ? 'url(' + logoUrl + ')' : '' ) );
		this.navList = this.store.pipe(
			select( state => state.layoutState.navList )
		);
		this.sidebarToggled = this.store.pipe(
			select( state => state.layoutState.sidebarToggled ),
			// skip( 1 ),
			map( sidebarToggled => this.sidenav.toggle() ) );

		this.store.dispatch( new LayoutActions.SelectNavItem() );

	}

	ngOnInit (): void
	{
		this.subscriptionToken = this.subcriptionManager.subscribe( [ this.sidebarToggled ] );
	}

	ngOnDestroy (): void
	{
		this.subcriptionManager.unsubscribeAll( this.subscriptionToken );
	}

	private select ( navItem: NavItem ): void
	{
		this.store.dispatch( new LayoutActions.SelectNavItem( navItem ) );
	}

}
