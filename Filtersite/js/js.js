/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
// console.log($("#fontgrootte :selected").val());

//verandert de text groote
$("#fontgrootte").change(function() {
    font = $("#fontgrootte :selected").val();
    // console.log(font);
    $(".grid_fotos p").css({"font-size": font});
})

$("#day").click(function() {
    $(".container").css({"background-color": "#3A8BC3"});
    $(".ondercontainer").css({"background-color": "#ffffff"});
    $(".grid_fotos p").css({"color": "black"});
});

$("#night").click(function() {
    $(".container").css({"background-color": "#2E3549"});
    $(".ondercontainer").css({"background-color": "#333333"});
    $(".grid_fotos p").css({"color": "white"});
});

$("#kolom1").click(function() {
    $(".grid_fotos").css({"grid-template-columns": "auto auto auto"});
})

$("#kolom").click(function() {
    $(".grid_fotos").css({"grid-template-columns": "22% 22% 22% 22%"});
})

