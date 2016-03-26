$(document).ready(function(){
	$('.page_title').fadeIn('slow');
	$('.letter_container').fadeIn('slow');
	addDeleteListener();
});

function addDeleteListener(){
	$('.delete').click(function(event){
		event.preventDefault();
		var letterId = $(this).attr('data-id');
		$('.deleteConfirmation').fadeIn('slow');
		addDeleteConfirmationListener(letterId);
	});
}

function addDeleteConfirmationListener(letterId){
	$('.delete_yes').click(function(){
		$('.delete').closest('#'+letterId).fadeOut('slow');
		$.ajax({
	      url: '/deleteLetter',
	      data: {_id: letterId},
	      method: 'POST'
	    });	
	    $('.deleteConfirmation').fadeOut('slow');
	});

	$('.delete_no').click(function(){
		$('.deleteConfirmation').fadeOut('slow');
	});
}