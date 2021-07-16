/*
  This is the Javascript class. It handles the scrolling logic of the banner.
*/

//the bannerStatus keeps track of which image is being displayed in the container
let bannerStatus = 1;
let bannerTimer = 3000; //3s

window.onload = function() {
  bannerLoop();
}

//Make sure the bannerLoop function runs as soon as the webpage loads
let startBannerLoop = setInterval(function() {
  bannerLoop();
}, bannerTimer);

/*The setInterval method repeats a given function at every given time interval;
  Here it keeps running the bannerLoop method after 3 seconds
*/

document.querySelector(".main-banner").onmouseenter = function() {
  //pass the variable with the timer set above as the parameter
  clearInterval(startBannerLoop);
}

//when the mouse leaves the image, start the loop again
document.querySelector(".main-banner").onmouseleave = function() {
  startBannerLoop = setInterval(function() {
    bannerLoop();
  }, bannerTimer);
}

//the image changes to the next one when the arrow is clicked
document.querySelector(".imgbanbtn-next").onclick = function() {
  bannerLoop();
}

function bannerLoop() {

  //manipulate the positions of the images in different cases
  if (bannerStatus == 1) {
    document.querySelector("#img-ban2").style.opacity = "0";
    document.querySelector("#img-ban3").style.opacity = "0";
    document.querySelector("#img-ban4").style.opacity = "0";

    //set a timer
    setTimeout(function() {
      document.querySelector("#img-ban1").style.right = "0px";

      //place the 1st image right inside the container
      document.querySelector("#img-ban1").style.zIndex = "1000";
      document.querySelector("#img-ban2").style.right = "-1200px";

      //push the 2nd image to the right of the container
      document.querySelector("#img-ban2").style.zIndex = "1500";
      document.querySelector("#img-ban3").style.right = "-2400px";

      //push the 3rd image to the left of the container
      document.querySelector("#img-ban3").style.zIndex = "1800";
      document.querySelector("#img-ban4").style.right = "2400px";
      document.querySelector("#img-ban4").style.zIndex = "600";
      document.querySelector("#img-ban5").style.right = "1200px";
      document.querySelector("#img-ban5").style.zIndex = "800";
    }, 500); //run the codes after 0.5s

    setTimeout(function() {
      document.querySelector("#img-ban2").style.opacity = "1";
    }, 1000); //run the codes after 10s

    bannerStatus = 2;
  } else if (bannerStatus == 2) {
    document.querySelector("#img-ban3").style.opacity = "0";
    document.querySelector("#img-ban4").style.opacity = "0";
    document.querySelector("#img-ban5").style.opacity = "0";

    setTimeout(function() {
      document.querySelector("#img-ban2").style.right = "0px";
      document.querySelector("#img-ban2").style.zIndex = "1000";
      document.querySelector("#img-ban3").style.right = "-1200px";
      document.querySelector("#img-ban3").style.zIndex = "1500";
      document.querySelector("#img-ban4").style.right = "-2400px";
      document.querySelector("#img-ban4").style.zIndex = "1800";
      document.querySelector("#img-ban5").style.right = "2400px";
      document.querySelector("#img-ban5").style.zIndex = "600";
      document.querySelector("#img-ban1").style.right = "1200px";
      document.querySelector("#img-ban1").style.zIndex = "800";
    }, 500); //run the codes after 0.5s

    setTimeout(function() {
      document.querySelector("#img-ban3").style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  } else if (bannerStatus == 3) {
    document.querySelector("#img-ban4").style.opacity = "0";
    document.querySelector("#img-ban5").style.opacity = "0";
    document.querySelector("#img-ban1").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#img-ban3").style.right = "0px";
      document.querySelector("#img-ban3").style.zIndex = "1000";
      document.querySelector("#img-ban4").style.right = "-1200px";
      document.querySelector("#img-ban4").style.zIndex = "1500";
      document.querySelector("#img-ban5").style.right = "-2400px";
      document.querySelector("#img-ban5").style.zIndex = "1800";
      document.querySelector("#img-ban1").style.right = "2400px";
      document.querySelector("#img-ban1").style.zIndex = "600";
      document.querySelector("#img-ban2").style.right = "1200px";
      document.querySelector("#img-ban2").style.zIndex = "800";
    }, 500); //run the codes after 0.5s

    setTimeout(function() {
      document.querySelector("#img-ban4").style.opacity = "1";
    }, 1000);
    bannerStatus = 4;
  } else if (bannerStatus == 4) {
    document.querySelector("#img-ban1").style.opacity = "0";
    document.querySelector("#img-ban2").style.opacity = "0";
    document.querySelector("#img-ban5").style.opacity = "0";

    setTimeout(function() {
      document.querySelector("#img-ban4").style.right = "0px";
      document.querySelector("#img-ban4").style.zIndex = "1000";
      document.querySelector("#img-ban5").style.right = "-1200px";
      document.querySelector("#img-ban5").style.zIndex = "1500";
      document.querySelector("#img-ban1").style.right = "-2400px";
      document.querySelector("#img-ban1").style.zIndex = "1800";
      document.querySelector("#img-ban2").style.right = "2400px";
      document.querySelector("#img-ban2").style.zIndex = "600";
      document.querySelector("#img-ban3").style.right = "1200px";
      document.querySelector("#img-ban3").style.zIndex = "800";
    }, 500); //run the codes after 0.5s


    setTimeout(function() {
      document.querySelector("#img-ban5").style.opacity = "1";
    }, 1000);
    bannerStatus = 5;
  } else if (bannerStatus == 5) {
    document.querySelector("#img-ban1").style.opacity = "0";
    document.querySelector("#img-ban2").style.opacity = "0";
    document.querySelector("#img-ban3").style.opacity = "0";

    setTimeout(function() {
      document.querySelector("#img-ban5").style.right = "0px";
      document.querySelector("#img-ban5").style.zIndex = "1000";
      document.querySelector("#img-ban1").style.right = "-1200px";
      document.querySelector("#img-ban1").style.zIndex = "1500";
      document.querySelector("#img-ban2").style.right = "-2400px";
      document.querySelector("#img-ban2").style.zIndex = "1800";
      document.querySelector("#img-ban3").style.right = "2400px";
      document.querySelector("#img-ban3").style.zIndex = "600";
      document.querySelector("#img-ban4").style.right = "1200px";
      document.querySelector("#img-ban4").style.zIndex = "800";
    }, 500); //run the codes after 0.5s

    setTimeout(function() {
      document.querySelector("#img-ban1").style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}
