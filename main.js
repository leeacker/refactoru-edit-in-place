$(document).on('ready', function() {

	var paragraph = $('.paragraph')
	var textbox = $('<textarea></textarea>')
	var This = $(this)

	var callerID = function(event){
		return event.target.parent.class;
	}
	var getClass = function(){
		return attr('class');
	};
	var getParent = function(){
		return callerID.parent();
	};
  
	$('.editable').on('click', paragraph, function(event){
		var pText = $(this).text();
		var pParent = callerID;
		console.log(pParent);
		console.log(pText);
		paragraph.remove();
		
		

	});

});