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

    var inputValue = d3.select("#input")

    var searchValue = inputValue.property("value")

    var filteredValue = tableData.filter(sighting => sighting.datetime === searchValue ||
                                          sighting.city === searchValue ||
                                          sighting.state === searchValue ||
                                          sighting.country === searchValue ||
                                          sighting.shape === searchValue);

    console.log(filteredValue)

    if (searchValue){
        filteredValue.forEach((alienSightings) => {
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