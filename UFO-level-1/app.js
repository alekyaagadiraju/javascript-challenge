// from data.js
var dataTable = data;

// YOUR CODE HERE!
// Table references
var tbody = d3.select("tbody");

// Begin loading data/ creating table
function buildTable(data) {
   
    tbody.html("");
    //Loop through each data object, append, & add value

    data.forEach((dataRow) => {
        var row = tbody.append("tr");
  
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

// Include button function
  function handleClick() {

// Filer data using date
  var date = d3.select("#datetime").property("value");
  let filteredData = dataTable
  if (date) {
    
    filteredData = filteredData.filter(row => row.datetime === date);
  }

// Create table w/ filtered data
  buildTable(filteredData);
}

// Filter w/ button click
  d3.selectAll("#filter-btn").on("click", handleClick);

// Create table
  buildTable(dataTable);
  

