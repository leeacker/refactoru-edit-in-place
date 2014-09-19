$(document).on('ready', function() {

  	
  	var newParagraph = $('<p>');

  	$('textarea').hide();


	$('.editable').on('click', function(){
		if ($(this).find('p').css('display') !== 'none'){

		var thisText = $(this).find('p').text();

		$(this).find('textarea')
		.text(thisText)
		.show()
		.focus();

		$(this).find('p').remove();
		
		}
	});

	$('textarea').on('focus', function(){
		console.log('FOCUS!');

	});

	$('textarea').on('blur', function(){
		var thisText = $(this).val();
		var thisParent = $(this).closest('.editable');
		
			thisParent.prepend('<p>');

			$(this).siblings('p')
			.attr('class', 'paragraph')
			.text(thisText);

			$(this).hide();
		
	});



});