function RegisterController(AuthService) {
  var ctrl = this;

  ctrl.errorMessage = "";
  ctrl.buttonText = "Create an Account";
  ctrl.user = null;
  ctrl.successMessage = "";
  ctrl.formTitle = "Register";

  ctrl.$onInit = function () {
    ctrl.user = {
      email: "someemail@gmail.com",
      password: "12345678"
    };
  };

  ctrl.onSubmit = function (event) {
    AuthService.register(event.user).then(function (response) {
      console.log('In register.controller.js, success callback: ', response);
      ctrl.successMessage = "Successfully Logged In";
      // Do the redirection here
    }, function (error) {
      console.log('In register.controller.js, error callback: ', error);
      // Show some error message and ask user to try again.
      ctrl.errorMessage = error.message;
    });
  };
}

angular
  .module("components.auth")
  .controller("RegisterController", RegisterController);