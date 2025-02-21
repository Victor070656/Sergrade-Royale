(function() {
	"use strict";

	// Stats Box 1
    var options = {
        series: [
            { name: "Sessions", 
                data: [100, 50, 90, 60, 99] 
            }
        ],
        chart: { 
            type: "line", 
            height: 20, 
			width: 55,
            sparkline: { 
                enabled: !0 
            } 
        },
        stroke: { 
            curve: "smooth", 
            width: 1
        },
        colors: ["#8676FF"],
        tooltip: { 
            fixed: { 
                enabled: !1 
            }, 
            x: { 
                show: !1 
            }, 
            marker: { 
                show: !1 
            } 
        },
    },
    chart = new ApexCharts(
        document.querySelector("#stats_box_1"), 
        options
    );
    chart.render();

	// Stats Box 2
    var options = {
        series: [
            { name: "Orders", 
                data: [100, 50, 90, 60, 99] 
            }
        ],
        chart: { 
            type: "line", 
            height: 20, 
			width: 55,
            sparkline: { 
                enabled: !0 
            } 
        },
        stroke: { 
            curve: "smooth", 
            width: 1
        },
        colors: ["#F765A3"],
        tooltip: { 
            fixed: { 
                enabled: !1 
            }, 
            x: { 
                show: !1 
            }, 
            marker: { 
                show: !1 
            } 
        },
    },
    chart = new ApexCharts(
        document.querySelector("#stats_box_2"), 
        options
    );
    chart.render();

	// Stats Box 3
    var options = {
        series: [
            { name: "Earning $K", 
                data: [100, 50, 90, 60, 99] 
            }
        ],
        chart: { 
            type: "line", 
            height: 20, 
			width: 55,
            sparkline: { 
                enabled: !0 
            } 
        },
        stroke: { 
            curve: "smooth", 
            width: 1
        },
        colors: ["#2DB6F5"],
        tooltip: { 
            fixed: { 
                enabled: !1 
            }, 
            x: { 
                show: !1 
            }, 
            marker: { 
                show: !1 
            } 
        },
    },
    chart = new ApexCharts(
        document.querySelector("#stats_box_3"), 
        options
    );
    chart.render();

	// Impression Share
	var options = {
		series: [45],
			chart: {
			type: 'radialBar',
			offsetY: -10,
			width: 140,
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			radialBar: {
				startAngle: -100,
				endAngle: 100,
				track: {
					background: "#F3F3F3",
					strokeWidth: '97%',
					margin: 1, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: 2,
						left: 0,
						color: '#999',
						opacity: 1,
						blur: 2
					}
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						offsetY: -1,
						fontSize: '15px',
						horizontalAlign: 'center', 
						fontWeight: 600,
						fontFamily: 'Open Sans',
						labels: {
							colors: ['#5B5B98'],
						},
					}
				}
			}
		},
		grid: {
			padding: {
				top: -10,
			}
		},
		labels: ['Average Results'],
		colors: ['#00B69B'],
		responsive: [{
			breakpoint: 576,
			options: {
				chart: {
					width: 100,
				},
			},
		}],
		responsive: [{
			breakpoint: 1750,
			options: {
				chart: {
					width: 100,
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#impression_share"), options);
	chart.render();

	// Goal Completions
	var options = {
		series: [68],
			chart: {
			type: 'radialBar',
			offsetY: -10,
			width: 140,
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			radialBar: {
				startAngle: -100,
				endAngle: 100,
				track: {
					background: "#F3F3F3",
					strokeWidth: '97%',
					margin: 1, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: 2,
						left: 0,
						color: '#999',
						opacity: 1,
						blur: 2
					}
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						offsetY: -1,
						fontSize: '15px',
						horizontalAlign: 'center', 
						fontWeight: 600,
						fontFamily: 'Open Sans',
						labels: {
							colors: ['#5B5B98'],
						},
					}
				}
			}
		},
		grid: {
			padding: {
				top: -10,
			}
		},
		labels: ['Average Results'],
		colors: ['#757FEF'],
		responsive: [{
			breakpoint: 576,
			options: {
				chart: {
					width: 100,
				},
			},
		}],
		responsive: [{
			breakpoint: 1750,
			options: {
				chart: {
					width: 100,
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#goal_completions"), options);
	chart.render();

	// Conversions
	var options = {
		series: [60],
			chart: {
			type: 'radialBar',
			offsetY: -10,
			width: 150,
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			radialBar: {
				startAngle: -100,
				endAngle: 100,
				track: {
					background: "#F3F3F3",
					strokeWidth: '97%',
					margin: 1, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: 2,
						left: 0,
						color: '#999',
						opacity: 1,
						blur: 2
					}
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						offsetY: -1,
						fontSize: '15px',
						horizontalAlign: 'center', 
						fontWeight: 600,
						fontFamily: 'Open Sans',
						labels: {
							colors: ['#5B5B98'],
						},
					}
				}
			}
		},
		grid: {
			padding: {
				top: -10,
			}
		},
		labels: ['Average Results'],
		colors: ['#EE368C'],
		responsive: [{
			breakpoint: 576,
			options: {
				chart: {
					width: 100,
				},
			},
		}],
		responsive: [{
			breakpoint: 1750,
			options: {
				chart: {
					width: 100,
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#conversions"), options);
	chart.render();

	// Visits By Day JS
	var options = {
		series: [{
			name: 'Visits by Day',
			data: [22, 17, 25, 14, 18, 13, 20, 25, 22, 25, 10]
		}],
		chart: {
			type: 'bar',
			height:100,
			width: 270,
			offsetX: 5,
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
		colors: ['#FFBA69'],
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
					return "Today " + val + " K"
				}
			}
		},
		responsive: [{
			breakpoint: 1750,
			options: {
				chart: {
					width: 150,
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#visits_by_day"), options);
	chart.render();

	// Net Income JS
	var options = {
		series: [{
			name: 'Net Income',
			data: [22, 17, 25, 14, 18, 13, 20, 25, 22, 25, 10]
		}],
		chart: {
			type: 'bar',
			height:100,
			width: 270,
			offsetX: 5,
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
		colors: ['#FFBA69'],
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
		responsive: [{
			breakpoint: 1750,
			options: {
				chart: {
					width: 150,
				},
			},
		}]
	};
	var chart = new ApexCharts(document.querySelector("#net_income"), options);
	chart.render();

	// Audience Overview
    var options = {
        series: [{
                name: "New Visitors",
                data: [0, 30 , 25, 50, 20, 40, 25, 80]
            },
            {
                name: "Unique Visitors",
                data: [80, 25 , 40, 20, 50, 25, 30, 0]
            },
            {
                name: "Previous Visitors",
                data: [45, 45 , 90, 45, 90, 45, 90, 45]
            },
        ],
        chart: {
            height: 330,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
		markers: {
            size: 5,
            strokeWidth: 0,
            hover: {
              size: 5
            }
        },
        colors: ['#757FEF', '#2DB6F5', '#F765A3'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
			width: 2,
        },
        grid: {
            borderColor: '#EDEFF5', 
            strokeDashArray: 8,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center', 
            fontWeight: 400,
            fontFamily: 'Open Sans',
            fontSize: '14',
            labels: {
                colors: ['#5B5B98'],
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
            },
			itemMargin: {
                horizontal: 10,
                vertical: 0
            },
        },
        xaxis: {
            categories: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan'],
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
    };
    var chart = new ApexCharts(document.querySelector("#audience_overview"), options);
    chart.render();

	// Sales Analytics
	var options = {
		series: [
			{
				name: 'Cost',
				data: [10, 5, 10, 7, 22, 13, 13]
			}, 
			{
				name: 'Sales',
				data: [5, 8, 7, 8, 5, 5, 8]
			}, 
			{
				name: 'Revenue',
				data: [4, 2, 8, 15, 4, 5, 8]
			}
		],
		colors: ['#165BAA', '#A155B9', '#F765A3'],
		chart: {
			type: 'bar',
			height: 230,
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
		legend: {
			position: 'top',
			horizontalAlign: 'center', 
			fontWeight: 400,
			fontFamily: 'Open Sans',
			fontSize: '14',
			labels: {
				colors: ['#5B5B98'],
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
			},
			itemMargin: {
				horizontal: 10,
				vertical: 0
			},
		},
		xaxis: {
			categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
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
	var chart = new ApexCharts(document.querySelector("#sales_analytics"), options);
	chart.render();

	// Total Revenue
	var options = {
		series: [65],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#757FEF'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					name: {
						show: true,
						offsetY: -10,
						color: "#5B5B98",
						fontSize: "16px",
						fontFamily: 'Open Sans',
						fontWeight: 600
					},
					value: {
						offsetY: 5,
						color: "#00B69B",
						fontSize: "16px",
						show: true,
						fontWeight: 600
					}
				}
			},
		},
	  	labels: ['Revenue'],
	};
	var chart = new ApexCharts(document.querySelector("#total_revenue"), options);
	chart.render();

	// Sessions By Ccountries
	var options = {
		series: [{
			data: [1260, 1554, 497, 1126, 908, 1512, 604, 1047, 1354, 826]
	  	}],
		chart: {
			type: 'bar',
			height: 512,
			toolbar: {
				show: false,
			}
	  	},
		colors: ['#757FEF'],
		plotOptions: {
			bar: {
				borderRadius: 4,
				borderRadiusApplication: 'end',
				horizontal: true,
				columnWidth: "26%"
			}
		},
		dataLabels: {
			enabled: false
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
					show: true,
				}
			},
		},
		xaxis: {
			categories: ['United State', 'China', 'Canada', 'Indonesia', 'Russia', 'Bangladesh', 'Brazil', 'United Kingdom', 'Vietnam', 'India'],
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
					colors: ['#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98',],
				},
			}
		},
	};
	var chart = new ApexCharts(document.querySelector("#sessions_by_countries"), options);
	chart.render();

	// Revenue Report JS
    var options = {
        series: [
            {
                name: 'Earning',
                data: [40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30,],
            }, {
                name: 'Expenses',
                data: [50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40,],
            },
        ],
        chart: {
            height: 560,
            type: 'radar',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
			position: 'bottom',
			horizontalAlign: 'center', 
			fontWeight: 400,
			fontFamily: 'Open Sans',
			fontSize: '14',
			labels: {
				colors: ['#5B5B98'],
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
			},
			itemMargin: {
				horizontal: 10,
				vertical: 0
			},
		},
        plotOptions: {
            radar: {
                size: 230,
                polygons: {
                    strokeColors: '#CFD8DC',
                }
            }
        },
        colors: ['#757FEF', '#FF8A65'],
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['January', 'Fubruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8'],
                    fontSize: '14px',
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function(val, i) {
                    if (i % 1 === 0) {
                    return val
                    } else {
                        return ''
                    }
                },
                style: {
                    colors: ['#260944', '#260944', '#260944', '#260944', '#260944', '#260944', '#260944'],
                    fontSize: '10px',
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        responsive: [{
            breakpoint: 576,
			options: {
				chart: {
					height: 300,
				},
				plotOptions: {
					radar: {
						size: 80,
					}
				},
			}
            
        }],
    };
    var chart = new ApexCharts(document.querySelector("#revenue_report"), options);
    chart.render();

	// Total Transactions
	var options = {
		series: [
			{
				name: 'This Week',
				data: [50, 40, 30, 50, 20, 13, 25]
			}, 
			{
				name: 'Last Week',
				data: [40, 60, 50, 40, 30, 25, 40]
			}, 
			{
				name: 'Performance',
				data: [30, 50, 58, 40, 30, 25, 40]
			},
			{
				name: 'cost',
				data: [50, 40, 20, 25, 35, 40, 40]
			}
		],
		colors: ['#1CCAB8', '#BDEEE1', '#D0F1FA', '#EDF0F4'],
		plotOptions: {
            bar: {
				columnWidth: '30%',
				borderRadius: 4,
            },
        },
		chart: {
			type: 'bar',
			height: 278,
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
			show: false,
		},
		legend: {
			position: 'bottom',
			horizontalAlign: 'center', 
			fontWeight: 400,
			fontFamily: 'Open Sans',
			fontSize: '14',
			labels: {
				colors: ['#5B5B98'],
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
			},
			itemMargin: {
				horizontal: 10,
				vertical: 0
			},
		},
		xaxis: {
			categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
			labels: {
				show: false,
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
				show: false,
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
	var chart = new ApexCharts(document.querySelector("#total_transactions"), options);
	chart.render();

	// Sessions Device
	var options = {
		series: [40],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#757FEF'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: true,
				}
			},
		},
		labels: ['Device']
	};
	var chart = new ApexCharts(document.querySelector("#sessions_device"), options);
	chart.render();

	// New Vs. Returning
	var options = {
		series: [75],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#EE368C'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: true,
				}
			},
		},
		labels: ['New']
	};
	var chart = new ApexCharts(document.querySelector("#new_vs_returning"), options);
	chart.render();

	// Language
	var options = {
		series: [74],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#2DB6F5'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: true,
				}
			},
		},
		labels: ['Language']
	};
	var chart = new ApexCharts(document.querySelector("#language"), options);
	chart.render();

	// Gender
	var options = {
		series: [55],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#00B69B'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: true,
				}
			},
		},
		labels: ['Gender']
	};
	var chart = new ApexCharts(document.querySelector("#gender"), options);
	chart.render();

	// visitors Age
	var options = {
		series: [40],
		chart: {
			height: 280,
			type: 'radialBar',
	  	},
		colors: ['#F7931A'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: true,
				}
			},
		},
		labels: ['Visitors']
	};
	var chart = new ApexCharts(document.querySelector("#visitors_age"), options);
	chart.render();

})();