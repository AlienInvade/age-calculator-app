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
    if (inputDays.length > 2 ) {
        alert("Enter number");
    } else if (inputMonth.length > 2) {
        return "wrong input";
    } else if (inputYear.length > 4 || inputYear.length < 4) {
        return "wrong input";
    }
    // calculates how old you are by age, month and day
        let resultYear = year - inputYear;
        let resultMonth = month - inputMonth;
        let resultDay = (day - inputDays) * -1;
        $("#count-years").text(`${resultYear}`);
        $("#count-months").text(`${resultMonth}`);
        $("#count-days").text(`${resultDay}`);
        event.preventDefault();
});
   

