$(function () {
    const timeContainer$ = $('.container')
    const currentDay$ = $('#currentDay');
    const description$ = $('td.description');
    const textArea$ = $('textarea');
    const timeBlock$ = $('.time-block');
    const saveBtn$ = $('.saveBtn');
    const today$ = moment().format('dddd, MMMM Do YYYY');

    currentDay$.text(today$);

    function setBackground() {
        description$.each(function () {
            let currentHour$ = moment().format('k');
            let hour = Number($(this).attr("id"));
           // console.log(currentHour$);
           // console.log(hour);
            if (hour < currentHour$) {
                $(this).addClass("past");
            } else if (hour == currentHour$) {
                $(this).addClass("present");
            } else if (hour > currentHour$) {
                $(this).addClass("future");
            }
        });

    };

    setBackground();

});









