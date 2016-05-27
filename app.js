$(document).ready(function () {

    $.ajax({

        type:"GET",
        url:"https://myapi.profstream.com/api/395fbc/wines",
        success: function(wines) {
            console.log(wines);
            // create alerts for each wine
            console.log("I like to drink " + wines[0].name + " from the year "
            + wines[0].year + " from  " + wines[0].country " in the region of " + wines[0].region)
            console.log("I like to drink " + wines[1].name + " from the year " + wines[1].year
            + " from  " + wines[1].country " in the region of " + wines[1].region)
            console.log("I like to drink " + wines[2].name + " from the year " + wines[2].year
            + " from  " + wines[2].country " in the region of " + wines[2].region)
            console.log("I like to drink " + wines[3].name + " from the year " + wines[3].year
            + " from  " + wines[3].country " in the region of " + wines[3].region)
            console.log("I like to drink " + wines[4].name + " from the year " + wines[4].year
            + " from  " + wines[4].country " in the region of " + wines[4].region)
            console.log("I like to drink " + wines[5].name + " from the year " + wines[5].year
            + " from  " + wines[5].country " in the region of " + wines[5].region)
            console.log("I like to drink " + wines[6].name + " from the year " + wines[6].year
            + " from  " + wines[6].country " in the region of " + wines[6].region)
            console.log("I like to drink " + wines[7].name + " from the year " + wines[7].year
            + " from  " + wines[7].country " in the region of " + wines[7].region)
        },
        error: function () {
            alert("Error getting data");
        }
    });

});
