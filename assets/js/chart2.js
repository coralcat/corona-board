google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawAgeChart);
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawSeverityChart);
google.charts.setOnLoadCallback(drawTreatmentChart);
google.charts.setOnLoadCallback(drawHospitalChart);
google.charts.setOnLoadCallback(drawDaysChart);
google.charts.setOnLoadCallback(drawTotalChart);

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
    animation: {
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
    animation: {
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
    ['1', 51],
    ['2', 49],
    ['3', 49],
    ['4', 49],
    ['5', 49],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '중증도 비율',
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation: {
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
    animation: {
      duration: 1600,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-treatment'));
  chart.draw(data, options);
}

function drawHospitalChart() {
  var data = google.visualization.arrayToDataTable([
    ['Hospital', 'Count'],
    ['수원', 51],
    ['파주', 51],
    ['포천', 51],
    ['의정부', 49],
    ['안', 49],
    ['이천', 49],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '병원 현황',
    legend: {position: 'bottom',},
    backgroundColor: 'transparent',
    animation: {
      duration: 1600,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-hospital'));
  chart.draw(data, options);
}

function drawDaysChart() {
  var data = google.visualization.arrayToDataTable([
    ['Days', 'Confirmation', 'Discharge'],
    [new Date(2020, 11, 1), 20, 1],
    [new Date(2020, 11, 2), 30, 3],
    [new Date(2020, 11, 3), 24, 4],
    [new Date(2020, 11, 4), 45, 8],
    [new Date(2020, 11, 5), 81, 12],
    [new Date(2020, 11, 6), 52, 15],
    [new Date(2020, 11, 7), 64, 22],
    [new Date(2020, 11, 8), 42, 18],
    [new Date(2020, 11, 9), 15, 25],
    [new Date(2020, 11, 10), 8, 30],
  ]);

  var options = {
    colors: ['#5a8cd7', '#ff9c87', '#a5ccdc', '#739086', '#a4bdbe', '#D5B9B1', '#D8D8D6', '#BEBC88', '#194656'],
    title: '일별 확진/퇴원 환자 통계',
    hAxis: {
      titleTextStyle: {color: '#333'},
      format: 'yyyy.MM.dd',
    },
    vAxis: {minValue: 0},
    legend: 'none',
    chartArea: {width: '80%',},
    backgroundColor: 'transparent',
    animation: {
      duration: 800,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart-days'));
  chart.draw(data, options);
}

function drawTotalChart() {
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
    title: '총 누적 임상시험 환자 ',
    hAxis: {
      titleTextStyle: {color: '#333'},
      format: 'yyyy.MM.dd',
    },
    vAxis: {minValue: 0},
    legend: 'none',
    chartArea: {width: '80%',},
    backgroundColor: 'transparent',
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart-total'));
  chart.draw(data, options);
}
