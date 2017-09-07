// Modify the column chart constructor function so you can pass it information as arguments in app.js rather than setting it in the columnChart.js file.
// Try making a chart using the Rest Countries API data:
// Make an HTTP request to the API.
// Use the data from this request and pass it into one of your chart constructor functions - you may need to loop through it or use a method on it to change it into the appropriate format.
var countries = []
var selected1 = false;
var selected2 = false;

window.addEventListener('load', function(){
  // new PieChart();
  var selector1 = document.getElementById('country1');
  var selector2 = document.getElementById('country2');
  makeCountriesRequest(loadCountries);
  countries = JSON.parse(localStorage.getItem('countries')) || [];


})

var loadCountries = function(){
  if(this.status !==200) return;
  var jsonString = this.responseText;
  localStorage.setItem('countries', jsonString);
  var countries = JSON.parse(jsonString);
  var selector1 = document.getElementById('country1');
  selector1.addEventListener('change', populateChartName);
  var selector2 = document.getElementById('country2');
  selector2.addEventListener('change', populateChartName);
  selectPopulate(selector1, countries);
  selectPopulate(selector2, countries);



}


var makeCountriesRequest = function(callback){
  //create xhr
  var request = new XMLHttpRequest();
  //get the data
  request.open("GET", 'https://restcountries.eu/rest/v2')

  request.addEventListener('load', callback);

  request.send();

}

var selectPopulate = function(container, countries) {
  countries.forEach(function(country, index){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    container.appendChild(option);
  })
}

var populateChartName = function(event){
  var index = event.target.value
  var selectedCountry = countries[index];
  createGraph(selectedCountry);
}

var createGraph = function(country){

  if(selected1){
    selected2 = country
  }
  else{
    selected1 = country
  }

  if(selected1 && selected2){
    new ColumnChart(selected1, selected2);
  }
}
