import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { CoreModule } from './core';

import { routes } from './home/home.routes';
import { appReducers, appEffects } from './app.store';
import { AppComponent } from './app.component';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		StoreModule.forRoot( appReducers ),
		EffectsModule.forRoot( appEffects ),
		environment.production ? [] : StoreDevtoolsModule.instrument( { maxAge: 25 } ),
		CoreModule
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
