var Component = (function () {
	'use strict'

	function Component(config) {
		var me = this;

		config = config || {};
		me.container = config.container;
		me.markupFn = config.markupFn;
		me.data = config.data || null;
	}

	Component.prototype.init = function () {
		var me = this;
		me.update(me.data);
	};

	Component.prototype.update = function (data) {
		var me = this,
			container = me.container;

		if (data) {
			container.empty();
			container.append(me.markupFn(data));
		}
	};

	return Component;
})();
