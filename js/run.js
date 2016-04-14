$(document).ready(function () {
	//$('#button').click(function() {
	//	var toAdd =$("input[name=checkListItem]").val();
	//	$(".list").append("<li class='item'>" + " " + toAdd + "</li>");
	//});



	// // $('li').hover(function(){
	// // 	$(this).append($('<span> X </span>') );
	// // }, function(){
	// // 	$(this).find('span:last').remove();
	// // 	}
	// // );

 //     $(document).on('mouseenter', 'li', function(){
	// 	$(this).append($('<span> X </span>') );
	// }).on('mouseleave', 'li', function(){
	// 	$(this).find('span:last').remove();
 //        });


	$(document).on('click', 'li', function() {
		$(this).remove();
	});




	//$(document).on('keydown', function(e) {
	//	var code = e.keyCode;
	//	var toAdd =$("input[name=checkListItem]").val();
	//		if(code == 13){
	//			event.preventDefault();
	//			$(".list").append("<li class='item'>" + " " + toAdd + "</li>");
	//			return false;
	//		};
  //
	//});
	
	$('form').submit(function (e) {
		e.preventDefault();
		var toAdd = $("input[name=checkListItem]").val();
		$(".list").append("<li class='item'>" + " " + toAdd + "</li>");
	});
});


//test
//when hovering over text, 'x' image does not show on new text elements. 