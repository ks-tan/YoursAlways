$(document).ready(function(){

	$('.page_title').fadeIn("slow");
	$('.letter_container').fadeIn("slow");

	addSuperplaceholderStyling();
    $(".letter_body").autoGrow();

    addLetterSendListener();

});

function addLetterSendListener(){
    $('.send').click(function(event){
    	event.preventDefault();
    	var addresser = $('.addresser').val();
		var addressee = $('.addressee').val();
    	var regards = $('.regards').val();
    	var letterBody = $('.letter_body').val();
    	var action = $('.letter_form').attr('action');
		if (addresser && addressee && regards && letterBody){
			$('.letter_form').submit();
		} else {
			$('.send_denied').fadeIn('slow');
			$('.continue').click(function(){
				$('.send_denied').fadeOut('fast');
			});
		}
    });
}

function addSuperplaceholderStyling(){
	superplaceholder({
		el: dear,
		sentences: [ 'Lois', 'Andy', 'Jack', 'Emma' ],
		options: {
			loop: true,
			showCursor: true,
			startOnFocus: true,
			sentenceDelay: 2000,
			letterDelay: 100
		}
	});

	superplaceholder({
		el: regards,
		sentences: [ 'With Love,', 'Cheers,', 'Faithfully Yours,', 'Sincerely Yours,' ],
		options: {
			loop: true,
			showCursor: true,
			startOnFocus: true,
			sentenceDelay: 2000,
			letterDelay: 100
		}
	});

	superplaceholder({
		el: your_name,
		sentences: [ 'your name' ],
		options: {
			loop: true,
			showCursor: true,
			startOnFocus: true,
			sentenceDelay: 2000,
			letterDelay: 100
		}
	});

	superplaceholder({
		el: letter_form,
		sentences: [ 'Roses are red; Violets are blue...' ],
		options: {
			loop: true,
			showCursor: true,
			startOnFocus: true,
			sentenceDelay: 2000,
			letterDelay: 100
		}
	});
}