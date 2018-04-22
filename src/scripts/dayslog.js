/*For each json entry in the array I want to fill in innerHTML of the elements from the Object */

//DEFINE Object Defaults
let dayAvatarPath = "path";
let dayCount = 00;
let dayDate = Date.toLocaleString(Date);
let daySubTitle = "subTitle"
let dayType =  ["project", "tutorial", "course"];
let daySource =  ["FreeCodeCamp", "YouTube", "Traversy","FlatIron", "Udacity" ];
let dayTechUsed = "tech list";
let daysDescription = "description";
let daysCode = "daysCode";
let daysHash = "daysHash";


//Create Object
let entry =  {
    dayAvatarPath,
    dayCount,
    dayDate,
    daySubTitle, 
    dayTyp,
    daySource,
    dayTechUsed ,
    daysDescription,
    daysCode,
    daysHash
    };

const entry01 = Object.create(entry);


//CREATE JSON ENTRY ---manual?
         /* --> Use dayTemplate.js. reserver chronological order */


//GET JSON
    let rawJSON = "/100days/100DaysLog.json";

// Parse JSON
        /* for each entry in the JSON, then do this insert 
//CREATE new entry on HTML

//SELECT Fields

//ENTER Fields

// STORE Data
myObj = { name":"John", "age":31, "city":"New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name */
