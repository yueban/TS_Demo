let title = 'Function';

onload = () => {
    document.head.getElementsByTagName('title')[0].innerHTML = title;
    document.body.innerHTML = title;
}


// function add(x: number, y: number): number {
//     return x + y;
// }
// let addFunc = function (x: number, y: number): number {
//     return x + y;
// }
// console.log(add(1, 2));
// console.log(addFunc(2, 3));

// let z = 100;
// function addToZ(x: number, y: number): number {
//     return x + y + z;
// }
// console.log(addToZ(1, 2));

// // The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//     function (x, y) { return x + y; };

// function buildName(firstName: string, lastName?: string) {
//     return firstName + " " + lastName;
// }
// function buildName(firstName: string, lastName: string = "b") {
//     return firstName + " " + lastName;
// }
// function buildName(firstName = "a", lastName: string) {
//     return firstName + " " + lastName;
// }
// console.log(buildName("a", "b"));
// console.log(buildName(undefined, "a"));

// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;


// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function () {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function (this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// interface Event {
//     message: string
// }

// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// class SimpleUIElement implements UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void {
//     }
// }

// class Handler {
//     info: string;
//     // onClickBad(this: Handler, e: Event) {
//     //     // oops, used this here. using this callback would crash at runtime
//     //     this.info = e.message;
//     // }
//     // onClickBad(this: void, e: Event) {
//     //     // oops, used this here. using this callback would crash at runtime
//     //     this.info = e.message;
//     // }
//     onClickGood = (e: Event) => { this.info = e.message };
// }
// let h = new Handler();

// // new SimpleUIElement().addClickListener(h.onClickBad); // error!
// new SimpleUIElement().addClickListener(h.onClickGood);


// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: { suit: string, card: number }[]): number;
// function pickCard(x: number): { suit: string, card: number };
// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds1", card: 2 }, { suit: "spades1", card: 10 }, { suit: "hearts1", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// // let pickedCard2 = pickCard(15);
// let pickedCard2 = pickCard("15");
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);