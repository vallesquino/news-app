var Select = (function () {
	'use strict'

	function getMarkup(items) {
		var options = '',
			markup = '',
			selectStart = '<div class="select"><select id="categorySelector" placeholder="Select Category">',
			selectEnd = '</select></div>';

		if (!items.length) {
			markup = 'No results found';
		} else {
			items.forEach(function (item) {
				options += '<option value="' + item.id + '">' + item.name + '</option>';
			});
			markup = selectStart + options + selectEnd;
		}
		return markup;
	}

	function Select(config) {
		config.markupFn = getMarkup;
		Component.call(this, config);
	}

	Select.prototype = new Component();

	Component.prototype.getValue = function () {
		return this.container.find('select').val();
	};

	return Select;
})();
