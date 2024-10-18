// listens to a click on th ebutton then runs the code that is nested
$("#form").on("submit", function(event) {

    // stores the inputs into variables, makes easy to manipulate
    let inputYear = document.getElementById("year").value;
    let inputMonth = document.getElementById("month").value;
    let inputDays = document.getElementById("day").value;
    const form = document.getElementById("form");
    // validates inputs 
    
    if (error(inputYear, inputMonth, inputDays)) { 
        age(inputYear, inputMonth, inputDays);
        resetError();
    } else {
      inputError();
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
                $(".error-day").text("Must be a valid day");
                isValid = false;
            } 

            if (inputMonth < 1 || inputMonth > 12) {
                $(".error-month").text("Must be a valid month");
                isValid = false;

            }

            if (inputYear > currentYear) {
                $(".error-year").text("Must be in the past");
               
                isValid = false;
                event.preventDefault()  
            } else if (year < 100) {
                $(".error-year").text("Must be a valid year");
                isValid = false;
                }

            if (inputDays === "") {
                    $(".error-day").text("This field is required");
                    
                    isValid = false;
                    event.preventDefault()
            }
            
            if (inputMonth === "") {
                    $(".error-month").text("This field is required");
                    isValid = false;

            }
            
            if (inputYear === "") {
                $(".error-year").text("This field is required");
                isValid = false;
            }
            return isValid;
        }

        function inputError() {
            $(".error").css("display", "inline-block")
            $("input").css("border-color", "red");
            $("input").css("border-width", "1px");
            $(".heading").css("color", "red");
            $(".btn").css("top", "145px");
            event.preventDefault();
        }

        function resetError() {
            $(".error").css("display", "none")
            $("input").css("border-color", "hsl(0, 0%, 86%)");
            $("input").css("border-width", "1px");
            $(".heading").css("color", "hsl(0, 1%, 44%)");
            $(".btn").css("top", "135px");
        }

});
   

