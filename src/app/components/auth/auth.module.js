angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    var firebaseConfig = {
      apiKey: "AIzaSyAQunYIYxYsmczygS2XyZxaftJ4JL_zjBw",
      authDomain: "angular-contacts-manager.firebaseapp.com",
      databaseURL: "https://angular-contacts-manager.firebaseio.com",
      projectId: "angular-contacts-manager",
      storageBucket: "",
      messagingSenderId: "320266189342",
      appId: "1:320266189342:web:0fb4f8450a0542b6d90c0f"
    };

    $firebaseRefProvider
      .registerUrl({
        default: firebaseConfig.databaseURL,
        contacts: firebaseConfig.databaseURL + '/contacts',
      });

    firebase.initializeApp(firebaseConfig);
  });
