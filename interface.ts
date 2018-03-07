// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// interface labelledValue {
//     label: string;
// }

// function printLabel(labelledObj: labelledValue) {
//     console.log(labelledObj.label);

// }

// let myObj = { size: 10, label: "size 10 string" };
// printLabel(myObj);


// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

// function createSquare(config: SquareConfig): { color: string, area: number } {
//     let square = { color: "white", area: 100 };
//     if (config.color) {
//         square.color = config.color;
//     }
//     if (config.width) {
//         square.area = config.width * config.width;
//     }
//     return square;
// }

// console.log(createSquare({ color: "black" }));
// console.log(createSquare({ width: 11 }));
// console.log(createSquare({ color: "green", width: 20 }));
// console.log(createSquare({ color: "green", width: 20, another: 1 }));
// // let config = { color: "green", width: 20, another: 1 };
// // console.log(createSquare(config));
// // console.log(createSquare({ color: "green", width: 20, another: 1 } as SquareConfig));


// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 10 };
// // p1.x = 20;

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<Number> = a;
// a[1] = 20;
// console.log(ro[1]);
// // ro[1] = 30;
// // ro.push(2);
// // ro.length = 20;
// // a = ro;
// a = ro as number[];


// interface SearchConfig {
//     (source: string, substring: string): boolean;
// }
// let mySearchConfig: SearchConfig;
// mySearchConfig = function (source, substring) {
//     let result = source.search(substring);
//     return result > -1;
// }
// // let mySearchConfig: SearchConfig = function (source: string, substring: string): boolean {
// //     let result = source.search(substring);
// //     return result > -1;
// // }
// console.log(mySearchConfig("abc", "a"));


// interface StringArray {
//     [index: number]: string;
// }
// let myArr: StringArray = ["jack", "tom"];
// let myStr = myArr[0];

// class Animal {
//     constructor() {

//     }
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }
// // interface AnimalArray {
// //     [index: string]: Dog;
// //     [index: number]: Animal;
// // }
// interface AnimalArray {
//     [index: string]: Animal;
//     [index: number]: Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     // name: string;
//     name: number;
// }

// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// // myArray[1] = "Mallory"; // error!
// console.log(myArray[1]);


// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
//     // new(hour: number, minute: number);
// }
// class Clcok implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {
//     }
// }

// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number) {
//     return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }
// let digital = createClock(DigitalClock, 12, 12);
// let analog = createClock(AnalogClock, 4, 4);
// digital.tick();
// analog.tick();


// interface Shape {
//     color: string;
// }
// interface Square extends Shape {
//     sideLength: number;
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;

// interface Shape {
//     color: string;
// }
// interface PenStroke {
//     penWidth: number;
// }
// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;


// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset();
// }
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { }
//     counter.interval = 2;
//     counter.reset();
//     return counter;
// }
// // getCounter()(2);
// let c1 = getCounter();
// c1(2);


class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
}
// class Image implements SelectableControl {
// }
