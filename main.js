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
const yearsArray = [ 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031 ]

// Define an array of strings representing each month of the year
const monthArray = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

// Define an array of objects representing each customer
// Properties: firstName, lastName, monthOfBirth, yearOfBirth
const customerArray = [
    { firstName: "Barbara", lastName: "Johnson", monthOfBirth: "January", yearOfBirth: 1981 },
    { firstName: "Abby", lastName: "Reilly", monthOfBirth: "January", yearOfBirth: 1999 },
    { firstName: "Vaughn", lastName: "Torphy", monthOfBirth: "May", yearOfBirth: 1972 },
    { firstName: "Reuben", lastName: "Ankunding", monthOfBirth: "December", yearOfBirth: 1987 },
    { firstName: "Harley", lastName: "Heidenreich", monthOfBirth: "August", yearOfBirth: 1965 },
    { firstName: "Sibyl", lastName: "Stracke", monthOfBirth: "November", yearOfBirth: 1994 },
    { firstName: "Carlo", lastName: "Pouros", monthOfBirth: "July", yearOfBirth: 1998 },
    { firstName: "Hollis", lastName: "Kling", monthOfBirth: "December", yearOfBirth: 1969 },
    { firstName: "Ernestine", lastName: "Reynolds", monthOfBirth: "May", yearOfBirth: 1977 },
    { firstName: "Sonia", lastName: "Oberbrunner", monthOfBirth: "August", yearOfBirth: 1983 }
]


// Iterate the array of year integers
for (const year of yearsArray) {

    // Iterate the array of month strings
    for (const month of monthArray) {
        // Two blank lines for formatting
        console.log("\n\n")
        // Print the current year
        console.log(year)
        // Print the current month
        console.log(month)
        console.log("---------------")


        // Iterate the array of customer objects
        for (const customer of customerArray) {
            // Compare monthOfBirth property with current month
            if (customer.monthOfBirth === month) {
                // Lisa Jackson is n years old

                // Calculate age by subtracting current year minus yearOfBirth property value
                const age = year - customer.yearOfBirth

                // Access firstName and lastName property on current customer object
                // Print the customer name and current age
                console.log(`${customer.firstName} ${customer.lastName} is ${age} years old`)
            }
        }
    }
}




/*
        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/


