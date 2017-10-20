// @license Copyright (C) 2015 Neovici AB - Apache 2 License
(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tab-card',
		properties: {
			/**
			 * The z-depth of this element, from 0-5.
			 */
			elevation: {
				type: Number,
				computed: '_computeElevation(accordion)'
			}
		},

		behaviors: [
			Cosmoz.TabbedBehavior
		],

		/** Computes `elevation` depending on the `according` property.
		 *
		 * @param  {String} accordion The hex color
		 * @return {Number}           The CSS style
		 */
		_computeElevation: function (accordion) {
			return accordion ? 0 : 1;
		},

		/**
		 * Computes opened property of the included `iron-collapse`.
		 *
		 * @param  {Boolean} accordion   The accordion property
		 * @param  {Boolean} isSelected The isSelected property
		 * @returns {Boolean} True if not `accordion` or if `isSelected`
		 */
		_computeOpened: function (accordion, isSelected) {
			return !accordion || isSelected;
		},
	});
}());
