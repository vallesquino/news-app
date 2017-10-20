var Articles = (function () {
	'use strict'

	function formatDateToUTC (dateISOString) {
		var date = new Date(dateISOString);
		return date.toUTCString();
	}

	function getMarkup (articles) {
		var markup = '';

		articles.forEach(function (article) {
			markup += '<section class="article">' +
			'<h2 class="article-header">' + article.title + '</h2>' +
			'<div class="article-body">' +
				'<div class="article-image">' +
					'<img src="' + article.urlToImage + '" alt="' + article.title + '">' +
				'</div>' +
				'<div class="article-content">' +
					'<span>' + formatDateToUTC(article.publishedAt) + '</span>' +
					'<article>' + article.description + '</article>' +
				'</div>' +
			'</div>' +
		'</section>';
		});

		return markup;
	}

	function Articles(config) {
		config.markupFn = getMarkup;
		Component.call(this, config);
	}

	Articles.prototype = new Component();

	return Articles;
})();
