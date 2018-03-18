import { AppModuleState } from "../../app.store";

export interface PortfolioModuleState extends AppModuleState
{
	portfolioState: PortfolioState
}

export interface PortfolioState
{
	processing: boolean;
	list: string[];
	selectedItem: string;
}
