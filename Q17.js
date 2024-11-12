"use strict";
// 17:Shrinkng Guests List: You just found out  that your new dinner table won't arrive  in time for the dinner and you have space for only two guests.start your program from exercise 16 add a new line that prints a message saying that you can invite only two people for dinner
// .Remove guests from your list one at a time until only two names remain at your list.Each time you pop a name form your list print a message to that person letting them know you're sorry you can't invite them to dinner
// .Print a message to each of the two people still on your FileList,letting them know they're still invited
// .Remove the last two names from your list,so you have an empty list.Print your list to make sure you actually have an empty list at the end of your program.
let newGuest = ["Nazia", "Bushra", "Faryal", "Umaima"];
console.log("I can invite only two people for dinner");
while (newGuest.length > 2) {
    let removeGuest = newGuest.pop();
    console.log(`Sorry ${removeGuest}, you are not invited to dinner`);
}
newGuest.map((item) => console.log(`Dear ${item}, you are still invited to dinner`));
newGuest.pop();
console.log(newGuest);
newGuest.pop();
console.log(newGuest);
