import * as dotenv from 'dotenv';
import { passport } from 'passport-google-oauth20';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

var GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: 'https://www.example.com/oauth2/redirect/google',
    scope: ['profile'],
    state: true
  },
  function verify(accessToken, refreshToken, profile, cb) {
    const filePath = path.resolve(__dirname, '../../users/users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Check if the user already exists
    let user = users.find(u => u.provider === 'https://accounts.google.com' && u.subject === profile.id);

    if (!user) {
      // Create a new user record
      const newUser = {
        userId: users.length + 1,
        username: profile.displayName,
        provider: 'https://accounts.google.com',
        subject: profile.id
      };
      users.push(newUser);
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
      return cb(null, newUser);
    } else {
      // Return the existing user
      return cb(null, user);
    }
  }
));