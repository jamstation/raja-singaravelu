import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class SubscriptionManager
{

	private subscriptions: { token: number, value: Subscription }[];

	constructor ()
	{
		this.subscriptions = [];
	}

	public subscribe ( observables: Observable<any>[], token?: number ): number
	{
		token = token || this.generateToken();
		console.log( 'subscribed for token:', token );
		const newSubscriptions = observables
			.map( observable => observable.subscribe() )
			.map( subscription => ( { token: token, value: subscription } ) );
		this.subscriptions.push( ...newSubscriptions );
		return token;
	}

	public unsubscribeAll ( token: number ): void
	{
		console.log( 'unsubscribe all for token:', token );
		this.subscriptions.filter( subscription => subscription.token != token );
	}

	private generateToken ( count: number = 0 ): number
	{
		try {
			if ( count > 10000 ) throw 'generate subscription token error';
			const token = Math.floor( Math.random() * 10000 ) + 1;
			return this.subscriptions.find( subscription => subscription.token == token )
				? this.generateToken( count + 1 )
				: token;
		} catch ( error ) {
			console.log( error );
		}
	}
}
