// parcel bundler will see html script and convert the index.ts to js automatically
// before accessing the html in browser
// go to terminal and type parcel index.html

import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

new google.maps.Map(document.getElementById('map'), {
	zoom: 1,
	center: {
		lat: 0,
		lng: 0
	}
});
