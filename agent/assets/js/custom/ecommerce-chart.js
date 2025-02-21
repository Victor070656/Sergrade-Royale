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
            height: 550,
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
                size: 230,
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
        // responsive: [{
        //     breakpoint: 576,
        //     plotOptions: {
        //         radar: {
        //             size: 100,
        //         }
        //     },
        // }],
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
            height: 127,
            width: 100,
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

    // Start Sales By Locations JS 
    am5.ready(function() {
        
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("sales_by_locations");
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);
        
        // Create the map chart
        // https://www.amcharts.com/docs/v5/charts/map-chart/
        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "translateY",
                projection: am5map.geoMercator()
            })
        );
        
        var cont = chart.children.push(
            am5.Container.new(root, {
                layout: root.horizontalLayout,
                x: 20,
                y: 40
            })
        );
        
        // Create series for background fill
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
        backgroundSeries.mapPolygons.template.setAll({
            fill: root.interfaceColors.get("alternativeBackground"),
            fillOpacity: 0,
            strokeOpacity: 0
        });
        
        // Add background polygon
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });
        
        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow
            })
        );
        
        // Create line series for trajectory lines
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
        var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        lineSeries.mapLines.template.setAll({
            stroke: root.interfaceColors.get("alternativeBackground"),
            strokeOpacity: 0.3
        });
        
        // Create point series for markers
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
        var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        var colorset = am5.ColorSet.new(root, {});
        
        pointSeries.bullets.push(function() {
            var container = am5.Container.new(root, {
                tooltipText: "{title}",
                cursorOverStyle: "pointer"
            });
            
            container.events.on("click", (e) => {
                window.location.href = e.target.dataItem.dataContext.url;
            });
            
            
            
            var circle = container.children.push(
                am5.Circle.new(root, {
                    radius: 4,
                    tooltipY: 0,
                    fill: colorset.next(),
                    strokeOpacity: 0
                })
            );
            
            
            var circle2 = container.children.push(
                am5.Circle.new(root, {
                    radius: 4,
                    tooltipY: 0,
                    fill: colorset.next(),
                    strokeOpacity: 0,
                    tooltipText: "{title}"
                })
            );
            
            circle.animate({
                key: "scale",
                from: 1,
                to: 5,
                duration: 600,
                easing: am5.ease.out(am5.ease.cubic),
                loops: Infinity
            });
            circle.animate({
                key: "opacity",
                from: 1,
                to: 0.1,
                duration: 600,
                easing: am5.ease.out(am5.ease.cubic),
                loops: Infinity
            });
            
            return am5.Bullet.new(root, {
                sprite: container
            });
        });
        
        var cities = [
            {
                title: "Brussels",
                latitude: 50.8371,
                longitude: 4.3676,
                url: "http://www.amcharts.com"
            },
            {
                title: "Copenhagen",
                latitude: 55.6763,
                longitude: 12.5681,
                url: "http://www.amcharts.com"
            },
            {
                title: "Paris",
                latitude: 48.8567,
                longitude: 2.351,
                url: "http://www.amcharts.com"
            },
            {
                title: "Reykjavik",
                latitude: 64.1353,
                longitude: -21.8952,
                url: "http://www.amcharts.com"
            },
            {
                title: "Moscow",
                latitude: 55.7558,
                longitude: 37.6176,
                url: "http://www.amcharts.com"
            },
            {
                title: "Madrid",
                latitude: 40.4167,
                longitude: -3.7033,
                url: "http://www.amcharts.com"
            },
            {
                title: "London",
                latitude: 51.5002,
                longitude: -0.1262,
                url: "http://www.amcharts.com"
            },
            {
                title: "Peking",
                latitude: 39.9056,
                longitude: 116.3958,
                url: "http://www.amcharts.com"
            },
            {
                title: "New Delhi",
                latitude: 28.6353,
                longitude: 77.225,
                url: "http://www.amcharts.com"
            },
            {
                title: "Tokyo",
                latitude: 35.6785,
                longitude: 139.6823,
                url: "http://www.amcharts.com"
            },
            {
                title: "Ankara",
                latitude: 39.9439,
                longitude: 32.856,
                url: "http://www.amcharts.com"
            },
            {
                title: "Buenos Aires",
                latitude: -34.6118,
                longitude: -58.4173,
                url: "http://www.amcharts.com"
            },
            {
                title: "Brasilia",
                latitude: -15.7801,
                longitude: -47.9292,
                url: "http://www.amcharts.com"
            },
            {
                title: "Ottawa",
                latitude: 45.4235,
                longitude: -75.6979,
                url: "http://www.amcharts.com"
            },
            {
                title: "Washington",
                latitude: 38.8921,
                longitude: -77.0241,
                url: "http://www.amcharts.com"
            },
            {
                title: "Kinshasa",
                latitude: -4.3369,
                longitude: 15.3271,
                url: "http://www.amcharts.com"
            },
            {
                title: "Cairo",
                latitude: 30.0571,
                longitude: 31.2272,
                url: "http://www.amcharts.com"
            },
            {
                title: "Pretoria",
                latitude: -25.7463,
                longitude: 28.1876,
                url: "http://www.amcharts.com"
            }
        ];
        
        for (var i = 0; i < cities.length; i++) {
            var city = cities[i];
            addCity(city.longitude, city.latitude, city.title, city.url);
        }
        
        function addCity(longitude, latitude, title, url) {
            pointSeries.data.push({
                url: url,
                geometry: { type: "Point", coordinates: [longitude, latitude] },
                title: title
            });
        }
        
        // Make stuff animate on load
        chart.appear(1000, 100);
        
    }); // end am5.ready()
      
})();