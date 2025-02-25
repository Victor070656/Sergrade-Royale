(function() {
	"use strict";

	// Impression Share
	var options = {
		series: [45],
		chart: {
			height: 150,
			type: 'radialBar',
			offsetY: 0,
			offsetX: 85
		},
		colors: ['#00B69B'],
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				offsetY: -10,
				dataLabels: {
					name: {
						fontSize: '12px',
						offsetY: 60,
						color: '#00B69B',
						offsetY: 40,
					},
					value: {
						offsetY: 76,
						fontSize: '15px',
						fontWeight: 600,
						color: '#5B5B98',
						offsetY: -10,
						formatter: function (val) {
							return val + "%";
						}
					}
				},
				hollow: {
					margin: 0,
					size: "40%",
					background: "#ffffff"
				},
			}
		},
		labels: ['Excellent'],
		responsive: [{
			breakpoint: 475,
			options: {
				chart: {
					offsetY: -15,
					offsetX: 25
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#impression_share"), options);
	chart.render();

    // Overview
	var options = {
		series: [
			{
				name: 'Cost',
				data: [25, 50, 30, 90, 90, 100, 40, 70, 50, 40, 35, 90]
			}, 
		],
		colors: ['#90C6E0'],
		chart: {
			type: 'bar',
			height: 250,
			stacked: true,
			toolbar: {
				show: false,
			}
		},
	  	dataLabels: {
			enabled: false,
		},
		grid: {
			borderColor: '#EDEFF5', 
			strokeDashArray: 8,
			xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			},
		},
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded',
            },
        },
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
				},
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
				},
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " K"
				}
			}
		},
	};
	var chart = new ApexCharts(document.querySelector("#overview"), options);
	chart.render();

})();