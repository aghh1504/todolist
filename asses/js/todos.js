// check off specific todos by clickng
$("ul").on("click", "li",function(){
  $(this).toggleClass("completed");
});

//detele
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
   e.stopPropagation();
});

//function for input
$("input[type='text']").keypress(function(e){
  if(e.which ===13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
  }
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
