// function hello(hero) {
//     console.log(hero);
// }

// var hero1 = 'hero1';
// var hero2 = '1';

// hello(hero1);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}


// class Student {
//     fullName: string;

//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
//     }
// }

let user = { firstName: 'ban', lastName: 'yue', triggerName: 'guess' };
// let user = new Student('ban', 'middle', 'yue');

document.body.innerHTML = greeter(user);