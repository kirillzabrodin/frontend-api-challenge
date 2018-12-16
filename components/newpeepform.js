var NewPeepForm = function() {
  document.getElementById('body').innerHTML = "<div class='peepform'>" +
  "<form id='peep'>" +
    "<div class='container'>" +
      "<h1>Peep</h1>" +
      "<p>Please tell us what you would like to peep.</p>" +
      "<hr>" +

      "<label for='handle'><b>Peep</b></label>" +
      "<input type='text' placeholder='Enter Peep' id='peep-text' required><br>" +

      "<div class='clearfix'>" +
        "<button type='submit' id='submitbtn'>Send Peep</button>" +
      "</div>" +
    "</div>" +
  "</form>" +
  "</div>"
  PeepSubmitListener()
}

var PeepSubmitListener = function() {
  document.getElementById('submitbtn').addEventListener('click', function() {
    let peep = document.getElementById('peep-text').value
    SendPeep(peep);
  })
}

var SendPeep = function(peep) {
  var xhttp = new XMLHttpRequest();
  var url = "https://chitter-backend-api.herokuapp.com/peeps"
  xhttp.open('POST', url, true)
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Authorization", "Token token=" + window.sessionStorage.getItem("session_key"));
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 201) {
      alert("Your peep was sent!")
    }
  }
  let content = {'peep': {'user_id': window.sessionStorage.getItem("session_id"), 'body': peep}};
  xhttp.send(JSON.stringify(content));
}
