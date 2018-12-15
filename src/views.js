var Render = (function() {

  return {
    PeepsPage: function() {
      NavBar();
      Peeps();
    },
    SinglePeepPage: function(id) {
      NavBar();
      Peep(id)
    },
    SignUpPage: function() {
      NavBar();
      SignUpForm();
    }
  }

})
