require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');

/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(function() {
    console.log('HERE')
    // 1) Find all movie docs
    return Movie.find({});  // remember to return the promise!
  }).then(function(result) {
    console.log('1): ', result)
    return Performer.find({});
    // 2) Find all performer docs
  
  }).then(function(result) {
    console.log('2): ', result)
    return Movie.find({mpaaRating: "PG"})
    // Follow the same .then structure used above from this point forward
    // Don't forget to console.log the exercise number also as shown above 
    // 3) Find all movies with an MPAA Rating of 'PG'
    
  }).then(function(result) {
      console.log('3): ', result)
      return Movie.find({nowShowing: true})
      // 4) Find all movies that are still showing

    }).then(function(result) {
        console.log('4): ', result)
        return Movie.where('mpaaRating').in(['PG', 'PG-13']);
            
        
        // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'
    }).then(function(result) {
        console.log('5): ', result)
        return Movie.findOne({releaseYear: 2018})

        // 6) Find the first movie found with a releaseYear of 2018
    }).then(function(result) {
        console.log('6): ', result)
        return Movie.where('releaseYear').gt(1980)
        
        
        // 7) Find all movies released after 1980
    }).then(function(result){
        console.log('7); ', result)
        return Movie.find({title: })
        // 8) Find all movies whose titles start with a 'C'
        // Hint: StackOverflow will show how to use a regular expression
    })
  
  
  
  
  
  
  
    
  
    
  
    // 9) Find the performer named 'Rami Malek'
    
    
    // 10) Find all performers born before 1980
    
    
    // 11) Find all performers whose name starts with a 'J'
  
  
    // 12) Add a reference to performer 'Bill Murray' to
    //     the movie Caddyshack's cast property and save.
    //     console.log the updated movie.
  
  
  .then(function() {
    process.exit();
  });