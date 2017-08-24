
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert(this.responseText);
    }
  };
  xhttp.open("GET", "clients.json", true);
  xhttp.send();


  function liste () {
    this.getName = function() {
      for (i=0; i < clients.length; i++) {
        $("#donnéesClient").append("")
      }
    };
  }
