$(document).ready(function(){
    $("#hi").click(function(){
        alert("It is nice to meet you, too, UWU TOMATO.");
    });

    $(".img").click(function(){
        alert("What an adorable tomato.");
    });

    $(".freedom").click(function(){
        alert("Enjoy it while it lasts.");
    });

    $("#free").click(function(){
        alert("Congrats!");
    });

    $(".panic").click(function(){
        alert("To free you.");
    });

    $("#poppy").click(function(){
        alert("Poppy wants to play with you. Poppy's hair is red like your body.");
    });

    $("#knife").click(function(){
        alert("I swear it's not ketchup, don't worry!");
    });

    $("#axe").click(function(){
        alert("An old tool for chopping firewoods.");
    });

    $("#blender").click(function(){
        alert("Blend your worries away. Quick and nutritious.");
    });

    
    $("#wine").click(function(){
        alert("A glass of Chateau Lafite Rothschild 2002, for our most esteemed guest.");
    });


    $("#feel").click(function(){
        alert("Don't worry. Life is but a dream...");
    });

    $(".fainting").click(function(){
        alert("You won't be sad if you feel nothing.");
    });

    $("#sticky4").click(function(){
        alert("Sometimes I dream of being a human. --UWU");
    });

    $("#sticky3").click(function(){
        alert("I once fell in love with a strawberry, but she was too insecured about her acnes to stay with me. --UWU");
    });

    $("#sticky1").click(function(){
        alert("blingbling");
    });

    $("#sticky2").click(function(){
        alert("sparkspark");
    });

    $("#sticky6").click(function(){
        alert("See you soon.");
    });

    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

var mouseposition;

    $(window).width();
    var windowwidth =  $(window).width();


    $(document).on("mousemove",function(event){
         mouseposition = event.pageX;
         if (mouseposition > windowwidth*0.5) {
            console.log('mouse is to the right');
            $(".lefttomato").css("display","none");
            $(".righttomato").css("display","flex");
        } else {
            console.log('mouse is to the left');
            $(".righttomato").css("display","none");
            $(".lefttomato").css("display","flex");
        }
    
    })


    
});
   

