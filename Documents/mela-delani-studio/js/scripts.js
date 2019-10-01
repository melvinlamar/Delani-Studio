$(document).ready(function(){
    $(".hidden").hide();
     $("#part1,#design").click(function(){
         $(this).children(".hidden").slideToggle();
         $(this).children("#design img").slideToggle();
     });
     
  