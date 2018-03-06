function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log('a:', a);
    console.log('b:', b);
}

keepWholeObject({ a: '1' });


// function f({ a, b } = { a: "str", b: 1 }) {
//     console.log('a', a);
//     console.log('a', b);
// }
function f({ a, b = 0 } = { a: "str" }) {
    console.log('a', a);
    console.log('a', b);
}

f();
f({ a: "str2" });
f({ a: "str3", b: 1 });


let first = [1, 2];
let second = [4, 5];
let both = [0, ...first, ...second, 6];
console.log(both);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };
let search = { food: "rich", ...defaults };
console.log(search);


class C {
    p = 12;
    m() {
    }
}
let c = new C();
let clone = { ...c };
console.log(clone.p);
// clone.m(); // error!