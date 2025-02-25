(function() {
	"use strict";

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
            height: 540,
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
			height: 538,
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
	
})();