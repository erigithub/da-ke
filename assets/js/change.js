$(function() {
    $('.change1').on('click', function() {
        // $(this)は.choiceを指す変数
        var $selected = $(this);
        $selected.toggleClass('change2');
    })
    $('.change2').on('click', function() {
        // $(this)は.choiceを指す変数
        var $selected = $(this);
        $selected.removeClass('change2');
    })
    $("#half").on('click', function() {
      $(".change1").addClass('change2');
    })
    $("#full").on('click', function() {
      $(".change2").removeClass('change2');
    })
})
