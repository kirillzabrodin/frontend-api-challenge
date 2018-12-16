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
  document.getElementById('body').innerHTML = "<a class='peep' href='#home'><h2 class='author'>" +
  peep.user.handle +
  "</h2><br>" +
  "<p>" + peep.body + "</p>" +
  "</a>" +
  "<br>"
  if (peep.user.id == window.sessionStorage.getItem("session_id")) {
    document.getElementById('body').innerHTML += "<button type='submit' id='deletepeep'>Delete Peep</button>"
    PeepDeleteListener(peep);
  }
  if (window.sessionStorage.getItem("session_id") != null) {
    document.getElementById('body').innerHTML += "<button type='submit' id='likepeep'>Like Peep</button>" +
    "<button type='submit' id='dislikepeep'>Dislike Peep</button>"
    PeepLikeListener(peep);
  }
}

var PeepDeleteListener = function(peep) {
  document.getElementById('deletepeep').addEventListener('click', function() {
    DeletePeep(peep);
  })
}

var PeepLikeListener = function(peep) {
  document.getElementById('likepeep').addEventListener('click', function() {
    LikePeep(peep);
  })
  document.getElementById('dislikepeep').addEventListener('click', function() {
    DislikePeep(peep);
  })
}

var DeletePeep = function(peep) {
  xhttp = new XMLHttpRequest();
  var url = 'https://chitter-backend-api.herokuapp.com/peeps/' + peep.id
  xhttp.open('DELETE', url, true)
  xhttp.setRequestHeader("Authorization", "Token token=" + window.sessionStorage.getItem("session_key"));
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 204) {
      alert("Peep deleted")
    } else if (this.readyState === 4 && this.status === 401) {
      alert("You don't own this peep, and we do NOT accept censorship on this platform!")
    }
  }
  xhttp.send();
}

var LikePeep = function(peep) {
  xhttp = new XMLHttpRequest();
  var url = 'https://chitter-backend-api.herokuapp.com/peeps/' + peep.id + '/likes/' + window.sessionStorage.getItem("session_id")
  xhttp.open('PUT', url, true)
  xhttp.setRequestHeader("Authorization", "Token token=" + window.sessionStorage.getItem("session_key"));
  xhttp.send();
}

var DislikePeep = function(peep) {
  xhttp = new XMLHttpRequest();
  var url = 'https://chitter-backend-api.herokuapp.com/peeps/' + peep.id + '/likes/' + window.sessionStorage.getItem("session_id")
  xhttp.open('DELETE', url, true)
  xhttp.setRequestHeader("Authorization", "Token token=" + window.sessionStorage.getItem("session_key"));
  xhttp.send();
}
