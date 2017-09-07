var ColumnChart = function(country1, country2){
  var container = document.querySelector('#column-chart');
  var chart = new Highcharts.Chart({
    chart:{
      type: "column",
      renderTo: container
    },
    title:{
      text: "Our Favourite Programming Languages"
    },
    credits:{
      enabled: false
    },
    series:[
      {
        name: country1.name,
        data: [country1.population, country1.area]
      },
      {
        name: country2.name,
        data: [country2.population, country2.area]
      }
    ],
    xAxis:{
      categories: ['Population', 'Area']
    }
  })
}