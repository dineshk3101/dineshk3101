function w3IncludeHTML(fn) {
  var z, i, a, file, xhttp;
  w3IncludeHTML.c = w3IncludeHTML.c || 0;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      ++w3IncludeHTML.c;
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = this.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          --w3IncludeHTML.c;
          w3IncludeHTML(fn);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (fn && w3IncludeHTML.c==0) fn();
}