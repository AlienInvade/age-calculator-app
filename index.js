/*const inputYears = document.getElementById('year').value;
const inputMonths = document.getElementById('month').value;
const inputDays = document.getElementById('day').value;
const button = document.getElementsByClassName('btn');
*/



$(".btn").on("click", function() {
    const dat = new Date();
    let month = dat.getMonth();
    let year = dat.getFullYear();
    let day = dat.getDate();


    let inputYear = document.getElementById("year").value;
    let inputMonth = document.getElementById("month").value;
    let inputDays = document.getElementById("day").value;
    if (inputDays.length > 2 ) {
        alert("Enter number");
    } else if (inputMonth.length > 2) {
        return "wrong input";
    } else if (inputYear.length > 4 || inputYear.length < 4) {
        return "wrong input";
    }
        let resultYear = year - inputYear;
        let resultMonth = month - inputMonth;
        let resultDay = day - inputDays;
        $("#count-years").text(`${resultYear}`);
        $("#count-months").text(`${resultMonth}`);
        $("#count-days").text(`${resultDay}`);
});
   

