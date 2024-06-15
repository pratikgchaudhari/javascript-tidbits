let person = {name: 'Harry Potter'};

console.log(`person has name: ${person.hasOwnProperty('name')}`);
console.log(`person has hasOwnProperty(): ${'hasOwnProperty' in person}`);

let newPerson = Object.create(null);
newPerson.name = 'Harry Potter';

try {
    console.log(`newPerson has name: ${newPerson.hasOwnProperty('name')}`);
} catch (e) {
    let message = `${e.name}: ${e.message}`;
    addSeparator(message);
    console.error(`${e.name}: ${e.message}`);
    addSeparator(message);
}

console.log(`newPerson has name: ${Object.hasOwn(newPerson, 'name')}`);
console.log(`newPerson has hasOwnProperty(): ${'hasOwnProperty' in newPerson}`);

function addSeparator(s) {
    console.log('-'.repeat(s.length));
}