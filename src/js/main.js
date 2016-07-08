var chart = (function() {

	var data = {
			width: 700,
			height: 400,
			axisX: [1, 2, 3, 4, 5, 6, 7],
			axisY: ['20%', '40%', '60%', '80%', '100%'],

			fill: [35.5, 48, 11, 26, 99, 100, 83],
			fillColor: "#b5cb85"
		},

		canvas, 
		ctx,
		scaleX = 0,
		scaleY = 0,
		strY = "百分比";

	var init = function(data) {
		canvas = document.getElementById('chart');

		canvas.width = data.width;
		canvas.height = data.height;

		scaleX = canvas.width / (data.axisX.length + 3);
		scaleY = canvas.height / (data.axisY.length + 3);

		ctx = canvas.getContext('2d');

		drawX(data.axisX);
		drawY(data.axisY);
		drawBg(data.axisY);

		drawRect(data.fill, data.fillColor);

	};

	var drawRect = function(fill, color) {

		ctx.beginPath();

		var len = fill.length;
		for (var i = 0; i < len; i++) {


			ctx.fillStyle = color;
			var w = scaleX / 2,
				h = fill[i] * (data.axisY.length * scaleY) / 100,
				x = 1.5 * scaleX + scaleX * i,
				y = canvas.height - scaleY - h - 1;

			ctx.fillRect(x, y, w, h);
			ctx.fill();

		};

		ctx.closePath();

	}

	var drawX = function(axisX) {
		ctx.beginPath();

		ctx.moveTo(scaleX, canvas.height - scaleY);
		ctx.lineTo(canvas.width - scaleX, canvas.height - scaleY);

		var len = axisX.length;
		var fontSize = 15;
		for (var i = 0; i < len; i++) {
			ctx.font = "normal normal bold " + fontSize + "px 微软雅黑";
			ctx.fillStyle = "#285ea6";

			var x = scaleX * (i + 2) - scaleX / 4 - fontSize / 4,
				y = canvas.height - scaleY + 20;
			ctx.fillText(axisX[i], x, y);

		};

		ctx.stroke();
		ctx.closePath();

		drawArrow(canvas.width - scaleX, canvas.height - scaleY, false);

	}

	var drawY = function(axisY) {
		ctx.beginPath();

		ctx.moveTo(scaleX, scaleY);
		ctx.lineTo(scaleX, canvas.height - scaleY);

		var len = axisY.length;
		var fontSize = 15;
		for (var i = 0; i < len; i++) {
			ctx.font = "normal normal bold " + fontSize + "px 微软雅黑";
			ctx.fillStyle = "#285ea6";

			var x = scaleX - fontSize * 3.5,
				y = canvas.height - scaleY * (i + 2) + fontSize / 3;
			ctx.fillText(axisY[i], x, y);
			
		};

		ctx.stroke();
		ctx.fillText(strY, scaleX - 50, scaleY - 20);
		ctx.closePath();

		drawArrow(scaleX, scaleY, true);

	}

	var drawArrow = function(left, top, flag) {
		var arrowWidth = 5,
			arrowHeight = 10;

		ctx.beginPath();
		ctx.moveTo(left, top);
		if(flag){
			ctx.lineTo(left + arrowWidth, top);
			ctx.lineTo(left, top - arrowHeight);
			ctx.lineTo(left - arrowWidth, top);
		}else{
			ctx.lineTo(left, top - arrowWidth);
			ctx.lineTo(left + arrowHeight, top);
			ctx.lineTo(left, top + arrowWidth);
		}
		
		ctx.fillStyle = "#666";
		ctx.fill();
		ctx.closePath();

	}

	var drawBg = function(axisY) {
		var len = axisY.length;

		ctx.beginPath();
		ctx.fillStyle = "#fff";

		for (var i = 0; i < len; i++) {
			if (i % 2 == 0) {
				ctx.fillRect(scaleX + 1, scaleY * (i + 2) - 1, canvas.width - 2 * scaleX - 5, scaleY);
				ctx.fill();
			};
		};

		ctx.closePath();

	}

	init(data);

})();

var brokenLine = (function() {

	var data = {
			width: 700,
			height: 600,
			axisX: [1, 2, 3, 4, 5, 6, 7, 8],
			axisY: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],

			fill: [35.5, 40, 11, 26, 99, 100, 83, 101],
			fillColor: "#b5cb85"
		},

		canvas, 
		ctx,
		scaleX = 0,
		scaleY = 0,
		strY = "百分比";

	var init = function(data) {
		canvas = document.getElementById('brokenLine');

		canvas.width = data.width;
		canvas.height = data.height;

		scaleX = canvas.width / (data.axisX.length + 3);
		scaleY = canvas.height / (data.axisY.length + 3);

		ctx = canvas.getContext('2d');

		drawX(data.axisX);
		drawY(data.axisY);
		drawBg(data.axisY, data.axisX);

		drawBrokenLine(data.fill, data.fillColor);

	};

	var drawBrokenLine = function(fill, color) {

		var len = fill.length,
			oldX = 0,
			oldY = 0;

		for (var i = 0; i < len; i++) {

			var h = fill[i] * (data.axisY.length * scaleY) / 100,
				x = 2 * scaleX + scaleX * i,
				y = canvas.height - scaleY - h - 1;

			ctx.beginPath();
			ctx.fillStyle = "#000";
			ctx.arc(x, y, 3, 0, 2 * Math.PI);
			ctx.fill();

			if (oldX == 0 && oldY == 0) {
				oldX = x;
				oldY = y;

				continue;
			}

			ctx.beginPath();
			ctx.strokeStyle = "#1C4982";
			ctx.moveTo(oldX, oldY);
			ctx.lineTo(x, y);
			ctx.stroke();

			oldX = x;
			oldY = y;

		};

		ctx.closePath();

	}

	var drawX = function(axisX) {
		ctx.beginPath();

		ctx.moveTo(scaleX, canvas.height - scaleY);
		ctx.lineTo(canvas.width - scaleX, canvas.height - scaleY);

		var len = axisX.length;
		var fontSize = 15;
		for (var i = 0; i < len; i++) {
			ctx.font = "normal normal bold " + fontSize + "px 微软雅黑";
			ctx.fillStyle = "#285ea6";

			var x = scaleX * (i + 2) - fontSize / 4,
				y = canvas.height - scaleY + 20;
			ctx.fillText(axisX[i], x, y);

		};

		ctx.stroke();
		ctx.closePath();

		drawArrow(canvas.width - scaleX, canvas.height - scaleY, false);

	}

	var drawY = function(axisY) {
		ctx.beginPath();

		ctx.moveTo(scaleX, scaleY);
		ctx.lineTo(scaleX, canvas.height - scaleY);

		var len = axisY.length;
		var fontSize = 15;
		for (var i = 0; i < len; i++) {
			ctx.font = "normal normal bold " + fontSize + "px 微软雅黑";
			ctx.fillStyle = "#285ea6";

			var x = scaleX - fontSize * 3.5,
				y = canvas.height - scaleY * (i + 2) + fontSize / 3;
			ctx.fillText(axisY[i], x, y);
			
		};

		ctx.stroke();
		ctx.fillText(strY, scaleX - 50, scaleY - 20);
		ctx.closePath();

		drawArrow(scaleX, scaleY, true);

	}

	var drawArrow = function(left, top, flag) {
		var arrowWidth = 5,
			arrowHeight = 10;

		ctx.beginPath();
		ctx.moveTo(left, top);
		if(flag){
			ctx.lineTo(left + arrowWidth, top);
			ctx.lineTo(left, top - arrowHeight);
			ctx.lineTo(left - arrowWidth, top);
		}else{
			ctx.lineTo(left, top - arrowWidth);
			ctx.lineTo(left + arrowHeight, top);
			ctx.lineTo(left, top + arrowWidth);
		}
		
		ctx.fillStyle = "#666";
		ctx.fill();
		ctx.closePath();

	}

	var drawBg = function(axisY, axisX) {
		var lenY = axisY.length;
		var lenX = axisX.length;

		ctx.beginPath();
		ctx.fillStyle = "#fff";

		for (var i = 0; i < lenY; i++) {
			if (i % 2 == 0) {
				ctx.fillRect(scaleX + 1, scaleY * (i + 2) - 1, canvas.width - 2 * scaleX - 5, scaleY);
				ctx.fill();
			};
		}

		for (var i = 0; i < lenX; i++) {
			
		}

		ctx.closePath();

	}

	init(data);

})();



