// listens to a click on th ebutton then runs the code that is nested
$("#form").on("submit", function(event) {
    const dat = new Date();
    let month = dat.getMonth();
    let year = dat.getFullYear();
    let day = dat.getDate();

    // stores the inputs into variables, makes easy to manipulate
    let inputYear = document.getElementById("year").value;
    let inputMonth = document.getElementById("month").value;
    let inputDays = document.getElementById("day").value;
    const form = document.getElementById("form");
    // validates inputs 

    if (inputDays.length > 2  || inputDays > 31) {
        $(".error-day").text("Must be a valid date").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        $(".heading").css("color", "red");
        event.preventDefault();
    } 

    if (inputDays === "") {
        $(".error-day").text("This field is required").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        $(".heading").css("color", "red");
        event.preventDefault();
    }

    if (inputMonth === "") {
        $(".error-day").text("This field is required").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        $(".heading").css("color", "red");
        event.preventDefault();
    }

    if (inputYear === "") {
        $(".error-day").text("This field is required").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        $(".heading").css("color", "red");
        event.preventDefault();
    }

    if (inputMonth.length > 2 || inputMonth > 12) {
        $(".error-month").text("Must be a valid month").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        event.preventDefault();
    }
    if (inputYear.length > 4 || inputYear.length < 4) {
        $(".error-year").text("Must be a in the past").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        event.preventDefault();
    }
    if (inputYear > year) {
        $(".error-year").text("Must be in the past").toggle();
        $("input").css("border-color", "red");
        $("input").css("border-width", "1px")
        event.preventDefault();
        return;
        }
    // calculates how old you are by age, month and day
        let resultYear = year - inputYear;
        let resultMonth = month - inputMonth;
        let resultDay = day - inputDays;
        $("#count-years").text(`${resultYear}`);
        $("#count-months").text(`${resultMonth}`);
        $("#count-days").text(`${resultDay}`);
        event.preventDefault();
});
   

