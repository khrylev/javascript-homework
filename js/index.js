function calculate (){

var a = Number(prompt('Input a'));
var b = Number(prompt('Input b'));
var c = Number(prompt('Input c'));

var discr = (Math.pow(b, 2)) - 4 * a * c;
var sqrDiscr = Math.sqrt(discr);

function tellx (discr) {
 if (d == 0) {
   return 'there is one root';
  }
  
 else {
  if (d < 0){
  	return 'try again'
  }
  
  if (d > 0) {
     var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
     var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
     
     result = 'x1 = ' + x1 + ', x2 = ' + x2;
 }
 document.write(result);
