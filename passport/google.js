const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const users = require('../models/user');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, cb) => {
        const email = profile.emails[0].value;
        const existsUser = await users.findByEmail(email);
        const user = {
            name: profile.displayName,
            email: email,
            avatar: profile.photos[0].value,
            google_id: profile.id,
            created_at: new Date(),
            updated_at: new Date()
        }
        if(existsUser){
            
        } else {
            user.role_id = 1;
            await users.insert(user);
        }
        return cb(new Error('Working on it...'));
    }
));