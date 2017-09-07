var PieChart = function(){
  var container = document.querySelector('#pie-chart')

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    credits:{
      enabled: false
    },
    series: [
      {
        name: "Type", 
        data: [
          {
            name: "Grass",
            y: 35,
            color: "#00ba2f"
          },
          {
            name: "Water",
            y: 15,
            color: "#73b7ff"
          },
          {
            name:"Fire",
            y:4,
            color:"#ffac33"
          }
        ]
      }
    ]

  });
}