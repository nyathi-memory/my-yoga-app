function  JoinUs() {
    let firstName =prompt("What is your name?");
    let lastName = prompt("What is your surname");
    let =city =prompt(" Which city are you from?");
    if (city === "Johannesburg") {
        alert("Thank you for for reaching out"+" " +firstName + " " +lastName + " " + "you can join us at Emmarentia Dam every Saturday from 9am");
       }
       else {
        alert ("Thank you for for reaching out"+ " " +firstName + " " +lastName + " " + "you can join our online session every Saturday from 9am")
       }
    }
    let JoinUsButton =document.querySelector("button");
    JoinUsButton.addEventListener("click", JoinUs);
