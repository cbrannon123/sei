const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Student = require('../models/student')
//var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
   },
   function(accessToken, refreshToken, profile, cb) {
    //a user has logged in with OAuth
    Student.findOne({ googleId: profile.id }, function(err, student) {
        if (err) return cb(err);
        if (student) {
            if (!student.avatar ) {
                student.avatar = profile.photos[0].value;
                student.save(function(err) {
                    
                    return cb(null, student)
                    })
                } else {
                    return cb(null, student)
                }
            
            //returning user
            return cb(null, student);
        } else {
            //new user
            var newStudent = new Student({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatar: profile.avatar
                
            });
            newStudent.save(function(err) {
                if (err) return cb(err);
                return cb(null, newStudent);
            });
        }
    });

 }
));



passport.serializeUser(function(student, done) {
    done(null, student._id);
});

passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
        done(err, student);
    });
});