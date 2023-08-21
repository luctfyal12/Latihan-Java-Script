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




 