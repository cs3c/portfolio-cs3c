import $ from "jquery";
import "./light-scheme.css";

$(document).ready(function () {
  if ($("body").hasClass("light")) {
    $("#light-mode").hide();
    $("#dark-mode").show();
  } else {
    $("#light-mode").show();
    $("#dark-mode").hide();
  }

  $("#light-scheme").on({
    click: function () {
      $("body").toggleClass("light");

      if ($("body").hasClass("light")) {
        $("#light-mode").hide();
        $("#dark-mode").show();
      } else {
        $("#light-mode").show();
        $("#dark-mode").hide();
      }

      $("body").css("opacity", "0");
      $("body").fadeTo(300, 1);
    }
  });
});
