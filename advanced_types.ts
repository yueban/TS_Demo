onload = () => {
    document.body.innerHTML = "Advanced Types";
};



// {
//     function extend<T, U>(first: T, second: U): T & U {
//         let result = <T & U>{};
//         for (let id in first) {
//             (<any>result)[id] = (<any>first)[id];
//         }
//         for (let id in second) {
//             if (!result.hasOwnProperty(id)) {
//                 (<any>result)[id] = (<any>second)[id];
//             }
//         }
//         return result;
//     }


//     class Person {
//         constructor(public name: string) { }
//     }
//     interface Loggable {
//         log(): void;
//     }
//     class ConsoleLogger implements Loggable {
//         log() {
//             console.log(this.name);
//         }
//     }

//     var jim = extend(new Person("Jim"), new ConsoleLogger());
//     var n = jim.name;
//     jim.log();
// }



// {
//     // function padLeft(value: string, padding: any) {
//     function padLeft(value: string, padding: number | string) {
//         if (typeof padding === "number") {
//             return Array(padding + 1).join(" ") + value;
//         }
//         if (typeof padding === "string") {
//             return padding + value;
//         }
//         throw new Error(`Expected string or number, got '${padding}'.`);
//     }

//     console.log(padLeft("Hello world", 4));
//     console.log(padLeft("Hello world", "11 "));
//     // console.log(padLeft("Hello world", true));//throw Error
//     console.log(padLeft("Hello world", true));//Compilation Error
// }



// {
//     interface Bird {
//         fly();
//         layEggs();
//     }

//     interface Fish {
//         swim();
//         layEggs();
//     }

//     function getSmallPet(): Fish | Bird {
//         // ...
//     }

//     // let pet = getSmallPet();
//     // pet.layEggs(); // okay
//     // pet.swim();    // errors



//     let pet = getSmallPet();

//     // 每一个成员访问都会报错
//     // if (pet.swim) {
//     //     pet.swim();
//     // }
//     // else if (pet.fly) {
//     //     pet.fly();
//     // }

//     if ((<Fish>pet).swim) {
//         (<Fish>pet).swim();
//     }
//     else {
//         (<Bird>pet).fly();
//     }

//     function isFish(pet: Fish | Bird): pet is Fish {
//         return (<Fish>pet).swim !== undefined;
//     }
//     if (isFish(pet)) {
//         pet.swim();
//     } else {
//         pet.fly();
//     }
// }



{
    interface Padder {
        getPaddingString(): string
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }

    // 类型为SpaceRepeatingPadder | StringPadder
    let padder: Padder = getRandomPadder();

    if (padder instanceof SpaceRepeatingPadder) {
        padder; // 类型细化为'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // 类型细化为'StringPadder'
    }
}



// {
//     //在 tsconfig.json 中开启 strictNullChecks:true 后
//     // let s = "foo";
//     // s = null; // 错误, 'null'不能赋值给'string'
//     // let sn: string | null = "bar";
//     // sn = null; // 可以

//     // sn = undefined; // error, 'undefined'不能赋值给'string | null'


//     // 可选参数会被自动地加上 | undefined
//     function f(x: number, y?: number) {
//         return x + (y || 0);
//     }
//     f(1, 2);
//     f(1);
//     f(1, undefined);
//     f(1, null); // error, 'null' is not assignable to 'number | undefined'



//     // 可选属性也会有同样的处理
//     class C {
//         a: number;
//         b?: number;
//     }
//     let c = new C();
//     c.a = 12;
//     c.a = undefined; // error, 'undefined' is not assignable to 'number'
//     c.b = 13;
//     c.b = undefined; // ok
//     c.b = null; // error, 'null' is not assignable to 'number | undefined'
// }



// {
//     function f(sn: string | null): string {
//         return sn || "undefiend";
//     }


//     function broken(name: string | null): string {
//         function postfix(epithet: string) {
//             return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
//         }
//         name = name || "Bob";
//         return postfix("great");
//     }

//     function fixed(name: string | null): string {
//         function postFix(epithet: string) {
//             return name!.charAt(0) + '.  the ' + epithet;
//         }
//         name = name || "Bob";
//         return postFix("great");
//     }
// }



{
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n == 'string') {
            return n;
        }
        return n();
    }
}



// {
//     type Container<T> = { value: T };

//     type Tree<T> = {
//         value: T;
//         left: Tree<T>;
//         right: Tree<T>;
//     }

//     type LinkedList<T> = T & { next: LinkedList<T> };

//     interface Person {
//         name: string;
//     }

//     var people: LinkedList<Person>;
//     var s = people.name;
//     var s = people.next.name;
//     var s = people.next.next.name;
//     var s = people.next.next.next.name;

//     type Yikes = Array<Yikes>; // error
// }



// {
//     type Alias = { num: number }
//     interface Interface {
//         num: number;
//     }
//     declare function aliased(arg: Alias): Alias;
//     declare function interfaced(arg: Interface): Interface;
// }



// {
//     type Easing = "ease-in" | "ease-out" | "ease-in-out";
//     class UIElement {
//         animate(dx: number, dy: number, easing: Easing) {
//             if (easing === "ease-in") {
//                 // ...
//             }
//             else if (easing === "ease-out") {
//             }
//             else if (easing === "ease-in-out") {
//             }
//             else {
//                 // error! should not pass null or undefined.
//             }
//         }
//     }
//     let button = new UIElement();
//     button.animate(0, 0, "ease-in");
//     button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here



//     function createElement(tagName: "img"): HTMLImageElement;
//     function createElement(tagName: "input"): HTMLInputElement;
//     // ... more overloads ...
//     function createElement(tagName: string): Element {
//         // ... code goes here ...
//     }
// }



// {
//     function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
//         // ...
//         return 1;
//     }

//     function foo(x: number) {
//         if (x !== 1 || x !== 2) {// 当 x与 2进行比较的时候，它的值必须为 1
//             //         ~~~~~~~
//             // Operator '!==' cannot be applied to types '1' and '2'.
//         }
//     }
// }



// {
//     interface Square {
//         kind: "square";
//         size: number;
//     }
//     interface Rectangle {
//         kind: "rectangle";
//         width: number;
//         height: number;
//     }
//     interface Circle {
//         kind: "circle";
//         radius: number;
//     }
//     type Shape = Square | Rectangle | Circle;
//     // function area(s: Shape): number {
//     //     switch (s.kind) {
//     //         case "square":
//     //             return s.size * s.size;

//     //         case "rectangle":
//     //             return s.width * s.height;

//     //         case "circle":
//     //             return Math.PI * s.radius * s.radius;
//     //     }
//     // }

//     function assertNever(x: never): never {
//         throw new Error("Unexpected object: " + x);
//     }
//     function area(s: Shape): number {
//         switch (s.kind) {
//             case "square":
//                 return s.size * s.size;

//             case "rectangle":
//                 return s.width * s.height;

//             // case "circle":
//             //     return Math.PI * s.radius * s.radius;

//             default:
//                 return assertNever(s);
//         }
//     }
// }



// {
//     class BasicCalculator {
//         public constructor(protected value: number = 0) { }
//         public currentValue(): number {
//             return this.value;
//         }
//         public add(operand: number): this {
//             this.value += operand;
//             return this;
//         }
//         public multiply(operand: number): this {
//             this.value *= operand;
//             return this;
//         }
//         // ... other operations go here ...
//     }

//     let v = new BasicCalculator(2)
//         .multiply(5)
//         .add(1)
//         .currentValue();
//     console.log(v);

//     class ScientificCalculator extends BasicCalculator {
//         public constructor(value = 0) {
//             super(value);
//         }
//         public sin() {
//             this.value = Math.sin(this.value);
//             return this;
//         }
//         // ... other operations go here ...
//     }

//     let v2 = new ScientificCalculator(2)
//         .multiply(5)
//         .sin()
//         .add(1)
//         .currentValue();
//     console.log(v2);
// }



// {
//     function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//         return names.map(n => o[n]);
//     }

//     interface Person {
//         name: string;
//         age: number;
//     }
//     let person: Person = {
//         name: 'Jarid',
//         age: 35
//     };
//     let strings: string[] = pluck(person, ['name']); // ok, string[]
//     // let strings1: string[] = pluck(person, ['name', 'unknown']); // error
//     // let strings2: string[] = pluck(person, ['name', 'age']); // error
//     console.log(strings);
//     let values: (string | number)[] = pluck(person, ['name', 'age']);
//     console.log(values);


//     function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//         return o[name]; // o[name] is of type T[K]
//     }
//     let name: string = getProperty(person, 'name');
//     let age: number = getProperty(person, 'age');
//     let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'


//     interface Map<T> {
//         [key: string]: T;
//     }
//     let keys: keyof Map<number>; // string
//     let value: Map<number>['foo']; // number
// }



// {
//     interface Person {
//         name: string;
//         age: number;
//     }

//     type Readonly<T> = {
//         readonly [P in keyof T]: T[P];
//     }
//     type Partial<T> = {
//         [P in keyof T]?: T[P];
//     }
//     type Nullable<T> = {
//         [P in keyof T]: T[P] | null
//     }

//     type PersonPartial = Partial<Person>;
//     type PersonReadonly = Readonly<Person>;
//     type NullablePerson = {[P in keyof Person]: Person[P] | null };
//     // type NullablePerson = Nullable<Person>;

//     type Keys = 'option1' | 'option2';
//     type Flags = {[K in Keys]: boolean};
// }



// {
//     type Proxy<T> = {
//         get(): T;
//         set(value: T): void;
//     }
//     type Proxify<T> = {
//         [P in keyof T]: Proxy<T[P]>;
//     }

//     function proxify<T>(o: T): Proxify<T> {
//         // ... wrap proxies ...
//         let result = {} as Proxify<T>;
//         for (const k in o) {
//             result[k].set(o[k]);
//         }
//         return result;
//     }
//     let proxyProps = proxify(props);


//     function unproxify<T>(t: Proxify<T>): T {
//         let result = {} as T;
//         for (const k in t) {
//             result[k] = t[k].get();
//         }
//         return result;
//     }

//     let originalProps = unproxify(proxyProps);
// }



{
    type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>
}