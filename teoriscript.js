// JAVA

// int x = 5;
// string y = 'abc';

// JavaScript

// let x = 5;
// let name = 'abc';

let a = 1;
console.log(a/0);

let b = 'not a number';
console.log(b/0)

let c = "jum'at";
console.log(c);

let d = `${1 + 2}`;
console.log(d);

let e = 5;
console.log(`umur saya adalah ${d*e} tahun.`)

//  boolean
let f = 10 > 8;
console.log(f);
console.log(e < f);

let name
console.log(name);

// object
const student = {
    firsName: 'Luctfy',
    lastName: 'Alkatiri',
    class: 12
};
student.age = 18; //Menambahkan object data
console.log(student)

// Array 
// let arr = new Array();
// let arr = [];

let fruits = ['Mango','Dragonfruits','Apple'];
fruits.push = 'Banana'; //Menambahkan value
console.log(fruits)

// Typeof 
let p = 'ram'
typeof(p); 
console.log(typeof(p));

// comparison operator 
console.log(3 >= 3)
console.log(3 == 1) 
console.log(3 != 2)
// == sama dengan (untuk persamaan)
// != tidak sama dengan
// jika menggunakan ==, angka 0 akan dianggap false
console.log(0 == false)
console.log(0 == true)
console.log('' == false)
// jika menggunakan === (identik), angka 0 akan berbeda dengan false
console.log(0 === false)
console.log('' === true)

// logical operator //

// Lambang OR --> || memanipulasi nilai boolean
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let x = 12;
let y = 20;

if (x <= 11 || x >= 13) {
    console.log('Nilai Salah')
} else {
    console.log('Nilai Benar')
}

// Lambang And --> &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let city = 'karawang';
let age = 23;

if (city == 'karawang' && age == 23) {
    console.log('The Data is right');
} else {

}

if (city == 'karawang' && age == 24) {
    console.log('The Data is right');
} 
// Lambang Not --> !
// membalikan suatu nilai
let q = 10 > 12;
console.log(q); //jawaban false
console.log(!q) // jawaban kebalikan dari 'tanpa !'

// Pengecekan Null --> ?? 
let user;
console.log(user ?? 'anonymous');
let users = 'Andi';
console.log(users ?? 'anonymous');

// Object
// const object_name = {
//     key1: value1, 
//     key2: value2,
// }; // Value diisi oleh number, string, dan lain-lain

const person = {
    name: 'Luctfy',
    age: 23,
};
console.log(person)

console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);

person.isMarried = false; // Menambahkan Key pada Object 
delete person.age;
console.log(person)

// Property Shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}
let lucet = makeUser ('Luctfy', 23);
console.log(lucet.name);
console.log(lucet.age)
console.log(lucet['age'])
console.log(lucet['name'])

// Property Existance, untuk membuktikan ada tidaknya properti didalam variabel tersebut
let eco = {
    name:'Kala',
    age: 20,
};
console.log('place' in eco);
console.log('name' in eco);

for (let key in eco) { 
    console.log (key); //
    console.log(eco[key])
}
 
// Array

const numbers = [1, 2, 3, 4, 5];
let buah = [
    'apple', 'mango', 'orange'
];
console.log(buah[0], buah[1]);
console.log(buah[1]);
console.log(buah[2]);

let buahS = ['mangga', 'apel', 'semangka'];
buahS[3] = 'durian';
console.log(buahS);
buahS.push('nangka');
console.log(buahS);
console.log(buahS);
let arrayRemoved = buahS.pop();
console.log (arrayRemoved)
console.log(buahS)
console.log(buahS.length)
buahS.sort();
console.log(buahS)
// cari array operation di W3schools

// Conditional Operator Statement
// Contoh penggunaan if ... Else
// let identityCardAllowed;

// if (age >= 17) {
//     identityCardAllowed =  true;
// } else {
//     identityCardAllowed = false;
// }
// console.log(identityCardAllowed)

// Conditional Operator '?'
let identityCardAllowed = age >= 17 ? true : false;
console.log(identityCardAllowed); // Syarat bisa seperti ini output harus boolean

// If Statement 
let haus;

if (x <= 20) {
    haus = true;
    console.log('thats right');
}
console.log(haus);

// if else statement
let year = 2023;

if (year == 2022) {
    console.log('Benar');
} else {
    console.log('Salah');
}

// if else if statement 
let umur = 18;

if (umur >= 19) {
    console.log('Selamat');
} else if (umur <= 18) {
    console.log ('Maaf');
}

//konversi boolean
//Jika angka 0, string kosong null NuN dll maka akan dibaca falsy / false

// Switch Statement