// parcel bundler will see html script and convert the index.ts to js automatically
// before accessing the html in browser
// go to terminal and type parcel index.html

import { User } from './User';

const user = new User();
console.log(user);
