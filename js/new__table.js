// Новая таблица
$(".groups__tab").on("click", function () {
  console.log($(this).parent());
  $(this)
    .parent()
    .children(`.groups__tab + .groups__body__wrapper`)
    .toggleClass("groups__body__wrapper--active");

  $(this).find(".fa-arrow-down").toggleClass("fa-arrow-up");
});
