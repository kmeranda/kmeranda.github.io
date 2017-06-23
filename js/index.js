$(function() {
	var choices = [
		'web applications',
		'machine learning',
		'Python',
		'C++',
		'natural language processing',
		'neural networks',
		'making music',
		'compilers',
		'building software',
		'web graphics',
		'working on teams'
	];
	var currentChoice = 0;
	setInterval(function() {
		currentChoice = (currentChoice + 1) % choices.length;
		var $movingText = $('#moving-text');
		$movingText.slideUp('fast', function() {
			$movingText
				.html(choices[currentChoice])
				.slideDown('fast');
		});
	}, 8000);
});
