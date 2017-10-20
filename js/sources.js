var Sources = (function () {
	'use strict'

	function getMarkup (sources) {
		var markup = '';
		sources.forEach(function (source) {
			markup += '<li class="source" data-id="' + source.id + '">' + source.name + '</li>';
		});
		return markup;
	}

	function Sources(config) {
		config.markupFn = getMarkup;
		Component.call(this, config);
	}

	Sources.prototype = new Component();

	Component.prototype.select = function (sourceToSelect) {
		var sourcesEl = this.container.find('li.source'),
			selectedCls = 'source-selected';
		sourcesEl.forEach(function (sourceEl) {
			sourcesEl.removeClass(selectedCls);
		});
		sourceToSelect.addClass(selectedCls);
	};

	Component.prototype.onSelect = function (callback) {
		var me = this;
		me.container.on('click', 'li', function () {
			var sourceEl = $(this),
				sourceId = sourceEl.data('id');

			me.select(sourceEl);
			callback(sourceId);
		});
	};

	return Sources;
})();
