//import { promises } from "fs";

// utility to initialize database
//var p = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//      reject('No time, timed out!');
//    }, 2000);
//  });
//  
//  p.then(function(result) {
//    console.log(result);
//  }).catch(function(err) {
//      console.log(err);
//  }).finally(function() {
//      console.log("finally");
 // });

// function asyncAdd(a, b, delay) {
//      return new Promise(function(resolve) {
//          setTimeout(function() {
//              resolve(a + b);
//          }, delay)
//      });
//  }

//  asyncAdd(5, 10, 2000)
//  .then(function(sum) {
//      console.log(sum);
//      return asyncAdd(sum, 100, 1000);
//  })
//  .then(function(sum) {
//      console.log(sum);
//      return asyncAdd(sum, 1000, 3000);
//  })
//  .then(function(sum) {
//      console.log(sum);
//  });

// require("./config/database");
// const Movie = require('./models/movie');
// const Performer = require('./models/performer');
// const data = require('./data');

// const p1 = Movie.deleteMany({})
// const p2 = Performer.deleteMany({});

// Promise.all([p1, p2])
// .then(function(results) {
//     console.log(results);
//     return Performer.create(data.performers);
// })

// .then(function(performers) {
//     console.log(performers);
//     return Movie.create(data.movies);
// })
// .then(function(movies) {
//     return Promise.all([
//         Performer.findOne({name: 'Mark Hamill'}),
//         Movie.findOne({title: 'Star Wars - A New Hope'})
//     ]);
// })
// .then(function(results) {
//     const mark = results[0];
//     const starWars = results[1];
//     starWars.cast.push(mark);
//     return starWars.save();
// })


// .then(function(){
//     process.exit();

// });