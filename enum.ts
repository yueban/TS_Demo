onload = () => {
    document.body.innerHTML = "Enum";
};



// enum FileAccess {
//     // constant members
//     None,
//     Read = 1 << 1,
//     Write = 1 << 2,
//     ReadWrite = Read | Write,
//     // computed member
//     G = "123".length
// }



// enum Enum {
//     A
// }

// let a = Enum.A;
// let nameOfa = Enum[a];
// console.log(nameOfa);



// const enum Enum {
//     A = 1,
//     B = A * 2
// }

// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// console.log(directions);



declare enum Enum {
    A = 1,
    B,
    C = 2
}

console.log(Enum.A);
