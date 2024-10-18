// listens to a click on th ebutton then runs the code that is nested
$("#form").on("submit", function(event) {

    event.reset();
    // stores the inputs into variables, makes easy to manipulate
    let inputYear = document.getElementById("year").value;
    let inputMonth = document.getElementById("month").value;
    let inputDays = document.getElementById("day").value;
    const form = document.getElementById("form");
    // validates inputs 
    
    if (error(inputYear, inputMonth, inputDays)) {
        age(inputYear, inputMonth, inputDays);
    } else {
        return false;
    }
   

    // calculates how old you are by age, month and day
    function age (inputYear, inputMonth, inputDays) {
        const date = new Date();
        const birthDate = new Date(inputYear, inputMonth - 1, inputDays);

        let year = date.getFullYear() - birthDate.getFullYear();
        let month = date.getMonth() - birthDate.getMonth();
        let days = date.getDate() - birthDate.getDate();

        if (month < 0) {
            year--;
            month += 12;
        }

        if (days < 0) {
            month--;
            const lastMonthDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                0
            );
            days += lastMonthDate.getDate();

            if (month < 0) {
                year--;
                month += 12;
            }
        }
        $("#count-years").text(`${year}`);
        $("#count-months").text(`${month}`);
        $("#count-days").text(`${days}`);
        event.preventDefault();

    }
       


         function error(inputYear, inputMonth, inputDays) {
            let isValid = true;
            let currentYear = new Date().getFullYear();
            let lastDayOfMonth = new Date(inputYear, inputMonth, 0).getDate();

            if (inputDays > lastDayOfMonth  || inputDays <= 0) {
                $(".error-day").text("Must be a valid day").toggle();
                $("input").css("border-color", "red");
                $("input").css("border-width", "1px");
                $(".heading").css("color", "red");
                isValid = false;
                event.preventDefault()
            } 

            if (inputMonth < 1 || inputMonth > 12) {
                $(".error-month").text("Must be a valid month").toggle();
                $("input").css("border-color", "red");
                $("input").css("border-width", "1px");
                isValid = false;
                event.preventDefault()
            }

            if (inputYear > currentYear) {
                $(".error-year").text("Must be in the past").toggle();
                $("input").css("border-color", "red");
                $("input").css("border-width", "1px");
                isValid = false;
                event.preventDefault()  
            } else if (year < 100) {
                $(".error-year").text("Must be a valid year").toggle();
                $("input").css("border-color", "red");
                $("input").css("border-width", "1px");
                isValid = false;
                event.preventDefault()
                }

            if (inputDays === "") {
                    $(".error-day").text("This field is required").toggle();
                    $("input").css("border-color", "red");
                    $("input").css("border-width", "1px");
                    isValid = false;
                    event.preventDefault()
            }
            
            if (inputMonth === "") {
                    $(".error-month").text("This field is required").toggle();
                    $("input").css("border-color", "red");
                    $("input").css("border-width", "1px");
                    
                    isValid = false;
                    event.preventDefault()
            }
            
            if (inputYear === "") {
                $(".error-year").text("This field is required").toggle();
                $("input").css("border-color", "red");
                $("input").css("border-width", "1px");
                isValid = false;
                event.preventDefault()
            }
            return isValid;
        }
});
   

