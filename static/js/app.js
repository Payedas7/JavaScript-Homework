let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#filter-btn");
let $reloadButton = document.querySelector("#reload-btn");

// from data.js
var tableData = data;

// YOUR CODE HERE!
$searchButton.addEventListener("click", newdateSearchClick);
$reloadButton.addEventListener("click", resetClick);

function dynamicTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < tableData.length; i++) {
        // Get current ufo info object and its fields
        let info = tableData[i];
        let fields = Object.keys(info);
        // Create a new row in the tbody
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            // For every field in info object, create new cell and set its inner
            // text to be the current value at the current info field
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function newdateSearchClick() {

    let filterDate = $dateInput.value.trim();
	let filterCity = $cityInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();

    tableData = data.filter(function(payelSightufo) {
        let searchDate = payelSightufo.datetime;
		let searchCity = payelSightufo.city.toLowerCase();
		let searchState = payelSightufo.state.toLowerCase();
		let searchCountry = payelSightufo.country.toLowerCase();
		let searchShape = payelSightufo.shape.toLowerCase();
        // If statements to match search criteria with filtered criteria
        if (
             (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    dynamicTable();

    // Clear input fields
    $dateInput.value = "";
	$cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

function resetClick() {

      
	   tableData = data.filter(function(payelSightufo) {
        // this is to reset the filter button
        if (
             (1 === 1 )
        ) {
            return true;
        }
        return false;
    });
    dynamicTable();

 
}


dynamicTable();

