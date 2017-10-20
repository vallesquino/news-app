var newsAPI = (function () {
	'use strict'
	var categories = [{
			id: 'business',
			name: 'Business'
		}, {
			id: 'entertainment',
			name: 'Entertainment'
		}, {
			id: 'gaming',
			name: 'Gaming'
		}, {
			id: 'general',
			name: 'General'
		}, {
			id: 'music',
			name: 'Music'
		}, {
			id: 'politics',
			name: 'Politics'
		}, {
			id: 'science-and-nature',
			name: 'Science And Nature'
		}, {
			id: 'sport',
			name: 'Sport'
		}, {
			id: 'technology',
			name: 'Technology'
		}],
		language = [{
			id: 'en',
			name: 'English'
		}, {
			id: 'de',
			name: 'German'
		}, {
			id: 'fr',
			name: 'France'
		}];

	function doAjaxRequest(params) {
		$.ajax({
			url: params.url,
			dataType: 'json',
			success: function (data) {
				var error = data.status !== 'ok';
				params.callback(error, error ? data.message : data[params.rootParam]);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				params.callback(true, errorThrown);
			}
		});
	}

	function getCategories() {
		return categories;
	}

	function getLanguages() {
		return language;
	}

	function getSources(category, language, callback) {
		var url = 'https://newsapi.org/v1/sources?' + (category ? '&category=' + category : '') + (language ? '&language=' + language : '');
		doAjaxRequest({
			url: url,
			rootParam: 'sources',
			callback: callback
		});
	}

	function getArticles(source, callback) {
		var url = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=76d389f054e44dbf8272bdf25f03049e';
		doAjaxRequest({
			url: url,
			rootParam: 'articles',
			callback: callback
		});
	}

	return {
		getCategories: getCategories,
		getLanguages: getLanguages,
		getSources: getSources,
		getArticles: getArticles
	};

})();
