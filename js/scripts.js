jQuery(function() {
    $( ".btncell" ).click(function() {
        console.log('cell btn clicked');
        $(".field-cell div").show(600);
        $(".field-email div").hide(600);
    });
    $( ".btnemail" ).click(function() {
        console.log('email btn clicked');
        $(".field-cell div").hide(600);
        $(".field-email div").show(600);
    });

    $("#nx-account-setup a").click(function(){
        console.log("next button is clicked");
        $(".nx-account-setup").show();
        $(".nx-address").hide();
        $(".nx-vehicles").hide();
        $(".setup-content ul li").removeClass("current");
        $(this).parent("li").addClass("current");
    });

    $("#nx-address a").click(function(){
        console.log("next button is clicked");
        $(".nx-account-setup").hide();
        $(".nx-address").show();
        $(".nx-vehicles").hide();
        $(".setup-content ul li").removeClass("current");
        $(this).parent("li").addClass("current");
    });

    $("#nx-vehicle a").click(function(){
        console.log("next button is clicked");
        $(".nx-account-setup").hide();
        $(".nx-address").hide();
        $(".nx-vehicles").show();
        $(".setup-content ul li").removeClass("current");
        $(this).parent("li").addClass("current");
    });

    $(".nx-next").click(function(){
        console.log("next button is clicked");
        $(".nx-account-setup").hide();
        $(".nx-address").show();
        $(".nx-vehicles").hide();
        $(".setup-content ul li").removeClass("current");
        $("#nx-address").addClass("current");
    });
    $(".nx-next2").click(function(){
        console.log("next2 button is clicked");
        $(".nx-account-setup").hide();
        $(".nx-address").hide();
        $(".nx-vehicles").show();
        $(".setup-content ul li").removeClass("current");
        $("#nx-vehicle").addClass("current");
    });
});