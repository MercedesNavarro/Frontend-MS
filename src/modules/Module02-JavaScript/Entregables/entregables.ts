console.log(`********************** EJERCICIOS ENTREGABLES **********************
********************************************************************`);

/* 1. Array operations
**** Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring. */

const head = ([first]: string[]): string => first;

const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/*
**** Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator. */

const tail = ([, ...arr]: string[]): string[] => arr;

/*
**** Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype. */

const init = (arr: string[]): string[] => arr.slice(0, (arr.length -1));

/*
**** Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento. */

const last = (arr: string[]): string => {
    const [lastItem] = arr.reverse();    
    return lastItem;
};

/* 2. Concat
****
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators. */

const concat = (a: string[], b: string[]): string[] => [...a, ...b];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
**** Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2). */

const concatMoreThanTwo = <T>(...all: T[][]): T[] => {
   return all.reduce((acc, arr) => {
       arr.map(elem => {
           acc.push(elem);
       });

       return acc;
   }, []);
};

const years: number[] = [2015, 2016, 2017, 2018, 2019, 2020];

/* 3. Clone / Merge
**** Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source: */

const clone = <T>(source: T): T => ({ ...source });

const workingHours = {
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

const a = {name: "Maria", surname: "Ibañez", country: "SPA"}; 
const b = {name: "Luisa", age: 31, married: true};

const merge = <T, U>(source: T, target: U): T & U => ({ ...target, ...source });


/* 4. Read Books
**** Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón. */

// Forma 1 con Array.prototype
/* function isBookRead(books, titleToSearch) {
    let index = books.findIndex(element => element.title === titleToSearch);
    return books[index] ? books[index].isRead : false;
} */

// Forma 2 con Programación Funcional
interface Book2 {
    title: string;
    isRead: boolean;
}

const isBookRead2 = (collection: Book2[], title: string) => {
    return collection.some(elem => elem.title === title && elem.isRead === true);
};

const books2 = [
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

const isBookRead = (collection: Array<Book>, title: Book["title"]): Boolean => {
    return collection.some(elem => elem.title === title && elem.isRead === true);
};

interface Book {
    title: string;
    isRead: boolean;
};

 const books: Array<Book> = [
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

class SlotMachine {
    coins: number;
    slots: boolean[];
    
    constructor() {
        this.coins = 0;
        this.slots = [false, false, false];
    }

    insertCoin() {
        this.coins++;
    }

    showResult() {
        console.log(this.slots);
    }

    win() {
        this.coins = 0;
    }

    reset() {
        this.slots = [false, false, false];
    }

    play() {
        this.insertCoin();

        this.slots.forEach((element, index) => 
            this.slots[index] = Boolean(Math.floor(Math.random() * 2)));

        this.showResult();

        if (this.slots.every(slot => slot === true)) {
            console.log(`Congratulations!!!. You won ${this.coins} coin${(this.coins > 1)? 's' : ''}!!`);
            this.win();
        } else {
            console.log("Good luck next time!!");
        }

        this.reset();
    }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"  
machine1.play(); // "Good luck next time!!" 
machine1.play(); // "Congratulations!!!. You won 3 coins!!" 
machine1.play(); // "Good luck next time!!" 
machine1.play(); // "Congratulations!!!. You won 2 coins!!"