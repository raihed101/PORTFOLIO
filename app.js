 // animations for proejct section

 window.sr = ScrollReveal();
 sr.reveal('.navbar',{
     duration: 2000,
     origin: "bottom"
 });
 
 sr.reveal(".mainHeader", {
     duration: 2000,
     origin: "top", 
     distance: "300px"
 });
 
 sr.reveal(".featuretteR", {
     duration: 2000,
     origin: 'right',
     distance: "300px",
     viewFactor:0.2
 });
 sr.reveal(".featuretteL", {
     duration: 2000,
     origin: 'left',
     distance: "300px",
     viewFactor:0.2
 });
 
//  sr.reveal("#contact", {
//      duration: 2000,
//      origin: 'left',
//      origin:"bottom"
     
//  });
 
 sr.reveal(".projectSec", {
     duration: 2000,
     origin: 'left',
     distance: "300px",
     viewFactor:0.2
 });
 
 // scrollling animation
 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
 
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 
 
//  //draw circle
//  var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
//  for (var i = 0; i < doughnutArray.length; i++) {
//    doughnutArray[i].lineWidth = 5; //thickness of the line
//    doughnutArray[i].fillStyle = '#eaeaea';
//    doughnutArray[i].strokeStyle = "#eaeaea";
//    doughnutArray[i].beginPath();
//    doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
//    doughnutArray[i].stroke();
//  }
//  window.onload = function() {
//      loadSkills1();
//      loadSkills2();
//      loadSkills3();
//      loadSkills4();
//    }
//    /*Load skills one function*/
//  function loadSkills1() {
//    var ctx = document.getElementById('skill1').getContext('2d');
//    var al = 0;
//    var start = 4.72;
//    var cw = ctx.canvas.width;
//    var ch = ctx.canvas.height;
//    var diff;
 
//    function progressSim() {
//      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
//      ctx.clearRect(0, 0, cw, ch);
//      ctx.lineWidth = 5; //thickness of the line
//      ctx.fillStyle = '#eaeaea';
//      ctx.strokeStyle = "rgb(102, 102, 102)";
//      ctx.textAlign = 'center';
//      ctx.font = "20px Monument Extended";
//      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
//      ctx.beginPath();
//      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
//      ctx.stroke();
//      if (al >= 85) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
//        clearTimeout(sim);
//        // Add scripting here that will run when progress completes
//      }
//      al++;
//    }
//    var sim = setInterval(progressSim, 30); //speed  	
//  }
//  /*loadSkills2 function*/
//  function loadSkills2() {
//    var ctx = document.getElementById('skill2').getContext('2d');
//    var al = 0;
//    var start = 4.72;
//    var cw = ctx.canvas.width;
//    var ch = ctx.canvas.height;
//    var diff;
 
//    function progressSim() {
//      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
//      ctx.clearRect(0, 0, cw, ch);
//      ctx.lineWidth = 5; //thickness of the line
//      ctx.fillStyle = '#eaeaea';
//      ctx.strokeStyle = "rgb(102, 102, 102)";
//      ctx.textAlign = 'center';
//      ctx.font = "20px Monument Extended";
//      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
//      ctx.beginPath();
//      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
//      ctx.stroke();
//      if (al >= 75) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
//        clearTimeout(sim);
//        // Add scripting here that will run when progress completes
//      }
//      al++;
//    }
//    var sim = setInterval(progressSim, 30); //speed
//  }
 
//  /* loadSkill3 function*/
//  function loadSkills3() {
//    var ctx = document.getElementById('skill3').getContext('2d');
//    var al = 0;
//    var start = 4.72;
//    var cw = ctx.canvas.width;
//    var ch = ctx.canvas.height;
//    var diff;
 
//    function progressSim() {
//      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
//      ctx.clearRect(0, 0, cw, ch);
//      ctx.lineWidth = 5; //thickness of the line
//      ctx.fillStyle = '#eaeaea';
//      ctx.strokeStyle = "rgb(102, 102, 102)";
//      ctx.textAlign = 'center';
//      ctx.font = "20px Monument Extended";
//      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
//      ctx.beginPath();
//      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
//      ctx.stroke();
//      if (al >= 55) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
//        clearTimeout(sim);
//        // Add scripting here that will run when progress completes
//      }
//      al++;
//    }
//    var sim = setInterval(progressSim, 30); //speed
//  }
//  /* loadSkill4 function*/
//  function loadSkills4() {
//    var ctx = document.getElementById('skill4').getContext('2d');
//    var al = 0;
//    var start = 4.72;
//    var cw = ctx.canvas.width;
//    var ch = ctx.canvas.height;
//    var diff;
 
//    function progressSim() {
//      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
//      ctx.clearRect(0, 0, cw, ch);
//      ctx.lineWidth = 5; //thickness of the line
//      ctx.fillStyle = '#eaeaea';
//      ctx.strokeStyle = "rgb(102, 102, 102)";
//      ctx.textAlign = 'center';
//      ctx.font = "20px Monument Extended";
//      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
//      ctx.beginPath();
//      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
//      ctx.stroke();
//      if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
//        clearTimeout(sim);
//        // Add scripting here that will run when progress completes
//      }
//      al++;
//    }
//    var sim = setInterval(progressSim, 30); //speed
//  }
 