import { PortfolioState } from './portfolio.state';
import { PortfolioActionTypes, PortfolioActions } from './portfolio.actions';

const initialState: PortfolioState = {
	processing: false,
	list: [],
	selectedItem: null
}

export function PortfolioReducer ( state = initialState, action: PortfolioActions.All ): PortfolioState
{
	switch ( action.type ) {

		case PortfolioActionTypes.load:
			return {
				...state,
				processing: true
			};

		case PortfolioActionTypes.loaded:
			return {
				...state,
				processing: false,
				list: action.list
			};

		case PortfolioActionTypes.select:
			return {
				...state,
				selectedItem: action.key
			};

		default:
			return state;
	}
}
