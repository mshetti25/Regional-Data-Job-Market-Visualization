var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "LinkedIn Easy Apply by Job Type"
	},
	axisX: {
		interval: 1,
	},
	axisY:{
	   title: "Percentage of Jobs",
	   suffix: "%"
      },
	toolTip: {
		shared: true
	},
	legend: {
		verticalAlign: "center",
		horizontalAlign: "left"
	},
	data: [{
		type: "stackedColumn100",
		name: "Can Easy Apply",
		showInLegend: true,
		xValueFormatString: "",
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
			{ x: 1, y: 5, label: "Data Analyst" },
			{ x: 2, y: 5, label: "Data Engineer" },
			{ x: 3, y: 3, label: "Data Scientist" }
		]
	}, 
	{
		type: "stackedColumn100",
		name: "Cannot Easy Apply",
		showInLegend: true,
		xValueFormatString: "",
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
			{ x: 1, y: 95, label: "Data Analyst" },
			{ x: 2, y: 95, label: "Data Engineer" },
			{ x: 3, y: 97, label: "Data Scientist" }
		]
	}]
});
chart.render();