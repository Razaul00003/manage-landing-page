$(".humburger").click(function () {
  $(".close").css("display", "block");

  $(this).css("display", "none");
  $(".nav__list").css("display", "flex");
});
$(".close").click(function () {
  $(this).css("display", "none");
  $(".nav__list").css("display", "none");
  $(".humburger").css("display", "block");
});
