document.addEventListener("DOMContentLoaded", function() {
   /* variables */
   const loader=document.querySelector(".loader");
   const contact=document.querySelector(".popup-form");
   const overlay=document.querySelector(".form-container");
   const closeform=document.querySelector(".close");
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

 /* contact form */   

contact.addEventListener("click",function openModal(params) {
    fullpage_api.setAllowScrolling(false);
    document.querySelector(".form-container").classList.add("open-modal");
    
    document.querySelector(".contact-form").classList.add("slide-in-form");

});
closeform.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal(event) {
    if (event.target === this) {
        fullpage_api.setAllowScrolling(true);
        document.querySelector(".form-container").classList.remove("open-modal");
        document.querySelector(".contact-form").classList.remove("slide-in-form");
        }
}







});

