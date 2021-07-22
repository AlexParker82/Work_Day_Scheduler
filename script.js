$(function() {
    const timeContainer$ = $('.container')
    const currentDay$ = $('#currentDay');
    const description$ = $('.description');
    const timeBlock$ = $('.time-block');
    const row$ = $('.row');
    const hour$ = $('.hour');
    const past$ = $('.past');
    const present$ = $('.present');
    const future$ = $('.future');
    const saveBtn$ = $('.saveBtn');
    const today$ = moment().format('dddd, MMMM Do YYYY');

    const timeArray$ = [
        '9AM',
        '10AM',
        '11AM',
        '12PM',
        '1PM',
        '2PM',
        '3PM',
        '4PM',
        '5PM',
];


currentDay$.text(today$);
function createRows() {
    timeArray$.forEach(function(i) {
        let timeRow = $('<tr>');
        timeRow.text(i);
        timeRow.addClass('row');
        timeContainer$.append(timeRow);
    });
};

createRows();







});