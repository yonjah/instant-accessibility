var access = (function () {
	var firstSizeChange = true,
		getComputedStyle  = window.getComputedStyle || (function(){
			var styleProp = document.body.currentStyle ? 'currentStyle' : 'style';
			function capitalise(string) {
				return string.charAt(0).toUpperCase() + string.slice(1);
			}

			return function (el) {
				return {
					getPropertyValue: function(propName){
						propName = propName.split('-');
						if (propName[1]) {
							propName = propName[0] + capitalise(propName[1]);
						}
						return el[styleProp][propName];
					}
				};
			};
		}());

	function resetColors(){

		var elements = document.getElementsByTagName('*'),
			i,
			el,
			style,
			color,
			background,
			backgroundColor,
			backgroundImage;

		for (i in elements) {
			if (i == window.parseInt(i, 10)){
				el = elements[i];
				style = getComputedStyle(el);
				if (style){
					color = style.getPropertyValue('color');
					background = style.getPropertyValue('background');
					backgroundColor = style.getPropertyValue('background-color');
					backgroundImage = style.getPropertyValue('background-image');

					if (	(background && background !== 'transparent') ||
							(backgroundColor && backgroundColor !== 'transparent') ||
							(backgroundImage)
						) {
						el.style.backgroundColor = 'white';
						el.style.backgroundImage = 'none';
					}

					if (color) {
						if (el.tagName.toUpperCase() == 'A') {
							el.style.color = '#00E';
						} else {
							el.style.color = 'initial';
						}
					}
				}
			}
		}
	}

	function changeFontSize(magnitude){
		var elements = document.getElementsByTagName('*'),
			i,
			el,
			style,
			fontSize,
			size;

		if (firstSizeChange) { //we need to hard set the sizes on first run
			firstSizeChange = false;
			changeFontSize(1);
		}

		for (i in elements) {
			if (i == window.parseInt(i, 10)){
				el = elements[i];
				style = getComputedStyle(el);
				if (style){
					fontSize = style.getPropertyValue('font-size');

					if (fontSize && fontSize.indexOf('px') >= 0) { //only change pixel values
						size = window.parseFloat(fontSize, 10) * magnitude;
						el.style.fontSize = size + 'px';
					}
				}
			}
		}
	}

	function init (parent, sizeChange, extra) {
		var increaseSize = sizeChange || 1.2,
			decreaseSize = 1 / increaseSize,
			container = document.createElement('div'),
			colorSharpenEl = document.createElement('a'),
			sizeIncreaseEl = document.createElement('a'),
			sizeDecreaseEl = document.createElement('a'),
			i, el,
			links = [colorSharpenEl, sizeIncreaseEl, sizeDecreaseEl];

		parent = parent || document.body;
		extra = extra || {};

		container.style.background = 'white';
		container.style.fontSize = '16px';
		container.style.color = 'black';
		container.style.paddingTop = '5px';
		container.style.position = 'relative';
		container.style.zIndex = '1000';

		for (i in links) {
			el = links[i];
			el.href = '#';
			el.style.background = 'white';
			el.style.color = '#00E';
			el.style.border = 'solid 1px black';
			el.style.align = 'center';
			el.style.padding = '5px';
		}

		colorSharpenEl.innerHTML = extra.sharpenText || 'Sharpen';
		colorSharpenEl.title = extra.sharpenTitle || 'Sharpen Colors';
		colorSharpenEl.onclick = resetColors;

		sizeIncreaseEl.innerHTML = '+';
		sizeIncreaseEl.title = extra.increaseTitle ||  'Increase Size';
		sizeIncreaseEl.onclick = function () {
			changeFontSize(increaseSize);
		};

		sizeDecreaseEl.innerHTML = '-';
		sizeDecreaseEl.title = extra.decreaseTitle || 'Decrease Size';
		sizeDecreaseEl.onclick = function () {
			changeFontSize(decreaseSize);
		};

		container.appendChild(colorSharpenEl);
		container.appendChild(sizeIncreaseEl);
		container.appendChild(sizeDecreaseEl);
		document.body.insertBefore(container, document.body.childNodes[0]);
	}

	return {
		init: init,
		resetColors: resetColors,
		changeFontSize: changeFontSize
	};
}());