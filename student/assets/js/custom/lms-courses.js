(function() {
	"use strict";

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
                    //fontSize: '13px',
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
                    //fontSize: '13px',
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
            height: 209,
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
            height: 300,
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

    // Course Completion 1
	var options = {
		chart: {
			height: 120,
			width: 100,
			type: "radialBar",
		},

		series: [25],
		colors: ["#757FEF"],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "55%",
					background: "#ffffff"
				},
				track: {
					background: "#A9C8FB"
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: "#4b9bfa",
						fontSize: ".625rem",
						show: false
					},
					value: {
						offsetY: 5,
						color: "#757FEF",
						fontSize: ".875rem",
						show: true,
						fontWeight: 600
					}
				}
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: ["Status"]
	};
	document.querySelector("#course_completion1").innerHTML = ""
	var chart = new ApexCharts(document.querySelector("#course_completion1"), options);
	chart.render();

	// Course Completion 2
	var options = {
		chart: {
			height: 120,
			width: 100,
			type: "radialBar",
		},

		series: [50],
		colors: ["#757FEF"],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "55%",
					background: "#ffffff"
				},
				track: {
					background: "#A9C8FB"
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: "#4b9bfa",
						fontSize: ".625rem",
						show: false
					},
					value: {
						offsetY: 5,
						color: "#757FEF",
						fontSize: ".875rem",
						show: true,
						fontWeight: 600
					}
				}
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: ["Status"]
	};
	document.querySelector("#course_completion2").innerHTML = ""
	var chart = new ApexCharts(document.querySelector("#course_completion2"), options);
	chart.render();

	// Course Completion 3
	var options = {
		chart: {
			height: 120,
			width: 100,
			type: "radialBar",
		},

		series: [30],
		colors: ["#757FEF"],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "55%",
					background: "#ffffff"
				},
				track: {
					background: "#A9C8FB"
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: "#4b9bfa",
						fontSize: ".625rem",
						show: false
					},
					value: {
						offsetY: 5,
						color: "#757FEF",
						fontSize: ".875rem",
						show: true,
						fontWeight: 600
					}
				}
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: ["Status"]
	};
	document.querySelector("#course_completion3").innerHTML = ""
	var chart = new ApexCharts(document.querySelector("#course_completion3"), options);
	chart.render();

	// Course Completion 4
	var options = {
		chart: {
			height: 120,
			width: 100,
			type: "radialBar",
		},

		series: [50],
		colors: ["#757FEF"],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "55%",
					background: "#ffffff"
				},
				track: {
					background: "#A9C8FB"
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: "#4b9bfa",
						fontSize: ".625rem",
						show: false
					},
					value: {
						offsetY: 5,
						color: "#757FEF",
						fontSize: ".875rem",
						show: true,
						fontWeight: 600
					}
				}
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: ["Status"]
	};
	document.querySelector("#course_completion4").innerHTML = ""
	var chart = new ApexCharts(document.querySelector("#course_completion4"), options);
	chart.render();

})();