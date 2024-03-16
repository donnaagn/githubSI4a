console.log("ini adalah scrip eksternal");
//ini single comment
/**
 * ini multilene comment
 * ini buat komentar 
 */

//mengenal variable
let firstName="donna";   //string
let lastName="agnesia";  //string
var age = "1";  //number(int)
const pi =3.14;//number (float/double)
console.log(typeof pi);
//pi = 0;

//operator
//operasi string
let fullname = firstName +lastName;
console.log(fullname);
//operasi matetamtika
let a =13;
let b = 9;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//operasi logika
let aString ="10";
let aNumber =10;
console.log(aString == aNumber);
console.log(aString === aNumber);
console.log("logika and or");
console.log(a<15 && b > 8);
console.log(a<15 && b > 8);

console.log(a<15 && b || 8);
console.log(a<15 && b || 8);

let text ="";
for(let i = 0; i <5; i++){
    text += "the number is "+i+"\n";

}
console.log(text);

