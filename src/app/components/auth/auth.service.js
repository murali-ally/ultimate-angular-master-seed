function AuthService($firebaseAuth) {
  var auth = $firebaseAuth();
  var authData = null;

  this.register = function (user) {
    return auth.$createUserWithEmailAndPassword(user.email, user.password).then(function (response) {
      authData = response;

      return authData;
    });
  };

  this.login = function (user) {
    return auth.$signInWithEmailAndPassword(user.email, user.password).then(function (response) {
      authData = response;

      return authData;
    });
  };
}

angular.module("components.auth").service("AuthService", AuthService);
