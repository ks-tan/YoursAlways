$(document).ready(function(){

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
	})

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
	})

    $(".letter_form").autoGrow();
});