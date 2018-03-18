import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { DatabaseService } from "../database.service";
import { LayoutActionTypes, LayoutActions } from "./layout.actions";

@Injectable()
export class LayoutEffects
{
	@Effect() public getMetadata$: Observable<Action>;

	constructor ( private actions$: Actions, private db: DatabaseService )
	{

		this.getMetadata$ = this.actions$.pipe(
			ofType<LayoutActions.GetMetadata>( LayoutActionTypes.getMetadata ),
			map( action => this.db.getLayoutMetadata() ),
			map( metadata => new LayoutActions.GetMetadataSuccess( metadata ) ) );

	}
}
