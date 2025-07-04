// Functionality for tab switching
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typewriter functionality
const text = "Gabriella Torres-Santiago!";
const speed = 65;

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        // Add next character to the typed text span
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        // Wait before typing the next character
        setTimeout(function () {
            typeWriter(text, i, fnCallback);
        }, speed);
     } else if (fnCallback) {
        // Call callback function after text has been fully typed
        fnCallback();
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', function () {
    typeWriter(text, 0, function () {
        console.log("Typing effect completed.");
    });
});

//project menu filter
  const buttons = document.querySelectorAll('.project-filter');
  const boxes = document.querySelectorAll('.project-box');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.project-filter.active').classList.remove('active');
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');

      boxes.forEach(box => {
        if (filter === 'all' || box.classList.contains(filter)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });





