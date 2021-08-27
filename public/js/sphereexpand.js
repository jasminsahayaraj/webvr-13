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

AFRAME.registerComponent('sphereexpand', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");

      let sphereloader = () => {
      sky.setAttribute("src", "#HVHS Library");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      }

      this.el.addEventListener('click', sphereloader);
        
   }});