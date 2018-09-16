/*      100         Days        of          Code*/
/* Use this template each day to create a new entry for the 100 Days of Code */
let dayTemplate = 
    {
        "dayCount" : 00,
        "dayDate" : "Date",
        "dayAvatarPath" : "path",
        "daySubTitle" : "subTitle",
        "dayType" :  ["project", "tutorial", "course"],
        "daySource" :  ["FreeCodeCamp", "YouTube", "Traversy","FlatIron", "Udacity" ],
        "dayTechUsed" : "tech list",
        "daysDescription" : "description",
        "daysCode" : "daysCode",
        "daysHash" : "daysHash"
    }


                                                    function customerCareGreeting(type) {
                                                        var message = "";

                                                        // Return the following message based on the service type 

                                                        switch (type){
                                                            case "new":
                                                            message = "Thank you for enrolling for our services";
                                                            break;

                                                            case "repeat":
                                                            case "upgrade":
                                                                message = "Thank you for your continued loyalty.";
                                                                break;

                                                            default: 
                                                                "We appreciate  your business, thank you for choosing us.";
                                                                break;
                                                        }
                                                            return message;
                                                    }    
                                                    
                                                    customerCareGreeting("upgrade");
                                                   // "Thank you for your continued loyalty."
