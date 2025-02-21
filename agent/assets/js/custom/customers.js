(function() {
	"use strict";

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

	// New Sessions JS
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
	var chart = new ApexCharts(document.querySelector("#new_sessions"), options);
	chart.render();
	
})();