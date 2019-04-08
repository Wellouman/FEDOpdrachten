console.log(sessionStorage);

if (sessionStorage.film == "GoT") {
    $('h2').text("Game of Thrones");
    $('#gotlink').html("<a href=\"detailpagina.html\"><img src=\"afbeeldingen/gameofthrones.jpg\" alt=\"GameOfThrones\" class=\"topfilms\"></a>")
}