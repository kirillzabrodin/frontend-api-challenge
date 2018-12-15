var Peeps = function() {
  xhttp = new XMLHttpRequest();
  var url = 'https://chitter-backend-api.herokuapp.com/peeps'
  xhttp.open('GET', url, true)
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      peeps = JSON.parse(this.response);
      PeepsRender(peeps);
    }
  }
  xhttp.send();
}

var PeepsRender = function(peeps) {
  peeps.forEach(function(peep) {
    document.getElementById('body').innerHTML += "<a class='peep' href='#" + peep.id + "'><h3 class='author'>" + peep.user.handle + "</h3>" + peep.body + "</a><br>"
  })
}
