//Enter querySelector Code 
var header = document.querySelector("#header");
var linkText = document.querySelector("a").innerHTML;
var linkHref = document.querySelector("a:nth-child(1)");


// NO NEED TO MODIFY BELOW HERE
console.log(`The header is: ${header}`)
console.log(`The first link text is: ${linkText}`)
console.log(`The first link href is: ${linkHref}`)

/*
Using the document.querySelector and text attribute, set the linkText variable to equal the text of the first link, which is "computer scientist". This will be just like you did in the previous README. If done correctly, your console will output the first link text is: computer scientist.

Using the document.querySelector and href attribute, set the linkHref variable to equal the href of the first link, which is "https://en.wikipedia.org/wiki/Computer_scientist". This will also be just like you did in the previous README. If done correctly, your console will output The first link href is: https://en.wikipedia.org/wiki/Computer_scientist. */