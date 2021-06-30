$(document).ready(function(){
			
    //COVER PAGE ANIMATION
    $("#home h1, #home h3, #home .bottomnav, nav").addClass("fadein");

    //SMOOTH SCROLLING - TO AVOID JUMPING STRAIGHT TO SECTION
    $('a[href*="#"]:not([href="#"])').click(function(event){
        event.preventDefault(); //to avoid default anchor link behavior ie jump to anchor by default
        var hash = this.hash; //takes the part #... of the clicked link as a string for instance "#music"
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },500)
    });

    //CHANGE OF CURRENT SECTION, USING WAYPOINT PLUGIN
    
    function changeNav (row){
        $(".currentSection").removeClass("currentSection");
        var id = row.id;
        $('nav a[href=#'+id+']').addClass("currentSection");
    }
    
    $(".row").waypoint(function(direction){
        //'this' is the waypoint instance, element is the selector i.e. .row in this case
        if (direction==='down'){ 
            changeNav(this.element);
        }
    },{offset:'30%'}); // change to current section when 30% into the section
    $(".row").waypoint(function(direction){
        if (direction==='up'){ 
            changeNav(this.element); 
        }
    },{offset:'-30%'});
});