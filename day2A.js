let age = 30;
let ticket = "";
let isWeekend = true;
  if (age<5 ) {
    console.log("Free");
    }
    else if (age<18) {
        console.log("Child Ticket");
        
    }
    else if (age<60) {
        console.log("Adult Ticket");
    }
    else{
        console.log("Senior Ticket");
        
    }
    if (isWeekend === true) {
        ticket = ticket + "Weekend";
    }
    console.log(ticket)
