(function() {
	"use strict";

	// Tickets Status
	var options = {
		series: [
			{
				name: "New Tickets ",
				data: [44, 42, 57, 86, 58, 55, 70],
			  },
			  {
				name: "Solved Tickets ",
				data: [74, 72, 87, 116, 88, 85, 100],
			  },
			  {
				name: "Marketing",
				data: [-34, -22, -37, -56, -21, -35, -60],
			  },
		],
		colors: ['#757FEF', '#2DB6F5'],
		chart: {
			type: 'bar',
			height: 248,
			stacked: true,
			toolbar: {
				show: false,
			}
		},
		plotOptions: {
            bar: {
				columnWidth: '15%',
				borderRadius: 4,
				
            },
        },
	  	dataLabels: {
			enabled: false,
		},
		grid: {
			borderColor: '#EDEFF5', 
			strokeDashArray: 5,
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
			show: false,
		},
		xaxis: {
			categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
			labels: {
				style: {
					colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8'],
				},
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8'],
				},
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "Status " + val + " K"
				}
			}
		},
	};
	var chart = new ApexCharts(document.querySelector("#tickets_status"), options);
	chart.render();

	// Customer Satisfaction
	var options = {
		series: [90, 80, 70, 60],
		chart: {
			height: 285,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: '22px',
					},
					value: {
						fontSize: '16px',
					},
					total: {
						show: true,
						label: 'Total',
						formatter: function (w) {
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							return 249
						}
					},
				},
				hollow: {
					margin: 10,
					size: '50%',
					background: 'transparent',
				},
			}
		},
	  	labels: ['Excellent', 'Good', 'Very Good', 'Unhappy'],
		colors: ['#757FEF', '#2DB6F5', '#8BD3F4', '#BFE9FF']
	};
	var chart = new ApexCharts(document.querySelector("#customer_satisfaction"), options);
	chart.render();

	// Avg. Speed Of Answer JS
    var options = {
        series: [
            {
                name: 'Avg. Speed Of Answer',
                data: [
                    {
                        x: '10 jan',
                        y: 5
                    },
                    {
                        x: '11 jan',
                        y: 6
                    },
                    {
                        x: '12 jan',
                        y: 4
                    },
                    {
                        x: '13 jan',
                        y: 7
                    },
                    {
                        x: '14 jan',
                        y: 4
                    },
                    {
                        x: '15 jan',
                        y: 4
                    },
                    {
                        x: '16 Jul',
                        y: 8
                    },
                    {
                        x: '17 jan',
                        y: 3
                    },
                    {
                        x: '18 jan',
                        y: 5
                    },
                    {
                        x: '19 jan',
                        y: 9
                    },
                ]
            }
        ],
        chart: {
            height: 145,
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        colors: ['#757FEF'],
        grid: {
			show: false
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
				show: false,
            },
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#avg_speed_Of_answer"), options);
    chart.render();

	// Resolved Time Max Complaint JS
    var options = {
        series: [
            {
                name: 'Resolved',
                data: [
                    {
                        x: '10 jan',
                        y: 9
                    },
                    {
                        x: '11 jan',
                        y: 5
                    },
                    {
                        x: '12 jan',
                        y: 3
                    },
                    {
                        x: '13 jan',
                        y: 8
                    },
                    {
                        x: '14 jan',
                        y: 4
                    },
                    {
                        x: '15 jan',
                        y: 4
                    },
                    {
                        x: '16 Jul',
                        y: 7
                    },
                    {
                        x: '17 jan',
                        y: 4
                    },
                    {
                        x: '18 jan',
                        y: 6
                    },
                    {
                        x: '19 jan',
                        y: 5
                    },
                ]
            }
        ],
        chart: {
            height: 145,
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        colors: ['#757FEF'],
        grid: {
			show: false
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
				show: false,
            },
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#resolved_time_max_complaint"), options);
    chart.render();

})();