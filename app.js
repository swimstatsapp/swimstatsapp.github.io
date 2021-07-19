let menuOpen = false;
const menuBtn = document.querySelector('.menu-btn');
function openFunction() {
    document.getElementById("dropdown").classList.toggle("show");

      if(!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
          document.getElementById('homeselected').classList.remove('active');
      }
      else {
          menuBtn.classList.remove('open');
          menuOpen = false;
          document.getElementById('homeselected').classList.add('active');
      }
      
  }

  function navigate() {
    document.getElementById("dropdown").classList.remove("show");
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
  }