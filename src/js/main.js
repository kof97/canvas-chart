var chart = (function() {

	var data = {
			width: 700,
			height: 400,
			axisX: [1, 2, 3, 4, 5, 6, 7],
			axisY: ['20%', '40%', '60%', '80%', '100%'],

			fill: [35.5, 48, 11, 26, 99, 88, 67],
			fillColor: "#b5cb85"
		},

		canvas, 
		ctx,
		scaleX = 0,
		scaleY = 0;

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
		var len = fill.length;
		for (var i = 0; i < len; i++) {


		};
		
	}

	var drawX = function(axisX) {
		ctx.beginPath();

		ctx.moveTo(scaleX, canvas.height - scaleY);
		ctx.lineTo(canvas.width - scaleX, canvas.height - scaleY);

		var len = axisX.length;
		for (var i = 0; i < len; i++) {
			ctx.font = "normal normal bold 14px 微软雅黑";
            ctx.fillStyle = "#285ea6";

			ctx.fillText(axisX[i], scaleX * (i + 2), canvas.height - scaleY + 20, 24);



		};

		ctx.stroke();


		ctx.closePath();

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

            var x = scaleX - fontSize * 2.5;
            var y = canvas.height - scaleY * (i + 2) + fontSize / 3;
			ctx.fillText(axisY[i], x, y);
            
		};

		ctx.stroke();


		ctx.closePath();

	}

	var drawBg = function(axisY) {
		var len = axisY.length;

		ctx.beginPath();
		ctx.fillStyle = "#fff";

		for (var i = 0; i < len; i++) {
			if (i % 2 == 0) {
				ctx.fillRect(scaleX + 1, scaleY * (i + 2), canvas.width - 2 * scaleX, scaleY);
                ctx.fill();
			};
		};

		ctx.closePath();

	}

	init(data);

})();


