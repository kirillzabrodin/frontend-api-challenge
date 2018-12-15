var SignUpForm = function() {
  document.getElementById('body').innerHTML = "<div class='signupform'>" +
  "<form id='signup'>" +
    "<div class='container'>" +
      "<h1>Sign Up</h1>" +
      "<p>Please fill in this form to create an account.</p>" +
      "<hr>" +

      "<label for='handle'><b>Handle</b></label>" +
      "<input type='text' placeholder='Enter Handle' id='handle' required><br>" +

      "<label for='psw'><b>Password</b></label>" +
      "<input type='password' placeholder='Enter Password' id='psw' required><bt>" +

      "<p>By creating an account you agree to our <a href='#' style='color:dodgerblue'>Terms & Privacy</a>.</p>" +

      "<div class='clearfix'>" +
        "<button type='button' href='#home' class='cancelbtn'>Cancel</button>" +
        "<button type='submit' id='signupbtn'>Sign Up</button>" +
      "</div>" +
    "</div>" +
  "</form>" +
  "</div>"
  SignUpListener()
}

var SignUpListener = function() {
  document.getElementById('signupbtn').addEventListener('click', function() {
    let handle = document.getElementById('handle').value
    let password = document.getElementById('psw').value
    SignUpUser(handle, password);
  })
}

var SignUpUser = function(handle, password) {
  xhttp = new XMLHttpRequest();
  var url = "https://chitter-backend-api.herokuapp.com/users"
  xhttp.open('POST', url, true)
  xhttp.setRequestHeader("Content-Type", "application/json");
  let content = {'user': {'handle': handle, 'password': password}};
  xhttp.send(JSON.stringify(content));
}
