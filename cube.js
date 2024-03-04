$(document).ready(function () 
{
    var rotation = 0;
 
    $('.box').mousemove(function (e) 
    {
       var centerX = $(this).width() / 2;
       var mouseY = e.pageX - $(this).offset().left;
       var rotateValue = (mouseY - centerX) / 5;
       var centerY = $(this).width() / 2;
       var mouseX = e.pageY - $(this).offset().left;
       var rotateValue = (mouseX - centerY) / 5;
       $(this).css('transform', 'rotateY(' + rotateValue + 'deg)');
       $(this).css('transform', 'rotateX(' + rotateValue + 'deg)');
    });
}); 
