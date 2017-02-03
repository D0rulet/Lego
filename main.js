$(window).ready(function(){
    // FIRT PAGE CARDS SELECTION
    var $card = $("#body-cards .cards img");
    var $howManyCards = [];    
    const viewportWidth = $(window).width();
    var $animationCards = 
      $card.click(function(){

        // MAKE THE ARRAY GREAT AGAIN WITH THE PATHS OF THE IMAGES
        $howManyCards.push($(this).attr("src"));

        // MAKE SURE ONE CARD DOESNT GET PICKED TWICE
        for (var i = 0; i < 1; i++){
            if ( $(this).attr("src") == $howManyCards[0]){
                $howManyCards.splice(1,1);
            }
        }
        console.log($howManyCards)

        // MAKE OTHER CARDS GREY
        if ($howManyCards.length < 3){

            // HOVER ANIMATION STAYS IN PLACE
            $(this).addClass("animate-cards");
        } 
        if ($howManyCards.length == 2){            
            $(".cards img").not(".animate-cards").css("opacity" , "0.3");
            if (viewportWidth < 760){
                $("#volgende-button-mobile").removeClass("hidden");
                $("#volgende-button-mobile").addClass("big-red-button");                
            } else {
                $("#volgende-button").removeClass("hidden");  
            }          
        }

        // SETTING UP THE IMAGES FOR PAGE 2
        $("#pic1 img").attr("src" , $howManyCards[0]);
        $("#pic2 img").attr("src" , $howManyCards[1]);
    });

    // VOLGENDE BUTTON
    var $volgende = $(".next");
    $volgende.click(function(){
        $("#dissappear").addClass("hidden");
        $("#appear").removeClass("hidden");
        $(".cards img").css("opacity" , "1");
        
    });  

    // GOING TO MOBILE IF RESIZED
    // I KNOW IT'S NOT THE BEST WAY TO DO IT - JUST A SHOW-OFF :)
    // $(window).resize(function(){
    // 	if ($(window).width() <= 760){	
    //         $(".cards img").attr("src" , function(arr) {
    //             return "img/mobile/pic" + (arr + 1) + ".png"; 
    //             });        
    //         } else {
    //             $(".cards img").attr("src" , function(arr) {
    //             return "img/pic" + (arr + 1) + ".png"; 
    //             });  
    //         }
    // }); 
});