

/* This is my first solution but I am getting always 30 for the answer. 
I search Google and I found that the variable has not been defined and 
it is wrriten return new Date(year, month, 0).getDate();. 
Can you plaese let me know why there is a zero? I undetand the rest. Thanks*/

// var newDate= new Date();
// function days(month, year) {
//     return newDate.getDate();
// }

// console.log(days(2, 2019));





//The second solution
function days(month, year) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || 
        month === 10 || month === 12){
      return 31;
    } else if(month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
      } else {
        return 28;
      }
    }

    console.log(days(2, 2019));









