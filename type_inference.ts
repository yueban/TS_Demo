onload = () => {
    document.body.innerHTML = "Type Inference";
};



// let x = [0, 1, null];//number[]



class Animal { }
class Rhino extends Animal { }
class Elephant extends Animal { }
class Snake extends Animal { }

// // let zoo = [new Rhino(), new Elephant(), new Snake()];//(Rhino | Elephant | Snake)[]
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];//(Rhino | Elephant | Snake)[]



// window.onmousedown = function (mouseEvent) {
//     console.log(mouseEvent.length);  //<- Error
// };

// window.onmousedown = function (mouseEvent: any) {
//     console.log(mouseEvent.length);  //<- Now, no error is given
// };



// function createZoo()/* (Rhino | Elephant | Snake)[] */ {
//     return [new Rhino(), new Elephant(), new Snake()];
// }

function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}