function calculate (){

var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c'));

var discr = b * b - 4 * a * c;
var sqrDiscr = Math.sqrt(discr);

function tellx (discr) {
 if (d = 0) {
   return 'there is one root, x1 = x2 = -b / (2 * a)';
  }
  
 else {
  if (d < 0){
  	result = 'there are no real roots, there are 2 complex roots: x1 = (-b + i√ - Δ) / (2 * a) and x2 = (-b - i√ - Δ)/(2 * a)';
  }
  
  if (d > 0) {
     var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
     var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
     
     result = 'x1 = ' + x1 + ', x2 = ' + x2;
 }
 
 document.write(result);
}

