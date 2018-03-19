// {
//     interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }

//     let lettersRegexp = /^[A-Za-z]+$/;
//     let numberRegexp = /^[0-9]+$/;

//     class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }

//     class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }

//     // Some samples to try
//     let strings = ["Hello", "98052", "101"];

//     // Validators to use
//     let validators: { [s: string]: StringValidator; } = {};
//     validators["ZIP code"] = new ZipCodeValidator();
//     validators["Letters only"] = new LettersOnlyValidator();

//     // Show whether each string passed each validator
//     for (let s of strings) {
//         for (let name in validators) {
//             let isMatch = validators[name].isAcceptable(s);
//             console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
//         }
//     }
// }



// namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }

//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;

//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }

//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }



// /// <reference path="Validation.ts" />
// /// <reference path="LettersOnlyValidator.ts" />
// /// <reference path="ZipCodeValidator.ts" />

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }



namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square {
            constructor() {
                console.log("Square");
            }
        }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"