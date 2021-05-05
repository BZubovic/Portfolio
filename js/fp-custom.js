const line=document.querySelectorAll(".span");
const contentleft=document.querySelectorAll(".content-left");
const contentright=document.querySelectorAll(".content-right");
const desktop_nav=document.querySelectorAll(".desktop ul li a");
const mobile_nav=document.querySelectorAll(".mobile-menu li a");
new fullpage('#fullpage', {
    //options here
    anchors:['top', 'recent','about','contact'],
    autoScrolling:true,
    menu: '#myMenu',
    easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    scrollingSpeed: 1000,
    scrollHorizontally: true,
    css3:true,

    onLeave: function(origin, destination, direction){
		var leavingSection = this;
        
//-----------------line -  active section indicators animations--------------------//
     
            line.forEach(function(element, index){
                if(index==destination.index){
                    element.style.transform="translateY(0)";
                    
                }if(index<=destination.index){
                   element.style.transform="translateY(100%)";
                }if(index>=destination.index){
                    element.style.transform="translateY(-100%)";
                 }
            });

        line[destination.index].classList.add("active-line");
        line[origin.index].classList.remove("active-line");
        desktop_nav[origin.index].classList.remove("current-page")
        desktop_nav[destination.index].classList.add("current-page");
        mobile_nav[origin.index].classList.remove("current")
        mobile_nav[destination.index].classList.add("current");

//------------------------------------------------------------------------------//      



//----------------------section elements animations--------------------------//

        //on leave slide wait 200ms and animate next slide elements into view
         setTimeout(function(){ 
            contentleft[destination.index].querySelector(".heading").style.transform="translateX(0)";
            contentleft[destination.index].querySelector(".highlight").style.transform="translateX(0)";
            contentleft[destination.index].querySelector(".button").style.transform="translateX(0)";    
            contentright[destination.index].querySelector(".heroimg").style.transform="translateX(0)";
        }, 200);
         

        
		
	},
    //after slide finished scrolling, translate previous slide elements outside
    afterLoad: function(origin, destination, direction){
		var loadedSection = this;
     
        contentleft[origin.index].querySelector(".heading").style.transform="translateX(-300%)";
         contentleft[origin.index].querySelector(".highlight").style.transform="translateX(-200%)";
         contentleft[origin.index].querySelector(".button").style.transform="translateX(-200%)";
         contentright[origin.index].querySelector(".heroimg").style.transform="translateX(200%)";
        
       
        
	},

    //after initial page render, get active section and animate elements into view
    afterRender: function(){
		var loadedSection = this;
        const active=fullpage_api.getActiveSection();
         
         contentleft[active.index].querySelector(".heading").style.transform="translateX(0)";
         contentleft[active.index].querySelector(".highlight").style.transform="translateX(0)";
         contentleft[active.index].querySelector(".button").style.transform="translateX(0)";
         contentright[active.index].querySelector(".heroimg").style.transform="translateX(0)";
        
        }

    });
//------------------------------------------------------------------------------//    