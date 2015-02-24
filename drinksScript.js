//firstly remove the default formatting.
$("dd").toggle();

var Jexplanation = $("<div id = exp><img class = 'capcat' alt= 'A cappuchino cat' src = 'cpics/cappCat.JPG'></div>")

$("dl").addClass("buttonList");

$("dt").each(function()
{
    $(this).removeClass("default");
    $(this).addClass("button");
    
});

$('.main').append (Jexplanation);

$('.button').click(function()
{
    var HTML ="<h2>"
    HTML += $(this).html();
    HTML += "</h2>"
    HTML += $(this).next().html();
    $("#exp").html(HTML);
    
    console.log(HTML);
    
});
//add functionality to the buttons
    //include a "selected" class
    //display info when clicked. 


//Try using ".nextUntil("dt", "dd")"

