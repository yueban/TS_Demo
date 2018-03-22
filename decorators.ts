// {
//     function f() {
//         console.log("f(): evaluated");
//         return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//             console.log("f(): called");
//         }
//     }

//     function g() {
//         console.log("g(): evaluated");
//         return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//             console.log("g(): called");
//         }
//     }

//     class C {
//         @f() @g() method() { }
//     }
// }



// {
//     function sealed(constructor: Function) {
//         Object.seal(constructor);
//         Object.seal(constructor.prototype);
//     }

//     @sealed
//     class Greeter {
//         greeting: string;
//         constructor(message: string) {
//             this.greeting = message;
//         }
//         greet() {
//             return "Hello, " + this.greeting;
//         }
//     }

//     console.log(new Greeter("1").greet());
// }



// {
//     function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
//         return class extends constructor {
//             newProperty = "new property";
//             hello = "override";
//         }
//     }

//     @classDecorator
//     class Greeter {
//         property = "property";
//         hello: string;
//         constructor(m: string) {
//             this.hello = m;
//         }
//     }

//     console.log(new Greeter("world"));
//     console.log(new Greeter("world").newProperty);
// }



// {
//     function enumerable(value: boolean) {
//         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//             descriptor.enumerable = value;
//             console.log(target);
//             console.log(propertyKey);
//             console.log(descriptor);
//         };
//     }

//     class Greeter {
//         greeting: string;
//         constructor(message: string) {
//             this.greeting = message;
//         }

//         @enumerable(false)
//         greet() {
//             return "Hello, " + this.greeting;
//         }
//     }
// }



// {
//     class Point {
//         private _x: number;
//         private _y: number;
//         constructor(x: number, y: number) {
//             this._x = x;
//             this._y = y;
//         }

//         @configurable(false)
//         get x() { return this._x; }

//         @configurable(false)
//         get y() { return this._y; }
//     }

//     function configurable(value: boolean) {
//         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//             descriptor.configurable = value;
//             console.log(target);
//             console.log(propertyKey);
//             console.log(descriptor);
//         };
//     }
// }


// import "./node_modules/reflect-metadata/Reflect";

// const formatMetadataKey = Symbol("format");

// function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
// }

// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// class Greeter {
//     @format("Hello, %s")
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         let formatString = getFormat(this, "greeting");
//         return formatString.replace("%s", this.greeting);
//     }
// }

// let greet = new Greeter("1");
// console.log(greet);
// console.log(greet.greet());



// import "./node_modules/reflect-metadata/Reflect";

// const requiredMetadataKey = Symbol("required");

// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//     let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//     existingRequiredParameters.push(parameterIndex);
//     Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }

// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//     let method = <Function>descriptor.value;
//     descriptor.value = function () {
//         let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//         if (requiredParameters) {
//             for (let parameterIndex of requiredParameters) {
//                 if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//                     throw new Error("Missing required argument.");
//                 }
//             }
//         }

//         return method.apply(this, arguments);
//     }
// }

// class Greeter {
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @validate
//     greet(@required name: string) {
//         return "Hello " + name + ", " + this.greeting;
//     }
// }

// let greet = new Greeter("1");
// console.log(greet.greet());
// console.log(greet.greet("2"));



// import "./node_modules/reflect-metadata/Reflect";

// class Point {
//     x: number;
//     y: number;
// }

// // class Line {
// //     private _p0: Point;
// //     private _p1: Point;

// //     @validate
// //     set p0(value: Point) { this._p0 = value; }
// //     get p0() { return this._p0; }

// //     @validate
// //     set p1(value: Point) { this._p1 = value; }
// //     get p1() { return this._p1; }
// // }

// function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
//     let set = <Function>descriptor.set;
//     descriptor.set = function (value: T) {
//         let type = Reflect.getMetadata("design:type", target, propertyKey);
//         if (!(value instanceof type)) {
//             throw new TypeError("Invalid type.");
//         }
//         set(value);
//     }
// }

// // same as
// class Line {
//     private _p0: Point;
//     private _p1: Point;

//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p0(value: Point) { this._p0 = value; }
//     get p0() { return this._p0; }

//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p1(value: Point) { this._p1 = value; }
//     get p1() { return this._p1; }
// }
