$(function () {
  // Pagination List
  $("#pagList").on("click", function () {
    $("#pgListValue").toggleClass("active");
  });

  $(".xdsoft_today_button").css("display", "none");

  // Table line Show && Hide

  // FirstItem
  $("#tableFirstItemShow").on("click", function () {
    $(".table__line--firstItem").toggleClass("show");
    $("#tableFirstItemShow .fa-arrow-down").toggleClass("fa-arrow-up");
  });

  // SecondItem
  $("#tableSecondItemShow").on("click", function () {
    $(".table__line--secondItem").toggleClass("show");
    $("#tableSecondItemShow .fa-arrow-down").toggleClass("fa-arrow-up");
  });

  // ThirdItem
  $("#tableThirdItemShow").on("click", function () {
    $(".table__line--thirdItem").toggleClass("show");
    $("#tableThirdItemShow .fa-arrow-down").toggleClass("fa-arrow-up");
  });

  // FourthItem
  $("#tableFourthItemShow").on("click", function () {
    $(".table__line--fourthItem").toggleClass("show");
    $("#tableFourthItemShow .fa-arrow-down").toggleClass("fa-arrow-up");
  });

  // Delite Function
  $(".deliteBtn").click(function () {
    $(this).parent().hide(100);
  });

  // Add new select

  $("#addSelect").on("click", function () {
    $("#formSelect").append(`<div class="select__wrapper">
        <select class="form-control mt-2" id="exampleFormControlSelect4">
                <option>Валиева Рената Ренатовна</option>
                <option>Глухих Петр Иванович</option>
                <option>Удочкин Александр Николаевич</option>
            </select> <a href="#" class="select__del table__del deliteBtn" title="Удалить"><i
                class="fas fa-trash-alt"></i></a>
</div>`);
    $("#addSelect").hide();
  });

  // Hide Hints
  $(window).on("load resize", function () {
    let win = $(this);
    if (win.width() <= 768) {
      $(".table__edit").attr("data-original-title", "");
      $(".table__del").attr("data-original-title", "");
      $(".table__tab").attr("data-original-title", "");
      $(".table__copy").attr("data-original-title", "");
    }
  });
});
