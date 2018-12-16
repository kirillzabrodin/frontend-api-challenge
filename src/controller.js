var Controller = (function() {

  var render = new Render();

  var LoadPeepsPage = function() {
    render.PeepsPage();
  }

  var LoadSinglePeepPage = function(id) {
    render.SinglePeepPage(id);
  }

  var LoadSignUpPage = function() {
    render.SignUpPage();
    console.log()
  }

  var LoadLogInPage = function() {
    render.LogInPage();
  }

  var LoadNewPeepPage = function() {
    render.NewPeepPage();
  }

  var PeepClickListener = function() {
    window.addEventListener('hashchange', function() {
      document.getElementById('body').innerHTML = "";
      if (window.location.href.includes('#home')) {
        LoadPeepsPage()
      } else if (window.location.href.includes('#login')) {
        LoadLogInPage()
      } else if (window.location.href.includes('#signup')) {
        LoadSignUpPage()
      } else if (window.location.href.includes('#newpeep')) {
        LoadNewPeepPage()
      } else {
        let note_id = window.location.hash.split("#")[1];
        LoadSinglePeepPage(note_id)
      }
    });
  }

  return {
    renderDOM: function() {
      window.sessionStorage.setItem("session_id", null);
      window.sessionStorage.setItem("session_key",null);
      LoadPeepsPage();
      PeepClickListener();
    }
  }

})
