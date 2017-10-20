(function () {
	'use strict'

	var sources, articles, languages, categories;

	function initCategories () {
		categories = new Select({
			container: $('#categoriesContainer'),
			data: newsAPI.getCategories()
		});
		categories.init();
	}

	function initLanguages () {
		languages = new Select({
			container: $('#languageContainer'),
			data: newsAPI.getLanguages()
		});
		languages.init();
	}

	function initSources () {
		sources = new Sources({
			container: $('#sourcesList')
		});
		sources.init();
	}

	function initArticles () {
		articles = new Articles({
			container: $('#articlesContainer')
		});
		articles.init();
	}

	function updateComponent(component, err, data) {
		if (err) {
			console.log(err);
		} else {
			component.update(data);
		}
	}

	function initListeners () {
		$('.button').on('click', function () {
			var updateSourcesFn = updateComponent.bind(null, sources);
			newsAPI.getSources(categories.getValue(), languages.getValue(), updateSourcesFn);
		});
		sources.onSelect(function (sourceId) {
			var updateArticlesFn = updateComponent.bind(null, articles);
			newsAPI.getArticles(sourceId, updateArticlesFn);
		});
	}

	function init() {
		initCategories();
		initLanguages();
		initSources();
		initArticles();
		initListeners();
	}

	init();
})();
