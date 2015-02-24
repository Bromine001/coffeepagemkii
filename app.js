
//create a select and append To the #menu.
$(document).ready(function() {

$("#menu").append('<p class = "selector">Please select a page to navigate to</p>');
var Jselect = $('<select></select>');

$("#menu").append(Jselect);
//cycle over menu links in select box.

$("#menu a").each(function()
  {
    
            //make sure that we add the value of "selected" for the appropriate page.
      var text = $(this).text();
      var link = $(this);
            //create an option
      var Joption = $("<option></option>");
            //options value should be the htref
      Joption.val(link.attr("href"));
            //optons text shoudl be the text of the link
      Joption.text(text);
            //append opiton to select
      Jselect.append(Joption);
      Jselect.val("");
  });

Jselect.change(function()
{
   window.location = Jselect.val();
});
 
  }); //end of line