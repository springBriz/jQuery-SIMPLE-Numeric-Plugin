/**
 * simple plugin allowing only numeric values in input boxes for jQuery
 * 
 * @author aprilbriz@gmail.com (@springBriz)
 */
(function($) {
	$.fn.numeric = function(options) {
		var options = $.extend({ useDelimiter: true }, options),
			delimiter = ',',
			orgValue,
			numericValue,
			reformedValue,
			newValue,
			i;
		
		$(this).keyup(function() {
			orgValue = this.value;
			newValue = numericValue = orgValue.replace(/[^0-9]/g, '');
			
			if (options.useDelimiter === true && numericValue.length > 3) {
				reformedValue = '';
				for (i = numericValue.length - 1; i >= 0 ; i--) {
					reformedValue = [numericValue[i], reformedValue].join('');
					if ((numericValue.length - i) % 3 === 0 && i !== 0) {
						reformedValue = [delimiter, reformedValue].join('');
					}
				}
				newValue = reformedValue;
			}

			if (orgValue !== newValue) {
				this.value = newValue;
			}
		});
	}
})(jQuery);
