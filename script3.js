// api url

let wind_direction = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23";
let wind_direction_24 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23";
let wind_direction_48 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/48";
let wind_direction_72 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/72";
let wind_direction_168 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/168";
let wind_direction_730 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/730";

// Latest active measurement type names (based on the latest 50 measurements):
fetch(wind_direction)
    .then(res => res.json())
    .then((wind_dir) => {
        console.table('Checkout this JSON! ', wind_dir);
        view3(wind_dir);
    })
    .catch(err => { throw err });


fetch(wind_direction_24)
    .then(res => res.json())
    .then((Wind_24) => {
        console.table('Checkout this JSON! ', Wind_24);
        wind_24(Wind_24);
    })
    .catch(err => { throw err });


fetch(wind_direction_48)
    .then(res => res.json())
    .then((Wind_48) => {
        console.table('Checkout this JSON! ', Wind_48);
        wind_48(Wind_48);
    })
    .catch(err => { throw err });

fetch(wind_direction_72)
    .then(res => res.json())
    .then((Wind_72) => {
        console.table('Checkout this JSON! ', Wind_72);
        wind_72(Wind_72);
    })
    .catch(err => { throw err });

fetch(wind_direction_168)
    .then(res => res.json())
    .then((Wind_168) => {
        console.table('Checkout this JSON! ', Wind_168);
        wind_168(Wind_168);
    })
    .catch(err => { throw err });


fetch(wind_direction_730)
    .then(res => res.json())
    .then((Wind_730) => {
        console.table('Checkout this JSON! ', Wind_730);
        wind_730(Wind_730);
    })
    .catch(err => { throw err });


function view3(View3data) {

    var dom = document.getElementById("Chartview3");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
    <th>Row_Number</th>
    <th>Date</th>
    <th>Time</th>
    <th>Measurement Type</th>
    <th>value</th>
   </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of View3data) {

        count = count + 1;
        if (count <= 20) {
            tab += `<tr> 
<td>${count} </td>
<td>${r.date_time.slice(0,10)}</td> 
<td>${r.date_time.slice(11,19)}</td>
<td>wind_direction</td>
<td>${r.wind_direction}</td>
</tr>`;
        }
        option = {
            xAxis: {
                type: 'category',
                data: View3data.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: View3data.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("View3").innerHTML = tab;
}

function wind_24(wind_24) {

    var dom = document.getElementById("barwind_24");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement Type</th>
  <th>Value</th>
 </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of wind_24) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Wind Direction</td>
          <td>${r.wind_direction}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: wind_24.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: wind_24.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("wind_24").innerHTML = tab;

}


function wind_48(wind_48) {

    var dom = document.getElementById("barwind_48");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement Type</th>
  <th>Value</th>
 </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of wind_48) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Wind Direction</td>
          <td>${r.wind_direction}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: wind_48.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: wind_48.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("wind_48").innerHTML = tab;

}


function wind_72(wind_72) {

    var dom = document.getElementById("barwind_72");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement Type</th>
  <th>Value</th>
 </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of wind_72) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Wind Direction</td>
          <td>${r.wind_direction}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: wind_72.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: wind_72.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("wind_72").innerHTML = tab;

}


function wind_168(wind_168) {

    var dom = document.getElementById("barwind_168");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement Type</th>
  <th>Value</th>
 </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of wind_168) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Wind Direction</td>
          <td>${r.wind_direction}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: wind_168.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: wind_168.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("wind_168").innerHTML = tab;

}


function wind_730(wind_730) {

    var dom = document.getElementById("barwind_730");
    var myChart = echarts.init(dom);
    var app = {};

    var option;
    let tab =
        `<tr>
  <th>Row_Number</th>
  <th>Date</th>
  <th>Time</th>
  <th>Measurement Type</th>
  <th>Value</th>
 </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of wind_730) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Wind Direction</td>
          <td>${r.wind_direction}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: wind_730.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: wind_730.map(item => item.wind_direction),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("wind_730").innerHTML = tab;

}


document.getElementById('targetwind').addEventListener('change', function() {
    'use strict';
    var vis = document.querySelector('.vis'),
        target = document.getElementById(this.value);
    if (vis !== null) {
        vis.className = 'inv';
    }
    if (target !== null) {
        target.className = 'vis';
    }
});