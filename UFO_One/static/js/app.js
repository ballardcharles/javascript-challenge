// from data.js
var tableData = data;
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn")
var form = d3.select("#form")

// console.log(tableData)

// YOUR CODE HERE!
tableData.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

function runFilter(event) {
    d3.event.preventDefault();

    tbody.html("")

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

button.on("click", runFilter)
form.on("submit", runFilter)
