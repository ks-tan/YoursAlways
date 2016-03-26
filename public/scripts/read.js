$(document).ready(function(){
	$('.page_title').fadeIn('slow');
	$('.letter_container').fadeIn('slow');
	addDeleteListener();
});

function addDeleteListener(){
	$('.delete').click(function(event){
		event.preventDefault();
		var letterId = $(this).attr('data-id');
		$('.delete').closest('#'+letterId).fadeOut('slow');
		$.ajax({
	      url: '/deleteLetter',
	      data: {_id: letterId},
	      method: 'POST'
	    });
	});
}