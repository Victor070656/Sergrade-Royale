(function() {
	"use strict";

	// Total Users JS 
    var options = {
        series: [15, 30, 30, 25],
        chart: {
            type: 'pie',
            height: 283,
        },
        labels: ['Target', 'Last Week', 'Last Month', 'Today'],
        colors: ['#E040FB', '#E9EFFC', '#757FEF', '#90C6E0'],
        legend: {
			show: false,
            position: 'bottom',
            horizontalAlign: 'center', 
            fontWeight: 400,
            fontFamily: 'Open Sans',
            fontSize: '14',
            labels: {
                colors: ['#5B5B98'],
            },
            markers: {
                width: 14,
                height: 14,
                strokeWidth: 0,
                fillColors: undefined,
                radius: 5,
                customHTML: undefined,
                onClick: undefined,
                offsetX: -2,
                offsetY: 0,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
			enabled: false,
            style: {
                fontSize: '14px',
                fontFamily: 'Open Sans',
                fontWeight: '400',
                colors: ['#fff'],
            },
            dropShadow: {
                enabled: false,
            },
            
        },
		yaxis: {
			labels: {
			  	show: false,
				formatter: function (val) {
					return val + "%";
				}
			}
		},
    };
    var chart = new ApexCharts(document.querySelector("#total_users"), options);
    chart.render();

	// Completed Tasks JS
	var options = {
		series: [{
			name: 'Completed Tasks',
			data: [22, 17, 25, 14, 18, 13, 20, 25, 17]
		}],
		chart: {
			type: 'bar',
			height:250,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				borderRadiusApplication: 'end',
				horizontal: false,
				columnWidth: "26%"
			}
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false
		},
		colors: ['#757FEF'],
		xaxis: {
			labels: {
				show: false,
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
				show: false,
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
	var chart = new ApexCharts(document.querySelector("#completed_tasks"), options);
	chart.render();

	// Tasks Performance
	var options = {
		series: [100, 90, 80, 70],
		chart: {
			height: 286,
			type: 'radialBar',
	  	},
		labels: ['Completed', 'Active', 'Assigned', 'Pending'],
		colors: ['#757FEF', '#9EA5F4', '#C8CCF9', '#F1F2FD'], 
		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 10,
					size: '30%',
					background: 'transparent',
					image: undefined,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						show: false,
					}
				}
			}
		},
		stroke: {
			lineCap: "round",
		},
		legend: {
			show: true,
			floating: true,
			position: 'left',
			horizontalAlign: 'center', 
			fontWeight: 400,
			fontFamily: 'Open Sans',
			fontSize: '14',
			offsetX: 0,
			offsetY: 0,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				width: 12,
				height: 12,
				strokeWidth: 0,
				fillColors: undefined,
				radius: 10,
				customHTML: undefined,
				onClick: undefined,
				offsetX: -2,
				offsetY: 0,
				size: 0
			},
			itemMargin: {
				horizontal: 10,
				vertical: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				vertical: 3
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#tasks_performance"), options);
	chart.render();

})();