//commented that out let's see if attempt two works 
/* $(document).mousemove(function(e)
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
}); */ 

// ATTEMPT TWO 
jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('.box').mousemove(function(e)
{
    $('.rotate;').animate
    ({ 
        //idk what to do here 
    })

}); 