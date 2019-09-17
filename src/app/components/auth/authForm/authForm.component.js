var authForm = {
  restrict: "A",
  bindings: {
    user: "<",
    buttonText: "@",
    errorMessage: "@",
    onSubmit: "&",
    formTitle: "@"
  },
  templateUrl: "./authForm.html",
  controller: "AuthFormController"
};

angular.module("components.auth").component("authForm", authForm);
