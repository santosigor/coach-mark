$(document).ready(function (){

  // tabs
  $(document).on('click', '.ps-gdv__tabs a', function (e) {
    e.preventDefault();
    var value = $(this).attr('ps-gdv-value-chart');
    console.log(value)
  });

});

// inicia o grafico
function psGdvGraficoPerformanceDeProducao() {
  return {
    labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
    datasets: [
      {
        label: "2018",
        data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
      },
      {
        label: "2019",
        data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
      },
      {
        label: "2020",
        data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
      }
    ]
  }
}