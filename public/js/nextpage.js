   AFRAME.registerComponent('nextpage', {
 
    
   init: function () {
     
      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#HVHS Library");
      
      let gonextpage = () => {
      sky.setAttribute("src", "# HVHS Library");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", true)})
    }

      this.el.addEventListener('click', gonextpage);
        
   }});


