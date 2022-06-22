/*
* Steps to use firebase
* 1. Create a project on console.firebase.google.com
* 2. NPM install firebase
* 3. Register web app in firebase
* 4. Copy firebase init with config from firebase project setting into a file firebase.init.js
* 5. Export default app
* 6. import getAuth from firebase/auth and create auth = getAuth(app)
* 7. import app firebase init.js into your app.js
* 8. turn on google auhtentication (firebase > authentication > google sign in enable)
* 9. Create google provider
* 10. Use signInWithPopUp and pass auth and provider
* 11. handle .then (if successfull) and catch error (if error)
*/