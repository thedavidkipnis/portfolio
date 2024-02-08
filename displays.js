var i = 0;
var txt = "Hi! I'm David";
var speed = 35;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
  }

  window.addEventListener('load', typeWriter)