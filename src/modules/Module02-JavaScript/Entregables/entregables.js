"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("********************** EJERCICIOS ENTREGABLES **********************\n********************************************************************");
/* 1. Array operations
**** Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring. */
var head = function (_a) {
    var first = _a[0];
    return first;
};
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
/*
**** Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator. */
var tail = function (_a) {
    var arr = _a.slice(1);
    return arr;
};
/*
**** Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype. */
var init = function (arr) { return arr.slice(0, (arr.length - 1)); };
/*
**** Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento. */
var last = function (arr) {
    var lastItem = arr.reverse()[0];
    return lastItem;
};
/* 2. Concat
****
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators. */
var concat = function (a, b) { return __spreadArrays(a, b); };
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/*
**** Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2). */
var concatMoreThanTwo = function () {
    var all = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        all[_i] = arguments[_i];
    }
    return all.reduce(function (acc, arr) {
        arr.map(function (elem) {
            acc.push(elem);
        });
        return acc;
    }, []);
};
var years = [2015, 2016, 2017, 2018, 2019, 2020];
/* 3. Clone / Merge
**** Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source: */
var clone = function (source) { return (__assign({}, source)); };
var workingHours = {
    morning: '06:00 - 15:00',
    afternoon: '15:00 - 22:00',
    night: '22:00 - 06:00',
};
/*
**** Merge
Implementa una función merge que, dados dos objetos de entrada devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target,
Por ejemplo, dados estos 2 objetos:

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

el resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

TIP: Puedes usar la función “clone” del apartado A. */
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
var merge = function (source, target) { return (__assign(__assign({}, target), source)); };
var isBookRead2 = function (collection, title) {
    return collection.some(function (elem) { return elem.title === title && elem.isRead === true; });
};
var books2 = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
/* console.log(isBookRead2(books2, "Devastación")); // true
console.log(isBookRead2(books2, "Canción de hielo y fuego")); // false
console.log(isBookRead2(books2, "Los Pilares de la Tierra")); // false */
/*
**** Opcional
Utiliza Typescript para añadir los tipos adecuados. */
var isBookRead = function (collection, title) {
    return collection.some(function (elem) { return elem.title === title && elem.isRead === true; });
};
;
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
/* 5. Slot Machine
****
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!"

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!". */
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
        this.slots = [false, false, false];
    }
    SlotMachine.prototype.insertCoin = function () {
        this.coins++;
    };
    SlotMachine.prototype.showResult = function () {
        console.log(this.slots);
    };
    SlotMachine.prototype.win = function () {
        this.coins = 0;
    };
    SlotMachine.prototype.reset = function () {
        this.slots = [false, false, false];
    };
    SlotMachine.prototype.play = function () {
        var _this = this;
        this.insertCoin();
        this.slots.forEach(function (element, index) {
            return _this.slots[index] = Boolean(Math.floor(Math.random() * 2));
        });
        this.showResult();
        if (this.slots.every(function (slot) { return slot === true; })) {
            console.log("Congratulations!!!. You won " + this.coins + " coin" + ((this.coins > 1) ? 's' : '') + "!!");
            this.win();
        }
        else {
            console.log("Good luck next time!!");
        }
        this.reset();
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"  
machine1.play(); // "Good luck next time!!" 
machine1.play(); // "Congratulations!!!. You won 3 coins!!" 
machine1.play(); // "Good luck next time!!" 
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
