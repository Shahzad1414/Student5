// api url

let temperature = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature";
let temperature_24 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/24";
let temperature_48 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/48";
let temperature_72 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/72";
let temperature_168 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/168";
let temperature_730 = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/730";



fetch(temperature)
    .then(res => res.json())
    .then((temp_name) => {
        console.table('Checkout this JSON! ', temp_name[0].date_time);
        temp_Now(temp_name);

    })
    .catch(err => { throw err });


fetch(temperature_24)
    .then(res => res.json())
    .then((Temp_24) => {
        console.table('Checkout this JSON! ', Temp_24);
        temp_24(Temp_24);
    })
    .catch(err => { throw err });


fetch(temperature_48)
    .then(res => res.json())
    .then((Temp_48) => {
        console.table('Checkout this JSON! ', Temp_48);
        temp_48(Temp_48);
    })
    .catch(err => { throw err });


fetch(temperature_72)
    .then(res => res.json())
    .then((Temp_72) => {
        console.table('Checkout this JSON! ', Temp_72);
        temp_72(Temp_72);
    })
    .catch(err => { throw err });


fetch(temperature_168)
    .then(res => res.json())
    .then((Temp_168) => {
        console.table('Checkout this JSON! ', Temp_168);
        temp_168(Temp_168);
    })
    .catch(err => { throw err });


fetch(temperature_730)
    .then(res => res.json())
    .then((Temp_730) => {
        console.table('Checkout this JSON! ', Temp_730);
        temp_730(Temp_730);
    })
    .catch(err => { throw err });

// Latest active measurement type names (based on the latest 50 measurements):

//  Latest 20 temperatures:



function temp_Now(temp_now) {

    var dom = document.getElementById("bartemp_now");
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
    for (let r of temp_now) {

        count = count + 1;
        if (count <= 20) {
            tab += `<tr> 
<td>${count} </td>
<td>${r.date_time.slice(0,10)}</td> 
<td>${r.date_time.slice(11,19)}</td>
<td>Temperature</td>
<td>${r.temperature}</td>        
</tr>`;
        }
        option = {
            xAxis: {
                type: 'category',
                data: temp_now.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_now.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("Temp_now").innerHTML = tab;

}

function temp_24(temp_24) {

    var dom = document.getElementById("bartemp_24");
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
    for (let r of temp_24) {

        count = count + 1;

        tab += `<tr> 
          <td>${count} </td>
          <td>${r.date_time.slice(0,10)}</td> 
          <td>${r.date_time.slice(11,19)}</td>
          <td>Temperature</td>
          <td>${r.temperature}</td>        
        </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: temp_24.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_24.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("temp_24").innerHTML = tab;

}


function temp_48(temp_48) {

    var dom = document.getElementById("bartemp_48");
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
    for (let r of temp_48) {

        count = count + 1;

        tab += `<tr> 
        <td>${count} </td>
        <td>${r.date_time.slice(0,10)}</td> 
        <td>${r.date_time.slice(11,19)}</td>
        <td>Temperature</td>
        <td>${r.temperature}</td>        
      </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: temp_48.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_48.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("temp_48").innerHTML = tab;

}

function temp_72(temp_72) {

    var dom = document.getElementById("bartemp_72");
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
    for (let r of temp_72) {

        count = count + 1;

        tab += `<tr> 
      <td>${count} </td>
      <td>${r.date_time.slice(0,10)}</td> 
      <td>${r.date_time.slice(11,19)}</td>
      <td>Temperature</td>
      <td>${r.temperature}</td>        
    </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: temp_72.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_72.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("temp_72").innerHTML = tab;

}

function temp_168(temp_168) {

    var dom = document.getElementById("bartemp_168");
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
    for (let r of temp_168) {

        count = count + 1;

        tab += `<tr> 
    <td>${count} </td>
    <td>${r.date_time.slice(0,10)}</td> 
    <td>${r.date_time.slice(11,19)}</td>
    <td>Temperature</td>
    <td>${r.temperature}</td>        
  </tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: temp_168.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_168.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("temp_168").innerHTML = tab;

}


function temp_730(temp_730) {

    var dom = document.getElementById("bartemp_730");
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
    for (let r of temp_730) {

        count = count + 1;

        tab += `<tr> 
  <td>${count} </td>
  <td>${r.date_time.slice(0,10)}</td> 
  <td>${r.date_time.slice(11,19)}</td>
  <td>Temperature</td>
  <td>${r.temperature}</td>        
</tr>`;

        option = {
            xAxis: {
                type: 'category',
                data: temp_730.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: temp_730.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("temp_730").innerHTML = tab;

}


document.getElementById('target').addEventListener('change', function() {
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
