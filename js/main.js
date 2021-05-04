document.addEventListener("DOMContentLoaded", function() {
   /* variables */
   const loader=document.querySelector(".loader")
   const menu= document.querySelector(".menu-icon");
   const menucolor=document.querySelectorAll(".menu-icon span")
   const mobilemenu = document.querySelector(".mobile-menu");
   const logo =document.querySelectorAll(".logo svg path");
   const mobile_menu_item=document.querySelectorAll(".mobile-menu li a");
    const section =document.querySelectorAll(".section");
   /* menu */
   menu.addEventListener("click", toggle_menu);

   function toggle_menu() {
    menu.classList.toggle("open");
    mobilemenu.classList.toggle("mobile-menu-open");
     logo.forEach(function(element, index){
         if(element.classList.contains("logo-color")){
             setTimeout(() => {
                element.classList.toggle("logo-color");
             }, 300);
         }else{
            element.classList.toggle("logo-color");
         }
        
    }); 
    menucolor.forEach(function(element, index){
        if(element.classList.contains("menu-color")){
            setTimeout(() => {
               element.classList.toggle("menu-color");
            }, 300);
        }else{
           element.classList.toggle("menu-color");
        }
       
   }); 
   mobile_menu_item.forEach(function(element, index){
    element.classList.toggle("show");
   
}); 
mobile_menu_item.forEach(function(element, index){
    element.addEventListener("click",toggle_menu);
   
}); 
    


}
/* /menu */

loader.classList.add("loaded");

    





});

