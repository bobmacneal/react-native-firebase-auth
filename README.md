# react-native-firebase-auth

This is sample login code that uses react-native, redux, and firebase authentication. It is adapted from [Stephen Grider's](https://github.com/StephenGrider) outstanding Udemy course *[The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview")*

>![Login view](https://raw.githubusercontent.com/bobmacneal/react-native-firebase-auth/master/login/screenshot/Login.png "Login view")


## Run in iOS Simulator

1. `git clone https://github.com/bobmacneal/react-native-firebase-auth.git`
2. `cd react-native-firebase-auth/login` 
3. `npm install` will install dependencies.
4. `react-native run-ios` should bring up the app in the iOS simulator.
5. Once the app loads, login with test@gmail.com and pwd123! OR create a new account with any email and password.

## Firebase Setup

If you wise to modify this code with your own firebase instance, do the following:

1. Go to firebase console https://console.firebase.google.com/, set up new project. 
2. Click Authentication from navigation drawer, and click set up sign-in method. Enable the Email/Password sign-in provider.
3. In upper top right, click web setup and copy the var config part (not the script tags) then paste into src/App.js. For example:

  `var config = {`
  `  apiKey: "AIzaSyD24bKdgAwkzmiRE5EqSk69dU385crbS7w",`
  `  authDomain: "manager-cf894.firebaseapp.com",`
  `  databaseURL: "https://manager-cf894.firebaseio.com",`
  `  storageBucket: "manager-cf894.appspot.com",`
  `  messagingSenderId: "568410982736"`
  `};`
  `firebase.initializeApp(config);`


