$(function () {
    const timeContainer$ = $('.container')
    const currentDay$ = $('#currentDay');
    const description$ = $('.description');
    const textArea$ = $('textarea');
    const timeBlock$ = $('.time-block');
    const saveBtn$ = $('.saveBtn');
    const today$ = moment().format('dddd, MMMM Do YYYY');

    currentDay$.text(today$);

    function setBackground() {
        const currentHour$ = moment().format('k');
        console.log(currentHour$);
        textArea$.each(function () {
            console.log($(this).attr("id"));
            if ($(this).attr("id") < currentHour$) {
                $(this).addClass("past");
            } else if ($(this).attr("id") == currentHour$) {
                $(this).addClass("present");
            } else if ($(this).attr("id") > currentHour$) {
                $(this).addClass("future");
            }
        });

    };

setBackground();

});









