let x = 1;

$("#toevoegen").click(function() {

    if (x == 1) {

        $("#toevoegen").html("<i class=\"fas fa-check\"></i>");
        $("#pop-up").show();
        $("#pop-up").text("Game of Thrones is toegevoegd aan je speellijst!");
        $("#pop-up").css({"animation": "slide 1s forwards"});

        sessionStorage.setItem("film", "GoT");

        setTimeout(function() {
            $("#pop-up").hide();
        },2500)

    x = 0

    } else { 

        x = 1

        $("#toevoegen").html("<i class=\"fas fa-plus\"></i>");
        $("#pop-up").show();
        $("#pop-up").text("Game of Thrones is verwijderd uit je afspeellijst!");
        $("#pop-up").css({"animation": "slide 1s forwards"});

        sessionStorage.removeItem("film");

        setTimeout(function() {
            $("#pop-up").hide();
        },2500)

    }
});