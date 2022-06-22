import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react";
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {/* {condition ? true : false} */}
      {
        user.email ? <button onClick={handleSignOut}>Sign Out</button> :
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        
      }
      <h2>Name: {user.displayName}</h2>
      <p>Your Email: {user.email}</p>
      <p> Your Image<img src={user.photoURL} alt="" /></p>
    </div>
  );
}

export default App;
