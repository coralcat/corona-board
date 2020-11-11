google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawAgeChart);
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawSeverityChart);
google.charts.setOnLoadCallback(drawTreatmentChart);
google.charts.setOnLoadCallback(drawDaysChart);
google.charts.setOnLoadCallback(drawCurrentChart);

function drawAgeChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age', 'Count'],
    ['0~10', 11],
    ['11~20', 5],
    ['21~30', 10],
    ['31~40', 12],
    ['41~50', 36],
    ['51~60', 17],
    ['61~70', 64],
    ['71~80', 42],
    ['81~', 77],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '나이분포',
    pieHole: 0.4,
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-age'));
  chart.draw(data, options);
}

function drawGenderChart() {
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['남성', 51],
    ['여성', 49],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '성별분포',
    pieHole: 0.4,
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation:{
      duration: 1200,
      easing: 'out',
      startup: true
    },
    /*chartArea: {width: '90%',}
    legend: 'none',
    pieSliceText: 'label',*/
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-gender'));
  chart.draw(data, options);
}

function drawSeverityChart() {
  var data = google.visualization.arrayToDataTable([
    ['Severity', 'Count'],
    ['경증', 51],
    ['중등증', 49],
    ['중증', 49],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '중증도 비율',
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation:{
      duration: 1400,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-severity'));
  chart.draw(data, options);
}

function drawTreatmentChart() {
  var data = google.visualization.arrayToDataTable([
    ['Treatment', 'Count'],
    ['생활치료소', 51],
    ['통원치료', 49],
    ['입원', 49],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '치료 현황',
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation:{
      duration: 1600,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-treatment'));
  chart.draw(data, options);
}

function drawDaysChart() {
  var data = google.visualization.arrayToDataTable([
    ['Days', 'Count'],
    [new Date(2020, 11, 1), 20],
    [new Date(2020, 11, 2), 30],
    [new Date(2020, 11, 3), 24],
    [new Date(2020, 11, 4), 45],
    [new Date(2020, 11, 5), 81],
    [new Date(2020, 11, 6), 52],
    [new Date(2020, 11, 7), 64],
    [new Date(2020, 11, 8), 42],
    [new Date(2020, 11, 9), 15],
    [new Date(2020, 11, 10), 8],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '일별 확진 통계',
    hAxis: {
      title: '일별 확진자', titleTextStyle: {color: '#333'}
      },
    vAxis: {minValue: 0},
    legend: 'none',
    chartArea: {width: '80%',},
    hAxis: {
      format: 'yyyy.MM.dd',
    },
    backgroundColor: 'transparent',
    animation:{
      duration: 800,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart-days'));
  chart.draw(data, options);
}

function drawCurrentChart() {
  var data = google.visualization.arrayToDataTable([
    ['Dates', 'Count'],
    [new Date(2020, 11, 1), 20],
    [new Date(2020, 11, 2), 30],
    [new Date(2020, 11, 3), 24],
    [new Date(2020, 11, 4), 45],
    [new Date(2020, 11, 5), 81],
    [new Date(2020, 11, 6), 52],
    [new Date(2020, 11, 7), 64],
    [new Date(2020, 11, 8), 42],
    [new Date(2020, 11, 9), 15],
    [new Date(2020, 11, 10), 8],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '현재 확진 환자수',
    hAxis: {title: '현재 확진자', titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    legend: 'none',
    chartArea: {width: '80%',},
    hAxis: {
      format: 'yyyy.MM.dd',
    },
    backgroundColor: 'transparent',
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart-current'));
  chart.draw(data, options);
}
