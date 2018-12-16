var LogInForm = function() {
  document.getElementById('body').innerHTML = "<div class='loginform'>" +
  "<form id='login'>" +
    "<div class='container'>" +
      "<h1>Log In</h1>" +
      "<p>Please fill in this form log in.</p>" +
      "<hr>" +

      "<label for='handle'><b>Handle</b></label>" +
      "<input type='text' placeholder='Enter Handle' id='handle' required><br>" +

      "<label for='psw'><b>Password</b></label>" +
      "<input type='password' placeholder='Enter Password' id='psw' required><bt>" +

      "<div class='clearfix'>" +
        "<button type='button' href='#home' class='cancelbtn'>Cancel</button>" +
        "<button type='submit' id='loginbtn'>Log In</button>" +
      "</div>" +
    "</div>" +
  "</form>" +
  "</div>"
  LogInListener()
}

var LogInListener = function() {
  document.getElementById('loginbtn').addEventListener('click', function() {
    let handle = document.getElementById('handle').value
    let password = document.getElementById('psw').value
    LogInUser(handle, password);
  })
}

var LogInUser = function(handle, password) {
  var xhttp = new XMLHttpRequest();
  var url = "https://chitter-backend-api.herokuapp.com/sessions"
  xhttp.open('POST', url, true)
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 201) {
      window.sessionStorage.setItem("session_id", null);
      window.sessionStorage.setItem("session_key", null);
      var info = JSON.parse(this.response);
      window.sessionStorage.setItem("session_id", info.user_id);
      window.sessionStorage.setItem("session_key", info.session_key);
      alert("You're logged in!")
    }
  }
  let content = {'session': {'handle': handle, 'password': password}};
  xhttp.send(JSON.stringify(content));
}
