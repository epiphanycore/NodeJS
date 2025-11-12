const info = require('./module') 
const age = require('./age');
const phone = require('./phone');
const email = require('./email');
const address = require('./address');
const pincode = require('./pincode');

console.log(`Hello, ${info('Sucharita')} Age - ${age(20)}`);
console.log(`Age - ${age(20)}`);
console.log(`Phone - ${phone(9874113368)}`);
console.log(`Email - ${email('sucharitabiswas10b.12@gmail.com')}`);
console.log(`Address - ${address('Kolkata, India')}`);
console.log(`Pincode - ${pincode(700094)}`);


