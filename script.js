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

    saveBtn1$.click(function () {
        let hour = saveBtn1$.siblings('textarea');

        

            localStorage.setItem('job1', hour.val());
            let job = localStorage.getItem('job1');
            hour.replaceWith('<h4></h4>');
            saveBtn1$.siblings('h4').addClass('col-10 description zero')
            $('.zero').text(job);
            $(this).attr('disable');
        

    });



    saveBtn2$.click(function () {
        let hour = saveBtn2$.siblings('textarea');

        if (!hour.val()) {
            return;
        } else {
            localStorage.setItem('job2', hour.val());
            let job = localStorage.getItem('job2');
            hour.replaceWith('<h4></h4>');
            saveBtn2$.siblings('h4').addClass('col-10 description one');
            $('.one').text(job);
        }
    });

    saveBtn3$.click(function (e) {
        let hour = saveBtn3$.siblings('.description');

        localStorage.setItem('job3', hour.val());
        let job = localStorage.getItem('job3');
        hour.replaceWith('<h4></h4>');
        saveBtn3$.siblings('h4').addClass('col-10 description two');
        $('.two').text(job);
    })


    saveBtn4$.click(function () {
        let hour = saveBtn4$.siblings('.description');

        localStorage.setItem('job4', hour.val());
        let job = localStorage.getItem('job4');
        hour.replaceWith('<h4></h4>');
        saveBtn4$.siblings('h4').addClass('col-10 description three');
        $('.three').text(job);
    });

    saveBtn5$.click(function () {
        let hour = saveBtn5$.siblings('.description');

        localStorage.setItem('job5', hour.val());
        let job = localStorage.getItem('job5');
        hour.replaceWith('<h4></h4>');
        saveBtn5$.siblings('h4').addClass('col-10 description four');
        $('.four').text(job);
    })

    saveBtn6$.click(function () {
        let hour = saveBtn6$.siblings('.description');

        localStorage.setItem('job6', hour.val());
        let job = localStorage.getItem('job6');
        hour.replaceWith('<h4></h4>');
        saveBtn6$.siblings('h4').addClass('col-10 description five');
        $('.five').text(job);
    })

    saveBtn7$.click(function () {
        let hour = saveBtn7$.siblings('.description');

        localStorage.setItem('job7', hour.val());
        let job = localStorage.getItem('job7');
        hour.replaceWith('<h4></h4>');
        saveBtn7$.siblings('h4').addClass('col-10 description six');
        $('.six').text(job);
    })

    saveBtn8$.click(function () {
        let hour = saveBtn8$.siblings('.description');

        localStorage.setItem('job8', hour.val());
        let job = localStorage.getItem('job8');
        hour.replaceWith('<h4></h4>');
        saveBtn8$.siblings('h4').addClass('col-10 description seven');
        $('.seven').text(job);
    })

    saveBtn9$.click(function () {
        let hour = saveBtn9$.siblings('.description');

        localStorage.setItem('job9', hour.val());
        let job = localStorage.getItem('job9');
        hour.replaceWith('<h4></h4>');
        saveBtn9$.siblings('h4').addClass('col-10 description eight');
        $('.eight').text(job);
    })

    setBackground();

});























