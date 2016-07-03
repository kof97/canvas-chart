var chart = (function() {

	var data = {
			width: 700,
			height: 400,
			axisX: [1, 2, 3, 4, 5, 6, 7],

		},

		canvas, 
		ctx,
		scaleX = 0,
		scaleY = 0;

	var init = function(data) {
		canvas = document.getElementById('chart');

		canvas.width = data.width;
		canvas.height = data.height;

		scaleX = canvas.width / 10;
		scaleY = canvas.height / 10;

		ctx = canvas.getContext('2d');

		drawX(data.axisX);



	};

	var drawX = function(axisX) {
		ctx.beginPath();

		ctx.moveTo(scaleX, canvas.height - scaleY);
		ctx.lineTo(canvas.width - scaleX, canvas.height - scaleY);



		ctx.stroke();


		ctx.closePath();

	}


	init(data);

})();


