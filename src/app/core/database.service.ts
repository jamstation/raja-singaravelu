import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService
{
	constructor ()
	{
	}

	public getLayoutMetadata (): any
	{
		return {
			toolbarTitle: 'Raja Sigaravelu Photography',
			logoUrl: "http://rajasingaravelu.com/wp-content/uploads/2017/07/cropped-cropped-raja-site-identity-1-1.jpg",
			navList: [
				{ text: 'cities' },
				{ text: 'nature' },
				{ text: 'landscape' },
				{ text: 'scenery' },
				{ text: 'potrait' }
			]
		};
	}

	public getPortfolio (): string[]
	{
		return [
			'http://rajasingaravelu.com/wp-content/uploads/2017/08/1.Skyroof.jpg',
			'http://rajasingaravelu.com/wp-content/uploads/2017/08/2.Town-hallbrussels-Belgium.jpg'
		];
	}

}
