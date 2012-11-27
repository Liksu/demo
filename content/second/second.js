/**
 * Created by Peter Bortchagovsky.
 * 26.09.11 14:31
 */

/**
 * render widget
 * @param {widget_object} wo
 */
function(wo) {
	var self = this;
	CM.W.apply(self);
	$.extend(true, self.wo, wo);

	self.ready = function() {
		self.use('reload');
	};

	self.checkers['test'] = function($el, value) {
		$el.toggleClass('filled', !!value);
		return true;
	};

	self.checkers[null] = function($el, value) {
		return true;
	};
}
