import faker from 'faker';
// when you write Typescript you can make use of Javascript and JS libraries
// BUT TS wants to know about all the types of info given to functions and received from functions
// so you need a type definition file to act as an adapter for JS libraries to tell what TS what to do
// some libraries automatically come with a type definition (xxx.d.ts) file and some don't so if you get a error saying
// Could not find a declaration file for module 'faker' you probably need to install a separate package
// so you have to do npm install faker and also npm install @types/faker (look at npmjs.com for DefinitelyTyped)
export class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			// faker returns string instead of number so convert it to number
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}
}
