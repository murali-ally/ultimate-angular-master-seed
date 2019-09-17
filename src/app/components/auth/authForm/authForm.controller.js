function AuthFormController() {
  var ctrl = this;

  // This will happen only once when authForm is initialized.
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(this.user);
    }
  };

  ctrl.onClickingSubmitBtn = function () {
    this.onSubmit({
      $event: {
        user: this.user
      }
    });
  };
}

angular
  .module("components.auth")
  .controller("AuthFormController", AuthFormController);
