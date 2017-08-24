
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      clients = JSON.parse(this.responseText);
      infosClient.show();
    }
  };
  xhttp.open("GET", "clients.json", true);
  xhttp.send();


  function liste () {
    this.show = function() {
      for (i=0; i < clients.informations.length; i++) {
        $("#donnéesClient").append("<tr><td>" + clients.informations[i].id + "</td><td>" + clients.informations[i].prenom + "</td><td>"
        + clients.informations[i].age + "</td><td>" + clients.informations[i].ville + "</td></tr>");
      }
    };
  }
  var infosClient = new liste();


  this.trier = function (tab, key) {
          tab.sort(function (a, b) {
              var keyA = a[key];
              var keyB = b[key];
              if (keyA < keyB) return -1;
              if (keyA > keyB) return 1;
              return 0;
          });
          this.show();
}
