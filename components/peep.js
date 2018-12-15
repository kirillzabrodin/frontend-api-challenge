var Peep = function(id) {

  xhttp = new XMLHttpRequest();
  var url = 'https://chitter-backend-api.herokuapp.com/peeps/' + id
  xhttp.open('GET', url, true)
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      peep = JSON.parse(this.response);
      PeepRender(peep);
    }
  }
  xhttp.send();
}

var PeepRender = function(peep) {
  document.getElementById('body').innerHTML = "<a class='peep' href='#home'><h3 class='author'>" + peep.user.handle + "</h3><br>" + peep.body + "</a><br>"
}
