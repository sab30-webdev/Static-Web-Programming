import Home from "./Home";
import Training from "./Training";
import { Route } from "react-router-dom";
import firebaseApp from "./firebase";
import firebase from "firebase/app";
import withFirebaseAuth from "react-with-firebase-auth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App({ user, signOut, signInWithGoogle }) {
  return (
    <div>
      {user ? (
        <>
          <Navbar signOut={signOut} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/training">
            <Training user={user} />
          </Route>
          <Footer />
        </>
      ) : (
        <div className="signin-button">
          <button
            type="button"
            className="button google-button"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
