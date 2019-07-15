
        // NOTIFICATIONS

const notificationBell = document.querySelector('.bell');
const notifB = document.querySelector('.notif');
let notifBox = `
    <div class="notifBox">
    <h3>Notifications</h3>
    <p class="close"> X <p>
        <div class="activity__container">
        <img src="images/member-1.jpg" alt="">
        <div class="activity__text-notif">
            <p>Victoria Chambers commented on YourApp&trade; tips</p>
            <a href="#">2 hours ago</a>
        </div>
        </div>
        <div class="activity__container">
            <img src="images/member-2.jpg" alt="">
            <div class="activity__text-notif">
                <p>Dale Nyrd likes the post Facebook Changes</p>
                <a href="#">4 hours ago</a>
            </div>
        </div>
    </div>`

notificationBell.addEventListener("click", () => {
    notifB.innerHTML = notifBox;    
})

notifB.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains('close')) {
        
        notifB.innerHTML = "";
        notifB.style.transition = "all 0.5s ease";
        notifB.style.backgroundColor = "transparent";  
    }
})

        // TRAFFIC 
let trafficCanvas = document.getElementById('traffic-chart');
let trafficNAv = document.querySelector('.traffic__nav');


let trafficGraph = new Chart(trafficCanvas, {
    "type": 'line',
    "data": {
    labels: ['02','04','06','08','10','12','14','16','18','20','22','00'],
    datasets: [{
            data: [750, 550, 900, 2200, 1500, 3750, 1850, 2850, 4250, 5500, 3200,
    1500],
     backgroundColor: 'rgba(116, 119, 191, .3)',
     borderColor: '#7477BF',
     pointBackgroundColor: '#fff',
     borderWidth: 1,
     lineTension: 0,
     responsive: true
    
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

trafficNAv.addEventListener('click', (e) => {
    const frequency = e.target;

                    //HOURLY graph
    if (frequency.innerHTML.toLowerCase() === 'hourly') {
        new Chart(trafficCanvas, {
            "type": 'line',
            "data": {
             labels: ['02','04','06','08','10','12','14','16','18','20','22','00'],
             datasets: [{
                  data: [750, 550, 900, 2200, 1500, 3750, 1850, 2850, 4250, 5500, 3200,
             1500],
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
                    //DAILY graph
    } else if (frequency.innerHTML.toLowerCase() === 'daily') {
        new Chart(trafficCanvas, {
            "type": 'line',
            "data": {
             labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
             datasets: [{
                  data: [1500, 3250, 2240, 4500, 5300, 8750, 4250, 9000],
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
                     }],
                     xAxes: [{
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
                    //WEEKLY graph
    } else if (frequency.innerHTML.toLowerCase() === 'weekly') {
        new Chart(trafficCanvas, {
            "type": 'line',
            "data": {
             labels: ['02/11/19','09/11/19','16/11/19','23/11/19','30/11/19','07/12/19','14/12/19','09/11/19','10/11/19','11/11/19'],
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
                     }],
                     xAxes: [{
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
                    //MONTHLY graph
    } else if (frequency.innerHTML.toLowerCase() === 'monthly') {
        new Chart(trafficCanvas, {
            "type": 'line',
            "data": {
             labels: ['Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Oct'],
             datasets: [{
                  data: [7500, 12500, 10000, 20000, 15000, 17050, 10250, 18050, 20250, 10500,
             20500],
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
                     }],
                     xAxes: [{
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
        
    }
})


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

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            boderAlign: 'inner',
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    },
    options: {
        legend: {
         position: 'right',
         labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }
});
    
    // MESSAGEs
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("btn-message");
let alertError = document.getElementById("alert-message");

send.addEventListener('click', (e) => {
    e.preventDefault();
    const element = e.target;
    let messageBox =
    alertError.style.display = "flex";
    alertError.innerHTML = `
    <div class="error-message">
        <p></p>
        <button>Got it!</button>
     </div>
    `
    const closeBtn = document.querySelector('.error-message button');
    closeBtn.addEventListener('click', (e) => {
        alertError.innerHTML = '';
        alertError.style.display = "none"; 
    });
    const messageError = document.querySelector('.error-message p');

    if (user.value === "" && message.value === "") {
        messageError.innerHTML = "Please fill out user and message fields before sending";
        user.style.borderColor = "red";
        message.style.borderColor = "red";       

    }    else if (user.value === '') {
        messageError.innerHTML = "Please fill out user field before sending";
        user.style.borderColor = "red";
        message.style.borderColor = "#bfbfc5";

    }    else if (message.value === '') {
        user.style.borderColor = "#bfbfc5";
        messageError.innerHTML ="Please fill out message field before sending";
        message.style.borderColor = "red";       

    }   else {
        messageError.innerHTML =`Message successfully sent to ${user.value}`;
        user.style.borderColor = "#bfbfc5";
        message.style.borderColor = "#bfbfc5";
    }
    
})