import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppModuleState } from '../app.store';
import { LayoutActions } from './layout';

@Component( {
	selector: 'app-core',
	template: '<app-core-layout></app-core-layout>'
} )
export class CoreComponent
{
	constructor ( private store: Store<AppModuleState> )
	{
		this.store.dispatch( new LayoutActions.GetMetadata() );
	}
}
