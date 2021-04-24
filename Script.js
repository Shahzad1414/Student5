// api url

let weather = "http://webapi19sa-1.course.tamk.cloud/v1/weather";
let temperature = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature";
let wind_speed = "http://webapi19sa-1.course.tamk.cloud/v1/weather/latest/wind_speed";
let wind_direction = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23";
let weather_name = "http://webapi19sa-1.course.tamk.cloud/v1/weather/names";



// Latest active measurement type names (based on the latest 50 measurements):
fetch(wind_direction)
    .then(res => res.json())
    .then((wind_dir) => {
        console.table('Checkout this JSON! ', wind_dir);
        view3(wind_dir);
    })
    .catch(err => { throw err });



fetch(weather_name)
    .then(res => res.json())
    .then((weath_name) => {
        console.table('Checkout this JSON! ', weath_name);

    })
    .catch(err => { throw err });

//  Latest 20 temperatures:

fetch(temperature)
    .then(res => res.json())
    .then((temp_name) => {
        console.table('Checkout this JSON! ', temp_name[0].date_time);
        show_temp(temp_name);

    })
    .catch(err => { throw err });

//  Latest 500 measurements:

fetch(weather)
    .then(res => res.json())
    .then((out) => {
        console.table('Checkout this JSON! ', out);
        show(out);
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

function show_temp(data) {

    var dom = document.getElementById("container");
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
    for (let r of data) {

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
                data: data.map(item => item.date_time.slice(11, 19))
                    // [r.date_time.slice(11, 19)]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: data.map(item => item.temperature),
                type: 'bar'
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("Temperature").innerHTML = tab;
}


function show(data) {
    let tab =
        `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of data) {

        count = count + 1;
        if (count <= 50) {
            tab += `<tr> 
    <td>${count} </td>
    <td>${r.date_time.slice(0,10)}</td> 
    <td>${r.date_time.slice(11,19)}</td>
    <td>${Object.keys(r.data)}</td>
    <td>${Object.values(r.data)}</td>
              
</tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}