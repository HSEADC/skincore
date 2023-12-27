$(document).ready(function(){ 
    $(".menu_web").click(function() {
        $(this).toggleClass("exist");   
        // if ($(this).hasClass("non-exist")) {
        //     $(this).removeClass("non-exist");
        //     $(this).toggleClass("exist");   
        // }
        if ($(".menu_web").hasClass("exist")) {
            $(this).addClass("menu_web00");
            $(".search").addClass("s_web");   
            $(".menu").addClass("menu_web0");  
            $(".link, .tags").addClass("menu_web01");   
            $(".link").addClass("link_web");  
            $(".tag1").addClass("tag1_web"); 
            $(".tag1").css('margin-left', '4vw');  
            $(".tags").addClass("tags_web");  
        }
        else {
            $(".menu_web").removeClass("menu_web00");
            $(".search").removeClass("s_web");   
            $(".menu").removeClass("menu_web0");  
            $(".link, .tags").removeClass("menu_web01");   
            $(".link").removeClass("link_web");  
            $(".tag1").removeClass("tag1_web"); 
            $(".tags").removeClass("tags_web");  
        }
    });
    
});  