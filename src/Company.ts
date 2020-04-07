import faker from 'faker';

export class Company {
	// would probably do name in real world but use companyName here to differentiate from user for learning
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}
}
