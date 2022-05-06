import $ from "jquery";
import "./c-cursor.css";

/* Cursor movement */
const ball = $("#cc-container");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.3;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.css("left", ballX + "px");
  ball.css("top", ballY + "px");

  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function (event) {
  console.log(ball.contents());
  mouseX = event.pageX;
  mouseY = event.pageY;
});

$(function () {
  $("#cc-container, .cc-cursors").css("opacity", "1");

  $("a, .hoverable, .react-photo-gallery--gallery").on({
    mouseenter: function () {
      $(".cc-normal").fadeTo(50, 0);
      $(".cc-text-tip").text("Click to go");

      if ($(this).is("#light-scheme a")) {
        $(".cc-text-tip").text("Switch dark/light");
        $(".cc-hover").fadeTo(30, 1);
        $("#sfx-hover-alt")[0].currentTime = 0;
        // $("#sfx-hover-alt")[0].play();
      } else if ($(this).is(".react-photo-gallery--gallery")) {
        console.log("11111111111111111");
        $(".cc-text-tip").text("Play work");
        $(".cc-hover-play").fadeTo(30, 1);
      } else {
        $(".cc-text-tip").text("Click to go");
        $(".cc-hover").fadeTo(30, 1);
        $("#sfx-hover-alt")[0].currentTime = 0;
        // $("#sfx-hover-alt")[0].play();
      }
    },
    mouseleave: function () {
      $(".cc-normal").fadeTo(30, 1);
      $(".cc-hover").fadeTo(150, 0);
      $(".cc-hover-play").fadeTo(150, 0);
      $(".cc-text-tip").text("");
    },
    click: function () {
      if ($(this).is("#light-scheme a")) {
        // $("#sfx-hover")[0].currentTime = 0;
        // $("#sfx-hover")[0].play();
      }
    }
  });
});
