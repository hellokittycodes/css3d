$(document).mousemove(function(e)
{
    var cube = document.getElementById("cube");
    $( "#box" ).on( "mousemove", function() 
    {
        $( ".card" ).first().animate(
        {
         //i want it to rotate here 
        }, 
        {
        duration: 1000,
        step: function( now, fx )
        {
            //idk what to do here but it's a start 
        }
        });
    });
});