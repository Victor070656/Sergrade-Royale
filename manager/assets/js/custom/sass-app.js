(function() {
	"use strict";

	// Impression Share
	var options = {
		series: [45],
		chart: {
			height: 205,
			type: 'radialBar',
			offsetY: -10,
			offsetX: 85
		},
		colors: ['#2DB6F5'],
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				offsetY: -10,
				dataLabels: {
					name: {
						fontSize: '12px',
						offsetY: 60,
						color: '#2DB6F5',
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

	// Revenue Summary
	var options = {
		series: [{
			name: 'Inflation',
			data: [2.3, 3, 4, 10.5, 5.6, 5, 4, 2.8, 2, 1.3, 0.8, 0.3]
	  	}],
		chart: {
			height: 340,
			type: 'bar',
			offsetY: 30,
			toolbar: {
                show: false,
            }
	  	},
		plotOptions: {
			bar: {
				borderRadius: 10,
				dataLabels: {
					position: 'top',
				},
			}
		},
		colors: ['#757FEF'],
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "%";
			},
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ["#5B5B98"],
				fontWeight: 600
			}
		},
		grid: {
            borderColor: '#EDEFF5', 
            strokeDashArray: 7,
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
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			position: 'top',
			labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
                },
            },
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
			tooltip: {
				enabled: false,
			}
		},
		yaxis: {
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				formatter: function (val) {
					return val + "%";
				}
			}
		},
	};
	var chart = new ApexCharts(document.querySelector("#revenue_summary"), options);
	chart.render();

	// Sales Analytics
	var options = {
		series: [
		{
			data: [
				{
					x: 'Operations',
					y: [2800, 4500]
				},
				{
					x: 'Customer Success',
					y: [3200, 4100]
				},
				{
					x: 'Engineering',
					y: [2950, 7800]
				},
				{
					x: 'Marketing',
					y: [3000, 4600]
				},
				{
					x: 'Product',
					y: [3500, 4100]
				},
				{
					x: 'Data Science',
					y: [4500, 6500]
				},
				{
					x: 'Sales',
					y: [4100, 5600]
				}
			]
			}
		],
		chart: {
			height: 341,
			type: 'rangeBar',
			zoom: {
				enabled: false
			},
			toolbar: {
                show: false,
            }
	  	},
		colors: ['#2DB6F5', '#2DB6F5'],
		plotOptions: {
			bar: {
				horizontal: true,
				isDumbbell: true,
				dumbbellColors: [['#2DB6F5', '#757FEF']]
			}
		},
		legend: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				gradientToColors: ['#757FEF'],
				inverseColors: false,
				stops: [0, 100]
			}
		},
		grid: {
			borderColor: '#EDEFF5', 
            strokeDashArray: 7,
			xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			}
		},
		xaxis: {
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
					fontSize: '14px',
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
					fontSize: '14px',
                },
            }
        },
	};
	var chart = new ApexCharts(document.querySelector("#sales_analytics"), options);
	chart.render();

	// Audience Overview
	var options = {
		series: [
			{
				name: 'series1',
				data: [0, 60, 70, 110, 60, 70, 100, 85, 90, 70 ,77]
				
			},
			{
				name: 'series2',
				data: [50, 50, 60, 90, 50, 60, 90, 55, 44, 66, 55]
			},
			{
				name: 'series2',
				data: [90, 40, 50, 80, 40, 50, 80, 85, 98, 85, 46]
			}
		],
		colors: ["#8EB0DE", "#90C6E0", "#E7EBF5"],
		chart: {
			height: 350,
			type: 'area',
			toolbar: {
				show: false,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		grid: {
			borderColor: '#EDEFF5', 
            strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			}
		},
		xaxis: {
			type: 'datetime',
			categories: ["13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan"],
			labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
					fontSize: '14px',
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
					fontSize: '14px',
                },
            }
		},
		legend: {
			show: false,
		},
		tooltip: {
			x: {
			format: 'dd/MM/yy HH:mm'
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#audience_overview"), options);
	chart.render();

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