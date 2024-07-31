const UI = {
  openDrawer: function () {
    $("body").addClass("scroll-lock");
    $("#drawer").addClass("on");
  },
  closeDrawer: function (e) {
    $("body").removeClass("scroll-lock");
    $("#drawer").removeClass("on");
  },
};

$(document).ready(() => {
  $("#drawer").on("click", function (e) {
    if (e.currentTarget === e.target) {
      UI.closeDrawer();
    }
  });
});
