// ANALOG CLOCK
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();
// To keep ticking and updating the time in 1000ms (1s)
setInterval(drawClock, 1000);

// Main function to display the clock
function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    drawHand(ctx,radius);
}

// Draws the surface
function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

// Draws the numbers
function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

// Draws the time
function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

// Draws the needles
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius = canvas2.height / 2;
ctx2.translate(radius, radius);
radius = radius * 0.90
drawClock2();
// To keep ticking and updating the time in 1000ms (1s)
setInterval(drawClock2, 1000);

// Main function to display the clock
function drawClock2() {
    ctx2.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx2.fillStyle = "white";
    ctx2.fill();
    drawFace2(ctx2, radius);
    drawNumbers2(ctx2, radius);
    drawTime2(ctx2, radius);
    drawHand2(ctx2,radius);
}

// Draws the surface
function drawFace2(ctx2, radius) {
    var grad;

    ctx2.beginPath();
    ctx2.arc(0, 0, radius, 0, 2*Math.PI);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    grad = ctx2.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx2.strokeStyle = grad;
    ctx2.lineWidth = radius*0.1;
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx2.fillStyle = '#333';
    ctx2.fill();
}

// Draws the numbers
function drawNumbers2(ctx2, radius) {
    var ang;
    var num;
    ctx2.font = radius*0.15 + "px arial";
    ctx2.textBaseline="middle";
    ctx2.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx2.rotate(ang);
        ctx2.translate(0, -radius*0.85);
        ctx2.rotate(-ang);
        ctx2.fillText(num.toString(), 0, 0);
        ctx2.rotate(ang);
        ctx2.translate(0, radius*0.85);
        ctx2.rotate(-ang);
    }
}

// Draws the time
function drawTime2(ctx2, radius){
    var now = new Date();
    var hour = now.getHours() + 5;
    var minute = now.getMinutes() + 30;
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand2(ctx2, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand2(ctx2, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand2(ctx2, second, radius*0.9, radius*0.02);
}

// Draws the needles
function drawHand2(ctx2, pos, length, width) {
    ctx2.beginPath();
    ctx2.lineWidth = width;
    ctx2.lineCap = "round";
    ctx2.moveTo(0,0);
    ctx2.rotate(pos);
    ctx2.lineTo(0, -length);
    ctx2.stroke();
    ctx2.rotate(-pos);
}




// DIGITAL CLOCK
function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

function digiclock() {
    var d, h, m, s;

    d = new Date;

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    da = d.getDate();
    mo = months[d.getMonth()];
    ye = d.getFullYear();
    wd = days[d.getDay()];

    h2 = h + 5;
    m2 = m + 30;
    if(m2>=60) {
        m2 = m2%60
        h2 += 1
    }

    if(h >= 12){
        setText('suffix', 'PM');
    }
    else{
        setText('suffix', 'AM');
    }
    
    if(h != 12){
        h %= 12;
    }

    if(h2 >= 12){
        setText('suffix2', 'PM');
    }
    else{
        setText('suffix2', 'AM');
    }
    
    if(h2 != 12){
        h2 %= 12;
    }

    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    setText('month',mo)
    setText('year',ye)
    setText('date',da)
    setText('day',wd)

    setText('sec2', s);
    setText('min2', m2);
    setText('hr2', h2);
    setText('month2',mo)
    setText('year2',ye)
    setText('date2',da)
    setText('day2',wd)

    setTimeout(digiclock, 1000);    
}


// Location - Map

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 14
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Please provide permission to access to location.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


window.onload=digiclock;