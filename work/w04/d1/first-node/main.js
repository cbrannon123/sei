let daysOfWeek = require('./days-of-week');
let day = daysOfWeek.getWeekday(2);
console.log(day);
var random = require('./utilities/random');
for (var i = 0; i < 10; i++) {
    console.log( random(100, 200) );
}
var circle = require('./utilities/circle');
 console.log( circle.area(50) ); 
 console.log( circle.circumference(75) );  
