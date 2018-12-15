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
  }

  var PeepClickListener = function() {
    window.addEventListener('hashchange', function() {
      console.log('calls')
      document.getElementById('body').innerHTML = "";
      if (window.location.href.includes('#home')) {
        LoadPeepsPage()
      } else if (window.location.href.includes('#signup')) {
        LoadSignUpPage()
      } else {
        let note_id = window.location.hash.split("#")[1];
        LoadSinglePeepPage(note_id)
      }
    });
  }

  return {
    renderDOM: function() {
      LoadPeepsPage();
      PeepClickListener();
    }
  }

})
