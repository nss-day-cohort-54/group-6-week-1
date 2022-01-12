/*
    Problem/output:
        Solar Eclipse Bank has a problem. They want to have an automated
        way to display the customer birthdays, for each month, for the
        next 10 years. They would like to see the customer's name, and their
        current age, displayed in the correct month. Here's an example they
        provided of how they would like the data displayed.

        2022
        "February"
        ---------------
        Miles Goodworth is n years old
        Barbara Forsythe is n years old

        2022
        "March"
        ---------------


        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/

// Define an array of integers representing each year for the next 10 years
const yearsArray = [ 2022, 2023, 2024, 2025 ]

// Define an array of strings representing each month of the year
const monthArray = [ "January", "February", "March", "April" ]

// Define an array of objects representing each customer
// Properties: firstName, lastName, monthOfBirth, yearOfBirth
const customerArray = [
    {
        firstName: "Barbara",
        lastName: "Johnson",
        monthOfBirth: "January",
        yearOfBirth: 1981
    }
]


// Iterate the array of year integers
for (const year of yearsArray) {
    // Print the current year
    console.log(year)


    // Iterate the array of month strings
    for (const month of monthArray) {
        // Print the current month
        console.log(month)
        console.log("---------------")


        // Iterate the array of customer objects

            // Compare monthOfBirth property with current month
                // Access firstName and lastName property on current customer object
                // Calculate age by subtracting current year minus yearOfBirth property value
                // Print the customer name and current age

    }

}




/*
        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/


