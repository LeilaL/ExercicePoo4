
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert(this.responseText);
    }
  };
  xhttp.open("GET", "humans.txt", true);
  xhttp.send();
