// from data.js
var tableData = data;
var tbody = d3.select("tbody")
var filter = d3.select("#datetime")

// console.log(tableData)

// YOUR CODE HERE!
tableData.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var newDate = filter.on("change", function(){
    d3.event.target.value;
})

function selectDate(date) {
    return date.datetime === newDate
}

var selectedDate = tableData.filter(selectDate)

console.log(selectedDate)

