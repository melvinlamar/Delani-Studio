$(document).ready(function(){
    $(".hidden").hide();
     $("#part1,#design").click(function(){
         $(this).children(".hidden").slideToggle();
         $(this).children("#design img").slideToggle();
     });
     // $("#part2,#development").click(function(){
     //     $("#part2").slideToggle();
     //     $("#development").slideToggle();
     // });
     // $("#part3,#product").click(function(){
     //     $("#part3").slideToggle();
     //     $("#product").slideToggle();
    //  });
  
    