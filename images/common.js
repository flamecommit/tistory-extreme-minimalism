const UI = {
  openDrawer: function () {
    $("body").addClass("scroll-lock");
    $("#drawer").addClass("on");
  },
  closeDrawer: function () {
    $("body").removeClass("scroll-lock");
    $("#drawer").removeClass("on");
  },
  openSearch: function () {
    $("body").addClass("scroll-lock");
    $("#search").addClass("on");
    $('#search input[type="search"]').val("");
    $('#search input[type="search"]').focus();
  },
  closeSearch: function () {
    $("body").removeClass("scroll-lock");
    $("#search").removeClass("on");
  },
};

$(document).ready(() => {
  $("#drawer").on("click", function (e) {
    if (e.currentTarget === e.target) {
      UI.closeDrawer();
    }
  });
  $("#search").on("click", function (e) {
    if (e.currentTarget === e.target) {
      UI.closeSearch();
    }
  });
});
