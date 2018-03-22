// class Greeter {
//     greeter: string;
//     constructor(message: string) {
//         this.greeter = message;
//     }
//     greet() {
//         return `Hello, ${this.greeter}`;
//     }
// }
// let g1 = new Greeter('jack');
// console.log(g1.greet());

// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);

// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// // new Animal("Cat").name; // 错误: 'name' 是私有的.

// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// // animal = employee;

// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// // console.log(howard.name);

// class Person {
//     protected name: string;
//     protected constructor(theName: string) { this.name = theName; }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// // let john = new Person("John");

// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
//     // constructor(theName: string) {
//     // }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// // dad.name = "Man with the 3-piece suit";

// class Animal {
//     constructor(private name: string) { }
//     move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// let anim = new Animal("animal 1");

// // let passcode = "secret passcode";
// let passcode = "secret passcode1";
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     // set fullName(newName: string) {
//     //     if (passcode && passcode == "secret passcode") {
//     //         this._fullName = newName;
//     //     }
//     //     else {
//     //         console.log("Error: Unauthorized update of employee!");
//     //     }
//     // }
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// class Grid {
//     static origin = { x: 0, y: 0 };
//     calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor(public scale: number) { }
// }
// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale
// console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));

// abstract class Department {
//     constructor(public name: string) {
//     }
//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }
//     abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }
//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }
//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// (<AccountingDepartment>department).generateReports(); // 错误: 方法在声明的抽象类中不存在


// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// Greeter.standardGreeting = "Hey there!";
// // let greeterMaker = Greeter;
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());