{
    let sym1 = Symbol();
    let sym2 = Symbol("key"); // 可选的字符串key
    let sym3 = Symbol("key");

    console.log(sym2 == sym3);
}



{
    let sym = Symbol();

    let obj = {
        // sym: "value" // wrong
        [sym]: "value"
    };

    console.log(obj[sym]); // "value"
}



{
    const getClassNameSymbol = Symbol();

    class C {
        [getClassNameSymbol]() {
            return "C";
        }
    }

    let c = new C();
    let className = c[getClassNameSymbol](); // "C"
}



{
    console.log(typeof Symbol.hasInstance);
}