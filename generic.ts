onload = () => {
    document.body.innerHTML = "Generic";
};



// function identity<T>(arg: T): T {
//     return arg;
// }

// console.log(identity<string>("generic"));
// console.log(identity<number>(1));
// console.log(identity("generic"));
// console.log(identity(1));

// // let myIdentity: <T>(arg: T) => T = identity;
// // let myIdentity: <U>(arg: U) => U = identity;
// let myIdentity: { <T>(arg: T): T } = identity;



// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn = identity;


// interface GenericIdentityFn<T> {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;



// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) { return x + y; };

// console.log(myGenericNumber.add(1, 2));
// console.log(myGenericNumber.add(3, 4));

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
// console.log(stringNumeric.add("tt", "aa"));



// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }

// // loggingIdentity(1);
// loggingIdentity("1");
// // loggingIdentity({ a: 1, b: 2 });
// loggingIdentity({ a: 1, b: 2, length: 3 });



// function getProperty<T>(obj: T, key: keyof T) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.



// function create<T>(c: { new(): T; }): T {
//     return new c();
// }

// class A {
//     constructor() { }
// }

// console.log(create(A));



// class BeeKeeper {
//     hasMask: boolean;
// }

// class ZooKeeper {
//     nametag: string;
// }

// class Animal {
//     numLegs: number;
// }

// class Bee extends Animal {
//     keeper: BeeKeeper;
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: { new(): A }): A {
//     return new c();
// }

// createInstance(Bee).keeper.hasMask;
// createInstance(Lion).keeper.nametag;
