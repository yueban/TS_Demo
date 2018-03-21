// {
//     interface Box {
//         height: number;
//         width: number;
//     }

//     interface Box {
//         scale: number;
//         height: number;
//         // height: string;
//     }

//     let box: Box = { height: 5, width: 6, scale: 10 };
// }



// {
//     class Animal { }
//     class Sheep extends Animal { }
//     class Dog extends Animal { }
//     class Cat extends Animal { }

//     interface Cloner {
//         clone(animal: Animal): Animal;
//     }

//     interface Cloner {
//         clone(animal: Sheep): Sheep;
//     }

//     interface Cloner {
//         clone(animal: Dog): Dog;
//         clone(animal: Cat): Cat;
//     }

//     let c: Cloner;

//     // same as
//     interface Cloner {
//         clone(animal: Dog): Dog;
//         clone(animal: Cat): Cat;
//         clone(animal: Sheep): Sheep;
//         clone(animal: Animal): Animal;
//     }
// }



// {
//     interface Document {
//         createElement(tagName: any): Element;
//     }
//     interface Document {
//         createElement(tagName: "div"): HTMLDivElement;
//         createElement(tagName: "span"): HTMLSpanElement;
//     }
//     interface Document {
//         createElement(tagName: string): HTMLElement;
//         createElement(tagName: "canvas"): HTMLCanvasElement;
//     }

//     // same as
//     interface Document {
//         createElement(tagName: "canvas"): HTMLCanvasElement;
//         createElement(tagName: "div"): HTMLDivElement;
//         createElement(tagName: "span"): HTMLSpanElement;
//         createElement(tagName: string): HTMLElement;
//         createElement(tagName: any): Element;
//     }
// }



// namespace Animals {
//     export class Zebra { }
// }

// namespace Animals {
//     export interface Legged { numberOfLegs: number; }
//     export class Dog { }
// }

// same as
// namespace Animals {
//     export interface Legged { numberOfLegs: number; }

//     export class Zebra { }
//     export class Dog { }
// }



// namespace Animal {
//     let haveMuscles = true;

//     export function animalsHaveMuscles() {
//         return haveMuscles;
//     }
// }

// namespace Animal {
//     export function doAnimalsHaveMuscles() {
//         return haveMuscles;  // <-- error, haveMuscles is not visible here
//     }
// }



// class Album {
//     label: Album.AlbumLabel;
// }
// namespace Album {
//     export class AlbumLabel { }
// }



// function buildLabel(name: string): string {
//     return buildLabel.prefix + name + buildLabel.suffix;
// }

// namespace buildLabel {
//     export let suffix = "";
//     export let prefix = "Hello, ";
// }

// alert(buildLabel("Sam Smith"));



enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

console.log(Color.mixColor("white"));
