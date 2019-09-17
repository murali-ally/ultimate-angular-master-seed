function LoginController(AuthService) {
  var ctrl = this;

  ctrl.errorMessage = "";
  ctrl.buttonText = "Click To Login";
  ctrl.user = null;
  ctrl.successMessage = "";
  ctrl.formTitle = "Login";

  ctrl.$onInit = function () {
    ctrl.user = {
      email: "someemail@gmail.com",
      password: "12345678"
    };
  };

  ctrl.onSubmit = function (event) {
    AuthService.login(event.user).then(function (response) {
      console.log('In login.controller.js, success callback: ', response);
      ctrl.successMessage = "Successfully Logged In";
      // Do the redirection here
    }, function (error) {
      console.log('In login.controller.js, error callback: ', error);
      // Show some error message and ask user to try again.
      ctrl.errorMessage = error.message;
    });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);
