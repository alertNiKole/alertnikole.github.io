/*     WordFlash Script     */
/*  This script updates the Word Flashing on load.  It begins with 'Understanding" and pushes through to "HireMe", changing colors along the way. */

//select element
const selectWord = document.querySelector("#wordFlash");

//array of flashwords
let words = [
    "Listen()", 
    "Meet()",
    "Know()", 
    "Learn()", 
    "Connect()", 
    "Develop()", 
    "Read()",  
    "HireMe()"
    ]

//array of randomized colors
let colors = [
  "#ff4b82",
  "#02ff00",
  "#0bd0e3",
  "#0be393",
  "#4bc259",
  "#6ebffd",
  "#6f19f9",
  "#990be3",
  "#b8e30b",
  "#e30b0b",
  "#e30bab",
  "#e3780b"
]


//rng formula 
let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}); //used numerous times
    

//wordFlash = function

function wordFlash () {   //Word change 
    function wordFun () {
        let select = rng(words.length);  // number from the array - random
        let flash = 0;  //counter
            //for each count in the array
            /* for(i = flash; i < words.length; i++) { */
                //choose a random word from the list
                words[select];
                //store the value to the new variable
                let revisedWord = words[select];
                selectWord.innerHTML = revisedWord;
                flash ++;
                console.log(words[select], "words");
       };

    function colorFunOne () {
    //  Color Change One
        let colorChange = rng(colors.length);
        let illuminate = 0;
        
        for(i = illuminate; i < colors.length; i++) {
            words[colorChange]
            // change color;
            selectWord.style.color = colors[colorChange];
            illuminate ++;
        }

    };

   wordFun();
   colorFunOne();
   console.log("The function has run")

};



setInterval(wordFlash, 2200);

//working --------> now work on making the function stop duplicating 




