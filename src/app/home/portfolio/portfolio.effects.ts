import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { DatabaseService } from "../../core/database.service";
import { PortfolioActionTypes, PortfolioActions } from "./portfolio.actions";

@Injectable()
export class PortfolioEffects
{
	@Effect() public load$: Observable<Action>;

	constructor ( private actions$: Actions, private db: DatabaseService )
	{

		this.load$ = this.actions$.pipe(
			ofType<PortfolioActions.Load>( PortfolioActionTypes.load ),
			map( action => this.db.getPortfolio() ),
			map( metadata => new PortfolioActions.Loaded( metadata ) ) );

	}
}
