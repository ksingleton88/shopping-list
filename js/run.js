$(document).ready(function () {
	$('#button').click(function() {
		var toAdd =$("input[name=checkListItem]").val();
		$(".list").append("<li class='item'>" + " " + toAdd + "</li>");
	});

	$(document).on('click', '.list-items', function() {
		$(this).remove();
	});
});