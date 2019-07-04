$(document).on("click", "#hide-navbar, #show-navbar", function() {
    $("#navbarsExample04").toggleClass("d-none");
    $("#hide-navbar").toggleClass("d-none");
    $("#show-navbar").toggleClass("d-none");
})

function toggleSideNav() {
    if($(".sidenav").css("width") == "0px") {
        $(".sidenav").css({"width": "100%", "height": "auto", "margin-top": "50px"});
    }
    else {
        $(".sidenav").css({"width": "0", "margin-top": "0px" });
    }

}