(function() {
	"use strict";

    // Audience Overview JS
    var options = {
        series: [{
            name: 'Orders',
            data: [22, 17, 25, 14, 18, 13, 20, 25, 17]
        }, {
            name: 'Net Revenue',
            data: [18, 13, 21, 13, 15, 6, 18, 22, 15]
        }, {
            name: 'Refunds',
            data: [8, 6, 5, 8, 9, 5, 13, 10, 8]
        }],
        chart: {
            type: 'bar',
            height:250,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                endingShape: 'rounded',
                borderRadius: 2,
            },
        },
        grid: {
            borderColor: '#EDEFF5', 
            strokeDashArray: 4,
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
            horizontalAlign: 'left', 
            fontWeight: 400,
            fontFamily: 'Open Sans',
            fontSize: '14',
            labels: {
                colors: ['#5B5B98'],
            },
            markers: {
                width: 8,
                height: 8,
                strokeWidth: 0,
                fillColors: undefined,
                radius: 5,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 1,
                offsetY:-1,
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#757FEF', '#2DB6F5', '#EE368C'],
        stroke: {
            show: true,
            width: 6,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
                },
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
                    return "$ " + val + " thousands"
                }
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#audience_overview"), options);
    chart.render();

    // Visits By Day JS
    var options = {
        series: [
            {
                name: 'Page Per Visit 7.56',
                data: [30, 35, 55, 40, 10, 20, 50],
            }, {
                name: 'Avg. Visit Duration 05:48',
                data: [20, 50, 45, 20, 50, 60, 30],
            },
        ],
        chart: {
            height: 250,
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
            itemMargin: {
                horizontal: 5,
                vertical: 5,
            },
            markers: {
                width: 8,
                height: 8,
                strokeWidth: 0,
                fillColors: undefined,
                radius: 5,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 1,
                offsetY:-1,
            }
        },
        plotOptions: {
            radar: {
                size: 100,
                polygons: {
                    strokeColors: '#CFD8DC',
                }
            }
        },
        colors: ['#2DB6F5', '#E289F2'],
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
            plotOptions: {
                radar: {
                    size: 100,
                }
            },
        }],
    };
    var chart = new ApexCharts(document.querySelector("#visits_by_day"), options);
    chart.render();

    // Revenu Status JS
    var options = {
        series: [
            {
                name: 'Revenu Status',
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
            height: 263,
            type: 'area',
            toolbar: {
                show: false,
            }
        },
        colors: ['#757FEF'],
        grid: {
            borderColor: '#EDEFF5', 
            strokeDashArray: 4,
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
        dataLabels: {
            enabled: false,
            formatter: (val) => {
                return val / 1 + 'K'
            }
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " K"
                }
            }
        },
        xaxis: {
            categories: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan'],
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8'],
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
                formatter: (val) => {
                    return '$' + val / 1 + 'K'
                },
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8'],
                    fontSize: '14px',
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#revenu_status"), options);
    chart.render();

    // Ratings Chart JS 
    var options = {
        series: [33, 33, 34],
        labels: ['Good', 'Better', 'Best'],
        colors: ["#3730A3", "#757FEF", "#38BDF8"],
        chart: {
            height: 300,
            type: 'donut'
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            width: 2,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {
                    size: '70%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: false,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -4
                        },
                        value: {
                            show: true,
                            fontSize: '28px',
                            color: '#260944',
                            fontFamily: 'Open Sans',
                            fontWeight: 700,
                            offsetY: 8,
                            formatter: function (val) {
                                return val + "k"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Live Visit',
                            fontSize: '15px',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            color: '#5B5B98',
                        }
                    }
                }
            }
        },
    };
    document.querySelector("#ratings_chart").innerHTML = " ";
    var chart = new ApexCharts(document.querySelector("#ratings_chart"), options);
    chart.render();
    function Candidates() {
        chart.updateOptions({
            colors: ["rgb(" + myVarVal + ")", "#23b7e5"],
        })
    };

    // Start Live Visits on Our Site JS 
    var options = {
        series: [72, 56],
        labels: ['Domestic - 72%', 'International - 56%'],
        colors: ["#EE368C", "#757FEF"],
        chart: {
            height: 280,
            type: 'donut'
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'bottom',
            offsetY: 0,
            fontSize: '14px',
            fontFamily: 'Open Sans',
            fontWeight: 400,
            labels: {
                colors: '#919AA3',
            },
            markers: {
                width: 15,
                height: 15,
                strokeWidth: 0,
                fillColors: undefined,
                radius: 5,
                customHTML: undefined,
                onClick: undefined,
                offsetX: -2,
                offsetY: 1,
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {
                    size: '70%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -4
                        },
                        value: {
                            show: true,
                            fontSize: '28px',
                            color: '#260944',
                            fontFamily: 'Open Sans',
                            fontWeight: 700,
                            offsetY: 8,
                            formatter: function (val) {
                                return val + "k"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Live Visit',
                            fontSize: '15px',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            color: '#5B5B98',
                        }
                    }
                }
            }
        },
    };
    document.querySelector("#live_visits_on_our_site").innerHTML = " ";
    var chart = new ApexCharts(document.querySelector("#live_visits_on_our_site"), options);
    chart.render();
    function Candidates() {
        chart.updateOptions({
            colors: ["rgb(" + myVarVal + ")", "#23b7e5"],
        })
    };

    // Audience Overview2
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
            height: 235,
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
    var chart = new ApexCharts(document.querySelector("#audience_overview2"), options);
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
			height: 265,
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
			height: 510,
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
			height: 350,
			type: 'radialBar',
	  	},
		colors: ['#757FEF'],
		plotOptions: {
			radialBar: {
				hollow: {
					size: '50%',
				},
				dataLabels: {
					show: false,
				}
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#sessions_device"), options);
	chart.render();

    // Task Distribution
    var options = {
		series: [14, 19, 16, 9],
		chart: {
			type: 'polarArea',
			height: 355,
		},
		labels: ['API', 'Frontend', 'Backend', 'Design'],
		colors: ['#9C27B0', '#99B0CB', '#7986CB', '#5E35B1'],
		stroke: {
			colors: ['#818093'],
			width: 0,
		},
		fill: {
			opacity: 0.9
		},
		legend: {
            position: 'bottom',
            horizontalAlign: 'center', 
            fontWeight: 400,
            fontFamily: 'Open Sans',
            fontSize: '16',
            labels: {
                colors: ['#5B5B98'],
            },
            markers: {
                width: 12,
                height: 12,
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
        yaxis: {
            tickAmount: 7,
            labels: {
                style: {
                    colors: ['#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98', '#5B5B98'],
                    fontSize: '15px',
                    fontFamily: 'Open Sans',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
		grid: {
            borderColor: '#000', 
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
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					fontSize: '12',
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#task_distribution"), options);
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

    // Issues Summary
	var options = {
		series: [{
			data: [
				[1327359600000,30.95],
				[1327446000000,31.34],
				[1327532400000,31.18],
				[1327618800000,31.05],
				[1327878000000,31.00],
				[1327964400000,30.95],
				[1328050800000,31.24],
				[1328137200000,31.29],
				[1328223600000,31.85],
				[1328482800000,31.86],
				[1328569200000,32.28],
				[1328655600000,32.10],
				[1328742000000,32.65],
				[1328828400000,32.21],
				[1329087600000,32.35],
				[1329174000000,32.44],
				[1329260400000,32.46],
				[1329346800000,32.86],
				[1329433200000,32.75],
				[1329778800000,32.54],
				[1329865200000,32.33],
				[1329951600000,32.97],
				[1330038000000,33.41],
				[1330297200000,33.27],
				[1330383600000,33.27],
				[1330470000000,32.89],
				[1330556400000,33.10],
				[1330642800000,33.73],
				[1330902000000,33.22],
				[1330988400000,31.99],
				[1331074800000,32.41],
				[1331161200000,33.05],
				[1331247600000,33.64],
				[1331506800000,33.56],
				[1331593200000,34.22],
				[1331679600000,33.77],
				[1331766000000,34.17],
				[1331852400000,33.82],
				[1332111600000,34.51],
				[1332198000000,33.16],
				[1332284400000,33.56],
				[1332370800000,33.71],
				[1332457200000,33.81],
				[1332712800000,34.40],
				[1332799200000,34.63],
				[1332885600000,34.46],
				[1332972000000,34.48],
				[1333058400000,34.31],
				[1333317600000,34.70],
				[1333404000000,34.31],
				[1333490400000,33.46],
				[1333576800000,33.59],
				[1333922400000,33.22],
				[1334008800000,32.61],
				[1334095200000,33.01],
				[1334181600000,33.55],
				[1334268000000,33.18],
				[1334527200000,32.84],
				[1334613600000,33.84],
				[1334700000000,33.39],
				[1334786400000,32.91],
				[1334872800000,33.06],
				[1335132000000,32.62],
				[1335218400000,32.40],
				[1335304800000,33.13],
				[1335391200000,33.26],
				[1335477600000,33.58],
				[1335736800000,33.55],
				[1335823200000,33.77],
				[1335909600000,33.76],
				[1335996000000,33.32],
				[1336082400000,32.61],
				[1336341600000,32.52],
				[1336428000000,32.67],
				[1336514400000,32.52],
				[1336600800000,31.92],
				[1336687200000,32.20],
				[1336946400000,32.23],
				[1337032800000,32.33],
				[1337119200000,32.36],
				[1337205600000,32.01],
				[1337292000000,31.31],
				[1337551200000,32.01],
				[1337637600000,32.01],
				[1337724000000,32.18],
				[1337810400000,31.54],
				[1337896800000,31.60],
				[1338242400000,32.05],
				[1338328800000,31.29],
				[1338415200000,31.05],
				[1338501600000,29.82],
				[1338760800000,30.31],
				[1338847200000,30.70],
				[1338933600000,31.69],
				[1339020000000,31.32],
				[1339106400000,31.65],
				[1339365600000,31.13],
				[1339452000000,31.77],
				[1339538400000,31.79],
				[1339624800000,31.67],
				[1339711200000,32.39],
				[1339970400000,32.63],
				[1340056800000,32.89],
				[1340143200000,31.99],
				[1340229600000,31.23],
				[1340316000000,31.57],
				[1340575200000,30.84],
				[1340661600000,31.07],
				[1340748000000,31.41],
				[1340834400000,31.17],
				[1340920800000,32.37],
				[1341180000000,32.19],
				[1341266400000,32.51],
				[1341439200000,32.53],
				[1341525600000,31.37],
				[1341784800000,30.43],
				[1341871200000,30.44],
				[1341957600000,30.20],
				[1342044000000,30.14],
				[1342130400000,30.65],
				[1342389600000,30.40],
				[1342476000000,30.65],
				[1342562400000,31.43],
				[1342648800000,31.89],
				[1342735200000,31.38],
				[1342994400000,30.64],
				[1343080800000,30.02],
				[1343167200000,30.33],
				[1343253600000,30.95],
				[1343340000000,31.89],
				[1343599200000,31.01],
				[1343685600000,30.88],
				[1343772000000,30.69],
				[1343858400000,30.58],
				[1343944800000,32.02],
				[1344204000000,32.14],
				[1344290400000,32.37],
				[1344376800000,32.51],
				[1344463200000,32.65],
				[1344549600000,32.64],
				[1344808800000,32.27],
				[1344895200000,32.10],
				[1344981600000,32.91],
				[1345068000000,33.65],
				[1345154400000,33.80],
				[1345413600000,33.92],
				[1345500000000,33.75],
				[1345586400000,33.84],
				[1345672800000,33.50],
				[1345759200000,32.26],
				[1346018400000,32.32],
				[1346104800000,32.06],
				[1346191200000,31.96],
				[1346277600000,31.46],
				[1346364000000,31.27],
				[1346709600000,31.43],
				[1346796000000,32.26],
				[1346882400000,32.79],
				[1346968800000,32.46],
				[1347228000000,32.13],
				[1347314400000,32.43],
				[1347400800000,32.42],
				[1347487200000,32.81],
				[1347573600000,33.34],
				[1347832800000,33.41],
				[1347919200000,32.57],
				[1348005600000,33.12],
				[1348092000000,34.53],
				[1348178400000,33.83],
				[1348437600000,33.41],
				[1348524000000,32.90],
				[1348610400000,32.53],
				[1348696800000,32.80],
				[1348783200000,32.44],
				[1349042400000,32.62],
				[1349128800000,32.57],
				[1349215200000,32.60],
				[1349301600000,32.68],
				[1349388000000,32.47],
				[1349647200000,32.23],
				[1349733600000,31.68],
				[1349820000000,31.51],
				[1349906400000,31.78],
				[1349992800000,31.94],
				[1350252000000,32.33],
				[1350338400000,33.24],
				[1350424800000,33.44],
				[1350511200000,33.48],
				[1350597600000,33.24],
				[1350856800000,33.49],
				[1350943200000,33.31],
				[1351029600000,33.36],
				[1351116000000,33.40],
				[1351202400000,34.01],
				[1351638000000,34.02],
				[1351724400000,34.36],
				[1351810800000,34.39],
				[1352070000000,34.24],
				[1352156400000,34.39],
				[1352242800000,33.47],
				[1352329200000,32.98],
				[1352415600000,32.90],
				[1352674800000,32.70],
				[1352761200000,32.54],
				[1352847600000,32.23],
				[1352934000000,32.64],
				[1353020400000,32.65],
				[1353279600000,32.92],
				[1353366000000,32.64],
				[1353452400000,32.84],
				[1353625200000,33.40],
				[1353884400000,33.30],
				[1353970800000,33.18],
				[1354057200000,33.88],
				[1354143600000,34.09],
				[1354230000000,34.61],
				[1354489200000,34.70],
				[1354575600000,35.30],
				[1354662000000,35.40],
				[1354748400000,35.14],
				[1354834800000,35.48],
				[1355094000000,35.75],
				[1355180400000,35.54],
				[1355266800000,35.96],
				[1355353200000,35.53],
				[1355439600000,37.56],
				[1355698800000,37.42],
				[1355785200000,37.49],
				[1355871600000,38.09],
				[1355958000000,37.87],
				[1356044400000,37.71],
				[1356303600000,37.53],
				[1356476400000,37.55],
				[1356562800000,37.30],
				[1356649200000,36.90],
				[1356908400000,37.68],
				[1357081200000,38.34],
				[1357167600000,37.75],
				[1357254000000,38.13],
				[1357513200000,37.94],
				[1357599600000,38.14],
				[1357686000000,38.66],
				[1357772400000,38.62],
				[1357858800000,38.09],
				[1358118000000,38.16],
				[1358204400000,38.15],
				[1358290800000,37.88],
				[1358377200000,37.73],
				[1358463600000,37.98],
				[1358809200000,37.95],
				[1358895600000,38.25],
				[1358982000000,38.10],
				[1359068400000,38.32],
				[1359327600000,38.24],
				[1359414000000,38.52],
				[1359500400000,37.94],
				[1359586800000,37.83],
				[1359673200000,38.34],
				[1359932400000,38.10],
				[1360018800000,38.51],
				[1360105200000,38.40],
				[1360191600000,38.07],
				[1360278000000,39.12],
				[1360537200000,38.64],
				[1360623600000,38.89],
				[1360710000000,38.81],
				[1360796400000,38.61],
				[1360882800000,38.63],
				[1361228400000,38.99],
				[1361314800000,38.77],
				[1361401200000,38.34],
				[1361487600000,38.55],
				[1361746800000,38.11],
				[1361833200000,38.59],
				[1361919600000,39.60],
			]
	  	}],
		chart: {
			id: 'area-datetime',
			type: 'area',
			height: 248,
			zoom: {
				autoScaleYaxis: true
			},
			toolbar: {
				show: false,
			}
	  	},
		colors: ['#757FEF'], 
		dataLabels: {
			enabled: false
		},
		markers: {
			size: 0,
			style: 'hollow',
		},
		xaxis: {
			type: 'datetime',
			min: new Date('01 Mar 2012').getTime(),
			tickAmount: 6,
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
			},
		},
		grid: {
			borderColor: '#EDEFF5', 
			strokeDashArray: 4,
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
		tooltip: {
			x: {
				format: 'dd MMM yyyy'
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [0, 100]
			}
		},
	};
	var chart = new ApexCharts(document.querySelector("#issues_summary"), options);
	chart.render();

    // Your Progress
    var options = {
        series: [{
                name: "Theory",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8]
            },
            {
                name: "Practice",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51]
            },
        ],
        chart: {
            height: 250,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        colors: ['#757FEF', '#2DB6F5'],
        dataLabels: {
            enabled: false,
            formatter: (val) => {
                return val / 1 + 'Hr'
            }
        },
        stroke: {
            curve: 'smooth',
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
                width: 8,
                height: 8,
                strokeWidth: 0,
                fillColors: undefined,
                radius: 5,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 1,
                offsetY:-1,
            },
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan'],
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
                },
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                    return '' + val / 1 + 'Hr'
                },
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8',],
                },
            }
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + " (Mins)"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " Per Session"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            ]
        },
    };
    var chart = new ApexCharts(document.querySelector("#your_progress"), options);
    chart.render();

    // Hours Spent JS
    var options = {
        series: [
            {
                name: 'Hours spent',
                data: [10, 15, 4, 18, 11, 8, 17]
            },
        ],
        chart: {
            type: 'bar',
            height: 250,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded',
                borderRadius: 5,
            },
        },
        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir'],
            labels: {
                style: {
                    colors: ['#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', '#919AA3', ],
                },
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', ],
                },
            }
        },
        fill: {
            opacity: 1
        },
        colors: ['#757FEF'],
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
    };
    var chart = new ApexCharts(document.querySelector("#hours_spent"), options);
    chart.render();

    // Experience IQ JS
    var options = {
        series: [
            {
                name: 'Achivement',
                data: [44, 55, 41, 64, 22, 43, 21]
            }, 
            {
                name: 'Learning Path',
                data: [44, 55, 41, 64, 22, 43, 21]
            },
            {
                name: 'IQ Test Score',
                data: [53, 32, 33, 52, 13, 44, 32]
            }
        ],
        chart: {
            type: 'bar',
            height: 343,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
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
        colors: ['#757fef', '#2db6f5', '#ee368c'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [30, 20, 10, 0],
            labels: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', '#A9A9C8', ],
                },
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#experience_iq"), options);
    chart.render();

    // Active Course JS 
    var options = {
        series: [33, 45, 22],
        chart: {
            type: 'pie',
            height: 385,
        },
        labels: ['Courses Done', 'On Progress', 'To Do'],
        colors: ['#757fef', '#ee368c', '#2db6f5'],
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
    };
    var chart = new ApexCharts(document.querySelector("#active_course"), options);
    chart.render();

    // Start Live Visits on Our Site JS 
    var options = {
        series: [1234, 5648, 1234, 8520, 2000],
        labels: ['Bitcoin', 'Eathereum', 'Comp Bidr', 'Matic'],
        colors: ["#757FEF", "#2DB6F5", "#00B69B", "#F7931A", "#F4F4F4"],
        chart: {
            height: 280,
            type: 'donut'
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {
                    size: '87%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: 30,
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            color: '#260944',
                            fontFamily: 'Open Sans',
                            fontWeight: 700,
                            offsetY: -10,
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total value',
                            fontSize: '15px',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            color: '#5B5B98',
                            formatter: function (val) {
                                return '$' + "18636";
                            }
                        }
                    }
                }
            },
        },
        
    };
    document.querySelector("#my_profile").innerHTML = " ";
    var chart = new ApexCharts(document.querySelector("#my_profile"), options);
    chart.render();
    function Candidates() {
        chart.updateOptions({
            colors: ["rgb(" + myVarVal + ")", "#23b7e5"],
        })
    };

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

    // Revenue Summary
	var options = {
		series: [{
			name: 'Inflation',
			data: [2.3, 3, 4, 10.5, 5.6, 5, 4, 2.8, 2, 1.3, 0.8, 0.3]
	  	}],
		chart: {
			height: 245,
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
	var chart = new ApexCharts(document.querySelector("#sales_analytics2"), options);
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
			height: 340,
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
	var chart = new ApexCharts(document.querySelector("#audience_overview3"), options);
	chart.render();
      
})();