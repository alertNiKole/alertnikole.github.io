/*For each json entry in the array I want to fill in innerHTML of the elements from the Object */


//Create Object
let entry = 
    {
        dayAvatarPath : "path",
        dayCount : 00,
        dayDate: "Date",
        daySubTitle : "subTitle",
        dayType :  ["project", "tutorial", "course"],
        daySource :  ["FreeCodeCamp", "YouTube", "Traversy","FlatIron", "Udacity" ],
        dayTechUsed: "tech list",
        daysDescription : "description",
        daysCode : "daysCode",
        daysHash : "daysHash"
    }

//CREATE JSON ENTRY ---manual?
         /* --> Use dayTemplate.js. reserver chronological order */

//GET JSON

// Parse JSON
        /* for each entry in the JSON, then do this insert 
        
//CREATE new entry on HTML

//SELECT Fields

//ENTER Fields

// STORE DATA
myObj = { name":"John", "age":31, "city":"New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name */
