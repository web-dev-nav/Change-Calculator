/* This function is responsible for taking input and validating it */
function processEntry() {
    //getting values from text field using querySelector ID's
    var c = parseInt(document.querySelector("#cents").value);
   

        if (isNaN(c) ||  c == '') {  //check if its not a number or fields is not null
               if(c < 0 || c > 99 ) { //check if value is within the range
                    alert("Please enter the cents in rage: 0 - 99");
                    return; //return void 
                    //clear all the text fields
                    document.querySelector("#quarters").value = "";
                    document.querySelector("#dimes").value = "";
                    document.querySelector("#nickels").value = "";
                    document.querySelector("#pennies").value = "";
                }
          alert("Invalid cents entry"); // show invalid alert 
          return;
        }

        makeChange(c); // calling makeChange function
}

/* This function is responsible make the change of the given input */
function makeChange(c){
    var q = parseInt(c / 25); //accept only int value and divide that value with 25 to get the number of quartors 
        c = c % 25; // this will return remainder of the amount we enter 
    var d = parseInt(c / 10);
        c = c % 10;
    var n = parseInt(c / 5);
        c = c % 5;
    var p = parseInt(c / 1);  
 document.querySelector("#quarters").value = q; //append the values into the html using id
 document.querySelector("#dimes").value = d;
 document.querySelector("#nickels").value = n;
 document.querySelector("#pennies").value = p;
}



//Creating DOMContentLoaded when #calculate button hit which calls the function processEntries()
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#calculate").addEventListener("click", processEntry);
});

