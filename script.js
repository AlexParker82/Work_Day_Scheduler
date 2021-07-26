$(function () {
    const currentDay$ = $('#currentDay');
    const description$ = $('.description');
    const textArea$ = $('textarea');
    const saveBtn1$ = $('#first');
    const saveBtn2$ = $('#second');
    const saveBtn3$ = $('#third');
    const saveBtn4$ = $('#fourth');
    const saveBtn5$ = $('#fifth');
    const saveBtn6$ = $('#sixth');
    const saveBtn7$ = $('#seventh');
    const saveBtn8$ = $('#eighth');
    const saveBtn9$ = $('#ninth');
    const today$ = moment().format('dddd, MMMM Do YYYY');
    let storedJob = localStorage.getItem('job');

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

    saveBtn1$.click(function() {
        hour = saveBtn1$.siblings('.description');
        localStorage.setItem('job1', hour.val());
    })

    saveBtn2$.click(function() {
        hour = saveBtn2$.siblings('.description');
        localStorage.setItem('job2', hour.val());
    })

    saveBtn3$.click(function() {
        hour = saveBtn3$.siblings('.description');
        localStorage.setItem('job3', hour.val());
    })

    saveBtn4$.click(function() {
        hour = saveBtn4$.siblings('.description');
        localStorage.setItem('job4', hour.val());
    })

    saveBtn5$.click(function() {
        hour = saveBtn5$.siblings('.description');
        localStorage.setItem('job5', hour.val());
    })

    saveBtn6$.click(function() {
        hour = saveBtn6$.siblings('.description');
        localStorage.setItem('job6', hour.val());
    })

    saveBtn7$.click(function() {
        hour = saveBtn7$.siblings('.description');
        localStorage.setItem('job7', hour.val());
    })

    saveBtn8$.click(function() {
        hour = saveBtn8$.siblings('.description');
        localStorage.setItem('job8', hour.val());
    })

    saveBtn9$.click(function() {
        hour = saveBtn9$.siblings('.description');
        localStorage.setItem('job9', hour.val());
    })

    
    



    setBackground();

});









