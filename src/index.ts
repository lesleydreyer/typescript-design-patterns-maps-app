// parcel bundler will see html script and convert the index.ts to js automatically
// before accessing the html in browser
// go to terminal and type parcel index.html

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
