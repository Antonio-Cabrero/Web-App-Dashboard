


        // TRAFFIC 
let trafficCanvas = document.getElementById('traffic-chart');

const hourlyOpt = document.getElementsByClassName("traffic__nav-link")

let trafficHourly = new Chart(trafficCanvas, {
       "type": 'line',
       "data": {
        labels: ['2  ','6  ','10  ','14  ','18  ','20  ','24  ','4  ','8  ','12  ','16  '],
        datasets: [{
             data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: '#7477BF',
        pointBackgroundColor: '#fff',
        borderWidth: 1,
        lineTension: 0,
        responsive: true,
       
        }]
        },
       "options": {
        aspectRatio: 2.5,
            scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero:true
                }
                }]
            },
            legend : {
                display: false
            }
        }
});

// let trafficDaily = new Chart(trafficCanvas, {
//     "type": 'line',
//     "data": {
//      labels: ['02/11/19','03/11/19','04/11/19','05/11/19','06/11/19','07/11/19','08/11/19','09/11/19','10/11/19','11/11/19'],
//      datasets: [{
//           data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//      2500],
//      backgroundColor: 'rgba(116, 119, 191, .3)',
//      borderColor: '#7477BF',
//      pointBackgroundColor: '#fff',
//      borderWidth: 1,
//      lineTension: 0,
//      responsive: true,
    
//      }]
//      },
//     "options": {
//      aspectRatio: 2.5,
//      animation: {
//          duration: 0
//      },
//          scales: {
//              yAxes: [{
//                  ticks: {
//                  beginAtZero:true
//              }
//              }],
//              xAxes: [{
//                  ticks: {
//                  beginAtZero:true
//              }
//              }]
//          },
//          legend : {
//              display: false
//          }
//      }
// });
    // BAR CHART
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
    };

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
              beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
      }
    }

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

    // DOUGNUT chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
     position: 'right',
     labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});
    
    // MESSAGEs
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("btn-message");

send.addEventListener('click', () => {

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending")
    }   else if (user.value === '') {
        alert("Please fill out user field before sending") 
    }    else if (message.value === '') {
        alert("Please fill out message field before sending")
    }   else {
        alert(`Message successfully sent to ${user.value}`)
    }
    
})