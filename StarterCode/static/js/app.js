// from data.js
var tableData = data;
var tbody = d3.select("tbody")
var filter = d3.select("#datetime")

// console.log(tableData)

// YOUR CODE HERE!


filter.on("change", runFilter)

function runFilter() {
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime")

    var newDate = inputDate.property("value")

    var filterDate = tableData.filter(sighting => sighting.datetime === newDate)

    console.log(filterDate)
    if (newDate){
        filterDate.forEach((alienSightings) => {
            var row = tbody.append("tr");
            Object.entries(alienSightings).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
    } else {
        tableData.forEach((alienSightings) => {
            var row = tbody.append("tr");
            Object.entries(alienSightings).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
    }
    
}



// function selectDate(date) {
//     return date.datetime === newDate
// }

// var selectedDate = tableData.filter(selectDate)

// console.log(selectedDate)

