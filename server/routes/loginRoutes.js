let express = require("express");
const router = express.Router();
const path = require("path");
const firebase = require("firebase/app"); // for authentication
const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} = require("@firebase/auth");
const { isAuthorizedHasSessionForAPI } = require("../sessionMiddleware");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbURoPkwD1m32rSNuRa7Np7ve_goV1-sk",
  authDomain: "crud-cows.firebaseapp.com",
  projectId: "crud-cows",
  storageBucket: "crud-cows.firebasestorage.app",
  messagingSenderId: "20172866154",
  appId: "1:20172866154:web:65a258b6b7a99d87834013",
  measurementId: "G-XCZ3FNSBSZ",
};

// start the app with firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

router.get("/email", isAuthorizedHasSessionForAPI, function (req, res) {
  res.status(200).json({ email: req.session.user.email });
  return;
});

router.get("/logout", isAuthorizedHasSessionForAPI, function (req, res) {
  const auth = getAuth(firebaseApp);
  signOut(auth)
    .then(() => {
      res.status(200).json({ message: "ok" });
      req.session.user = undefined;
      req.session.save();
      return;
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
      return;
    });
});

router.post("/", function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Must include email and password" });
    return;
  }
  const auth = getAuth(firebaseApp);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //   console.log(user)
      req.session.user = user;
      req.session.save();

      res.status(200).json({ message: "ok" });
      return;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      res.status(500).json({ error: "Something went wrong" });
      return;
    });
});

router.post("/newAccount", function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Must include email and password" });
    return;
  }
  const auth = getAuth(firebaseApp);

  // try registering a new user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      req.session.user = user;
      req.session.save();

      res.status(200).json({ message: "ok" });
      return;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(error);
      res.status(500).json({ error: "Something went wrong" });
      return;
    });
});

module.exports = router;
