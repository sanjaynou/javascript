//JavaScript create variable
let x;
var y;
// How to use variable
x=5;
y=10;
z=x+y;

//document.getElementById('demo').innerHTML="The value of z is :"+z


//Javascript Literal
 
//document.getElementById('demo').innerHTML = 10.50
//document.getElementById('demo').innerHTML = "Sanjay Kumar"

//JavaScript Variable (let,var and const)

//let variable
let a;
a=20;
b=30;
c="2.4"
//document.getElementById('demo').innerHTML = c
//document.getElementById('demo').innerHTML = parseInt(b+parseFloat(c))

//var variable
var p;
p=19;
r=10;
s=p*r;
//document.getElementById('demo').innerHTML = s

//const variable

const t=10,u=20;
h = t*20;
//document.getElementById('demo').innerHTML = h

//difference the variables
let k=20;
k=25;
const l = 5;
//l=6; // const value again not assigned
var m = 2;
m=12;
//document.getElementById('demo').innerHTML = l

//JavaScript Identifiers/Names
/*
1. Character (A-Z or a-z)
2. Doller Sign ($)
3. UnderScrore(_)
*/

//JavaScript variable should be written as Camel Type in a good practice
// Upper Camel Case (Pascel Case) : FirstName
// Lower Camel Case : firstName
// first_name
// first-name // javascript not accept this type of variable because '-' is reserved for negative sign


let first$Name,first_name;
first$Name = "Ajay"
first_name = "Bijay"
document.getElementById('demo').innerHTML = `The Name is : ${first$Name} ${first_name}`








