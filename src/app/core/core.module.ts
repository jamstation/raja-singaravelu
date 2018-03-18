import { NgModule, ModuleWithProviders } from '@angular/core';
import { LayoutModule } from './layout';
import { HomeModule } from '../home';
import { DatabaseService } from './database.service';
import { SubscriptionManager } from './subscription-manager.service';
import { CoreComponent } from './core.component';

@NgModule( {
	declarations: [
		CoreComponent
	],
	imports: [
		LayoutModule,
		HomeModule
	],
	exports: [
		CoreComponent,
		LayoutModule,
		HomeModule
	],
	providers: [
		DatabaseService,
		SubscriptionManager
	]
} )
export class CoreModule { }
