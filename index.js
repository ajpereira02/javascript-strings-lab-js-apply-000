var greeting = "Hello, everybody!";
//A string is a collection of characters (letters, numbers, and symbols) wrapped in single or double quotes 

var specialGuest = "Neil deGrasse Tyson";

var greetSpecialGuest = "Hello, " + specialGuest + "!";
//When we wrap strings in single or double quotes, we can join them together using the + operator

var topic = "space";

var conversation =`Let's talk about ${topic}.`;
//When we wrap strings in back ticks, we can use placeholders (${}) and insert variables or evaluated JavaScript directly