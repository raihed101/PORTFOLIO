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
 

 