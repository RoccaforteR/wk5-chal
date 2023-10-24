var dateTime = $('#dateTime');
var saveBtn = document.querySelector(".saveBtn");

const curHour = dayjs();
const formattedTime = curHour.format('YYYY-MM-DD-HH:mm');

function printDateTime() {
    var date = formattedTime;
    dateTime.text(date);
};

function hourTracker() {
    $('.timeHour').each(function () {
        var schedulehHour = $(this).attr("id").split("time")[1];
        console.log("curHour " + curHour);
        console.log("schedulehHour " + schedulehHour);

        if (schedulehHour < curHour) {
            $(this).addClass("past");
        }
        else if (schedulehHour == curHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});

$("#hour-9.description").val(localStorage.getItem("hour-9"));
$("#hour-10.description").val(localStorage.getItem("hour-10"));
$("#hour-11.description").val(localStorage.getItem("hour-11"));
$("#hour-12.description").val(localStorage.getItem("hour-12"));
$("#hour-1.description").val(localStorage.getItem("hour-1"));
$("#hour-2.description").val(localStorage.getItem("hour-2"));
$("#hour-3.description").val(localStorage.getItem("hour-3"));
$("#hour-4.description").val(localStorage.getItem("hour-4"));
$("#hour-5.description").val(localStorage.getItem("hour-5"));

for (let i = 9; i <= 12; ++i) {
  $("#hour-" + i + ".description").val(localStorage.getItem("hour-" + i));
}

for (let i = 1; i <= 5; ++i) {
  $("#hour-" + i + ".description").val(localStorage.getItem("hour-" + i));
}


printDateTime();
hourTracker();
