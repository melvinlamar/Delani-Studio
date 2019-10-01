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
  
    $("#button-color").click(function(event){
      var name = $("#name").val();
      alert(name + " Thanks for your response!");
      event.preventDefault();
     });
     $('.A').hover(function () {
      $(this).animate({opacity:'0.8'});
    },
   function () {
     $(this).animate({opacity:'0'});
   });
   });
    $(".A").hide();
    $(".view").hover(function(){
      $(this).children(".A").toggle();
    });
   
 
