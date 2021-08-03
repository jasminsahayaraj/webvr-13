/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

  

AFRAME.registerComponent('disappear', {       
  
  init: function () {      
  
  }  

});

AFRAME.registerComponent('disappear', {
  
  init: function () {
  
    let disappearfunc = () => {
      this.el.setAttribute("visible", false);
    };
    
    this.el.addEventListener('click', disappearfunc);
    
  }
  
 });

// Simple example function: 
let addingfunction = (x, y) => {
  return x + y;   // The function returns the product of x and y
}

console.log(addingfunction(3, 5)); //console will log 8

AFRAME.registerComponent('sphereexpand', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");

      let sphereloader = () => {
      sky.setAttribute("src", "#360 photo 2");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      }

      this.el.addEventListener('click', sphereloader);
        
   }});
