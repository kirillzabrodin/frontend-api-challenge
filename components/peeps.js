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
    document.getElementById('body').innerHTML += "<a class='peep' href='#" + peep.id + "'>" +
    "<h2 class='author'>" + peep.user.handle + "</h2><br>" +
    "<h3 class='created'>" + peep.created_at + "</h3><br>" +
    "<p>" + peep.body + "</p>" +
     "<p>Likes:" + peep.likes.length + "</p>" +
     "</a>" +
     "<br>"
  })
}
