//handle background scroll visual
window.addEventListener('scroll', (event) => {
    var scroll = window.pageYOffset;
    // var height = window.innerHeight^1.1;
    //document.getElementById("background").style.top = (scroll / 10.5) + "%";
    //document.getElementById("background").style.height =  50 + (scroll/height)*5.8 + "%";
    document.getElementById("coverMessage").style.top = -(scroll / 100) + "%";
  });

