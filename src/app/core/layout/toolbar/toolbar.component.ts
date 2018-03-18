import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppModuleState } from '../../../app.store';
import { LayoutActions } from '../layout.actions';

@Component( {
	selector: 'app-core-layout-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: [ './toolbar.component.css' ]
} )
export class ToolbarComponent
{

	private toolbarTitle: Observable<string>;

	constructor ( private store: Store<AppModuleState> )
	{
		this.toolbarTitle = this.store.pipe(
			select( state => state.layoutState.toolbarTitle ) );
	}

	private menuClick (): void
	{
		this.store.dispatch( new LayoutActions.ToggleSidebar() );
	}

}
