function calculate (){

var a = Number(prompt('enter value of a'));
var b = Number(prompt('enter value of b'));
var c = Number(prompt('enter value of c'));

var discriminant = b * b - 4 * a * c;
var sqrDiscr = Math.sqrt(discr);

function tellx (discriminant) {
 if (discriminant = 0) {
    result = 'there is one root, x1 = x2 = -b / (2 * a)';
  }
  
 else {
  if (discriminant < 0){
  	result = 'there are no real roots, there are 2 complex roots: x1 = (-b + i√ - Δ) / (2 * a) and x2 = (-b - i√ - Δ)/(2 * a)';
 }   else if (discriminant > 0) {
     var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
     var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
 }
 
 var discr = Number(prompt('Tell a number'));
 var result = tellx;
 document.write(result);


